<template>
    <h2>About <span>ambalytics analysis streams</span><a href="https://github.com/ambalytics" target="_blank"><img
            src="../assets/logo.png"></a></h2>
    <div class="about-container">
        <div class="about">
            <div class="about-line">powered by <a href="https://ambalytics.com/" target="_blank"><img
                    style="margin-bottom: -10px" src="../assets/amba-logo.png"></a></div>
            <div class="about-line">Twitter Data from <a href="https://twitter.com/" target="_blank"><img
                    src="../assets/twitter-logo.svg"></a></div>
            <div class="about-line">Publication Data from <a href="https://crossref.org/" target="_blank"><img
                    src="../assets/crossref-logo.svg"></a><a href="https://develop.openaire.eu/overview.html" target="_blank"><img
                    src="../assets/open-aire-logo.png"></a><a href="https://www.semanticscholar.org/product/api" target="_blank"><img
                    src="../assets/semantic_scholar-logo.svg"></a></div>
            <div class="about-line">Source Code<a href="https://github.com/ambalytics" target="_blank"><img
                    src="../assets/repo.png"></a></div>
            <div class="about-line"><a href="https://github.com/lukasjesche" target="_blank"><img class="logo" src="../assets/logo_lj.png">Lukas Jesche</a>License <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'About',
    }
</script>

<style lang="scss">
    @import '../assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    h2 {
        font-size: 30px;
        margin-left: 50px;

        span {
            margin-left: 20px;
            color: $color-main;
            letter-spacing: -2.5px;
            font-family: 'Lato', sans-serif;
            font-size: 35px;
            font-weight: bold;
            align-items: baseline;
        }

        img {
            margin-left: 10px;
            height: 35px;
            width: auto;
            margin-bottom: -5px;
        }
    }

    .about-container {
        display: flex;
        justify-content: center;
        padding-right: 350px;

        .about {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .about-line {
                border-radius: 5px;
                border: 3px solid $color-main;
                margin: 1em 1em;
                min-width: 600px;
                font-weight: bold;
                font-size: 35px;
                line-height: 50px;
                padding: 20px 50px;
                height: 90px;
                display: flex;
                justify-content: space-between;
                color: $color-main;
                font-variant: small-caps;
                letter-spacing: -2.5px;
                font-family: 'Lato', sans-serif;
                align-items: center;

                &:last-of-type {
                    border-top: 2px solid $color-main;
                    margin-top: 2em;
                    font-size: 30px;
                }

                a {
                    color: $color-main;
                    text-decoration: none;
                }

                img {
                    margin-left: 20px;
                    height: 50px;
                    width: auto;
                }
                .logo {
                    margin-bottom: -13px;
                    margin-right: 15px;
                    margin-left: 0;
                }
            }
        }
    }

    @media only screen and (max-width: 960px) {
        .about-container {
            padding-right: 0;
        }
    }
</style>