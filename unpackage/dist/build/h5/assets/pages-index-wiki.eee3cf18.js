import{a5 as e,ai as a,r as t,o as l,a as c,w as r,d as s,e as o,h as n,f as i,t as u,b as h,g as d,ah as f,i as m,j as p,F as y,k as b,aj as g,v as _,s as C,ak as V,n as k}from"./index-032501f8.js";import{_ as x}from"./uni-icons.36ea0c46.js";import{r as w}from"./uni-app.es.4529798a.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as v}from"./uni-card.a42c4b06.js";import{g as $}from"./index.93cdfd2a.js";const B={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:I}=e(B);const j=S({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||I("uni-search-bar.cancel")},placeholderText(){return this.placeholder||I("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,a())},confirm(){a(),this.$emit("confirm",{value:this.searchVal})},blur(){a(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,p,y,b,g){const _=w(t("uni-icons"),x),C=d,V=f,k=m;return l(),c(C,{class:"uni-searchbar"},{default:r((()=>[s(C,{style:o({borderRadius:p.radius+"px",backgroundColor:p.bgColor}),class:"uni-searchbar__box",onClick:g.searchClick},{default:r((()=>[s(C,{class:"uni-searchbar__box-icon-search"},{default:r((()=>[n(e.$slots,"searchIcon",{},(()=>[s(_,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),b.show||b.searchVal?(l(),c(V,{key:0,focus:b.showSync,disabled:p.readonly,placeholder:g.placeholderText,maxlength:p.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:b.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>b.searchVal=e),onConfirm:g.confirm,onBlur:g.blur,onFocus:g.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(l(),c(k,{key:1,class:"uni-searchbar__text-placeholder"},{default:r((()=>[i(u(p.placeholder),1)])),_:1})),b.show&&("always"===p.clearButton||"auto"===p.clearButton&&""!==b.searchVal)&&!p.readonly?(l(),c(C,{key:2,class:"uni-searchbar__box-icon-clear",onClick:g.clear},{default:r((()=>[n(e.$slots,"clearIcon",{},(()=>[s(_,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):h("",!0)])),_:3},8,["style","onClick"]),"always"===p.cancelButton||b.show&&"auto"===p.cancelButton?(l(),c(k,{key:0,onClick:g.cancel,class:"uni-searchbar__cancel"},{default:r((()=>[i(u(g.cancelTextI18n),1)])),_:1},8,["onClick"])):h("",!0)])),_:3})}],["__scopeId","data-v-298b95e8"]]),A={__name:"articles",props:["catArticles"],setup(e){const a=e.catArticles;return(e,o)=>{const n=m,h=w(t("uni-card"),v),f=d;return l(),c(f,null,{default:r((()=>[(l(!0),p(y,null,b(g(a),(e=>{return l(),c(h,{title:(a=e.title,a.slice(0,10)+"...."),extra:"查看详情",onClick:a=>{return t=e.id,void _({url:`/pages/article/article?id=${String(t)}`});var t}},{default:r((()=>[s(n,{class:"uni-body"},{default:r((()=>{return[i(u((a=e.content,a.slice(0,20)+"....")),1)];var a})),_:2},1024)])),_:2},1032,["title","onClick"]);var a})),256))])),_:1})}}};const F=S({data:()=>({category:"",categoryId:0,catArticles:null,searchValue:"",bgcolor:"#5fa5fa",frontColor:"#ffffff",type:"bottom",show:!0}),onLoad(){C({backgroundColor:this.bgcolor,frontColor:this.fontColor}),this.getCategory()},methods:{search(e){console.log(e)},scroll(e){},getCategory(){$("api/articleCat/all",null).then((e=>{this.category=e.data.articleCats,this.categoryId=e.data.articleCats[0].id}))},changeCategory(e,a){this.category.forEach(((a,t)=>{a.selected=t===e})),this.categoryId=a}},watch:{categoryId(){this.catArticles=null,$(`api/article/${this.categoryId}`,null).then((e=>{this.catArticles=e.data.articles}))}}},[["render",function(e,a,n,f,m,g){const _=w(t("uni-search-bar"),j),C=d,S=V,v=w(t("uni-icons"),x),$=w(t("articles"),A);return l(),p(y,null,[s(_,{style:o({backgroundColor:m.bgcolor}),onConfirm:g.search,"cancel-button":"none",focus:!0,modelValue:m.searchValue,"onUpdate:modelValue":a[0]||(a[0]=e=>m.searchValue=e)},null,8,["style","onConfirm","modelValue"]),s(C,{class:"catogory"},{default:r((()=>[s(S,{class:"scroll-view_H","scroll-x":"true",onScroll:g.scroll,"show-scrollbar":!0},{default:r((()=>[(l(!0),p(y,null,b(m.category,((e,a)=>(l(),c(C,{class:k(["scroll-view-item_H",{selected:e.selected}]),key:a,onClick:t=>g.changeCategory(a,e.id)},{default:r((()=>[i(u(e.catName),1)])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["onScroll"]),s(v,{type:m.type,class:"more"},null,8,["type"])])),_:1}),m.catArticles?(l(),c($,{key:0,catArticles:m.catArticles},null,8,["catArticles"])):h("",!0)],64)}],["__scopeId","data-v-c141aefc"]]);export{F as default};
