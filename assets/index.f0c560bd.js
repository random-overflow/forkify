var e=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(s,o,t)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,l=(e,l)=>{for(var n in l||(l={}))o.call(l,n)&&a(e,n,l[n]);if(s)for(var n of s(l))t.call(l,n)&&a(e,n,l[n]);return e};import{d as n,r,p as c,a as i,o as p,c as d,b as u,t as m,F as g,w as h,e as k,f,g as x,m as b,h as v,i as y,j as w,k as R,l as P,n as I,q as B,s as S,v as M,u as C,x as _,y as j,z as A,A as U,B as N,C as E,D as V,E as H,G as L,H as q,I as z,J as D,K as F,L as O,M as T,N as W}from"./vendor.f0c8d8ce.js";var G=n({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:r(0)})});const J=h();c("data-v-542eca60");const K=k('<p data-v-542eca60> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-542eca60>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-542eca60> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-542eca60>Volar</a> (if using <code data-v-542eca60>&lt;script setup&gt;</code>) </p><p data-v-542eca60>See <code data-v-542eca60>README.md</code> for more information.</p><p data-v-542eca60><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-542eca60> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-542eca60>Vue 3 Docs</a></p>',3),Q=u("p",null,[f(" Edit "),u("code",null,"components/HelloWorld.vue"),f(" to test hot module replacement. ")],-1);i();const X=J(((e,s,o,t,a,l)=>(p(),d(g,null,[u("h1",null,m(e.msg),1),K,u("button",{type:"button",onClick:s[1]||(s[1]=s=>e.count++)},"count is: "+m(e.count),1),Q],64))));G.render=X,G.__scopeId="data-v-542eca60";var Y={components:{RefreshIcon:x},props:{recipes:{type:Array,required:!0}},computed:l({},b({isSearching:e=>e.searchResults.isSearching,currentId:e=>{var s;return null==(s=e.recipe.recipe)?void 0:s.recipe_id}})),methods:l({},v({showRecipe:"recipe/getRecipe"}))};const Z={class:"py-4"},$={key:0},ee={class:"recipeimg--rounded relative h-14 w-14 mr-6 flex-shrink-0"},se={class:"flex flex-col"},oe={class:"text-froly"},te={class:"text-dorado"},ae={key:1,class:"flex justify-center items-center"};Y.render=function(e,s,o,t,a,l){const n=w("RefreshIcon");return p(),d("div",Z,[e.isSearching?(p(),d("div",ae,[u(n,{class:"h-10 w-10 mx-1 text-froly animate-spin"})])):(p(),d("ul",$,[(p(!0),d(g,null,y(o.recipes,(s=>(p(),d("li",{key:s.recipe_id},[u("a",{href:"#",class:["flex flex-row hover:bg-wood py-3 px-7",[e.currentId==s.recipe_id?"bg-wood":""]],onClick:o=>e.showRecipe({id:s.recipe_id,isUserRecipe:s.isUserRecipe})},[u("div",ee,[u("img",{src:s.image_url,alt:s.title,class:"h-14 w-14 rounded-full object-cover"},null,8,["src","alt"])]),u("div",se,[u("h4",oe,m(s.title),1),u("p",te,m(s.publisher),1)])],10,["onClick"])])))),128))]))])};var le={props:{absolute:{type:Boolean,required:!1,default:!0}},components:{ExclamationIcon:R,RecipesList:Y},computed:l(l({},P({isEmpty:"bookmarks/isEmpty"})),b({bookmarks:e=>e.bookmarks.recipes}))};const ne={key:0,class:"flex flex-row py-11 px-8"},re=u("p",null,"No bookmarks yet. Find a nice recipe and bookmark it ;)",-1);le.render=function(e,s,o,t,a,l){const n=w("ExclamationIcon"),r=w("recipes-list");return p(),d("div",{class:[{absolute:o.absolute},"w-full md:w-96 bg-ebb md:bg-white py-1 right-0 z-10"]},[e.isEmpty?(p(),d("div",ne,[u(n,{class:"h-7 w-7 mx-1 text-froly"}),re])):I("",!0),u(r,{recipes:e.bookmarks},null,8,["recipes"])],2)};const ce={components:{SearchIcon:B},data:()=>({query:""}),methods:l({},v({search:"searchResults/getRecipesResults"}))},ie=u("div",{class:"hidden lg:block"},"Search",-1);ce.render=function(e,s,o,t,a,l){const n=w("SearchIcon");return p(),d("form",{class:"\n      flex flex-row\n      items-center\n      bg-white\n      rounded-full\n      pl-4\n      xl:pl-12\n      focus-within:shadow-xl\n      m-4\n      sm:m-0\n    ",action:"#",onSubmit:s[3]||(s[3]=C((s=>e.search(e.query)),["prevent"]))},[S(u("input",{class:"flex-shrink w-full md:w-64 lg:w-72 xl:w-80 border-none bg-none",type:"text",placeholder:"Search over 1,000,000 recipes...","onUpdate:modelValue":s[1]||(s[1]=s=>e.query=s)},null,512),[[M,e.query]]),u("button",{class:"font-semibold px-4 lg:px-7 ml-auto",onClick:s[2]||(s[2]=s=>e.search(e.query))},[u(n,{class:"h-6 w-6 mx-1 text-white"}),ie])],32)};var pe={components:{PencilAltIcon:_,BookmarkIcon:j,MenuIcon:A,Bookmarks:le,SearchForm:ce},computed:l({},b({showBookmarks:e=>e.bookmarks.showBookmarks})),methods:l({},v({toggleBookmarks:"bookmarks/toggleBookmarks",toggleModal:"userRecipes/toggleModal"}))};const de={class:"\n      absolute\n      w-full\n      bg-wood\n      py-1\n      top-24\n      right-0\n      z-10\n      border-b-8 border-froly\n      shadow-2xl\n    "},ue={class:"flex flex-row justify-center items-center m-auto"},me=u("span",null,"Add Recipe",-1),ge={class:"flex flex-row justify-center items-center m-auto"},he=u("span",null,"Bookmark",-1);pe.render=function(e,s,o,t,a,l){const n=w("SearchForm"),r=w("PencilAltIcon"),c=w("BookmarkIcon"),i=w("Bookmarks");return p(),d("div",de,[u(n,{class:"sm:hidden"}),u("button",{class:"\n        w-full\n        bg-none\n        text-dorado\n        font-bold\n        text-sm\n        rounded-none\n        h-full\n        hover:bg-ebb\n        hover:scale-100\n        py-6\n      ",onClick:s[1]||(s[1]=s=>e.toggleModal())},[u("div",ue,[u(r,{class:"h-7 w-7 mx-1 text-froly"}),me])]),u("button",{class:"\n        w-full\n        bg-none\n        text-dorado\n        font-bold\n        text-sm\n        rounded-none\n        h-full\n        hover:bg-ebb\n        hover:scale-100\n        py-6\n      ",onClick:s[2]||(s[2]=s=>e.toggleBookmarks())},[u("div",ge,[u(c,{class:"h-7 w-7 mx-1 text-froly"}),he])]),S(u(i,{class:"md:hidden"},null,512),[[U,e.showBookmarks]])])};var ke={components:{PencilAltIcon:_,BookmarkIcon:j,MenuIcon:A,Bookmarks:le,NavbarCollapse:pe},data:()=>({collapseNav:!0}),computed:l({},b({showBookmarks:e=>e.bookmarks.showBookmarks})),methods:l({},v({toggleBookmarks:"bookmarks/toggleBookmarks",toggleModal:"userRecipes/toggleModal"}))};const fe={class:"hidden md:block h-full"},xe={class:"flex h-full"},be={class:"flex flex-col lg:flex-row justify-center items-center"},ve=u("span",null,"Add Recipe",-1),ye={class:"\n            bg-none\n            text-dorado\n            font-bold\n            text-sm\n            rounded-none\n            h-full\n            hover:bg-ebb\n            hover:scale-100\n            md:px-4\n            lg:px-7\n          "},we={class:"flex flex-col lg:flex-row justify-center items-center"},Re=u("span",null,"Bookmark",-1);ke.render=function(e,s,o,t,a,l){const n=w("PencilAltIcon"),r=w("BookmarkIcon"),c=w("Bookmarks"),i=w("MenuIcon"),m=w("NavbarCollapse");return p(),d(g,null,[u("nav",fe,[u("ul",xe,[u("li",null,[u("button",{class:"\n            bg-none\n            text-dorado\n            font-bold\n            text-sm\n            rounded-none\n            h-full\n            hover:bg-ebb\n            hover:scale-100\n            md:px-4\n            lg:px-7\n          ",onClick:s[1]||(s[1]=s=>e.toggleModal())},[u("div",be,[u(n,{class:"h-7 w-7 mx-1 text-froly"}),ve])])]),u("li",{class:"relative",onMouseover:s[2]||(s[2]=s=>e.toggleBookmarks(!0)),onMouseleave:s[3]||(s[3]=s=>e.toggleBookmarks(!1))},[u("button",ye,[u("div",we,[u(r,{class:"h-7 w-7 mx-1 text-froly"}),Re])]),S(u(c,null,null,512),[[U,e.showBookmarks]])],32)])]),u("button",{class:"md:hidden relative bg-none text-dorado",onClick:s[4]||(s[4]=s=>e.collapseNav=!e.collapseNav)},[u(i,{class:"h-7 w-7"})]),S(u(m,null,null,512),[[U,!e.collapseNav]])],64)};var Pe={name:"Header",components:{Navbar:ke,SearchForm:ce}};const Ie={class:"\n      flex flex-flex-row\n      justify-between\n      items-center\n      bg-wood\n      h-24\n      rounded-lg\n    "},Be=u("img",{class:"h-14 sm:ml-5 m-auto",src:"/forkify/assets/logo.4482c1eb.png",alt:"Forkify Logo"},null,-1);Pe.render=function(e,s,o,t,a,l){const n=w("SearchForm"),r=w("Navbar");return p(),d("div",Ie,[Be,u(n,{class:"hidden sm:flex"}),u(r)])};var Se={components:{RecipesList:Y,ArrowRightIcon:N,ArrowLeftIcon:E},computed:l(l({},P({results:"searchResults/results",existsNextPage:"searchResults/existNextPage",existsPrevPage:"searchResults/existPrevPage"})),b({page:e=>e.searchResults.page})),methods:l({},v({prevPage:"searchResults/prevPage",nextPage:"searchResults/nextPage"}))};const Me={class:"flex flex-col"},Ce={class:"flex flex-row justify-evenly px-6 py-8"};Se.render=function(e,s,o,t,a,l){const n=w("RecipesList"),r=w("ArrowLeftIcon"),c=w("ArrowRightIcon");return p(),d("div",Me,[u(n,{recipes:e.results},null,8,["recipes"]),u("div",Ce,[e.existsPrevPage?(p(),d("button",{key:0,onClick:s[1]||(s[1]=s=>e.prevPage()),class:"\n          bg-none bg-wood\n          py-1\n          px-3\n          capitalize\n          text-froly\n          mr-auto\n          font-bold\n        "},[u(r,{class:"mr-1 h-4 w-4"}),f(" Page "+m(e.page-1),1)])):I("",!0),e.existsNextPage?(p(),d("button",{key:1,onClick:s[2]||(s[2]=s=>e.nextPage()),class:"\n          bg-none bg-wood\n          py-1\n          px-3\n          capitalize\n          text-froly\n          ml-auto\n          font-bold\n        "},[f(" Page "+m(e.page+1)+" ",1),u(c,{class:"ml-1 h-4 w-4"})])):I("",!0)])])};var _e=n({components:{PencilAltIcon:_,BookmarkIcon:j,BookmarkSolidIcon:V,EmojiHappyIcon:H,RefreshIcon:x,ClockIcon:L,UsersIcon:q,PlusCircleIcon:z,MinusCircleIcon:D,CheckIcon:F,ArrowRightIcon:N},computed:l(l({},P({recipe:"recipe/recipe",isBookmarked:"bookmarks/isBookmarked"})),b({isSearching:e=>e.recipe.isSearching})),methods:l({},v({addBookmark:"bookmarks/addBookmark",removeBookmark:"bookmarks/removeBookmark"}))});const je={class:"bg-wood"},Ae={key:0,class:"flex justify-center items-center"},Ue={key:1},Ne={class:"recipeimg relative h-96"},Ee={class:"\n            py-3\n            w-full\n            md:w-1/2\n            transform\n            -skew-y-6\n            -translate-x-1/2\n            translate-y-1/4\n            text-center\n            absolute\n            bottom-0\n            left-1/2\n            text-4xl\n            uppercase\n            font-bold\n            bg-gradient-to-br\n            from-corn\n            to-froly\n            text-white\n          "},Ve={class:"py-3 px-5 decoration-clone"},He={class:"flex flex-col gap-y-4 sm:flex-row pt-14 pb-8 px-4 sm:px-14"},Le={class:"flex flex-row items-center pr-11"},qe={class:"font-bold mr-1"},ze=u("span",{class:"uppercase"}," Minutes",-1),De={class:"flex flex-row items-center"},Fe=u("span",{class:"font-bold mr-1"},"N",-1),Oe=u("span",{class:"uppercase"}," Servings",-1),Te={class:"flex flex-row ml-4"},We={class:"flex flex-col justify-center items-center bg-ebb px-14 py-10"},Ge=u("h1",{class:"uppercase text-center text-froly font-bold text-xl mb-8"}," Recipe ingredients ",-1),Je={class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},Ke={class:"w-7"},Qe={class:"flex flex-col justify-center items-center px-14 py-10"},Xe=u("h1",{class:"uppercase text-center text-froly font-bold text-xl mb-8"}," How to cook it ",-1),Ye=u("p",null," This recipe was carefully designed and tested by Closet Cooking. Please check out directions at their website. ",-1),Ze={class:"my-4"},$e=f(" Directions "),es={key:2,class:"flex flex-row mx-auto py-12 max-w-sm font-semibold text-lg"},ss=u("p",null,"Start by searching for a recipe or an ingredient. Have fun!",-1);_e.render=function(e,s,o,t,a,l){const n=w("RefreshIcon"),r=w("ClockIcon"),c=w("UsersIcon"),i=w("MinusCircleIcon"),h=w("PlusCircleIcon"),k=w("BookmarkSolidIcon"),f=w("BookmarkIcon"),x=w("CheckIcon"),b=w("ArrowRightIcon"),v=w("EmojiHappyIcon");return p(),d("div",je,[e.isSearching?(p(),d("div",Ae,[u(n,{class:"h-10 w-10 mx-1 text-froly animate-spin"})])):e.recipe?(p(),d("div",Ue,[u("div",Ne,[u("img",{src:e.recipe.image_url,alt:e.recipe.title,class:"w-full h-full object-cover"},null,8,["src","alt"]),u("h1",Ee,[u("span",Ve,m(e.recipe.title),1)])]),u("div",He,[u("div",Le,[u(r,{class:"h-7 w-7 mx-2 text-froly"}),u("span",qe,m(null!=e.recipe.prep_time?e.recipe.prep_time:"N"),1),ze]),u("div",De,[u(c,{class:"h-7 w-7 mx-2 text-froly"}),Fe,Oe,u("div",Te,[u(i,{class:"h-7 w-7 text-froly"}),u(h,{class:"h-7 w-7 text-froly"})])]),e.isBookmarked?(p(),d("button",{key:0,onClick:s[1]||(s[1]=s=>e.removeBookmark()),class:"p-2 rounded-full ml-auto"},[u(k,{class:"h-7 w-7"})])):(p(),d("button",{key:1,onClick:s[2]||(s[2]=s=>e.addBookmark()),class:"p-2 rounded-full ml-auto"},[u(f,{class:"h-7 w-7"})]))]),u("div",We,[Ge,u("ul",Je,[(p(!0),d(g,null,y(e.recipe.ingredients,(e=>(p(),d("li",{key:e,class:"flex flex-row"},[u("div",Ke,[u(x,{class:"h-7 w-7 text-froly"})]),u("span",null,m(e),1)])))),128))])]),u("div",Qe,[Xe,Ye,u("button",Ze,[$e,u(b,{class:"ml-1 h-4 w-4"})])])])):(p(),d("div",es,[u(v,{class:"h-10 w-10 mx-2 text-froly"}),ss]))])};var os={data:()=>({userRecipe:{ingredients:[],prep_time:0}}),methods:l({},v({addRecipe:"userRecipes/addRecipe",toggleModal:"userRecipes/toggleModal"}))};const ts={class:"\n      fixed\n      top-1/2\n      left-1/2\n      min-w-max\n      bg-white\n      transform\n      -translate-x-1/2 -translate-y-1/2\n      p-16\n      z-20\n    "},as={class:"grid grid-cols-6 gap-y-3 items-center"},ls=u("h3",{class:"col-span-6 uppercase text-xl font-bold"},"Recipe Data",-1),ns=u("label",{class:"col-span-2"},"Title",-1),rs=u("label",{class:"col-span-2"},"URL",-1),cs=u("label",{class:"col-span-2"},"Image URL",-1),is=u("label",{class:"col-span-2"},"Publisher",-1),ps=u("label",{class:"col-span-2"},"Prep. Time",-1),ds={class:"grid grid-cols-6 gap-y-3 items-center"},us=u("h3",{class:"col-span-6 uppercase text-xl font-bold"},"Ingredient",-1),ms={class:"col-span-2"},gs=u("button",{class:"col-span-2 justify-self-center",type:"submit"}," Add Recipe ",-1);os.render=function(e,s,o,t,a,l){return p(),d(g,null,[u("div",{class:"fixed top-0 left-0 h-screen w-screen bg-black opacity-60 z-20",onClick:s[1]||(s[1]=s=>e.toggleModal())}),u("div",ts,[u("button",{class:"absolute top-2 right-2 bg-none text-dorado font-extrabold",onClick:s[2]||(s[2]=s=>e.toggleModal())}," x "),u("form",{class:"grid grid-cols-2 gap-x-9 gap-y-14",action:"#",onSubmit:s[8]||(s[8]=C((s=>e.addRecipe(e.userRecipe)),["prevent"]))},[u("div",as,[ls,ns,S(u("input",{class:"col-span-4",type:"text","onUpdate:modelValue":s[3]||(s[3]=s=>e.userRecipe.title=s)},null,512),[[M,e.userRecipe.title]]),rs,S(u("input",{class:"col-span-4",type:"text","onUpdate:modelValue":s[4]||(s[4]=s=>e.userRecipe.publisher_url=s)},null,512),[[M,e.userRecipe.publisher_url]]),cs,S(u("input",{class:"col-span-4",type:"text","onUpdate:modelValue":s[5]||(s[5]=s=>e.userRecipe.image_url=s)},null,512),[[M,e.userRecipe.image_url]]),is,S(u("input",{class:"col-span-4",type:"text","onUpdate:modelValue":s[6]||(s[6]=s=>e.userRecipe.publisher=s)},null,512),[[M,e.userRecipe.publisher]]),ps,S(u("input",{class:"col-span-4",type:"number","onUpdate:modelValue":s[7]||(s[7]=s=>e.userRecipe.prep_time=s)},null,512),[[M,e.userRecipe.prep_time,void 0,{number:!0}]])]),u("div",ds,[us,(p(),d(g,null,y(5,(s=>(p(),d(g,{key:s},[u("label",ms,"Ingredient "+m(s),1),S(u("input",{class:"col-span-4",type:"text","onUpdate:modelValue":o=>e.userRecipe.ingredients[s]=o},null,8,["onUpdate:modelValue"]),[[M,e.userRecipe.ingredients[s]]])],64)))),64))]),gs],32)])],64)};var hs=n({name:"App",components:{HelloWorld:G,Header:Pe,Results:Se,Recipe:_e,AddRecipe:os},computed:l({},b({showModal:e=>e.userRecipes.showModal}))});const ks={class:"\n      container\n      m-0\n      lg:mx-auto\n      xl:my-16\n      grid grid-cols-3 grid-rows-layout\n      bg-white\n      min-h-0\n      max-w-7xl\n      rounded-lg\n      shadow-xl\n    "};hs.render=function(e,s,o,t,a,l){const n=w("Header"),r=w("Results"),c=w("Recipe"),i=w("AddRecipe");return p(),d(g,null,[u("div",ks,[u(n,{class:"col-span-3"}),u(r,{class:"col-span-3 md:col-span-1"}),u(c,{class:"col-span-3 md:col-span-2"})]),e.showModal?(p(),d(i,{key:0})):I("",!0)],64)};const fs="https://forkify-api.herokuapp.com/api";var xs={async getRecipeResults(e){let s=[];return await O.get("/search",{baseURL:fs,params:{q:e}}).then((e=>{s=e.data.recipes})).catch((e=>{console.log(e)})),s},async getRecipe(e){let s=[];return await O.get("/get",{baseURL:fs,params:{rId:e}}).then((e=>{s=e.data.recipe})).catch((e=>{console.log(e)})),s}};const bs=T({modules:{userRecipes:{namespaced:!0,state:()=>({recipes:[],showModal:!1}),getters:{recipe:e=>e.recipes},actions:{toggleModal({commit:e}){e("toggleModal")},addRecipe({commit:e},s){e("addRecipe",Object.assign({},s))}},mutations:{toggleModal(e){e.showModal=!e.showModal},addRecipe(e,s){s.isUserRecipe=!0,s.recipe_id=e.recipes.length.toString(),s.ingredients=s.ingredients.filter((e=>""!=e)),e.recipes.push(s)}}},searchResults:{namespaced:!0,state:()=>({results:[],isSearching:!1,page:1,maxResPerPage:10}),getters:{results:(e,s,o)=>e.results.slice(e.page*e.maxResPerPage-e.maxResPerPage,e.page*e.maxResPerPage),existNextPage:e=>e.page*e.maxResPerPage<e.results.length,existPrevPage:e=>e.page*e.maxResPerPage>e.maxResPerPage},actions:{async getRecipesResults({commit:e,rootState:s},o){e("setSearching",!0);let t=await xs.getRecipeResults(o);t=[...s.userRecipes.recipes.filter((e=>{var s;return null==(s=e.title)?void 0:s.includes(o)})),...t],e("setResults",t),e("setSearching",!1)},nextPage({commit:e}){e("nextPage")},prevPage({commit:e}){e("prevPage")}},mutations:{setResults(e,s){e.results=s},setSearching(e,s){e.isSearching=s},nextPage(e){e.page++},prevPage(e){e.page--}}},recipe:{namespaced:!0,state:()=>({recipe:null,isSearching:!1}),getters:{recipe:e=>e.recipe},actions:{async getRecipe({commit:e,rootState:s},{id:o,isUserRecipe:t}){let a;e("setSearching",!0),a=t?s.userRecipes.recipes.find((e=>e.recipe_id==o)):await xs.getRecipe(o),e("setRecipe",a),e("setSearching",!1)}},mutations:{setRecipe(e,s){e.recipe=s},setSearching(e,s){e.isSearching=s}}},bookmarks:{namespaced:!0,state:()=>({showBookmarks:!1,recipes:[]}),getters:{isBookmarked:(e,s,o)=>e.recipes.some((e=>e.recipe_id==o.recipe.recipe.recipe_id)),isEmpty:e=>0==e.recipes.length},actions:{toggleBookmarks({commit:e},s){e("setShowBookmarks",s)},addBookmark({commit:e,rootState:s}){e("addBookmark",s.recipe.recipe)},removeBookmark({commit:e,rootState:s}){e("removeBookmark",s.recipe.recipe)}},mutations:{setShowBookmarks(e,s){e.showBookmarks=null!=s?s:!e.showBookmarks},addBookmark(e,s){e.recipes.push(s)},removeBookmark(e,s){e.recipes=e.recipes.filter((e=>e.recipe_id!=s.recipe_id))}}}}});W(hs).use(bs).mount("#app");
