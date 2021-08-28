<template>
    <div class="p-grid">

        <div class="p-col-3 publication_info_main scroller">
            <Card>
                <template #title>
                    {{ publication.title }}
                </template>
                <template #content>
                        {{ publication.abstract }}
                </template>
                <template #footer>
                    <a class="doi" target="_blank" :href="realUrl">{{ publication.url }}</a>
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
                    <ul class="authors special-scrollbar">
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
            <Card class="stats">
                <template #title>
                    Stats
                </template>
                <template #content>
                    <div class="padding-left">
                        <h3>Score</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(scoreSum)) }}</p>
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
                        <p class="padding-left">{{ localeNumber(Math.round(scoreSum / tweetCount)) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Tweets per Author</h3>
                        <p class="padding-left">{{ localeNumber(Math.round((tweetCount / authorCount) * 100) / 100) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Followers per Author</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(totalFollowers / authorCount)) }}</p>
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
                              highColor="#0f6364ff"
                              lowColor="#0f636420"
                              countryStrokeColor="#eee"
                              defaultCountryFillColor="#fff"
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
                    <word-cloud ref="worldCloud" v-if="render" :data="words" :fontSizeMapper="fontSizeMapper" ></word-cloud>
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
                    <publication-donut-chart :title="publication.doi" :dateFormat="true" :getter="timeGetter" :growingData="true" type="line"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12">
            <DataTable :value="data" dataKey="_id" :paginator="true" :rows="10" :rowHover="true" :autoLayout="true"
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
    import chroma from 'chroma-js';

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
                   console.log('chroma');
                   let chromaa = chroma.scale([this.$props.lowColor, this.$props.highColor]);
                   console.log(chromaa);
                   if (chromaa) {
                       this.loading = true;
                       console.log('sfa')
                   }
            },
        }
    }
</script>

<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    a.doi {
        float: right;
        font-family: 'Courier New', monospace;
        color: $color-main;
        text-decoration: none;

        &:hover {
            font-weight: 700;
            /*<!--letter-spacing: -0.4px;-->*/
        }
    }

    .publication_info_main {
        .p-card-content{
            height: 550px;
            overflow-y: auto;
            text-align: justify;
            padding-right: 10px;
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

    .side {

        li {
            padding: 5px 0;
        }

        ul.authors {
            max-height: 300px;
            overflow-y: auto;
        }

    }

        .scroller .p-card-content , .special-scrollbar {

            &::-webkit-scrollbar {
              width: 8px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
              background: #fff;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
              background: $color-main;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
              background: $color-main;
            }
        }


    @-moz-document url-prefix('') {
        .scroller .p-card-content , .special-scrollbar {
            scrollbar-color: $color-main white !important;
            scrollbar-width: thin !important;
        }
    }
</style>
