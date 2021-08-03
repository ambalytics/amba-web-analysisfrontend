<template>
    <div class="p-grid">

        <div class="p-col-6">
            <Card>
                <template #title>
                    {{ publication.title }}
                </template>
                <template #content>
                    {{ publication.abstract }}
                </template>
                <template #footer>
                    More Information: <a class="doi" :href="publication.url">{{ publication.url }}</a>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card class="side">
                <template #title>
                    {{ Information }}
                </template>
                <template #content>
                    <table class="info">
                        <tr>
                            <td><h4>Date:</h4></td>
                            <td>{{ publication.pubDate }}</td>
                        </tr>
                        <tr>
                            <td><h4>Type:</h4></td>
                            <td>{{ publication.type }}</td>
                        </tr>
                        <tr>
                            <td><h4>Publisher:</h4></td>
                            <td>{{ publication.publisher }}</td>
                        </tr>
                    </table>

                    <h4>Authors:</h4>
                    <ul class="authors">
                        <li v-for="author in publication.authors" v-bind:key="author.name">
                            {{ author.name }}
                        </li>
                    </ul>

                    <h4>Subjects:</h4>
                    <ul class="subjects">
                        <li v-for="subject in publication.fieldsOfStudy" v-bind:key="subject.name">
                            {{ subject.name }}
                        </li>
                    </ul>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Entities
                </template>
                <template #content>
                    <publication-donut-chart :getter="entitiesGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

         <div class="p-col-3">
            <Card>
                <template #title>
                    Types
                </template>
                <template #content>
                    <publication-donut-chart :getter="typeGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Sources
                </template>
                <template #content>
                    <publication-donut-chart :getter="sourceGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Languages
                </template>
                <template #content>
                    <publication-donut-chart :getter="langGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-3">
            <Card>
                <template #title>
                    Hashtags
                </template>
                <template #content>
                    <publication-donut-chart :getter="hashtagsGetter"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-6">
            <Card>
                <template #title>
                    Time of Day
                </template>
                <template #content>
                    <publication-donut-chart :getter="timeOfDayGetter" type="line"></publication-donut-chart>
                </template>
            </Card>
        </div>

        <div class="p-col-12">
            <DataTable :value="data" dataKey="_id" :paginator="true" :rows="10" :rowHover="true"
                       :loading="loading" :rowsPerPageOptions="[10,25,50]">
                <template #empty>
                    No Events found.
                </template>
                <template #loading>
                    Loading Event data. Please wait.
                </template>
                <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable"
                        :key="col.field"></Column>
            </DataTable>
        </div>
    </div>

</template>

<script>

    import PublicationDonutChart from "../components/PublicationDonutChart";
    import PublicationService from "../services/PublicationService";

    export default {
        name: 'Publication',
        components: {PublicationDonutChart},
        data: () => ({
            publication: {},
               columns: [
                    {field: '_id', header: 'id', sortable: false},
                    {field: 'time_past', header: 'time_past', sortable: true},
                    {field: 'text', header: 'text', sortable: true},
                    {field: 'source', header: 'source', sortable: true},
                    {field: 'lang', header: 'lang', sortable: true},
                    {field: 'tweet_type', header: 'tweet_type', sortable: true},
                    {field: 'score', header: 'score', sortable: true},
                    {field: 'question_mark_count', header: 'question_mark_count', sortable: true},
                    {field: 'exclamation_mark_count', header: 'exclamation_mark_count', sortable: true},
                    {field: 'length', header: 'length', sortable: true},
                    {field: 'contains_abstract', header: 'contains_abstract', sortable: true},
                    {field: 'bot_rating', header: 'bot_rating', sortable: true},
                ],
                data: [],
                loading: true
        }), created() {
            console.log('created');
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        methods: {
            typeGetter() {
                return PublicationService.types(this.$route.params.p + "/" + this.$route.params.s)
            },
            sourceGetter() {
                return PublicationService.sources(this.$route.params.p + "/" + this.$route.params.s)
            },
            langGetter() {
                return PublicationService.lang(this.$route.params.p + "/" + this.$route.params.s)
            },
            timeOfDayGetter() {
                return PublicationService.timeOfDay(this.$route.params.p + "/" + this.$route.params.s)
            },
            entitiesGetter() {
                return PublicationService.entities(this.$route.params.p + "/" + this.$route.params.s)
            },
            hashtagsGetter() {
                return PublicationService.hashtags(this.$route.params.p + "/" + this.$route.params.s)
            },
            fetchData() {
                console.log('fetch data');

                this.loading = true;
                // todo check how many / can be in doi
                PublicationService.get(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        // console.log(response.data.data);
                        this.publication = response.data.data[0];
                        this.publication.url = 'doi.org/' + this.publication['doi'];
                        // console.log(this.publication);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                PublicationService.twitter(this.$route.params.p + "/" + this.$route.params.s)
                    .then(response => {
                        this.loading = false;
                        this.data = response.data.data[0];
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        }
    }
</script>

<style lang="scss">
    a.doi {
        font-size: 0.9em;
        color: #9dc4dc;
        text-decoration: none;

        &:hover {
            color: white;
        }
    }

    .info {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
        width: 100%;
    }

    .side {
        li {
            padding: 5px 0;
        }
    }
</style>
