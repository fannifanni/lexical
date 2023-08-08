"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[1133],{876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7896),r=(a(2784),a(876));const l={id:"lexical_file",title:"Module: @lexical/file",sidebar_label:"@lexical/file",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"api/modules/lexical_file",id:"api/modules/lexical_file",title:"Module: @lexical/file",description:"Functions",source:"@site/docs/api/modules/lexical_file.md",sourceDirName:"api/modules",slug:"/api/modules/lexical_file",permalink:"/lexical/docs/api/modules/lexical_file",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"lexical_file",title:"Module: @lexical/file",sidebar_label:"@lexical/file",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"@lexical/dragon",permalink:"/lexical/docs/api/modules/lexical_dragon"},next:{title:"@lexical/hashtag",permalink:"/lexical/docs/api/modules/lexical_hashtag"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"exportFile",id:"exportfile",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"importFile",id:"importfile",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"exportfile"},"exportFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"exportFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Generates a .lexical file to be downloaded by the browser containing the current editor state."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"editor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalEditor"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lexical editor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Readonly"),"<{ ",(0,r.kt)("inlineCode",{parentName:"td"},"fileName?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"source?"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"  }",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An object that optionally contains fileName and source. fileName defaults to the current date (as a string) and source defaults to lexical.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-file/src/fileImportExport.ts#L66"},"lexical-file/src/fileImportExport.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"importfile"},"importFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"importFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Takes a file and inputs its content into the editor state as an input field."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"editor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalEditor"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The lexical editor.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-file/src/fileImportExport.ts#L19"},"lexical-file/src/fileImportExport.ts:19")))}s.isMDXComponent=!0}}]);