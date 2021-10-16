<template>
    <div class="amba-tweet">
        <i class="pi pi-refresh reload-button" @click="loadNewestTweet"></i>
        <div class="rendered-tweet special-scrollbar">
            <Tweet
                    v-if="tweetId !== ''"
                    :tweet-id="tweetId"
                    cards="visible"
                    conversation="all"
                    lang="en"
                    theme="light"
                    align="left"
                    :dnt="false"
            >
                <template v-slot:loading>
                    <div style="position: relative; width: 100%; height: 100%; padding: 175px;">
                        <i class="pi pi-spin pi-spinner" style="font-size: 30px;"></i>
                    </div>
                </template>

                <template v-slot:error>
                    <span>Sorry, that tweet can't be loaded.</span>
                </template>
            </Tweet>
        </div>

        <div class="processed-data">
            <router-link v-if="!doi_in" :to="pubUrl" class="link">
                <h3 class="title">{{ title }}</h3>
                <i class="pi pi-link">{{ doi }}</i>
            </router-link>
            <div v-if="!doi_in" class="authors">
                <span v-for="author in authors" v-bind:key="author">
                    <router-link :to="{ name: 'author', params: { id: author.id }}" class="source-link">
                                {{ author.name }},
                    </router-link>
                </span>
<!--                <div class="abstract special-scrollbar">-->
<!--                    {{ abstract }}-->
<!--                </div>-->
            </div>
            <div v-else>
                <h3>Processed Data</h3>
            </div>
            <div class="values">
                <div>
                    <h3>Score</h3>
                    <p>{{ localeNumber(score) }}</p>
                </div>
                <div>
                    <h3>Bot Rating</h3>
                    <p>{{ formatBot(bot_rating) }}</p>
                </div>
                <div>
                    <h3>Sentiment <i style="font-size: 0.9em;" class="pi pi-question-circle"
                                     v-tooltip="'Sentiment can vary from negative (-1) to positive (+1)'"></i></h3>
                    <p>{{ localeNumber(sentiment_raw) }}</p>
                </div>
                <div>
                    <h3>Contains Abstract <i style="font-size: 0.9em;" class="pi pi-question-circle"
                                             v-tooltip="'Between 50 and 85% is good, much more and it\'s just the abstract, less and it will have little to do with the publication.'"></i>
                    </h3>
                    <p>{{ localeNumber(contains_abstract_raw * 100) }}%</p>
                </div>
                <div>
                    <h3>Question Mark Count</h3>
                    <p>{{ localeNumber(question_mark_count) }}</p>
                </div>
                <div>
                    <h3>Exclamation Mark Count</h3>
                    <p>{{ localeNumber(exclamation_mark_count) }}</p>
                </div>
                <div>
                    <h3>Length</h3>
                    <p>{{ localeNumber(length) }}</p>
                </div>
                <div>
                    <h3>Followers</h3>
                    <p>{{ localeNumber(followers) }}</p>
                </div>
                <div>
                    <h3>Language</h3>
                    <p>{{ lang }}</p>
                </div>
                <div>
                    <h3>Author Location</h3>
                    <p>{{ location }}</p>
                </div>
                <div>
                    <h3>Source</h3>
                    <p>{{ source }}</p>
                </div>
                <div>
                    <h3>Type</h3>
                    <p>{{ subj_type }}</p>
                </div>
                <div>
                    <h3>Entities</h3>
                    <p v-for="entity in entities" v-bind:key="entity">{{ entity }}</p>
                </div>
                <div>
                    <h3>Processed at</h3>
                    <p>{{ localeTime(created_at) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tweet from "./Tweet";
    import StatService from "../services/StatService";
    import LanguageDecode from "../helper/LanguageDecode";
    import LocationDecode from "../helper/LocationDecode";
    // import FieldOfStudyService from "../services/FieldOfStudyService";

    export default {
        name: "AmbaTweet",
        components: {Tweet},
        watch: {
            countryData() {
                this.loadNewestTweet();
            }
        },
        props: {
            doi_in: {
                type: String,
                required: false
            },
            mode: {
                type: String,
                required: false,
                default: 'publication'
            },
            id_in: {
                type: String,
                required: false
            },
        },
        computed: {
            pubUrl: function () {
                return '/publication/' + this.doi
            }
        },
        data() {
            return {
                title: '',
                abstract: '',
                doi: '',
                tweetId: '',
                created_at: '',
                score: '',
                bot_rating: '',
                followers: '',
                sentiment_raw: '',
                contains_abstract_raw: '',
                lang: "",
                location: "",
                source: "",
                subj_type: "",
                question_mark_count: "",
                exclamation_mark_count: "",
                length: "",
                authors: "",
                entities: [],
            }
        },
        created() {
            this.loadNewestTweet();
        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString();  //'de-De'
            },
            localeTime: function (x) {
                let d = new Date(x + 'Z');
                return d.toLocaleString(); // 'de-De'
            },
            formatBot: function (x) {
                if (x === 10) return 'no Bot';
                return 'Bot'
            },
            loadNewestTweet() {
                StatService.newestTweet(this.mode, this.doi_in, this.id_in)
                    .then(r => {
                        // console.log(r);
                        let response = r.data.results[0].data;
                        this.title = response['title'];
                        this.doi = response['doi'];
                        this.abstract = response['abstract'];
                        this.tweetId = response['sub_id'];
                        this.created_at = response['created_at'];
                        this.score = response['score'];
                        this.bot_rating = response['bot_rating'];
                        this.followers = response['followers'];
                        this.sentiment_raw = response['sentiment_raw'];
                        this.contains_abstract_raw = response['contains_abstract_raw'];
                        if (response['lang'] === 'und') {
                            this.lang = 'Unknown'
                        } else {
                            this.lang = LanguageDecode.decode(response['lang']);
                        }
                        this.location = LocationDecode.decode(response['location']);
                        this.source = response['source'];
                        this.subj_type = response['subj_type'];
                        this.question_mark_count = response['question_mark_count'];
                        this.exclamation_mark_count = response['exclamation_mark_count'];
                        this.length = response['length'];
                        this.authors = r.data.results[0]['authors'];
                        this.entities = response['entities'];
                        if (this.entities === '[]') {
                            this.entities = ['-']
                        } else {
                            this.entities = JSON.parse(this.entities)
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    .amba-tweet {
        display: flex;
        color: $color-main;
        position: relative;
        flex-wrap: wrap;
        row-gap: 30px;

        .reload-button {
            cursor: pointer;
            position: absolute;
            right: -1em;
            top: -4.5em;
            padding: 5px;

            &:hover {
                font-size: 1.2em;
                right: -0.95em;
                top: -3.85em;
            }
        }

        .rendered-tweet {
            flex-grow: 0;
            width: 450px;
            max-width: 450px;
            min-width: 450px;
            padding: 10px;

            max-height: 800px;
            overflow-y: auto;
        }

        .processed-data {
            margin-top: -50px;
            flex-grow: 1;
            padding: 10px;
            margin-left: 10px;
            width: 450px;

            .link {
                color: $color-main;
                text-decoration: none;
                margin-bottom: 40px;

                h3:hover, i:hover {
                    filter: brightness(1.3);
                }

                .title {
                    color: $color-main;
                    font-family: 'Lato', sans-serif;
                    font-size: 1.8em;
                    font-weight: bold;
                    margin: 0;
                    padding-bottom: 5px;
                }

                .pi-link::before {
                    margin: 5px 5px -5px 0;
                    font-size: 0.8em;
                }

                .pi-link {
                    margin: 0 0 5px 5px;
                }

                i.pi {
                    float: right;
                    font-size: 1.2em;
                }
            }

            .authors {
                font-size: 0.8em;
            }

            .abstract {
                font-size: 1.2em;
                max-height: 200px;
                overflow-y: auto;
                margin: 20px 0 30px 0;
            }

            .values {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                justify-content: center;
                align-content: center;
                column-gap: 10px;
                row-gap: 10px;
                margin-top: 10px;

                div {
                    border-radius: 5px;
                    border: 2px solid $color-main;
                    padding: 5px 10px;

                    h3 {
                        color: black;
                        font-size: 0.9em;
                        margin: 0;
                        padding-bottom: 5px;
                    }

                    p {
                        font-size: 1.2em;
                        font-weight: bold;
                        float: right;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>
