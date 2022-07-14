"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[89],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"$user"},s=void 0,i={unversionedId:"functions/user",id:"functions/user",title:"$user",description:"This function returns the given user's specified property",source:"@site/docs/functions/user.md",sourceDirName:"functions",slug:"/functions/user",permalink:"/docs/functions/user",draft:!1,tags:[],version:"current",frontMatter:{title:"$user"},sidebar:"docs",previous:{title:"$useChannel",permalink:"/docs/functions/usechannel"},next:{title:"$userAvatar",permalink:"/docs/functions/useravatar"}},l={},u=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the given user's specified property"),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This function has 2 fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$user[userID;property]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User ID - The user the properties are based off of"),(0,a.kt)("li",{parentName:"ul"},"Property - The property we're getting from ","<","user",">")),(0,a.kt)("h4",{id:"available-properties"},"Available Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name - User's name"),(0,a.kt)("li",{parentName:"ul"},"id - User's ID"),(0,a.kt)("li",{parentName:"ul"},"tag - User's Tag"),(0,a.kt)("li",{parentName:"ul"},"discrim - User's discriminator"),(0,a.kt)("li",{parentName:"ul"},"mention - User's mention"),(0,a.kt)("li",{parentName:"ul"},"avatar - User's avatar URL"),(0,a.kt)("li",{parentName:"ul"},"isbot - Whether or not the user is a bot, Return's Boolean"),(0,a.kt)("li",{parentName:"ul"},"istyping - Whether or not the user is typing, Return's Boolean"),(0,a.kt)("li",{parentName:"ul"},"created - User's date and time of creation"),(0,a.kt)("li",{parentName:"ul"},"timestamp - How long ago the user was created"),(0,a.kt)("li",{parentName:"ul"},"lastmessageid - User's last message ID"),(0,a.kt)("li",{parentName:"ul"},"lastmessagechannelid - User's last channel ID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "user",\ncode: `\n$user[535566311942651924;name]\n`\n})\n\n//Or specified user\n\nbot.command({\nname: "user",\ncode: `\n$user[$mentioned[1];name]\n`\n})\n')))}c.isMDXComponent=!0}}]);