(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Publication"],{"0cb2":function(t,e,n){var a=n("7b0b"),c=Math.floor,l="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,u,s){var b=n+t.length,j=o.length,d=i;return void 0!==u&&(u=a(u),d=r),l.call(s,d,(function(a,l){var r;switch(l.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(b);case"<":r=u[l.slice(1,-1)];break;default:var i=+l;if(0===i)return a;if(i>j){var s=c(i/10);return 0===s?a:s<=j?void 0===o[s-1]?l.charAt(1):o[s-1]+l.charAt(1):a}r=o[i-1]}return void 0===r?"":r}))}},"107c":function(t,e,n){var a=n("d039");t.exports=a((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var a=n("d784"),c=n("44e7"),l=n("825a"),r=n("1d80"),i=n("4840"),o=n("8aa5"),u=n("50c4"),s=n("14c3"),b=n("9263"),j=n("9f7f"),d=n("d039"),p=j.UNSUPPORTED_Y,f=[].push,O=Math.min,h=4294967295,g=!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(r(this)),l=void 0===n?h:n>>>0;if(0===l)return[];if(void 0===t)return[a];if(!c(t))return e.call(a,t,l);var i,o,u,s=[],j=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=new RegExp(t.source,j+"g");while(i=b.call(p,a)){if(o=p.lastIndex,o>d&&(s.push(a.slice(d,i.index)),i.length>1&&i.index<a.length&&f.apply(s,i.slice(1)),u=i[0].length,d=o,s.length>=l))break;p.lastIndex===i.index&&p.lastIndex++}return d===a.length?!u&&p.test("")||s.push(""):s.push(a.slice(d)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var c=r(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,c,n):a.call(String(c),e,n)},function(t,c){var r=n(a,this,t,c,a!==e);if(r.done)return r.value;var b=l(this),j=String(t),d=i(b,RegExp),f=b.unicode,g=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.unicode?"u":"")+(p?"g":"y"),v=new d(p?"^(?:"+b.source+")":b,g),m=void 0===c?h:c>>>0;if(0===m)return[];if(0===j.length)return null===s(v,j)?[j]:[];var x=0,w=0,y=[];while(w<j.length){v.lastIndex=p?0:w;var C,_=s(v,p?j.slice(w):j);if(null===_||(C=O(u(v.lastIndex+(p?w:0)),j.length))===x)w=o(j,w,f);else{if(y.push(j.slice(x,w)),y.length===m)return y;for(var A=1;A<=_.length-1;A++)if(y.push(_[A]),y.length===m)return y;w=x=C}}return y.push(j.slice(x)),y}]}),!g,p)},"14c3":function(t,e,n){var a=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var l=n.call(t,e);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},5319:function(t,e,n){"use strict";var a=n("d784"),c=n("d039"),l=n("825a"),r=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),s=n("0cb2"),b=n("14c3"),j=n("b622"),d=j("replace"),p=Math.max,f=Math.min,O=function(t){return void 0===t?t:String(t)},h=function(){return"$0"==="a".replace(/./,"$0")}(),g=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,n){var a=g?"$":"$0";return[function(t,n){var a=o(this),c=void 0==t?void 0:t[d];return void 0!==c?c.call(t,a,n):e.call(String(a),t,n)},function(t,c){if("string"===typeof c&&-1===c.indexOf(a)&&-1===c.indexOf("$<")){var o=n(e,this,t,c);if(o.done)return o.value}var j=l(this),d=String(t),h="function"===typeof c;h||(c=String(c));var g=j.global;if(g){var v=j.unicode;j.lastIndex=0}var m=[];while(1){var x=b(j,d);if(null===x)break;if(m.push(x),!g)break;var w=String(x[0]);""===w&&(j.lastIndex=u(d,r(j.lastIndex),v))}for(var y="",C=0,_=0;_<m.length;_++){x=m[_];for(var A=String(x[0]),N=p(f(i(x.index),d.length),0),k=[],D=1;D<x.length;D++)k.push(O(x[D]));var S=x.groups;if(h){var E=[A].concat(k,N,d);void 0!==S&&E.push(S);var K=String(c.apply(void 0,E))}else K=s(A,d,N,k,S,c);N>=C&&(y+=d.slice(C,N)+K,C=N+A.length)}return y+d.slice(C)}]}),!v||!h||g)},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),c=n("9f7f"),l=n("5692"),r=n("7c73"),i=n("69f3").get,o=n("fce3"),u=n("107c"),s=RegExp.prototype.exec,b=l("native-string-replace",String.prototype.replace),j=s,d=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],O=d||f||p||o||u;O&&(j=function(t){var e,n,c,l,o,u,O,h=this,g=i(h),v=g.raw;if(v)return v.lastIndex=h.lastIndex,e=j.call(v,t),h.lastIndex=v.lastIndex,e;var m=g.groups,x=p&&h.sticky,w=a.call(h),y=h.source,C=0,_=t;if(x&&(w=w.replace("y",""),-1===w.indexOf("g")&&(w+="g"),_=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(y="(?: "+y+")",_=" "+_,C++),n=new RegExp("^(?:"+y+")",w)),f&&(n=new RegExp("^"+y+"$(?!\\s)",w)),d&&(c=h.lastIndex),l=s.call(x?n:h,_),x?l?(l.input=l.input.slice(C),l[0]=l[0].slice(C),l.index=h.lastIndex,h.lastIndex+=l[0].length):h.lastIndex=0:d&&l&&(h.lastIndex=h.global?l.index+l[0].length:c),f&&l&&l.length>1&&b.call(l[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(l[o]=void 0)})),l&&m)for(l.groups=u=r(null),o=0;o<m.length;o++)O=m[o],u[O[0]]=l[O[1]];return l}),t.exports=j},"9f7f":function(t,e,n){var a=n("d039"),c=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=a((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),c=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d6c1:function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),c={class:"p-grid"},l={class:"p-col-12 p-md-6 p-lg-4 p-xl-3 publication_info_main scroller"},r={style:{float:"right"}},i=Object(a["j"])("span",{style:{float:"left","font-size":"0.7rem",margin:"0px 5px 0 0","text-align":"center"}},"more information:",-1),o=Object(a["j"])("br",null,null,-1),u=Object(a["j"])("i",{style:{"font-size":"0.8em","margin-right":"3px"},class:"pi pi-external-link"},null,-1),s={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},b=Object(a["i"])(" Information "),j={class:"info"},d=Object(a["j"])("td",null,[Object(a["j"])("h4",null,"Date:")],-1),p=Object(a["j"])("td",null,[Object(a["j"])("h4",null,"Type:")],-1),f=Object(a["j"])("td",null,[Object(a["j"])("h4",null,"Publisher:")],-1),O=Object(a["j"])("h4",null,"Authors:",-1),h={class:"authors special-scrollbar"},g=Object(a["j"])("h4",null,"Subjects:",-1),v={class:"subjects"},m=Object(a["j"])("h4",null,"Sources:",-1),x={class:"sources"},w={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},y=Object(a["i"])(" Stats "),C={key:0,class:"padding-left"},_=Object(a["i"])(" Tweet Count "),A={class:"padding-left"},N={key:1,class:"padding-left"},k=Object(a["i"])(" Publication Count "),D={class:"padding-left"},S={key:2,class:"padding-left"},E=Object(a["i"])(" Total Followers Reached "),K={class:"padding-left"},P={key:3,class:"padding-left"},$=Object(a["i"])(" Average Score per Tweet "),I={class:"padding-left"},R={key:4,class:"padding-left"},T=Object(a["i"])(" Average Sentiment "),F={class:"padding-left"},G={key:5,class:"padding-left"},M=Object(a["i"])(" Average Contains Abstract "),q={class:"padding-left"},U={key:6,class:"padding-left"},V=Object(a["i"])(" Average Exclamations "),B={class:"padding-left"},L={key:7,class:"padding-left"},Y=Object(a["i"])(" Average Questions "),z={class:"padding-left"},J={key:8,class:"padding-left"},Q=Object(a["j"])("h3",null,"Tweet Author Count",-1),W={class:"padding-left"},H={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},X=Object(a["i"])(" Profile "),Z={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},tt=Object(a["i"])(" Authors "),et={key:1,class:"no-data"},nt={class:"p-col-12 p-md-12 p-lg-6 p-xl-6 word-wrapper"},at=Object(a["i"])(" Words "),ct={key:1,class:"no-data"},lt={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},rt=Object(a["i"])(" Entities "),it={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},ot=Object(a["i"])(" Types "),ut={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},st=Object(a["i"])(" Hashtags "),bt={class:"p-col-12 p-md-6 p-lg-4 p-xl-3"},jt=Object(a["i"])(" Languages "),dt={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},pt=Object(a["i"])(" Publication over Time "),ft=Object(a["j"])("br",null,null,-1),Ot={key:1,class:"no-data"},ht={class:"p-col-12 p-md-12 p-lg-6 p-xl-6"},gt=Object(a["i"])(" Newest Tweet ");function vt(t,e,n,vt,mt,xt){var wt=Object(a["C"])("Card"),yt=Object(a["C"])("router-link"),Ct=Object(a["C"])("time-tooltip"),_t=Object(a["C"])("publication-chart"),At=Object(a["C"])("MapChart"),Nt=Object(a["C"])("word-cloud"),kt=Object(a["C"])("Dropdown"),Dt=Object(a["C"])("AmbaTweet");return Object(a["u"])(),Object(a["f"])("div",c,[Object(a["j"])("div",l,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[Object(a["i"])(Object(a["G"])(t.publication.title),1)]})),content:Object(a["K"])((function(){return[Object(a["j"])("div",r,[i,o,Object(a["j"])("a",{class:"doi",target:"_blank",href:xt.realUrl},[u,Object(a["i"])(Object(a["G"])(t.publication.url),1)],8,["href"])])]})),_:1})]),Object(a["j"])("div",s,[Object(a["j"])(wt,{class:"side"},{title:Object(a["K"])((function(){return[b]})),content:Object(a["K"])((function(){return[Object(a["j"])("table",j,[Object(a["j"])("tr",null,[d,Object(a["j"])("td",null,Object(a["G"])(t.publication.pub_date?xt.dateFormat(t.publication.pub_date):t.publication.year),1)]),Object(a["j"])("tr",null,[p,Object(a["j"])("td",null,Object(a["G"])(xt.typeString(t.publication.type)),1)]),Object(a["j"])("tr",null,[f,Object(a["j"])("td",null,Object(a["G"])(t.publication.publisher),1)])]),O,Object(a["j"])("ul",h,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(t.publication.authors,(function(t){return Object(a["u"])(),Object(a["f"])("li",{key:t.name},[Object(a["j"])(yt,{to:{name:"author",params:{id:t.id}},class:"source-link"},{default:Object(a["K"])((function(){return[Object(a["i"])(Object(a["G"])(t.name),1)]})),_:2},1032,["to"])])})),128))]),g,Object(a["j"])("ul",v,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(t.publication.fields_of_study,(function(t){return Object(a["u"])(),Object(a["f"])("li",{key:t.name},[Object(a["j"])(yt,{to:{name:"author",params:{id:t.id}},class:"source-link"},{default:Object(a["K"])((function(){return[Object(a["i"])(Object(a["G"])(t.name),1)]})),_:2},1032,["to"])])})),128))]),m,Object(a["j"])("ul",x,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(t.publication.sources,(function(t){return Object(a["u"])(),Object(a["f"])("li",{key:t.title,class:{hidden:"DB"===t.title}},[Object(a["j"])("a",{class:"source-link",target:"_blank",href:t.url},Object(a["G"])(t.title),9,["href"])],2)})),128))])]})),_:1})]),Object(a["j"])("div",w,[Object(a["j"])(wt,{class:"stats"},{title:Object(a["K"])((function(){return[y]})),content:Object(a["K"])((function(){return[isNaN(t.tweetCount)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",C,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),_]),Object(a["j"])("p",A,Object(a["G"])(xt.localeNumber(t.tweetCount)),1)])),isNaN(t.pubCount)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",N,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),k]),Object(a["j"])("p",D,Object(a["G"])(xt.localeNumber(t.pubCount)),1)])),isNaN(t.totalFollowers)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",S,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),E]),Object(a["j"])("p",K,Object(a["G"])(xt.localeNumber(t.totalFollowers)),1)])),isNaN(t.scoreSum)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",P,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),$]),Object(a["j"])("p",I,Object(a["G"])(xt.localeNumber(Math.round(t.scoreSum/t.tweetCount*100)/100)),1)])),isNaN(t.sentiment)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",R,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),T]),Object(a["j"])("p",F,Object(a["G"])(xt.localeNumber(Math.round(1e4*t.sentiment)/100))+"%",1)])),isNaN(t.containsAbstract)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",G,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),M]),Object(a["j"])("p",q,Object(a["G"])(xt.localeNumber(Math.round(1e4*t.containsAbstract)/100))+"%",1)])),isNaN(t.exclamations)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",U,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),V]),Object(a["j"])("p",B,Object(a["G"])(xt.localeNumber(Math.round(1e4*t.exclamations)/100))+"%",1)])),isNaN(t.questions)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",L,[Object(a["j"])("h3",null,[Object(a["j"])(Ct),Y]),Object(a["j"])("p",z,Object(a["G"])(xt.localeNumber(Math.round(1e4*t.questions)/100))+"%",1)])),isNaN(t.tweetAuthorCount)?Object(a["g"])("",!0):(Object(a["u"])(),Object(a["f"])("div",J,[Q,Object(a["j"])("p",W,Object(a["G"])(xt.localeNumber(t.tweetAuthorCount)),1)]))]})),_:1})]),Object(a["j"])("div",H,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[X]})),content:Object(a["K"])((function(){return[Object(a["j"])(_t,{title:" ",rawData:t.profileData,height:500,type:"radar"},null,8,["rawData"])]})),_:1})]),Object(a["j"])("div",Z,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[tt]})),content:Object(a["K"])((function(){return[t.renderMap?(Object(a["u"])(),Object(a["f"])(At,{key:0,countryData:t.countries,highColor:"#0f6364",lowColor:"#E6B24B",countryStrokeColor:"#eee",defaultCountryFillColor:"#fff"},null,8,["countryData"])):(Object(a["u"])(),Object(a["f"])("div",et," - no data available - "))]})),_:1})]),Object(a["j"])("div",nt,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[at]})),content:Object(a["K"])((function(){return[t.renderCloud?(Object(a["u"])(),Object(a["f"])(Nt,{key:0,ref:"worldCloud",data:t.words},null,8,["data"])):(Object(a["u"])(),Object(a["f"])("div",ct," - no data available - "))]})),_:1})]),Object(a["j"])("div",lt,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[rt]})),content:Object(a["K"])((function(){return[Object(a["j"])(_t,{rawData:t.topValues["entity"]},null,8,["rawData"])]})),_:1})]),Object(a["j"])("div",it,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[ot]})),content:Object(a["K"])((function(){return[Object(a["j"])(_t,{rawData:t.topValues["tweet_type"]},null,8,["rawData"])]})),_:1})]),Object(a["j"])("div",ut,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[st]})),content:Object(a["K"])((function(){return[Object(a["j"])(_t,{rawData:t.topValues["hashtag"]},null,8,["rawData"])]})),_:1})]),Object(a["j"])("div",bt,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[jt]})),content:Object(a["K"])((function(){return[Object(a["j"])(_t,{rawData:t.topValues["lang"]},null,8,["rawData"])]})),_:1})]),Object(a["j"])("div",dt,[Object(a["j"])(wt,{class:"big-chart"},{title:Object(a["K"])((function(){return[pt]})),content:Object(a["K"])((function(){return[Object(a["j"])(kt,{modelValue:t.selectedPubField,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.selectedPubField=e}),options:t.pubFields,optionLabel:"label",optionValue:"value",placeholder:"Select a Field",onChange:xt.loadPubProgress},null,8,["modelValue","options","onChange"]),ft,t.renderPublicationChart?(Object(a["u"])(),Object(a["f"])(_t,{key:0,height:600,title:" ",dateFormat:!0,rawData:t.pubOverTimeData,type:"line"},null,8,["rawData"])):(Object(a["u"])(),Object(a["f"])("div",Ot," - no data available - "))]})),_:1})]),Object(a["j"])("div",ht,[Object(a["j"])(wt,null,{title:Object(a["K"])((function(){return[gt]})),content:Object(a["K"])((function(){return[Object(a["j"])(Dt,{doi_in:t.$route.params.p},null,8,["doi_in"])]})),_:1})])])}n("159b"),n("ac1f"),n("1276"),n("5319"),n("a15b");var mt=n("6e74"),xt=n("94e1"),wt=n("ea6f"),yt=n("df6d"),Ct=n("3f5f"),_t=n("8b39"),At=n("15c5"),Nt={name:"Publication",components:{PublicationChart:mt["a"],WordCloud:wt["a"],MapChart:yt["a"],AmbaTweet:_t["a"],TimeTooltip:At["a"]},beforeRouteUpdate:function(t,e){t.query.time!==e.query.time&&(void 0!==t.query.time?this.duration=t.query.time:this.duration="currently"),this.fetchData()},data:function(){return{duration:"currently",publication:{},countries:[],data:[],words:[],renderCloud:!1,renderMap:!1,pubCount:"-",tweetCount:"-",scoreSum:"-",totalFollowers:"-",sentiment:"-",containsAbstract:"-",questions:"-",exclamations:"-",tweetAuthorCount:"-",topValues:[],profileData:[],pubOverTimeData:[],renderPublicationChart:!0,selectedPubField:"score",pubFields:[{label:"Bot Rating",value:"bot_rating"},{label:"Contains Abstract",value:"contains_abstract_raw"},{label:"Exclamations",value:"exclamations"},{label:"Followers",value:"followers"},{label:"Length",value:"length"},{label:"Questions",value:"questions"},{label:"Score",value:"score"},{label:"Sentiment",value:"sentiment_raw"},{label:"Count",value:"count"}]}},created:function(){void 0!==this.$route.query.time&&(this.duration=this.$route.query.time),this.fetchData()},computed:{realUrl:function(){return"http://"+this.publication.url}},methods:{localeNumber:function(t){return isNaN(t)?"-":t.toLocaleString("de-De")},hover:function(t){t||console.log(t)},loadPubProgress:function(){var t=this;Ct["a"].progressValue(this.selectedPubField,5,this.duration,this.$route.params.p).then((function(e){t.pubOverTimeData=e.data.results,t.renderPublicationChart=!0})).catch((function(e){t.renderPublicationChart=!1,t.pubOverTimeData=[],console.log(e)}))},fetchData:function(){var t=this;xt["a"].get(this.$route.params.p,this.duration).then((function(e){t.publication=e.data.results["publication"][0],t.publication["authors"]=e.data.results["authors"],t.publication["fields_of_study"]=e.data.results["fields_of_study"],t.publication["sources"]=e.data.results["sources"],t.publication.url="doi.org/"+t.publication["doi"]})).catch((function(t){console.log(t)})),this.loadPubProgress(),Ct["a"].numbers(this.duration,null,this.$route.params.p).then((function(e){t.tweetCount=e.data.results["count"],t.totalFollowers=e.data.results["followers"],t.scoreSum=e.data.results["score"],t.containsAbstract=e.data.results["contains_abstract_raw"],t.sentiment=e.data.results["sentiment_raw"],t.pubCount=e.data.results["pub_count"],t.questions=e.data.results["questions"],t.exclamations=e.data.results["exclamations"]})).catch((function(e){console.log(e),t.tweetCount="-",t.totalFollowers="-",t.scoreSum="-",t.containsAbstract="-",t.sentiment="-",t.pubCount="-",t.questions="-",t.exclamations="-"})),Ct["a"].top(null,this.$route.params.p).then((function(e){var n=[];e.data.results.word.forEach((function(t){var e={};e.text=t.value,e.value=t.count,n.push(e)})),t.words=n,t.renderCloud=!0})).catch((function(e){t.renderCloud=!1,console.log(e)})),Ct["a"].top(["location"],this.$route.params.p,1e3).then((function(e){var n={};e.data.results.location.forEach((function(t){n[t.value.toUpperCase()]=t.count})),t.countries=n,t.renderMap=!0})).catch((function(e){t.renderMap=!1,console.log(e)})),Ct["a"].percentages(null,this.$route.params.p).then((function(e){t.topValues=e.data.results,t.render=!0})).catch((function(t){console.log(t)})),Ct["a"].profileData(this.$route.params.p,this.duration).then((function(e){t.profileData=e.data.results})).catch((function(e){console.log(e),t.profileData=["ds"]})),Ct["a"].tweetAuthorCount("publication",this.$route.params.p).then((function(e){t.tweetAuthorCount=e.data.results[0].count})).catch((function(e){t.tweetAuthorCount="-",console.log(e)}))},typeString:function(t){if(t){for(var e=t.replace("_"," ").toLowerCase().split(" "),n=0;n<e.length;n++)e[n]=e[n].charAt(0).toUpperCase()+e[n].substring(1);return e.join(" ")}},dateFormat:function(t){if(t)return t=new Date(t),console.log(t),t.toLocaleDateString()}}};n("ec17");Nt.render=vt;e["default"]=Nt},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),c=n("9263"),l=n("d039"),r=n("b622"),i=n("9112"),o=r("species"),u=RegExp.prototype;t.exports=function(t,e,n,s){var b=r(t),j=!l((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),d=j&&!l((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return e=!0,null},n[b](""),!e}));if(!j||!d||n){var p=/./[b],f=e(b,""[t],(function(t,e,n,a,l){var r=e.exec;return r===c||r===u.exec?j&&!l?{done:!0,value:p.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}));a(String.prototype,t,f[0]),a(u,b,f[1])}s&&i(u[b],"sham",!0)}},e82f:function(t,e,n){},ec17:function(t,e,n){"use strict";n("e82f")},fce3:function(t,e,n){var a=n("d039");t.exports=a((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=Publication.b105fb99.js.map