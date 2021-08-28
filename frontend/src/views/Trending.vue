<template>
    <DataTable :value="data" dataKey="doi" :rowHover="true"
               sortField="rank" :sortOrder="1" :autoLayout="true"
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
                    <div class="wrapper">{{ localeNumber(slotProps.data[col.field]) }}</div>
                </template>
        </Column>
    </DataTable>
</template>

<script>
    // top publications
    import PublicationService from "../services/PublicationService";

    export default {
        name: 'Trending',
        data() {
            return {
                columns: [
                    {field: 'rank', header: 'Rank', sortable: false, class:"amba"},
                    {field: 'title', header: 'Title', sortable: false},
                    {field: 'count', header: 'Total Tweet Count', sortable: false, class:"text-align-right amba", numberTemplate: true},
                    {field: 'trending_score', header: 'Trending Score', sortable: false, class:"text-align-right amba", numberTemplate: true},
                    {field: 'score', header: 'Total Score', sortable: false, class:"text-align-right amba", numberTemplate: true},
                    {field: 'doi', header: 'DOI', sortable: false},
                    {field: 'fieldsOfStudy', header: 'Fields Of Study', sortable: false},
                    {field: 'year', header: 'Year', sortable: false},
                    {field: 'citationCount', header: 'Citation Count', sortable: false, class:"text-align-right", numberTemplate: true},
                ],
                data: [],
                dataRaw: [],
                loading: false,
                connection: null
            }
        }, created() {
            console.log("Starting connection to WebSocket Server");
            // var ws = new WebSocket("ws://localhost:8080/live");
            this.connection = new WebSocket("ws://localhost:8080/live");

            let that = this;
            this.connection.onmessage = function(event) {
                let eventData = JSON.parse(event.data);
                this.loading = false;
                if (eventData.Message.aggregated_data) {
                    let trendingRaw = eventData.Message.aggregated_data;

                    that.data = [];
                    that.dataRaw = [];

                    for (const [key, value] of Object.entries(trendingRaw)) {
                        let doi = value.doi.substring(16); // https://doi.org/
                        let pub = {
                            doi: doi,
                            trending_score: value.score,
                            rank: parseInt(key) + 1
                        };
                        that.dataRaw.push(pub)
                    }
                    that.fetchData();
                }
            };

            this.connection.onopen = function(event) {
              console.log(event);
              console.log("Successfully connected to the echo websocket server...");
            };

        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            rowClick(event) {
                console.log(event.data.doi);
                // this.$router.push('/publication/' + event.data.doi)
                // window.open('/publication/' + event.data.doi, '_blank');
                let routeData = this.$router.resolve('/publication/' + event.data.doi);
                window.open(routeData.href, '_blank');
            },
            fetchData() {
                // console.log('fetch data');
                this.dataRaw.forEach(element => {
                     PublicationService.get(element.doi)
                    .then(response => {
                        // console.log(response.data)
                        let publication = response.data.data[0];
                        publication.url = 'doi.org/' + publication['doi'];
                        publication.rank = element.rank;
                        publication.trending_score = Math.round(element.trending_score);
                        let fields = '';
                        publication.fieldsOfStudy.forEach(f => {
                            fields += f.name + ', ';
                        });
                        publication.fieldsOfStudy = fields.substr(0, fields.length-2);
                        // publication.score = Math.round(publication.score);
                        this.data.push(publication)
                    })
                    .catch(e => {
                        console.log(e);
                    });

                     PublicationService.tweetCount(element.doi)
                    .then(response => {
                        // console.log(response.data.data[0].count)
                        this.data.forEach(pub => {
                           if (pub.doi === element.doi) {
                               pub.count = response.data.data[0].count;
                           }
                        });
                    });

                     PublicationService.scoreSum(element.doi)
                    .then(response => {
                        // console.log(response.data.data[0].count)
                        this.data.forEach(pub => {
                           if (pub.doi === element.doi) {
                               pub.score = Math.round(response.data.data[0].sum); // todo duplicate?
                           }
                        });
                    });

                });
            },
        }
    }
</script>
<style lang="scss">
    .p-datatable .p-datatable-tbody > tr > td:first-of-type {
        text-align: center;
    }
        td > .wrapper {
            padding: 10px 30px 10px 10px !important
    }
</style>