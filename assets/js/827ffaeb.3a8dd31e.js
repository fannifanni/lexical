"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[6395],{876:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var i=a(2784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),h=p(a),m=l,k=h["".concat(o,".").concat(m)]||h[m]||c[m]||n;return a?i.createElement(k,r(r({ref:t},s),{},{components:a})):i.createElement(k,r({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=h;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var i=a(7896),l=(a(2784),a(876));const n={id:"lexical_code.CodeHighlightNode",title:"Class: CodeHighlightNode",sidebar_label:"CodeHighlightNode",custom_edit_url:null},r=void 0,d={unversionedId:"api/classes/lexical_code.CodeHighlightNode",id:"api/classes/lexical_code.CodeHighlightNode",title:"Class: CodeHighlightNode",description:"@lexical/code.CodeHighlightNode",source:"@site/docs/api/classes/lexical_code.CodeHighlightNode.md",sourceDirName:"api/classes",slug:"/api/classes/lexical_code.CodeHighlightNode",permalink:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical_code.CodeHighlightNode",title:"Class: CodeHighlightNode",sidebar_label:"CodeHighlightNode",custom_edit_url:null},sidebar:"api",previous:{title:"TextNode",permalink:"/lexical/docs/api/classes/lexical.TextNode"},next:{title:"CodeNode",permalink:"/lexical/docs/api/classes/lexical_code.CodeNode"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"createDOM",id:"createdom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createParentElementNode",id:"createparentelementnode",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"exportJSON",id:"exportjson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getHighlightType",id:"gethighlighttype",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isParentRequired",id:"isparentrequired",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setFormat",id:"setformat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"updateDOM",id:"updatedom",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"clone",id:"clone",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getType",id:"gettype",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"importJSON",id:"importjson",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"Defined in",id:"defined-in-10",level:4}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_code"},"@lexical/code"),".CodeHighlightNode"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},(0,l.kt)("inlineCode",{parentName:"a"},"TextNode"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"CodeHighlightNode"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new CodeHighlightNode"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"highlightType?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"key?"),")"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"highlightType?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"key?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#constructor"},"constructor")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L113"},"lexical-code/src/CodeHighlightNode.ts:113")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"createdom"},"createDOM"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"createDOM"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,l.kt)("p",null,"Called during the reconciliation process to determine which nodes\nto insert into the DOM for this Lexical Node."),(0,l.kt)("p",null,"This method must return exactly one HTMLElement. Nested elements are not supported."),(0,l.kt)("p",null,"Do not attempt to update the Lexical EditorState during this phase of the update lifecyle."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#editorconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"EditorConfig"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"allows access to things like the EditorTheme (to apply classes) during reconciliation.")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,l.kt)("h4",{id:"overrides-1"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#createdom"},"createDOM")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L139"},"lexical-code/src/CodeHighlightNode.ts:139")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"createparentelementnode"},"createParentElementNode"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"createParentElementNode"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},(0,l.kt)("inlineCode",{parentName:"a"},"ElementNode"))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},(0,l.kt)("inlineCode",{parentName:"a"},"ElementNode"))),(0,l.kt)("h4",{id:"overrides-2"},"Overrides"),(0,l.kt)("p",null,"TextNode.createParentElementNode"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L206"},"lexical-code/src/CodeHighlightNode.ts:206")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"exportjson"},"exportJSON"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"exportJSON"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"SerializedCodeHighlightNode")),(0,l.kt)("p",null,"Controls how the this node is serialized to JSON. This is important for\ncopy and paste between Lexical editors sharing the same namespace. It's also important\nif you're serializing to JSON for persistent storage somewhere.\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/serialization#lexical---html"},"Serialization & Deserialization"),"."),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SerializedCodeHighlightNode")),(0,l.kt)("h4",{id:"overrides-3"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#exportjson"},"exportJSON")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L188"},"lexical-code/src/CodeHighlightNode.ts:188")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gethighlighttype"},"getHighlightType"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getHighlightType"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L134"},"lexical-code/src/CodeHighlightNode.ts:134")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"isparentrequired"},"isParentRequired"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"isParentRequired"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"overrides-4"},"Overrides"),(0,l.kt)("p",null,"TextNode.isParentRequired"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L202"},"lexical-code/src/CodeHighlightNode.ts:202")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setformat"},"setFormat"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"setFormat"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"format"),"): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("p",null,"Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType\nversion of the argument can only specify one format and doing so will remove all other formats that\nmay be applied to the node. For toggling behavior, consider using TextNode.toggleFormat"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"format")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TextFormatType or 32-bit integer representing the node format.")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("p",null,"this TextNode.\n// TODO 0.12 This should just be a ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,l.kt)("h4",{id:"overrides-5"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#setformat"},"setFormat")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L198"},"lexical-code/src/CodeHighlightNode.ts:198")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"updatedom"},"updateDOM"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"updateDOM"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"prevNode"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dom"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Called when a node changes and should update the DOM\nin whatever way is necessary to make it align with any changes that might\nhave happened during the update."),(0,l.kt)("p",null,'Returning "true" here will cause lexical to unmount and recreate the DOM node\n(by calling createDOM). You would need to do this if the element tag changes,\nfor instance.'),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"prevNode")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"dom")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#editorconfig"},(0,l.kt)("inlineCode",{parentName:"a"},"EditorConfig")))))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"overrides-6"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#updatedom"},"updateDOM")),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L149"},"lexical-code/src/CodeHighlightNode.ts:149")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clone"},"clone"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"clone"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("p",null,"Clones this node, creating a new node with a different key\nand adding it to the EditorState (but not attaching it anywhere!). All nodes must\nimplement this method."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"node")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode")))))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("h4",{id:"overrides-7"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#clone"},"clone")),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L126"},"lexical-code/src/CodeHighlightNode.ts:126")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gettype"},"getType"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"getType"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Returns the string type of this node. Every node must\nimplement this and it MUST BE UNIQUE amongst nodes registered\non the editor."),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"overrides-8"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#gettype"},"getType")),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L122"},"lexical-code/src/CodeHighlightNode.ts:122")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"importjson"},"importJSON"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"importJSON"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"serializedNode"),"): ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("p",null,"Controls how the this node is deserialized from JSON. This is usually boilerplate,\nbut provides an abstraction between the node implementation and serialized interface that can\nbe important if you ever make breaking changes to a node schema (by adding or removing properties).\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/serialization#lexical---html"},"Serialization & Deserialization"),"."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"serializedNode")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SerializedCodeHighlightNode"))))),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_code.CodeHighlightNode"},(0,l.kt)("inlineCode",{parentName:"a"},"CodeHighlightNode"))),(0,l.kt)("h4",{id:"overrides-9"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode"},"TextNode"),".",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.TextNode#importjson"},"importJSON")),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fannifanni/lexical/blob/61208ee/packages/lexical-code/src/CodeHighlightNode.ts#L174"},"lexical-code/src/CodeHighlightNode.ts:174")))}c.isMDXComponent=!0}}]);