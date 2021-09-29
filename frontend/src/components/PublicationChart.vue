<template>
    <div class="time-options" v-if="dateTimeOptions">
        <span v-for="(subject, index) in dataTimeOptions" v-bind:key="subject.name" @click="changeTimeOptions(subject.duration)" v-bind:class="{ active: dateTimeRange === index }">
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
            chartdata: null,
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
        },
        methods: {
          changeTimeOptions(duration) {
              console.log(duration)
          }
        },
        watch: {
            rawData: function(val) {
                let data = [];
                let label = [];
                let rest = 0;
                let total = 0;

                if (val) {
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
