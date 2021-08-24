<template>
    <div class="p-grid">

        <div class="p-col-3">
            <Card>
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
                    Types
                </template>
                <template #content>
                    <publication-donut-chart></publication-donut-chart>
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

        <div class="p-col-6">
            <Card>
                <template #title>
                    Time of Day
                </template>
                <template #content>
                    <publication-donut-chart :getter="timeOfDayGetter" type="line"></publication-donut-chart>
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

        <div class="p-col-6">
            <Card>
                <template #title>
                    Tweets over Time
                </template>
                <template #content>
                    <publication-donut-chart title=" " :dateFormat="true" :getter="timeGetter" type="line"></publication-donut-chart>
                </template>
            </Card>
        </div>


    </div>
</template>

<script>

    import PublicationDonutChart from "../components/PublicationDonutChart";
    import PublicationService from "../services/PublicationService";
    import MapChart from "vue-map-chart";

    export default {
        name: 'Home',
        components: {PublicationDonutChart, MapChart},
         data: () => ({
            fontSizeMapper: word => Math.log2(word.value * 10) * 10,
            countries: [],
            render: false,
            renderMap: false,
            loading: true,
            tweetCount: '-',
            authorCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
            a: 0,
        }), created() {
            console.log('created');
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
                console.log('fetch data');

                this.loading = true;

                PublicationService.tweetCount()
                    .then(response => {
                        this.tweetCount = response.data.data[0]['count'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.followers()
                    .then(response => {
                        this.totalFollowers = response.data.data[0]['sum'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.authorCount()
                    .then(response => {
                        this.authorCount = response.data.data[0]['count'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.scoreSum()
                    .then(response => {
                        this.scoreSum = response.data.data[0]['sum'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.countries()
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
            },
            hover(e) {
                if (!e) {
                    console.log(e)
                }
            },
            timeGetter() {
                return PublicationService.timeBinned()
            },
            sourceGetter() {
                return PublicationService.sources()
            },
            langGetter() {
                return PublicationService.lang()
            },
            timeOfDayGetter() {
                return PublicationService.timeOfDay()
            },
            entitiesGetter() {
                return PublicationService.entities()
            },
            hashtagsGetter() {
                return PublicationService.hashtags()
            }
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
