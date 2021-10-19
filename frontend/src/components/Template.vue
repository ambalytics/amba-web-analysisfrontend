<template>

</template>

<script>
    // import FieldOfStudyService from "../services/FieldOfStudyService";

    export default {
        name: "AmbaTweet",
        components: {Tweet},
        watch: {
            countryData() {
                this.loadNewestTweet();
            }
        },
        props: {
            doi_in: {
                type: String,
                required: false
            },
        },
        computed: {
            pubUrl: function () {
                return '/publication/' + this.doi
            }
        },
        data() {
            return {
                title: '',
            }
        },
        created() {
            this.loadNewestTweet();
        },
        methods: {
            localeNumber: function (x) {
                if (isNaN(x)) return '-';
                return x.toLocaleString();  //'de-De'
            },
        }
    }
</script>


<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'
</style>