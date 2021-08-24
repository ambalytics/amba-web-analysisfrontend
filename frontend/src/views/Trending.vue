<template>
    <DataTable :value="data" dataKey="doi" :paginator="true" :rows="10" :rowHover="true"
               :rowsPerPageOptions="[10,25,50]"
               @row-click="rowClick($event)">
        <template #empty>
            No Publications found.
        </template>
        <template #loading>
            Loading Publications data. Please wait.
        </template>
        <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable"
                :key="col.field"></Column>
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
                    {field: 'rank', header: 'Rank', sortable: false},
                    {field: 'doi', header: 'DOI', sortable: false},
                    {field: 'title', header: 'Title', sortable: false},
                    {field: 'year', header: 'Year', sortable: true},
                    {field: 'citationCount', header: 'Citation Count', sortable: true},
                    {field: 'count', header: 'Total Tweet Count', sortable: true},
                    {field: 'trending_score', header: 'Trending Score', sortable: true},
                    {field: 'score', header: 'Score', sortable: true},
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
                            rank: key
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
                        publication.trending_score = element.trending_score;
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
                               pub.score = response.data.data[0].sum;
                           }
                        });
                    });

                });
            },
        }
    }
</script>