"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[30733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$addSelectMenu",description:"Adds a select menu component to message."},o=void 0,i={unversionedId:"functions/addselectmenu",id:"functions/addselectmenu",title:"$addSelectMenu",description:"Adds a select menu component to message.",source:"@site/docs/functions/addselectmenu.md",sourceDirName:"functions",slug:"/functions/addselectmenu",permalink:"/docs/functions/addselectmenu",draft:!1,tags:[],version:"current",frontMatter:{title:"$addSelectMenu",description:"Adds a select menu component to message."},sidebar:"docs",previous:{title:"$addReactions",permalink:"/docs/functions/addreactions"},next:{title:"$addThreadMember",permalink:"/docs/functions/addthreadmember"}},s={},p=[{value:"Usage:",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Options",id:"options",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function that adds a selection menu to client's message."),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$addSelectMenu[index;customID;placeholder;minimum value;maximum value;disable;label:description:value:default?:emoji?;...]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The menu to show up on the given embed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text that will show as default label on select menu."),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minimum value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minimal options to choose from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maximum value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum options to choose from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disabling the selection menu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of select menu option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The description of select menu option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select menu option's value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"default?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"To show the select menu option as placeholder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"emoji?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adding emoji to select menu option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h6",{id:"footnote"},"Footnote"),(0,r.kt)("p",null,"Interaction commands needs this callback on main file (or handler):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.onInteractionCreate();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-select-menu",\n  code:`\n  Select an option.\n  \n  $addSelectMenu[1;helpCustomID;This placeholder won\'t show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:helpValue0:no:\ud83d\udc4b;B Option::helpValue1:yes]\n  `\n});\n\nbot.interactionCommand({\n  name: "helpCustomID",\n  prototype: "selectMenu", \n  code: `\n  $interactionUpdate[A option\'s response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won\'t show up:helpValue0:Either this.:false}{selectMenuOptions:This won\'t show up either.:helpValue1:cause menu disabled.:false}}}]\n\n  $onlyIf[$interactionData[values[0]]==0;]\n  `\n});\n\nbot.interactionCommand({\n  name: "helpCustomID",\n  prototype: "selectMenu", \n  code: `\n  $interactionUpdate[B option\'s response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won\'t show up:helpValue0:Either this.:false}{selectMenuOptions:This won\'t show up either.:helpValue1:cause menu disabled.:false}}}]\n\n  $onlyIf[$interactionData[values[0]]==1;]\n  `\n});\n')))}m.isMDXComponent=!0}}]);