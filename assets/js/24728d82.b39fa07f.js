"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[73269],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(e),m=r,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||l;return e?n.createElement(g,i(i({ref:a},p),{},{components:e})):n.createElement(g,i({ref:a},p))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},74404:(t,a,e)=>{e.d(a,{ZP:()=>p});var n=e(87462),r=e(67294),l=e(3905);class i extends r.Component{constructor(t){super(t),this.name=this.props.name||"docsblazorbootstrapcom",this.serve=this.props.serve||"CWYICKJI",this.script=this.props.script||null,this.placement=this.props.placement||"",this.fallback=this.props.fallback||null,this.showFallback=!1}adShowing=()=>null!==document.getElementById(`${this.name} #carbonads`);componentDidMount=()=>{let t=document.createElement("script");t.defer=!!this.script,t.async=!0,t.id=this.script?"":"_carbonads_js",t.type="text/javascript",t.src=this.script||`//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`,t.onerror=()=>{this.showFallback=!0,this.forceUpdate()},t.addEventListener("load",(()=>{this.adShowing||_.invoke(window._carbonads,"refresh")})),document.querySelector(`#${this.name}`).appendChild(t)};render(){return this.showFallback&&this.fallback?this.fallback:r.createElement("div",{id:this.name})}}const o=i,s={toc:[]},d="wrapper";function p(t){let{components:a,...e}=t;return(0,l.kt)(d,(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"CarbonAd"}))}p.isMDXComponent=!0},72661:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=e(87462),r=(e(67294),e(3905)),l=e(74404);const i={title:"Blazor Doughnut Chart",description:"A Blazor Bootstrap donut chart component is a circular chart that shows the proportional values of different categories. It is similar to a pie chart, but the center of the donut chart is hollow. This makes it easier to see the individual values of each category.",image:"https://i.imgur.com/xEPhAsW.png",sidebar_label:"Doughnut Chart",sidebar_position:2},o="Blazor Doughnut Chart",s={unversionedId:"data-visualization/doughnut-chart",id:"data-visualization/doughnut-chart",title:"Blazor Doughnut Chart",description:"A Blazor Bootstrap donut chart component is a circular chart that shows the proportional values of different categories. It is similar to a pie chart, but the center of the donut chart is hollow. This makes it easier to see the individual values of each category.",source:"@site/docs/06-data-visualization/doughnut-chart.mdx",sourceDirName:"06-data-visualization",slug:"/data-visualization/doughnut-chart",permalink:"/data-visualization/doughnut-chart",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/06-data-visualization/doughnut-chart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Blazor Doughnut Chart",description:"A Blazor Bootstrap donut chart component is a circular chart that shows the proportional values of different categories. It is similar to a pie chart, but the center of the donut chart is hollow. This makes it easier to see the individual values of each category.",image:"https://i.imgur.com/xEPhAsW.png",sidebar_label:"Doughnut Chart",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bar Chart",permalink:"/data-visualization/bar-chart"},next:{title:"Line Chart",permalink:"/data-visualization/line-chart"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"ChartData Members",id:"chartdata-members",level:2},{value:"DoughnutChartDataset Members",id:"doughnutchartdataset-members",level:2},{value:"DoughnutChartDatasetDataLabels Members",id:"doughnutchartdatasetdatalabels-members",level:2},{value:"DoughnutChartOptions Members",id:"doughnutchartoptions-members",level:2},{value:"Examples",id:"examples",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Locale",id:"locale",level:3},{value:"Data labels",id:"data-labels",level:3}],u={toc:p},h="wrapper";function m(t){let{components:a,...e}=t;return(0,r.kt)(h,(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-doughnut-chart"},"Blazor Doughnut Chart"),(0,r.kt)("p",null,"A Blazor Bootstrap donut chart component is a circular chart that shows the proportional values of different categories.\nIt is similar to a pie chart, but the center of the donut chart is hollow. This makes it easier to see the individual values of each category."),(0,r.kt)(l.ZP,{mdxType:"CarbonAd"}),(0,r.kt)("img",{src:"https://i.imgur.com/xEPhAsW.png",alt:"Blazor Chart Component - Blazor Doughnut Chart"}),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Height"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets chart height."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets chart width."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Return type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AddDataAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds data to bar chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AddDatasetAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds dataset to bar chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"InitializeAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initialize Bar Chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UpdateAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Bar Chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"chartdata-members"},"ChartData Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Datasets"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<IChartDataset>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Datasets."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Labels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Labels."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"doughnutchartdataset-members"},"DoughnutChartDataset Members"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DoughnutChartDataset")," implements ",(0,r.kt)("strong",{parentName:"p"},"IChartDataset"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BackgroundColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BackgroundColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderWidth."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Clip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the Data."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Datalabels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DoughnutChartDatasetDataLabels")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the data labels"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBackgroundColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBackgroundColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBorderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderWidth."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The label for the dataset which appears in the legend and tooltips."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the chart type."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"doughnutchartdatasetdatalabels-members"},"DoughnutChartDatasetDataLabels Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Anchor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"center")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the anchor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"double?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the border width."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")))),(0,r.kt)("h2",{id:"doughnutchartoptions-members"},"DoughnutChartOptions Members"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DoughnutChartOptions")," implements ",(0,r.kt)("strong",{parentName:"p"},"ChartOptions"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string?")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the locale. By default, the chart is using the default locale of the platform which is running on."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Plugins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DoughnutChartPlugins")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Plugins."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Responsive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Responsive."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/blazor-webassembly"},"getting started guide")," for setting up charts."),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"In the following example, a categorical 12-color palette is used."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For data visualization, you can use the predefined palettes ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalTwelveColors")," for a 12-color palette and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalSixColors")," for a 6-color palette.\nThese palettes offer a range of distinct and visually appealing colors that can be applied to represent different categories or data elements in your visualizations.")),(0,r.kt)("img",{src:"https://i.imgur.com/Q1bBWPQ.png",alt:"Blazor Bootstrap: Doughnut Chart Component - How it works"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<DoughnutChart @ref="doughnutChart" Width="500" Class="mb-5" />\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await RandomizeAsync()"> Randomize </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDatasetAsync()"> Add Dataset </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDataAsync()">Add Data</Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private DoughnutChart doughnutChart = default!;\n    private DoughnutChartOptions doughnutChartOptions = default!;\n    private ChartData chartData = default!;\n    private string[]? backgroundColors;\n\n    private int datasetsCount = 0;\n    private int dataLabelsCount = 0;\n\n    private Random random = new();\n\n    protected override void OnInitialized()\n    {\n        backgroundColors = ColorBuilder.CategoricalTwelveColors;\n        chartData = new ChartData { Labels = GetDefaultDataLabels(4), Datasets = GetDefaultDataSets(1) };\n\n        doughnutChartOptions = new();\n        doughnutChartOptions.Responsive = true;\n        doughnutChartOptions.Plugins.Title.Text = "2022 - Sales";\n        doughnutChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            await doughnutChart.InitializeAsync(chartData, doughnutChartOptions);\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n\n    private async Task RandomizeAsync()\n    {\n        if (chartData is null || chartData.Datasets is null || !chartData.Datasets.Any()) return;\n\n        var newDatasets = new List<IChartDataset>();\n\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is DoughnutChartDataset doughnutChartDataset\n                && doughnutChartDataset is not null\n                && doughnutChartDataset.Data is not null)\n            {\n                var count = doughnutChartDataset.Data.Count;\n\n                var newData = new List<double>();\n                for (var i = 0; i < count; i++)\n                {\n                    newData.Add(random.Next(0, 100));\n                }\n\n                doughnutChartDataset.Data = newData;\n                newDatasets.Add(doughnutChartDataset);\n            }\n        }\n\n        chartData.Datasets = newDatasets;\n\n        await doughnutChart.UpdateAsync(chartData, doughnutChartOptions);\n    }\n\n    private async Task AddDatasetAsync()\n    {\n        if (chartData is null || chartData.Datasets is null) return;\n\n        var chartDataset = GetRandomDoughnutChartDataset();\n        chartData = await doughnutChart.AddDatasetAsync(chartData, chartDataset, doughnutChartOptions);\n    }\n\n    private async Task AddDataAsync()\n    {\n        if (dataLabelsCount >= 12)\n            return;\n\n        if (chartData is null || chartData.Datasets is null)\n            return;\n\n        var data = new List<IChartDatasetData>();\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is DoughnutChartDataset doughnutChartDataset)\n            {\n                data.Add(new DoughnutChartDatasetData(doughnutChartDataset.Label, random.Next(0, 100), backgroundColors![dataLabelsCount]));\n            }\n        }\n\n        chartData = await doughnutChart.AddDataAsync(chartData, GetNextDataLabel(), data);\n\n        dataLabelsCount += 1;\n    }\n\n    #region Data Preparation\n\n    private List<IChartDataset> GetDefaultDataSets(int numberOfDatasets)\n    {\n        var datasets = new List<IChartDataset>();\n\n        for (var index = 0; index < numberOfDatasets; index++)\n        {\n            datasets.Add(GetRandomDoughnutChartDataset());\n        }\n\n        return datasets;\n    }\n\n    private DoughnutChartDataset GetRandomDoughnutChartDataset()\n    {\n        datasetsCount += 1;\n        return new() { Label = $"Team {datasetsCount}", Data = GetRandomData(), BackgroundColor = GetRandomBackgroundColors() };\n    }\n\n    private List<double> GetRandomData()\n    {\n        var data = new List<double>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            data.Add(random.Next(0, 100));\n        }\n\n        return data;\n    }\n\n    private List<string> GetRandomBackgroundColors()\n    {\n        var colors = new List<string>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            colors.Add(backgroundColors![index]);\n        }\n\n        return colors;\n    }\n\n    private List<string> GetDefaultDataLabels(int numberOfLabels)\n    {\n        var labels = new List<string>();\n        for (var index = 0; index < numberOfLabels; index++)\n        {\n            labels.Add(GetNextDataLabel());\n            dataLabelsCount += 1;\n        }\n\n        return labels;\n    }\n\n    private string GetNextDataLabel() => $"Product {dataLabelsCount + 1}";\n\n    private string GetNextDataBackgrounfColor() => backgroundColors![dataLabelsCount];\n\n    #endregion  Data Preparation\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/doughnut-chart#how-it-works"},"See the demo here.")),(0,r.kt)("h3",{id:"locale"},"Locale"),(0,r.kt)("p",null,"By default, the chart is using the default locale of the platform on which it is running.\nIn the following example, you will see the chart in the ",(0,r.kt)("strong",{parentName:"p"},"German")," locale (",(0,r.kt)("strong",{parentName:"p"},"de_DE"),")."),(0,r.kt)("img",{src:"https://i.imgur.com/3qndkPO.png",alt:"Blazor Bootstrap: Doughnut Chart Component - Locale"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@using BlazorBootstrap.Extensions\n@using Color = System.Drawing.Color\n\n<LineChart @ref="lineChart" Width="800" Class="mb-4" />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private LineChart lineChart = default!;\n    private LineChartOptions lineChartOptions = default!;\n    private ChartData chartData = default!;\n\n    protected override void OnInitialized()\n    {\n        var colors = ColorBuilder.CategoricalTwelveColors;\n\n        var labels = new List<string> { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };\n        var datasets = new List<IChartDataset>();\n\n        var dataset1 = new LineChartDataset()\n            {\n                Label = "Windows",\n                Data = new List<double> { 7265791, 5899643, 6317759, 6315641, 5338211, 8496306, 7568556, 8538933, 8274297, 8657298, 7548388, 7764845 },\n                BackgroundColor = new List<string> { colors[0] },\n                BorderColor = new List<string> { colors[0] },\n                BorderWidth = new List<double> { 2 },\n                HoverBorderWidth = new List<double> { 4 },\n                PointBackgroundColor = new List<string> { colors[0] },\n                PointRadius = new List<int> { 0 }, // hide points\n                PointHoverRadius = new List<int> { 4 },\n            };\n        datasets.Add(dataset1);\n\n        var dataset2 = new LineChartDataset()\n            {\n                Label = "macOS",\n                Data = new List<double> { 1809499, 1816642, 2122410, 1809499, 1850793, 1846743, 1954797, 2391313, 1983430, 2469918, 2633303, 2821149 },\n                BackgroundColor = new List<string> { colors[1] },\n                BorderColor = new List<string> { colors[1] },\n                BorderWidth = new List<double> { 2 },\n                HoverBorderWidth = new List<double> { 4 },\n                PointBackgroundColor = new List<string> { colors[1] },\n                PointRadius = new List<int> { 0 }, // hide points\n                PointHoverRadius = new List<int> { 4 },\n            };\n        datasets.Add(dataset2);\n\n        var dataset3 = new LineChartDataset()\n            {\n                Label = "Other",\n                Data = new List<double> { 1081241, 1100363, 1118136, 1073255, 1120315, 1395736, 1488788, 1489466, 1489947, 1414739, 1735811, 1820171 },\n                BackgroundColor = new List<string> { colors[2] },\n                BorderColor = new List<string> { colors[2] },\n                BorderWidth = new List<double> { 2 },\n                HoverBorderWidth = new List<double> { 4 },\n                PointBackgroundColor = new List<string> { colors[2] },\n                PointRadius = new List<int> { 0 }, // hide points\n                PointHoverRadius = new List<int> { 4 },\n            };\n        datasets.Add(dataset3);\n\n        chartData = new ChartData\n            {\n                Labels = labels,\n                Datasets = datasets\n            };\n\n        lineChartOptions = new();\n        lineChartOptions.Locale = "de-DE";\n        lineChartOptions.Responsive = true;\n        lineChartOptions.Interaction = new Interaction { Mode = InteractionMode.Index };\n\n        lineChartOptions.Scales.X.Title.Text = "2019";\n        lineChartOptions.Scales.X.Title.Display = true;\n\n        lineChartOptions.Scales.Y.Title.Text = "Visitors";\n        lineChartOptions.Scales.Y.Title.Display = true;\n\n        lineChartOptions.Plugins.Title.Text = "Operating system";\n        lineChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            await lineChart.InitializeAsync(chartData, lineChartOptions);\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/doughnut-chart#locale"},"See the demo here.")),(0,r.kt)("h3",{id:"data-labels"},"Data labels"),(0,r.kt)("img",{src:"https://i.imgur.com/xEPhAsW.png",alt:"Blazor Bootstrap: Doughnut Chart Component - Data labels"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<DoughnutChart @ref="doughnutChart" Width="500" Class="mb-5" />\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await RandomizeAsync()"> Randomize </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDataAsync()">Add Data</Button>\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{28,97,99,101} showLineNumbers","{28,97,99,101}":!0,showLineNumbers:!0},'@code {\n    private DoughnutChart doughnutChart = default!;\n    private DoughnutChartOptions doughnutChartOptions = default!;\n    private ChartData chartData = default!;\n    private string[]? backgroundColors;\n\n    private int datasetsCount = 0;\n    private int dataLabelsCount = 0;\n\n    private Random random = new();\n\n    protected override void OnInitialized()\n    {\n        backgroundColors = ColorBuilder.CategoricalTwelveColors;\n        chartData = new ChartData { Labels = GetDefaultDataLabels(4), Datasets = GetDefaultDataSets(3) };\n\n        doughnutChartOptions = new();\n        doughnutChartOptions.Responsive = true;\n        doughnutChartOptions.Plugins.Title.Text = "2022 - Sales";\n        doughnutChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            // pass the plugin name to enable the data labels\n            await doughnutChart.InitializeAsync(chartData: chartData, chartOptions: doughnutChartOptions, plugins: new string[] { "ChartDataLabels" });\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n\n    private async Task RandomizeAsync()\n    {\n        if (chartData is null || chartData.Datasets is null || !chartData.Datasets.Any()) return;\n\n        var newDatasets = new List<IChartDataset>();\n\n        var datasetIndex = 0;\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is DoughnutChartDataset doughnutChartDataset\n                && doughnutChartDataset is not null\n                && doughnutChartDataset.Data is not null)\n            {\n                var count = doughnutChartDataset.Data.Count;\n\n                var newData = new List<double>();\n                for (var i = 0; i < count; i++)\n                {\n                    newData.Add(random.Next(0, 100));\n                }\n\n                doughnutChartDataset.Data = newData;\n                newDatasets.Add(doughnutChartDataset);\n            }\n        }\n\n        chartData.Datasets = newDatasets;\n\n        await doughnutChart.UpdateAsync(chartData: chartData, chartOptions: doughnutChartOptions);\n    }\n\n    private async Task AddDataAsync()\n    {\n        if (dataLabelsCount >= 12)\n            return;\n\n        if (chartData is null || chartData.Datasets is null)\n            return;\n\n        var data = new List<IChartDatasetData>();\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is DoughnutChartDataset doughnutChartDataset)\n            {\n                data.Add(new DoughnutChartDatasetData(doughnutChartDataset.Label, random.Next(0, 100), backgroundColors![dataLabelsCount]));\n            }\n        }\n\n        chartData = await doughnutChart.AddDataAsync(chartData, GetNextDataLabel(), data);\n\n        dataLabelsCount += 1;\n    }\n\n    #region Data Preparation\n\n    private List<IChartDataset> GetDefaultDataSets(int numberOfDatasets)\n    {\n        var datasets = new List<IChartDataset>();\n\n        for (var index = 0; index < numberOfDatasets; index++)\n        {\n            var dataset = GetRandomDoughnutChartDataset();\n\n            if (index == 0)\n                dataset.Datalabels.Anchor = "end";\n            else if (index == numberOfDatasets - 1)\n                dataset.Datalabels.Anchor = "start";\n            else\n                dataset.Datalabels.Anchor = "center";\n\n            datasets.Add(dataset);\n        }\n\n        return datasets;\n    }\n\n    private DoughnutChartDataset GetRandomDoughnutChartDataset()\n    {\n        datasetsCount += 1;\n        return new() { Label = $"Team {datasetsCount}", Data = GetRandomData(), BackgroundColor = GetRandomBackgroundColors() };\n    }\n\n    private List<double> GetRandomData()\n    {\n        var data = new List<double>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            data.Add(random.Next(0, 100));\n        }\n\n        return data;\n    }\n\n    private List<string> GetRandomBackgroundColors()\n    {\n        var colors = new List<string>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            colors.Add(backgroundColors![index]);\n        }\n\n        return colors;\n    }\n\n    private List<string> GetDefaultDataLabels(int numberOfLabels)\n    {\n        var labels = new List<string>();\n        for (var index = 0; index < numberOfLabels; index++)\n        {\n            labels.Add(GetNextDataLabel());\n            dataLabelsCount += 1;\n        }\n\n        return labels;\n    }\n\n    private string GetNextDataLabel() => $"Product {dataLabelsCount + 1}";\n\n    private string GetNextDataBackgrounfColor() => backgroundColors![dataLabelsCount];\n\n    #endregion  Data Preparation\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/doughnut-chart#data-labels"},"See the demo here.")))}m.isMDXComponent=!0}}]);