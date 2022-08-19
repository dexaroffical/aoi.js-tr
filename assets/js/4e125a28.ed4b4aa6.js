"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[92229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={title:"@akarui/aoi.panel",description:"How to setup @akarui/aoi.panel"},i=void 0,l={unversionedId:"guides/panel",id:"guides/panel",title:"@akarui/aoi.panel",description:"How to setup @akarui/aoi.panel",source:"@site/extensions/guides/panel.md",sourceDirName:"guides",slug:"/guides/panel",permalink:"/extensions/guides/panel",draft:!1,tags:[],version:"current",frontMatter:{title:"@akarui/aoi.panel",description:"How to setup @akarui/aoi.panel"},sidebar:"sidebarExtensions",previous:{title:"Introduction",permalink:"/extensions/"}},s={},u=[{value:"Information",id:"information",level:2},{value:"Features",id:"features",level:2},{value:"Preview",id:"preview",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Known Errors",id:"known-errors",level:2},{value:"<code>ENOTDIR: not a directory, rename &#39;document.getElementByID(name).value&#39; -&gt; &#39;/home/runner/aoi.panel/commands/&#39;</code>",id:"enotdir-not-a-directory-rename-documentgetelementbyidnamevalue---homerunneraoipanelcommands",level:3},{value:"<code>Oops, looks like the bot has not yet been initialized. Try again in a few minutes.</code>",id:"oops-looks-like-the-bot-has-not-yet-been-initialized-try-again-in-a-few-minutes",level:3},{value:"<code>Cannot find module &lt;some package name&gt; Require stack: /home/runner/aoi.panel/</code>",id:"cannot-find-module-some-package-name-require-stack-homerunneraoipanel",level:3},{value:"<code>Uncaught Exception/Catch Error: ENOENT: no such file or directory, open &#39;/home/runner/aoi.panel/node_modules/@akarui/aoi.panel/src/errors/&lt;random string was here&gt;.txt&#39;</code>",id:"uncaught-exceptioncatch-error-enoent-no-such-file-or-directory-open-homerunneraoipanelnode_modulesakaruiaoipanelsrcerrorsrandom-string-was-heretxt",level:3}],d={toc:u};function p(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"information"},"Information"),(0,r.kt)("p",null,"Ever felt the need to add a panel to your discord bot?\nThis is your chance! Take advantage of this new extension and edit your Client files and have control of what you want to change."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ability to edit the files of your Client."),(0,r.kt)("li",{parentName:"ul"},"Save and easily update commands."),(0,r.kt)("li",{parentName:"ul"},"Friendly UI and easy to use."),(0,r.kt)("li",{parentName:"ul"},"Control what Guilds are added onto your Client.")),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example",src:t(93953).Z,width:"2594",height:"1190"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @akarui/aoi.panel\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const panel = new Panel({\n    username: "your-username",//username for logging in\n    password: "password-here",//password for logging in\n    secret: "aoijs",//session secret\n    port: 3000,//port on which website is hosted, Not required! Default 3000\n    bot: bot,//your aoi.js client\n    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json\n    commands: "commands"// folder name in which all the edit needing files are there.\n})\npanel.loadPanel()//Load The Panel\n\npanel.onError()//Will detect errors, and send it to aoi.panel\'s error page.\n')),(0,r.kt)("h2",{id:"known-errors"},"Known Errors"),(0,r.kt)("h3",{id:"enotdir-not-a-directory-rename-documentgetelementbyidnamevalue---homerunneraoipanelcommands"},(0,r.kt)("inlineCode",{parentName:"h3"},"ENOTDIR: not a directory, rename 'document.getElementByID(name).value' -> '/home/runner/aoi.panel/commands/'")),(0,r.kt)("p",null,"You didn't give a name to the file when creating a command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Latest update now pops up a message box to force a file name.")),(0,r.kt)("h3",{id:"oops-looks-like-the-bot-has-not-yet-been-initialized-try-again-in-a-few-minutes"},(0,r.kt)("inlineCode",{parentName:"h3"},"Oops, looks like the bot has not yet been initialized. Try again in a few minutes.")),(0,r.kt)("p",null,"Your Aoi client has not yet started.\nIf using Replit, type ",(0,r.kt)("inlineCode",{parentName:"p"},"kill 1")," in the shell and the run your code."),(0,r.kt)("p",null,"Make sure you have the latest version of aoi.js as well sufficient resources available. "),(0,r.kt)("h3",{id:"cannot-find-module-some-package-name-require-stack-homerunneraoipanel"},(0,r.kt)("inlineCode",{parentName:"h3"},"Cannot find module <some package name> Require stack: /home/runner/aoi.panel/")),(0,r.kt)("p",null,"Missing dependencies in your package.json. Install them and try again."),(0,r.kt)("h3",{id:"uncaught-exceptioncatch-error-enoent-no-such-file-or-directory-open-homerunneraoipanelnode_modulesakaruiaoipanelsrcerrorsrandom-string-was-heretxt"},(0,r.kt)("inlineCode",{parentName:"h3"},"Uncaught Exception/Catch Error: ENOENT: no such file or directory, open '/home/runner/aoi.panel/node_modules/@akarui/aoi.panel/src/errors/<random string was here>.txt'")),(0,r.kt)("p",null,"An older version of panel did not have the proper error directory, update to the latest by ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @akarui/aoi.panel@latest")))}p.isMDXComponent=!0},93953:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/example-1-427a10393ccddc1706ffbc4b41dd993e.png"}}]);