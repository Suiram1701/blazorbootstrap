"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[34904],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>h});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},m=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=c(o),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return o?n.createElement(h,i(i({ref:e},m),{},{components:o})):n.createElement(h,i({ref:e},m))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},74404:(t,e,o)=>{o.d(e,{ZP:()=>m});var n=o(87462),a=o(67294),r=o(3905);class i extends a.Component{constructor(t){super(t),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let t=document.createElement("script");t.defer=!!this.script,t.async=!0,t.id=this.script?"":"_carbonads_js",t.type="text/javascript",t.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,t.onerror=()=>{this.showFallback=!0,this.forceUpdate()},t.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(t)};render(){return this.showFallback&&this.fallback?this.fallback:a.createElement("div",{id:this.name})}}const l=i,s={toc:[]},c="wrapper";function m(t){let{components:e,...o}=t;return(0,r.kt)(c,(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"CarbonAd"}))}m.isMDXComponent=!0},20891:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=o(87462),a=(o(67294),o(3905)),r=o(74404);const i={title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/8HcjpiK.png",sidebar_label:"Icons",sidebar_position:1},l="Blazor Icons",s={unversionedId:"content/icons",id:"content/icons",title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",source:"@site/docs/03-content/icons.mdx",sourceDirName:"03-content",slug:"/content/icons",permalink:"/content/icons",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/03-content/icons.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blazor Icons Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/8HcjpiK.png",sidebar_label:"Icons",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Blazor Server",permalink:"/layout/blazor-server"},next:{title:"Auto Complete",permalink:"/forms/autocomplete"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Icons",id:"icons",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Font awesome icons",id:"font-awesome-icons",level:3},{value:"Colors",id:"colors",level:3},{value:"Inline text with icon",id:"inline-text-with-icon",level:3},{value:"Link with icon",id:"link-with-icon",level:3},{value:"Link with custom icon",id:"link-with-custom-icon",level:3},{value:"Button with icon and text",id:"button-with-icon-and-text",level:3},{value:"Button with icon only",id:"button-with-icon-only",level:3},{value:"Button with font awesome icon",id:"button-with-font-awesome-icon",level:3},{value:"Icon with tooltip",id:"icon-with-tooltip",level:3},{value:"Bootstrap Icons",id:"bootstrap-icons",level:3}],p={toc:m},u="wrapper";function d(t){let{components:e,...o}=t;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-icons"},"Blazor Icons"),(0,a.kt)("p",null,"Blazor Bootstrap icon component will display an icon from any icon font."),(0,a.kt)(r.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Bootstrap Icons or other."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Refer: ",(0,a.kt)("a",{parentName:"li",href:"https://icons.getbootstrap.com/"},"Bootstrap Icons")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include the icon fonts stylesheet in your website ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@import")," in CSS from CDN."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet" />\n')),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Color"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IconColor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the icon color."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IconColor.None")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.9.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CustomIconName"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify custom icons of your own, like ",(0,a.kt)("inlineCode",{parentName:"td"},"fontawesome"),". Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"fas fa-alarm-clock")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IconName")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the icon name."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IconSize")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the icon size."),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"IconSize.None")),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,a.kt)("admonition",{title:"NOTE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Either ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomIconName")," parameter is mandatory. For ",(0,a.kt)("strong",{parentName:"p"},"Font Awesome")," setup, please follow the ",(0,a.kt)("strong",{parentName:"p"},"Font Awesome")," website.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"icons"},"Icons"),(0,a.kt)("img",{src:"https://i.imgur.com/WClg4kQ.jpg",alt:"Blazor Bootstrap: Icon Component"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Icon Name="IconName.Alarm" />\n<Icon Name="IconName.AlarmFill" />\n<Icon Name="IconName.Window" />\n<Icon Name="IconName.Apple" />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#examples"},"See icons demo here.")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("img",{src:"https://i.imgur.com/ko7c6k3.jpg",alt:"Blazor Bootstrap: Icon Component - Sizes"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Icon Name="IconName.Alarm" Size="IconSize.x2" />\n<Icon Name="IconName.Alarm" Size="IconSize.x3" />\n<Icon Name="IconName.Alarm" Size="IconSize.x4" />\n<Icon Name="IconName.Alarm" Size="IconSize.x5" />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#sizes"},"See icons with different size demo here.")),(0,a.kt)("h3",{id:"font-awesome-icons"},"Font awesome icons"),(0,a.kt)("p",null,"In the following example, we used ",(0,a.kt)("strong",{parentName:"p"},"Font Awesome 6.4.2")," free version icons. For Font Awesome setup, please follow the Font Awesome website."),(0,a.kt)("img",{src:"https://i.imgur.com/aUuJE34.png",alt:"Blazor Bootstrap: Icon Component - Font awesome icons"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x1" />\n<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x2" />\n<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x3" />\n<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x4" />\n<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x5" />\n<Icon CustomIconName="fa-solid fa-hands-clapping" Size="IconSize.x6" />\n')),(0,a.kt)("h3",{id:"colors"},"Colors"),(0,a.kt)("img",{src:"https://i.imgur.com/pUutAt8.png",alt:"Blazor Bootstrap: Icon Component - Colors"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Icon Name="IconName.Facebook" Size="IconSize.x2" Color="IconColor.Primary" />\n<Icon Name="IconName.CloudLightningRainFill" Size="IconSize.x2" Color="IconColor.Secondary" />\n<Icon Name="IconName.CheckAll" Size="IconSize.x2" Color="IconColor.Success" />\n<Icon Name="IconName.Bug" Size="IconSize.x2" Color="IconColor.Danger" />\n<Icon Name="IconName.ExclamationDiamondFill" Size="IconSize.x2" Color="IconColor.Warning" />\n<Icon Name="IconName.InfoCircleFill" Size="IconSize.x2" Color="IconColor.Info" />\n<Icon Name="IconName.CreditCard2FrontFill" Size="IconSize.x2" Color="IconColor.Light" />\n<Icon Name="IconName.Apple" Size="IconSize.x2" Color="IconColor.Dark" />\n<Icon Name="IconName.Asterisk" Size="IconSize.x2" Color="IconColor.Body" />\n<Icon Name="IconName.VolumeMuteFill" Size="IconSize.x2" Color="IconColor.Muted" />\n<Icon Name="IconName.BrowserSafari" Size="IconSize.x2" Color="IconColor.White" />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#colors"},"See icons with different size demo here.")),(0,a.kt)("h3",{id:"inline-text-with-icon"},"Inline text with icon"),(0,a.kt)("img",{src:"https://i.imgur.com/eNKFAKg.jpg",alt:"Blazor Bootstrap: Icon Component - Inline text with icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'Inline text <Icon Name="IconName.Alarm" />\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#inline-text-with-icon"},"See inline text with icon demo here.")),(0,a.kt)("h3",{id:"link-with-icon"},"Link with icon"),(0,a.kt)("img",{src:"https://i.imgur.com/pDpv29z.jpg",alt:"Blazor Bootstrap: Icon Component - Link with icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<a href="#" class="text-decoration-none">\n    Example link text <Icon Name="IconName.Alarm" />\n</a>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#link-with-icon"},"See link with icon demo here.")),(0,a.kt)("h3",{id:"link-with-custom-icon"},"Link with custom icon"),(0,a.kt)("img",{src:"https://i.imgur.com/KNFvgiS.jpg",alt:"Blazor Bootstrap: Icon Component - Link with custom icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<a href="#" class="text-decoration-none">\n    Example link text <Icon CustomIconName="bi bi-bootstrap" />\n</a>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#link-with-custom-icon"},"See link with custom icon demo here.")),(0,a.kt)("h3",{id:"button-with-icon-and-text"},"Button with icon and text"),(0,a.kt)("img",{src:"https://i.imgur.com/Pkzbm1Q.jpg",alt:"Blazor Bootstrap: Icon Component - Button with icon and text"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Primary"><Icon Name="IconName.Alarm" /> Button </Button>\n<Button Color="ButtonColor.Success"><Icon Name="IconName.Alarm" /> Button </Button>\n<Button Color="ButtonColor.Danger" Outline="true"><Icon Name="IconName.AlarmFill" /> Button </Button>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#button-with-icon-and-text"},"See button with icon and text demo here.")),(0,a.kt)("h3",{id:"button-with-icon-only"},"Button with icon only"),(0,a.kt)("img",{src:"https://i.imgur.com/3WClQmS.jpg",alt:"Blazor Bootstrap: Icon Component - Button with icon only"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Secondary"><Icon Name="IconName.Alarm" /></Button>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#button-with-icon-only"},"See button with icon only demo here.")),(0,a.kt)("h3",{id:"button-with-font-awesome-icon"},"Button with font awesome icon"),(0,a.kt)("p",null,"In the following example, we used ",(0,a.kt)("strong",{parentName:"p"},"Font Awesome 6.4.2")," free version icons. For Font Awesome setup, please follow the Font Awesome website."),(0,a.kt)("img",{src:"https://i.imgur.com/GWppafv.png",alt:"Blazor Bootstrap: Icon Component - Button with font awesome icon"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Button Color="ButtonColor.Secondary" TooltipTitle="Compare code">\n    <Icon CustomIconName="fa-solid fa-code-compare"/>\n</Button>\n<Button Color="ButtonColor.Secondary" TooltipTitle="Create pull request">\n    <Icon CustomIconName="fa-solid fa-code-pull-request" />\n</Button>\n')),(0,a.kt)("h3",{id:"icon-with-tooltip"},"Icon with tooltip"),(0,a.kt)("img",{src:"https://i.imgur.com/OwfxRXn.png",alt:"Blazor Bootstrap: Icon Component - Icon with tooltip"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Tooltip Title="Info Tooltip" role="button">\n    <Icon Name="IconName.InfoCircleFill"></Icon>\n</Tooltip>\n')),(0,a.kt)("h3",{id:"bootstrap-icons"},"Bootstrap Icons"),(0,a.kt)("img",{src:"https://i.imgur.com/8HcjpiK.png",alt:"Blazor Bootstrap: Icon Component - Bootstrap Icons"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/icons#bootstrap-icons"},"See all bootstrap icons demo here.")))}d.isMDXComponent=!0}}]);