<template>
    <DataTable :value="data" dataKey="doi" :paginator="true" :rows="20" :rowHover="true"
               :loading="loading" :rowsPerPageOptions="[20,50,100]" :autoLayout="true" sort-order="2"
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
        name: 'Publications',
        data() {
            return {
                columns: [
                    {field: 'title', header: 'Title', sortable: false, numberTemplate:false},
                    {field: 'doi', header: 'DOI', sortable: false, numberTemplate:false},
                    {field: 'year', header: 'Year', sortable: true, numberTemplate:false},
                    {field: 'citationCount', header: 'Citation Count', sortable: true, class:"text-align-right", numberTemplate: true},
                    {field: 'score', header: 'Score', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'count', header: 'Tweet Count', sortable: true, class:"text-align-right  amba", numberTemplate: true},
                    {field: 'followers', header: 'Follower reached', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'hashtags', header: 'Hashtag Count', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'question_mark_count', header: 'Question Mark Count', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'exclamation_mark_count', header: 'Exclamation Mark Count', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'length_avg', header: 'avg Length', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'contains_abstract_avg', header: 'avg Contains Abstract', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'bot_rating_avg', header: 'avg Bot Rating', sortable: true, class:"text-align-right amba", numberTemplate: true},
                ],
                data: [],
                loading: true
            }
        }, created() {
            console.log('created');
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        methods: {
            rowClick(event) {
                console.log(event.data.doi)
                this.$router.push('/publication/' + event.data.doi)
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            fetchData() {
                console.log('fetch data');
                this.error = this.post = null
                this.loading = true;
                PublicationService.top(100)
                    .then(response => {
                        console.log(response.data.data);
                        this.data = response.data.data[0]
                        this.data.forEach(element => {
                            element.score = Math.round(element.score);
                            element.length_avg = Math.round(element.length_avg);
                            element.contains_abstract_avg = Math.round(element.contains_abstract_avg * 100) / 100;
                            // element.bot_rating_avg = Math.round(element.bot_rating_avg * 10000) / 10000;
                        });
                        this.loading = false
                        console.log(this.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        }
    }
</script>