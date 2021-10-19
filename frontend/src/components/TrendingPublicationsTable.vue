<template>
    <div>
        <div class="p-input-icon-left">
            <i class="pi pi-search" @click="search"/>
            <InputText v-model="searchWord" placeholder="Title Search" @keydown="search"/>
        </div>
        <DataTable :value="value" dataKey="doi" :paginator="true" :rows="lazyParams.rows" :rowHover="true"
                   :lazy="true"
                   :loading="loading" :rowsPerPageOptions="[10, 20]" :sort-order="-1"
                   :totalRecords="totalRecords" class="big-table"
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
                <template #header>
                    <div v-if="col.help" :class="col.classHelp">
                        <i v-tooltip="col.help" class="pi pi-fw pi-question-circle"></i>
                    </div>
                </template>
                <template v-if="col.numberTemplate" #body="slotProps">
                    <div class="wrapper">{{ col.noLocale ? slotProps.data[col.field] :
                        localeNumber(slotProps.data[col.field]) }}
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
    export default {
        name: "TrendingPublicationTable",
        props: {
            value: {
                type: Array,
                required: true
            },
            lazyParams: {
                type: Object,
                required: true
            },
            loading: {
                type: Boolean,
                required: true
            },
            totalRecords: {
                type: Number,
                required: true
            },
        },
        methods: {
            onPage(event) {
                this.$emit('page', event);
            },
            onSort(event) {
                this.$emit('sort', event);
            },
            search(e) {
                if (e.keyCode === 13) {
                    this.$emit('search', this.searchWord);
                }
            },
            rowClick(event) {
                this.$router.push('/publication/' + event.data.doi)
            },
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                x = Math.round(x * 100) / 100;
                return x.toLocaleString(); // 'de-De'
            },
        },
        data() {
            return {
                searchWord: '',
                columns: [
                    {
                        field: 'trending_ranking',
                        header: 'Rank',
                        sortable: false,
                        numberTemplate: false,
                        class: "amba rank prio1",
                        help: false
                    },
                    {field: 'title', header: 'Title', sortable: false, numberTemplate: false, class: "prio1"},
                    {
                        field: 'pub_date',
                        header: 'Date',
                        sortable: true,
                        numberTemplate: true,
                        noLocale: true,
                        class: "prio1"
                    },
                    {
                        field: 'citation_count',
                        header: 'Citation Count',
                        sortable: true,
                        class: "text-align-right prio1",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'score',
                        header: 'Score',
                        sortable: true,
                        class: "text-align-right amba prio1",
                        numberTemplate: true
                    },
                    {
                        field: 'trending',
                        header: 'trending',
                        sortable: true,
                        class: "text-align-right amba prio1",
                        numberTemplate: true,
                        help: 'slope of the mann kendall yue wang modification trending result'
                    },
                    {
                        field: 'count',
                        header: 'Tweet Count',
                        sortable: true,
                        class: "text-align-right  amba prio1",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'sum_followers',
                        header: 'Followers reached',
                        sortable: true,
                        class: "text-align-right wider amba prio2",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'mean_sentiment',
                        header: 'Mean Sentiment',
                        sortable: true,
                        class: "text-align-right amba prio2",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'abstract_difference',
                        header: 'Abstract Difference',
                        sortable: true,
                        class: "text-align-right amba prio2",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'mean_age',
                        header: 'mean Age',
                        sortable: true,
                        class: "text-align-right amba prio2",
                        numberTemplate: true,
                        help: 'in hours'
                    },
                    {
                        field: 'projected_change',
                        header: 'Projected Change',
                        sortable: true,
                        class: "text-align-right amba prio2",
                        numberTemplate: true,
                        help: 'the expected score change to the next window using Holt-Winters forecasting',
                        classHelp: 'negative-margin-left'
                    },
                    {
                        field: 'mean_bot_rating',
                        header: 'mean Bot Rating',
                        sortable: true,
                        class: "text-align-right amba prio2",
                        numberTemplate: true,
                        help: 'higher is better'
                    },

                    {
                        field: 'ema',
                        header: 'ema',
                        sortable: true,
                        class: "text-align-right amba prio3",
                        numberTemplate: true,
                        help: 'exponential moving average'
                    },
                    {
                        field: 'kama',
                        header: 'kama',
                        sortable: true,
                        class: "text-align-right amba prio3",
                        numberTemplate: true,
                        help: 'Kaufman’s Adaptive Moving Average'
                    },
                    {
                        field: 'ker',
                        header: 'ker',
                        sortable: true,
                        class: "text-align-right amba prio3",
                        numberTemplate: true,
                        help: 'Kaufman’s Efficiency Ratio'
                    },
                    {
                        field: 'mean_score',
                        header: 'mean Score',
                        sortable: true,
                        class: "text-align-right amba prio3",
                        numberTemplate: true
                    },
                    {
                        field: 'stddev',
                        header: 'stddev',
                        sortable: true,
                        class: "text-align-right amba prio3",
                        numberTemplate: true,
                        help: 'standard deviation of non-null records'
                    },
                    {
                        field: 'mean_length',
                        header: 'mean Length',
                        sortable: true,
                        class: "text-align-right amba prio4",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'mean_questions',
                        header: 'mean "?"',
                        sortable: true,
                        class: "text-align-right amba prio4",
                        numberTemplate: true,
                        help: false
                    },
                    {
                        field: 'mean_exclamations',
                        header: 'mean "!"',
                        sortable: true,
                        class: "text-align-right amba prio4",
                        numberTemplate: true,
                        help: false
                    },
                ],
            }
        },
    }
</script>


<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'
</style>