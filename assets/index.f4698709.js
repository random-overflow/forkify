var e=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(s,t,n)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,l=(e,l)=>{for(var c in l||(l={}))t.call(l,c)&&a(e,c,l[c]);if(s)for(var c of s(l))n.call(l,c)&&a(e,c,l[c]);return e};import{d as c,r,p as o,a as i,o as u,c as p,b as d,t as h,F as m,w as f,e as g,f as x,g as b,h as v,i as y,j as w,m as k,k as R,v as I,l as S,n as j,q as C,s as _,u as H,x as A,y as P,z as q,A as E,B,C as D,D as O,E as V,G as N,H as U}from"./vendor.14775648.js";var M=c({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:r(0)})});const L=f();o("data-v-542eca60");const W=g('<p data-v-542eca60> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-542eca60>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-542eca60> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-542eca60>Volar</a> (if using <code data-v-542eca60>&lt;script setup&gt;</code>) </p><p data-v-542eca60>See <code data-v-542eca60>README.md</code> for more information.</p><p data-v-542eca60><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-542eca60> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-542eca60>Vue 3 Docs</a></p>',3),F=d("p",null,[x(" Edit "),d("code",null,"components/HelloWorld.vue"),x(" to test hot module replacement. ")],-1);i();const z=L(((e,s,t,n,a,l)=>(u(),p(m,null,[d("h1",null,h(e.msg),1),W,d("button",{type:"button",onClick:s[1]||(s[1]=s=>e.count++)},"count is: "+h(e.count),1),F],64))));M.render=z,M.__scopeId="data-v-542eca60";var G=c({components:{PencilAltIcon:b,BookmarkIcon:v}});const T={class:"h-full"},J={class:"flex h-full"},K={class:"\n            bg-none\n            text-dorado\n            font-bold\n            text-sm\n            rounded-none\n            h-full\n            hover:bg-ebb\n            hover:scale-100\n          "},Q=d("span",null,"Add Recipe",-1),X={class:"\n            bg-none\n            text-dorado\n            font-bold\n            text-sm\n            rounded-none\n            h-full\n            hover:bg-ebb\n            hover:scale-100\n          "},Y=d("span",null,"Bookmark",-1);G.render=function(e,s,t,n,a,l){const c=y("PencilAltIcon"),r=y("BookmarkIcon");return u(),p("nav",T,[d("ul",J,[d("li",null,[d("button",K,[d(c,{class:"h-7 w-7 mx-1 text-froly"}),Q])]),d("li",null,[d("button",X,[d(r,{class:"h-7 w-7 mx-1 text-froly"}),Y])])])])};var Z={name:"Header",components:{Navbar:G,SearchIcon:w},data:()=>({query:""}),methods:l({},k({search:"searchResults/getRecipesResults"})),setup:()=>{}};const $={class:"\n      flex flex-flex-row\n      justify-between\n      items-center\n      bg-wood\n      h-24\n      rounded-lg\n    "},ee=d("img",{class:"h-14 ml-5",src:"/forkify/assets/logo.4482c1eb.png",alt:"Forkify Logo"},null,-1),se=x(" Search ");Z.render=function(e,s,t,n,a,l){const c=y("SearchIcon"),r=y("Navbar");return u(),p("div",$,[ee,d("form",{class:"\n        flex\n        items-center\n        bg-white\n        rounded-full\n        pl-12\n        focus-within:shadow-xl\n      ",action:"#",onSubmit:s[3]||(s[3]=S((s=>e.search(e.query)),["prevent"]))},[R(d("input",{class:"w-80 border-none bg-none",type:"text",placeholder:"Search over 1,000,000 recipes...","onUpdate:modelValue":s[1]||(s[1]=s=>e.query=s)},null,512),[[I,e.query]]),d("button",{class:"font-semibold",onClick:s[2]||(s[2]=s=>e.search(e.query))},[d(c,{class:"h-6 w-6 mx-1 text-white"}),se])],32),d(r)])};const te={components:{RefreshIcon:j},computed:l(l({},C({results:"searchResults/results"})),_({isSearching:e=>e.searchResults.isSearching,currentId:e=>{var s;return null==(s=e.recipe.recipe)?void 0:s.recipe_id}})),methods:l({},k({showRecipe:"recipe/getRecipe"}))},ne={class:"py-4"},ae={key:0},le={class:"flex flex-col"},ce={class:"text-froly"},re={class:"text-dorado"},oe={key:1,class:"flex justify-center items-center"};te.render=function(e,s,t,n,a,l){const c=y("RefreshIcon");return u(),p("div",ne,[e.isSearching?(u(),p("div",oe,[d(c,{class:"h-10 w-10 mx-1 text-froly animate-spin"})])):(u(),p("ul",ae,[(u(!0),p(m,null,H(e.results,(s=>(u(),p("li",{key:s.id},[d("a",{href:"#",class:["flex flex-row hover:bg-wood py-3 px-7",[e.currentId==s.id?"bg-wood":""]],onClick:t=>e.showRecipe(s.id)},[d("img",{src:s.image_url,alt:e.results.title,class:"h-14 w-14 mr-6 rounded-full"},null,8,["src","alt"]),d("div",le,[d("h4",ce,h(s.title),1),d("p",re,h(s.publisher),1)])],10,["onClick"])])))),128))]))])};var ie=c({components:{PencilAltIcon:b,BookmarkIcon:v,EmojiHappyIcon:A,RefreshIcon:j,ClockIcon:P,UsersIcon:q,PlusCircleIcon:E,MinusCircleIcon:B,CheckIcon:D,ArrowRightIcon:O},computed:l(l({},C({recipe:"recipe/recipe"})),_({isSearching:e=>e.recipe.isSearching}))});const ue={class:"bg-wood"},pe={key:0,class:"flex justify-center items-center"},de={key:1},he={class:"relative h-96"},me={class:"\n            py-3\n            w-1/2\n            transform\n            -skew-y-6\n            -translate-x-1/2\n            translate-y-1/4\n            text-center\n            absolute\n            bottom-0\n            left-1/2\n            text-4xl\n            uppercase\n            font-bold\n            bg-gradient-to-br\n            from-corn\n            to-froly\n            text-white\n          "},fe={class:"py-3 px-5 decoration-clone"},ge={class:"flex flex-row pt-14 pb-8 px-14"},xe={class:"flex flex-row items-center pr-11"},be=d("span",{class:"font-bold mr-1"},"N",-1),ve=d("span",{class:"uppercase"}," Minutes",-1),ye={class:"flex flex-row items-center"},we=d("span",{class:"font-bold mr-1"},"N",-1),ke=d("span",{class:"uppercase"}," Servings",-1),Re={class:"flex flex-row ml-4"},Ie={class:"p-2 rounded-full ml-auto"},Se={class:"flex flex-col justify-center items-center bg-ebb px-14 py-10"},je=d("h1",{class:"uppercase text-center text-froly font-bold text-xl mb-8"}," Recipe ingredients ",-1),Ce={class:"grid grid-cols-2 gap-6"},_e={class:"w-7"},He={class:"flex flex-col justify-center items-center px-14 py-10"},Ae=d("h1",{class:"uppercase text-center text-froly font-bold text-xl mb-8"}," How to cook it ",-1),Pe=d("p",null," This recipe was carefully designed and tested by Closet Cooking. Please check out directions at their website. ",-1),qe=x("Directions "),Ee={key:2,class:"flex flex-row mx-auto py-12 max-w-sm font-semibold text-lg"},Be=d("p",null,"Start by searching for a recipe or an ingredient. Have fun!",-1);ie.render=function(e,s,t,n,a,l){const c=y("RefreshIcon"),r=y("ClockIcon"),o=y("UsersIcon"),i=y("MinusCircleIcon"),f=y("PlusCircleIcon"),g=y("BookmarkIcon"),x=y("CheckIcon"),b=y("ArrowRightIcon"),v=y("EmojiHappyIcon");return u(),p("div",ue,[e.isSearching?(u(),p("div",pe,[d(c,{class:"h-10 w-10 mx-1 text-froly animate-spin"})])):e.recipe?(u(),p("div",de,[d("div",he,[d("img",{src:e.recipe.image_url,alt:e.recipe.title,class:"w-full h-full object-cover"},null,8,["src","alt"]),d("h1",me,[d("span",fe,h(e.recipe.title),1)])]),d("div",ge,[d("div",xe,[d(r,{class:"h-7 w-7 mx-2 text-froly"}),be,ve]),d("div",ye,[d(o,{class:"h-7 w-7 mx-2 text-froly"}),we,ke,d("div",Re,[d(i,{class:"h-7 w-7 text-froly"}),d(f,{class:"h-7 w-7 text-froly"})])]),d("button",Ie,[d(g,{class:"h-7 w-7"})])]),d("div",Se,[je,d("ul",Ce,[(u(!0),p(m,null,H(e.recipe.ingredients,(e=>(u(),p("li",{key:e,class:"flex flex-row"},[d("div",_e,[d(x,{class:"h-7 w-7 text-froly"})]),d("span",null,h(e),1)])))),128))])]),d("div",He,[Ae,Pe,d("button",null,[qe,d(b,{class:"ml-1 h-4 w-4"})])])])):(u(),p("div",Ee,[d(v,{class:"h-10 w-10 mx-2 text-froly"}),Be]))])};var De=c({name:"App",components:{HelloWorld:M,Header:Z,Results:te,Recipe:ie}});const Oe={class:"\n      container\n      mx-auto\n      my-16\n      grid grid-cols-3 grid-rows-layout\n      bg-white\n      min-h-screen\n      max-w-7xl\n      rounded-lg\n      shadow-xl\n    "};De.render=function(e,s,t,n,a,l){const c=y("Header"),r=y("Results"),o=y("Recipe");return u(),p("div",Oe,[d(c,{class:"col-span-3"}),d(r,{class:"col-span-1"}),d(o,{class:"col-span-2"})])};const Ve="https://forkify-api.herokuapp.com/api";var Ne={async getRecipeResults(e){let s=null;return await V.get("/search",{baseURL:Ve,params:{q:e}}).then((e=>{s=e.data.recipes})).catch((e=>{console.log(e)})),s},async getRecipe(e){let s=null;return await V.get("/get",{baseURL:Ve,params:{rId:e}}).then((e=>{s=e.data.recipe})).catch((e=>{console.log(e)})),s}};const Ue=N({modules:{searchResults:{namespaced:!0,state:()=>({results:[],isSearching:!1}),getters:{results:e=>e.results.map((e=>({image_url:e.image_url,id:e.recipe_id,title:e.title,publisher:e.publisher})))},actions:{async getRecipesResults({commit:e},s){e("setSearching",!0);e("setResults",await Ne.getRecipeResults(s)),e("setSearching",!1)}},mutations:{setResults(e,s){e.results=s},setSearching(e,s){e.isSearching=s}}},recipe:{namespaced:!0,state:()=>({recipe:null,isSearching:!1}),getters:{recipe:e=>e.recipe},actions:{async getRecipe({commit:e},s){e("setSearching",!0);e("setRecipe",await Ne.getRecipe(s)),e("setSearching",!1)}},mutations:{setRecipe(e,s){e.recipe=s},setSearching(e,s){e.isSearching=s}}}}});U(De).use(Ue).mount("#app");
