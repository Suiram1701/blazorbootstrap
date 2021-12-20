"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[3694],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={sidebar_label:"Callout",sidebar_position:4},s="Callout",c={unversionedId:"components/callout",id:"components/callout",isDocsHomePage:!1,title:"Callout",description:"Use BlazorBootstrap's callout component. Callouts give users a visual cue that the information is important from the rest of the page.",source:"@site/docs/components/callout.md",sourceDirName:"components",slug:"/components/callout",permalink:"/docs/components/callout",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/callout.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Callout",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Buttons",permalink:"/docs/components/buttons"},next:{title:"Confirm Dialog",permalink:"/docs/components/confirmation-modal"}},u=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Callout - Default",id:"callout---default",children:[],level:3},{value:"Callout - Danger",id:"callout---danger",children:[],level:3},{value:"Callout - Warning",id:"callout---warning",children:[],level:3},{value:"Callout - Info",id:"callout---info",children:[],level:3}],level:2},{value:"Articles",id:"articles",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"callout"},"Callout"),(0,l.kt)("p",null,"Use BlazorBootstrap's callout component. Callouts give users a visual cue that the information is important from the rest of the page."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CalloutColor")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the callout color."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CalloutColor.None"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"callout---default"},"Callout - Default"),(0,l.kt)("img",{src:"https://i.imgur.com/MT3utK8.jpg",alt:"Blazor Bootstrap: Callout Component - Default"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},"<Callout>\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n")),(0,l.kt)("h3",{id:"callout---danger"},"Callout - Danger"),(0,l.kt)("img",{src:"https://i.imgur.com/0EAmQcp.jpg",alt:"Blazor Bootstrap: Callout Component - Danger"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Callout Color="CalloutColor.Danger">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,l.kt)("h3",{id:"callout---warning"},"Callout - Warning"),(0,l.kt)("img",{src:"https://i.imgur.com/e9wy7fg.jpg",alt:"Blazor Bootstrap: Callout Component - Warning"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Callout Color="CalloutColor.Warning">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,l.kt)("h3",{id:"callout---info"},"Callout - Info"),(0,l.kt)("img",{src:"https://i.imgur.com/b4hecTm.jpg",alt:"Blazor Bootstrap: Callout Component - Info"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Callout Color="CalloutColor.Info">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,l.kt)("h2",{id:"articles"},"Articles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vikramlearning.com/dotnet/article/blazor-bootstrap-callout-component-examplesv/88/162"},"Blazor Bootstrap: Callout Component Examples"))))}p.isMDXComponent=!0}}]);