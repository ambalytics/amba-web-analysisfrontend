Publications.vue<template>
    <div class="p-col-12 p-md-12 p-lg-12 p-xl-12">
        <Card class="table-card">
            <template #title>
                Trending Fields of Study
            </template>
            <template #content>
                <div class="p-input-icon-left">
                    <i class="pi pi-search" @click="fetchData"/>
                    <InputText v-model="searchWord" placeholder="Keyword Search" @keydown="search"/>
                </div>
                <DataTable :value="data" dataKey="doi" :paginator="true" :rows="this.lazyParams.rows" :rowHover="true" :lazy="true"
                           :loading="loading" :rowsPerPageOptions="[10, 20, 50]" :sort-order="-1"
                           :totalRecords="totalRecords" class="big-table"
                           @page="onPage($event)" @sort="onSort($event)" ref="dt" sort-field="score"
                           @row-click="rowClick($event)">
                    <template #empty>
                        No Fields of Study found.
                    </template>
                    <template #loading>
                        Loading Fields of Study data. Please wait.
                    </template>
                    <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable"
                            :key="col.field" :class="col.class">
                        <template v-if="col.numberTemplate" #body="slotProps">
                            <div class="wrapper">{{ col.noLocale ? slotProps.data[col.field] : localeNumber(slotProps.data[col.field]) }}</div>
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>

<script>
    import FieldOfStudyService from "../services/FieldOfStudyService";

    export default {
        name: 'FieldsOfStudy',
        beforeRouteUpdate(to, from) {
            if (to.query.time !== from.query.time) {
                if (this.$route.query.time !== undefined) {
                    this.duration = to.query.time;
                    this.fetchData();
                } else {
                    this.duration = 'currently';
                    this.fetchData();
                }
            }
        },
        data() {
            return {
                duration: "currently",
                columns: [
                    {field: 'trending_ranking', header: 'Rank', sortable: false, numberTemplate: false, class: "amba rank"},
                    {field: 'name', header: 'Name', sortable: false, numberTemplate: false},
                    {
                        field: 'pub_count',
                        header: 'Publication Count',
                        sortable: true,
                        class: "text-align-right",
                        numberTemplate: true
                    },
                    {
                        field: 'score',
                        header: 'Score',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'projected_change',
                        header: 'Projected Change',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'count',
                        header: 'Tweet Count',
                        sortable: true,
                        class: "text-align-right  amba",
                        numberTemplate: true
                    },
                    {
                        field: 'sum_followers',
                        header: 'Follower reached',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'median_sentiment',
                        header: 'Median Sentiment',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'abstract_difference',
                        header: 'Abstract Difference',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'median_age',
                        header: 'median Age',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'median_length',
                        header: 'median Length',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_questions',
                        header: 'mean "?"',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_exclamations',
                        header: 'mean "!"',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'mean_bot_rating',
                        header: 'mean Bot Rating',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'trending',
                        header: 'trending',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {field: 'ema', header: 'ema', sortable: true, class: "text-align-right amba", numberTemplate: true},
                    {
                        field: 'kama',
                        header: 'kama',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {field: 'ker', header: 'ker', sortable: true, class: "text-align-right amba", numberTemplate: true},
                    {
                        field: 'mean_score',
                        header: 'mean Score',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                    {
                        field: 'stddev',
                        header: 'stddev',
                        sortable: true,
                        class: "text-align-right amba",
                        numberTemplate: true
                    },
                ],
                lazyParams: {},
                data: [],
                loading: true,
                searchWord: '',
                totalRecords: 0,
            }
        },
        created() {
            if (this.$route.query.time !== undefined) {
                this.duration = this.$route.query.time;
            }
            this.fetchData();
        },
        mounted() {
            this.lazyParams = {
                first: 0,
                rows: 10,
                sortField: 'score',
                sortOrder: -1,
            };
        },
        methods: {
            search(e) {
                if (e.keyCode === 13) {
                    this.fetchData();
                }
            },
            onPage(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            onSort(event) {
                this.lazyParams = event;
                this.fetchData();
            },
            rowClick(event) {
                this.$router.push('/fieldOfStudy/' + event.data.id)
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString(); // 'de-De'
            },
            fetchData() {
                this.error = this.post = null;
                this.loading = true;
                console.log(this.lazyParams.sortOrder);
                FieldOfStudyService.trending(this.duration, this.lazyParams.first, this.lazyParams.rows, this.lazyParams.sortField, this.lazyParams.sortOrder > 0 ? 'asc' : 'desc', this.searchWord)
                    .then(response => {
                        this.data = response.data.results;
                        this.data.forEach(element => {
                            element.score = Math.round(element.score);
                            element.length_avg = Math.round(element.length_avg);
                            element.contains_abstract_avg = Math.round(element.contains_abstract_avg * 100) / 100;
                            this.totalRecords = element.total_count;
                        });
                        this.loading = false
                    })
                    .catch(e => {
                        this.data = [];
                        this.loading = false;
                        console.log(e);
                    });
            },
        }
    }
</script>