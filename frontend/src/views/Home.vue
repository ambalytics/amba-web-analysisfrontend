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
                    <div class="padding-left">
                        <h3>Publication Count</h3>
                        <p class="padding-left">{{ localeNumber(pubCount)}}</p>
                    </div>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Types
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['types']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Sources
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['sources']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Languages
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['languages']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Hashtags
                </template>
                <template #content>
                    <publication-chart :show-others="false"  :rawData="topValues['hashtags']"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Time of Day
                </template>
                <template #content>
<!--                    <publication-chart :rawData="timeOfDayData" title=" " type="line"></publication-chart>-->
                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="timeOfDayData" type="line"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-6 p-lg-4 p-xl-3">
            <Card>
                <template #title>
                    Entities
                </template>
                <template #content>
                    <publication-chart :show-others="false" :rawData="topValues['entities']"></publication-chart>
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

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card class="big-chart">
                <template #title>
                    Tweets over Time
                </template>
                <template #content>
                    <publication-chart :height="200" title=" " :dateFormat="true" :rawData="tweetsOverTimeData" type="line"></publication-chart>
                </template>
            </Card>
        </div>


    </div>
</template>

<script>

    import PublicationChart from "../components/PublicationChart";
    import PublicationService from "../services/PublicationService";
    import StatService from "../services/StatService";
    import MapChart from "../components/MapChart";

    export default {
        name: 'Home',
        components: {PublicationChart, MapChart},
         data: () => ({
            fontSizeMapper: word => Math.log2(word.value * 10) * 10,
            countries: [],
            render: false,
            renderMap: false,
            loading: true,
            pubCount: '-',
            tweetCount: '-',
            authorCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
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
                        this.tweetCount = response.data['tweetCount'];
                        this.authorCount = response.data['authorCount'];
                        this.totalFollowers = response.data['followersReached'];
                        this.scoreSum = response.data['totalScore'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.getCount()
                    .then(response => {
                        // console.log('count')
                        this.pubCount = response.data['count'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.timeBinned()
                    .then(response => {
                        this.tweetsOverTimeData = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.timeOfDay()
                    .then(response => {
                        this.timeOfDayData = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.top(['languages', 'types', 'entities', 'hashtags', 'countries'])
                    .then(response => {
                        this.loading = false;

                        console.log(response.data);

                        let c = {};
                        response.data.countries.forEach((e) => {
                            c[e.location.toUpperCase()] = e.count
                        });
                        this.countries = c;
                        this.renderMap = true;

                        this.topValues = response.data;
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
