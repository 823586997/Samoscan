(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bec5dae"],{3244:function(t,e,a){"use strict";var i=a("68e7"),s=a.n(i);s.a},"35a4":function(t,e,a){},"41ac":function(t,e,a){"use strict";var i=a("35a4"),s=a.n(i);s.a},"4ec4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{attrs:{value:t.$t(t.typeName+"."+t.value)},on:{input:function(e){t.change(e)}}},t._l(t.typeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:t.$t(t.typeName+"."+e.label),value:e.value}})}))},s=[],n={props:{value:{default:0},typeOptions:{type:Array,default:function(){return[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"}]}},typeName:{type:String,default:"type"}},methods:{change:function(t){this.$emit("change",t)}}},l=n,o=a("2877"),c=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=c.exports},"68e7":function(t,e,a){},"89d1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paging"},[a("el-pagination",{staticClass:"pages",attrs:{background:"",small:"",layout:"total,prev, pager, next, jumper",total:t.pager.total,"current-page":t.pager.page,"page-size":t.pager.rows,"pager-count":5},on:{"update:currentPage":function(e){t.$set(t.pager,"page",e)},"size-change":t.onChangeSize,"current-change":t.onChangePage}})],1)},s=[],n={props:["pager"],computed:{total:function(){return this.pager.total},initBack:function(){return this.pager.total/this.pager.rows<this.pager.page}},watch:{total:function(){this.initBack&&(this.pager.page-=1,this.$emit("change"))}},methods:{onChangeSize:function(t){this.pager.rows=t,this.$emit("change")},onChangePage:function(t){this.pager.page=t,this.$emit("change")}}},l=n,o=(a("41ac"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=c.exports},aa55:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transaction"},[a("div",{staticClass:"top-chart w1200 "},[a("div",{staticClass:"chart_title"},[a("h2",{staticClass:"fl font18 capitalize"},[t._v(t._s(t.$t("transaction.transaction0")))]),a("div",{staticClass:"fr"},[a("div",{staticClass:"font16"},[a("span",{staticClass:"font12 capitalize"},[t._v(t._s(t.$t("transaction.transaction1"))+":")]),t._v(" "+t._s(this.txListTotal))]),a("div",{staticClass:"chart_bt"},[a("el-button",{staticClass:"btn capitalize",class:1===t.timeRate?"btn_N":"",attrs:{type:"text"},on:{click:function(e){t.changeDate(1)}}},[t._v(t._s(t.$t("public.week")))]),a("el-button",{staticClass:"btn capitalize",class:2===t.timeRate?"btn_N":"",attrs:{type:"text"},on:{click:function(e){t.changeDate(2)}}},[t._v(t._s(t.$t("public.month")))]),a("el-button",{staticClass:"btn capitalize",class:3===t.timeRate?"btn_N":"",attrs:{type:"text"},on:{click:function(e){t.changeDate(3)}}},[t._v(t._s(t.$t("public.year")))])],1)])]),a("div",{staticClass:"chart_info"},[a("ve-line",{staticStyle:{top:"-40px"},attrs:{height:"300px",data:t.timeChartData,"legend-visible":!1,colors:t.colors,settings:t.chartSettings,loading:t.timeRateDataLoading}})],1)]),a("div",{staticClass:"info bg-gray"},[a("div",{staticClass:"w1200"},[a("h2",{staticClass:"title font18 capitalize"},[t._v(t._s(t.$t("public.transactionList")))]),a("div",{staticClass:"tabs w1200"},[a("SelectBar",{attrs:{size:"small"},on:{change:t.changeType},model:{value:t.typeRegion,callback:function(e){t.typeRegion=e},expression:"typeRegion"}}),a("el-switch",{directives:[{name:"show",rawName:"v-show",value:0===t.typeRegion,expression:"typeRegion=== 0"}],staticClass:"hide-switch fr",attrs:{width:32,"inactive-text":t.$t("block.block1")},on:{change:t.hideConsensusList},model:{value:t.hideSwitch,callback:function(e){t.hideSwitch=e},expression:"hideSwitch"}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.txListLoading,expression:"txListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.txList,stripe:"",border:""}},[a("el-table-column",{attrs:{width:"30",align:"left"}}),a("el-table-column",{attrs:{label:t.$t("public.height"),width:"90",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"click",on:{click:function(a){t.toUrl("blockInfo",e.row.height)}}},[t._v(t._s(e.row.height))])]}}])}),a("el-table-column",{attrs:{label:"TXID","min-width":"280",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"click",on:{click:function(a){t.toUrl("transactionInfo",e.row.hash)}}},[t._v(t._s(e.row.hashs))])]}}])}),a("el-table-column",{attrs:{prop:"time",label:t.$t("public.time"),width:"180",align:"left"}}),a("el-table-column",{attrs:{label:t.$t("public.type"),width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"capitalize"},[t._v(t._s(t.$t("type."+e.row.type)))])]}}])}),a("el-table-column",{attrs:{label:t.$t("public.amount")+"(NULS)",width:"160",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.value))]}}])}),a("el-table-column",{attrs:{label:t.$t("public.fee")+"(NULS)",width:"160",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.fees))]}}])})],1),a("paging",{directives:[{name:"show",rawName:"v-show",value:t.pager.total>t.pager.page,expression:"pager.total > pager.page"}],attrs:{pager:t.pager},on:{change:t.pagesList}})],1)])])])},s=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("c32d")),l=a.n(n),o=a("89d1"),c=a("4ec4"),r=a("6ace"),u={data:function(){return this.colors=["#7db46d","#7db46d","#7db46d","#546570","#c4ccd3"],this.chartSettings={yAxisType:["normal"],labelMap:{value:"TXS"}},{timeChartData:{columns:[],rows:[]},timeRateDataLoading:!0,timeRate:2,typeRegion:0,hideSwitch:!1,txList:[],txListLoading:!0,txListTotal:0,pager:{total:0,page:1,rows:6}}},components:{paging:o["a"],SelectBar:c["a"]},created:function(){this.getYearRateData(this.timeRate),this.getTxList(this.pager.page,this.pager.rows,this.typeRegion,this.hideSwitch)},mounted:function(){},methods:{getYearRateData:function(t){var e=this;this.$post("/","getTxStatistical",[t]).then(function(t){t.hasOwnProperty("result")&&(e.timeChartData.columns=["key","value"],e.timeChartData.rows=t.result,e.timeRateDataLoading=!1)})},changeDate:function(t){this.timeRateDataLoading=!0,this.timeChartData.columns=[],this.timeChartData.rows=[],this.timeRate=t,this.getYearRateData(t)},getTxList:function(t,e,a,i){var s=this;this.$post("/","getTxList",[t,e,a,i]).then(function(t){if(t.hasOwnProperty("result")){var e=!0,n=!1,o=void 0;try{for(var c,u=t.result.list[Symbol.iterator]();!(e=(c=u.next()).done);e=!0){var h=c.value;h.time=l()(Object(r["c"])(1e3*h.createTime)).format("YYYY-MM-DD HH:mm:ss"),h.hashs=Object(r["d"])(h.hash,20),h.value=Object(r["f"])(h.value,8),h.fees=Object(r["f"])(h.fee.value,8)}}catch(p){n=!0,o=p}finally{try{e||null==u.return||u.return()}finally{if(n)throw o}}s.txList=t.result.list,0!==a||i||(s.txListTotal=t.result.totalCount),s.pager.total=t.result.totalCount,s.txListLoading=!1}})},pagesList:function(){this.txListLoading=!0,this.getTxList(this.pager.page,this.pager.rows,this.typeRegion,this.hideSwitch)},changeType:function(t){this.pager={total:0,page:1,rows:7},this.typeRegion=parseInt(t),this.getTxList(this.pager.page,this.pager.rows,this.typeRegion,this.hideSwitch)},hideConsensusList:function(){this.txListLoading=!0,this.pager={total:0,page:1,rows:6},this.getTxList(this.pager.page,this.pager.rows,this.typeRegion,this.hideSwitch)},toUrl:function(t,e){this.$router.push({name:t,query:"transactionInfo"===t?{hash:e}:{height:e}})}}},h=u,p=(a("3244"),a("2877")),g=Object(p["a"])(h,i,s,!1,null,null,null);e["default"]=g.exports}}]);