(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Publications"],{"107c":function(e,t,a){var n=a("d039");e.exports=n((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,a){var n=a("c6b6"),r=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"841c":function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),l=a("1d80"),o=a("129f"),i=a("14c3");n("search",(function(e,t,a){return[function(t){var a=l(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,this,e);if(n.done)return n.value;var l=r(this),c=String(e),s=l.lastIndex;o(s,0)||(l.lastIndex=0);var u=i(l,c);return o(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,a){"use strict";var n=a("ad6d"),r=a("9f7f"),l=a("5692"),o=a("7c73"),i=a("69f3").get,c=a("fce3"),s=a("107c"),u=RegExp.prototype.exec,d=l("native-string-replace",String.prototype.replace),b=u,f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=r.UNSUPPORTED_Y||r.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],g=f||h||m||c||s;g&&(b=function(e){var t,a,r,l,c,s,g,p=this,v=i(p),x=v.raw;if(x)return x.lastIndex=p.lastIndex,t=b.call(x,e),p.lastIndex=x.lastIndex,t;var j=v.groups,O=m&&p.sticky,T=n.call(p),y=p.source,_=0,w=e;if(O&&(T=T.replace("y",""),-1===T.indexOf("g")&&(T+="g"),w=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(y="(?: "+y+")",w=" "+w,_++),a=new RegExp("^(?:"+y+")",T)),h&&(a=new RegExp("^"+y+"$(?!\\s)",T)),f&&(r=p.lastIndex),l=u.call(O?a:p,w),O?l?(l.input=l.input.slice(_),l[0]=l[0].slice(_),l.index=p.lastIndex,p.lastIndex+=l[0].length):p.lastIndex=0:f&&l&&(p.lastIndex=p.global?l.index+l[0].length:r),h&&l&&l.length>1&&d.call(l[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)})),l&&j)for(l.groups=s=o(null),c=0;c<j.length;c++)g=j[c],s[g[0]]=l[g[1]];return l}),e.exports=b},"9f7f":function(e,t,a){var n=a("d039"),r=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},cbf6:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var n=a("7a23"),r={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},l=Object(n["i"])(" Trending Publications "),o=Object(n["j"])("br",null,null,-1),i={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},c=Object(n["i"])(" Trending Publications "),s={class:"p-input-icon-left"},u=Object(n["i"])(" No Publications found. "),d=Object(n["i"])(" Loading Publications data. Please wait. "),b={class:"wrapper"};function f(e,t,a,f,m,h){var g=this,p=Object(n["C"])("time-tooltip"),v=Object(n["C"])("Dropdown"),x=Object(n["C"])("publication-chart"),j=Object(n["C"])("Card"),O=Object(n["C"])("InputText"),T=Object(n["C"])("Column"),y=Object(n["C"])("DataTable");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["j"])("div",r,[Object(n["j"])(j,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["j"])(p),l]})),content:Object(n["K"])((function(){return[Object(n["j"])(v,{modelValue:m.selectedTrendField,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.selectedTrendField=e}),options:m.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:h.loadTrendingProgress},null,8,["modelValue","options","onChange"]),o,Object(n["j"])(x,{height:600,title:" ",dateFormat:!0,rawData:m.trendOverTimeData,type:"line"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",i,[Object(n["j"])(j,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["j"])(p),c]})),content:Object(n["K"])((function(){return[Object(n["j"])("div",s,[Object(n["j"])("i",{class:"pi pi-search",onClick:t[2]||(t[2]=function(){return h.fetchData&&h.fetchData.apply(h,arguments)})}),Object(n["j"])(O,{modelValue:m.searchWord,"onUpdate:modelValue":t[3]||(t[3]=function(e){return m.searchWord=e}),placeholder:"Keyword Search",onKeydown:h.search},null,8,["modelValue","onKeydown"])]),Object(n["j"])(y,{value:m.data,dataKey:"doi",paginator:!0,rows:g.lazyParams.rows,rowHover:!0,lazy:!0,loading:m.loading,rowsPerPageOptions:[10,20],"sort-order":-1,totalRecords:m.totalRecords,class:"big-table",onPage:t[4]||(t[4]=function(e){return h.onPage(e)}),onSort:t[5]||(t[5]=function(e){return h.onSort(e)}),ref:"dt","sort-field":"score",onRowClick:t[6]||(t[6]=function(e){return h.rowClick(e)})},{empty:Object(n["K"])((function(){return[u]})),loading:Object(n["K"])((function(){return[d]})),default:Object(n["K"])((function(){return[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(m.columns,(function(e){return Object(n["u"])(),Object(n["f"])(T,{field:e.field,header:e.header,sortable:e.sortable,key:e.field,class:e.class},Object(n["h"])({_:2},[e.numberTemplate?{name:"body",fn:Object(n["K"])((function(t){return[Object(n["j"])("div",b,Object(n["G"])(e.noLocale?t.data[e.field]:h.localeNumber(t.data[e.field])),1)]}))}:void 0]),1032,["field","header","sortable","class"])})),128))]})),_:1},8,["value","rows","loading","totalRecords"])]})),_:1})])],64)}a("159b");var m=a("94e1"),h=a("15c5"),g=a("6e74"),p=a("3f5f"),v={name:"Publications",components:{TimeTooltip:h["a"],PublicationChart:g["a"]},beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==e.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",trendOverTimeData:[],columns:[{field:"trending_ranking",header:"Rank",sortable:!1,numberTemplate:!1,class:"amba rank"},{field:"title",header:"Title",sortable:!1,numberTemplate:!1},{field:"pub_date",header:"Date",sortable:!0,numberTemplate:!0,noLocale:!0},{field:"citation_count",header:"Citation Count",sortable:!0,class:"text-align-right",numberTemplate:!0},{field:"score",header:"Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"projected_change",header:"Projected Change",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"count",header:"Tweet Count",sortable:!0,class:"text-align-right  amba",numberTemplate:!0},{field:"sum_followers",header:"Follower reached",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_sentiment",header:"Mean Sentiment",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"abstract_difference",header:"Abstract Difference",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_age",header:"mean Age",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_length",header:"mean Length",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_questions",header:'mean "?"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_exclamations",header:'mean "!"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_bot_rating",header:"mean Bot Rating",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"trending",header:"trending",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ema",header:"ema",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"kama",header:"kama",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ker",header:"ker",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_score",header:"mean Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"stddev",header:"stddev",sortable:!0,class:"text-align-right amba",numberTemplate:!0}],lazyParams:{},data:[],loading:!0,searchWord:"",totalRecords:0,selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"mean_sentiment"},{label:"Followers",value:"sum_follower"},{label:"Contains Abstract",value:"abstract_difference"},{label:"Mean Age",value:"mean_age"},{label:"Length",value:"mean_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Trending Value",value:"trending"},{label:"ema",value:"ema"},{label:"kama",value:"kama"},{label:"ker",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"stddev",value:"stddev"}],dois:[]}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){13===e.keyCode&&this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},rowClick:function(e){this.$router.push("/publication/"+e.data.doi)},localeNumber:function(e){return isNaN(e)?"-":(e=Math.round(100*e)/100,e.toLocaleString())},loadTrendingProgress:function(){var e=this;p["a"].progressTrending(this.selectedTrendField,this.lazyParams.rows,this.duration,this.dois).then((function(t){e.trendOverTimeData=t.data.results})).catch((function(t){e.trendOverTimeData=[],console.log(t)}))},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,console.log(this.lazyParams.sortOrder),m["a"].trending(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results;var a=[];e.data.forEach((function(t){if(a.push(t.doi),t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count,t.pub_date){var n=new Date(t.pub_date);t.pub_date=n.toLocaleDateString()}else t.pub_date=t.year})),e.dois=a,e.loading=!1,e.loadTrendingProgress()})).catch((function(t){e.data=[],e.loading=!1,console.log(t)}))}}};v.render=f;t["default"]=v},d784:function(e,t,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("9263"),l=a("d039"),o=a("b622"),i=a("9112"),c=o("species"),s=RegExp.prototype;e.exports=function(e,t,a,u){var d=o(e),b=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=b&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return t=!0,null},a[d](""),!t}));if(!b||!f||a){var m=/./[d],h=t(d,""[e],(function(e,t,a,n,l){var o=t.exec;return o===r||o===s.exec?b&&!l?{done:!0,value:m.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(s,d,h[1])}u&&i(s[d],"sham",!0)}},fce3:function(e,t,a){var n=a("d039");e.exports=n((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=Publications.d99c85a3.js.map