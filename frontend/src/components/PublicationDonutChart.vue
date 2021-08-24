<template>
    <Chart v-if="loaded" :type="type" :data="chartdata"/>
</template>

<script>
    import PublicationService from "../services/PublicationService";

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
        },
        data: () => ({
            loaded: false,
            chartdata: null,
        }),
        mounted() {
            this.loaded = false;
            this.getter(this.id)
                .then(response => {
                    console.log(response.data.data);

                    let data = [];
                    let label = [];
                    response.data.data.forEach(e => {
                        if (e.count) data.push(e.count);
                        if (e.total) data.push(e.total);


                    if(this.dateFormat) {
                        let date = new Date(e._id);
                        const options = { hour: '2-digit', minute: '2-digit' };
                        label.push(date.toLocaleTimeString('de-DE', options))
                    } else {
                        label.push(e._id);
                    }
                        // label.push(e._id.h + 'h ' + e._id.d + '.' + e._id.m);
                    });

                    let dt = [{
                        label: this.title,
                        backgroundColor: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
                        borderColor: '#555',
                        borderWidth: 2,
                        hoverOffset: 4,
                        data: data,
                    }];

                    if (this.type === "line") {
                        dt = [{
                        label: this.title,
                            backgroundColor: '#1b9e77',
                            borderColor: '#555',
                            fill: true,
                            borderWidth: 2,
                            hoverOffset: 4,
                            data: data,
                        }];

                    }

                    this.chartdata = {
                        labels: label,
                        datasets: dt
                    };
                    console.log(this.chartdata);
                    this.loaded = true;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
</script>
