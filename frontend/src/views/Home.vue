<template>
    <div class="p-grid">

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card class="stats">
                <template #title>
                    Stats
                </template>
               <template #content>
                    <div class="padding-left" v-if="!isNaN(tweetCount)">
                        <h3><time-tooltip/>Tweet Count</h3>
                        <p class="padding-left">{{ localeNumber(tweetCount) }}</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(pubCount)">
                        <h3><time-tooltip/>Publication Count</h3>
                        <p class="padding-left">{{ localeNumber(pubCount)}}</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(totalFollowers)">
                        <h3><time-tooltip/>Total Followers Reached</h3>
                        <p class="padding-left">{{ localeNumber(totalFollowers) }}</p>
                    </div>
                    <!-- total score, average score -->
                    <div class="padding-left" v-if="!isNaN(scoreSum)">
                        <h3><time-tooltip/>Average Score per Tweet</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(scoreSum / tweetCount * 100) / 100) }}</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(sentiment)">
                        <h3><time-tooltip/>Average Sentiment</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(sentiment * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(containsAbstract)">
                        <h3><time-tooltip/>Average Contains Abstract</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(containsAbstract * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(exclamations)">
                        <h3><time-tooltip/>Average Exclamations</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(exclamations * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(questions)">
                        <h3><time-tooltip/>Average Questions</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(questions * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left" v-if="!isNaN(tweetAuthorCount)">
                        <h3>Tweet Author Count</h3>
                        <p class="padding-left">{{ localeNumber(tweetAuthorCount) }}</p>
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
                    <AmbaTweet>
                    </AmbaTweet>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    <time-tooltip/>Trending
                </template>
                <template #content>
                    <div v-for="item in trendingItems" :key="item.label" class="trending-items">
                        <h4><i style="margin-right: 5px;" :class="item.icon"></i>{{ item.label }}</h4>
                        <DataTable :value="item.data" :autoLayout="true" @row-click="rowClick($event, item.label)">
                            <Column class="amba rank" field="trending_ranking" header="Rank"></Column>
                            <Column v-if="item.label === 'Publication'" field="title" header="Title"></Column>
                            <Column v-if="item.label !== 'Publication'" field="name" header="Name"></Column>
                        </DataTable>
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Tweet Type
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['tweet_type']"></publication-chart>
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

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Hashtags
                </template>
                <template #content>
                    <publication-chart :show-others="false" :rawData="topValues['hashtag']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Entities
                </template>
                <template #content>
                    <publication-chart :show-others="false" :rawData="topValues['entity']"></publication-chart>
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
                    <word-cloud v-if="renderCloud" ref="worldCloud" :data="words"></word-cloud>
                    <div v-else class="no-data">
                        - no data available -
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    <time-tooltip/>Top 5 Publications over Time
                </template>
                <template #content>
                    <Dropdown v-model="selectedPubField" :options="pubFields" optionLabel="label"
                              optionValue="value" placeholder="Select a Field" @change="loadPubsProgress"/>
                    <br>
                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="pubsOverTimeData" type="line"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    <time-tooltip/>Top 5 Trending over Time
                </template>
                <template #content>
                    <Dropdown v-model="selectedTrendField" :options="trendFields" optionLabel="label"
                              optionValue="value" placeholder="Select a Field" @change="loadTrendingProgress"/>
                    <br>
                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="trendOverTimeData" type="line"></publication-chart>
                </template>
            </Card>
        </div>

    </div>
</template>

<script>

    import PublicationChart from "../components/PublicationChart";
    import PublicationService from "../services/PublicationService";
    import AuthorService from "../services/AuthorService";
    import LanguageDecode from "../helper/LanguageDecode";
    import FieldOfStudy from "../services/FieldOfStudyService";
    import AmbaTweet from "../components/AmbaTweet"
    import StatService from "../services/StatService";
    import MapChart from "../components/MapChart";
    import WordCloud from "../components/WordCloud";
    import TimeTooltip from "../components/TimeTooltip";

    export default {
        name: 'Home',
        components: {PublicationChart, MapChart, AmbaTweet, WordCloud, TimeTooltip},
        beforeRouteUpdate(to, from) {
            if (to.query.time !== from.query.time) {
                if (to.query.time !== undefined) {
                    this.duration = to.query.time;
                    this.fetchData();
                } else {
                    this.duration = 'currently';
                    this.fetchData();
                }
            }
        },
        data: () => ({
            duration: "currently",
            // fontSizeMapper: word => word.value / 100,
            countries: [],
            words: [],
            render: false,
            renderMap: false,
            renderCloud: false,
            pubCount: '-',
            tweetCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
            sentiment: '-',
            containsAbstract: '-',
            questions: '-',
            exclamations: '-',
            tweetAuthorCount: '-',
            a: 0,
            topValues: [],
            trendOverTimeData: [],
            selectedTrendField: 'score',
            trendFields: [
                {label: 'Score', value: 'score'},
                {label: 'Count', value: 'count'},
                {label: 'Sentiment', value: 'mean_sentiment'},
                {label: 'Followers', value: 'sum_follower'},
                {label: 'Contains Abstract', value: 'abstract_difference'},
                {label: 'Mean Age', value: 'mean_age'},
                {label: 'Length', value: 'mean_length'},
                {label: 'Questions', value: 'mean_questions'},
                {label: 'Exclamations', value: 'mean_exclamations'},
                {label: 'Bot Rating', value: 'mean_bot_rating'},
                {label: 'Projected Change', value: 'projected_change'},
                {label: 'Trending Value', value: 'trending'},
                {label: 'ema', value: 'ema'},
                {label: 'kama', value: 'kama'},
                {label: 'ker', value: 'ker'},
                {label: 'Mean Score', value: 'mean_score'},
                {label: 'stddev', value: 'stddev'},
            ],
            pubsOverTimeData: [],
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
            trendingItems: [
                {label: 'Publication', data: [], icon: 'pi pi-fw pi-book'},
                {label: 'Author', data: [], icon: 'pi pi-fw pi-user'},
                {label: 'Field of Study', data: [], icon: 'pi pi-fw pi-sitemap'},
            ]
        }), created() {
            if (this.$route.query.time !== undefined) {
                this.duration = this.$route.query.time;
            }
            this.fetchData();
        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            loadPubsProgress() {
                StatService.progressValue(this.selectedPubField, 5, this.duration)
                    .then(response => {
                        this.pubsOverTimeData = response.data.results;
                    })
                    .catch(e => {
                        this.pubsOverTimeData = [];
                        console.log(e);
                    });
            },
            loadTrendingProgress() {
                StatService.progressTrending(this.selectedTrendField, 5, this.duration)
                    .then(response => {
                        this.trendOverTimeData = response.data.results;
                    })
                    .catch(e => {
                        this.trendOverTimeData = [];
                        console.log(e);
                    });
            },
            loadTrendingItems() {
                PublicationService.trending(this.duration, 0, 3)
                    .then(response => {
                        this.trendingItems[0].data = response.data.results;
                    })
                    .catch(e => {
                        console.log(e);
                        this.trendingItems[0].data = []
                    });

                AuthorService.trending(this.duration, 0, 3)
                    .then(response => {
                        this.trendingItems[1].data = response.data.results;
                    })
                    .catch(e => {
                        console.log(e);
                        this.trendingItems[1].data = []
                    });

                FieldOfStudy.trending(this.duration, 0, 3)
                    .then(response => {
                        this.trendingItems[2].data = response.data.results;
                    })
                    .catch(e => {
                        console.log(e);
                        this.trendingItems[2].data = []
                    });
            },
            rowClick(event, extra) {
                if (event.data.doi) {
                    let routeData = this.$router.resolve('/publication/' + event.data.doi);
                    window.open(routeData.href, '_blank');
                }

                if (event.data.id) {
                    let routeData = this.$router.resolve('/fieldOfStudy/' + event.data.id);
                    if (extra === "Author") {
                        routeData = this.$router.resolve('/author/' + event.data.id);
                    }
                    window.open(routeData.href, '_blank');
                }
            },
            fetchData() {
                this.loadTrendingItems();

                StatService.numbers(this.duration)
                    .then(response => {
                        // 'bot_rating', 'contains_abstract_raw', 'exclamations', 'followers', 'length', 'questions', 'score', 'sentiment_raw', 'count'
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

                this.loadPubsProgress();
                this.loadTrendingProgress();

                StatService.top()
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

                StatService.top(['location'], null, 1000)
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


                StatService.percentages()
                    .then(response => {
                        this.loading = false;

                        let lang = response.data.results.lang.map(e => {
                            return {
                                count: e.count,
                                p: e.p,
                                value: LanguageDecode.decode(e.value)
                            }
                        });

                        this.topValues = response.data.results;
                        this.topValues.lang = lang;

                        this.render = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.tweetAuthorCount('publications')
                    .then(response => {
                        // console.log(response);
                        this.tweetAuthorCount = response.data.results[0].count;
                    })
                    .catch(e => {
                        this.tweetAuthorCount = '-';
                        console.log(e);
                    });
            },
            hover(e) {
                if (!e) {
                    console.log(e)
                }
            },
        }
    }
</script>

<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    .trending-items {
        h4 {
            color: $color-main;
            margin: 35px 0 10px 0;
        }

        .p-datatable {
            margin: 5px;
        }

        .p-datatable .p-datatable-tbody > tr {
            cursor: pointer;

            &:hover {
                background: rgba($color-main, 0.2);
            }
        }

        .p-datatable .p-datatable-thead > tr > th {
            padding: 10px;

            &.rank > div {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>
