"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5187],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),h=d(a),k=n,g=h["".concat(p,".").concat(k)]||h[k]||m[k]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97119:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Blazor Pie Chart Components",description:"Blazor Bootstrap charts are well-designed chart components on top of Chart.js to visualize data. It contains a rich UI gallery of charts that cater to all charting scenarios. Its high performance helps render large amounts of data quickly.",image:"https://i.imgur.com/ATtFiUZ.png",sidebar_label:"Pie Chart",sidebar_position:4},i="Blazor Charts",o={unversionedId:"data-visualization/pie-chart",id:"data-visualization/pie-chart",title:"Blazor Pie Chart Components",description:"Blazor Bootstrap charts are well-designed chart components on top of Chart.js to visualize data. It contains a rich UI gallery of charts that cater to all charting scenarios. Its high performance helps render large amounts of data quickly.",source:"@site/docs/06-data-visualization/pie-chart.md",sourceDirName:"06-data-visualization",slug:"/data-visualization/pie-chart",permalink:"/docs/data-visualization/pie-chart",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/06-data-visualization/pie-chart.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Blazor Pie Chart Components",description:"Blazor Bootstrap charts are well-designed chart components on top of Chart.js to visualize data. It contains a rich UI gallery of charts that cater to all charting scenarios. Its high performance helps render large amounts of data quickly.",image:"https://i.imgur.com/ATtFiUZ.png",sidebar_label:"Pie Chart",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Line Chart",permalink:"/docs/data-visualization/line-chart"},next:{title:"Modal Service",permalink:"/docs/services/modal"}},p={},d=[{value:"Blazor Pie Chart",id:"blazor-pie-chart",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"ChartData Members",id:"chartdata-members",level:2},{value:"PieChartDataset Members",id:"piechartdataset-members",level:2},{value:"PieChartOptions Members",id:"piechartoptions-members",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blazor-charts"},"Blazor Charts"),(0,n.kt)("p",null,"Blazor Bootstrap charts are well-designed chart components on top of Chart.js to visualize data. It contains a rich UI gallery of charts that cater to all charting scenarios. Its high performance helps render large amounts of data quickly."),(0,n.kt)("h2",{id:"blazor-pie-chart"},"Blazor Pie Chart"),(0,n.kt)("img",{src:"https://i.imgur.com/n5TiPtH.png",alt:"Blazor Chart Component - Blazor Pie Chart"}),(0,n.kt)("br",null),(0,n.kt)("a",{href:"https://demos.blazorbootstrap.com/charts#pie-chart"},"See blazor pie chart demo here."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Height"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets chart height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Width"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets chart width.")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InitializeAsync(",(0,n.kt)("strong",{parentName:"td"},"ChartData")," chartData, ",(0,n.kt)("strong",{parentName:"td"},"IChartOptions")," chartOptions)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initialize Bar Chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ResizeAsync(",(0,n.kt)("strong",{parentName:"td"},"int")," width, ",(0,n.kt)("strong",{parentName:"td"},"int")," height)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resize the chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UpdateAsync(",(0,n.kt)("strong",{parentName:"td"},"ChartData")," chartData, ",(0,n.kt)("strong",{parentName:"td"},"IChartOptions")," chartOptions)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update Bar Chart.")))),(0,n.kt)("h2",{id:"chartdata-members"},"ChartData Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Labels"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Datasets"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<IChartDataset>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Datasets.")))),(0,n.kt)("h2",{id:"piechartdataset-members"},"PieChartDataset Members"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"PieChartDataset")," implements ",(0,n.kt)("strong",{parentName:"p"},"IChartDataset"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BackgroundColor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderColor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderWidth.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the Data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBackgroundColor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderColor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderWidth.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the chart type.")))),(0,n.kt)("h2",{id:"piechartoptions-members"},"PieChartOptions Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Responsive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Responsive.")))))}m.isMDXComponent=!0}}]);