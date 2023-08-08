"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[1316],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(2784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(7896),l=(a(2784),a(876));const i={id:"lexical.BaseSelection",title:"Interface: BaseSelection",sidebar_label:"BaseSelection",custom_edit_url:null},r=void 0,c={unversionedId:"api/interfaces/lexical.BaseSelection",id:"api/interfaces/lexical.BaseSelection",title:"Interface: BaseSelection",description:"lexical.BaseSelection",source:"@site/docs/api/interfaces/lexical.BaseSelection.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/lexical.BaseSelection",permalink:"/lexical/docs/api/interfaces/lexical.BaseSelection",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical.BaseSelection",title:"Interface: BaseSelection",sidebar_label:"BaseSelection",custom_edit_url:null},sidebar:"api",previous:{title:"TableSelection",permalink:"/lexical/docs/api/classes/lexical_table.TableSelection"},next:{title:"SerializedEditorState",permalink:"/lexical/docs/api/interfaces/lexical.SerializedEditorState"}},o={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"dirty",id:"dirty",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"extract",id:"extract",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getNodes",id:"getnodes",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getTextContent",id:"gettextcontent",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"insertRawText",id:"insertrawtext",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"is",id:"is",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical"},"lexical"),".BaseSelection"),(0,l.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"GridSelection"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.NodeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"NodeSelection"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"RangeSelection")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"dirty"},"dirty"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"dirty"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L279"},"lexical/src/LexicalSelection.ts:279")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"clone"},"clone"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseSelection"))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseSelection"))),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L278"},"lexical/src/LexicalSelection.ts:278")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"extract"},"extract"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"extract"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,l.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,l.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L280"},"lexical/src/LexicalSelection.ts:280")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getnodes"},"getNodes"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getNodes"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,l.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,l.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L281"},"lexical/src/LexicalSelection.ts:281")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gettextcontent"},"getTextContent"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getTextContent"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L282"},"lexical/src/LexicalSelection.ts:282")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"insertrawtext"},"insertRawText"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"insertRawText"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L283"},"lexical/src/LexicalSelection.ts:283")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"is"},"is"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"is"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"selection")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"RangeSelection"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.NodeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"NodeSelection"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"GridSelection")))))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical/src/LexicalSelection.ts#L284"},"lexical/src/LexicalSelection.ts:284")))}d.isMDXComponent=!0}}]);