(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Author"],{9411:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),l={class:"p-grid"},o={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},r={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},c=Object(n["i"])("Trending Publications by Ambalytics Trends "),i=Object(n["j"])("br",null,null,-1),s={key:1,class:"no-data"},u={class:"p-col-12 p-md-6 p-lg-6 p-xl-3"},d=Object(n["i"])(" Stats "),b={class:"padding-left"},j=Object(n["i"])(" Tweet Count "),h={class:"padding-left"},p={class:"padding-left"},O=Object(n["i"])(" Publication Count "),m={class:"padding-left"},f={class:"padding-left"},g=Object(n["i"])(" Total Followers Reached "),v={class:"padding-left"},w={class:"padding-left"},C=Object(n["i"])(" Average Score per Tweet "),_={class:"padding-left"},T={class:"padding-left"},P=Object(n["i"])(" Average Sentiment "),y={class:"padding-left"},D={class:"padding-left"},A=Object(n["i"])(" Average Abstract Similarity "),F={class:"padding-left"},M={class:"padding-left"},S=Object(n["j"])("h3",null,"Tweet Author Count",-1),K={class:"padding-left"},x={class:"p-col-12 p-md-6 p-lg-6 p-xl-3"},N=Object(n["i"])(" Profile "),k={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},q=Object(n["i"])(" Tweet Author Locations "),$={key:1,class:"no-data"},z={class:"p-col-12 p-md-12 p-lg-12 p-xl-6 word-wrapper"},R=Object(n["i"])(" Tweet Content Word Cloud "),V={key:1,class:"no-data"},G={class:"p-col-12 p-md-12 p-lg-12 p-xl-6"},E=Object(n["i"])(" Newest Tweet "),L={class:"p-col-12 p-md-12 p-lg-12 p-xl-6"},W=Object(n["i"])(" Publications by Twitter Activity over Time "),U=Object(n["j"])("br",null,null,-1),B={key:1,class:"no-data"};function J(t,e,a,J,Q,H){var I=Object(n["C"])("TrendingPublicationsTable"),X=Object(n["C"])("Card"),Y=Object(n["C"])("time-tooltip"),Z=Object(n["C"])("Dropdown"),tt=Object(n["C"])("publication-chart"),et=Object(n["C"])("MapChart"),at=Object(n["C"])("word-cloud"),nt=Object(n["C"])("AmbaTweet");return Object(n["u"])(),Object(n["f"])("div",l,[Object(n["j"])("div",o,[Object(n["j"])(X,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["i"])(" Trending "+Object(n["G"])(Q.authorName),1)]})),content:Object(n["K"])((function(){return[Object(n["j"])(I,{value:Q.data,lazyParams:Q.lazyParams,loading:Q.loading,totalRecords:Q.totalRecords,onPage:e[1]||(e[1]=function(t){return H.onPage(t)}),onSort:e[2]||(e[2]=function(t){return H.onPage(t)}),onSearch:e[3]||(e[3]=function(t){return H.onSearch(t)})},null,8,["value","lazyParams","loading","totalRecords"])]})),_:1})]),Object(n["j"])("div",r,[Object(n["j"])(X,{class:"big-chart"},{title:Object(n["K"])((function(){return[Object(n["j"])(Y),c]})),content:Object(n["K"])((function(){return[Object(n["j"])(Z,{modelValue:Q.selectedTrendField,"onUpdate:modelValue":e[4]||(e[4]=function(t){return Q.selectedTrendField=t}),options:Q.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:H.loadTrendingProgress},null,8,["modelValue","options","onChange"]),i,Q.renderTrendingChart?(Object(n["u"])(),Object(n["f"])(tt,{key:0,height:500,title:" ",dateFormat:!0,rawData:Q.trendOverTimeData,type:"line"},null,8,["rawData"])):(Object(n["u"])(),Object(n["f"])("div",s," - no data available - "))]})),_:1})]),Object(n["j"])("div",u,[Object(n["j"])(X,{class:"stats"},{title:Object(n["K"])((function(){return[d]})),content:Object(n["K"])((function(){return[Object(n["j"])("div",b,[Object(n["j"])("h3",null,[Object(n["j"])(Y),j]),Object(n["j"])("p",h,Object(n["G"])(H.localeNumber(Q.tweetCount)),1)]),Object(n["j"])("div",p,[Object(n["j"])("h3",null,[Object(n["j"])(Y),O]),Object(n["j"])("p",m,Object(n["G"])(H.localeNumber(Q.pubCount)),1)]),Object(n["j"])("div",f,[Object(n["j"])("h3",null,[Object(n["j"])(Y),g]),Object(n["j"])("p",v,Object(n["G"])(H.localeNumber(Q.totalFollowers)),1)]),Object(n["j"])("div",w,[Object(n["j"])("h3",null,[Object(n["j"])(Y),C]),Object(n["j"])("p",_,Object(n["G"])(H.localeNumber(Math.round(100*Q.score)/100)),1)]),Object(n["j"])("div",T,[Object(n["j"])("h3",null,[Object(n["j"])(Y),P]),Object(n["j"])("p",y,Object(n["G"])(H.localeNumber(Math.round(100*Q.sentiment)/100)),1)]),Object(n["j"])("div",D,[Object(n["j"])("h3",null,[Object(n["j"])(Y),A]),Object(n["j"])("p",F,Object(n["G"])(H.localeNumber(Math.round(1e4*Q.containsAbstract)/100))+"%",1)]),Object(n["j"])("div",M,[S,Object(n["j"])("p",K,Object(n["G"])(H.localeNumber(Q.tweetAuthorCount)),1)])]})),_:1})]),Object(n["j"])("div",x,[Object(n["j"])(X,null,{title:Object(n["K"])((function(){return[N]})),content:Object(n["K"])((function(){return[Object(n["j"])(tt,{title:" ",rawData:Q.profileData,height:500,type:"radar"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",k,[Object(n["j"])(X,null,{title:Object(n["K"])((function(){return[q]})),content:Object(n["K"])((function(){return[Q.renderMap?(Object(n["u"])(),Object(n["f"])(et,{key:0,countryData:Q.countries},null,8,["countryData"])):(Object(n["u"])(),Object(n["f"])("div",$," - no data available - "))]})),_:1})]),Object(n["j"])("div",z,[Object(n["j"])(X,null,{title:Object(n["K"])((function(){return[R]})),content:Object(n["K"])((function(){return[Q.renderCloud?(Object(n["u"])(),Object(n["f"])(at,{key:0,ref:"worldCloud",data:Q.words},null,8,["data"])):(Object(n["u"])(),Object(n["f"])("div",V," - no data available - "))]})),_:1})]),Object(n["j"])("div",G,[Object(n["j"])(X,null,{title:Object(n["K"])((function(){return[E]})),content:Object(n["K"])((function(){return[Object(n["j"])(nt,{id_in:t.$route.params.id,mode:"author"},null,8,["id_in"])]})),_:1})]),Object(n["j"])("div",L,[Object(n["j"])(X,{class:"big-chart"},{title:Object(n["K"])((function(){return[W]})),content:Object(n["K"])((function(){return[Object(n["j"])(Z,{modelValue:Q.selectedPubField,"onUpdate:modelValue":e[5]||(e[5]=function(t){return Q.selectedPubField=t}),options:Q.pubFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:H.loadPubsProgress},null,8,["modelValue","options","onChange"]),U,Q.renderPublicationChart?(Object(n["u"])(),Object(n["f"])(tt,{key:0,height:600,title:" ",dateFormat:!0,rawData:Q.pubsOverTimeData,type:"line"},null,8,["rawData"])):(Object(n["u"])(),Object(n["f"])("div",B," - no data available - "))]})),_:1})])])}a("b0c0"),a("159b");var Q=a("94e1"),H=a("fa34"),I=a("6e74"),X=a("df6d"),Y=a("8b39"),Z=a("ea6f"),tt=a("3f5f"),et=a("15c5"),at=a("fb6c"),nt={name:"Publications",components:{PublicationChart:I["a"],MapChart:X["a"],AmbaTweet:Y["a"],WordCloud:Z["a"],TimeTooltip:et["a"],TrendingPublicationsTable:at["a"]},beforeRouteUpdate:function(t,e){t.query.time!==e.query.time&&(void 0!==t.query.time?(this.duration=t.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",authorName:"",lazyParams:{},data:[],loading:!0,searchWord:"",totalRecords:0,countries:[],words:[],renderMap:!1,renderCloud:!1,renderTrendingChart:!0,renderPublicationChart:!0,pubCount:"-",tweetCount:"-",score:"-",totalFollowers:"-",sentiment:"-",containsAbstract:"-",questions:"-",exclamations:"-",tweetAuthorCount:"-",trendOverTimeData:[],selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"mean_sentiment"},{label:"Followers",value:"sum_followers"},{label:"Abstract Similarity",value:"abstract_difference"},{label:"Mean Age",value:"mean_age"},{label:"Length",value:"mean_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Theil–Sen estimator",value:"trending"},{label:"EMA",value:"ema"},{label:"KAMA",value:"kama"},{label:"KER",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"SD",value:"stddev"}],pubsOverTimeData:[],selectedPubField:"score",pubFields:[{label:"Bot Rating",value:"bot_rating"},{label:"Abstract Similarity",value:"contains_abstract_raw"},{label:"Exclamations",value:"exclamations"},{label:"Followers",value:"followers"},{label:"Length",value:"length"},{label:"Questions",value:"questions"},{label:"Score",value:"score"},{label:"Sentiment",value:"sentiment_raw"},{label:"Count",value:"count"}],profileData:[]}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:5,sortField:"score",sortOrder:-1}},methods:{loadPubsProgress:function(){var t=this;H["a"].progressValue(this.selectedPubField,5,this.duration,this.$route.params.id).then((function(e){t.pubsOverTimeData=e.data.results,t.renderPublicationChart=!0})).catch((function(e){t.renderPublicationChart=!1,t.pubsOverTimeData=[],console.log(e)}))},loadTrendingProgress:function(){var t=this;H["a"].progressTrending(this.selectedTrendField,5,this.duration,this.$route.params.id).then((function(e){t.trendOverTimeData=e.data.results,t.renderTrendingChart=!0,console.log(t.trendOverTimeData)})).catch((function(e){t.renderTrendingChart=!1,t.trendOverTimeData=[],console.log(e)}))},onPage:function(t){this.lazyParams=t,this.fetchData()},onSearch:function(t){this.searchWord=t,this.fetchData()},localeNumber:function(t){return isNaN(t)?"-":t.toLocaleString()},fetchData:function(){var t=this;this.loading=!0,H["a"].get(this.$route.params.id).then((function(e){t.authorName=e.data.results.author.name,document.title=t.authorName})).catch((function(e){t.authorName="",console.log(e)})),Q["a"].trendingAuthor(this.duration,this.$route.params.id,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(e){t.data=e.data.results,t.data.forEach((function(e){if(e.score=Math.round(e.score),e.length_avg=Math.round(e.length_avg),e.projected_change=Math.round(e.projected_change),e.mean_age=Math.round(e.mean_age/3600*10)/10,e.mean_length=Math.round(e.mean_length),e.ema=Math.round(e.ema),e.kama=Math.round(e.kama),e.mean_score=Math.round(e.mean_score),e.stddev=Math.round(e.stddev),e.contains_abstract_avg=Math.round(100*e.contains_abstract_avg)/100,t.totalRecords=e.total_count?e.total_count:0,e.pub_date){var a=new Date(e.pub_date);e.pub_date=a.toLocaleDateString()}else e.pub_date=e.year})),t.loading=!1})).catch((function(e){t.data=[],t.loading=!1,console.log(e)})),this.loadPubsProgress(),this.loadTrendingProgress(),H["a"].numbers(this.duration,null,this.$route.params.id).then((function(e){t.tweetCount=e.data.results["count"],t.totalFollowers=e.data.results["followers"],t.score=e.data.results["score"],t.containsAbstract=e.data.results["contains_abstract_raw"],t.sentiment=e.data.results["sentiment_raw"],t.pubCount=e.data.results["pub_count"],t.questions=e.data.results["questions"],t.exclamations=e.data.results["exclamations"]})).catch((function(e){console.log(e),t.tweetCount="-",t.totalFollowers="-",t.score="-",t.containsAbstract="-",t.sentiment="-",t.pubCount="-",t.questions="-",t.exclamations="-"})),H["a"].profileData(this.$route.params.id,this.duration).then((function(e){t.profileData=[e.data.results]})).catch((function(t){console.log(t)})),H["a"].top(null,this.$route.params.id).then((function(e){var a=[];e.data.results.word.forEach((function(t){var e={};e.text=t.value,e.value=t.count,a.push(e)})),t.words=a,t.renderCloud=!0})).catch((function(e){t.renderCloud=!1,console.log(e)})),H["a"].top(["location"],this.$route.params.id,1e3).then((function(e){var a={};e.data.results.location.forEach((function(t){a[t.value.toUpperCase()]=t.count})),t.countries=a,t.renderMap=!0})).catch((function(e){t.renderMap=!1,console.log(e)})),tt["a"].tweetAuthorCount("author",null,this.$route.params.id).then((function(e){t.tweetAuthorCount=e.data.results[0].count})).catch((function(e){t.tweetAuthorCount="-",console.log(e)}))}}};nt.render=J;e["default"]=nt}}]);
//# sourceMappingURL=Author.ecac84ff.js.map