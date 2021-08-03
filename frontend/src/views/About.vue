<template>
    <div class="about">
        <textarea v-model="words"></textarea>
    </div>
</template>

<script>
    import EventService from "../services/EventService";

    export default {
        name: 'About',
        data: () => ({
            words: "empty",
        }),
        components: {},
        mounted() {
            this.getWords();
        },
        methods: {
            getWords() {
                EventService.words()
                    .then(response => {

                        console.log(response);
                        // let words = [];

                        let st = "";
                        for (const [key, value] of Object.entries(response.data.data)) {
                            st += (`${key} ${value}`) + "\n";
                        }
                        this.words = st;
                        // response.data.data.forEach((e) => {
                        //     words = words.concat(e.words);
                        // });
                        // console.log(words);
                        // this.words = words;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    }
</script>
