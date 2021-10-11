<template>

    <div class="layout-topbar p-d-flex p-shadow-3  p-jc-between  p-ai-center">
        <div class="logo-link">
            <router-link to="/" class="logo p-d-flex p-ai-center">
                <img alt="logo" src="./assets/logo.png">
            </router-link>
        </div>

        <div class="time-selection">
            <i class="pi pi-fw pi-clock" style="margin-right: 5px"></i>
            <Dropdown v-model="selectedTime" :options="dataTimeOptions" optionLabel="label" @change="changeDuration  ">
            </Dropdown>
        </div>

        <div class="header-text">ambalytics analysis streams</div>

        <Menubar :model="items">
            <template #item="{item}">
                <router-link v-if="item.show" :to="item.to" class="p-d-flex p-ai-center p-menuitem-link">
                    <span class="p-menuitem-text">{{item.label}}</span>
                </router-link>
            </template>
        </Menubar>
    </div>

    <div class="layout-content">
        <router-view/>
    </div>
</template>


<script>
    export default {
        created() {
            document.title = "ambalytics analysis streams";

            this.$router.isReady().then(() => {
                if (this.$route.query.time !== undefined) {
                    this.dataTimeOptions.forEach((e) => {
                        if (e.duration + "" === this.$route.query.time) {
                            this.selectedTime = e;
                        }
                    });
                } else {
                    this.selectedTime = this.dataTimeOptions[0];
                }
            });

            this.$router.options.routes.forEach(route => {
                this.items.push({
                    label: route.name,
                    to: route.path,
                    show: route.show,
                    icon: route.icon
                })
            });
        },
        data() {
            return {
                items: [],
                dataTimeOptions: [{
                    label: 'currently',
                    duration: 'currently'
                }, {
                    label: 'today',
                    duration: 'today'
                }, {
                    label: 'week',
                    duration: 'week',
                }, {
                    label: 'month',
                    duration: 'month',
                }, {
                    label: 'year',
                    duration: 'year',
                }],
                selectedTime: null,
            }
        },
        methods: {
            changeDuration() {
                console.log(this.selectedTime.duration);
                this.$router.push({path: this.$route.path, query: {time: this.selectedTime.duration}});
            }
        }
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<style lang="scss">
    @import './assets/_theme.scss'; // copied from '~primevue/resources/themes/nova/theme.css'

    .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
        background: rgba($color-main, 0.2) !important;
    }

    .p-datatable.big-table {
        th:nth-child(1), td:nth-child(1) {
            width: 60px;
        }
        th:nth-child(2), td:nth-child(2) {
            width: 350px;
        }
    }

    table.p-datatable-table {

        .p-datatable-tbody > tr > td {
            padding: 10px;

            &.rank {
                width: 40px;
                text-align: center;
                font-size: 1.5em;
                font-weight: bold;
            }
        }

        td > .wrapper {
            font-size: 0.95em;
            text-align: right;
            display: inline-block;
            min-width: 100%;
            font-weight: 700;
            font-family: 'Courier New', monospace !important;
            padding: 10px 40px 10px 10px !important
        }

        th {
            font-size: 0.9em;
        }

        th.text-align-right > .p-column-header-content > span.p-column-title {
            display: inline-block !important;
            width: 100% !important;
            text-align: center !important;
        }

        th.amba > .p-column-header-content > span.p-column-title {
            color: darken($color-main, 0.5) !important;
        }

        th.text-align-right {
            text-align: center;
        }

        .p-column-header-content > span.p-column-title {
            font-weight: 700;
        }

        .p-datatable-tbody > tr > td {
            text-align: left;
            border-bottom: none;
        }

        .p-datatable-tbody > tr:nth-child(odd) {
            background: rgba($color-main, 0.05)
        }

        .p-datatable-thead > tr > th {
            border-bottom: 1px solid #ccc;
        }
    }

    .p-input-icon-left, .p-input-icon-right {
        position: absolute !important;
        right: 0;
        top: -3em;

        input {
            width: 300px;
        }

        .pi-search {
            cursor: pointer;
        }
    }

    .table-card div.p-card-content {
        position: relative !important;
    }

    td.amba {
        color: $color-main;
        font-weight: bold;
        font-size: 1.05em;
    }

    .layout-topbar .p-menubar .p-menuitem .p-menuitem-link {
        background: white !important;
        box-shadow: inset 0 0 0 2px $color-main;
        margin-left: 5px;

        .p-menuitem-text {
            color: $color-main !important;
            font-weight: bold;
        }
    }

    .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
        background: rgba($color-main, 0.8) !important;
        color: white !important;
    }

    .layout-topbar .p-menubar .p-menuitem .router-link-active {
        background: $color-main !important;

        .p-menuitem-text {
            color: white !important;
            font-weight: bold;
        }

    }

    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:hover {
        background: rgba($color-main, 0.7) !important;

        .p-menuitem-text {
            color: white !important;
        }

    }

    .p-card-title {
        color: $color-main;
    }


    body {
        margin: 0;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: var(--surface-b);
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: var(--text-color);
    }

    .layout-topbar {
        box-shadow: 0 0 4px rgba(0, 0, 0, .25);
        border-bottom: 1px solid var(--surface-d);
        background-color: var(--surface-a);
        height: 70px;
        padding: 0 10px;

        .p-menubar {
            height: 60px;
            border: none;

            .p-menuitem {
                .router-link-active {
                    background: var(--surface-b);
                    border-radius: 4px;
                }
            }
        }

        .logo-link {
            padding: 5px;

            a {
                padding: 5px;
                color: var(--text-color);
                text-decoration: none;

                &:hover {
                    background: rgba(0, 0, 0, 0.06);
                    border-radius: 4px;
                }
            }


            img {
                height: 50px;
                width: auto;
            }
        }

        div.header-text {
            color: $color-main;
            /*font-variant: small-caps;*/
            letter-spacing: -2.5px;
            font-family: 'Lato', sans-serif;
            font-size: 2em;
            font-weight: bold;
        }

    }

    .layout-content {
        padding: 1em;

        .p-card {
            padding: 1em;
        }
    }

    .word-wrapper {
        .p-card-body {
            height: 100%;

            .p-card-content {
                height: 100%;
            }

        }

        .wordCloud {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            svg {
                overflow: visible;
            }
        }

    }

    .vue-map-legend {
        width: 185px;
        background: var(--surface-c);
        overflow: auto;
        border: 1px solid;
        position: absolute;

        .vue-map-legend-header {
            padding: 10px 15px;
            background: var(--surface-a);
        }

        .vue-map-legend-content {
            padding: 10px 15px;
            background: rgba($color-main, 0.3);
            border-top: 1px solid #acacad;
        }
    }

    .stats {

        .p-card-content {;
            display: grid;
            padding: 0 1vw;
            grid-template-columns: 85%;
            justify-content: center;
            align-items: center;
            align-content: center;


            div.padding-left {
                width: 100%;
            }

            h3 {
                margin: 0.6em 0 0.2em 0.7em;
                font-size: 1.2em;
                width: 100%;
            }

            p.padding-left {
                margin: -5px 0 0 0;
                font-weight: 700;
                font-size: 2.6em;
                font-family: 'Courier New', monospace !important;
                text-align: end;
                width: 100%;
                color: $color-main;
            }
        }
    }

    .p-card {
        height: 100%;
    }

    .time-selection {
        display: flex;
        align-items: center;

        .p-dropdown-label {
            color: white;
            padding: 10px;
        }

        span.p-dropdown-trigger-icon.pi.pi-chevron-down {
            color: white;
        }

        div.p-dropdown {
            background: $color-main;
            font-weight: bold;
            border: 2px solid $color-main;
        }

        .pi-clock {
            font-size: 1.4em;
            color: $color-main !important;
        }
    }


    div.vue-world-map {
        margin-bottom: 20px;
    }

    .big-chart {
        .p-card-content, .p-card-body {
            height: 100%;
            color: #fff;
            position: relative;
        }

        .p-dropdown {
            position: absolute;
            right: 0;
            width: 150px;
            top: -40px;
        }
    }

    .no-data {
        height: 100%;
        width: 100%;
        color: darkgrey;
    }


    .scroller .p-card-content, .special-scrollbar {

        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #fff;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: $color-main;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: $color-main;
        }
    }

    @-moz-document url-prefix('') {
        .scroller .p-card-content, .special-scrollbar {
            scrollbar-color: $color-main white !important;
            scrollbar-width: thin !important;
        }
    }

    @media only screen and (max-width: 960px) {

        .layout-topbar .p-menubar .p-menuitem .p-menuitem-link {
            box-shadow: none;
            margin-left: 0;
        }


        .p-menubar.p-menubar-mobile-active .p-menubar-root-list[role=menubar] {
            top: 90%;
            left: -50px;
            min-width: max-content;
        }
    }
</style>
