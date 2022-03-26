"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23621],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42674:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(93106);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel"},{hidden:t,className:n}),e)}},14186:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(93106),o=n(98456),r=n(16454),i=n(26679),l="tabItem_uJot";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function p(e){var t,n;const{lazy:o,block:p,defaultValue:c,values:m,groupId:u,className:d}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,r.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===c?c:null!==(g=null!=c?c:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:null===(n=h[0])||void 0===n?void 0:n.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,r.UB)(),[w,T]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=u){const e=b[u];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==w&&(C(t),T(a),null!=u&&y(u,a))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]||N[N.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},d)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",s({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>N.push(e),onKeyDown:O,onFocus:x,onClick:x},n,{className:(0,i.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),o?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return a.createElement(p,s({key:String(t)},e))}},28755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});n(93106);var a=n(79874),o=n(14186),r=n(42674);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Overview"},p=void 0,c={unversionedId:"vue-overall",id:"version-3.x/vue-overall",title:"Overview",description:"Taro 3 supports running Web frameworks directly on each platform, and developers are using real frameworks like React and Vue.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/vue-overall.mdx",sourceDirName:".",slug:"/vue-overall",permalink:"/taro-docs/en/docs/vue-overall",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/vue-overall.mdx",tags:[],version:"3.x",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"PReact",permalink:"/taro-docs/en/docs/preact"},next:{title:"Entry Component",permalink:"/taro-docs/en/docs/vue-entry"}},m={},u=[{value:"Entry components and page components",id:"entry-components-and-page-components",level:2},{value:"Built-in Components",id:"built-in-components",level:2},{value:"Taro Specifications",id:"taro-specifications",level:3},{value:"Example Code",id:"example-code",level:3},{value:"Events",id:"events",level:2},{value:"Taro Specifications",id:"taro-specifications-1",level:3},{value:"Example Code",id:"example-code-1",level:3},{value:"Taro 3 event mechanism on the mini program",id:"taro-3-event-mechanism-on-the-mini-program",level:3},{value:"Blocking roll-through",id:"blocking-roll-through",level:3},{value:"\u4e00\u3001Style",id:"\u4e00style",level:4},{value:"\u4e8c\u3001catchMove",id:"\u4e8ccatchmove",level:4},{value:"dataset",id:"dataset",level:3},{value:"General",id:"general",level:4},{value:"dataset",id:"dataset-1",level:4},{value:"Template Properties",id:"template-properties",level:4},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Vue Lifecycle",id:"vue-lifecycle",level:3},{value:"1. beforeMount ()",id:"1-beforemount-",level:5},{value:"2. mounted ()",id:"2-mounted-",level:5},{value:"Methods for mini program pages",id:"methods-for-mini-program-pages",level:3},{value:"Ref",id:"ref",level:2},{value:"Vue Ref",id:"vue-ref",level:3},{value:"Get Mini Program DOM",id:"get-mini-program-dom",level:3},{value:"v-html",id:"v-html",level:2},{value:"Compatible with <code>&lt;transition&gt;</code>",id:"compatible-with-transition",level:2},{value:"Other Limitations",id:"other-limitations",level:2}],d={toc:u};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro 3 supports running Web frameworks directly on each platform, and developers are using real frameworks like React and Vue."),(0,a.kt)("p",null,"However, Taro follows the WeChat mini program specification in terms of components, APIs, routing and other specifications, so there are some differences between using React in Taro and the familiar web side for developers, which will be listed in detail below."),(0,a.kt)("h2",i({},{id:"entry-components-and-page-components"}),"Entry components and page components"),(0,a.kt)("p",null,"Because Taro follows the routing specification for mini program, it introduces ","[entry component]","(. /vue-entry) and ","[page component]","(. /vue-page) concepts, corresponding to the mini program specification's entry component ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and page component ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),", respectively."),(0,a.kt)("p",null,"A Taro application consists of an entry component and at least one page component."),(0,a.kt)("h2",i({},{id:"built-in-components"}),"Built-in Components"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since Taro v3.3+, development with H5 tags is supported, see ",(0,a.kt)("a",i({parentName:"p"},{href:"use-h5"}),"Using HTML tags")," for details.")),(0,a.kt)("p",null,"Development in Taro can be done using built-in components of the mini program specification, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<view>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<text>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>"),", etc."),(0,a.kt)("h3",i({},{id:"taro-specifications"}),"Taro Specifications"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"component names follow the ",(0,a.kt)("strong",{parentName:"li"},"mini program specification")," (all lowercase, kebab-case)."),(0,a.kt)("li",{parentName:"ol"},"component properties follow the ",(0,a.kt)("strong",{parentName:"li"},"mini program specification")," (all lowercase, kebab-case)."),(0,a.kt)("li",{parentName:"ol"},"component properties with ",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean")," values need to be explicitly bound to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", abbreviations are not supported."),(0,a.kt)("li",{parentName:"ol"},"See the next section for the event specification: ","[component-events]","(. /vue-overall#%E4%BA%8B%E4%BB%B6).")),(0,a.kt)("h3",i({},{id:"example-code"}),"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <swiper\n    class="box"\n    :autoplay="true"\n    :interval="interval"\n    indicator-color="#999"\n    @tap="handleTap"\n    @animationfinish="handleAnimationFinish"\n  >\n    <swiper-item>\n      <view class="text">1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class="text">2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class="text">3</view>\n    </swiper-item>\n  </swiper>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        interval: 1000\n      }\n    },\n    methods: {\n      handleTap () {console.log(\'tap\')},\n      handleAnimationFinish () {console.log(\'finish\')}\n    }\n  }\n<\/script>\n')),(0,a.kt)("p",null,"Note: If a new component or property of a component added to a platform is not yet supported by Taro, you can submit Issues and we will fix it as soon as possible."),(0,a.kt)("h2",i({},{id:"events"}),"Events"),(0,a.kt)("p",null,"Events are the same as on the web side. In the event callback function, the first argument is the event object, and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"stopPropagation")," in the callback will stop the bubbling."),(0,a.kt)("h3",i({},{id:"taro-specifications-1"}),"Taro Specifications"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"@")," modifier (or ",(0,a.kt)("inlineCode",{parentName:"li"},"v-on:"),", see ",(0,a.kt)("a",i({parentName:"li"},{href:"https://cn.vuejs.org/v2/guide/events.html"}),"Vue documentation")," for more usage) instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"bind")," in the mini program event name (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"on")," in the Alipay mini program event name)."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"@tap")," for click events in Vue.")),(0,a.kt)("h3",i({},{id:"example-code-1"}),"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <! -- Note that the click event in Vue needs to be bound to @tap, --\x3e\n  <! -- The rest of the mini program event names replace bind with @ which is the Taro event name (except for the Alipay mini program which starts with on and needs to replace on with @) --\x3e\n <scroll-view\n    style="height: 300px"\n    :scroll-y="true"\n    @tap="handleClick"\n    @scroll="handleScroll"\n    @scrolltoupper="handleScrollToUpper"\n  >\n    <view style="height: 200px">1</view>\n    <view style="height: 200px">2</view>\n    <view style="height: 200px">3</view>\n  </scroll-view>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleClick(e) {console.log(\'handleClick\')\n      e.stopPropagation()\n    },\n    handleScroll () {console.log(\'handleScroll\')},\n    handleScrollToUpper () {console.log(\'handleScrollToUpper\')}\n  }\n}\n<\/script>\n')),(0,a.kt)("h3",i({},{id:"taro-3-event-mechanism-on-the-mini-program"}),"Taro 3 event mechanism on the mini program"),(0,a.kt)("p",null,"In Taro 1 & 2, Taro determines whether the events bound in the mini program template are in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," depending on whether the developer uses ",(0,a.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()"),". So event bubbling is controlled by the mini program."),(0,a.kt)("p",null,"But in Taro 3, we implement a system of events in the mini program logic layer, including event triggering and event bubbling. The events bound in the mini program template are in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("p",null,"In general, this mini program event system implemented in the logic layer works fine, and the event callbacks can trigger, bubble, and stop bubbling correctly."),(0,a.kt)("p",null,"However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"catchtouchmove")," event bound in the mini program template prevents the callback function from bubbling and also prevents the view from ",(0,a.kt)("strong",{parentName:"p"},"scrolling through"),", which Taro's event system cannot do."),(0,a.kt)("h3",i({},{id:"blocking-roll-through"}),"Blocking roll-through"),(0,a.kt)("p",null,"In the previous point, we introduced the event mechanism of Taro 3. Since events are bound as ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),", you cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()")," to prevent scroll-through."),(0,a.kt)("p",null,"Two solutions are summarized for rolling penetrations."),(0,a.kt)("h4",i({},{id:"\u4e00style"}),"\u4e00\u3001Style"),(0,a.kt)("p",null,"Resolved using style: ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/5984#issuecomment-614502302"}),"Disable scrolling of penetrated components"),"\u3002"),(0,a.kt)("p",null,"This is also the most recommended practice."),(0,a.kt)("h4",i({},{id:"\u4e8ccatchmove"}),"\u4e8c\u3001catchMove"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro version 3.0.21 started to support")),(0,a.kt)("p",null,"But the map component itself is scrollable, even if its width and height are fixed. So the first approach can't handle the scrolling events that bubble up to the map component."),(0,a.kt)("p",null,"This is where you can add the ",(0,a.kt)("strong",{parentName:"p"},"catch-move")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),'// This View component will bind the catchtouchmove event instead of bindtouchmove.\n<view :catch-move="true"></view>\n')),(0,a.kt)("h3",i({},{id:"dataset"}),"dataset"),(0,a.kt)("h4",i({},{id:"general"}),"General"),(0,a.kt)("p",null,"We recommend thinking in terms of DSL features of Vue and React, since ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," is a feature of mini program."),(0,a.kt)("h4",i({},{id:"dataset-1"}),"dataset"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," is a special template property that allows you to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," data in the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," object of an event callback."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This is supported by Taro"),", and can be obtained in the event callback object via ",(0,a.kt)("inlineCode",{parentName:"p"},"event.target.dataset")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"event.currentTarget.dataset"),"."),(0,a.kt)("h4",i({},{id:"template-properties"}),"Template Properties"),(0,a.kt)("p",null,"As mentioned in the previous point, Taro's simulation of the mini program ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," is implemented in the ",(0,a.kt)("strong",{parentName:"p"},"logic layer")," of the mini program. ",(0,a.kt)("strong",{parentName:"p"},"There is no real setting of this property in the template"),"."),(0,a.kt)("p",null,"But when there are APIs in the mini program (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"createIntersectionObserver"),") that get to the node of the page, they don't get it because there is no actual corresponding property on the node."),(0,a.kt)("p",null,"This is the time to consider using ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-inject"}),"taro-plugin-inject")," plugin to inject some generic attributes, such as"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    ['@tarojs/plugin-inject', {\n      components: {\n        View: {\n          'data-index': \"'dataIndex'\"\n        },\n        ScrollView: {\n          'data-observe': \"'dataObserve'\",\n        }\n      }\n    }]\n  ]\n}\n")),(0,a.kt)("h2",i({},{id:"lifecycle"}),"Lifecycle"),(0,a.kt)("p",null,"Taro 3 implements a Web standard BOM and DOM API on the mini program logic layer, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"document.appendChild")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document.removeChild")," APIs used by Vue are actually emulated by Taro, with the end effect of rendering Vue's virtual DOM tree as a Taro The final effect is to render Vue's virtual DOM tree as a Taro-simulated Web standard DOM tree."),(0,a.kt)("p",null,"Therefore, the lifecycle trigger timing in Taro3 Vue is a bit different from what we usually understand in web development."),(0,a.kt)("h3",i({},{id:"vue-lifecycle"}),"Vue Lifecycle"),(0,a.kt)("p",null,"The lifecycle methods of Vue components are supported in Taro."),(0,a.kt)("p",null,"Trigger timing:"),(0,a.kt)("h5",i({},{id:"1-beforemount-"}),"1. beforeMount ()"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",i({parentName:"p"},{href:"vue-page#onload-options"}),"onLoad"),", the page component renders to Taro's virtual DOM before triggering."),(0,a.kt)("h5",i({},{id:"2-mounted-"}),"2. mounted ()"),(0,a.kt)("p",null,"Triggered after the page component is rendered to Taro's virtual DOM."),(0,a.kt)("p",null,"At this point, Taro's virtual DOM can be accessed (using Vue ref, document.getElementById, etc.) and manipulation of it (setting the style of the DOM, etc.) is supported."),(0,a.kt)("p",null,"However, this does not mean that Taro's virtual DOM data has been transferred from the logical layer ",(0,a.kt)("inlineCode",{parentName:"p"},"setData")," to the view layer. So at this point ",(0,a.kt)("strong",{parentName:"p"},"it is not possible to get the DOM nodes of the rendering layer of the mini program by methods like ",(0,a.kt)("inlineCode",{parentName:"strong"},"createSelectorQuery"),".")," Only in the ",(0,a.kt)("a",i({parentName:"p"},{href:"vue-page#onready-"}),"onReady")," lifecycle."),(0,a.kt)("h3",i({},{id:"methods-for-mini-program-pages"}),"Methods for mini program pages"),(0,a.kt)("p",null,"The methods in the mini program page will also work in Taro's page: write the method of the same name in the Vue object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),"The degree of support for the mini program page method varies from end to end, so please check the documentation for the corresponding mini program."),(0,a.kt)("h2",i({},{id:"ref"}),"Ref"),(0,a.kt)("p",null,'The use of ref in Taro is exactly the same as in Vue, but the "DOM" obtained is different from the browser environment and the mini program environment.'),(0,a.kt)("h3",i({},{id:"vue-ref"}),"Vue Ref"),(0,a.kt)("p",null,"What you get with Vue Ref is Taro's virtual DOM, which is similar to the browser's DOM, and you can manipulate its ",(0,a.kt)("inlineCode",{parentName:"p"},"style"),", call its API, etc."),(0,a.kt)("p",null,"However, Taro's virtual DOM runs on the logical layer of the mini program and is not a real mini program rendering layer node, which has no information about the size, width, etc."),(0,a.kt)(o.Z,{defaultValue:"vue",values:[{label:"Vue2",value:"vue"},{label:"Vue3",value:"vue3"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="Example Code"',title:'"Example','Code"':!0}),'<template>\n  <view id="only" ref="el" />\n</template>\n\n<script>\nexport default {\n  mounted () {\n    // The obtained DOM has an API similar to that of an object such as HTMLElement or Text\n    console.log(this.$refs.el)\n  }\n}\n<\/script>\n'))),(0,a.kt)(r.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="Example Code"',title:'"Example','Code"':!0}),'<template>\n  <view id="only" ref="el" />\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\'\n\nexport default {\n  setup () {\n    const el = ref(null)\n\n    onMounted(() => {\n      // The obtained DOM has an API similar to that of an object such as HTMLElement or Text\n      console.log(el.value)\n    })\n\n    return { el }\n  }\n}\n<\/script>\n')))),(0,a.kt)("h3",i({},{id:"get-mini-program-dom"}),"Get Mini Program DOM"),(0,a.kt)("p",null,"To get the real mini program presentation layer node, you need to call the API used in the mini program to get the DOM in the ",(0,a.kt)("a",i({parentName:"p"},{href:"vue-page#onready-"}),"onReady")," lifecycle."),(0,a.kt)(o.Z,{defaultValue:"vue",values:[{label:"Vue2",value:"vue"},{label:"Vue3",value:"vue3"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="Example Code"',title:'"Example','Code"':!0}),"<template>\n  <view id=\"only\" />\n</template>\n\n<script>\nimport Taro from '@tarojs/taro'\n\nexport default {\n  onReady () {\n    // The nodes of the rendering layer of the mini program can be fetched only after onReady is triggered\n    Taro.createSelectorQuery().select('#only')\n      .boundingClientRect()\n      .exec(res => console.log(res))\n  }\n}\n<\/script>\n"))),(0,a.kt)(r.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html",metastring:'title="Example Code"',title:'"Example','Code"':!0}),"<template>\n  <view id=\"only\" />\n</template>\n\n<script>\nimport Taro from '@tarojs/taro'\n\nexport default {\n  onReady () {\n    // Vue3 needs to use Taro.nextTick to make sure the rendering is done.\n    Taro.nextTick(() => {\n      Taro.createSelectorQuery().select('#only')\n        .boundingClientRect()\n        .exec(res => console.log(res))\n    })\n  }\n}\n<\/script>\n")))),(0,a.kt)("h2",i({},{id:"v-html"}),"v-html"),(0,a.kt)("p",null,"On the mini program side, there are some additional configuration options and things to keep in mind when using ",(0,a.kt)("inlineCode",{parentName:"p"},"v-html"),", please refer to ",(0,a.kt)("a",i({parentName:"p"},{href:"html"}),'"Rendering HTML"')," for details."),(0,a.kt)("h2",i({},{id:"compatible-with-transition"}),"Compatible with ",(0,a.kt)("inlineCode",{parentName:"h2"},"<transition>")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<transition>")," component uses ",(0,a.kt)("inlineCode",{parentName:"p"},"getComputedStyle")," internally to sniff the animation style on the component. However, there is no way to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"getComputedStyle")," in the mini program, it can be hacked in the following way."),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"transitionDuration")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"animationDuration")," to the element's ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," to specify the transition time to be compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"<transition>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),'<transition>\n  <view style="animationDuration: 0.5s" />\n</transition>\n')),(0,a.kt)("h2",i({},{id:"other-limitations"}),"Other Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"transition-group")," component cannot be used in the mini prgram because the mini prgram accesses element positions as an asynchronous API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<style scoped>")," is not supported in the mini prgram, so we recommend using cssModules instead. ",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/6662"}),"#6662")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," of all components must remain unique across the application (even if they are on different pages), otherwise it may cause problems with events not firing, ",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7317"}),"#7317"))))}h.isMDXComponent=!0}}]);