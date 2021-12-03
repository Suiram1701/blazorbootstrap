"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[975],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8517:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_label:"Modal",sidebar_position:3},s="Modal",d={unversionedId:"components/modal",id:"components/modal",isDocsHomePage:!1,title:"Modal",description:"Documentation and examples for BlazorBootstrap Modal.",source:"@site/docs/components/modal.md",sourceDirName:"components",slug:"/components/modal",permalink:"/blazorbootstrap/docs/components/modal",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/modal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Modal",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Buttons",permalink:"/blazorbootstrap/docs/components/buttons"},next:{title:"Offcanvas",permalink:"/blazorbootstrap/docs/components/offcanvas"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"Callback Events",id:"callback-events",children:[],level:2}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal"},"Modal"),(0,o.kt)("p",null,"Documentation and examples for BlazorBootstrap Modal."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Button Color="ButtonColor.Primary" @onclick="(async () => { await ShowModalAsync(); })">Show Modal</Button>\n\n<Modal @ref="modal">\n  ... design your header and body\n</Modal>\n')),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Show"),(0,o.kt)("td",{parentName:"tr",align:null},"Shows an offcanvas.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hide"),(0,o.kt)("td",{parentName:"tr",align:null},"Hides an offcanvas.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"@code {\n\n    private Modal modal;\n\n    private async Task ShowModalAsync()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task HideModalAsync()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,o.kt)("h2",{id:"callback-events"},"Callback Events"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Showing"),(0,o.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the show instance method is called.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shown"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hiding"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is fired immediately when the hide method has been called.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HidePrevented"),(0,o.kt)("td",{parentName:"tr",align:null},"This event is fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option or data-bs-keyboard set to false.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Modal @ref="modal"\n       Showing="OnModalShowingAsync"\n       Shown="OnModalShownAsync"\n       Hiding="OnModalHidingAsync"\n       Hidden="OnModalHiddenAsync"\n       HidePrevented="OnModalHidePreventedAsync">\n  ... design your header and body\n</Modal>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@code {\n\n    private Modal modal;\n\n    private async Task OnModalShowingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Showing"); });\n    }\n\n    private async Task OnModalShownAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Show"); });\n    }\n\n    private async Task OnModalHidingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hiding"); });\n    }\n\n    private async Task OnModalHiddenAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hide"); });\n    }\n\n    private async Task OnModalHidePreventedAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hide Prevented"); });\n    }\n}\n')))}m.isMDXComponent=!0}}]);