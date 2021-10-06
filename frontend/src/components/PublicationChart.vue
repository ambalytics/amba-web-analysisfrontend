<template>
    <div class="time-options" v-if="dateTimeOptions">
        <span v-for="(subject, index) in dataTimeOptions" v-bind:key="subject.name"
              @click="changeTimeOptions(subject.duration)" v-bind:class="{ active: dateTimeRange === index }">
            {{ subject.name }}
        </span>
    </div>
    <Chart v-if="loaded" :type="type" :data="chartData" :options="options" :height="height"/>
</template>

<script>
    import chroma from 'chroma-js';

    export default {
        name: 'PublicationChart',
        props: {
            type: {
                type: String,
                default: "doughnut"
            },
            id: {
                type: String,
                default: null
            },
            rawData: {
                type: Array,
                default: null
            },
            dateFormat: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'unknown'
            },
            growingData: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number,
                default: 150
            },
            showOthers: {
                type: Boolean,
                default: true
            },
            dateTimeOptions: {
                type: Boolean,
                default: true
            },
            dateTimeRange: {
                type: Number,
                default: 0
            },
        },
        data: () => ({
            loaded: false,
            chartData: null,
        }),
        mounted() {
            this.options = {
                responsive: true,
            };

            if (this.type === "line") {
                this.options['scales'] = {
                    y: {
                        min: 0
                    }
                }
            }

            if (this.type === "radar") {
                this.options = {
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#495057'
                            }
                        }
                    },
                    scales: {
                        r: {
                            pointLabels: {
                                color: '#495057',
                            },
                            grid: {
                                color: '#ebedef',
                            },
                            angleLines: {
                                color: '#ebedef'
                            }
                        }
                    }
                }
            }
        },
        methods: {
            changeTimeOptions(duration) {
                console.log(duration)
            },
            mapProfileRange: function (number, minIn, maxIn, minOut, maxOut) {
                let r = (number - minIn) * (maxOut - minOut) / (maxIn - minIn) + minOut;
                console.log([minIn, maxIn, number, r]);
                return r;
            }
        },
        watch: {
            rawData: function (val) {
                let data = [];
                let label = [];
                let rest = 0;
                let total = 0;

                if (val) {
                    if (this.type === "radar") {

                        let data_this = [
                            this.mapProfileRange(val['publication']['median_score'], val['min']['mean_score'], val['max']['mean_score'], 0, 100),
                            this.mapProfileRange(val['publication']['mean_bot_rating'], val['min']['mean_bot_rating'], val['max']['mean_bot_rating'], 0, 100),
                            this.mapProfileRange(val['publication']['median_sentiment'], val['min']['median_sentiment'], val['max']['median_sentiment'], 0, 100),
                            this.mapProfileRange(val['publication']['sum_followers'], val['min']['sum_follower'], val['max']['sum_follower'], 0, 100),
                            this.mapProfileRange(1 - val['publication']['median_abstract'],  1 - val['max']['abstract_difference'], 1 - val['min']['abstract_difference'], 0, 100),
                            this.mapProfileRange(val['publication']['mean_questions'], val['min']['mean_questions'], val['max']['mean_questions'], 0, 100),
                            this.mapProfileRange(val['publication']['mean_exclamations'], val['min']['mean_exclamations'], val['max']['mean_exclamations'], 0, 100),
                            this.mapProfileRange(val['publication']['mean_length'], val['min']['median_length'], val['max']['median_length'], 0, 100),
                        ];

                        let data_avg = [
                            this.mapProfileRange(val['avg']['mean_score'], val['min']['mean_score'], val['max']['mean_score'], 0, 100),
                            this.mapProfileRange(val['avg']['mean_bot_rating'], val['min']['mean_bot_rating'], val['max']['mean_bot_rating'], 0, 100),
                            this.mapProfileRange(val['avg']['median_sentiment'], val['min']['median_sentiment'], val['max']['median_sentiment'], 0, 100),
                            this.mapProfileRange(val['avg']['sum_follower'], val['min']['sum_follower'], val['max']['sum_follower'], 0, 100),
                            this.mapProfileRange(1 - val['avg']['abstract_difference'], 1 - val['max']['abstract_difference'], 1 - val['min']['abstract_difference'], 0, 100),
                            this.mapProfileRange(val['avg']['mean_questions'], val['min']['mean_questions'], val['max']['mean_questions'], 0, 100),
                            this.mapProfileRange(val['avg']['mean_exclamations'], val['min']['mean_exclamations'], val['max']['mean_exclamations'], 0, 100),
                            this.mapProfileRange(val['avg']['median_length'], val['min']['median_length'], val['max']['median_length'], 0, 100),
                        ];

                        console.log(data_this);
                        console.log(data_avg);

                        this.loaded = true;
                        this.chartData = {
                            labels: ['Score', 'Bot Percentage', 'Sentiment', 'Follower', 'Abstract Difference', 'Questions', 'Exclamations', 'Length'],
                            datasets: [
                                {
                                    label: 'average Publication',
                                    backgroundColor: 'rgba(179,181,198,0.2)',
                                    borderColor: 'rgba(179,181,198,1)',
                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                    data: data_avg
                                },
                                {
                                    label: val['publication']['doi'],
                                    backgroundColor: 'rgba(15,99,100,0.2)',
                                    borderColor: 'rgba(15,99,100,1)',
                                    pointBackgroundColor: 'rgba(15,99,100,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(15,99,100,1)',
                                    data: data_this
                                }
                            ]
                        };

                    } else {


                        val.forEach(e => {
                            if (e.value !== "total") {
                                // console.log(total)
                                if (e.count) {
                                    total += e.count;
                                } else if (e.total) {
                                    total += e.total
                                }
                                if (this.growingData) {
                                    data.push(total);
                                } else {
                                    if (e.count) {
                                        data.push(e.count);
                                    } else if (e.total) {
                                        data.push(e.total);
                                    }
                                }

                                if (this.dateFormat) {
                                    let date = new Date(e.time);
                                    const options = {hour: '2-digit', minute: '2-digit'};
                                    label.push(date.toLocaleTimeString('de-DE', options))
                                } else {
                                    // todo hour shift to local time for time of day
                                    label.push(e.value);
                                }
                            } else {
                                if (e.count) {
                                    rest = e.count;
                                } else if (e.total) {
                                    rest = e.total;
                                }
                            }
                            // label.push(e._id.h + 'h ' + e._id.d + '.' + e._id.m);
                        });

                        if (rest > 0 && rest - total > 0 && this.showOthers) {
                            data.push(rest - total);
                            label.push('Others');
                        }

                        let colors = [];
                        let c = chroma.scale(['#0F6364', '#67002E', '#E6B24B']);
                        for (let i = 0; i < data.length; i++) {
                            colors.push(c(i / (data.length - 1)).hex())
                        }
                        // console.log(response.data.length);
                        // console.log(colors);

                        let dt = [{
                            label: this.title,
                            backgroundColor: colors,
                            borderColor: '#555',
                            borderWidth: 2,
                            hoverOffset: 4,
                            data: data,
                        }];

                        if (this.type === "line") {
                            dt = [{
                                label: this.title,
                                backgroundColor: '#0F6364',
                                borderColor: '#555',
                                fill: true,
                                borderWidth: 2,
                                hoverOffset: 4,
                                data: data,
                            }];
                        }
                        this.loaded = true;
                        this.chartData = {
                            labels: label,
                            datasets: dt
                        };
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    .time-options {
        display: flex;
        font-size: 0.9em;
        padding-left: 10px;
        position: relative;
        top: -50px;
        right: -320px;
        color: $color-main;

        span.active {
            text-decoration: underline;
        }

        span::after {
            content: '|';
            padding: 10px;
        }

        span:last-of-type::after {
            content: none;
        }
    }
</style>
