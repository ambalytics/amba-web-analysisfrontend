<template>
    <div class="p-grid">
        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    Trending
                </template>
                <template #content>
                    <Dropdown v-model="selectedTrendField" :options="trendFields" optionLabel="label"
                              optionValue="value" placeholder="Select a Field" @change="loadTrendingProgress"/>
                    <br>
                    <publication-chart v-if="renderTrendingChart" :height="600" title=" " :dateFormat="true"
                                       :rawData="trendOverTimeData"
                                       type="line"></publication-chart>
                    <div v-else class="no-data">
                        - no data available -
                    </div>
                </template>
            </Card>
        </div>

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

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Profile
                </template>
                <template #content>
                    <publication-chart title=" " :rawData="profileData" :height="500"
                                       type="radar"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-12 p-xl-12">
            <Card class="table-card">
                <template #title>
                    Trending {{ authorName }}
                </template>
                <template #content>
                    <div class="p-input-icon-left">
                        <i class="pi pi-search" @click="fetchData"/>
                        <InputText v-model="searchWord" placeholder="Keyword Search" @keydown="search"/>
                    </div>
                    <DataTable :value="data" dataKey="doi" :paginator="true" :rows="this.lazyParams.rows"
                               :rowHover="true"
                               :lazy="true"
                               :loading="loading" :rowsPerPageOptions="[10, 20, 50]" :sort-order="- 1"
                               :totalRecords="totalRecords" class="big-table"
                               @page="onPage($event)" @sort="onSort($event)" ref="dt" sort-field="score"
                               @row-click="rowClick($event)">
                        <template #empty>
                            No Publications found.
                        </template>
                        <template #loading>
                            Loading Publications data. Please wait.
                        </template>
                        <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable"
                                :key="col.field" :class="col.class">
                            <template v-if="col.numberTemplate" #body="slotProps">
                                <div class="wrapper">{{ col.noLocale ? slotProps.data[col.field] :
                                    localeNumber(slotProps.data[col.field]) }}
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </template>
            </Card>
        </div>


        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Newest Tweet
                </template>
                <template #content>
                    <AmbaTweet :id_in="$route.params.id" mode="author">
                    </AmbaTweet>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    Publications over Time
                </template>
                <template #content>
                    <Dropdown v-model="selectedPubField" :options="pubFields" optionLabel="label"
                              optionValue="value" placeholder="Select a Field" @change="loadPubsProgress"/>
                    <br>
                    <publication-chart v-if="renderPublicationChart" :height="600" title=" " :dateFormat="true"
                                       :rawData="pubsOverTimeData"
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
    </div>
</template>

