"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[60369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"$memberJoinPosition"},a=void 0,c={unversionedId:"functions/memberjoinposition",id:"functions/memberjoinposition",title:"$memberJoinPosition",description:"This function will show you your position in the joined history. \\(1st, 2nd, 3rd member, etc.\\)",source:"@site/docs/functions/memberjoinposition.md",sourceDirName:"functions",slug:"/functions/memberjoinposition",permalink:"/docs/functions/memberjoinposition",draft:!1,tags:[],version:"current",frontMatter:{title:"$memberJoinPosition"},sidebar:"docs",previous:{title:"$memberJoinedDate",permalink:"/docs/functions/memberjoineddate"},next:{title:"$membersCount",permalink:"/docs/functions/memberscount"}},s={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function will show you your position in the joined history. ","(","1st, 2nd, 3rd member, etc.",")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This function requires you to have all server members cached to be accurate.")),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$memberJoinPosition[User ID (Optional)]")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "joined",\n    code: `You are in position: $memberJoinPosition`\n});\n')))}p.isMDXComponent=!0}}]);