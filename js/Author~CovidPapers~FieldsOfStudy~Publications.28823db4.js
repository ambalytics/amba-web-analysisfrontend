(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Author~CovidPapers~FieldsOfStudy~Publications"],{"129f":function(e,a){e.exports=Object.is||function(e,a){return e===a?0!==e||1/e===1/a:e!=e&&a!=a}},"14fd":function(e,a,t){},"841c":function(e,a,t){"use strict";var r=t("d784"),n=t("825a"),l=t("1d80"),i=t("129f"),o=t("14c3");r("search",(function(e,a,t){return[function(a){var t=l(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,t):new RegExp(a)[e](String(t))},function(e){var r=t(a,this,e);if(r.done)return r.value;var l=n(this),s=String(e),c=l.lastIndex;i(c,0)||(l.lastIndex=0);var d=o(l,s);return i(l.lastIndex,c)||(l.lastIndex=c),null===d?-1:d.index}]}))},ad72:function(e,a,t){"use strict";t("14fd")},fb6c:function(e,a,t){"use strict";t("ac1f"),t("841c");var r=t("7a23"),n={class:"p-input-icon-left"},l=Object(r["i"])(" No Publications found. "),i=Object(r["i"])(" Loading Publications data. Please wait. "),o={class:"pi pi-fw pi-question-circle"},s={class:"wrapper"};function c(e,a,t,c,d,u){var b=Object(r["C"])("InputText"),p=Object(r["C"])("Column"),h=Object(r["C"])("DataTable"),m=Object(r["D"])("tooltip");return Object(r["u"])(),Object(r["f"])("div",null,[Object(r["j"])("div",n,[Object(r["j"])("i",{class:"pi pi-search",onClick:a[1]||(a[1]=function(){return u.search&&u.search.apply(u,arguments)})}),Object(r["j"])(b,{modelValue:d.searchWord,"onUpdate:modelValue":a[2]||(a[2]=function(e){return d.searchWord=e}),placeholder:"Title Search",onKeydown:u.search},null,8,["modelValue","onKeydown"])]),Object(r["j"])(h,{value:t.value,dataKey:"doi",paginator:!0,rows:t.lazyParams.rows,rowHover:!0,lazy:!0,loading:t.loading,rowsPerPageOptions:[5,10,20],"sort-order":-1,totalRecords:t.totalRecords,class:"big-table",onPage:a[3]||(a[3]=function(e){return u.onPage(e)}),onSort:a[4]||(a[4]=function(e){return u.onSort(e)}),ref:"dt","sort-field":"score",onRowClick:a[5]||(a[5]=function(e){return u.rowClick(e)})},{empty:Object(r["K"])((function(){return[l]})),loading:Object(r["K"])((function(){return[i]})),default:Object(r["K"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(d.columns,(function(e){return Object(r["u"])(),Object(r["f"])(p,{field:e.field,header:e.header,sortable:e.sortable,key:e.field,class:e.class},Object(r["h"])({header:Object(r["K"])((function(){return[e.help?(Object(r["u"])(),Object(r["f"])("div",{key:0,class:e.classHelp},[Object(r["L"])(Object(r["j"])("i",o,null,512),[[m,e.help]])],2)):Object(r["g"])("",!0)]})),_:2},[e.numberTemplate?{name:"body",fn:Object(r["K"])((function(a){return[Object(r["j"])("div",s,Object(r["G"])(e.noLocale?a.data[e.field]:u.localeNumber(a.data[e.field])),1)]}))}:void 0]),1032,["field","header","sortable","class"])})),128))]})),_:1},8,["value","rows","loading","totalRecords"])])}t("a9e3");var d={name:"TrendingPublicationTable",props:{value:{type:Array,required:!0},lazyParams:{type:Object,required:!0},loading:{type:Boolean,required:!0},totalRecords:{type:Number,required:!0}},methods:{onPage:function(e){this.$emit("page",e)},onSort:function(e){this.$emit("sort",e)},search:function(e){13===e.keyCode&&this.$emit("search",this.searchWord)},rowClick:function(e){this.$router.push("/publication/"+e.data.doi)},localeNumber:function(e){return isNaN(e)?"-":(e=Math.round(100*e)/100,e.toLocaleString())}},data:function(){return{searchWord:"",columns:[{field:"trending_ranking",header:"Rank",sortable:!1,numberTemplate:!1,class:"amba rank prio1",help:!1},{field:"title",header:"Title",sortable:!1,numberTemplate:!1,class:"prio1"},{field:"pub_date",header:"Date",sortable:!0,numberTemplate:!0,noLocale:!0,class:"prio1"},{field:"citation_count",header:"Citation Count",sortable:!0,class:"text-align-right prio1",numberTemplate:!0,help:!1},{field:"score",header:"Score",sortable:!0,class:"text-align-right amba prio1",numberTemplate:!0},{field:"trending",header:"Theil–Sen estimator",sortable:!0,class:"text-align-right amba prio1",numberTemplate:!0,help:"Theil–Sen estimator, slope of the mann kendall yue wang modification trending calculation"},{field:"count",header:"Tweet Count",sortable:!0,class:"text-align-right  amba prio1",numberTemplate:!0,help:!1},{field:"sum_followers",header:"Followers reached",sortable:!0,class:"text-align-right wider amba prio2",numberTemplate:!0,help:!1},{field:"mean_sentiment",header:"Mean Sentiment",sortable:!0,class:"text-align-right amba prio2",numberTemplate:!0,help:!1},{field:"abstract_difference",header:"Abstract Similarity",sortable:!0,class:"text-align-right amba prio2",numberTemplate:!0,help:!1},{field:"mean_age",header:"Mean Age",sortable:!0,class:"text-align-right amba prio2",numberTemplate:!0,help:"in hours"},{field:"projected_change",header:"Projected Change",sortable:!0,class:"text-align-right amba prio2",numberTemplate:!0,help:"the expected score change to the next window using Holt-Winters forecasting",classHelp:"negative-margin-left"},{field:"mean_bot_rating",header:"Mean Bot Rating",sortable:!0,class:"text-align-right amba prio2",numberTemplate:!0,help:"Higher values means less bots, a score of 10 means no detected bots."},{field:"ema",header:"EMA",sortable:!0,class:"text-align-right amba prio3",numberTemplate:!0,help:"Exponential Moving Average"},{field:"kama",header:"KAMA",sortable:!0,class:"text-align-right amba prio3",numberTemplate:!0,help:"Kaufman’s Adaptive Moving Average"},{field:"ker",header:"KER",sortable:!0,class:"text-align-right amba prio3",numberTemplate:!0,help:"Kaufman’s Efficiency Ratio"},{field:"mean_score",header:"Mean Score",sortable:!0,class:"text-align-right amba prio3",numberTemplate:!0},{field:"stddev",header:"SD",sortable:!0,class:"text-align-right amba prio3",numberTemplate:!0,help:"Standard Deviation of the scores"},{field:"mean_length",header:"Mean Length",sortable:!0,class:"text-align-right amba prio4",numberTemplate:!0,help:!1},{field:"mean_questions",header:'Mean "?"',sortable:!0,class:"text-align-right amba prio4",numberTemplate:!0,help:!1},{field:"mean_exclamations",header:'Mean "!"',sortable:!0,class:"text-align-right amba prio4",numberTemplate:!0,help:!1}]}}};t("ad72");d.render=c;a["a"]=d}}]);
//# sourceMappingURL=Author~CovidPapers~FieldsOfStudy~Publications.28823db4.js.map