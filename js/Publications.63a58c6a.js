(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Publications"],{cbf6:function(e,a,t){"use strict";t.r(a);var n=t("7a23"),o={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},r=Object(n["i"])(" Trending Publications over Time by Ambalytics Trends "),l=Object(n["j"])("br",null,null,-1),i={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},s=Object(n["i"])(" Trending Publications ");function c(e,a,t,c,d,u){var h=Object(n["C"])("time-tooltip"),b=Object(n["C"])("Dropdown"),m=Object(n["C"])("publication-chart"),g=Object(n["C"])("Card"),f=Object(n["C"])("TrendingPublicationsTable");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["j"])("div",o,[Object(n["j"])(g,{class:"table-card big-chart"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),r]})),content:Object(n["K"])((function(){return[Object(n["j"])(b,{modelValue:d.selectedTrendField,"onUpdate:modelValue":a[1]||(a[1]=function(e){return d.selectedTrendField=e}),options:d.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:u.loadTrendingProgress},null,8,["modelValue","options","onChange"]),l,Object(n["j"])(m,{height:600,title:" ",dateFormat:!0,rawData:d.trendOverTimeData,type:"line"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",i,[Object(n["j"])(g,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),s]})),content:Object(n["K"])((function(){return[Object(n["j"])(f,{value:d.data,lazyParams:d.lazyParams,loading:d.loading,totalRecords:d.totalRecords,onPage:a[2]||(a[2]=function(e){return u.onPage(e)}),onSort:a[3]||(a[3]=function(e){return u.onSort(e)})},null,8,["value","lazyParams","loading","totalRecords"])]})),_:1})])],64)}t("159b");var d=t("94e1"),u=t("15c5"),h=t("6e74"),b=t("3f5f"),m=t("fb6c"),g={name:"Publications",components:{PublicationChart:h["a"],TimeTooltip:u["a"],TrendingPublicationsTable:m["a"]},beforeRouteUpdate:function(e,a){e.query.time!==a.query.time&&(void 0!==e.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",trendOverTimeData:[],lazyParams:{},totalRecords:0,data:[],loading:!0,searchWord:"",selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"mean_sentiment"},{label:"Followers",value:"sum_follower"},{label:"Contains Abstract",value:"abstract_difference"},{label:"Mean Age",value:"mean_age"},{label:"Length",value:"mean_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Trending Value",value:"trending"},{label:"ema",value:"ema"},{label:"kama",value:"kama"},{label:"ker",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"stddev",value:"stddev"}],dois:[]}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){this.searchWord=e,this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},loadTrendingProgress:function(){var e=this;b["a"].progressTrending(this.selectedTrendField,this.lazyParams.rows,this.duration,this.dois).then((function(a){e.trendOverTimeData=a.data.results})).catch((function(a){e.trendOverTimeData=[],console.log(a)}))},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,d["a"].trending(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(a){e.data=a.data.results;var t=[];e.data.forEach((function(a){if(t.push(a.doi),a.score=Math.round(a.score),a.length_avg=Math.round(a.length_avg),a.projected_change=Math.round(a.projected_change),a.mean_age=Math.round(a.mean_age/3600*10)/10,a.mean_length=Math.round(a.mean_length),a.ema=Math.round(a.ema),a.kama=Math.round(a.kama),a.mean_score=Math.round(a.mean_score),a.stddev=Math.round(a.stddev),a.contains_abstract_avg=Math.round(100*a.contains_abstract_avg)/100,e.totalRecords=a.total_count?a.total_count:0,a.pub_date){var n=new Date(a.pub_date);a.pub_date=n.toLocaleDateString()}else a.pub_date=a.year})),e.dois=t,e.loading=!1,e.loadTrendingProgress()})).catch((function(a){e.data=[],e.loading=!1,console.log(a)}))}}};g.render=c;a["default"]=g}}]);
//# sourceMappingURL=Publications.63a58c6a.js.map