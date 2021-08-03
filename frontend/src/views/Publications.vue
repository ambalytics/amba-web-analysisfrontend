<template>
    <DataTable :value="data" dataKey="doi" :paginator="true" :rows="10" :rowHover="true"
               :loading="loading" :rowsPerPageOptions="[10,25,50]"
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
        name: 'Publications',
        data() {
            return {
                columns: [
                    {field: 'doi', header: 'DOI', sortable: false},
                    {field: 'year', header: 'Year', sortable: true},
                    {field: 'citationCount', header: 'citationCount', sortable: true},
                    {field: 'count', header: 'count', sortable: true},
                    {field: 'score', header: 'score', sortable: true},
                    {field: 'question_mark_count', header: 'question_mark_count', sortable: true},
                    {field: 'exclamation_mark_count', header: 'exclamation_mark_count', sortable: true},
                    {field: 'length_avg', header: 'length_avg', sortable: true},
                    {field: 'contains_abstract_avg', header: 'contains_abstract_avg', sortable: true},
                    {field: 'bot_rating_avg', header: 'bot_rating_avg', sortable: true},
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
            fetchData() {
                console.log('fetch data');
                this.error = this.post = null
                this.loading = true;
                PublicationService.top(100)
                    .then(response => {
                        console.log(response.data.data);
                        this.data = response.data.data[0]
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