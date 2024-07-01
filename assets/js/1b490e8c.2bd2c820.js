"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[1939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,b=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(b,o(o({ref:t},m),{},{components:a})):r.createElement(b,o({ref:t},m))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Blazor Bootstrap v3.0.0-preview.2",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v3.0.0","blazor","bootstrap","blazorbootstrap","charts","grid","image","polarareachart","sidebar","sidebar2"]},o=void 0,i={permalink:"/blog/2024/07/01/blazorbootstrap-3.0.0-preview.2",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2024-07-01-blazorbootstrap-3.0.0-preview.2.md",source:"@site/blog/2024-07-01-blazorbootstrap-3.0.0-preview.2.md",title:"Blazor Bootstrap v3.0.0-preview.2",description:"We are excited to release version 3.0.0-preview.2, which includes new polar area charts and image components, and other improvements!",date:"2024-07-01T00:00:00.000Z",formattedDate:"July 1, 2024",tags:[{label:"v3.0.0",permalink:"/blog/tags/v-3-0-0"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"bootstrap",permalink:"/blog/tags/bootstrap"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"charts",permalink:"/blog/tags/charts"},{label:"grid",permalink:"/blog/tags/grid"},{label:"image",permalink:"/blog/tags/image"},{label:"polarareachart",permalink:"/blog/tags/polarareachart"},{label:"sidebar",permalink:"/blog/tags/sidebar"},{label:"sidebar2",permalink:"/blog/tags/sidebar-2"}],readingTime:.59,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v3.0.0-preview.2",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v3.0.0","blazor","bootstrap","blazorbootstrap","charts","grid","image","polarareachart","sidebar","sidebar2"]},nextItem:{title:"Blazor Bootstrap v3.0.0-preview.1",permalink:"/blog/2024/06/08/blazorbootstrap-3.0.0-preview.1"}},p={authorsImageUrls:[void 0]},s=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Links",id:"links",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are excited to release version 3.0.0-preview.2, which includes new polar area charts and image components, and other improvements!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/IpMhPwG.png",alt:"image",title:"Blazor Bootstrap: Grid Component - Nested Grid"})),(0,n.kt)("h2",{id:"whats-new"},"What's new"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Polar Area Chart")," component"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Image")," component")),(0,n.kt)("h2",{id:"whats-changed"},"What's changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Grid")," component"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Details View"),(0,n.kt)("li",{parentName:"ul"},"Nested Grid"),(0,n.kt)("li",{parentName:"ul"},"Templates: New ",(0,n.kt)("inlineCode",{parentName:"li"},"GridLoadingTemplate")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"GridEmptyDataTemplate")),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"GridContainerClass")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"GridContainerStyle")," parameters"),(0,n.kt)("li",{parentName:"ul"},"Highlight row when selected and customize the row color and background color"),(0,n.kt)("li",{parentName:"ul"},"All the demos updated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Sidebar")," component"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"Width")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WidthUnit")," parameters"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Sidebar2")," component"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("inlineCode",{parentName:"li"},"Width")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WidthUnit")," parameters"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Demos & Docs updated."))),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly"))))}d.isMDXComponent=!0}}]);