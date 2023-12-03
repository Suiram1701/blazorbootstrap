"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[79557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),b=s,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||n;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},74404:(e,t,r)=>{r.d(t,{ZP:()=>c});var a=r(87462),s=r(67294),n=r(3905);class o extends s.Component{constructor(e){super(e),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let e=document.createElement("script");e.defer=!!this.script,e.async=!0,e.id=this.script?"":"_carbonads_js",e.type="text/javascript",e.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,e.onerror=()=>{this.showFallback=!0,this.forceUpdate()},e.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(e)};render(){return this.showFallback&&this.fallback?this.fallback:s.createElement("div",{id:this.name})}}const l=o,i={toc:[]},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l,{mdxType:"CarbonAd"}))}c.isMDXComponent=!0},75640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),s=(r(67294),r(3905)),n=r(74404);const o={id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},l="Getting started - Blazor WebAssembly",i={unversionedId:"getting-started/blazor-webassembly",id:"getting-started/blazor-webassembly",title:"Blazor WebAssembly",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework.",source:"@site/docs/01-getting-started/getting-started-webassembly.mdx",sourceDirName:"01-getting-started",slug:"/getting-started/blazor-webassembly",permalink:"/getting-started/blazor-webassembly",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/01-getting-started/getting-started-webassembly.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},sidebar:"tutorialSidebar",next:{title:"Blazor Server",permalink:"/getting-started/blazor-server"}},p={},c=[{value:"Install Nuget Package",id:"install-nuget-package",level:2},{value:"Add CSS references",id:"add-css-references",level:2},{value:"Add script references",id:"add-script-references",level:2},{value:"Register services",id:"register-services",level:2},{value:"Remove default references",id:"remove-default-references",level:2},{value:"Starter templates",id:"starter-templates",level:2},{value:".NET 6",id:"net-6",level:3},{value:".NET 7",id:"net-7",level:3}],m={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started---blazor-webassembly"},"Getting started - Blazor WebAssembly"),(0,s.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework."),(0,s.kt)(n.ZP,{mdxType:"CarbonAd"}),(0,s.kt)("h2",{id:"install-nuget-package"},"Install Nuget Package"),(0,s.kt)("p",null,"Looking to quickly add ",(0,s.kt)("strong",{parentName:"p"},"Blazor Bootstrap")," to your project? Use NuGet package manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 1.10.4\n")),(0,s.kt)("h2",{id:"add-css-references"},"Add CSS references"),(0,s.kt)("p",null,"Add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" rel="stylesheet" />\n<link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you use the ",(0,s.kt)("strong",{parentName:"p"},"Blazor WebAssembly App Empty*")," template (without demonstration code and Bootstrap), add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html"),".\nThere is a known GitHub issue ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/43975"},"Blazor empty template doesn't load scoped CSS"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="_content/Blazor.Bootstrap/Blazor.Bootstrap.bundle.scp.css" rel="stylesheet" />\n')),(0,s.kt)("h2",{id:"add-script-references"},"Add script references"),(0,s.kt)("p",null,"Add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html")," after the ",(0,s.kt)("strong",{parentName:"p"},"_framework/blazor.webassembly.js")," reference."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>\n\x3c!-- Add chart.js reference if chart components are used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n\x3c!-- Add chartjs-plugin-datalabels.min.js reference if chart components with data label feature is used in your application. --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js" integrity="sha512-JPcRR8yFa8mmCsfrw4TNte1ZvF1e3+1SdGMslZvmrzDYxS69J7J49vkFL8u6u8PlPJK+H3voElBtUCzaXj+6ig==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n<script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"chart.js")," reference is optional. Add when the ",(0,s.kt)("strong",{parentName:"p"},"Chart")," components are used in the application.")),(0,s.kt)("h2",{id:"register-services"},"Register services"),(0,s.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,s.kt)("strong",{parentName:"p"},"Program.cs")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"builder.Services.AddBlazorBootstrap(); // Add this line\n")),(0,s.kt)("p",null,"Register tag helpers in ",(0,s.kt)("strong",{parentName:"p"},"_Imports.razor")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-razor",metastring:"showLineNumbers",showLineNumbers:!0},"@using BlazorBootstrap;\n")),(0,s.kt)("h2",{id:"remove-default-references"},"Remove default references"),(0,s.kt)("p",null,"In the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file, the default blazor template includes demonstration code, icons, and Bootstrap.\nThese files are no longer needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />\n<link href="css/app.css" rel="stylesheet" />\n')),(0,s.kt)("p",null,"Delete the default ",(0,s.kt)("strong",{parentName:"p"},"bootstrap")," and ",(0,s.kt)("strong",{parentName:"p"},"open-iconic")," folders from the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot")," folder."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"wwwroot/css/bootstrap"),(0,s.kt)("li",{parentName:"ol"},"wwwroot/css/open-iconic")),(0,s.kt)("p",null,"Either remove or keep the ",(0,s.kt)("strong",{parentName:"p"},"app.css")," file but make sure you clear it out of any content when the ",(0,s.kt)("a",{parentName:"p",href:"/components/sidebar#full-layout-with-sidebar"},"Sidebar")," component with full layout is used."),(0,s.kt)("h2",{id:"starter-templates"},"Starter templates"),(0,s.kt)("h3",{id:"net-6"},".NET 6"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET6.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/aRV3rJm.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"}))),(0,s.kt)("h3",{id:"net-7"},".NET 7"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/4P8u0HR.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyAppEmpty"},"Blazor Bootstrap - Blazor Empty WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/CBEoZ6P.png",alt:"Blazor Bootstrap - Blazor Empty WebAssembly App"}))))}b.isMDXComponent=!0}}]);