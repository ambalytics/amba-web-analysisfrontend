(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Publications"],{cbf6:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},r=Object(n["i"])(" Trending Publications by Ambalytics Trends "),l=Object(n["j"])("br",null,null,-1),i={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},s=Object(n["i"])(" Trending Publications ");function c(e,t,a,c,d,u){var h=Object(n["C"])("time-tooltip"),b=Object(n["C"])("Dropdown"),m=Object(n["C"])("publication-chart"),g=Object(n["C"])("Card"),v=Object(n["C"])("TrendingPublicationsTable");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["j"])("div",o,[Object(n["j"])(g,{class:"table-card big-chart"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),r]})),content:Object(n["K"])((function(){return[Object(n["j"])(b,{modelValue:d.selectedTrendField,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.selectedTrendField=e}),options:d.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:u.loadTrendingProgress},null,8,["modelValue","options","onChange"]),l,Object(n["j"])(m,{height:600,title:" ",dateFormat:!0,rawData:d.trendOverTimeData,type:"line"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",i,[Object(n["j"])(g,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),s]})),content:Object(n["K"])((function(){return[Object(n["j"])(v,{value:d.data,lazyParams:d.lazyParams,loading:d.loading,totalRecords:d.totalRecords,onPage:t[2]||(t[2]=function(e){return u.onPage(e)}),onSort:t[3]||(t[3]=function(e){return u.onSort(e)})},null,8,["value","lazyParams","loading","totalRecords"])]})),_:1})])],64)}a("159b");var d=a("94e1"),u=a("15c5"),h=a("6e74"),b=a("3f5f"),m=a("fb6c"),g={name:"Publications",components:{PublicationChart:h["a"],TimeTooltip:u["a"],TrendingPublicationsTable:m["a"]},beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==e.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",trendOverTimeData:[],lazyParams:{},totalRecords:0,data:[],loading:!0,searchWord:"",selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"mean_sentiment"},{label:"Followers",value:"sum_follower"},{label:"Contains Abstract",value:"abstract_difference"},{label:"Mean Age",value:"mean_age"},{label:"Length",value:"mean_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Trending Value",value:"trending"},{label:"ema",value:"ema"},{label:"kama",value:"kama"},{label:"ker",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"stddev",value:"stddev"}],dois:[]}},created:function(){document.title="Trending publications",void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){this.searchWord=e,this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},loadTrendingProgress:function(){var e=this;b["a"].progressTrending(this.selectedTrendField,this.lazyParams.rows,this.duration,this.dois).then((function(t){e.trendOverTimeData=t.data.results})).catch((function(t){e.trendOverTimeData=[],console.log(t)}))},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,d["a"].trending(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results;var a=[];e.data.forEach((function(t){if(a.push(t.doi),t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.projected_change=Math.round(t.projected_change),t.mean_age=Math.round(t.mean_age/3600*10)/10,t.mean_length=Math.round(t.mean_length),t.ema=Math.round(t.ema),t.kama=Math.round(t.kama),t.mean_score=Math.round(t.mean_score),t.stddev=Math.round(t.stddev),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count?t.total_count:0,t.pub_date){var n=new Date(t.pub_date);t.pub_date=n.toLocaleDateString()}else t.pub_date=t.year})),e.dois=a,e.loading=!1,e.loadTrendingProgress()})).catch((function(t){e.data=[],e.loading=!1,console.log(t)}))}}};g.render=c;t["default"]=g},d636:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},r=Object(n["i"])(" Trending COVID-19 Publications by Ambalytics Trends "),l=Object(n["j"])("br",null,null,-1),i={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},s=Object(n["i"])(" Trending COVID-19 Publications ");function c(e,t,a,c,d,u){var h=Object(n["C"])("time-tooltip"),b=Object(n["C"])("Dropdown"),m=Object(n["C"])("publication-chart"),g=Object(n["C"])("Card"),v=Object(n["C"])("TrendingPublicationsTable");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["j"])("div",o,[Object(n["j"])(g,{class:"table-card big-chart"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),r]})),content:Object(n["K"])((function(){return[Object(n["j"])(b,{modelValue:d.selectedTrendField,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.selectedTrendField=e}),options:d.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:u.loadTrendingProgress},null,8,["modelValue","options","onChange"]),l,Object(n["j"])(m,{height:600,title:" ",dateFormat:!0,rawData:d.trendOverTimeData,type:"line"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",i,[Object(n["j"])(g,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["j"])(h),s]})),content:Object(n["K"])((function(){return[Object(n["j"])(v,{value:d.data,lazyParams:d.lazyParams,loading:d.loading,totalRecords:d.totalRecords,onPage:t[2]||(t[2]=function(e){return u.onPage(e)}),onSort:t[3]||(t[3]=function(e){return u.onSort(e)})},null,8,["value","lazyParams","loading","totalRecords"])]})),_:1})])],64)}a("159b");var d=a("94e1"),u=a("15c5"),h=a("6e74"),b=a("3f5f"),m=a("fb6c"),g={name:"CovidPapers",components:{PublicationChart:h["a"],TimeTooltip:u["a"],TrendingPublicationsTable:m["a"]},beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==e.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",trendOverTimeData:[],lazyParams:{},totalRecords:0,data:[],loading:!0,searchWord:"",selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"mean_sentiment"},{label:"Followers",value:"sum_follower"},{label:"Contains Abstract",value:"abstract_difference"},{label:"Mean Age",value:"mean_age"},{label:"Length",value:"mean_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Trending Value",value:"trending"},{label:"ema",value:"ema"},{label:"kama",value:"kama"},{label:"ker",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"stddev",value:"stddev"}],dois:[]}},created:function(){document.title="COVID-19 Trends - trending publications about covid",void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){this.searchWord=e,this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},loadTrendingProgress:function(){var e=this;b["a"].progressTrending(this.selectedTrendField,this.lazyParams.rows,this.duration,this.dois).then((function(t){e.trendOverTimeData=t.data.results})).catch((function(t){e.trendOverTimeData=[],console.log(t)}))},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,d["a"].trendingCovid(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results;var a=[];e.data.forEach((function(t){if(a.push(t.doi),t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.projected_change=Math.round(t.projected_change),t.mean_age=Math.round(t.mean_age/3600*10)/10,t.mean_length=Math.round(t.mean_length),t.ema=Math.round(t.ema),t.kama=Math.round(t.kama),t.mean_score=Math.round(t.mean_score),t.stddev=Math.round(t.stddev),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count?t.total_count:0,t.pub_date){var n=new Date(t.pub_date);t.pub_date=n.toLocaleDateString()}else t.pub_date=t.year})),e.dois=a,e.loading=!1,e.loadTrendingProgress()})).catch((function(t){e.data=[],e.loading=!1,console.log(t)}))}}};g.render=c;t["default"]=g}}]);
//# sourceMappingURL=Publications.f48ea302.js.map