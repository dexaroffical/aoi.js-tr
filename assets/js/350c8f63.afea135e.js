"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[94579],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={title:"$findChars"},a=void 0,c={unversionedId:"functions/findchars",id:"functions/findchars",title:"$findChars",description:"This function filters out characters from the given &lt;string&gt; and returns them alone",source:"@site/docs/functions/findchars.md",sourceDirName:"functions",slug:"/functions/findchars",permalink:"/docs/functions/findchars",draft:!1,tags:[],version:"current",frontMatter:{title:"$findChars"},sidebar:"docs",previous:{title:"$findChannel",permalink:"/docs/functions/findchannel"},next:{title:"$findMember",permalink:"/docs/functions/findmember"}},l={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:s};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function filters out characters from the given ","<","string",">"," and returns them alone"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function  has 1 field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"String ","(","Required",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findChars[string]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String - The text we're filtering")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "findChars",\ncode: `$findChars[fdef243/%kcnv]`\n})\n/*\nBot will return:\nfdefkcnv\n*/\n')))}f.isMDXComponent=!0}}]);