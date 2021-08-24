<template>
    <div class="p-grid">

        <div class="p-col-3">
            <Card>
                <template #title>
                    {{ publication.title }}
                </template>
                <template #content>
                    {{ publication.abstract }}
                </template>
                <template #footer>
                    More Information: <a class="doi" target="_blank" :href="realUrl">{{ publication.url }}</a>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card class="side">
                <template #title>
                    {{ Information }}
                </template>
                <template #content>
                    <table class="info">
                        <tr>
                            <td><h4>Date:</h4></td>
                            <td>{{ publication.pubDate }}</td>
                        </tr>
                        <tr>
                            <td><h4>Type:</h4></td>
                            <td>{{ publication.type }}</td>
                        </tr>
                        <tr>
                            <td><h4>Publisher:</h4></td>
                            <td>{{ publication.publisher }}</td>
                        </tr>
                    </table>

                    <h4>Authors:</h4>
                    <ul class="authors">
                        <li v-for="author in publication.authors" v-bind:key="author.name">
                            {{ author.name }}
                        </li>
                    </ul>

                    <h4>Subjects:</h4>
                    <ul class="subjects">
                        <li v-for="subject in publication.fieldsOfStudy" v-bind:key="subject.name">
                            {{ subject.name }}
                        </li>
                    </ul>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Stats
                </template>
                <template #content>
                    <div class="padding-left">
                        <h3>Score</h3>
                        <p class="padding-left">{{ localeNumber(scoreSum) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Tweet Count</h3>
                        <p class="padding-left">{{ localeNumber(tweetCount) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Tweet Author Count</h3>
                        <p class="padding-left">{{ localeNumber(authorCount) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Total Followers Reached</h3>
                        <p class="padding-left">{{ localeNumber(totalFollowers) }}</p>
                    </div>
                    <!-- total score, average score -->
                    <div class="padding-left">
                        <h3>Average Score per Tweet</h3>
                        <p class="padding-left">{{ localeNumber(scoreSum / tweetCount) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Tweets per Author</h3>
                        <p class="padding-left">{{ localeNumber(tweetCount / authorCount) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Followers per Author</h3>
                        <p class="padding-left">{{ localeNumber(totalFollowers / authorCount) }}</p>
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Entities
                </template>
                <template #content>
                    <publication-donut-chart :getter="entitiesGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-6">
            <Card>
                <template #title>
                    Authors
                </template>
                <template #content>
                    <MapChart v-if="renderMap" :countryData="countries"
                              highColor="#ff0000"
                              lowColor="#aaaaaa"
                              countryStrokeColor="#909090"
                              defaultCountryFillColor="#dadada"
                              @hoverCountry="hover"
                    />
                </template>
            </Card>
        </div>

        <div class="p-col-6 word-wrapper">
            <Card>
                <template #title>
                    Words
                </template>
                <template #content>
                    <word-cloud ref="worldCloud" v-if="render" :data="words" :fontSizeMapper="fontSizeMapper"></word-cloud>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Types
                </template>
                <template #content>
                    <publication-donut-chart :getter="typeGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Hashtags
                </template>
                <template #content>
                    <publication-donut-chart :getter="hashtagsGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Sources
                </template>
                <template #content>
                    <publication-donut-chart :getter="sourceGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Languages
                </template>
                <template #content>
                    <publication-donut-chart :getter="langGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-6">
            <Card>
                <template #title>
                    Time of Day
                </template>
                <template #content>
                    <publication-donut-chart :title="publication.doi" :getter="timeOfDayGetter" type="line"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-6">
            <Card>
                <template #title>
                    Tweets over Time
                </template>
                <template #content>
                    <publication-donut-chart :title="publication.doi" :dateFormat="true" :getter="timeGetter" type="line"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12">
            <DataTable :value="data" dataKey="_id" :paginator="true" :rows="10" :rowHover="true"
                       :loading="loading" :rowsPerPageOptions="[10,25,50]" @row-click="openTweet($event)">
                <template #empty>
                    No Events found.
                </template>
                <template #loading>
                    Loading Event data. Please wait.
                </template>
                <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable"
                        :key="col.field"></Column>
            </DataTable>
        </div>
    </div>

</template>

<script>

    import PublicationDonutChart from "../components/PublicationDonutChart";
    import PublicationService from "../services/PublicationService";
    import WordCloud from "../components/WordCloud";
    import MapChart from 'vue-map-chart'

    export default {
        name: 'Publication',
        components: {PublicationDonutChart, WordCloud, MapChart},
        data: () => ({
            publication: {},
            fontSizeMapper: word => Math.log2(word.value * 10) * 10,
            columns: [
                {field: '_id', header: 'id', sortable: false},
                {field: 'time_past', header: 'time_past', sortable: true},
                {field: 'name', header: 'name', sortable: true},
                {field: 'text', header: 'text', sortable: true},
                {field: 'source', header: 'source', sortable: true},
                {field: 'lang', header: 'lang', sortable: true},
                {field: 'tweet_type', header: 'tweet_type', sortable: true},
                {field: 'score', header: 'score', sortable: true},
                {field: 'contains_abstract', header: 'contains_abstract', sortable: true},
                {field: 'bot_rating', header: 'bot_rating', sortable: true},
            ],
            countries: [],
            data: [],
            words: [],
            render: false,
            renderMap: false,
            loading: true,
            tweetCount: '-',
            authorCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
        }), created() {
            console.log('created');
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        computed: {
            realUrl: function () {
                return 'http://' + this.publication.url
            },
        },
        methods: {
            openTweet(event) {
                console.log(event.data.conversation_id);
                window.open('https://twitter.com/pauljstorey/status/' + event.data.conversation_id, '_blank')
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            typeGetter() {
                return PublicationService.types(this.$route.params.p + "/" + this.$route.params.s)
            },
            sourceGetter() {
                return PublicationService.sources(this.$route.params.p + "/" + this.$route.params.s)
            },
            langGetter() {
                return PublicationService.lang(this.$route.params.p + "/" + this.$route.params.s)
            },
            timeOfDayGetter() {
                return PublicationService.timeOfDay(this.$route.params.p + "/" + this.$route.params.s)
            },
            entitiesGetter() {
                return PublicationService.entities(this.$route.params.p + "/" + this.$route.params.s)
            },
            hashtagsGetter() {
                return PublicationService.hashtags(this.$route.params.p + "/" + this.$route.params.s)
            },
            timeGetter() {
                return PublicationService.timeBinned(this.$route.params.p + "/" + this.$route.params.s)
            },
            hover(e) {
                if (!e) {
                    console.log(e)
                }
            },
            fetchData() {
                console.log('fetch data');

                this.loading = true;
                // todo check how many / can be in doi
                PublicationService.get(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        // console.log(response.data.data);
                        this.publication = response.data.data[0];
                        this.publication.url = 'doi.org/' + this.publication['doi'];
                        // console.log(this.publication);
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.twitter(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.loading = false;
                        this.data = response.data.data[0];
                    })
                    .catch(e => {
                        console.log(e);
                    });


                PublicationService.tweetCount(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.tweetCount = response.data.data[0]['count'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.followers(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.totalFollowers = response.data.data[0]['sum'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.authorCount(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.authorCount = response.data.data[0]['count'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.scoreSum(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.scoreSum = response.data.data[0]['sum'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.countries(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.loading = false;
                        console.log('countries')
                        let c = {}
                        response.data.data.forEach((e) => {
                            c[e._id.toUpperCase()] = e.sum
                        });
                        console.log(c)
                        this.countries = c;
                        this.renderMap = true
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.words(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.loading = false;
                        this.words = response.data.data.words;
                        console.log('words')
                        console.log(this.words)

                        if (!this.words || this.words.length < 1)
                            return [];

                        let occurences = this.words.reduce((allNames, name) => {
                            if (name in allNames) {
                                allNames[name]++;
                            } else {
                                allNames[name] = 1;
                            }
                            return allNames;
                        }, {});

                        let occurencesCount = []

                        for (var text in occurences) {
                            let obj = {}
                            obj.text = text;
                            obj.value = occurences[text]
                            occurencesCount.push(obj)
                        }
                        console.log('words')
                        console.log(occurencesCount)
                        this.words = occurencesCount
                        this.render = true
                        console.log(this.render)
                        console.log('render')
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        }
    }
</script>

<style lang="scss">
    a.doi {
        font-size: 0.9em;
        color: #9dc4dc;
        text-decoration: none;

        &:hover {
            color: white;
        }
    }

    .p-card {
        height: 100%;
    }

    .word-wrapper {
        .p-card-body {
            height: 100%;

            .p-card-content {
                height: 100%;
            }

        }

        .wordCloud {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            svg {
            }
        }

    }


    .vue-map-legend {
        width: 185px;
        background: var(--surface-c);
        overflow: auto;
        border: 1px solid;
        position: absolute;

        .vue-map-legend-header {
            padding: 10px 15px;
            background: var(--surface-a);
        }

        .vue-map-legend-content {
            padding: 10px 15px;
            background: var(--surface-b);
            border-top: 1px solid #acacad;
        }
    }


    .info {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
        width: 100%;

        h4 {
            margin: 5px 0;
        }
    }

    .padding-left {
        padding-left: 10px;
    }

    .side {
        li {
            padding: 5px 0;
        }
    }
</style>
