(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blogdetail"],{"0154":function(t,e,a){},"25d1":function(t,e,a){},"29fa":function(t,e,a){},"2c43":function(t,e,a){},"3a13":function(t,e,a){"use strict";a("9a54")},"3e55":function(t,e,a){"use strict";a("29fa")},"41fe":function(t,e,a){"use strict";a("0154")},5227:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return a("li",{key:i},[a("span",{class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")]),e.aside?a("span",{staticClass:"aside",class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.aside)+" ")]):t._e(),a("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},n=[],s={name:"RightList",props:{list:{type:Array,default:()=>[]}},methods:{handleClick(t){t.isSelect||this.$emit("select",t)}}},o=s,r=(a("7e80"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"6541019a",null);e["a"]=c.exports},"684a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},o=[],r={data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmiting=!1,this.formData.nickname="",this.formData.content=""}})}))}}},c=r,l=(a("3a13"),a("2877")),u=Object(l["a"])(c,s,o,!1,null,"f6ef7514",null),d=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},m=[],f=a("77c0"),g=a("ed08"),p={components:{Avatar:f["a"]},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:g["b"]}},b=p,v=(a("bac8"),Object(l["a"])(b,h,m,!1,null,"6bbcd1b2",null)),_=v.exports,S={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:d,DataList:_}},y=S,C=(a("3e55"),Object(l["a"])(y,i,n,!1,null,"081b83b7",null));e["a"]=C.exports},"7e80":function(t,e,a){"use strict";a("cbb1")},"864d":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return c}));var i=a("0c6d");async function n(t=1,e=10,a=-1){return await i["a"].get("/api/blog",{params:{page:t,limit:e,categoryid:a}})}async function s(){return await i["a"].get("/api/blogtype")}async function o(t){return await i["a"].get("/api/blog/"+t)}async function r(t){return await i["a"].post("/api/comment",t)}async function c(t,e=1,a=10){return await i["a"].get("/api/comment",{params:{blogid:t,page:e,limit:a}})}},"9a54":function(t,e,a){},"9dc0":function(t,e,a){},"9e75":function(t,e,a){"use strict";a("9dc0")},bac8:function(t,e,a){"use strict";a("25d1")},c925:function(t,e,a){"use strict";a("fc93")},cbb1:function(t,e,a){},ccf9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[t.data?a("BlogDetail",{attrs:{blog:t.data}}):t._e(),t.isLoading?t._e():a("BlogComment")],1)])},n=[],s=a("e128"),o=a("864d"),r=a("5849"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期: "+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览: "+t._s(t.blog.scanNumber))]),a("a",{attrs:{href:"#data-form-container"}},[t._v("评论: "+t._s(t.blog.commentNumber))]),a("RouterLink",{attrs:{to:{name:"CategoryBlog",params:{categoryId:t.blog.category.id}}}},[t._v(" "+t._s(t.blog.category.name)+" ")])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},l=[],u=a("ed08"),d=(a("2c43"),a("db6a"),{props:{blog:{type:Object,required:!0}},methods:{formatDate:u["b"]}}),h=d,m=(a("c925"),a("2877")),f=Object(m["a"])(h,c,l,!1,null,"1466039a",null),g=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-toc-container"},[a("h2",[t._v("目录")]),a("RightList",{attrs:{list:t.tocWithSelect},on:{select:t.handleSelect}})],1)},b=[],v=a("5227"),_={components:{RightList:v["a"]},props:{toc:{type:Array}},data(){return{activeAnchor:""}},computed:{tocWithSelect(){const t=(e=[])=>e.map(e=>({...e,isSelect:e.anchor===this.activeAnchor,children:t(e.children)}));return t(this.toc)},doms(){const t=[],e=a=>{for(const i of a)t.push(document.getElementById(i.anchor)),i.children&&i.children.length&&e(i.children)};return e(this.toc),t}},created(){this.setSelectDebounce=Object(u["a"])(this.setSelect,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainScroll",this.setSelectDebounce)},methods:{handleSelect(t){location.hash=t.anchor},setSelect(t){if(!t)return;this.activeAnchor="";const e=200;for(const a of this.doms){if(!a)continue;const t=a.getBoundingClientRect().top;if(t>=0&&t<=e)return void(this.activeAnchor=a.id);if(t>e)return;this.activeAnchor=a.id}}}},S=_,y=(a("9e75"),Object(m["a"])(S,p,b,!1,null,"282eae9c",null)),C=y.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-comment-container"},[a("MessageArea",{attrs:{title:"评论列表",subTitle:"("+t.data.total+")",list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},D=[],L=a("684a"),w={mixins:[Object(s["a"])({total:0,rows:[]})],components:{MessageArea:L["a"]},data(){return{page:1,limit:10}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore(){return this.data.rows.length<this.data.total}},methods:{handleScroll(t){if(this.isLoading||!t)return;const e=100,a=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);a<=e&&this.fetchMore()},async fetchData(){return await Object(o["d"])(this.$route.params.id,this.page,this.limit)},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleSubmit(t,e){const a=await Object(o["e"])({blogId:this.$route.params.id,...t});this.data.rows.unshift(a),this.data.total++,e("评论成功")}}},k=w,x=(a("41fe"),Object(m["a"])(k,$,D,!1,null,"6e9cfcce",null)),O=x.exports,M=a("f119"),j={components:{Layout:r["a"],BlogDetail:g,BlogTOC:C,BlogComment:O},mixins:[Object(s["a"])(null),Object(M["a"])("mainContainer")],methods:{async fetchData(){let t=await Object(o["a"])(this.$route.params.id);if(t)return u["c"].setRouteTitle(t.title),t;this.$router.push("/404")}},updated(){const t=location.hash;location.hash="",setTimeout(()=>{location.hash=t},50)}},A=j,E=(a("d8d9"),Object(m["a"])(A,i,n,!1,null,"bfaa56de",null));e["default"]=E.exports},d8d9:function(t,e,a){"use strict";a("e333")},db6a:function(t,e,a){},e128:function(t,e,a){"use strict";e["a"]=function(t=null){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}},e333:function(t,e,a){},f119:function(t,e,a){"use strict";e["a"]=function(t){return{mounted(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll(e){this.$refs[t].scrollTop=e},handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}},fc93:function(t,e,a){}}]);