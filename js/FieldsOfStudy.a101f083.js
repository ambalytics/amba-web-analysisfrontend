(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["FieldsOfStudy"],{"107c":function(e,t,a){var n=a("d039");e.exports=n((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,a){var n=a("c6b6"),r=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"841c":function(e,t,a){"use strict";var n=a("d784"),r=a("825a"),l=a("1d80"),o=a("129f"),i=a("14c3");n("search",(function(e,t,a){return[function(t){var a=l(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,this,e);if(n.done)return n.value;var l=r(this),c=String(e),s=l.lastIndex;o(s,0)||(l.lastIndex=0);var u=i(l,c);return o(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},8956:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var n=a("7a23"),r={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},l=Object(n["i"])(" Trending Fields of Study "),o={class:"p-input-icon-left"},i=Object(n["i"])(" No Fields of Study found. "),c=Object(n["i"])(" Loading Fields of Study data. Please wait. "),s={class:"wrapper"};function u(e,t,a,u,d,b){var f=this,m=Object(n["C"])("InputText"),h=Object(n["C"])("Column"),g=Object(n["C"])("DataTable"),p=Object(n["C"])("Card");return Object(n["u"])(),Object(n["f"])("div",r,[Object(n["j"])(p,{class:"table-card"},{title:Object(n["K"])((function(){return[l]})),content:Object(n["K"])((function(){return[Object(n["j"])("div",o,[Object(n["j"])("i",{class:"pi pi-search",onClick:t[1]||(t[1]=function(){return b.fetchData&&b.fetchData.apply(b,arguments)})}),Object(n["j"])(m,{modelValue:d.searchWord,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.searchWord=e}),placeholder:"Keyword Search",onKeydown:b.search},null,8,["modelValue","onKeydown"])]),Object(n["j"])(g,{value:d.data,dataKey:"doi",paginator:!0,rows:f.lazyParams.rows,rowHover:!0,lazy:!0,loading:d.loading,rowsPerPageOptions:[10,20,50],"sort-order":-1,totalRecords:d.totalRecords,class:"big-table",onPage:t[3]||(t[3]=function(e){return b.onPage(e)}),onSort:t[4]||(t[4]=function(e){return b.onSort(e)}),ref:"dt","sort-field":"score",onRowClick:t[5]||(t[5]=function(e){return b.rowClick(e)})},{empty:Object(n["K"])((function(){return[i]})),loading:Object(n["K"])((function(){return[c]})),default:Object(n["K"])((function(){return[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(d.columns,(function(e){return Object(n["u"])(),Object(n["f"])(h,{field:e.field,header:e.header,sortable:e.sortable,key:e.field,class:e.class},Object(n["h"])({_:2},[e.numberTemplate?{name:"body",fn:Object(n["K"])((function(t){return[Object(n["j"])("div",s,Object(n["G"])(e.noLocale?t.data[e.field]:b.localeNumber(t.data[e.field])),1)]}))}:void 0]),1032,["field","header","sortable","class"])})),128))]})),_:1},8,["value","rows","loading","totalRecords"])]})),_:1})])}a("159b");var d=a("0670"),b={name:"FieldsOfStudy",beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==this.$route.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",columns:[{field:"trending_ranking",header:"Rank",sortable:!1,numberTemplate:!1,class:"amba rank"},{field:"name",header:"Name",sortable:!1,numberTemplate:!1},{field:"pub_count",header:"Publication Count",sortable:!0,class:"text-align-right",numberTemplate:!0},{field:"score",header:"Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"projected_change",header:"Projected Change",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"count",header:"Tweet Count",sortable:!0,class:"text-align-right  amba",numberTemplate:!0},{field:"sum_followers",header:"Follower reached",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_sentiment",header:"Median Sentiment",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"abstract_difference",header:"Abstract Difference",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_age",header:"median Age",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_length",header:"median Length",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_questions",header:'mean "?"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_exclamations",header:'mean "!"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_bot_rating",header:"mean Bot Rating",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"trending",header:"trending",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ema",header:"ema",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"kama",header:"kama",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ker",header:"ker",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_score",header:"mean Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"stddev",header:"stddev",sortable:!0,class:"text-align-right amba",numberTemplate:!0}],lazyParams:{},data:[],loading:!0,searchWord:"",totalRecords:0}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{search:function(e){13===e.keyCode&&this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},rowClick:function(e){this.$router.push("/fieldOfStudy/"+e.data.id)},localeNumber:function(e){return isNaN(e)?"-":e.toLocaleString()},fetchData:function(){var e=this;this.error=this.post=null,this.loading=!0,console.log(this.lazyParams.sortOrder),d["a"].trending(this.duration,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results,e.data.forEach((function(t){t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count})),e.loading=!1})).catch((function(t){e.data=[],e.loading=!1,console.log(t)}))}}};b.render=u;t["default"]=b},9263:function(e,t,a){"use strict";var n=a("ad6d"),r=a("9f7f"),l=a("5692"),o=a("7c73"),i=a("69f3").get,c=a("fce3"),s=a("107c"),u=RegExp.prototype.exec,d=l("native-string-replace",String.prototype.replace),b=u,f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=r.UNSUPPORTED_Y||r.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],g=f||h||m||c||s;g&&(b=function(e){var t,a,r,l,c,s,g,p=this,j=i(p),O=j.raw;if(O)return O.lastIndex=p.lastIndex,t=b.call(O,e),p.lastIndex=O.lastIndex,t;var v=j.groups,x=m&&p.sticky,y=n.call(p),w=p.source,T=0,C=e;if(x&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),C=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(w="(?: "+w+")",C=" "+C,T++),a=new RegExp("^(?:"+w+")",y)),h&&(a=new RegExp("^"+w+"$(?!\\s)",y)),f&&(r=p.lastIndex),l=u.call(x?a:p,C),x?l?(l.input=l.input.slice(T),l[0]=l[0].slice(T),l.index=p.lastIndex,p.lastIndex+=l[0].length):p.lastIndex=0:f&&l&&(p.lastIndex=p.global?l.index+l[0].length:r),h&&l&&l.length>1&&d.call(l[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)})),l&&v)for(l.groups=s=o(null),c=0;c<v.length;c++)g=v[c],s[g[0]]=l[g[1]];return l}),e.exports=b},"9f7f":function(e,t,a){var n=a("d039"),r=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("9263"),l=a("d039"),o=a("b622"),i=a("9112"),c=o("species"),s=RegExp.prototype;e.exports=function(e,t,a,u){var d=o(e),b=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=b&&!l((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[d]=/./[d]),a.exec=function(){return t=!0,null},a[d](""),!t}));if(!b||!f||a){var m=/./[d],h=t(d,""[e],(function(e,t,a,n,l){var o=t.exec;return o===r||o===s.exec?b&&!l?{done:!0,value:m.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(s,d,h[1])}u&&i(s[d],"sham",!0)}},f897:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var n=a("7a23"),r={class:"p-grid"},l={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},o=Object(n["i"])(" Trending "),i=Object(n["j"])("br",null,null,-1),c={key:1,class:"no-data"},s={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},u=Object(n["i"])(" Stats "),d={class:"padding-left"},b=Object(n["j"])("h3",null,"Tweet Count",-1),f={class:"padding-left"},m={class:"padding-left"},h=Object(n["j"])("h3",null,"Publication Count",-1),g={class:"padding-left"},p={class:"padding-left"},j=Object(n["j"])("h3",null,"Total Followers Reached",-1),O={class:"padding-left"},v={class:"padding-left"},x=Object(n["j"])("h3",null,"Average Score per Tweet",-1),y={class:"padding-left"},w={class:"padding-left"},T=Object(n["j"])("h3",null,"Average Sentiment",-1),C={class:"padding-left"},_={class:"padding-left"},P=Object(n["j"])("h3",null,"Average Contains Abstract",-1),S={class:"padding-left"},D={class:"padding-left"},k=Object(n["j"])("h3",null,"Average Exclamations",-1),R={class:"padding-left"},F={class:"padding-left"},K=Object(n["j"])("h3",null,"Average Questions",-1),A={class:"padding-left"},N={class:"padding-left"},E=Object(n["j"])("h3",null,"Tweet Author Count",-1),I={class:"padding-left"},q={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},z=Object(n["i"])(" Profile "),M={class:"p-col-12 p-md-12 p-lg-12 p-xl-12"},$={class:"p-input-icon-left"},V=Object(n["i"])(" No Publications found. "),L=Object(n["i"])(" Loading Publications data. Please wait. "),G={class:"wrapper"},U={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},W=Object(n["i"])(" Newest Tweet "),B={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},Q=Object(n["i"])(" Publications over Time "),Y=Object(n["j"])("br",null,null,-1),H={key:1,class:"no-data"},J={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},X=Object(n["i"])(" Authors "),Z={key:1,class:"no-data"},ee={class:"p-col-12 p-md-12 p-lg-6 p-xl-6 word-wrapper"},te=Object(n["i"])(" Words "),ae={key:1,class:"no-data"};function ne(e,t,a,ne,re,le){var oe=this,ie=Object(n["C"])("Dropdown"),ce=Object(n["C"])("publication-chart"),se=Object(n["C"])("Card"),ue=Object(n["C"])("InputText"),de=Object(n["C"])("Column"),be=Object(n["C"])("DataTable"),fe=Object(n["C"])("AmbaTweet"),me=Object(n["C"])("MapChart"),he=Object(n["C"])("word-cloud");return Object(n["u"])(),Object(n["f"])("div",r,[Object(n["j"])("div",l,[Object(n["j"])(se,{class:"big-chart"},{title:Object(n["K"])((function(){return[o]})),content:Object(n["K"])((function(){return[Object(n["j"])(ie,{modelValue:re.selectedTrendField,"onUpdate:modelValue":t[1]||(t[1]=function(e){return re.selectedTrendField=e}),options:re.trendFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:le.loadTrendingProgress},null,8,["modelValue","options","onChange"]),i,re.renderTrendingChart?(Object(n["u"])(),Object(n["f"])(ce,{key:0,height:200,title:" ",dateFormat:!0,rawData:re.trendOverTimeData,type:"line"},null,8,["rawData"])):(Object(n["u"])(),Object(n["f"])("div",c," - no data available - "))]})),_:1})]),Object(n["j"])("div",s,[Object(n["j"])(se,{class:"stats"},{title:Object(n["K"])((function(){return[u]})),content:Object(n["K"])((function(){return[Object(n["j"])("div",d,[b,Object(n["j"])("p",f,Object(n["G"])(le.localeNumber(re.tweetCount)),1)]),Object(n["j"])("div",m,[h,Object(n["j"])("p",g,Object(n["G"])(le.localeNumber(re.pubCount)),1)]),Object(n["j"])("div",p,[j,Object(n["j"])("p",O,Object(n["G"])(le.localeNumber(re.totalFollowers)),1)]),Object(n["j"])("div",v,[x,Object(n["j"])("p",y,Object(n["G"])(le.localeNumber(Math.round(re.scoreSum/re.tweetCount*100)/100)),1)]),Object(n["j"])("div",w,[T,Object(n["j"])("p",C,Object(n["G"])(le.localeNumber(Math.round(1e4*re.sentiment)/100))+"%",1)]),Object(n["j"])("div",_,[P,Object(n["j"])("p",S,Object(n["G"])(le.localeNumber(Math.round(1e4*re.containsAbstract)/100))+"%",1)]),Object(n["j"])("div",D,[k,Object(n["j"])("p",R,Object(n["G"])(le.localeNumber(Math.round(1e4*re.exclamations)/100))+"%",1)]),Object(n["j"])("div",F,[K,Object(n["j"])("p",A,Object(n["G"])(le.localeNumber(Math.round(1e4*re.questions)/100))+"%",1)]),Object(n["j"])("div",N,[E,Object(n["j"])("p",I,Object(n["G"])(le.localeNumber(re.tweetAuthorCount)),1)])]})),_:1})]),Object(n["j"])("div",q,[Object(n["j"])(se,null,{title:Object(n["K"])((function(){return[z]})),content:Object(n["K"])((function(){return[Object(n["j"])(ce,{title:" ",rawData:re.profileData,type:"radar"},null,8,["rawData"])]})),_:1})]),Object(n["j"])("div",M,[Object(n["j"])(se,{class:"table-card"},{title:Object(n["K"])((function(){return[Object(n["i"])(" Trending "+Object(n["G"])(re.fieldOfStudyName),1)]})),content:Object(n["K"])((function(){return[Object(n["j"])("div",$,[Object(n["j"])("i",{class:"pi pi-search",onClick:t[2]||(t[2]=function(){return le.fetchData&&le.fetchData.apply(le,arguments)})}),Object(n["j"])(ue,{modelValue:re.searchWord,"onUpdate:modelValue":t[3]||(t[3]=function(e){return re.searchWord=e}),placeholder:"Keyword Search",onKeydown:le.search},null,8,["modelValue","onKeydown"])]),Object(n["j"])(be,{value:re.data,dataKey:"doi",paginator:!0,rows:oe.lazyParams.rows,rowHover:!0,lazy:!0,loading:re.loading,rowsPerPageOptions:[10,20,50],"sort-order":-1,totalRecords:re.totalRecords,class:"big-table",onPage:t[4]||(t[4]=function(e){return le.onPage(e)}),onSort:t[5]||(t[5]=function(e){return le.onSort(e)}),ref:"dt","sort-field":"score",onRowClick:t[6]||(t[6]=function(e){return le.rowClick(e)})},{empty:Object(n["K"])((function(){return[V]})),loading:Object(n["K"])((function(){return[L]})),default:Object(n["K"])((function(){return[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(re.columns,(function(e){return Object(n["u"])(),Object(n["f"])(de,{field:e.field,header:e.header,sortable:e.sortable,key:e.field,class:e.class},Object(n["h"])({_:2},[e.numberTemplate?{name:"body",fn:Object(n["K"])((function(t){return[Object(n["j"])("div",G,Object(n["G"])(e.noLocale?t.data[e.field]:le.localeNumber(t.data[e.field])),1)]}))}:void 0]),1032,["field","header","sortable","class"])})),128))]})),_:1},8,["value","rows","loading","totalRecords"])]})),_:1})]),Object(n["j"])("div",U,[Object(n["j"])(se,null,{title:Object(n["K"])((function(){return[W]})),content:Object(n["K"])((function(){return[Object(n["j"])(fe,{id_in:e.$route.params.id,mode:"fieldOfStudy"},null,8,["id_in"])]})),_:1})]),Object(n["j"])("div",B,[Object(n["j"])(se,{class:"big-chart"},{title:Object(n["K"])((function(){return[Q]})),content:Object(n["K"])((function(){return[Object(n["j"])(ie,{modelValue:re.selectedPubField,"onUpdate:modelValue":t[7]||(t[7]=function(e){return re.selectedPubField=e}),options:re.pubFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:le.loadPubsProgress},null,8,["modelValue","options","onChange"]),Y,re.renderPublicationChart?(Object(n["u"])(),Object(n["f"])(ce,{key:0,height:200,title:" ",dateFormat:!0,rawData:re.pubsOverTimeData,type:"line"},null,8,["rawData"])):(Object(n["u"])(),Object(n["f"])("div",H," - no data available - "))]})),_:1})]),Object(n["j"])("div",J,[Object(n["j"])(se,null,{title:Object(n["K"])((function(){return[X]})),content:Object(n["K"])((function(){return[re.renderMap?(Object(n["u"])(),Object(n["f"])(me,{key:0,countryData:re.countries,highColor:"#0f6364",lowColor:"#E6B24B",countryStrokeColor:"#eee",defaultCountryFillColor:"#fff"},null,8,["countryData"])):(Object(n["u"])(),Object(n["f"])("div",Z," - no data available - "))]})),_:1})]),Object(n["j"])("div",ee,[Object(n["j"])(se,null,{title:Object(n["K"])((function(){return[te]})),content:Object(n["K"])((function(){return[re.renderCloud?(Object(n["u"])(),Object(n["f"])(he,{key:0,ref:"worldCloud",data:re.words},null,8,["data"])):(Object(n["u"])(),Object(n["f"])("div",ae," - no data available - "))]})),_:1})])])}a("b0c0"),a("159b");var re=a("94e1"),le=a("0670"),oe=a("6e74"),ie=a("df6d"),ce=a("8b39"),se=a("ea6f"),ue=a("3f5f"),de={name:"Publications",components:{PublicationChart:oe["a"],MapChart:ie["a"],AmbaTweet:ce["a"],WordCloud:se["a"]},beforeRouteUpdate:function(e,t){e.query.time!==t.query.time&&(void 0!==this.$route.query.time?(this.duration=e.query.time,this.fetchData()):(this.duration="currently",this.fetchData()))},data:function(){return{duration:"currently",fieldOfStudyName:"",columns:[{field:"trending_ranking",header:"Rank",sortable:!1,numberTemplate:!1,class:"amba rank"},{field:"title",header:"Title",sortable:!1,numberTemplate:!1},{field:"year",header:"Year",sortable:!0,numberTemplate:!0,noLocale:!0},{field:"citation_count",header:"Citation Count",sortable:!0,class:"text-align-right",numberTemplate:!0},{field:"score",header:"Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"projected_change",header:"Projected Change",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"count",header:"Tweet Count",sortable:!0,class:"text-align-right  amba",numberTemplate:!0},{field:"sum_followers",header:"Follower reached",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_sentiment",header:"Median Sentiment",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"abstract_difference",header:"Abstract Difference",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_age",header:"median Age",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"median_length",header:"median Length",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_questions",header:'mean "?"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_exclamations",header:'mean "!"',sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_bot_rating",header:"mean Bot Rating",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"trending",header:"trending",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ema",header:"ema",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"kama",header:"kama",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"ker",header:"ker",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"mean_score",header:"mean Score",sortable:!0,class:"text-align-right amba",numberTemplate:!0},{field:"stddev",header:"stddev",sortable:!0,class:"text-align-right amba",numberTemplate:!0}],lazyParams:{},data:[],loading:!0,searchWord:"",totalRecords:0,countries:[],words:[],renderMap:!1,renderCloud:!1,renderTrendingChart:!0,renderPublicationChart:!0,pubCount:"-",tweetCount:"-",scoreSum:"-",totalFollowers:"-",sentiment:"-",containsAbstract:"-",questions:"-",exclamations:"-",tweetAuthorCount:"-",trendOverTimeData:[],selectedTrendField:"score",trendFields:[{label:"Score",value:"score"},{label:"Count",value:"count"},{label:"Sentiment",value:"median_sentiment"},{label:"Followers",value:"sum_follower"},{label:"Contains Abstract",value:"abstract_difference"},{label:"Median Age",value:"median_age"},{label:"Length",value:"median_length"},{label:"Questions",value:"mean_questions"},{label:"Exclamations",value:"mean_exclamations"},{label:"Bot Rating",value:"mean_bot_rating"},{label:"Projected Change",value:"projected_change"},{label:"Trending Value",value:"trending"},{label:"ema",value:"ema"},{label:"kama",value:"kama"},{label:"ker",value:"ker"},{label:"Mean Score",value:"mean_score"},{label:"stddev",value:"stddev"}],pubsOverTimeData:[],selectedPubField:"score",pubFields:[{label:"Bot Rating",value:"bot_rating"},{label:"Contains Abstract",value:"contains_abstract_raw"},{label:"Exclamations",value:"exclamations"},{label:"Followers",value:"followers"},{label:"Length",value:"length"},{label:"Questions",value:"questions"},{label:"Score",value:"score"},{label:"Sentiment",value:"sentiment_raw"},{label:"Count",value:"count"}],profileData:[]}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},mounted:function(){this.lazyParams={first:0,rows:10,sortField:"score",sortOrder:-1}},methods:{loadPubsProgress:function(){var e=this;le["a"].progressValue(this.selectedPubField,5,this.duration,this.$route.params.id).then((function(t){e.pubsOverTimeData=t.data.results,e.renderPublicationChart=!0})).catch((function(t){e.renderPublicationChart=!1,e.pubsOverTimeData=[],console.log(t)}))},loadTrendingProgress:function(){var e=this;le["a"].progressTrending(this.selectedTrendField,5,this.duration,this.$route.params.id).then((function(t){e.trendOverTimeData=t.data.results,e.renderTrendingChart=!0,console.log(e.trendOverTimeData)})).catch((function(t){e.renderTrendingChart=!1,e.trendOverTimeData=[],console.log(t)}))},search:function(e){13===e.keyCode&&this.fetchData()},onPage:function(e){this.lazyParams=e,this.fetchData()},onSort:function(e){this.lazyParams=e,this.fetchData()},rowClick:function(e){this.$router.push("/publication/"+e.data.doi)},localeNumber:function(e){return isNaN(e)?"-":e.toLocaleString()},fetchData:function(){var e=this;this.loading=!0,le["a"].get(this.$route.params.id).then((function(t){e.fieldOfStudyName=t.data.results.fields_of_study.name})).catch((function(t){e.fieldOfStudyName="",console.log(t)})),re["a"].trendingFos(this.duration,this.$route.params.id,this.lazyParams.first,this.lazyParams.rows,this.lazyParams.sortField,this.lazyParams.sortOrder>0?"asc":"desc",this.searchWord).then((function(t){e.data=t.data.results,e.data.forEach((function(t){t.score=Math.round(t.score),t.length_avg=Math.round(t.length_avg),t.contains_abstract_avg=Math.round(100*t.contains_abstract_avg)/100,e.totalRecords=t.total_count})),e.loading=!1})).catch((function(t){e.data=[],e.loading=!1,console.log(t)})),this.loadPubsProgress(),this.loadTrendingProgress(),le["a"].numbers(this.duration,null,this.$route.params.id).then((function(t){e.tweetCount=t.data.results["count"],e.totalFollowers=t.data.results["followers"],e.scoreSum=t.data.results["score"],e.containsAbstract=t.data.results["contains_abstract_raw"],e.sentiment=t.data.results["sentiment_raw"],e.pubCount=t.data.results["pub_count"],e.questions=t.data.results["questions"],e.exclamations=t.data.results["exclamations"]})).catch((function(t){console.log(t),e.tweetCount="-",e.totalFollowers="-",e.scoreSum="-",e.containsAbstract="-",e.sentiment="-",e.pubCount="-",e.questions="-",e.exclamations="-"})),le["a"].profileData(this.$route.params.id,this.duration).then((function(t){e.profileData=t.data.results})).catch((function(e){console.log(e)})),le["a"].top(null,this.$route.params.id).then((function(t){var a=[];t.data.results.word.forEach((function(e){var t={};t.text=e.value,t.value=e.count,a.push(t)})),e.words=a,e.renderCloud=!0})).catch((function(t){e.renderCloud=!1,console.log(t)})),le["a"].top(["location"],this.$route.params.id,1e3).then((function(t){var a={};t.data.results.location.forEach((function(e){a[e.value.toUpperCase()]=e.count})),e.countries=a,e.renderMap=!0})).catch((function(t){e.renderMap=!1,console.log(t)})),ue["a"].tweetAuthorCount("fieldOfStudy",null,this.$route.params.id).then((function(t){e.tweetAuthorCount=t.data.results[0].count})).catch((function(t){e.tweetAuthorCount="-",console.log(t)}))}}};de.render=ne;t["default"]=de},fce3:function(e,t,a){var n=a("d039");e.exports=n((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=FieldsOfStudy.a101f083.js.map