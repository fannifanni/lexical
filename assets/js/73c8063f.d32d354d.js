"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[412],{876:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(h,i(i({ref:t},d),{},{components:o})):r.createElement(h,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9436:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7896),n=(o(2784),o(876));const a={},i="Node Overrides",s={unversionedId:"concepts/node-replacement",id:"concepts/node-replacement",title:"Node Overrides",description:"Some of the most commonly used Lexical Nodes are owned and maintained by the core library. For example, ParagraphNode, HeadingNode, QuoteNode, List(Item)Node etc - these are all provided by Lexical packages, which provides an easier out-of-the-box experience for some editor features, but makes it difficult to override their behavior. For instance, if you wanted to change the behavior of ListNode, you would typically extend the class and override the methods. However, how would you tell Lexical to use your ListNode subclass in the ListPlugin instead of using the core ListNode? That's where Node Overrides can help.",source:"@site/docs/concepts/node-replacement.md",sourceDirName:"concepts",slug:"/concepts/node-replacement",permalink:"/lexical/docs/concepts/node-replacement",draft:!1,editUrl:"https://github.com/fannifanni/lexical/tree/main/packages/lexical-website/docs/concepts/node-replacement.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nodes",permalink:"/lexical/docs/concepts/nodes"},next:{title:"Listeners",permalink:"/lexical/docs/concepts/listeners"}},l={},c=[],d={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"node-overrides"},"Node Overrides"),(0,n.kt)("p",null,"Some of the most commonly used Lexical Nodes are owned and maintained by the core library. For example, ParagraphNode, HeadingNode, QuoteNode, List(Item)Node etc - these are all provided by Lexical packages, which provides an easier out-of-the-box experience for some editor features, but makes it difficult to override their behavior. For instance, if you wanted to change the behavior of ListNode, you would typically extend the class and override the methods. However, how would you tell Lexical to use ",(0,n.kt)("em",{parentName:"p"},"your")," ListNode subclass in the ListPlugin instead of using the core ListNode? That's where Node Overrides can help."),(0,n.kt)("p",null,"Node Overrides allow you to replace all instances of a given node in your editor with instances of a different node class. This can be done through the nodes array in the Editor config:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const editorConfig = {\n    ...\n    nodes=[\n        // Don't forget to register your custom node separately!\n        CustomParagraphNode,\n        {\n            replace: ParagraphNode,\n            with: (node: ParagraphNode) => {\n                return new CustomParagraphNode();\n            }\n        }\n    ]\n}\n")),(0,n.kt)("p",null,"Once this is done, Lexical will replace all ParagraphNode instances with CustomParagraphNode instances. One important use case for this feature is overriding the serialization behavior of core nodes. Check out the full example below."),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/ecstatic-maxwell-kw5utu?fontsize=14&hidenavigation=1&module=/src/Editor.js,/src/plugins/CollapsiblePlugin.ts,/src/nodes/CollapsibleContainerNode.ts&theme=dark&view=split",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"lexical-collapsible-container-plugin-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}p.isMDXComponent=!0}}]);