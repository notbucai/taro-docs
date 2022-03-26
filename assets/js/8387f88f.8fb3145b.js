"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3077],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89958:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199"},c=void 0,p={unversionedId:"hybrid",id:"version-1.x/hybrid",title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199",description:"Taro \u9879\u76ee \u652f\u6301 Taro \u7684\u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8\uff09\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u6df7\u5408\u5b58\u5728\uff0c\u53ea\u9700\u8981\u5c06\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u653e\u5165 src \u76ee\u5f55\u4e0b\uff0c\u968f\u540e\u5728 \u5165\u53e3\u6587\u4ef6 app.js \u4e2d\u5b9a\u4e49\u597d pages \u914d\u7f6e\u6307\u5411\u5bf9\u5e94\u7684\u539f\u751f\u7684\u9875\u9762\u5373\u53ef\uff0c\u5728\u539f\u751f\u9875\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 usingComponents \u6765\u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u53ef\u4ee5\u6307\u5b9a Taro \u7ec4\u4ef6\u540c\u65f6\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-1.x/hybrid.md",sourceDirName:".",slug:"/hybrid",permalink:"/taro-docs/docs/1.x/hybrid",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/hybrid.md",tags:[],version:"1.x",frontMatter:{title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199"},sidebar:"version-1.x/docs",previous:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/taro-docs/docs/1.x/mini-third-party"},next:{title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5",permalink:"/taro-docs/docs/1.x/optimized-practice"}},u={},s=[],l={toc:s};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro \u9879\u76ee \u652f\u6301 Taro \u7684\u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8\uff09\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u6df7\u5408\u5b58\u5728\uff0c\u53ea\u9700\u8981\u5c06\u539f\u751f\u7684\u9875\u9762\u3001\u7ec4\u4ef6\u4ee3\u7801\u653e\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\uff0c\u968f\u540e\u5728 \u5165\u53e3\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u5b9a\u4e49\u597d ",(0,n.kt)("inlineCode",{parentName:"p"},"pages")," \u914d\u7f6e\u6307\u5411\u5bf9\u5e94\u7684\u539f\u751f\u7684\u9875\u9762\u5373\u53ef\uff0c\u5728\u539f\u751f\u9875\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u6765\u5b9a\u4e49\u9700\u8981\u5f15\u5165\u7684\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u53ef\u4ee5\u6307\u5b9a Taro \u7ec4\u4ef6\u540c\u65f6\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684\u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u6307\u5b9a\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u540d\u5b57\u9700\u8981\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u5c0f\u5199"),"\u5f00\u5934\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u53c2\u8003\u793a\u4f8b\u9879\u76ee\uff1a",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-sample-weapp"}),"https://github.com/NervJS/taro-sample-weapp"))))}f.isMDXComponent=!0}}]);