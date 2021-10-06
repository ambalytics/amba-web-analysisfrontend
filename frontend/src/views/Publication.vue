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
                        <p class="padding-left">{{ localeNumber(Math.round((tweetCount / authorCount) * 100) / 100)
                            }}</p>
                    </div>
                    <div class="padding-left">
                        <h3>Average Followers per Author</h3>
                        <p class="padding-left">{{ localeNumber(Math.round(totalFollowers / authorCount)) }}</p>
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
                    <publication-chart :rawData="topValues['entities']"></publication-chart>
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
                    <word-cloud ref="worldCloud" v-if="render" :data="words"
                                :fontSizeMapper="fontSizeMapper"></word-cloud>
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
                    Hashtags
                </template>
                <template #content>
                    <publication-chart :rawData="topValues['hashtags']"></publication-chart>
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

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Time of Day
                </template>
                <template #content>
                    <!--                    <publication-chart :title="publication.doi"  :rawData="timeOfDayData" type="line"></publication-chart>-->
                    <publication-chart title=" " :dateFormat="true" :rawData="timeOfDayData"
                                       type="line"></publication-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12 p-md-12 p-lg-6 p-xl-6">
            <Card>
                <template #title>
                    Tweets over Time
                </template>
                <template #content>
                    <publication-chart :title="publication.doi" :dateFormat="true" :rawData="tweetsOverTimeData"
                                       type="line"></publication-chart>
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

    export default {
        name: 'Publication',
        inject: ['selectedTime'],
        components: {PublicationChart, WordCloud, MapChart},
        data: () => ({
            publication: {},
            fontSizeMapper: word => Math.log2(word.value * 4) * 4,
            countries: [],
            data: [],
            words: [],
            render: false,
            renderMap: false,
            tweetCount: '-',
            authorCount: '-',
            scoreSum: '-',
            totalFollowers: '-',
            topValues: [],
            timeOfDayData: [],
            tweetsOverTimeData: [],
            profileData: [],
        }), created() {
            // console.log('created');
            // fetch the data when the view is created and the data is
            // already being observed
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
            fetchData() {
                // todo check how many / can be in doi
                PublicationService.get(this.$route.params.p + "/" + this.$route.params.s, this.selectedTime.duration)
                    .then(response => {
                        // console.log(response.data.data);
                        this.publication = response.data['publication'][0];
                        this.publication['authors'] = response.data['authors'];
                        this.publication['fields_of_study'] = response.data['fields_of_study'];
                        this.publication['sources'] = response.data['sources'];
                        this.publication.url = 'doi.org/' + this.publication['doi'];
                        // console.log(this.publication);
                    })
                    .catch(e => {
                        console.log(e);
                    });


                StatService.numbers(null, this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.tweetCount = response.data['tweetCount'];
                        this.authorCount = response.data['authorCount'];
                        this.totalFollowers = response.data['followersReached'];
                        this.scoreSum = response.data['totalScore'];
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.timeBinned(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.tweetsOverTimeData = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                PublicationService.timeOfDay(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.timeOfDayData = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.profileData(this.$route.params.p + "/" + this.$route.params.s, 21600)
                    .then(response => {
                        this.profileData = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });

                StatService.top(null, this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        console.log(response.data);

                        let c = {};
                        response.data.countries.forEach((e) => {
                            c[e.location.toUpperCase()] = e.count
                        });
                        this.countries = c;
                        this.renderMap = true;

                        this.topValues = response.data;

                        let words = [];
                        response.data.words.forEach((e) => {
                            let obj = {};
                            obj.text = e.value;
                            obj.value = e.count;
                            words.push(obj)
                        });
                        this.words = words;
                        this.render = true;
                    })
                    .catch(e => {
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

    .scroller .p-card-content, .special-scrollbar {

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

    .source-link {
        color: $color-main;
        text-decoration: none;
    }

    .hidden {
        display: none;
    }

    @-moz-document url-prefix('') {
        .scroller .p-card-content, .special-scrollbar {
            scrollbar-color: $color-main white !important;
            scrollbar-width: thin !important;
        }
    }
</style>
