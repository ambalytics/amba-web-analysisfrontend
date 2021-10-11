<template>
    <div class="p-grid">

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3 publication_info_main scroller">
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

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card class="side">
                <template #title>
                    Information
                </template>
                <template #content>
                    <table class="info">
                        <tr>
                            <td><h4>Date:</h4></td>
                            <td>{{ dateFormat(publication.pub_date) }}</td>
                        </tr>
                        <tr>
                            <td><h4>Type:</h4></td>
                            <td>{{ typeString(publication.type) }}</td>
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
                        <li v-for="subject in publication.fields_of_study" v-bind:key="subject.name">
                            {{ subject.name }}
                        </li>
                    </ul>


                    <h4>Sources:</h4>
                    <ul class="sources">
                        <li v-for="subject in publication.sources" v-bind:key="subject.title"
                            v-bind:class="{ hidden: subject.title === 'DB' }">
                            <a class="source-link" :href="subject.url">{{ subject.title }}</a>
                        </li>
                    </ul>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card class="stats">
                <template #title>
                    Stats
                </template>
                <template #content>
                    <div class="padding-left">
                        <h3>Tweet Count</h3>
                        <p class="padding-left">{{ localeNumber(tweetCount) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Publication Count</h3>
                        <p class="padding-left">{{ localeNumber(pubCount)}}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Total Followers Reached</h3>
                        <p class="padding-left">{{ localeNumber(totalFollowers) }}</p>
                    </div>
                    <!-- total score, average score -->
                    <div class="padding-left">
                        <h3>Average Score per Tweet</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(scoreSum / tweetCount * 100) / 100) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Sentiment</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(sentiment * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Contains Abstract</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(containsAbstract * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Exclamations</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(exclamations * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Questions</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(questions * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Tweet Author Count</h3>
                        <p class="padding-left">{{ localeNumber(tweetAuthorCount) }}</p>
                    </div>
                </template>
            </Card>
        </div>


        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Profile
                </template>
                <template #content>
                    <publication-chart title=" " :rawData="profileData"
                                       type="radar"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Authors
                </template>
                <template #content>
                    <MapChart v-if="renderMap" :countryData="countries"
                              highColor="#0f6364"
                              lowColor="#E6B24B"
                              countryStrokeColor="#eee"
                              defaultCountryFillColor="#fff"
                    />
                    <div v-else class="no-data">
                        - no data available -
                    </div>
                </template>
            </Card>
        </div>


        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6 word-wrapper">
            <Card>
                <template #title>
                    Words
                </template>
                <template #content>
                    <word-cloud ref="worldCloud" v-if="renderCloud" :data="words"></word-cloud>
                    <div v-else class="no-data">
                        - no data available -
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Entities
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['entity']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Types
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['tweet_type']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Hashtags
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['hashtag']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Languages
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['lang']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    Publication over Time
                </template>
                <template #content>
                    <Dropdown v-model="selectedPubField" :options="pubFields" optionLabel="label"
                              optionValue="value" placeholder="Select a Field" @change="loadPubProgress"/>
                    <br>
                    <publication-chart v-if="renderPublicationChart" :height="100" title=" " :dateFormat="true"
                                       :rawData="pubOverTimeData"
                                       type="line"></publication-chart>
                    <div v-else class="no-data">
                        - no data available -
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Newest Tweet
                </template>
                <template #content>
                    <AmbaTweet :doi_in="$route.params.p">
                    </AmbaTweet>
                </template>
            </Card>
        </div>

    </div>

</template>

<script>

    import PublicationChart from "../components/PublicationChart";
    import PublicationService from "../services/PublicationService";
    import WordCloud from "../components/WordCloud";
    import MapChart from "../components/MapChart";
    import StatService from "../services/StatService";
    import AmbaTweet from "../components/AmbaTweet";

    export default {
        name: 'Publication',
        components: {PublicationChart, WordCloud, MapChart, AmbaTweet},
        beforeRouteUpdate(to, from) {
            if (to.query.time !== from.query.time) {
                if (this.$route.query.time !== undefined) {
                    this.duration = to.query.time;
                } else {
                    this.duration = 'currently';
                }
            }
            this.fetchData()
        },
        data: () => ({
            duration: 'currently',
            publication: {},
            countries: [],
            data: [],
            words: [],
            renderCloud: false,
            renderMap: false,
            tweetCount: '-',
            authorCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
            topValues: [],
            profileData: [],
            pubOverTimeData: [],
            renderPublicationChart: true,
            selectedPubField: 'score',
            pubFields: [
                {label: 'Bot Rating', value: 'bot_rating'},
                {label: 'Contains Abstract', value: 'contains_abstract_raw'},
                {label: 'Exclamations', value: 'exclamations'},
                {label: 'Followers', value: 'followers'},
                {label: 'Length', value: 'length'},
                {label: 'Questions', value: 'questions'},
                {label: 'Score', value: 'score'},
                {label: 'Sentiment', value: 'sentiment_raw'},
                {label: 'Count', value: 'count'},
            ],
        }), created() {
            if (this.$route.query.time !== undefined) {
                this.duration = this.$route.query.time;
            }
            this.fetchData()
        },
        computed: {
            realUrl: function () {
                return 'http://' + this.publication.url
            }
        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            hover(e) {
                if (!e) {
                    console.log(e)
                }
            },
            loadPubProgress() {
                StatService.progressValue(this.selectedPubField, 5, this.duration, this.$route.params.p)
                    .then(response => {
                        this.pubOverTimeData = response.data.results;
                        this.renderPublicationChart = true;
                    })
                    .catch(e => {
                        this.renderPublicationChart = false;
                        this.pubOverTimeData = [];
                        console.log(e);
                    });
            },
            fetchData() {
                PublicationService.get(this.$route.params.p, this.duration)
                    .then(response => {
                        // console.log(response.data.data);
                        this.publication = response.data.results['publication'][0];
                        this.publication['authors'] = response.data.results['authors'];
                        this.publication['fields_of_study'] = response.data.results['fields_of_study'];
                        this.publication['sources'] = response.data.results['sources'];
                        this.publication.url = 'doi.org/' + this.publication['doi'];
                        // console.log(this.publication);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                this.loadPubProgress();

                StatService.numbers(this.duration, null, this.$route.params.p)
                    .then(response => {
                        this.tweetCount = response.data.results['count'];
                        this.totalFollowers = response.data.results['followers'];
                        this.scoreSum = response.data.results['score'];
                        this.containsAbstract = response.data.results['contains_abstract_raw'];
                        this.sentiment = response.data.results['sentiment_raw'];
                        this.pubCount = response.data.results['pub_count'];
                        this.questions = response.data.results['questions'];
                        this.exclamations = response.data.results['exclamations'];
                    })
                    .catch(e => {
                        console.log(e);
                        this.tweetCount = '-';
                        this.totalFollowers = '-';
                        this.scoreSum = '-';
                        this.containsAbstract = '-';
                        this.sentiment = '-';
                        this.pubCount = '-';
                        this.questions = '-';
                        this.exclamations = '-';
                    });

                StatService.top(null, this.$route.params.p)
                    .then(response => {
                        let words = [];
                        response.data.results.word.forEach((e) => {
                            let obj = {};
                            obj.text = e.value;
                            obj.value = e.count;
                            words.push(obj)
                        });
                        this.words = words;
                        this.renderCloud = true;
                    })
                    .catch(e => {
                        this.renderCloud = false;
                        console.log(e);
                    });

                StatService.top(['location'], this.$route.params.p, 1000)
                    .then(response => {
                        let c = {};
                        response.data.results.location.forEach((e) => {
                            c[e.value.toUpperCase()] = e.count
                        });
                        this.countries = c;
                        this.renderMap = true;
                    })
                    .catch(e => {
                        this.renderMap = false;
                        console.log(e);
                    });


                StatService.percentages(null, this.$route.params.p)
                    .then(response => {
                        this.topValues = response.data.results;
                        this.render = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.profileData(this.$route.params.p, this.duration)
                    .then(response => {
                        this.profileData = response.data.results;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.tweetAuthorCount('publication', this.$route.params.p)
                    .then(response => {
                        // console.log(response);
                        this.tweetAuthorCount = response.data.results[0].count;
                    })
                    .catch(e => {
                        this.tweetAuthorCount = '-';
                        console.log(e);
                    });
            },
            typeString: function (type) {
                if (type) {
                    let s = type.replace('_', ' ').toLowerCase().split(' ');
                    for (let i = 0; i < s.length; i++) {
                        s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1);
                    }
                    return s.join(' ');
                }
            },
            dateFormat: function (date) {
                if (date) {
                    date = new Date(date);
                    console.log(date);
                    return date.toLocaleDateString();
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
        .p-card-content {
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

    .source-link {
        color: $color-main;
        text-decoration: none;
    }

    .hidden {
        display: none;
    }

</style>