<script>
    import PublicationService from "../services/PublicationService";
    import AuthorService from "../services/AuthorService";
    import PublicationChart from "../components/PublicationChart";
    import MapChart from "../components/MapChart";
    import AmbaTweet from "../components/AmbaTweet";
    import WordCloud from "../components/WordCloud";
    import StatService from "../services/StatService";
    import TimeTooltip from "../components/TimeTooltip";

    export default {
        name: 'Publications',
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
        data() {
            return {
                duration: "currently",
                authorName: '',
                columns: [
                    {
                        field: 'trending_ranking',
                        header: 'Rank',
                        sortable: false,
                        numberTemplate: false,
                        class: "amba rank"
                    },
                    {field: 'title', header: 'Title', sortable: false, numberTemplate: false},
                    {field: 'pub_date', header: 'Date', sortable: true, numberTemplate: true, noLocale: true},
                    {
                        field: 'citation_count',
                        header: 'Citation Count',
                        sortable: true,
                        class: "text-align-right",
                        numberTemplate: true
                    },
                    {
                        field: 'score',
                        header: 'Score',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'projected_change',
                        header: 'Projected Change',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'count',
                        header: 'Tweet Count',
                        sortable: true,
                        class: "text-align-right  amba",
                        numberTemplate: true
                    },
                    {
                        field: 'sum_followers',
                        header: 'Follower reached',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_sentiment',
                        header: 'Mean Sentiment',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'abstract_difference',
                        header: 'Abstract Difference',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_age',
                        header: 'mean Age',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_length',
                        header: 'mean Length',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_questions',
                        header: 'mean "?"',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_exclamations',
                        header: 'mean "!"',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_bot_rating',
                        header: 'mean Bot Rating',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'trending',
                        header: 'trending',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {field: 'ema', header: 'ema', sortable: true, class: "text-align-right amba", numberTemplate: true},
                    {
                        field: 'kama',
                        header: 'kama',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {field: 'ker', header: 'ker', sortable: true, class: "text-align-right amba", numberTemplate: true},
                    {
                        field: 'mean_score',
                        header: 'mean Score',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'stddev',
                        header: 'stddev',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                ],
                lazyParams: {},
                data: [],
                loading: true,
                searchWord: '',
                totalRecords: 0,
                countries: [],
                words: [],
                renderMap: false,
                renderCloud: false,
                renderTrendingChart: true,
                renderPublicationChart: true,
                pubCount: '-',
                tweetCount: '-',
                scoreSum: '-',
                totalFollowers: '-',
                sentiment: '-',
                containsAbstract: '-',
                questions: '-',
                exclamations: '-',
                tweetAuthorCount: '-',
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
                profileData: []
            }
        },
        created() {
            if (this.$route.query.time !== undefined) {
                this.duration = this.$route.query.time;
            }
            this.fetchData();
        },
        mounted() {
            this.lazyParams = {
                first: 0,
                rows: 10,
                sortField: 'score',
                sortOrder: -1,
            };
        },
        methods: {
            loadPubsProgress() {
                AuthorService.progressValue(this.selectedPubField, 5, this.duration, this.$route.params.id)
                    .then(response => {
                        this.pubsOverTimeData = response.data.results;
                        this.renderPublicationChart = true;
                    })
                    .catch(e => {
                        this.renderPublicationChart = false;
                        this.pubsOverTimeData = [];
                        console.log(e);
                    });
            },
            loadTrendingProgress() {
                AuthorService.progressTrending(this.selectedTrendField, 5, this.duration, this.$route.params.id)
                    .then(response => {
                        this.trendOverTimeData = response.data.results;
                        this.renderTrendingChart = true;
                        console.log(this.trendOverTimeData);
                    })
                    .catch(e => {
                        this.renderTrendingChart = false;
                        this.trendOverTimeData = [];
                        console.log(e);
                    });
            },
            search(e) {
                if (e.keyCode === 13) {
                    this.fetchData();
                }
            },
            onPage(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            onSort(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            rowClick(event) {
                this.$router.push('/publication/' + event.data.doi)
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString(); // 'de-De'
            },
            fetchData() {
                this.loading = true;

                AuthorService.get(this.$route.params.id)
                    .then(response => {
                        this.authorName = response.data.results.author.name
                    })
                    .catch(e => {
                        this.authorName = '';
                        console.log(e);
                    });

                PublicationService.trendingAuthor(this.duration, this.$route.params.id, this.lazyParams.first, this.lazyParams.rows, this.lazyParams.sortField, this.lazyParams.sortOrder > 0 ? 'asc' : 'desc', this.searchWord)
                    .then(response => {
                        this.data = response.data.results;
                        this.data.forEach(element => {
                            element.score = Math.round(element.score);
                            element.length_avg = Math.round(element.length_avg);
                            element.contains_abstract_avg = Math.round(element.contains_abstract_avg * 100) / 100;
                            this.totalRecords = element.total_count;
                             if (!element.pub_date) {
                                element.pub_date = element.year;
                            } else {
                                let d = new Date(element.pub_date);
                                element.pub_date = d.toLocaleDateString();
                            }
                        });
                        this.loading = false
                    })
                    .catch(e => {
                        this.data = [];
                        this.loading = false;
                        console.log(e);
                    });

                this.loadPubsProgress();
                this.loadTrendingProgress();

                AuthorService.numbers(this.duration, null, this.$route.params.id)
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

                AuthorService.profileData(this.$route.params.id, this.duration)
                    .then(response => {
                        this.profileData = response.data.results;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                AuthorService.top(null, this.$route.params.id)
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

                AuthorService.top(['location'], this.$route.params.id, 1000)
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

                StatService.tweetAuthorCount('author', null, this.$route.params.id)
                    .then(response => {
                        // console.log(response);
                        this.tweetAuthorCount = response.data.results[0].count;
                    })
                    .catch(e => {
                        this.tweetAuthorCount = '-';
                        console.log(e);
                    });
            },
        }
    }
</script>