(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,,,,,,function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return s}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return c}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return h}),n.d(e,"k",function(){return f}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function f(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return f(n,e,r);if(Array.isArray(e))return Object.assign(f(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(f(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,n){var r=n(18),i=n(12),s=n(63),a=n(65),o=n(42),u=function(t,e,n){var l,c,p,h=t&u.F,f=t&u.G,d=t&u.S,g=t&u.P,v=t&u.B,m=t&u.W,b=f?i:i[e]||(i[e]={}),_=b.prototype,x=f?r:d?r[e]:(r[e]||{}).prototype;for(l in f&&(n=e),n)(c=!h&&x&&void 0!==x[l])&&o(b,l)||(p=c?x[l]:n[l],b[l]=f&&"function"!=typeof x[l]?n[l]:v&&c?s(p,r):m&&x[l]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(p):g&&"function"==typeof p?s(Function.call,p):p,g&&((b.virtual||(b.virtual={}))[l]=p,t&u.R&&_&&!_[l]&&a(_,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},,function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";var r=n(39),i=n.n(r),s=n(13),a={props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?i()(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.f,isMailto:s.g,isTel:s.h}},o=n(0),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,l={components:{NavLink:u},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(n(72),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),p=n(73),h=n.n(p),f=n(78),d=n.n(f),g=n(48),v=n.n(g),m={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$localePath,r=e=>e.title&&e.title.toLowerCase().indexOf(t)>-1,i=[];for(let t=0;t<e.length&&!(i.length>=10);t++){const s=e[t];if(this.getPageLocalePath(s)===n&&this.isSearchable(s))if(r(s))i.push(s);else if(s.headers)for(let t=0;t<s.headers.length&&!(i.length>=10);t++){const e=s.headers[t];r(e)&&i.push(v()({},s,{path:s.path+"#"+e.slug,header:e}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=d()(e)?e:new Array(e)).filter(e=>t.path.match(e)).length>0},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},b=(n(87),Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),_=(n(88),Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),x={components:{NavLink:u,DropdownTransition:n(50).a},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},k=(n(90),{components:{NavLink:u,DropdownLink:Object(o.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&i()(t).length>1){const e=this.$page.path,n=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:i()(t).map(i=>{const s=t[i],a=r[i]&&r[i].label||s.lang;let o;return s.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>v()(Object(s.j)(t),{items:(t.items||[]).map(s.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:`https://github.com/${t}`},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}),y=(n(91),Object(o.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function $(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var C={components:{SidebarButton:_,NavLinks:y,SearchBox:b,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=h()($(this.$el,"paddingLeft"))+h()($(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},w=(n(92),Object(o.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports),S=n(37),O={name:"Sidebar",components:{SidebarLinks:n(49).default,NavLinks:y},props:["items"]},L=(n(96),Object(o.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports),j={components:{Home:c,Page:S.a,Sidebar:L,Navbar:w},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(s.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},E=(n(97),Object(o.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.a=E.exports},,function(t,e,n){"use strict";var r=n(13);function i(t,e,n){const r=[];!function t(e,n){for(let r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(let e=0;e<r.length;e++){const i=r[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return r[e+n]}}var s={props:["sidebarItems"],computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(r.k)(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,i(e,n,-1));var e,n},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(r.k)(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,i(e,n,1));var e,n},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:n="",docsBranch:r="master",docsRepo:i=t}=this.$site.themeConfig;return i&&e&&this.$page.relativePath?this.createEditLink(t,i,n,r,this.$page.relativePath):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,s){if(/bitbucket.org/.test(t)){return(r.i.test(e)?e:t).replace(r.a,"")+"/src"+`/${i}/`+(n?n.replace(r.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}return(r.i.test(e)?e:`https://github.com/${e}`).replace(r.a,"")+"/edit"+`/${i}/`+(n?n.replace(r.a,"")+"/":"")+s}}},a=(n(93),n(0)),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);e.a=o.exports},function(t,e,n){t.exports=n(51)},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(53),i=n(61);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(44),i=n(20);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(45);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){t.exports=n(82)},function(t,e,n){"use strict";n.r(e);var r=n(13),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(50).a},beforeCreate(){this.$options.components.SidebarLinks=n(49).default},methods:{isActive:r.e}},s=(n(94),n(0)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;function o(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,s,a=1){return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const l=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l),u(t,e.children,n,i,s,a+1)])}))}var l={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:s,$themeLocaleConfig:a},props:{item:l,sidebarDepth:c}}){const p=Object(r.e)(i,l.path),h="auto"===l.type?p||l.children.some(t=>Object(r.e)(i,l.basePath+"#"+t.slug)):p,f=o(t,l.path,l.title||l.path,h),d=e.frontmatter.sidebarDepth||c||a.sidebarDepth||s.sidebarDepth,g=null==d?1:d,v=a.displayAllHeaders||s.displayAllHeaders;if("auto"===l.type)return[f,u(t,l.children,l.basePath,i,g)];if((h||v)&&l.headers&&!r.d.test(l.path)){return[f,u(t,Object(r.c)(l.headers),l.path,i,g)]}return f}};n(95);var c={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if("group"===i.type&&i.children.some(e=>"page"===e.type&&Object(r.e)(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(r.e)(this.$route,t.regularPath)}}},p=Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=p.exports},function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(89),n(0)),s=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},function(t,e,n){n(52),t.exports=n(12).Object.keys},function(t,e,n){var r=n(40),i=n(41);n(62)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(42),i=n(43),s=n(54)(!1),a=n(57)("IE_PROTO");t.exports=function(t,e){var n,o=i(t),u=0,l=[];for(n in o)n!=a&&r(o,n)&&l.push(n);for(;e.length>u;)r(o,n=e[u++])&&(~s(l,n)||l.push(n));return l}},function(t,e,n){var r=n(43),i=n(55),s=n(56);t.exports=function(t){return function(e,n,a){var o,u=r(e),l=i(u.length),c=s(a,l);if(t&&n!=n){for(;l>c;)if((o=u[c++])!=o)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(46),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(46),i=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):s(t,e)}},function(t,e,n){var r=n(58)("keys"),i=n(60);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(12),i=n(18),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(59)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(14),i=n(12),s=n(15);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*s(function(){n(1)}),"Object",a)}},function(t,e,n){var r=n(64);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(66),i=n(71);t.exports=n(22)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(67),i=n(68),s=n(70),a=Object.defineProperty;e.f=n(22)?Object.defineProperty:function(t,e,n){if(r(t),e=s(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(21);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(22)&&!n(15)(function(){return 7!=Object.defineProperty(n(69)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(21),i=n(18).document,s=r(i)&&r(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var r=n(21);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(23);n.n(r).a},function(t,e,n){t.exports=n(74)},function(t,e,n){n(75),t.exports=n(12).parseInt},function(t,e,n){var r=n(14),i=n(76);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(18).parseInt,i=n(77).trim,s=n(47),a=/^[-+]?0[xX]/;t.exports=8!==r(s+"08")||22!==r(s+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},function(t,e,n){var r=n(14),i=n(20),s=n(15),a=n(47),o="["+a+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(t,e,n){var i={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=o?e(p):a[t];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},p=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},function(t,e,n){t.exports=n(79)},function(t,e,n){n(80),t.exports=n(12).Array.isArray},function(t,e,n){var r=n(14);r(r.S,"Array",{isArray:n(81)})},function(t,e,n){var r=n(45);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){n(83),t.exports=n(12).Object.assign},function(t,e,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(84)})},function(t,e,n){"use strict";var r=n(41),i=n(85),s=n(86),a=n(40),o=n(44),u=Object.assign;t.exports=!u||n(15)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,l=1,c=i.f,p=s.f;u>l;)for(var h,f=o(arguments[l++]),d=c?r(f).concat(c(f)):r(f),g=d.length,v=0;g>v;)p.call(f,h=d[v++])&&(n[h]=f[h]);return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(24);n.n(r).a},function(t,e,n){"use strict";var r=n(25);n.n(r).a},function(t,e,n){"use strict";var r=n(26);n.n(r).a},function(t,e,n){"use strict";var r=n(27);n.n(r).a},function(t,e,n){"use strict";var r=n(28);n.n(r).a},function(t,e,n){"use strict";var r=n(29);n.n(r).a},function(t,e,n){"use strict";var r=n(30);n.n(r).a},function(t,e,n){"use strict";var r=n(31);n.n(r).a},function(t,e,n){"use strict";var r=n(32);n.n(r).a},function(t,e,n){"use strict";var r=n(33);n.n(r).a},function(t,e,n){"use strict";var r=n(34);n.n(r).a}]]);