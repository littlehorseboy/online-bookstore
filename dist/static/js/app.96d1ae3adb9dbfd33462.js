webpackJsonp([1],{0:function(t,e){},"7Khy":function(t,e){},Hv5l:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("8+8L"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"tabs"},[n("ul",[n("router-link",{attrs:{to:{name:"Home"}}},[n("div",[t._v("首頁")])]),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"Categories"}}},[n("div",[t._v("分類")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"ShoppingCart"}}},[n("div",[t._v("購物車")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"Me"}}},[n("div",[t._v("我")])])],1)],1)]),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)])},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("Hv5l")},null,null).exports,r=n("/ocq"),c=n("fZjL"),l=n.n(c),d=n("DNVT"),u=(n("v2ns"),{name:"Booklist",props:{heading:String,books:Array},filters:{join:function(t){return t.join(",")}}}),v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-list"},[n("div",{staticClass:"header"},[n("div",{staticClass:"heading"},[t._v(t._s(t.heading))]),t._v(" "),n("div",{staticClass:"more"},[t._v("更多...")])]),t._v(" "),n("div",{staticClass:"book-items"},t._l(t.books,function(e,i){return n("div",{key:i,staticClass:"book",on:{click:function(n){t.$emit("onBookSelect",e)}}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:e.img_url}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"authors"},[t._v(t._s(t._f("join")(e.authors)))])])}))])},staticRenderFns:[]};var p={components:{BookList:n("VU/8")(u,v,!1,function(t){n("nf9Z")},"data-v-290010fa",null).exports},data:function(){return{announcement:"",slides:[],latestUpdated:[],recommended:[]}},methods:{preview:function(){alert("顯示圖書詳情")}},created:function(){var t=this;this.$http.get("../../static/fixtures/home/home.json").then(function(e){l()(e.data).forEach(function(n){t[n]=e.data[n]})},function(t){console.log("取得資料失敗: "+t)})},mounted:function(){new d.a(this.$refs.slider,{loop:!0,pagination:{el:this.$refs.pagination,clickable:!0},autoplay:!0})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section"},[n("div",[n("div",{ref:"slider",staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.slides,function(t,e){return n("div",{key:e,staticClass:"swiper-slide"},[n("router-link",{attrs:{to:{name:"BookDetail",params:{id:t.id}}}},[n("img",{attrs:{src:t.img_url}})])],1)})),t._v(" "),n("div",{ref:"pagination",staticClass:"swiper-pagination"})]),t._v(" "),n("div",{staticClass:"announcement"},[n("label",[t._v("快訊")]),t._v(" "),n("span",[t._v(t._s(t.announcement))])])])]),t._v(" "),n("div",{staticClass:"section"},[n("book-list",{attrs:{heading:"新書上架",books:t.latestUpdated},on:{onBookSelect:function(e){t.preview(e)}}})],1),t._v(" "),n("div",{staticClass:"section"},[n("book-list",{attrs:{heading:"編輯推薦",books:t.recommended},on:{onBookSelect:function(e){t.preview(e)}}})],1)])},staticRenderFns:[]};var m=n("VU/8")(p,f,!1,function(t){n("qbC6")},"data-v-3ac37a0b",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var _=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Category App"}}},h,!1,function(t){n("sQbd")},"data-v-9ef75816",null).exports,g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var C=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Cart App"}}},g,!1,function(t){n("tJ8p")},"data-v-4395babd",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("我")])])}]};var b=n("VU/8")({},k,!1,function(t){n("icTd")},"data-v-a01cef66",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var $=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Me App"}}},w,!1,function(t){n("7Khy")},"data-v-871d4ab6",null).exports;i.a.use(r.a);var E=new r.a({routes:[{path:"/",name:"Home",component:m},{path:"/categories",name:"Categories",component:_},{path:"/shopping-cart",name:"ShoppingCart",component:C},{path:"/me",name:"Me",component:b},{path:"/books/:id",name:"BookDetail",component:$}]});i.a.config.productionTip=!1,i.a.use(s.a),new i.a({el:"#app",router:E,components:{App:o},template:"<App/>"})},icTd:function(t,e){},nf9Z:function(t,e){},qbC6:function(t,e){},sQbd:function(t,e){},tJ8p:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96d1ae3adb9dbfd33462.js.map