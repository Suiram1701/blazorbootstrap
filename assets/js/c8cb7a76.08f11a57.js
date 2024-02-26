"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[19089],{3905:(t,e,n)=>{n.d(e,{Zo:()=>b,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},b=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:e},b),{},{components:n})):a.createElement(h,s({ref:e},b))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[m]="string"==typeof t?t:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74404:(t,e,n)=>{n.d(e,{ZP:()=>b});var a=n(87462),r=n(67294),o=n(3905);class s extends r.Component{constructor(t){super(t),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let t=document.createElement("script");t.defer=!!this.script,t.async=!0,t.id=this.script?"":"_carbonads_js",t.type="text/javascript",t.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,t.onerror=()=>{this.showFallback=!0,this.forceUpdate()},t.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(t)};render(){return this.showFallback&&this.fallback?this.fallback:r.createElement("div",{id:this.name})}}const l=s,i={toc:[]},c="wrapper";function b(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"CarbonAd"}))}b.isMDXComponent=!0},97667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>b});var a=n(87462),r=(n(67294),n(3905)),o=n(74404);const s={title:"Blazor Tabs Component",description:"Documentation and examples for using Blazor Bootstrap Tabs components.",image:"https://i.imgur.com/KelXx6Z.png",sidebar_label:"Tabs",sidebar_position:23},l="Blazor Tabs",i={unversionedId:"components/tabs",id:"components/tabs",title:"Blazor Tabs Component",description:"Documentation and examples for using Blazor Bootstrap Tabs components.",source:"@site/docs/05-components/tabs.mdx",sourceDirName:"05-components",slug:"/components/tabs",permalink:"/components/tabs",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/tabs.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Blazor Tabs Component",description:"Documentation and examples for using Blazor Bootstrap Tabs components.",image:"https://i.imgur.com/KelXx6Z.png",sidebar_label:"Tabs",sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Spinners",permalink:"/components/spinners"},next:{title:"Toasts",permalink:"/components/toasts"}},c={},b=[{value:"Tabs Parameters",id:"tabs-parameters",level:2},{value:"Tabs Methods",id:"tabs-methods",level:2},{value:"Tabs Callback Events",id:"tabs-callback-events",level:2},{value:"Tab Parameters",id:"tab-parameters",level:2},{value:"Tab Callback Events",id:"tab-callback-events",level:2},{value:"Examples",id:"examples",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Fade effect",id:"fade-effect",level:3},{value:"Title with icon",id:"title-with-icon",level:3},{value:"Disable Tab",id:"disable-tab",level:3},{value:"Pills",id:"pills",level:3},{value:"Underline",id:"underline",level:3},{value:"Vertical",id:"vertical",level:3},{value:"Vertical pills",id:"vertical-pills",level:3},{value:"Vertical underline",id:"vertical-underline",level:3},{value:"Activate individual tabs",id:"activate-individual-tabs",level:3},{value:"Events",id:"events",level:3},{value:"Methods: Set active tab OnAfterRender",id:"methods-set-active-tab-onafterrender",level:3},{value:"Tab: OnClick",id:"tab-onclick",level:3},{value:"Dynamic tabs",id:"dynamic-tabs",level:3}],m={toc:b},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-tabs"},"Blazor Tabs"),(0,r.kt)("p",null,"Documentation and examples for using Blazor Bootstrap Tabs components."),(0,r.kt)(o.ZP,{mdxType:"CarbonAd"}),(0,r.kt)("h2",{id:"tabs-parameters"},"Tabs Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EnableFadeEffect"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the tabs fade effect."),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NavStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NavStyle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the nav style."),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NavStyle.Tabs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"tabs-methods"},"Tabs Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"InitializeRecentTab(bool showTab)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initializes the most recently added tab, optionally displaying it."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.11.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ShowFirstTabAsync()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the first tab and show its associated pane."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ShowLastTabAsync()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the last tab and show its associated pane."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ShowTabByIndexAsync(int tabIndex)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the tab by index and show its associated pane."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ShowTabByNameAsync(string tabName)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the tab by name and show its associated pane."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"tabs-callback-events"},"Tabs Callback Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnHidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fires after a new tab is shown (and thus the previous active tab is hidden)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnHiding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnShowing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fires on tab show, but before the new tab has been shown."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnShown"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fires on tab show after a tab has been shown."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"tab-parameters"},"Tab Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside the tab."),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the disabled."),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IsActive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the active tab."),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the tab name."),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the tab title."),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TitleTemplate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the tab title template."),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Either ",(0,r.kt)("strong",{parentName:"p"},"Title")," or ",(0,r.kt)("strong",{parentName:"p"},"TitleTemplate")," is required.")),(0,r.kt)("h2",{id:"tab-callback-events"},"Tab Callback Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnClick"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fires when the user clicks the corresponding tab button and the tab is displayed."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.11.0")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"tabs"},"Tabs"),(0,r.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Blazor Tabs Component - Examples"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tabs>\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#examples"},"See demo here.")),(0,r.kt)("h3",{id:"fade-effect"},"Fade effect"),(0,r.kt)("p",null,"To create a fade-in effect for tabs, add the ",(0,r.kt)("inlineCode",{parentName:"p"},'EnableFadeEffect="true"')," parameter. Additionally, set the ",(0,r.kt)("inlineCode",{parentName:"p"},'IsActive="true"')," parameter on the first tab pane to display its content initially."),(0,r.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Blazor Tabs Component - Fade effect"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1, 2} showLineNumbers","{1,":!0,"2}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#fade-effect"},"See demo here.")),(0,r.kt)("h3",{id:"title-with-icon"},"Title with icon"),(0,r.kt)("p",null,"To customize the tab title, use the ",(0,r.kt)("strong",{parentName:"p"},"TitleTemplate")," parameter, as demonstrated in the following example."),(0,r.kt)("img",{src:"https://i.imgur.com/KelXx6Z.png",alt:"Blazor Tabs Component - Title with icon"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-5,13-15,23-25} showLineNumbers","{3-5,13-15,23-25}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab IsActive="true">\n        <TitleTemplate>\n            <Icon Name="IconName.HouseFill" /> Home\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PersonFill" /> Profile\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PhoneFill" /> Contact\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#title-with-icon"},"See demo here.")),(0,r.kt)("h3",{id:"disable-tab"},"Disable Tab"),(0,r.kt)("p",null,"Disable specific tabs by adding ",(0,r.kt)("inlineCode",{parentName:"p"},'Disabled="true"')," parameter."),(0,r.kt)("img",{src:"https://i.imgur.com/TCG6gCz.png",alt:"Blazor Tabs Component - Disable Tab"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{16} showLineNumbers","{16}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Projects" Disabled="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Projects tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#disable-tab"},"See demo here.")),(0,r.kt)("h3",{id:"pills"},"Pills"),(0,r.kt)("p",null,"To transform the tabs into pills, use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},'NavStyle="NavStyle.Pills"'),"."),(0,r.kt)("img",{src:"https://i.imgur.com/IyRJ0PS.png",alt:"Blazor Tabs Component - Pills"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true" NavStyle="NavStyle.Pills">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#pills"},"See demo here.")),(0,r.kt)("h3",{id:"underline"},"Underline"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},'NavStyle="NavStyle.Underline"')," parameter to change the tabs to an underlined style."),(0,r.kt)("img",{src:"https://i.imgur.com/acZh4rq.png",alt:"Blazor Tabs Component - Underline"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true" NavStyle="NavStyle.Underline">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#underline"},"See demo here.")),(0,r.kt)("h3",{id:"vertical"},"Vertical"),(0,r.kt)("p",null,"Display your tabs vertically by setting the ",(0,r.kt)("strong",{parentName:"p"},"NavStyle")," parameter to ",(0,r.kt)("strong",{parentName:"p"},"NavStyle.Vertical"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/aiPVCnk.png",alt:"Blazor Tabs Component - Vertical"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs NavStyle="NavStyle.Vertical">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="About">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>About</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#vertical"},"See demo here.")),(0,r.kt)("h3",{id:"vertical-pills"},"Vertical pills"),(0,r.kt)("img",{src:"https://i.imgur.com/CfPc32q.png",alt:"Blazor Tabs Component - Vertical pills"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs NavStyle="NavStyle.VerticalPills">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="About">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>About</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#vertical-pills"},"See demo here.")),(0,r.kt)("h3",{id:"vertical-underline"},"Vertical underline"),(0,r.kt)("img",{src:"https://i.imgur.com/AVpqmiE.png",alt:"Blazor Tabs Component - Vertical underline"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs NavStyle="NavStyle.VerticalUnderline">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="About">\n        <Content>\n            <p class="ms-3">This is the placeholder content for the <b>About</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#vertical-underline"},"See demo here.")),(0,r.kt)("h3",{id:"activate-individual-tabs"},"Activate individual tabs"),(0,r.kt)("p",null,"You can activate individual tabs in several ways. Use predefined methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ShowFirstTabAsync"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ShowLastTabAsync"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ShowTabByIndexAsync"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ShowTabByNameAsync"),", as shown below."),(0,r.kt)("img",{src:"https://i.imgur.com/NdE5oqH.png",alt:"Blazor Tabs Component - Activate individual tabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tabs @ref="tabs" EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Products" Name="Products">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Products</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="FAQs" Name="FAQ">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>FAQs</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="About">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>About</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n\n<Button Color="ButtonColor.Primary" @onclick="ShowFirstTabAsync">First Tab</Button>\n<Button Color="ButtonColor.Primary" @onclick="ShowSecondTabAsync">Second Tab</Button>\n<Button Color="ButtonColor.Primary" @onclick="ShowThirdTabAsync">Third Tab</Button>\n<Button Color="ButtonColor.Primary" @onclick="ShowProductsTabAsync">Products Tab</Button>\n<Button Color="ButtonColor.Primary" @onclick="ShowFaqsAsync">FAQs Tab</Button>\n<Button Color="ButtonColor.Primary" @onclick="ShowLastTabAsync">Last Tab</Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code{\n    Tabs tabs;\n\n    private async Task ShowFirstTabAsync() => await tabs.ShowFirstTabAsync();\n    private async Task ShowSecondTabAsync() => await tabs.ShowTabByIndexAsync(1);\n    private async Task ShowThirdTabAsync() => await tabs.ShowTabByIndexAsync(2);\n    private async Task ShowProductsTabAsync() => await tabs.ShowTabByNameAsync("Products");\n    private async Task ShowFaqsAsync() => await tabs.ShowTabByNameAsync("FAQ");\n    private async Task ShowLastTabAsync() => await tabs.ShowLastTabAsync();\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#activate-individual-tabs"},"See demo here.")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"When displaying a new tab, the events fire in the following sequence:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"OnHiding")," (on the currently active tab)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"OnShowing")," (on the tab that is about to be displayed)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"OnHidden")," (on the previously active tab, which is the same one that triggered the ",(0,r.kt)("inlineCode",{parentName:"li"},"OnHiding")," event)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"OnShown")," (on the newly activated tab that has just been displayed, which is the same one that triggered the ",(0,r.kt)("inlineCode",{parentName:"li"},"OnShowing")," event)")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If no tab was already active, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnHiding")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OnHidden")," events will not be fired.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#events"},"See demo here.")),(0,r.kt)("h3",{id:"methods-set-active-tab-onafterrender"},"Methods: Set active tab OnAfterRender"),(0,r.kt)("img",{src:"https://i.imgur.com/NdE5oqH.png",alt:"Blazor Tabs Component - Activate individual tabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tabs @ref="tabs">\n    <Tab Title="Home">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Home</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Profile</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>Contact</b> tab.</p>\n        </Content>\n    </Tab>\n    <Tab Title="About">\n        <Content>\n            <p class="mt-3">This is the placeholder content for the <b>About</b> tab.</p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    Tabs tabs = default!;\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            string userDefaultPreferredTab = "Profile"; // Get the value from Service / API\n\n            switch (userDefaultPreferredTab)\n            {\n                case "Home":\n                    await tabs.ShowTabByIndexAsync(0);\n                    break;\n                case "Profile":\n                    await tabs.ShowTabByIndexAsync(1);                    \n                    break;\n                case "Contact":\n                    await tabs.ShowTabByIndexAsync(2);\n                    break;\n                case "About":\n                    await tabs.ShowTabByIndexAsync(3);\n                    break;\n                default:\n                    await tabs.ShowTabByIndexAsync(0);\n                    break;\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#methods-set-active-tab-onafterrender"},"See demo here.")),(0,r.kt)("h3",{id:"tab-onclick"},"Tab: OnClick"),(0,r.kt)("img",{src:"https://i.imgur.com/bJXYlr5.png",alt:"Blazor Tabs Component - Return object on tab switch"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{6} showLineNumbers","{6}":!0,showLineNumbers:!0},'<Tabs>\n    @foreach (var customer in customers)\n    {\n        <Tab Title="@customer.CustomerName"\n             IsActive="selectedCustomer.CustomerId == customer.CustomerId"\n             OnClick="(args) => OnTabClick(args, customer)">\n            <Content>\n                <div class="mt-3">\n                    This is the placeholder content for the <b>@customer.CustomerName</b> tab.\n                </div>\n            </Content>\n        </Tab>\n    }\n</Tabs>\n\n@if (selectedCustomer is not null)\n{\n    <div class="mt-3">Selected customer: <b>@selectedCustomer.CustomerName</b></div>\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{8} showLineNumbers","{8}":!0,showLineNumbers:!0},'@code {\n    private List<Customer> customers = new() { new(1, "Marvin Klein"), new(2, "Vikram Reddy"), new(3, "Bandita PA"), new(4, "Daina JJ") };\n\n    private Customer selectedCustomer = default!;\n\n    protected override void OnInitialized() => selectedCustomer = customers.First();\n\n    private void OnTabClick(TabEventArgs args, Customer customer) => selectedCustomer = customer;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#tab-on-tab-clicked"},"See demo here.")),(0,r.kt)("h3",{id:"dynamic-tabs"},"Dynamic tabs"),(0,r.kt)("img",{src:"https://i.imgur.com/fSTOpxk.png",alt:"Blazor Tabs Component - Dynamic tabs"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2-12} showLineNumbers","{2-12}":!0,showLineNumbers:!0},'<Tabs @ref="tabs">\n    @foreach (var customer in customers)\n    {\n        <Tab Title="@customer.CustomerName"\n             OnClick="(args) => OnTabClick(args, customer)">\n            <Content>\n                <div class="mt-3">\n                    This is the placeholder content for the <b>@customer.CustomerName</b> tab.\n                </div>\n            </Content>\n        </Tab>\n    }\n</Tabs>\n\n@if (selectedCustomer is not null)\n{\n    <div class="mt-3">Selected customer: <b>@selectedCustomer.CustomerName</b></div>\n}\n\n<Button Color="ButtonColor.Success" Class="mt-3" @onclick="AddCustomer">Add customer</Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4,14,16} showLineNumbers","{4,14,16}":!0,showLineNumbers:!0},'@code {\n    Tabs tabs = default!;\n\n    private List<Customer> customers = new() { new(1, "Marvin Klein"), new(2, "Vikram Reddy"), new(3, "Bandita PA"), new(4, "Daina JJ") };\n\n    private Customer selectedCustomer = default!;\n\n    protected override void OnInitialized() => selectedCustomer = customers.Last();\n\n    private void AddCustomer()\n    {\n        var count = customers.Count;\n        var customer = new Customer(count + 1, $"Customer {count + 1}");\n        customers.Add(customer);\n        //selectedCustomer = customer; NOTE: this line is not required\n        tabs.InitializeRecentTab(showTab: true);\n    }\n\n    private void OnTabClick(TabEventArgs args, Customer customer) => selectedCustomer = customer;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tabs#dynamic-tabs"},"See demo here.")))}d.isMDXComponent=!0}}]);