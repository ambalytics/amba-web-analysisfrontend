<template>
    <div class="p-input-icon-left">
        <i class="pi pi-search" @click="fetchData"/>
        <InputText v-model="searchWord" placeholder="Keyword Search" />
    </div>
    <DataTable :value="data" dataKey="doi" :paginator="true" :rows="10" :rowHover="true" :lazy="true"
               :loading="loading" :rowsPerPageOptions="[10]" :autoLayout="true" sort-order="2" :totalRecords="totalRecords"
               @page="onPage($event)" @sort="onSort($event)" ref="dt" sort-field="score"
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
                    {field: 'citation_count', header: 'Citation Count', sortable: true, class:"text-align-right", numberTemplate: true},
                    {field: 'score', header: 'Score', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'projected_change', header: 'projected_change', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'count', header: 'Tweet Count', sortable: true, class:"text-align-right  amba", numberTemplate: true},
                    {field: 'sum_follower', header: 'Follower reached', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'median_sentiment', header: 'Median Sentiment', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'abstract_difference', header: 'Abstract Difference', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    // {field: 'tweet_author_diversity', header: 'tweet_author_diversity', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    // {field: 'lan_diversity', header: 'lan_diversity', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    // {field: 'location_diversity', header: 'location_diversity', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'median_age', header: 'median_age', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'median_length', header: 'median_length', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'avg_questions', header: 'avg_questions', sortable: true, class:"text-align-right amba", numberTemplate: true},
                    {field: 'avg_exclamations', header: 'avg_exclamations', sortable: true, class:"text-align-right amba", numberTemplate: true},
                ],
                lazyParams: {},
                data: [],
                loading: true,
                searchWord: '',
                totalRecords: 1000,
            }
        },
        mounted() {
            this.loading = true;

            this.lazyParams = {
                first: 0,
                rows: this.$refs.dt.rows,
                sortField: null,
                sortOrder: null,
            };

            this.fetchData();
        },
        methods: {
            onPage(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            onSort(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            rowClick(event) {
                // console.log(event.data.doi)
                this.$router.push('/publication/' + event.data.doi)
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString('de-De');
            },
            fetchData() {
                // console.log('fetch data');
                this.error = this.post = null
                this.loading = true;
                console.log(this.lazyParams);
                PublicationService.top(this.lazyParams.first, this.lazyParams.rows, this.lazyParams.sortField, this.lazyParams.sortOrder === 2 ? 'asc' : 'desc', this.searchWord)
                    .then(response => {
                        // console.log(response.data.data);
                        this.data = response.data
                        this.data.forEach(element => {
                            console.log(element);
                            element.score = Math.round(element.score);
                            element.length_avg = Math.round(element.length_avg);
                            element.contains_abstract_avg = Math.round(element.contains_abstract_avg * 100) / 100;
                            // element.bot_rating_avg = Math.round(element.bot_rating_avg * 10000) / 10000;
                        });
                        this.loading = false
                        // console.log(this.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        }
    }
</script>