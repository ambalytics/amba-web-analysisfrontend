(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Authors"],{"107c":function(e,t,a){var r=a("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,a){var r=a("c6b6"),n=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"841c":function(e,t,a){"use strict";var r=a("d784"),n=a("825a"),l=a("1d80"),o=a("129f"),i=a("14c3");r("search",(function(e,t,a){return[function(t){var a=l(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](String(a))},function(e){var r=a(t,this,e);if(r.done)return r.value;var l=n(this),c=String(e),s=l.lastIndex;o(s,0)||(l.lastIndex=0);var u=i(l,c);return o(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,a){"use strict";var r=a("ad6d"),n=a("9f7f"),l=a("5692"),o=a("7c73"),i=a("69f3").get,c=a("fce3"),s=a("107c"),u=RegExp.prototype.exec,d=l("native-string-replace",String.prototype.replace),f=u,h=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=n.UNSUPPORTED_Y||n.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],g=h||m||b||c||s;g&&(f=function(e){var t,a,n,l,c,s,g,p=this,x=i(p),v=x.raw;if(v)return v.lastIndex=p.lastIndex,t=f.call(v,e),p.lastIndex=v.lastIndex,t;var j=x.groups,y=b&&p.sticky,O=r.call(p),T=p.source,w=0,R=e;if(y&&(O=O.replace("y",""),-1===O.indexOf("g")&&(O+="g"),R=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(T="(?: "+T+")",R=" "+R,w++),a=new RegExp("^(?:"+T+")",O)),m&&(a=new RegExp("^"+T+"$(?!\\s)",O)),h&&(n=p.lastIndex),l=u.call(y?a:p,R),y?l?(l.input=l.input.slice(w),l[0]=l[0].slice(w),l.index=p.lastIndex,p.lastIndex+=l[0].length):p.lastIndex=0:h&&l&&(p.lastIndex=p.global?l.index+l[0].length:n),m&&l&&l.length>1&&d.call(l[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)})),l&&j)for(l.groups=s=o(null),c=0;c<j.length;c++)g=j[c],s[g[0]]=l[g[1]];return l}),e.exports=f},"9f7f":function(e,t,a){var r=a("d039"),n=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),n=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},adc6:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var r=a("7a23"),n={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},l=Object(r["i"])("Trending Authors "),o={class:"p-input-icon-left"},i=Object(r["i"])(" No Authors found. "),c=Object(r["i"])(" Loading Authors data. Please wait. "),s={class:"wrapper"};function u(e,t,a,u,d,f){var h=this,b=Object(r["C"])("time-tooltip"),m=Object(r["C"])("InputText"),g=Object(r["C"])("Column"),p=Object(r["C"])("DataTable"),x=Object(r["C"])("Card");return Object(r["u"])(),Object(r["f"])("div",n,[Object(r["j"])(x,{class:"table-card"},{title:Object(r["K"])((function(){return[Object(r["j"])(b),l]})),content:Object(r["K"])((function(){return[Object(r["j"])("div",o,[Object(r["j"])("i",{class:"pi pi-search",onClick:t[1]||(t[1]=function(){return f.fetchData&&f.fetchData.apply(f,arguments)})}),Object(r["j"])(m,{modelValue:d.searchWord,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.searchWord=e}),placeholder:"Keyword Search",onKeydown:f.search},null,8,["modelValue","onKeydown"])]),Object(r["j"])(p,{value:d.data,dataKey:"doi",paginator:!0,rows:h.lazyParams.rows,rowHover:!0,lazy:!0,loading:d.loading,rowsPerPageOptions:[10,20,50],"sort-order":-1,totalRecords:d.totalRecords,class:"big-table",onPage:t[3]||(t[3]=function(e){return f.onPage(e)}),onSort:t[4]||(t[4]=function(e){return f.onSort(e)}),ref:"dt","sort-field":"score",onRowClick:t[5]||(t[5]=function(e){return f.rowClick(e)})},{empty:Object(r["K"])((function(){return[i]})),loading:Object(r["K"])((function(){return[c]})),default:Object(r["K"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(d.columns,(function(e){return Object(r["u"])(),Object(r["f"])(g,{field:e.field,header:e.header,sortable:e.sortable,key:e.field,class:e.class},Object(r["h"])({_:2},[e.numberTemplate?{name:"body",fn:Object(r["K"])((function(t){return[Object(r["j"])("div",s,Object(r["G"])(e.noLocale?t.data[e.field]:f.localeNumber(t.data[e.field])),1)]}))}:void 0]),1032,["field","header","sortable","class"])})),128))]})),_:1},8,["value","rows","loading","totalRecords"])]})),_:1})])}a("159b");var d=a("fa34"),f=a("15c5"),h={name:"Authors",components:{TimeTooltip:f["a"]},beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==e.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",columns:[{field:"trending_ranking",header:"Rank",sortable:!1,numberTemplate:!1,class:"amba rank"},{field:"name",header:"Name",sortable:!1,numberTemplate:!1},{field:"pub_count",header:"Publication Count",sortable:!0,class:"text-align-right",numberTemplate:!0},{field:"score",header:"Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"projected_change",header:"Projected Change",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"count",header:"Tweet Count",sortable:!0,class:"text-align-right  amba",numberTemplate:!0},{field:"sum_followers",header:"Follower reached",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_sentiment",header:"Median Sentiment",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"abstract_difference",header:"Abstract Difference",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_age",header:"median Age",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_length",header:"median Length",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_questions",header:'mean "?"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_exclamations",header:'mean "!"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_bot_rating",header:"mean Bot Rating",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"trending",header:"trending",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ema",header:"ema",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"kama",header:"kama",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ker",header:"ker",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_score",header:"mean Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"stddev",header:"stddev",sortable:!0,class:"text-align-right amba",numberTemplate:!0}],lazyParams:{},data:[],loading:!0,searchWord:"",totalRecords:0}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){13===e.keyCode&&this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},rowClick:function(e){this.$router.push("/author/"+e.data.id)},localeNumber:function(e){return isNaN(e)?"-":e.toLocaleString()},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,console.log(this.lazyParams.sortOrder),d["a"].trending(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results,e.data.forEach((function(t){t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count})),e.loading=!1})).catch((function(t){e.data=[],e.loading=!1,console.log(t)}))}}};h.render=u;t["default"]=h},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),n=a("9263"),l=a("d039"),o=a("b622"),i=a("9112"),c=o("species"),s=RegExp.prototype;e.exports=function(e,t,a,u){var d=o(e),f=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=f&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return t=!0,null},a[d](""),!t}));if(!f||!h||a){var b=/./[d],m=t(d,""[e],(function(e,t,a,r,l){var o=t.exec;return o===n||o===s.exec?f&&!l?{done:!0,value:b.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(s,d,m[1])}u&&i(s[d],"sham",!0)}},fce3:function(e,t,a){var r=a("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=Authors.c4a703e9.js.map