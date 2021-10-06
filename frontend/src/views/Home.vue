<template>
    <div class="p-grid">

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
                        <p class="padding-left">{{ localeNumber(Math.round(sentiment * 1000) / 1000) }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Contains Abstract</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(containsAbstract * 100000) / 1000) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Exclamations</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(exclamations * 10000) / 100) }}%</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Questions</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(questions * 10000) / 100) }}%</p>
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
                    Sources
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['source']"></publication-chart>
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
                    <publication-chart :show-others="false"  :rawData="topValues['hashtag']"></publication-chart>
                </template>
            </Card>
        </div>

<!--        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">-->
<!--            <Card>-->
<!--                <template #title>-->
<!--                    Time of Day-->
<!--                </template>-->
<!--                <template #content>-->
<!--&lt;!&ndash;                    <publication-chart :rawData="timeOfDayData" title=" " type="line"></publication-chart>&ndash;&gt;-->
<!--                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="timeOfDayData" type="line"></publication-chart>-->
<!--                </template>-->
<!--            </Card>-->
<!--        </div>-->

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
                </template>
            </Card>
        </div>

         <div class="p-col-12 p-md-12 p-lg-6 p-xl-6 word-wrapper">
            <Card>
                <template #title>
                    Words
                </template>
                <template #content>
                    <word-cloud ref="worldCloud" v-if="renderCloud" :data="words"
                                :fontSizeMapper="fontSizeMapper"></word-cloud>
                </template>
            </Card>
        </div>

<!--        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">-->
<!--            <Card class="big-chart">-->
<!--                <template #title>-->
<!--                    Tweets over Time-->
<!--                </template>-->
<!--                <template #content>-->
<!--                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="tweetsOverTimeData" type="line"></publication-chart>-->
<!--                </template>-->
<!--            </Card>-->
<!--        </div>-->


    </div>
</template>

<script>

    import PublicationChart from "../components/PublicationChart";
    // import PublicationService from "../services/PublicationService";
    import AmbaTweet from "../components/AmbaTweet"
    import StatService from "../services/StatService";
    import MapChart from "../components/MapChart";
    import WordCloud from "../components/WordCloud";

    export default {
        name: 'Home',
        components: {PublicationChart, MapChart, AmbaTweet, WordCloud},
         data: () => ({
            fontSizeMapper: word => Math.log2(word.value * 10) * 4,
            countries: [],
            words: [],
            render: false,
            renderMap: false,
            renderCloud: false,
            loading: true,
            pubCount: '-',
            tweetCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
            sentiment: '-',
            containsAbstract: '-',
            questions: '-',
            exclamations: '-',
            a: 0,
            topValues: [],
            timeOfDayData: [],
            tweetsOverTimeData: [],
        }), created() {
            // console.log('created');
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            fetchData() {
                // console.log('fetch data');

                this.loading = true;

                StatService.numbers()
                    .then(response => {
                        // 'bot_rating', 'contains_abstract_raw', 'exclamations', 'followers', 'length', 'questions', 'score', 'sentiment_raw', 'count'
                        this.tweetCount = response.data['count'];
                        this.totalFollowers = response.data['followers'];
                        this.scoreSum = response.data['score'];
                        this.containsAbstract = response.data['contains_abstract_raw'];
                        this.sentiment = response.data['sentiment_raw'];
                        this.pubCount = response.data['pub_count'];
                        this.questions = response.data['questions'];
                        this.exclamations = response.data['exclamations'];
                        console.log(response)
                    })
                    .catch(e => {
                        console.log(e);
                    });

                // PublicationService.getCount()
                //     .then(response => {
                //         // console.log('count')
                //         this.pubCount = response.data['count'];
                //     })
                //     .catch(e => {
                //         console.log(e);
                //     });

                // PublicationService.timeBinned()
                //     .then(response => {
                //         this.tweetsOverTimeData = response.data;
                //     })
                //     .catch(e => {
                //         console.log(e);
                //     });
                //
                // PublicationService.timeOfDay()
                //     .then(response => {
                //         this.timeOfDayData = response.data;
                //     })
                //     .catch(e => {
                //         console.log(e);
                //     });

                StatService.top()
                    .then(response => {
                        this.loading = false;

                        // console.log(response.data);

                        let c = {};
                        response.data.location.forEach((e) => {
                            c[e.value.toUpperCase()] = e.count
                        });
                        this.countries = c; // todo countries with no limit
                        this.renderMap = true;

                        let words = [];
                        response.data.word.forEach((e) => {
                            let obj = {};
                            obj.text = e.value;
                            obj.value = e.count;
                            words.push(obj)
                        });
                        this.words = words;
                        console.log(words);

                        this.renderCloud = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.percentages()
                    .then(response => {
                        this.loading = false;
                        this.topValues = response.data;
                        this.render = true;
                    })
                    .catch(e => {
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
    .big-chart {
        .p-card-content, .p-card-body {
            height: 100%;
            color: #fff;
        }
    }

</style>
