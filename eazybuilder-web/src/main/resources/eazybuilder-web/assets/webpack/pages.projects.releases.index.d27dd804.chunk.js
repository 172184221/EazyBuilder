(this.webpackJsonp=this.webpackJsonp||[]).push([[380],{"/wEr":function(e,t,n){"use strict";var r=n("wP8z"),i=n("s1D3");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={functional:!0,name:"GlSortingItem",props:{active:{type:Boolean,default:!1,required:!1},href:{type:String,default:null,required:!1}},render:function(e,t){var n=t.children,a=t.data,o=t.props,l=void 0===o?{}:o,c="gl-sorting-item js-active-icon gl-flex-shrink-0 gl-mr-2 ".concat(l.active?"":"inactive gl-visibility-hidden"),u=e(i.a,{class:c,attrs:{name:"mobile-issue-close",size:16,ariaLabel:"Selected"}});return e(r.a,s(s({},a),{},{attrs:s({},l)}),[u,n])}};t.a=l},210:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("BizI")},"7a32":function(e,t,n){"use strict";var r=n("yi8e");t.a=function(e){let{modules:t,featureFlags:n}=e;return new r.b.Store({modules:t,state:{featureFlags:n}})}},BizI:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchReleases",(function(){return G})),n.d(r,"receiveReleasesError",(function(){return $})),n.d(r,"setSorting",(function(){return F}));var i=n("jB52"),a=n("yi8e"),o=n("dsLq"),s=n("MV2A"),l=n("4lAS"),c=n("NmEs"),u=n("/lV4"),d=n("V594"),f=n("/127");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={name:"ReleasesPaginationGraphql",components:{GlKeysetPagination:n("lI2g").a},computed:g(g({},Object(a.f)("index",["pageInfo"])),{},{showPagination(){return this.pageInfo.hasPreviousPage||this.pageInfo.hasNextPage}}),methods:g(g({},Object(a.c)("index",["fetchReleases"])),{},{onPrev(e){Object(c.u)(Object(c.e)("?before=".concat(e))),this.fetchReleases({before:e})},onNext(e){Object(c.u)(Object(c.e)("?after=".concat(e))),this.fetchReleases({after:e})}})},h=n("tBpV"),b=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-display-flex gl-justify-content-center"},[e.showPagination?n("gl-keyset-pagination",e._b({on:{prev:function(t){return e.onPrev(t)},next:function(t){return e.onNext(t)}}},"gl-keyset-pagination",e.pageInfo,!1)):e._e()],1)}),[],!1,null,null,null).exports,y=n("hZHc"),O=n("/wEr"),S=n("lBwk");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"ReleasesSort",components:{GlSorting:y.a,GlSortingItem:O.a},computed:j(j({},Object(a.f)("index",{orderBy:function(e){return e.sorting.orderBy},sort:function(e){return e.sorting.sort}})),{},{sortOptions:()=>S.i,sortText(){var e=this;return this.sortOptions.find((function(t){return t.orderBy===e.orderBy})).label},isSortAscending(){return this.sort===S.a}}),methods:j(j({},Object(a.c)("index",["setSorting"])),{},{onDirectionChange(){const e=this.isSortAscending?S.e:S.a;this.setSorting({sort:e}),this.$emit("sort:changed")},onSortItemClick(e){this.setSorting({orderBy:e}),this.$emit("sort:changed")},isActiveSortItem(e){return this.orderBy===e}})},E=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gl-sorting",{attrs:{text:e.sortText,"is-ascending":e.isSortAscending,"data-testid":"releases-sort"},on:{sortDirectionChange:e.onDirectionChange}},e._l(e.sortOptions,(function(t){return n("gl-sorting-item",{key:t.orderBy,attrs:{active:e.isActiveSortItem(t.orderBy)},on:{click:function(n){return e.onSortItemClick(t.orderBy)}}},[e._v("\n    "+e._s(t.label)+"\n  ")])})),1)}),[],!1,null,null,null).exports;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x={name:"ReleasesApp",components:{GlEmptyState:o.a,GlLink:s.a,GlButton:l.a,ReleaseBlock:d.a,ReleasesPagination:b,ReleaseSkeletonLoader:f.a,ReleasesSort:E},computed:_(_({},Object(a.f)("index",["documentationPath","illustrationPath","newReleasePath","isLoading","releases","hasError"])),{},{shouldRenderEmptyState(){return!this.releases.length&&!this.hasError&&!this.isLoading},shouldRenderSuccessState(){return this.releases.length&&!this.isLoading&&!this.hasError},emptyStateText:()=>Object(u.a)("Releases are based on Git tags and mark specific points in a project's development history. They can contain information about the type of changes and can also deliver binaries, like compiled versions of your software.")}),created(){this.fetchReleases(),window.addEventListener("popstate",this.fetchReleases)},methods:_(_({},Object(a.c)("index",{fetchReleasesStoreAction:"fetchReleases"})),{},{fetchReleases(){this.fetchReleasesStoreAction({before:Object(c.p)("before"),after:Object(c.p)("after")})}})},D=(n("PIQQ"),Object(h.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column mt-2"},[n("div",{staticClass:"gl-align-self-end gl-mb-3"},[n("releases-sort",{staticClass:"gl-mr-2",on:{"sort:changed":e.fetchReleases}}),e._v(" "),e.newReleasePath?n("gl-button",{attrs:{href:e.newReleasePath,"aria-describedby":e.shouldRenderEmptyState&&"releases-description",category:"primary",variant:"success","data-testid":"new-release-button"}},[e._v("\n      "+e._s(e.__("New release"))+"\n    ")]):e._e()],1),e._v(" "),e.isLoading?n("release-skeleton-loader"):e.shouldRenderEmptyState?n("gl-empty-state",{attrs:{"data-testid":"empty-state",title:e.__("Getting started with releases"),"svg-path":e.illustrationPath},scopedSlots:e._u([{key:"description",fn:function(){return[n("span",{attrs:{id:"releases-description"}},[e._v("\n        "+e._s(e.emptyStateText)+"\n        "),n("gl-link",{attrs:{href:e.documentationPath,"aria-label":e.__("Releases documentation"),target:"_blank"}},[e._v("\n          "+e._s(e.__("More information"))+"\n        ")])],1)]},proxy:!0}])}):e.shouldRenderSuccessState?n("div",{attrs:{"data-testid":"success-state"}},e._l(e.releases,(function(t,r){return n("release-block",{key:r,class:{"linked-card":e.releases.length>1&&r!==e.releases.length-1},attrs:{release:t}})})),1):e._e(),e._v(" "),e.isLoading?e._e():n("releases-pagination")],1)}),[],!1,null,null,null).exports),B=n("7a32"),C=n("XRO8"),I=n("xfwW"),T=n.n(I),L=n("9+77");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=function(e,t){let{dispatch:n,commit:r,state:i}=e,{before:a,after:o}=t;r("REQUEST_RELEASES");const{sort:s,orderBy:l}=i.sorting,c="".concat("created_at"===l?"created":l,"_").concat(s).toUpperCase();let u;if(a||o)if(a&&!o)u={last:S.g,before:a};else{if(a||!o)throw new Error("Both a `before` and an `after` parameter were provided to fetchReleases. These parameters cannot be used together.");u={first:S.g,after:o}}else u={first:S.g};L.d.query({query:T.a,variables:V({fullPath:i.projectPath,sort:c},u)}).then((function(e){const{data:t,paginationInfo:n}=Object(L.a)(e);r("RECEIVE_RELEASES_SUCCESS",{data:t,pageInfo:n})})).catch((function(){return n("receiveReleasesError")}))},$=function(e){let{commit:t}=e;t("RECEIVE_RELEASES_ERROR"),Object(C.c)(Object(u.a)("An error occurred while fetching the releases. Please try again."))},F=function(e,t){let{commit:n}=e;return n("SET_SORTING",t)};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={REQUEST_RELEASES(e){e.isLoading=!0},RECEIVE_RELEASES_SUCCESS(e,t){let{data:n,pageInfo:r}=t;e.hasError=!1,e.isLoading=!1,e.releases=n,e.pageInfo=r},RECEIVE_RELEASES_ERROR(e){e.isLoading=!1,e.releases=[],e.hasError=!0,e.pageInfo={}},SET_SORTING(e,t){e.sorting=M(M({},e.sorting),t)}},H=function(e){let{projectId:t,projectPath:n,documentationPath:r,illustrationPath:i,newReleasePath:a=""}=e;return{projectId:t,projectPath:n,documentationPath:r,illustrationPath:i,newReleasePath:a,isLoading:!1,hasError:!1,releases:[],pageInfo:{},sorting:{sort:S.e,orderBy:S.h}}};i.default.use(a.b);!function(){const e=document.getElementById("js-releases-page");return new i.default({el:e,store:Object(B.a)({modules:{index:(t=e.dataset,{namespaced:!0,actions:r,mutations:Q,state:H(t)})}}),render:function(e){return e(D)}});var t}()},PIQQ:function(e,t,n){"use strict";n("zijE")},VNgF:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},dsLq:function(e,t,n){"use strict";var r=n("4lAS"),i=n("Pyw5"),a=n.n(i);const o={components:{GlButton:r.a},props:{title:{type:String,required:!0},svgPath:{type:String,required:!1,default:null},svgHeight:{type:Number,required:!1,default:null},description:{type:String,required:!1,default:null},primaryButtonLink:{type:String,required:!1,default:null},primaryButtonText:{type:String,required:!1,default:null},secondaryButtonLink:{type:String,required:!1,default:null},secondaryButtonText:{type:String,required:!1,default:null},compact:{type:Boolean,required:!1,default:!1}},computed:{height:function(){return this.shouldPreventImageReflow?this.svgHeight:null},shouldPreventImageReflow:function(){return Boolean(this.svgHeight)},shouldRenderPrimaryButton:function(){return Boolean(this.primaryButtonLink&&this.primaryButtonText)},shouldRenderSecondaryButton:function(){return Boolean(this.secondaryButtonLink&&this.secondaryButtonText)}}};const s=a()({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"row",class:{"empty-state text-center":!e.compact}},[n("div",{class:{"col-3 d-none d-sm-block":e.compact,"col-12":!e.compact}},[e.svgPath?n("div",{staticClass:"svg-250",class:{"svg-content":!e.compact}},[n("img",{staticClass:"gl-max-w-full",attrs:{src:e.svgPath,alt:"",height:e.height}})]):e._e()]),e._v(" "),n("div",{class:e.compact?"col-sm-9":"col-12"},[n("div",{staticClass:"text-content gl-mx-auto gl-my-0",class:{"gl-p-5":!e.compact}},[n("h1",{ref:"title",class:e.compact?"h5":"h4"},[e._v(e._s(e.title))]),e._v(" "),e.description||e.$scopedSlots.description?n("p",{ref:"description"},[e._t("description",[e._v("\n          "+e._s(e.description)+"\n        ")])],2):e._e(),e._v(" "),n("div",{staticClass:"gl-display-flex gl-flex-wrap",class:{"gl-justify-content-center":!e.compact}},[e._t("actions",[e.shouldRenderPrimaryButton?n("gl-button",{staticClass:"gl-mb-3",class:e.compact?"gl-mr-3":"gl-mx-2",attrs:{variant:"confirm",href:e.primaryButtonLink}},[e._v(e._s(e.primaryButtonText))]):e._e(),e._v(" "),e.shouldRenderSecondaryButton?n("gl-button",{staticClass:"gl-mb-3 gl-mr-3",class:{"gl-mx-2!":!e.compact},attrs:{href:e.secondaryButtonLink}},[e._v(e._s(e.secondaryButtonText)+"\n          ")]):e._e()])],2)])])])},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=s},hZHc:function(e,t,n){"use strict";var r=n("LLbv"),i=n("4lAS"),a=n("1fc5"),o=n("Yyc1"),s=n("Pyw5"),l=n.n(s);const c={name:"GlSorting",components:{GlButton:i.a,GlButtonGroup:a.a,GlDropdown:o.a},directives:{GlTooltip:r.a},props:{text:{type:String,required:!1,default:""},isAscending:{type:Boolean,required:!1,default:!1},sortDirectionToolTip:{type:String,required:!1,default:"Sort direction"},dropdownClass:{type:String,required:!1,default:""},dropdownToggleClass:{type:String,required:!1,default:""},sortDirectionToggleClass:{type:String,required:!1,default:""}},computed:{localSortDirection:function(){return this.isAscending?"sort-lowest":"sort-highest"},sortDirectionAriaLabel:function(){return this.isAscending?"Sorting Direction: Ascending":"Sorting Direction: Descending"}},methods:{toggleSortDirection:function(){var e=!this.isAscending;this.$emit("sortDirectionChange",e)}}};const u=l()({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gl-button-group",{staticClass:"gl-sorting"},[n("gl-dropdown",e._b({class:e.dropdownClass,attrs:{text:e.text,category:"secondary","toggle-class":["dropdown-menu-toggle",e.dropdownToggleClass],right:""}},"gl-dropdown",e.$props,!1),[e._t("default")],2),e._v(" "),n("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],class:["sorting-direction-button",e.sortDirectionToggleClass],attrs:{title:e.sortDirectionToolTip,icon:e.localSortDirection,"aria-label":e.sortDirectionAriaLabel},on:{click:e.toggleSortDirection}})],1)},staticRenderFns:[]},void 0,c,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=u},opWV:function(e,t,n){(e.exports=n("VNgF")(!1)).push([e.i,"\n.linked-card::after {\n  width: 1px;\n  content: ' ';\n  border: 1px solid #e5e5e5;\n  height: 17px;\n  top: 100%;\n  position: absolute;\n  left: 32px;\n}\n",""])},qic4:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=a[0],s={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return g}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,i){c=n,d=i||{};var o=r(e,t);return m(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i];(l=a[s.id]).refs--,n.push(l)}t?m(o=r(e,t)):o=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(h(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function h(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(p){var i=l++;r=s||(s=v()),t=O.bind(null,r,i,!1),n=O.bind(null,r,i,!0)}else r=v(),t=S.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function O(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function S(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(f,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},xfwW:function(e,t,n){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"allReleases"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"fullPath"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"ReleaseSort"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"project"},arguments:[{kind:"Argument",name:{kind:"Name",value:"fullPath"},value:{kind:"Variable",name:{kind:"Name",value:"fullPath"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Release"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:453}};r.loc.source={body:'#import "../fragments/release.fragment.graphql"\n\nquery allReleases(\n  $fullPath: ID!\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n  $sort: ReleaseSort\n) {\n  project(fullPath: $fullPath) {\n    releases(first: $first, last: $last, before: $before, after: $after, sort: $sort) {\n      nodes {\n        ...Release\n      }\n      pageInfo {\n        startCursor\n        hasPreviousPage\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};r.definitions=r.definitions.concat(n("oiak").definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;return!i[t]&&(i[t]=!0,!0)})));var a={};function o(e,t){for(var n=0;n<e.definitions.length;n++){var r=e.definitions[n];if(r.name&&r.name.value==t)return r}}r.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&n.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),a[e.name.value]=t}})),e.exports=r,e.exports.allReleases=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=a[t]||new Set,i=new Set,s=new Set;for(r.forEach((function(e){s.add(e)}));s.size>0;){var l=s;s=new Set,l.forEach((function(e){i.has(e)||(i.add(e),(a[e]||new Set).forEach((function(e){s.add(e)})))}))}return i.forEach((function(t){var r=o(e,t);r&&n.definitions.push(r)})),n}(r,"allReleases")},zijE:function(e,t,n){var r=n("opWV");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("qic4").default)("1ce4e85a",r,!0,{})}},[[210,1,0,6,2,3,4,5,75,73,123]]]);
//# sourceMappingURL=pages.projects.releases.index.d27dd804.chunk.js.map