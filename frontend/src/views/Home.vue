<template>
    <div class="p-grid">

        <div class="p-col-3">
            <Card>
                <template #title>
                    Types
                </template>
                <template #content>
                    <publication-donut-chart></publication-donut-chart>
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

    </div>
</template>

<script>

    import PublicationDonutChart from "../components/PublicationDonutChart";
    import PublicationService from "../services/PublicationService";

    export default {
        name: 'Home',
        components: {PublicationDonutChart},
        methods: {
            sourceGetter() {
                return PublicationService.sources()
            },
            langGetter() {
                return PublicationService.lang()
            },
            timeOfDayGetter() {
                return PublicationService.timeOfDay()
            },
            entitiesGetter() {
                return PublicationService.entities()
            },
            hashtagsGetter() {
                return PublicationService.hashtags()
            }
        }
    }
</script>
