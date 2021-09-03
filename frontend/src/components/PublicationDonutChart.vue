<template>
    <Chart v-if="loaded" :type="type" :data="chartdata" :options="options" :height="height"/>
</template>

<script>
    import PublicationService from "../services/PublicationService";
    import chroma from 'chroma-js';

    export default {
        name: 'PublicationDonutChart',
        props: {
            type: {
                type: String,
                default: "doughnut"
            },
            id: {
                type: String,
                default: null
            },
            getter: {
                type: Function,
                default: PublicationService.types
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
        },
        data: () => ({
            loaded: false,
            chartdata: null,
        }),
        mounted() {
            this.loaded = false;
            this.getter(this.id)
                .then(response => {
                    // console.log(response.data.data);

                    let data = [];
                    let label = [];
                    let total = 0;
                    if (response.data) {

                        response.data.forEach(e => {

                            if (e.value !== "total") {
                                // console.log(total)
                                if (this.growingData) {
                                    if (e.count) {
                                        total += e.count;
                                    } else if (e.total) {
                                        total += e.total
                                    }
                                    data.push(total);
                                } else {
                                    if (e.count) {
                                        data.push(e.count);
                                    } else if (e.total) {
                                        data.push(e.total);
                                    }
                                }

                                if (this.dateFormat) {
                                    let date = new Date(e.year, e.month, e.day, e.hour);
                                    const options = {hour: '2-digit', minute: '2-digit'};
                                    label.push(date.toLocaleTimeString('de-DE', options))
                                } else {
                                    label.push(e.value);
                                }
                            }
                            // label.push(e._id.h + 'h ' + e._id.d + '.' + e._id.m);
                        });

                        let colors = [];
                        let c = chroma.scale(['#0F6364', '#67002E', '#E6B24B']);
                        for (let i = 0; i < data.length; i++) {
                            colors.push(c(i / (data.length - 1)).hex())
                        }
                        // console.log(response.data.length);
                        // console.log(colors);

                        let dt = [{
                            label: this.title,
                            // backgroundColor: ['#0F6364FF', '#0F6364EE', '#0F6364DD', '#0F6364CC', '#0F6364BB', '#0F6364AA', '#0F636499', '#0F636488', '#0F636477', '#0F636466', '#0F636455', '#0F636444', '#0F636433', '#0F636422', '#0F636411'],
                            backgroundColor: colors,
                            borderColor: '#555',
                            borderWidth: 2,
                            hoverOffset: 4,
                            data: data,
                        }];

                        this.options = {
                            responsive: true,
                        };

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
                            this.options['scales'] = {
                                y: {
                                    min: 0
                                }
                            }
                        }

                        this.chartdata = {
                            labels: label,
                            datasets: dt
                        };
                        // console.log(this.chartdata);
                        this.loaded = true;
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
</script>
