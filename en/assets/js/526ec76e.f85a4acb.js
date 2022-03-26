"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76197],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73597:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});t(93106);var r=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={title:"Prerender"},l=void 0,d={unversionedId:"prerender",id:"prerender",title:"Prerender",description:"Prerender is a technology provided by Taro CLI to improve the rendering speed of page initialization on the mini program side. It is implemented on the same principle as Server-side Rendering: the initialized state of the page is rendered directly as a stateless (dataless) wxml, and the rendering is performed before the framework and business logic run process. The initial rendering of a Prerender page is usually the same or faster than a native mini program.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/prerender.md",sourceDirName:".",slug:"/prerender",permalink:"/taro-docs/en/docs/next/prerender",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/prerender.md",tags:[],version:"current",frontMatter:{title:"Prerender"},sidebar:"docs",previous:{title:"Mini Program Performance Optimization Guide",permalink:"/taro-docs/en/docs/next/optimized"},next:{title:"Virtual List",permalink:"/taro-docs/en/docs/next/virtual-list"}},s={},p=[{value:"Why Prerender?",id:"why-prerender",level:2},{value:"Using Prerender",id:"using-prerender",level:2},{value:"Advanced Instructions And Use",id:"advanced-instructions-and-use",level:2},{value:"<code>PRERENDER</code> Global Variable",id:"prerender-global-variable",level:3},{value:"disablePrerender",id:"disableprerender",level:3},{value:"Custom Rendering",id:"custom-rendering",level:3},{value:"Reduce the number of pre-rendered wxml",id:"reduce-the-number-of-pre-rendered-wxml",level:3}],u={toc:p};function m(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Prerender is a technology provided by Taro CLI to improve the rendering speed of page initialization on the mini program side. It is implemented on the same principle as Server-side Rendering: the initialized state of the page is rendered directly as a stateless (dataless) wxml, and the rendering is performed before the framework and business logic run process. The initial rendering of a Prerender page is usually the same or faster than a native mini program."),(0,r.kt)("h2",a({},{id:"why-prerender"}),"Why Prerender?"),(0,r.kt)("p",null,"Taro Next goes through the following steps when a page is loaded."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the framework (React/Nerv/Vue) renders the page into the virtual DOM"),(0,r.kt)("li",{parentName:"ol"},"Taro runtime serializes the page's virtual DOM into renderable data and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"setData()")," to drive page rendering"),(0,r.kt)("li",{parentName:"ol"},"the mini program itself renders the serialized data")),(0,r.kt)("p",null,"Compared to native mini program or compiled mini program frameworks, steps 1 and 2 are redundant. If there are no performance issues with the business logic code of the page, most of the performance bottlenecks are in ",(0,r.kt)("inlineCode",{parentName:"p"},"setData()")," in step 2: since the initial rendering is the entire virtual DOM tree of the page, the amount of data is relatively large, so ",(0,r.kt)("inlineCode",{parentName:"p"},"setData()")," needs to pass a relatively large amount of data, resulting in a white screen time when initializing the page. This usually happens when the number of wxml nodes for initial rendering of a page is large or when the user's machine performance is low."),(0,r.kt)("h2",a({},{id:"using-prerender"}),"Using Prerender"),(0,r.kt)("p",null,"Using Prerender is very simple, you can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," folder in the root of your project and change any of the three ","[project configurations]"," ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"dev.js"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"prod.js")," depending on your project (. /config.md), the Taro CLI will automatically start prerender at build time based on your configuration: ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"dev.js"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"prod.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js \u6216 /config/dev.js \u6216 /config/prod.js "',title:'"/config/index.js',"\u6216":!0,"/config/dev.js":!0,"/config/prod.js":!0,'"':!0}),"const config = {\n  ...\n  mini: {\n    prerender: {\n      match: 'pages/shop/**', // All pages starting with `pages/shop/` participate in prerender\n      include: ['pages/any/way/index'], // `pages/any/way/index` will include prerender\n      exclude: ['pages/shop/index/index'] // `pages/shop/index/index` will not prerender\n    }\n  }\n};\n\nmodule.exports = config\n")),(0,r.kt)("p",null,"The complete Prerender configuration can be found in the following table: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Required"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"match"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")," ",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"glob string or an array of glob strings, pages that match this parameter will be added to prerender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"include"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Array<PageConfig>")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Page paths that exactly match the string in the array are added to prerender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"exclude"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\bPage paths that are identical to the string in the array ",(0,r.kt)("strong",{parentName:"td"},"will not")," be added to prerender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"mock"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Global variables running in the prerender environment, with the key name as the variable name and the key value as the variable value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"console"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Whether the ",(0,r.kt)("inlineCode",{parentName:"td"},"console")," print statement is executed in the prerender process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"transformData"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Custom virtual DOM tree processing function, the return value of the function will be used as an argument to ",(0,r.kt)("inlineCode",{parentName:"td"},"transformXML"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"transformXML"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NO"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Custom XML processing function that returns the wxml to be rendered by the end of the Taro runtime initialization")))),(0,r.kt)("p",null,"Types useful in the table."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),'// PageConfig is the page parameter configured by the developer in prerender.includes\ninterface PageConfig {\n  path: string // page path\n  params: Record<string, unknown> // page\'s routing parameters. Corresponding to `getCurrentInstance().router.params`\n}\n\n// DOM tree data, which Taro renders dynamically by traversing it\ninterface MiniData {\n  ["cn" /* ChildNodes */]: MiniData[]\n  ["nn" /* NodeName */]: string\n  ["cl" /* Class */]: string\n  ["st" /* Style */]: string\n  ["v" /* NodeValue */]: string\n  uid: string\n  [prop: string]: unknown\n}\n\ntype transformData = (data: MiniData, config: PageConfig) => MiniData\n\ntype transformXML = (\n  data: MiniData, \n  config: PageConfig,\n  xml: string //xml strings that have already been processed by the built-in xml conversion function\n) => string\n')),(0,r.kt)("p",null,"All configuration options for Prerender are optional, in most cases you only need to focus on ",(0,r.kt)("inlineCode",{parentName:"p"},"match"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," are filled in at least once to match a pre-rendered page, all three can coexist, and when there is a match conflict the priority is ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," < ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," < ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude"),"."),(0,r.kt)("p",null,"As with all technologies, Prerender is not a silver bullet, and the following trade-offs or limitations apply when using Prerender."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The size of the page packing will increase. prerender is essentially a space-for-time technique, and the amount of increase in size depends on the amount of pre-rendered wxml."),(0,r.kt)("li",{parentName:"ul"},"Until the real DOM and events are mounted by the Taro runtime (a process known as ",(0,r.kt)("inlineCode",{parentName:"li"},"hydrate")," in server-side rendering), the pre-rendered pages do not do anything accordingly."),(0,r.kt)("li",{parentName:"ul"},"Prerender does not perform lifecycles such as ",(0,r.kt)("inlineCode",{parentName:"li"},"componentDidMount()"),"(React)/",(0,r.kt)("inlineCode",{parentName:"li"},"ready()"),"(Vue), in line with server-side rendering. If there is a need to process data, you can advance the lifecycle to ",(0,r.kt)("inlineCode",{parentName:"li"},"static getDerivedStateFromProps()"),"(React) or ",(0,r.kt)("inlineCode",{parentName:"li"},"created()"),"(Vue).")),(0,r.kt)("h2",a({},{id:"advanced-instructions-and-use"}),"Advanced Instructions And Use"),(0,r.kt)("h3",a({},{id:"prerender-global-variable"}),(0,r.kt)("inlineCode",{parentName:"h3"},"PRERENDER")," Global Variable"),(0,r.kt)("p",null,"There is a global variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"PRERENDER")," in the pre-rendering container, which has the value ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". You can write separate business logic for the pre-rendering period by determining whether this variable exists or not: "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"if (typeof PRERENDER !== 'undefined') { // The following code will only be executed in pre-rendering\n  // do something\n}\n")),(0,r.kt)("h3",a({},{id:"disableprerender"}),"disablePrerender"),(0,r.kt)("p",null,"For any native component that does not need to be displayed in Prerender time, you can set the component's ",(0,r.kt)("inlineCode",{parentName:"p"},"disablePrerender")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and neither the component nor its descendants will be rendered as wxml strings."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'/* The component with id test and its descendants are not displayed during pre-rendering */\n<View id="test" disablePrerender>\n  ...children\n</View>\n')),(0,r.kt)("h3",a({},{id:"custom-rendering"}),"Custom Rendering"),(0,r.kt)("p",null,"When the default pre-rendered results do not meet your expectations, Taro provides two configuration items to customize the pre-rendered content."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transformData()")," in the Prerender configuration operates on the virtual DOM to be rendered."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"const config = {\n  ...\n  mini: {\n    prerender: {\n      match: 'pages/**',\n      tranformData (data, { path }) {\n        if (path === 'pages/video/index') {\n          // If the page is 'page/video/index' the page is only pre-rendered with a video component\n          // For the data structure of data, see the data type signature above\n          data.nn = 'video'\n          data.cn = []\n          data.src = 'https://v.qq.com/iframe/player.html?vid=y08180lrvth&tiny=0&auto=0'\n          return data\n        }\n\n        return data\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transformXML()")," in the Prerender configuration allows you to customize the pre-rendered output wxml."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"const config = {\n  ...\n  mini: {\n    prerender: {\n      match: 'pages/**',\n      tranformXML (data, { path }, xml) {\n        if (path === 'pages/video/index') {\n          // If the page is 'page/video/index' the page will only pre-render a video component\n          return `<video src=\"https://v.qq.com/iframe/player.html?vid=y08180lrvth&tiny=0&auto=0\" />`\n        }\n\n        return xml\n      }\n    }\n  }\n}\n")),(0,r.kt)("h3",a({},{id:"reduce-the-number-of-pre-rendered-wxml"}),"Reduce the number of pre-rendered wxml"),(0,r.kt)("p",null,"In general, users only need to see the first page, but in fact the initial rendering of the page we build the business logic may render all the content of the page, and the reason for the slow initial rendering of Taro is that the amount of data passed for the first time is too large, so we can adjust our business logic to achieve the purpose of rendering only the first screen."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"class SomePage extends Component {\n  state = {\n    mounted: false\n  }\n\n  componentDidMount () {\n    // Wait for the component to load, render the first screen first before we render the rest to reduce the amount of data for the first rendering\n    // When mounted is true, the DOM trees of CompA, B, and C will only be rendered as data in the mini program\n    // Note that we need to do this in the `componentDidMount()` cycle (which corresponds to Vue's `ready()`), earlier in the lifecycle `setState()` will be merged and updated with the first rendered data\n    // Use nextTick to ensure that this setState is not merged with the first render\n    Taro.nextTick(() => {\n      this.setState({\n        mounted: true\n      })\n    })\n  }\n\n  render () {\n    return <View>\n      <FirstScreen /> /* Suppose we know that this component will take up all of the user's screen */\n      {this.state.mounted && <React.Fragment> /* CompA, B, C it does not appear in the first screen at first */\n        <CompA />\n        <CompB />\n        <CompC />\n      </React.Fragment>}\n    </View>\n  }\n}\n")),(0,r.kt)("p",null,"In addition to speeding up first screen rendering and ",(0,r.kt)("inlineCode",{parentName:"p"},"hydrate"),", this optimization also reduces the added wxml volume of Prerender. When your optimizations are thorough enough, you will find that Prerender is not needed in most cases."))}m.isMDXComponent=!0}}]);