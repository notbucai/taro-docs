"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72591],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(93106);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),v=l,d=m["".concat(p,".").concat(v)]||m[v]||s[v]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42674:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(93106);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel"},{hidden:t,className:n}),e)}},14186:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(93106),l=n(98456),r=n(16454),o=n(26679),i="tabItem_uJot";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function u(e){var t,n;const{lazy:l,block:u,defaultValue:c,values:s,groupId:m,className:v}=e,d=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=s?s:d.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,r.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const g=null===c?c:null!==(k=null!=c?c:null===(t=d.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:null===(n=d[0])||void 0===n?void 0:n.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,r.UB)(),[N,x]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,r.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&h.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==N&&(T(t),x(a),null!=m&&y(m,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},h.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>w.push(e),onKeyDown:C,onFocus:j,onClick:j},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),l?(0,a.cloneElement)(d.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return a.createElement(u,p({key:String(t)},e))}},43262:function(e,t,n){n.d(t,{gQ:function(){return i},hn:function(){return l},p6:function(){return r}});var a=n(93106);const l=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function r(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:o}},"Vue"))}const o="#4fc08d";function i(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},51399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return v}});n(93106);var a=n(79874),l=n(14186),r=n(42674),o=n(43262);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const u={title:"Taro \u4f7f\u7528\u539f\u751f\u6a21\u5757"},c=void 0,s={unversionedId:"hybrid",id:"version-3.x/hybrid",title:"Taro \u4f7f\u7528\u539f\u751f\u6a21\u5757",description:"Taro \u652f\u6301\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u548c\u63d2\u4ef6\u3002",source:"@site/versioned_docs/version-3.x/hybrid.mdx",sourceDirName:".",slug:"/hybrid",permalink:"/taro-docs/docs/hybrid",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/hybrid.mdx",tags:[],version:"3.x",frontMatter:{title:"Taro \u4f7f\u7528\u539f\u751f\u6a21\u5757"},sidebar:"docs",previous:{title:"\u7f16\u8bd1\u4f18\u5316",permalink:"/taro-docs/docs/compile-optimized"},next:{title:"\u539f\u751f\u9879\u76ee\u4f7f\u7528 Taro",permalink:"/taro-docs/docs/taro-in-miniapp"}},m={},v=[{value:"\u793a\u4f8b\u9879\u76ee\uff1a",id:"\u793a\u4f8b\u9879\u76ee",level:4},{value:"\u4f7f\u7528\u539f\u751f\u7ec4\u4ef6",id:"\u4f7f\u7528\u539f\u751f\u7ec4\u4ef6",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"1. \u5728 app \u6216\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e <code>usingComponents</code> \u5c5e\u6027\u3002",id:"1-\u5728-app-\u6216\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e-usingcomponents-\u5c5e\u6027",level:4},{value:"2. \u4f7f\u7528\u7ec4\u4ef6",id:"2-\u4f7f\u7528\u7ec4\u4ef6",level:4},{value:"\u5c5e\u6027\u7ed1\u5b9a",id:"\u5c5e\u6027\u7ed1\u5b9a",level:3},{value:"\u4e8b\u4ef6\u7ed1\u5b9a",id:"\u4e8b\u4ef6\u7ed1\u5b9a",level:3},{value:"\u4f7f\u7528 Slot",id:"\u4f7f\u7528-slot",level:3},{value:"selectComponent",id:"selectcomponent",level:3},{value:"\u4f7f\u7528 vant-weapp",id:"\u4f7f\u7528-vant-weapp",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3},{value:"1. Vue3 \u51fa\u73b0 warning: &quot;Vue warn: Failed to resolve component&quot;",id:"1-vue3-\u51fa\u73b0-warning-vue-warn-failed-to-resolve-component",level:4},{value:"\u4f7f\u7528\u539f\u751f\u9875\u9762",id:"\u4f7f\u7528\u539f\u751f\u9875\u9762",level:2},{value:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u63d2\u4ef6",level:2},{value:"\u5f15\u5165\u63d2\u4ef6",id:"\u5f15\u5165\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762",id:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762",level:3},{value:"\u4f7f\u7528 js \u63a5\u53e3",id:"\u4f7f\u7528-js-\u63a5\u53e3",level:3}],d={toc:v};function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro \u652f\u6301\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684",(0,a.kt)("strong",{parentName:"p"},"\u9875\u9762"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("h4",i({},{id:"\u793a\u4f8b\u9879\u76ee"}),"\u793a\u4f8b\u9879\u76ee\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"React\uff1a",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-sample-weapp/tree/next"}),"https://github.com/NervJS/taro-sample-weapp/tree/next")),(0,a.kt)("li",{parentName:"ol"},"Vue\uff1a",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-sample-weapp/tree/vue"}),"https://github.com/NervJS/taro-sample-weapp/tree/vue"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u5728 Taro \u9879\u76ee\u5f15\u7528\u4e86\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u548c\u63d2\u4ef6\uff0c\u90a3\u4e48\u8be5\u9879\u76ee\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u518d\u5177\u5907\u591a\u7aef\u8f6c\u6362\u7684\u80fd\u529b"),"\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u4e86\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u539f\u751f\u7ec4\u4ef6\uff0c\u90a3\u4e48\u9879\u76ee\u53ea\u80fd\u8f6c\u6362\u6210\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u8f6c\u4e49\u6210\u5176\u4ed6\u5e73\u53f0\u4f1a\u5931\u6548\uff0c\u4f7f\u7528\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u540c\u7406\u3002")),(0,a.kt)("h2",i({},{id:"\u4f7f\u7528\u539f\u751f\u7ec4\u4ef6"}),"\u4f7f\u7528\u539f\u751f\u7ec4\u4ef6"),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528\u65b9\u6cd5"}),"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h4",i({},{id:"1-\u5728-app-\u6216\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e-usingcomponents-\u5c5e\u6027"}),"1. \u5728 app \u6216\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h4"},"usingComponents")," \u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="page.config.js"',title:'"page.config.js"'}),"export default {\n  usingComponents: {\n    // \u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\n    // 1. key \u503c\u6307\u5b9a\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u540d\u5b57\uff0c\u4ee5\u5c0f\u5199\u5f00\u5934\n    // 2. value \u503c\u6307\u5b9a\u7b2c\u4e09\u65b9\u7ec4\u4ef6 js \u6587\u4ef6\u7684\u76f8\u5bf9\u8def\u5f84\n    'ec-canvas': '../../components/ec-canvas/ec-canvas'\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aTaro3 \u7684\u7ec4\u4ef6\u662f\u6ca1\u6709\u914d\u7f6e\u6587\u4ef6\u7684\uff0c\u56e0\u6b64 usingComponents \u5fc5\u987b\u914d\u7f6e\u5728\u201c\u9875\u9762\u201d\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002")),(0,a.kt)("h4",i({},{id:"2-\u4f7f\u7528\u7ec4\u4ef6"}),"2. \u4f7f\u7528\u7ec4\u4ef6"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nexport default class Index extends Component {\n  this.state = {\n    ec: {\n      onInit: function () {}\n    }\n  }\n\n  render () {\n    return (\n      <View>\n        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec} />\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(r.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class='echarts'>\n    <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' :ec=\"ec\"></ec-canvas>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      ec: {\n        onInit: function () {}\n      }\n    }\n  }\n}\n<\/script>\n")))),(0,a.kt)("h3",i({},{id:"\u5c5e\u6027\u7ed1\u5b9a"}),"\u5c5e\u6027\u7ed1\u5b9a"),(0,a.kt)("p",null,"\u5c5e\u6027\u540d\u548c\u539f\u751f\u8bed\u6cd5\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"<van-button type='primary' loading loading-text='ing'>Button</van-button>\n"))),(0,a.kt)(r.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<van-button type='primary' :loading='true' loading-text='ing'>Button</van-button>\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728 Vue \u4e2d\uff0c\u5982\u679c\u7ec4\u4ef6\u7684\u67d0\u4e9b\u5c5e\u6027\u5e26\u6709\u9ed8\u8ba4\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5728 Taro \u4e2d\u4f7f\u7528\u65f6\u4ecd\u7136\u9700\u8981",(0,a.kt)("strong",{parentName:"p"},"\u663e\u5f0f\u8bbe\u7f6e\u4e3a true"),"\u3002")),(0,a.kt)("h3",i({},{id:"\u4e8b\u4ef6\u7ed1\u5b9a"}),"\u4e8b\u4ef6\u7ed1\u5b9a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u4e2d\u9700\u8981\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff08\u53d6\u4ee3\u539f\u751f\u7ed1\u5b9a\u8bed\u6cd5\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"\uff09\u7684",(0,a.kt)("strong",{parentName:"p"},"\u9a7c\u5cf0\u5f62\u5f0f"),"\u8fdb\u884c\u4e8b\u4ef6\u7ed1\u5b9a\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vue")," \u7684\u4e8b\u4ef6\u7ed1\u5b9a\u4e0e\u539f\u751f\u5199\u6cd5\u4e00\u81f4\u3002"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"// \u5bf9\u5e94 bind:click \u4e8b\u4ef6\n<van-button type='primary' onClick={this.handleClick} >Button</van-button>\n// \u5bf9\u5e94 bind:after-read \u4e8b\u4ef6\n<van-uploader fileList={[]} onAfterRead={this.onAfterRead} />\n"))),(0,a.kt)(r.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),"\x3c!-- \u5bf9\u5e94 bind:click \u4e8b\u4ef6 --\x3e\n<van-button type='primary' @click='handleClick'>Button</van-button>\n\x3c!-- \u5bf9\u5e94 bind:after-read \u4e8b\u4ef6 --\x3e\n<van-uploader :fileList='[]' @after-read='onAfterRead' />\n")))),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528-slot"}),"\u4f7f\u7528 Slot"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Slot>")," \u7ec4\u4ef6\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vue")," \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<slot-view>")," \u7ec4\u4ef6\u5b9e\u73b0\u3002"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Slot } from '@tarojs/components'\n\nexport default class Index extends Component {\n  render () {\n    return (\n      <View>\n        <van-calendar poppable show>\n          <Slot name='title'>\n            <View>Hello world</View>\n          </Slot>\n        </van-calendar>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(r.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <view>\n    <van-calendar :poppable='true' :show='true'>\n      <slot-view :name='\"title\"'>\n        <view>Hello world</view>\n      </slot-view>\n    </van-calendar>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'index'\n}\n<\/script>\n")))),(0,a.kt)("h3",i({},{id:"selectcomponent"}),"selectComponent"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u9875\u9762\u5b9e\u4f8b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"selectComponent")," API \u83b7\u53d6\u7b2c\u4e09\u65b9\u539f\u751f\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"import { getCurrentInstance } from '@tarojs/taro'\n\nconst { page } = getCurrentInstance()\npage.selectComponent('#mychart-dom-area')\n")),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528-vant-weapp"}),"\u4f7f\u7528 vant-weapp"),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"./vant"}),"\u8be6\u7ec6\u6587\u6863")),(0,a.kt)("h3",i({},{id:"\u5e38\u89c1\u95ee\u9898"}),"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h4",i({},{id:"1-vue3-\u51fa\u73b0-warning-vue-warn-failed-to-resolve-component"}),'1. Vue3 \u51fa\u73b0 warning: "',"[Vue warn]",': Failed to resolve component"'),(0,a.kt)("p",null,(0,a.kt)("img",i({parentName:"p"},{src:"http://storage.360buyimg.com/cjj-pub-images/vue3-warn-native.png",alt:null}))),(0,a.kt)("p",null,"\u539f\u56e0\u662f Vue \u628a\u5b83\u5f53\u505a Vue \u7ec4\u4ef6\u6765\u89e3\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539 VueLoader \u7684\u7f16\u8bd1\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions.isCustomElement"),"\uff0c\u628a\u6b64\u7ec4\u4ef6\u58f0\u660e\u4e3a\u539f\u751f\u7ec4\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4 \u4e4b\u524d"),"\u7684\u7248\u672c\u9700\u8981\u901a\u8fc7 WebpackChain \u53bb\u4fee\u6539\uff08\u8bf7\u53c2\u8003 ",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/10838#issuecomment-988448778"}),"#10838"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4 \u4e4b\u540e"),"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("a",i({parentName:"li"},{href:"./vue3#compileroptions"}),"Taro Vue3 \u63d2\u4ef6")," \u7684\u9009\u9879\u53bb\u4fee\u6539\u3002")),(0,a.kt)("h2",i({},{id:"\u4f7f\u7528\u539f\u751f\u9875\u9762"}),"\u4f7f\u7528\u539f\u751f\u9875\u9762"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u5728 app \u914d\u7f6e\u4e2d\uff0c\u8bbe\u7f6e\u597d\u539f\u751f\u9875\u9762\u7684\u8def\u7531\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'}),"export default {\n  pages: [\n    'pages/native/native'\n  ]\n}\n")),(0,a.kt)("h2",i({},{id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"}),"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("h3",i({},{id:"\u5f15\u5165\u63d2\u4ef6"}),"\u5f15\u5165\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\u524d\uff0c\u4f7f\u7528\u8005\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.confg.js")," \u7684\u914d\u7f6e\u4e2d\u58f0\u660e\u9700\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'}),"export default {\n  plugins: {\n    myPlugin: {\n      version: '1.0.0',\n      provider: 'wxidxxxxxxxxxxxxxxxx'\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u4f8b\u6240\u793a\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b9a\u4e49\u6bb5\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u63d2\u4ef6\u58f0\u660e\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u58f0\u660e\u4ee5\u4e00\u4e2a\u4f7f\u7528\u8005\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\u5f15\u7528\u540d\u4f5c\u4e3a\u6807\u8bc6\uff0c\u5e76\u6307\u660e\u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"appid")," \u548c\u9700\u8981\u4f7f\u7528\u7684\u7248\u672c\u53f7\u3002\u5176\u4e2d\uff0c\u5f15\u7528\u540d\uff08\u5982\u4e0a\u4f8b\u4e2d\u7684 myPlugin\uff09\u7531\u4f7f\u7528\u8005\u81ea\u5b9a\u4e49\uff0c\u65e0\u9700\u548c\u63d2\u4ef6\u5f00\u53d1\u8005\u4fdd\u6301\u4e00\u81f4\u6216\u4e0e\u5f00\u53d1\u8005\u534f\u8c03\u3002\u5728\u540e\u7eed\u7684\u63d2\u4ef6\u4f7f\u7528\u4e2d\uff0c\u8be5\u5f15\u7528\u540d\u5c06\u88ab\u7528\u4e8e\u8868\u793a\u8be5\u63d2\u4ef6\u3002"),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6"}),"\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\u63d0\u4f9b\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u548c\u4e0a\u8ff0 \u201c\u5f15\u5165\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u201d \u7684\u65b9\u5f0f\u76f8\u4eff\uff0c\u5728\u9875\u9762\u6216\u7ec4\u4ef6\u7684\u914d\u7f6e\u4e2d\u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin://")," \u534f\u8bae\u6307\u660e\u63d2\u4ef6\u7684\u5f15\u7528\u540d\u548c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u540d\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"export default {\n  // \u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u63d2\u4ef6\n  usingComponents: {\n    'hello-component': 'plugin://myPlugin/hello-component'\n  }\n}\n")),(0,a.kt)("p",null,"\u51fa\u4e8e\u5bf9\u63d2\u4ef6\u7684\u4fdd\u62a4\uff0c\u63d2\u4ef6\u63d0\u4f9b\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5728\u4f7f\u7528\u4e0a\u6709\u4e00\u5b9a\u7684\u9650\u5236\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9875\u9762\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"this.$scope.selectComponent")," \u63a5\u53e3\u65e0\u6cd5\u83b7\u5f97\u63d2\u4ef6\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b\u5bf9\u8c61\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Taro.createSelectorQuery")," \u7b49\u63a5\u53e3\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},">>>")," \u9009\u62e9\u5668\u65e0\u6cd5\u9009\u5165\u63d2\u4ef6\u5185\u90e8\u3002")),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762"}),"\u4f7f\u7528\u63d2\u4ef6\u9875\u9762"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u9875\u9762\u4ece\u5c0f\u7a0b\u5e8f\u57fa\u7840\u5e93\u7248\u672c 2.1.0 \u5f00\u59cb\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u8df3\u8f6c\u5230\u63d2\u4ef6\u9875\u9762\u65f6\uff0curl \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin://")," \u524d\u7f00\uff0c\u5f62\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin://PLUGIN_NAME//PLUGIN_PAGE"),"\uff0c \u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"<Navigator url='plugin://myPlugin/hello-page'>\n  Go to pages/hello-page!\n</Navigator>\n")),(0,a.kt)("h3",i({},{id:"\u4f7f\u7528-js-\u63a5\u53e3"}),"\u4f7f\u7528 js \u63a5\u53e3"),(0,a.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," \u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.requirePlugin")," \u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u63d2\u4ef6\u63d0\u4f9b\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," \u7684\u65b9\u6cd5\u548c\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"world")," \u7684\u53d8\u91cf\uff0c\u5219\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u8c03\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"import { requirePlugin } from '@tarojs/taro'\n\nconst myPluginInterface = requirePlugin('myPlugin')\nconst myWorld = myPluginInterface.world\n\nmyPluginInterface.hello()\n")))}h.isMDXComponent=!0}}]);