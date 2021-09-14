<template>
    <div class="vue-world-map">
        <Map @hoverCountry="onHoverCountry" @hoverLeaveCountry="onHoverLeaveCountry"/>
        <div class="scale">
            <div class="bar">
        <span v-for="color in scale.barData" :style="'background:' + color" :key="color">
        </span>
            </div>
            <div class="min">{{ scale.min }}</div>
            <div class="max">{{ scale.max }}</div>
        </div>
        <div
                v-if="legend.name && countryData[legend.code] > 0"
                class="vue-map-legend"
                :style="'left:' + position.left + 'px; top: ' + position.top + 'px'"
        >
            <div class="vue-map-legend-header">
                <span>{{legend.name}}</span>
            </div>
            <div class="vue-map-legend-content">
                <span>{{countryData[legend.code] || 0}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import chroma from "chroma-js";
    import Map from "./Map";
    import {
        getDynamicMapCss,
        getBaseCss,
        getCombinedCssString
    } from "../assets/dynamic-map-css";

    let legend = {
        data: null,
        code: null,
        name: null
    };

    let position = {
        left: 0,
        top: 0
    };

    let scale = {
        min: 0,
        max: 0,
        resolution: 100,
        barData: ["#fde2e2", "#d83737"]
    };

    export default {
        name: "MapChart",
        components: {Map},
        watch: {
            countryData() {
                this.renderMapCSS();
            }
        },
        props: {
            lowColor: {
                type: String,
                default: "#fde2e2"
            },
            highColor: {
                type: String,
                default: "#d83737"
            },
            chromaScaleOn: {
                type: Boolean,
                default: true
            },
            countryData: {
                type: Object,
                required: true
            },
            defaultCountryFillColor: {
                type: String,
                default: "#dadada"
            },
            countryStrokeColor: {
                type: String,
                default: "#909090"
            },
            legendHeaderBackgroundColor: {
                type: String,
                default: "white"
            },
            legendContentBackgroundColor: {
                type: String,
                default: "#dadbda8f"
            },
            legendFontColorHeader: {
                type: String,
                default: "black"
            },
            legendFontColorContent: {
                type: String,
                default: "black"
            },
            legendBorderColor: {
                type: String,
                default: "gray"
            },
            legendBorderRadius: {
                type: Number,
                default: 5
            },
            legendBoxShadow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                legend: legend,
                scale: scale,
                position: position,
                node: document.createElement("style"),
                chromaScale: chroma.scale(['#f7e5c2', this.$props.lowColor, this.$props.highColor]).correctLightness()
            };
        },
        methods: {
            onHoverCountry(country) {
                this.legend = country;
                this.position = country.position;
                this.$emit("hoverCountry", country);
            },
            onHoverLeaveCountry(country) {
                this.legend = {
                    data: null,
                    code: null,
                    name: null
                };
                this.$emit("hoverLeaveCountry", country);
            },
            renderMapCSS() {
                const baseCss = getBaseCss(this.$props);

                const dynamicMapCssResult = getDynamicMapCss(
                    this.$props.countryData,
                    this.chromaScale,
                    this.$props.highColor,
                    this.$props.chromaScaleOn
                );
                this.scale.min = dynamicMapCssResult.min;
                this.scale.max = dynamicMapCssResult.max;

                let barData = [];

                let colors = this.chromaScale.colors(this.scale.resolution);
                colors.forEach((e) => {
                   barData.push(e)
                });
                this.scale.barData = barData;
                // console.log(this.scale.barData);
                this.$data.node.innerHTML = getCombinedCssString(baseCss, dynamicMapCssResult.css);
            }
        },
        mounted() {
            document.body.appendChild(this.$data.node);
            this.renderMapCSS();
        }
    };
</script>

<style scoped>
    .vue-world-map,
    #map-svg {
        height: 100%;
    }

    .vue-world-map {
        position: relative;
    }

    .vue-map-legend {
        width: max-content;
        background: #fff;
        overflow: auto;
        border: 1px solid;
        position: absolute;
    }

    .vue-map-legend-header {
        padding: 10px 15px;
    }

    .vue-map-legend-content {
        padding: 10px 15px;
        background: #dadbda8f;
        border-top: 1px solid #acacad;
    }

    .scale {
        width: 30%;
        max-width: 200px;
        font-family: "Courier New", monospace !important;
        font-size: 0.9em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "bar bar" "min max";
        position: absolute;
        top: calc(100% + 15px);
        left: 0;
    }

    .scale .min {
        grid-area: min;
    }

    .scale .max {
        text-align: right;
        grid-area: max;
    }

    .scale .bar {
        grid-area: bar;
        width: 100%;
        height: 20px;
        display: flex;
        margin-bottom: 5px;
    }

    .scale .bar span {
        width: 10px;
        flex-grow: 1;
        flex-shrink: 1;
        height: 100%;
        display: inline-block;
    }
</style>