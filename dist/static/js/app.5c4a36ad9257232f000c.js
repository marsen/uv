webpackJsonp([1],{"/8vw":function(t,e,s){"use strict";(function(t){var a=s("//Fk"),i=s.n(a),n=s("mtWM"),o=s.n(n);s("puN1").shim(),e.a={ACTIONS_UPDATA_PAGES:function(t,e){var s=t.commit;t.getters;s("setPagesLen",e.tPageLen),s("updataPages")},RUN_AXIOS:function(e,s){var a=e.commit,n=e.state;e.getters;o.a.defaults.timeout=5e3,o.a.interceptors.request.use(function(e){return t(".uv-table").empty(),t(".load-container").css("display","block"),e},function(t){return i.a.reject(t)});var l=Date.parse(new Date);o()({methods:"get",url:"http://opendata2.epa.gov.tw/UV/UV.json?$format=json?"+l}).then(function(e){console.log("axios成功，線上資料......"),a("SAVE_AXIOS_RESPONSE",e);var s=e.data;s.sort(sort_by("County",!1,String)),n.myTable=new MakePage(s,-1),a("setPagesLen",-1),a("updataPages"),a("setIsListMode",!0),n.uvjsons=s;var i=makeCityArray(s,"County");a("setCities",i),t(".load-container").css("display","none"),t("#contant-view").removeClass("hidden")}).catch(function(t){t.response?(console.log("有錯誤訊息的錯誤 A known => "+t),console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):console.log("發生未知的錯誤 unknow error =>"+t),console.log(t.config),console.log("axios 讀取假資料"),n.uvjsons=make_datas(),n.myTable=new MakePage(n.uvjsons,-1);var e=makeCityArray(n.uvjsons,"County");a("setCities",e)}).then(function(){}).finally(function(e){console.log("finally......"),a("setRefreshTime"),t(".load-container").css("display","none"),t("#contant-view").removeClass("hidden"),a("setIsRunning",!1)})}}}).call(e,s("7t+N"))},"/bjO":function(t,e,s){"use strict";e.a={}},"1/oy":function(t,e){},"1zdo":function(t,e,s){"use strict";(function(t){e.a={data:function(){return{}},methods:{read:function(){if(sessionStorage.uvJson){t("#read-view").addClass("hidden");var e=sessionStorage.getItem("uvTime");this.$store.commit("setUpdateTime",e),this.$store.commit("readSessionStorage"),console.log("sessionStorage.uvJson OK"),this.$store.commit("setUVjsons",JSON.parse(sessionStorage.uvJson));var s=makeCityArray(this.uvjsons,"County");this.$store.commit("setCities",s),t(".listradio.typelist").click(),t("#contant-view").removeClass("hidden")}else console.log("sessionStorage.uvJson null"),alert("未發現儲存資料，請更新及存入，再進行讀取。")},goBack:function(){this.$router.push("navbar")}}}}).call(e,s("7t+N"))},"2a8t":function(t,e,s){"use strict";e.a={}},"9vkI":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top-header"},[s("nav",[s("span",{staticClass:"menu-title"},[t._v("openData紫外線 --- Vuex DEMO")])])])])}],n={render:a,staticRenderFns:i};e.a=n},DEtk:function(t,e,s){"use strict";(function(t,a){var i,n=s("bOdI"),o=s.n(n),l=s("mvHQ"),r=s.n(l),c=s("Dd8w"),u=s.n(c),d=s("NYxO"),m=s("mtWM");s.n(m);e.a={name:"navBar",filters:{},data:function(){return{fields:["County","SiteName","UVI"],sendText:""}},methods:u()({},Object(d.c)(["setCity","setUVjsons","setUpdateTime","setCountyFilter","setIsRunning","setIsListMode","setPagesLen","updataPages","readSessionStorage","store2oldTempTable","store2TempTable","mystring"]),(i={viewInit:function(){},clearFilter:function(){this.$store.commit("setCity",""),this.$store.commit("setCountyFilter","")},filterCounty:function(t){this.$store.commit("setCity",""),this.$store.commit("setCountyFilter",t),this.$store.commit("store2oldTempTable",this.tempTable);var e=this.filterTempTable(t);this.$store.commit("store2TempTable",e)},filterCity:function(t){this.$store.commit("setCountyFilter",""),this.$store.commit("setCity",t),this.$store.commit("store2oldTempTable",this.tempTable);var e=this.filterTempTable(t);this.$store.commit("store2TempTable",e)},nextTablePage:function(){if(this.clearFilter(),null!=this.myTable){var t=this.myTable.nextPage();this.setPage(t)}},preTablePage:function(){if(this.clearFilter(),null!=this.myTable){var t=this.myTable.prePage();this.setPage(t)}},setPage:function(e){if(this.clearFilter(),null!=this.myTable){this.getTpageIndex!==e&&(t(".list-nav-span.active").removeClass("active"),this.$store.commit("setTpageIndex",e))}this.$store.commit("updataPages")},timeRefresh:function(){sessionStorage.uvTime=this.getRefreshTime},pageChange:function(t){return t===this.getTpageIndex?"active":""},write:function(){this.uvjsons?(this.timeRefresh(),sessionStorage.uvJson=r()(this.uvjsons),alert("存入成功。")):alert("請更新UV資料後，再存入。")},buyPageAdd:function(){console.log("add......"),t(".ad-bar-layout").addClass("active"),t(".ad-bar-layout-close").addClass("active")},buyPageRemove:function(){console.log("remove......"),t(".ad-bar-layout").removeClass("active"),t(".ad-bar-layout-close").removeClass("active")},read:function(){a("#contant-view").addClass("hidden"),this.$router.push("DoRead")},getSendText:function(){this.sendText=findWord(),a(".wechat-input").val(this.sendText)},clearSession:function(){sessionStorage.removeItem("uvJson"),sessionStorage.removeItem("uvTime"),sessionStorage.clear()},clearUV:function(){this.$router.push("PageClear"),this.clearSession(),this.$store.commit("setUVjsons",null),this.$store.commit("setUpdateTime",""),this.clearFilter(),a("#contant-view").addClass("hidden")},clearScreen:function(){this.$store.commit("setUVjsons",null),this.$store.commit("setUpdateTime",""),this.clearFilter(),a("#contant-view").addClass("hidden")}},o()(i,"getSendText",function(){this.sendText=findWord(),a(".wechat-input").val(this.sendText)}),o()(i,"getUV",function(){if(this.clearScreen(),this.isRunning)return!1;console.log("getUV run......"),this.$router.push("navBar"),this.$store.commit("setIsRunning",!0),this.$store.dispatch("RUN_AXIOS")}),i)),beforeCreate:function(){},created:function(){this.viewInit()},beforeMount:function(){},computed:u()({},Object(d.d)(["uvjsons","uvjsonclone","isRunning","islistMode","tempTable","myTable","oldTempTable","updateTime"]),Object(d.b)(["getCountyFilter","getTpage","getTpageIndex","getCity","getCities","getRefreshTime","getIsListMode","filterTempTable"]),{willGetCountyFilter:{get:function(){return this.getCountyFilter},set:function(){}},willGetCity:{get:function(){return this.getCity},set:function(){}}}),watch:{watchIsListMode:function(e){this.clearFilter(),!0===e?(t(".page-type-page").show(),t(".list-nav").hide(),this.myTable.setPageLength(-1),this.updataPages()):(t(".page-type-page").show(),t(".list-nav").show(),this.myTable.setPageLength(10),this.updataPages())}},mounted:function(){console.log("mounted......")},beforeUpdate:function(){},updated:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){},destroyed:function(){}}}).call(e,s("7t+N"),s("7t+N"))},FASY:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bgitems wrap-margin"},[s("p",{staticClass:"bgitems-item"},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"bgitems-item"},[t._v("Vuex demo")])])])}],n={render:a,staticRenderFns:i};e.a=n},Id91:function(t,e){},JwCZ:function(t,e,s){"use strict";var a=s("2a8t"),i=s("FASY"),n=s("VU/8"),o=n(a.a,i.a,!1,null,null,null);e.a=o.exports},KWv7:function(t,e,s){"use strict";(function(t){var a=s("7+uW"),i=s("/ocq"),n=s("M93x"),o=s("g2+m"),l=s("JwCZ"),r=s("Ww4I");a.a.use(i.a);var c=new i.a({mode:"history",base:t,routes:[{path:"/",name:"app",component:n.a,children:[{path:"/navbar",name:"NavBar",component:o.a,children:[{path:"/PageClear",name:"PageClear",component:l.a},{path:"/DoRead",name:"DoRead",component:r.a}]}]}]});e.a=c}).call(e,"/")},M93x:function(t,e,s){"use strict";function a(t){s("p9om")}var i=s("xJD8"),n=s("z71G"),o=s("VU/8"),l=a,r=o(i.a,n.a,!1,l,null,null);e.a=r.exports},MYhU:function(t,e,s){e=t.exports=s("FZ+f")(void 0),e.push([t.i,"",""])},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("e6fC"),n=s("KWv7"),o=s("YtJ0");a.a.use(i.a),a.a.config.debug=!0,a.a.config.debug=!0,a.a.config.debug=!0,a.a.config.debug=!0;new a.a({el:"#app",store:o.a,router:n.a}).$mount("#app")},U0O9:function(t,e,s){"use strict";var a=s("/bjO"),i=s("9vkI"),n=s("VU/8"),o=n(a.a,i.a,!1,null,null,null);e.a=o.exports},"UTg/":function(t,e,s){"use strict";(function(t){var a=s("woOf"),i=s.n(a);e.a={setRefreshTime:function(t){console.log("mutations setRefreshTime ......");var e="更新時間："+getTime();t.updateTime=e},setUpdateTime:function(t,e){console.log("mutations setUpdateTime ......"),t.updateTime=e},setUVjsons:function(t,e){t.uvjsons=e},setCountyFilter:function(t,e){t.pages.countyFilter=e},setCities:function(t,e){t.pages.cities=e},setCity:function(t,e){t.pages.city=e},setIsRunning:function(t,e){return t.isRunning=e,t.isRunning},setIsListMode:function(e,s){return e.pages.islistMode=s,e.pages.city="",s?(e.myTable.setPageLength(-1),t(".list-nav").hide()):(e.myTable.setPageLength(10),t(".list-nav").show()),e.pages.tPage=e.myTable.getTotalPage(),e.tempTable=e.myTable.tableUpdata(),e.pages.islistMode},setTpageIndex:function(t,e){t.pages.tPageIndex=e,t.myTable.setCurrentPage(e)},setPagesLen:function(t,e){t.pages.tPageLen=t.myTable.setPageLength(e)},updataPages:function(t){t.pages.tPage=t.myTable.getTotalPage(),t.tempTable=t.myTable.tableUpdata()},readSessionStorage:function(t){t.uvjsons=JSON.parse(sessionStorage.uvJson)},store2TempTable:function(t,e){t.tempTable=i()([],e)},store2oldTempTable:function(t,e){t.oldTempTable=i()([],e)},SAVE_AXIOS_RESPONSE:function(t,e){t.uvjsons=e.data}}}).call(e,s("7t+N"))},WMeU:function(t,e,s){"use strict";e.a={getRefreshTime:function(t){return t.updateTime},getIsListMode:function(t){return t.pages.islistMode},getCountyFilter:function(t){return t.pages.countyFilter},getCities:function(t){return t.pages.cities},getCity:function(t){return t.pages.city},getTpage:function(t){return t.pages.tPage},getTpageIndex:function(t){return t.pages.tPageIndex},filterTempTable:function(t,e){return function(e){var s=""!==t.pages.city?t.pages.city:t.pages.countyFilter;return t.uvjsons.filter(function(t){if(-1!==t.County.indexOf(s))return t.County})}}}},Ww4I:function(t,e,s){"use strict";var a=s("1zdo"),i=s("e8Q6"),n=s("VU/8"),o=n(a.a,i.a,!1,null,null,null);e.a=o.exports},YtJ0:function(t,e,s){"use strict";var a=s("7+uW"),i=s("NYxO"),n=s("/8vw"),o=s("WMeU"),l=s("UTg/");a.a.use(i.a);var r={uvjsons:null,updateTime:"",isRunning:!1,pages:{cities:[],city:"",countyFilter:"",islistMode:!0,tPage:0,tPageLen:0,tPageIndex:0},tempTable:[],oldTempTable:[],myTable:null,mystring:"strings"};e.a=new i.a.Store({state:r,getters:o.a,actions:n.a,mutations:l.a})},e8Q6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap-margin",attrs:{id:"read-view"}},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-padding"},[s("button",{staticClass:"btn btn-block btn-primary btn-lg",on:{click:function(e){e.stopPropagation(),t.read(e)}}},[t._v("讀取 ")]),t._v(" "),s("button",{staticClass:"btn btn-block btn-secondary btn-lg",on:{click:function(e){e.stopPropagation(),t.goBack(e)}}},[t._v("取消")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bgitems wrap-margin"},[s("p",{staticClass:"bgitems-item"},[s("i",{staticClass:"fa fa-file-alt",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",{staticClass:"bgitems-item"},[t._v("Read...")])])}],n={render:a,staticRenderFns:i};e.a=n},"g2+m":function(t,e,s){"use strict";var a=s("DEtk"),i=s("jsTr"),n=s("VU/8"),o=n(a.a,i.a,!1,null,null,null);e.a=o.exports},jkNQ:function(t,e,s){t.exports=s.p+"static/img/umbrella02.0366211.jpg"},jsTr:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("ul",{staticClass:"fnBar"},[s("li",{staticClass:"col-xs-6 col-sm-6 col-md-3 col-lg-3",on:{click:function(e){e.stopPropagation(),t.getUV(e)}}},[s("i",{staticClass:"fas fa-redo-alt",attrs:{"aria-hidden":"true"}}),t._v("更新UV資料")]),t._v(" "),s("li",{staticClass:"col-xs-6 col-sm-6 col-md-3 col-lg-3 ",on:{click:function(e){e.stopPropagation(),t.write(e)}}},[s("i",{staticClass:"far fa-save",attrs:{"aria-hidden":"true"}}),t._v("存入")]),t._v(" "),s("li",{staticClass:"col-xs-6 col-sm-6 col-md-3 col-lg-3",on:{click:function(e){e.stopPropagation(),t.read(e)}}},[s("i",{staticClass:"far fa-file-alt",attrs:{"aria-hidden":"true"}}),t._v("讀取")]),t._v(" "),s("li",{staticClass:"col-xs-6 col-sm-6 col-md-3 col-lg-3",on:{click:function(e){e.stopPropagation(),t.clearUV(e)}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),t._v("清除畫面")])])])]),t._v(" "),s("router-view"),t._v(" "),s("section",[s("div",{staticClass:"container-fluid hidden",attrs:{id:"contant-view"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"uv-contant"},[s("span",{staticClass:"info-text col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{id:"updated"}},[t._v(t._s(this.updateTime))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.willGetCountyFilter,expression:"willGetCountyFilter"}],staticClass:"city-filter info-text col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{type:"text",placeholder:"過濾縣市（ＥＸ：南投市）"},domProps:{value:t.willGetCountyFilter},on:{keyup:function(e){t.filterCounty(e.target.value)},input:function(e){e.target.composing||(t.willGetCountyFilter=e.target.value)}}}),t._v(" "),s("div",{staticClass:"select-warp col-xs-12 col-sm-12 col-md-12 col-lg-12>"},[s("span",{staticClass:"fl select-filter-text"},[t._v("   下拉過濾")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.willGetCity,expression:"willGetCity"}],staticClass:"fl select-filter col-xs-6 col-sm-6 col-md-6 col-lg-6",attrs:{id:"myselectbox",type:"text"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.willGetCity=e.target.multiple?s:s[0]},function(e){t.filterCity(e.target.value)}]}},t._l(this.getCities,function(e,a){return s("option",{attrs:{type:"text"},domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),s("div"),t._v(" "),s("div",{staticClass:" listradio-warp col-xs-12 col-sm-12 col-md-12 col-lg-12>"},[s("input",{staticClass:"listradio typelist",attrs:{type:"radio",name:"pagetype",checked:""},on:{click:function(e){e.stopPropagation(),t.setIsListMode(!0)}}}),t._v(" "),s("label",{staticClass:"listradio",attrs:{for:"listmode"}},[t._v("列表模式")]),t._v(" "),s("input",{staticClass:"listradio typepage",attrs:{type:"radio",name:"pagetype"},on:{click:function(e){e.stopPropagation(),t.setIsListMode(!1)}}}),t._v(" "),s("label",{staticClass:"listradio",attrs:{for:"pagemode"}},[t._v("分頁模式")])]),t._v(" "),s("div",{staticClass:"list-nav col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("div",[s("span",{staticClass:"list-nav-pre",on:{click:function(e){e.stopPropagation(),t.preTablePage(e)}}},[t._v("上一頁")]),t._v(" "),t._l(this.getTpage,function(e,a){return s("span",{staticClass:"list-nav-span",class:t.pageChange(a),on:{click:function(e){e.stopPropagation(),t.setPage(a)}}},[t._v(t._s(a+1))])}),t._v(" "),s("span",{staticClass:"list-nav-next",on:{click:function(e){e.stopPropagation(),t.nextTablePage(e)}}},[t._v("下一頁")])],2)]),t._v(" "),s("div",{staticClass:"page-type-page my-table col-xs-12 col-sm-12 col-md-12 col-lg-12"},[s("b-table",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{striped:"",items:t.tempTable,fields:t.fields},nativeOn:{click:function(e){t.buyPageAdd(e)}}})],1),t._v(" "),s("div",{staticClass:"gap col-xs-12 col-sm-12 col-md-12 col-lg-12"})])])])]),t._v(" "),s("div",{staticClass:"ad-bar-layout"},[s("div",{staticClass:"ad-bar-layout-close",on:{click:t.buyPageRemove}},[s("i",{staticClass:"far fa-window-close"})]),t._v(" "),t._m(0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ad-bar-wrap"},[a("img",{staticClass:"adbar-item-img",attrs:{src:s("jkNQ"),alt:"img01"}}),t._v(" "),a("div",{staticClass:"adbar-text-wrap"},[a("p",{staticClass:"adbar-item-title"},[t._v("UV絕對防禦!")]),t._v(" "),a("p",{staticClass:"adbar-item-txt"},[t._v("遮陽、擋雨、抗UV、基礎防風、輕量、手開、4級防潑水。遮陽、擋雨、抗UV、防曬、超防風、防潑水功能、自動開傘手動收回機制。80 P/G傘布(防潑水、速乾、防曬銀膠)")])]),t._v(" "),a("button",{staticClass:"adbar-item-go2buy",attrs:{type:"button",onclick:"javascript:window.open('https://sunlightsam.github.io/publicUmbrella/index.html')"}},[t._v("\n        導購")])])}],n={render:a,staticRenderFns:i};e.a=n},p9om:function(t,e,s){var a=s("MYhU");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("6daf0a00",a,!0)},xJD8:function(t,e,s){"use strict";var a=(s("7+uW"),s("U0O9"));e.a={mounted:function(){this.$router.push("navbar")},components:{MyHeader:a.a},beforeRouterEnter:function(t,e,s){console.log("beforeRouterEnter to = "+t),console.log("beforeRouterEnter to = "+e)}}},z71G:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("my-header"),t._v(" "),s("router-view")],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5c4a36ad9257232f000c.js.map