<template>
    <div class="wordCloud" ref="wordCloud" :style="style"></div>
</template>

<script>
import * as d3 from "d3";
import * as cloud from 'd3-cloud';

export default {
    data() {
        return {
            layout: {},
            chart: {},
            fill: null,
            style: ''
        }
    },
    props: {
        data: {
            type: Array,
            required: true,
            ro: null,
        },
        fontSizeMapper: {
            type: Function,
            required: true,
        },
        onWordClick: {
            type: Function,
            default: (word) => {
                // console.log(word.target.textContent);
                let annotation = word.target.textContent;
                if (annotation.startsWith('@')) {
                    // remove @
                    window.open("https://twitter.com/" + annotation, '_blank');
                }
            },
        },
        rotate: {
            type: [Function, String, Number],
            default: 0,
        },
        font: {
            type: [String, Function],
            default: 'Candara'
        },
        width: {
            type: [Number, String],
            default: 960,
        },
        height: {
            type: [Number, String],
            default: 500,
        },
        padding: {
            type: [Number, String],
            default: 5,
        },
        spiral: {
            type: String,
            default: "archimedean",
        },
        coloring: {
            type: String,
            default: "random",
        },
        colors: {
            type: Array,
            default() {
                return ['#0F6364', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666']
            }
        }
    },
    mounted() {
        console.log('this.$refs.wordCloud.clientHeight')
        console.log(this.$refs.wordCloud.clientHeight)
        console.log('mounted canvas')
        console.log(this.data)
        this.createCanvas()
        this.ro = new ResizeObserver(this.onResize).observe(this.$refs.wordCloud)
    },
    beforeUnmount () {
        if (this.ro)
          this.ro.unobserve(this.$refs.wordCloud)
    },
    watch: {
        data() {
            this.createCanvas()
        },
        rotate() {
            this.createCanvas()
        },
        font() {
            this.createCanvas()
        },
        padding() {
            this.createCanvas()
        },
        spiral() {
            this.createCanvas()
        },
        colors() {
            this.createCanvas()
        },
        coloring() {
            this.createCanvas()
        }
    },
    methods: {
        onResize () {
            console.log(this.$refs.wordCloud.offsetHeight);
            console.log(this.$refs.wordCloud.offsetWidth);
            let wrapperHeight = this.$refs.wordCloud.offsetHeight;
            let wrapperWidth = this.$refs.wordCloud.offsetWidth;
            let dh = wrapperHeight / this.height;
            let dw = wrapperWidth / this.width;
            let r = 1;
            if (dh > dw) {
                r = dw;
            } else {
                r = dh;
            }
            this.style = 'transform: scale(' + r + ');';
        },
        createCanvas: function() {
            const wordCounts = this.data.map(
                text => ({ ...text })
            );
            d3.select(this.$el).selectAll('*').remove();
            const layout = cloud()
            .size([this.width, this.height])
            .words(wordCounts)
            .padding(this.padding)
            .spiral(this.spiral)
            .rotate(this.rotate)
            .font(this.font)
            .fontSize(this.fontSizeMapper)
            .on('end', this.end);



            if(this.colors)
                this.fill = d3.scaleOrdinal().range(this.colors)
            else
                this.fill = d3.scaleOrdinal(d3.schemeCategory10)
            layout.start();
        },
        end: function(words) {
            let _fill;
            switch(this.coloring){
                case "random":
                    _fill = (d, i) => this.fill(i);
                    break;
                case "size":
                    _fill = (d) => this.fill(d.size);
                    break;
                default:
                    _fill = (d, i) => this.fill(i);
            }
            d3.select(this.$el)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewbox', "0 0 " + this.height + " " + this.width)
            .append('g')
            .attr('transform', `translate(${this.width / 2},${this.height / 2})`)
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .style('font-family', d => d.font)
            .style('font-size', d => {
                return `${d.size}px`
            })
            .style('fill', _fill)
            .attr('text-anchor', 'middle')
            .attr('transform',d => {
                return `translate(${[d.x, d.y]})rotate(${d.rotate})`
            })
            .text(d => d.text)
            .on('click', d => this.onWordClick(d));
        },
    }
 }
</script>