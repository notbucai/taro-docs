"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13687],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),c=r,k=g["".concat(p,".").concat(c)]||g[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={slug:"2022-01-20-Taro-3.4",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.4 \u7248\u672c \u2014\u2014 \u5168\u9762\u652f\u6301 Preact \u548c Vue3.2",authors:["JJ","TJ"],tags:["v3"],description:""},l=void 0,p={permalink:"/taro-docs/blog/2022-01-20-Taro-3.4",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2022-01-20-Taro-3.4.md",source:"@site/blog/2022-01-20-Taro-3.4.md",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.4 \u7248\u672c \u2014\u2014 \u5168\u9762\u652f\u6301 Preact \u548c Vue3.2",description:"",date:"2022-01-20T00:00:00.000Z",formattedDate:"2022\u5e741\u670820\u65e5",tags:[{label:"v3",permalink:"/taro-docs/blog/tags/v-3"}],readingTime:9.875,truncated:!1,authors:[{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"},{name:"TJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4",url:"https://github.com/ZakaryCode",imageURL:"https://avatars.githubusercontent.com/u/24262362?v=4",key:"TJ"}],frontMatter:{slug:"2022-01-20-Taro-3.4",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.4 \u7248\u672c \u2014\u2014 \u5168\u9762\u652f\u6301 Preact \u548c Vue3.2",authors:["JJ","TJ"],tags:["v3"],description:""},nextItem:{title:"\u5982\u4f55\u53c2\u4e0e\u5927\u578b\u5f00\u6e90\u9879\u76ee-Taro \u5171\u5efa",permalink:"/taro-docs/blog/2022-01-19-how-to-join-Taro"}},s={authorsImageUrls:[void 0,void 0]},u=[{value:"<strong>\u4e00\u3001\u652f\u6301\u4f7f\u7528 Preact</strong>",id:"\u4e00\u652f\u6301\u4f7f\u7528-preact",level:2},{value:"<strong>\u4e8c\u3001\u66f4\u597d\u5730\u652f\u6301 Vue 3.2</strong>",id:"\u4e8c\u66f4\u597d\u5730\u652f\u6301-vue-32",level:2},{value:"<strong>1. \u652f\u6301 Composition API \u7248\u672c\u7684\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50</strong>",id:"1-\u652f\u6301-composition-api-\u7248\u672c\u7684\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50",level:3},{value:"<strong>2. \u652f\u6301 <code>&lt;style&gt; v-bind</code> \u8bed\u6cd5</strong>",id:"2-\u652f\u6301-style-v-bind-\u8bed\u6cd5",level:3},{value:"<strong>3. \u66b4\u9732 VueLoader \u7684\u914d\u7f6e</strong>",id:"3-\u66b4\u9732-vueloader-\u7684\u914d\u7f6e",level:3},{value:"<strong>\u4e09\u3001H5</strong>",id:"\u4e09h5",level:2},{value:"<strong>1. \u81ea\u5b9a\u4e49\u591a\u8def\u7531\u914d\u7f6e</strong>",id:"1-\u81ea\u5b9a\u4e49\u591a\u8def\u7531\u914d\u7f6e",level:3},{value:"<strong>2. \u8def\u7531\u52a8\u753b by @ShaoGongBra</strong>",id:"2-\u8def\u7531\u52a8\u753b-by-shaogongbra",level:3},{value:"<strong>3. dynamic-import-node</strong>",id:"3-dynamic-import-node",level:3},{value:"<strong>\u56db\u3001\u65b0\u589e defineAppConfig \u4e0e definePageConfig \u7f16\u8bd1\u5b8f</strong>",id:"\u56db\u65b0\u589e-defineappconfig-\u4e0e-definepageconfig-\u7f16\u8bd1\u5b8f",level:2},{value:"<strong>defineAppConfig</strong>",id:"defineappconfig",level:3},{value:"<strong>definePageConfig</strong>",id:"definepageconfig",level:3},{value:"<strong>\u4e94\u3001\u5176\u5b83\u91cd\u8981\u7279\u6027\u4e0e\u4f18\u5316</strong>",id:"\u4e94\u5176\u5b83\u91cd\u8981\u7279\u6027\u4e0e\u4f18\u5316",level:2},{value:"<strong>\u6027\u80fd</strong>",id:"\u6027\u80fd",level:3},{value:"<strong>\u7279\u6027</strong>",id:"\u7279\u6027",level:3},{value:"<strong>\u4fee\u590d</strong>",id:"\u4fee\u590d",level:3},{value:"<strong>\u516d\u3001Breaking Changes</strong>",id:"\u516dbreaking-changes",level:2},{value:"<strong>\u5347\u7ea7\u6307\u5357</strong>",id:"\u5347\u7ea7\u6307\u5357",level:2},{value:"<strong>1. \u628a Taro CLI \u66f4\u65b0\u5230 <code>v3.4.0</code>\uff1a</strong>",id:"1-\u628a-taro-cli-\u66f4\u65b0\u5230-v340",level:3},{value:"<strong>2. \u66f4\u65b0\u9879\u76ee\u4f9d\u8d56</strong>",id:"2-\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56",level:3},{value:"<strong>3.\u3010Breaking Changes\u3011\u5b89\u88c5\u5bf9\u5e94\u7684\u6846\u67b6\u9002\u914d\u63d2\u4ef6</strong>",id:"3breaking-changes\u5b89\u88c5\u5bf9\u5e94\u7684\u6846\u67b6\u9002\u914d\u63d2\u4ef6",level:3},{value:"<strong>\u6700\u540e</strong>",id:"\u6700\u540e",level:2}],m={toc:u};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ddd Taro v3.4 beta \u7248\u672c\u7684\u53d1\u5e03\u5df2\u6709\u4e00\u6bb5\u65f6\u95f4\uff0c\u671f\u95f4\u6211\u4eec\u5b8c\u5584\u4e86\u5bf9 Preact \u548c Vue3 \u7684\u652f\u6301\uff0c\u52a0\u5165\u4e86\u4e00\u4e9b\u6709\u8da3\u7684\u7279\u6027\uff0c\u66f4\u662f\u5bf9 H5 \u4f5c\u4e86\u5927\u5e45\u5ea6\u7684\u4f18\u5316\u4e0e\u8c03\u6574\uff0c\u5e76\u4e8e\u8fd1\u671f\u53d1\u5e03\u4e86 v3.4 \u7684\u6b63\u5f0f\u7248\u672c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u6708\u6211\u4eec\u8fd8\u63a8\u51fa\u4e86\u652f\u6301\u5f00\u53d1\u9e3f\u8499\u5e94\u7528\u7684 v3.5.0 canary \u7248\u672c\uff0c\u6b22\u8fce\u5404\u4f4d\u540c\u5b66\u5173\u6ce8~")),(0,a.kt)("h2",r({},{id:"\u4e00\u652f\u6301\u4f7f\u7528-preact"}),(0,a.kt)("strong",{parentName:"h2"},"\u4e00\u3001\u652f\u6301\u4f7f\u7528 Preact")),(0,a.kt)("p",null,"\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u65f6\u6211\u4eec\u7ecf\u5e38\u4f1a\u53d7\u5230\u5305\u4f53\u79ef\u7684\u63a3\u8098\uff0c\u5927\u578b\u5e94\u7528\u5e38\u5e38\u4e3a\u4e86\u201c\u5c3a\u571f\u5bf8\u91d1\u201d\u7684\u5305\u4f53\u79ef\u5f00\u5c55\u7626\u8eab\u884c\u52a8\u3002\u5728\u6b64\u80cc\u666f\u4e0b React \u5c06\u8fd1 100k \u7684\u4f53\u79ef\u5219\u663e\u5f97\u6709\u70b9\u8fc7\u4e8e\u5962\u4f88\u3002\u56e0\u6b64 Taro v3.4 \u5b9e\u73b0\u4e86\u5bf9 Preact \u7684\u652f\u6301\uff0c\u4ec5\u9700\u5c11\u91cf\u914d\u7f6e\u5373\u53ef\u4ece React \u5207\u6362\u5230 Preact\uff0c\u6709\u6548\u5730\u964d\u4f4e\u4e86\u5305\u4f53\u79ef\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://preactjs.com/"}),"Preact")," \u662f\u4e00\u6b3e\u4f53\u79ef\u8d85\u5c0f\u7684\u7c7b React \u6846\u67b6\uff0c\u63d0\u4f9b\u548c React \u51e0\u4e4e\u4e00\u81f4\u7684 API\uff0c\u517c\u5bb9 React \u751f\u6001\uff0c\u800c\u4f53\u79ef\u53ea\u6709 5k \u5de6\u53f3\u3002")),(0,a.kt)("p",null,"\u9002\u914d\u601d\u8def\u4e0e\u5177\u4f53\u7528\u6cd5\u8bf7\u53c2\u9605  ",(0,a.kt)("a",r({parentName:"p"},{href:"/blog/2021-11-24-Taro-3.4-beta#%E6%94%AF%E6%8C%81%E4%BD%BF%E7%94%A8-preact"}),"\u300aTaro v3.4 \u53d1\u5e03 beta \u7248\u672c \u2014\u2014 \u652f\u6301\u4f7f\u7528 Preact \u8fdb\u884c\u5f00\u53d1\u300b")),(0,a.kt)("h2",r({},{id:"\u4e8c\u66f4\u597d\u5730\u652f\u6301-vue-32"}),(0,a.kt)("strong",{parentName:"h2"},"\u4e8c\u3001\u66f4\u597d\u5730\u652f\u6301 Vue 3.2")),(0,a.kt)("h3",r({},{id:"1-\u652f\u6301-composition-api-\u7248\u672c\u7684\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50"}),(0,a.kt)("strong",{parentName:"h3"},"1. \u652f\u6301 Composition API \u7248\u672c\u7684\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/composition-api"}),"\u6587\u6863\u5730\u5740"))),(0,a.kt)("p",null,"Vue 3.2 \u6b63\u5f0f\u63a8\u51fa\u4e86 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax"}),"script setup")," \u8bed\u6cd5\uff0c\u8fc7\u53bb Taro \u7684 Options \u5f0f\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50\u96be\u4ee5\u914d\u5408 script setup \u8bed\u6cd5\u8fdb\u884c\u4f7f\u7528\u3002\u56e0\u6b64 Taro v3.4 \u63d0\u4f9b\u4e86 Composition API \u7248\u672c\u7684\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u914d\u5408 setup \u8bed\u6cd5\u7ec4\u7ec7\u548c\u590d\u7528\u4ee3\u7801\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<script setup>\nimport { useDidShow } from '@tarojs/taro'\n\nuseDidShow(() => console.log('onShow'))\n<\/script>\n")),(0,a.kt)("h3",r({},{id:"2-\u652f\u6301-style-v-bind-\u8bed\u6cd5"}),(0,a.kt)("strong",{parentName:"h3"},"2. \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"strong"},"<style> v-bind")," \u8bed\u6cd5")),(0,a.kt)("p",null,"Vue 3.2 \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style> v-bind")," \u8bed\u6cd5\u8ba9\u6211\u4eec\u53ef\u4ee5\u5bf9\u6837\u5f0f\u8fdb\u884c\u6570\u636e\u7ed1\u5b9a\u3002\u5b83\u7684\u5b9e\u73b0\u4f7f\u7528\u4e86 DOM \u7684 MutationObserver API\uff0c\u4f46\u4e4b\u524d Taro DOM \u6ca1\u6709\u6a21\u62df\u5b9e\u73b0\u6b64 API\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style> v-bind")," \u65f6\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u611f\u8c22 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/b2nil"}),"@b2nil")," \u540c\u5b66\uff0c\u53c2\u7167 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/ampproject/worker-dom"}),"worker-dom")," \u4e3a Taro DOM \u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver")," API\uff0c\u8ba9\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style> v-bind"),"  \u8bed\u6cd5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro DOM \u53ea\u9488\u5bf9 Vue3 \u66b4\u9732\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver")," API\uff0c\u4f7f\u7528 React \u6216 Vue2 \u7684\u540c\u5b66\u4e0d\u9700\u8981\u62c5\u5fc3\u4f1a\u589e\u5927\u4ee3\u7801\u4f53\u79ef\u3002")),(0,a.kt)("h3",r({},{id:"3-\u66b4\u9732-vueloader-\u7684\u914d\u7f6e"}),(0,a.kt)("strong",{parentName:"h3"},"3. \u66b4\u9732 VueLoader \u7684\u914d\u7f6e")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/vue3#compileroptions"}),"\u6587\u6863\u5730\u5740"))),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u6709\u65f6\u9700\u8981\u4fee\u6539 VueLoader \u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u65f6\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions.isCustomElement"),"\u3002\u4ee5\u5f80\u5f00\u53d1\u8005\u53ea\u80fd\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebpackChain")," \u53bb\u4fee\u6539\uff0cTaro v3.4 \u66b4\u9732\u4e86 VueLoader \u7684\u914d\u7f6e\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u4fee\u6539\u3002"),(0,a.kt)("h2",r({},{id:"\u4e09h5"}),(0,a.kt)("strong",{parentName:"h2"},"\u4e09\u3001H5")),(0,a.kt)("h3",r({},{id:"1-\u81ea\u5b9a\u4e49\u591a\u8def\u7531\u914d\u7f6e"}),(0,a.kt)("strong",{parentName:"h3"},"1. \u81ea\u5b9a\u4e49\u591a\u8def\u7531\u914d\u7f6e")),(0,a.kt)("p",null,"Taro-H5 \u8fc7\u53bb\u5e76\u4e0d\u652f\u6301\u591a\u8def\u7531\u8bbf\u95ee\u540c\u4e00\u4e2a\u9875\u9762\u5b9e\u4f8b\u7684\u64cd\u4f5c\uff0c\u5373\u4fbf\u901a\u8fc7\u81ea\u5b9a\u4e49\u8def\u7531\u914d\u7f6e\u4e5f\u5e76\u4e0d\u80fd\u5728\u591a\u4e2a\u8def\u7531\u4e2d\u8bbf\u95ee\u540c\u4e00\u4e2a\u9875\u9762\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64 Taro-H5 \u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49\u591a\u8def\u7531\u914d\u7f6e\u7684\u53c2\u6570\uff0c\u4f9b\u5f00\u53d1\u8005\u6839\u636e\u9700\u6c42\u81ea\u884c\u914d\u7f6e\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/config-detail#h5routercustomroutes"}),"\u6587\u6863\u5730\u5740"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n \xa0// ...\n \xa0h5: {\n \xa0 \xa0// ...\n \xa0 \xa0router: {\n \xa0 \xa0 \xa0customRoutes: {\n \xa0 \xa0 \xa0 \xa0// \"\u9875\u9762\u8def\u5f84\": \"\u81ea\u5b9a\u4e49\u8def\u7531\"\n \xa0 \xa0 \xa0 \xa0'/pages/index/index': '/index',\n \xa0 \xa0 \xa0 \xa0'/pages/detail/index': ['/detail'] // \u53ef\u4ee5\u901a\u8fc7\u6570\u7ec4\u4e3a\u9875\u9762\u914d\u7f6e\u591a\u4e2a\u81ea\u5b9a\u4e49\u8def\u7531\n \xa0 \xa0  }\n \xa0  }\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"2-\u8def\u7531\u52a8\u753b-by-shaogongbra"}),(0,a.kt)("strong",{parentName:"h3"},"2. \u8def\u7531\u52a8\u753b by ",(0,a.kt)("a",r({parentName:"strong"},{href:"https://github.com/ShaoGongBra"}),"@ShaoGongBra"))),(0,a.kt)("p",null,"Taro-H5 \u652f\u6301\u4e86\u8def\u7531\u52a8\u753b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"app.config.js")," \u6765\u63a7\u5236\u9875\u9762\u7684\u52a8\u753b\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6 CSS \u6837\u5f0f\u6765\u8c03\u6574\u52a8\u753b\u3002\u5f53\u7136\u4e00\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u9875\u9762\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"position: fixed;")," \u4f1a\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"translate3d")," \u5f71\u54cd\u5b9e\u9645\u6548\u679c\uff0c\u53ef\u4ee5\u5c06\u52a8\u753b\u7981\u7528\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/app-config#animation"}),"\u6587\u6863\u5730\u5740"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"export default {\n \xa0// ...\n \xa0animation: {\n \xa0 \xa0// \u52a8\u753b\u5207\u6362\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n \xa0 \xa0duration: 300,\n \xa0 \xa0// \u52a8\u753b\u5207\u6362\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n \xa0 \xa0delay: 50\n  }\n \xa0// ...\n}\n")),(0,a.kt)("h3",r({},{id:"3-dynamic-import-node"}),(0,a.kt)("strong",{parentName:"h3"},"3. dynamic-import-node")),(0,a.kt)("p",null,"Taro-H5 \u6253\u5305\u65f6\u4f1a\u5c06\u9875\u9762\u548c\u7ec4\u4ef6\u62c6\u5206\u6210\u72ec\u7acb\u7684\u6587\u4ef6\u6309\u9700\u52a0\u8f7d\uff0c\u4f46\u8fd9\u4e48\u505a\u4f1a\u5bfc\u81f4\u6ca1\u6709\u7528\u5230\u7684\u9875\u9762\u548c\u7ec4\u4ef6\u4f9d\u65e7\u4f1a\u88ab\u6253\u5305\uff0c\u5bfc\u81f4\u7f16\u8bd1\u4f53\u79ef\u53d8\u5927\uff0c\u5728\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\u4e2d\uff08\u6bd4\u5982 PWA \u7b49\u9700\u8981\u4e25\u683c\u9650\u5236\u5305\u4f53\u5927\u5c0f\u65f6\uff09\u4f1a\u56e0\u6b64\u53d7\u5230\u4e0d\u5c0f\u7684\u56f0\u6270\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u901a\u8fc7 babel \u63d2\u4ef6\u63d0\u4f9b\u4e86\u79fb\u9664\u61d2\u52a0\u8f7d\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n \xa0presets: [\n \xa0  ['taro', {\n \xa0 \xa0 \xa0framework: 'react',\n \xa0 \xa0 \xa0hot: false,\n \xa0 \xa0 \xa0'dynamic-import-node': true\n \xa0  }]\n  ]\n}\n")),(0,a.kt)("h2",r({},{id:"\u56db\u65b0\u589e-defineappconfig-\u4e0e-definepageconfig-\u7f16\u8bd1\u5b8f"}),(0,a.kt)("strong",{parentName:"h2"},"\u56db\u3001\u65b0\u589e defineAppConfig \u4e0e definePageConfig \u7f16\u8bd1\u5b8f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u518d\u6b21\u611f\u8c22 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/b2nil"}),"@b2nil")," \u540c\u5b66\u4e3a Taro \u65b0\u589e\u4e86\u6b64\u7279\u6027\u3002 \u6587\u6863\u5730\u5740\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/app-config#defineappconfig-%E5%AE%8F%E5%87%BD%E6%95%B0"}),"defineAppConfig"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/next/page-config#definepageconfig-%E5%AE%8F%E5%87%BD%E6%95%B0"}),"definePageConfig"))),(0,a.kt)("h3",r({},{id:"defineappconfig"}),(0,a.kt)("strong",{parentName:"h3"},"defineAppConfig")),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"defineAppConfig")," \u5305\u88f9 App \u914d\u7f6e\u5bf9\u8c61\uff0c\u4ee5\u83b7\u5f97\u5168\u5c40\u914d\u7f6e\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u63d0\u793a"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u8865\u5168"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// app.config.ts\nexport default defineAppConfig({\n \xa0pages: ['pages/index/index'],\n \xa0window: {\n \xa0 \xa0navigationBarTitleText: 'WeChat'\n  }\n})\n")),(0,a.kt)("h3",r({},{id:"definepageconfig"}),(0,a.kt)("strong",{parentName:"h3"},"definePageConfig")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5305\u88f9 Page \u914d\u7f6e\u5bf9\u8c61\uff0c\u540c\u6837\u53ef\u4ee5\u83b7\u5f97\u9875\u9762\u914d\u7f6e\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u63d0\u793a"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u8865\u5168"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// page.config.ts\nexport default definePageConfig({\n \xa0navigationBarTitleText: '\u9996\u9875'\n})\n")),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4e0d\u63d0\u4f9b\u9875\u9762\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u76f4\u63a5\u5728\u9875\u9762\u903b\u8f91\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"definePageConfig")," \u5b9a\u4e49\u9875\u9762\u914d\u7f6e"),"\u3002"),(0,a.kt)("p",null,"\u5982\u5728 React \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// page.tsx\ndefinePageConfig({\n \xa0navigationBarTitleText: '\u9996\u9875'\n})\n\nexport default function Index () {}\n")),(0,a.kt)("p",null,"\u5728 Vue \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<script>\ndefinePageConfig({\n \xa0navigationBarTitleText: '\u9996\u9875'\n})\n\nexport default {}\n<\/script>\n")),(0,a.kt)("h2",r({},{id:"\u4e94\u5176\u5b83\u91cd\u8981\u7279\u6027\u4e0e\u4f18\u5316"}),(0,a.kt)("strong",{parentName:"h2"},"\u4e94\u3001\u5176\u5b83\u91cd\u8981\u7279\u6027\u4e0e\u4f18\u5316")),(0,a.kt)("h3",r({},{id:"\u6027\u80fd"}),(0,a.kt)("strong",{parentName:"h3"},"\u6027\u80fd")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"eventSource")," \u5bfc\u81f4\u7684\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\uff0c\u76f8\u5173 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/commit/41c7cef9b0832306e096121b84a26947b896416e"}),"commit"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomWrapper")," \u5d4c\u5957\u4f7f\u7528\u540e\u5931\u6548\u7684\u95ee\u9898\uff0c\u611f\u8c22 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/CS-Tao"}),"@CS-Tao")," \u7684\u8d21\u732e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u4f53\u79ef\u4f18\u5316\uff0c\u76f8\u6bd4 Taro v3.3 \u7248\u672c\u5927\u7ea6\u51cf\u5c11\u4e86 ",(0,a.kt)("strong",{parentName:"li"},"30k")," \u7a7a\u95f4\u3002")),(0,a.kt)("h3",r({},{id:"\u7279\u6027"}),(0,a.kt)("strong",{parentName:"h3"},"\u7279\u6027")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u7684",(0,a.kt)("strong",{parentName:"li"},"\u70ed\u91cd\u8f7d"),"\u529f\u80fd\uff0c",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/next/mini-troubleshooting#%E7%83%AD%E9%87%8D%E8%BD%BD"}),"\u6587\u6863\u5730\u5740"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f ",(0,a.kt)("strong",{parentName:"li"},"2.0 \u6784\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u652f\u6301\u914d\u7f6e\u6e32\u67d3\u9875\u9762\u7684\u5bb9\u5668 id\uff0c",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/next/app-config#appid"}),"\u6587\u6863\u5730\u5740")),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u8def\u7531\u89c4\u5219\u8c03\u6574\uff0cQuery \u53c2\u6570\u4e0d\u518d\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"pageId")," \u4e2d\uff0c\u540c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"li"},"TabBar")," \u9875\u9762\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u91cd\u590d\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"entryPagePath")," \u53c2\u6570\uff0cby ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/liuchuzhang"}),"@liuchuzhang")),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"CoverView")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"CoverImage")," \u7ec4\u4ef6\uff0cby ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/jiaozitang"}),"@jiaozitang")),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesRef.context")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesRef.node")," \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u652f\u6301\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"useResize")," \u65b9\u6cd5\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"li"},"resize")," \u4e8b\u4ef6")),(0,a.kt)("h3",r({},{id:"\u4fee\u590d"}),(0,a.kt)("strong",{parentName:"h3"},"\u4fee\u590d")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u9884\u6e32\u67d3\u5931\u8d25\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u591a\u4e2a\u9875\u9762\u4f7f\u7528\u540c\u4e00\u4e2a\u7ec4\u4ef6\u65f6\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," \u800c\u5bfc\u81f4\u4e8b\u4ef6\u89e6\u53d1\u5931\u6548\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d H5 \u7aef\u591a\u9875\u9762\u6eda\u52a8\u4e8b\u4ef6\u5076\u53d1\u6027\u89e6\u53d1\u9519\u8bef\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d 3.x \u4e2d H5 \u7aef API \u5931\u6548\u7684 Shaking \u80fd\u529b\u3002")),(0,a.kt)("h2",r({},{id:"\u516dbreaking-changes"}),(0,a.kt)("strong",{parentName:"h2"},"\u516d\u3001Breaking Changes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e7\u9879\u76ee\u5347\u7ea7\u5230 Taro v3.4 \u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684",(0,a.kt)("strong",{parentName:"li"},"\u6846\u67b6\u9002\u914d\u63d2\u4ef6"),"\uff0c\u8be6\u60c5\u6d4f\u89c8\u5347\u7ea7\u6307\u5357\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"onInit")," \u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"li"},"onLoad")," \u751f\u547d\u5468\u671f\uff0c\u4ee5\u4f18\u5316\u9996\u6b21\u542f\u52a8\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"H5 \u7aef\u8c03\u6574\u4e86 showModal \u8fd4\u56de\u7684 errMsg \u53c2\u6570\uff0c\u548c\u5c0f\u7a0b\u5e8f\u63a5\u53e3\u5bf9\u9f50\uff0c\u5982\u679c\u9879\u76ee\u5185\u9488\u5bf9\u8fd9\u4e2a\u5dee\u5f02\u505a\u8fc7\u9002\u914d\uff0c\u53ef\u4ee5\u5728\u5347\u7ea7\u540e\u79fb\u9664\u3002 ",(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/11040"}),"#11040"))),(0,a.kt)("h2",r({},{id:"\u5347\u7ea7\u6307\u5357"}),(0,a.kt)("strong",{parentName:"h2"},"\u5347\u7ea7\u6307\u5357")),(0,a.kt)("h3",r({},{id:"1-\u628a-taro-cli-\u66f4\u65b0\u5230-v340"}),(0,a.kt)("strong",{parentName:"h3"},"1. \u628a Taro CLI \u66f4\u65b0\u5230 ",(0,a.kt)("inlineCode",{parentName:"strong"},"v3.4.0"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i -g @tarojs/cli\n")),(0,a.kt)("h3",r({},{id:"2-\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56"}),(0,a.kt)("strong",{parentName:"h3"},"2. \u66f4\u65b0\u9879\u76ee\u4f9d\u8d56")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5b89\u88c5\u5931\u8d25\u6216\u6253\u5f00\u9879\u76ee\u5931\u8d25\uff0c\u53ef\u4ee5\u5220\u9664 ",(0,a.kt)("strong",{parentName:"p"},"node_modules"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"yarn.lock"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"package-lock.json")," \u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u518d\u5c1d\u8bd5\u3002")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d Taro \u76f8\u5173\u4f9d\u8d56\u7684\u7248\u672c\u4fee\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"3.4.0"),"\uff0c\u518d\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("h3",r({},{id:"3breaking-changes\u5b89\u88c5\u5bf9\u5e94\u7684\u6846\u67b6\u9002\u914d\u63d2\u4ef6"}),(0,a.kt)("strong",{parentName:"h3"},"3.\u3010Breaking Changes\u3011\u5b89\u88c5\u5bf9\u5e94\u7684\u6846\u67b6\u9002\u914d\u63d2\u4ef6")),(0,a.kt)("p",null,"\u56e0\u4e3a Taro v3.4 \u628a\u5404\u524d\u7aef\u6846\u67b6\u7684\u9002\u914d\u903b\u8f91\u62c6\u5206\u5230\u5bf9\u5e94\u7684\u63d2\u4ef6\u4e2d\uff0c\u56e0\u6b64\u65e7\u9879\u76ee\u5347\u7ea7\u65f6\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u6846\u67b6\u7684\u9002\u914d\u63d2\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 React\uff0c\u8bf7\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-framework-react")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Vue2\uff0c\u8bf7\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-framework-vue2")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Vue3\uff0c\u8bf7\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-framework-vue3"))),(0,a.kt)("h2",r({},{id:"\u6700\u540e"}),(0,a.kt)("strong",{parentName:"h2"},"\u6700\u540e")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765 Taro v3.6 \u7684\u5de5\u4f5c\u91cd\u5fc3\u5c06\u4f1a\u653e\u5728\u5c0f\u7a0b\u5e8f\u6027\u80fd\u4f18\u5316\u3001\u7f16\u8bd1\u7cfb\u7edf\u5347\u7ea7\uff08\u5982\u5347\u7ea7 Webpack5\uff09\u548c\u4f18\u5316 H5 \u80fd\u529b\uff08\u5982\u8f93\u51fa SSR \u65b9\u6848\u3001\u4f18\u5316\u8def\u7531\u7cfb\u7edf\u7b49\uff09\u4e0a\u3002"),(0,a.kt)("p",null,"Taro \u8fed\u4ee3\u7684\u53e6\u4e00\u6761\u4e3b\u7ebf\u662f\u5bf9 ",(0,a.kt)("strong",{parentName:"p"},"\u9e3f\u8499\u5e94\u7528 && OpenHarmony")," \u7684\u9002\u914d\uff0cTaro \u4e0e OpenHarmony \u56e2\u961f\u6210\u7acb\u4e86",(0,a.kt)("a",r({parentName:"p"},{href:"https://gitee.com/NervJS/community/blob/master/sig/sig-crossplatformui/sig_crossplatformui_cn.md"}),"\u8de8\u5e73\u53f0 UI \u5174\u8da3\u7ec4"),"\uff0c\u5c06\u8054\u5408\u793e\u533a\u5171\u540c\u5c55\u5f00\u9002\u914d\u5de5\u4f5c\u3002\u76ee\u524d\u7b2c\u4e00\u9636\u6bb5\u7684\u5f00\u53d1\u5de5\u4f5c\u5df2\u5b8c\u6210\uff0c\u5e76\u53d1\u5e03\u4e86 Taro v3.5-canary \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u54a8\u8be2\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/discussions/categories/%E9%B8%BF%E8%92%99-openharmony-%E9%80%82%E9%85%8D%E5%B0%8F%E7%BB%84"}),"\u9e3f\u8499 && OpenHarmony \u9002\u914d\u5c0f\u7ec4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/projects/2"}),"\u9002\u914d\u8fdb\u5ea6"))),(0,a.kt)("p",null,"\u9e3f\u8499 & OpenHarmony \u4ea4\u6d41\u7fa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"http://storage.360buyimg.com/taro-jd-com/static/contact_taro_harmony_qr.png",alt:"Taro X Harmony \u4ea4\u6d41\u7fa4"}))),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u8877\u5fc3\u611f\u8c22\u53c2\u4e0e\u4e86 Taro \u5f00\u6e90\u5171\u5efa\u7684\u5404\u4f4d\u540c\u5b66\uff0c\u4e5f\u6b22\u8fce\u66f4\u591a\u7684\u540c\u5b66\u53c2\u4e0e\u8fdb\u6765\uff01"))}g.isMDXComponent=!0}}]);