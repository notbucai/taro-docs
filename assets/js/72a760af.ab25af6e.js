"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99287],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,d=s["".concat(p,".").concat(k)]||s[k]||u[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49281:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"\u5b9e\u73b0\u7ec6\u8282"},i=void 0,p={unversionedId:"implement-note",id:"version-3.x/implement-note",title:"\u5b9e\u73b0\u7ec6\u8282",description:"\u672c\u6587\u4f1a\u4ecb\u7ecd Taro \u7684\u90e8\u5206\u5b9e\u73b0\u7ec6\u8282\uff0c\u5e26\u52a8\u5f00\u53d1\u8005\u4e86\u89e3 Taro \u76f8\u5173\u4f9d\u8d56\u5305\u7684\u5177\u4f53\u529f\u80fd\uff0c\u8ba9\u5f00\u53d1\u8005\u5bf9\u66f4\u597d\u5730\u4e86\u89e3 Taro \u8fd9\u4e2a\u9879\u76ee\u3002",source:"@site/versioned_docs/version-3.x/implement-note.md",sourceDirName:".",slug:"/implement-note",permalink:"/taro-docs/docs/implement-note",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/implement-note.md",tags:[],version:"3.x",frontMatter:{title:"\u5b9e\u73b0\u7ec6\u8282"},sidebar:"docs",previous:{title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",permalink:"/taro-docs/docs/debug-config"},next:{title:"Taro DOM Reference",permalink:"/taro-docs/docs/taro-dom"}},m={},c=[{value:"CLI",id:"cli",level:2},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",level:2},{value:"\u7f16\u8bd1\u65f6",id:"\u7f16\u8bd1\u65f6",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:3},{value:"\u7aef\u5e73\u53f0\u63d2\u4ef6",id:"\u7aef\u5e73\u53f0\u63d2\u4ef6",level:3},{value:"H5",id:"h5",level:2},{value:"\u7f16\u8bd1\u65f6",id:"\u7f16\u8bd1\u65f6-1",level:3},{value:"\u7ec4\u4ef6\u5e93",id:"\u7ec4\u4ef6\u5e93",level:3},{value:"API",id:"api",level:3},{value:"\u8def\u7531",id:"\u8def\u7531",level:3},{value:"Typings",id:"typings",level:2},{value:"\u53cd\u5411\u8f6c\u6362",id:"\u53cd\u5411\u8f6c\u6362",level:2},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",level:2}],u={toc:c};function s(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4f1a\u4ecb\u7ecd Taro \u7684\u90e8\u5206\u5b9e\u73b0\u7ec6\u8282\uff0c\u5e26\u52a8\u5f00\u53d1\u8005\u4e86\u89e3 Taro \u76f8\u5173\u4f9d\u8d56\u5305\u7684\u5177\u4f53\u529f\u80fd\uff0c\u8ba9\u5f00\u53d1\u8005\u5bf9\u66f4\u597d\u5730\u4e86\u89e3 Taro \u8fd9\u4e2a\u9879\u76ee\u3002"),(0,a.kt)("div",r({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",r({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",r({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",r({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",r({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"\u4e0d\u5b9a\u671f\u66f4\u65b0\u3002"))),(0,a.kt)("h2",r({},{id:"cli"}),"CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," \u662f Taro CLI \u5de5\u5177\uff0c\u5b83\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/service")," \u5305\u7684\u63d2\u4ef6\u5316\u5185\u6838\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"CLI \u91cc\u9884\u5148\u6302\u8f7d\u4e86\u4e00\u7cfb\u5217\u7684\u5185\u7f6e\u63d2\u4ef6\uff0c\u6bcf\u4e2a\u547d\u4ee4\u3001\u6bcf\u4e2a\u7f16\u8bd1\u5e73\u53f0\u90fd\u662f\u4e00\u4e2a\u5355\u72ec\u7684 Taro \u63d2\u4ef6\u3002"),(0,a.kt)("h2",r({},{id:"\u5c0f\u7a0b\u5e8f"}),"\u5c0f\u7a0b\u5e8f"),(0,a.kt)("h3",r({},{id:"\u7f16\u8bd1\u65f6"}),"\u7f16\u8bd1\u65f6"),(0,a.kt)("p",null,"\u7f16\u8bd1\u5c0f\u7a0b\u5e8f\u65f6\uff0cCLI \u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," \u5305\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"mini-runner")," \u4e3b\u8981\u505a\u4e86\u8fd9\u4e9b\u4e8b\u60c5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8d1f\u8d23\u6839\u636e\u5f00\u53d1\u8005\u7684",(0,a.kt)("a",r({parentName:"li"},{href:"./config"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u8c03\u6574 Webpack \u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 PostCSS \u63d2\u4ef6\u3002\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 Webpack \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 Webpack Loaders\u3002\uff08Loaders \u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," \u5305\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528 Webpack \u5f00\u542f\u7f16\u8bd1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 Webpack \u7684\u7f16\u8bd1\u4ea7\u7269\uff0c\u8c03\u6574\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\u3002")),(0,a.kt)("h3",r({},{id:"\u8fd0\u884c\u65f6"}),"\u8fd0\u884c\u65f6"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9 React\u3001Vue \u7b49\u6846\u67b6\u76f4\u63a5\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7684\u903b\u8f91\u5c42",(0,a.kt)("strong",{parentName:"p"},"\u6a21\u62df\u6d4f\u89c8\u5668\u73af\u5883"),"\uff0c\u5305\u62ec\u5b9e\u73b0 DOM\u3001BOM API \u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," \u662f Taro \u7684\u8fd0\u884c\u65f6\u9002\u914d\u5668\u6838\u5fc3\uff0c\u5b83\u5b9e\u73b0\u4e86\u7cbe\u7b80\u7684 ",(0,a.kt)("a",r({parentName:"p"},{href:"taro-dom"}),"DOM\u3001BOM API"),"\u3001\u4e8b\u4ef6\u7cfb\u7edf\u3001Web \u6846\u67b6\u548c\u5c0f\u7a0b\u5e8f\u6846\u67b6\u7684\u6865\u63a5\u5c42\u7b49\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a ReactDOM \u4f53\u79ef\u8f83\u5927\uff0c\u4e14\u5305\u542b\u5f88\u591a\u517c\u5bb9\u6027\u4ee3\u7801\u3002\u56e0\u6b64 Taro \u501f\u52a9 react-reconciler \u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\u7528\u4e8e\u4ee3\u66ff ReactDOM\u3002\u6e32\u67d3\u5668\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/react")," \u5305\u4e2d\u3002")),(0,a.kt)("p",null,"\u8fd9\u65f6 Web \u6846\u67b6\u5c31\u53ef\u4ee5\u4f7f\u7528 Taro \u6a21\u62df\u7684 API \u6e32\u67d3\u51fa\u4e00\u9897 Taro DOM \u6811\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u4e00\u5207\u90fd\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u7684\u903b\u8f91\u5c42"),"\u3002\u800c\u5c0f\u7a0b\u5e8f\u7684 xml \u6a21\u677f\u9700\u8981\u63d0\u524d\u5199\u6b7b\uff0cTaro \u5982\u4f55\u4f7f\u7528\u4e00\u4e2a\u9759\u6001\u7684\u6a21\u677f\u6587\u4ef6\u53bb\u6e32\u67d3\u8fd9\u9897\u52a8\u6001\u7684 Taro DOM \u6811\u5462\uff1f"),(0,a.kt)("p",null,"Taro \u9009\u62e9\u4e86\u5229\u7528\u5c0f\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \u53ef\u4ee5\u5f15\u7528\u5176\u5b83 ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \u7684\u7279\u6027\uff0c\u628a Taro DOM \u6811\u7684\u6bcf\u4e2a DOM \u8282\u70b9\u5bf9\u5e94\u5730\u6e32\u67d3\u4e3a\u4e00\u4e2a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>"),"\u3002\u8fd9\u65f6\u53ea\u9700\u8981\u628a Taro DOM \u6811\u7684\u5e8f\u5217\u5316\u6570\u636e\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"setData"),"\uff0c\u5c31\u80fd\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \u7684\u76f8\u4e92\u5f15\u7528\uff0c\u4ece\u800c\u6e32\u67d3\u51fa\u6700\u7ec8\u7684 UI\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/base.xml")," \u6587\u4ef6\u5c31\u662f\u8fd9\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \u7684\u96c6\u5408\u3002")),(0,a.kt)("h3",r({},{id:"\u7aef\u5e73\u53f0\u63d2\u4ef6"}),"\u7aef\u5e73\u53f0\u63d2\u4ef6"),(0,a.kt)("p",null,"Taro \u5185\u90e8\u9ed8\u8ba4\u652f\u6301 6 \u5927\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff0c\u81ea ",(0,a.kt)("a",r({parentName:"p"},{href:"/blog/2021-03-10-taro-3-1-lts#1-%E5%BC%80%E6%94%BE%E5%BC%8F%E6%9E%B6%E6%9E%84"}),"Taro v3.1")," \u7248\u672c\u4e4b\u540e\uff0c\u5bf9\u5404\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u652f\u6301\u90fd\u4ee5 Taro \u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-weapp"),"\t\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-alipay"),"\t\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-swan"),"\t\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-tt"),"\t\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-qq"),"\tqq \u5c0f\u7a0b\u5e8f\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-platform-jd"),"\t\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u63d2\u4ef6")),(0,a.kt)("p",null,"\u7aef\u5e73\u53f0\u63d2\u4ef6\u9488\u5bf9\u7279\u5b9a\u7684\u5e73\u53f0\uff0c\u4f1a\u5206\u522b\u4e3a\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6\u6ce8\u5165\u903b\u8f91\uff0c\u8be6\u60c5\u8bf7\u89c1 ",(0,a.kt)("a",r({parentName:"p"},{href:"./platform-plugin"}),"\u300a\u7aef\u5e73\u53f0\u63d2\u4ef6\u6982\u8ff0\u300b"),"\u3002"),(0,a.kt)("h2",r({},{id:"h5"}),"H5"),(0,a.kt)("h3",r({},{id:"\u7f16\u8bd1\u65f6-1"}),"\u7f16\u8bd1\u65f6"),(0,a.kt)("p",null,"\u7f16\u8bd1 H5 \u65f6\uff0cCLI \u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u5305\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-runner")," \u4e3b\u8981\u505a\u4e86\u8fd9\u4e9b\u4e8b\u60c5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8d1f\u8d23\u6839\u636e\u5f00\u53d1\u8005\u7684",(0,a.kt)("a",r({parentName:"li"},{href:"./config"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u8c03\u6574 Webpack \u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 PostCSS \u63d2\u4ef6\u3002\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"postcss-pxtransform"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"postcss-plugin-constparse"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 Webpack \u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 Webpack Loaders\u3002\uff08Loaders \u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-loader")," \u5305\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528 Webpack \u5f00\u542f\u7f16\u8bd1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 Webpack \u7684\u7f16\u8bd1\u4ea7\u7269\uff0c\u8c03\u6574\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\u3002")),(0,a.kt)("h3",r({},{id:"\u7ec4\u4ef6\u5e93"}),"\u7ec4\u4ef6\u5e93"),(0,a.kt)("p",null,"Taro \u5728 H5 \u7aef\u5b9e\u73b0\u4e86\u9075\u5faa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u57fa\u7840\u7ec4\u4ef6\u5e93\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u63d0\u4f9b\u7684 Web Components \u7ec4\u4ef6\u5e93\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u4f7f\u7528 React \u5f00\u53d1\u65f6\uff0c\u4e5f\u53ef\u4ee5\u9009\u7528",(0,a.kt)("a",r({parentName:"p"},{href:"./h5#react-%E5%85%BC%E5%AE%B9%E6%80%A7%E7%BB%84%E4%BB%B6%E5%BA%93"}),"\u517c\u5bb9\u6027\u7ec4\u4ef6\u5e93"),"\uff0c\u8fd9\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components-react")," \u5c06\u4f1a\u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/components"),"\u3002"),(0,a.kt)("h3",r({},{id:"api"}),"API"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u4e2d\u5f15\u7528 Taro \u5bf9\u8c61\u5e76\u4f7f\u7528\u5b83\u63d0\u4f9b\u7684 API\u3002"),(0,a.kt)("p",null,"\u5728 H5 \u73af\u5883\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u4f1a\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/api")," \u53d6\u4e0e\u5e73\u53f0\u65e0\u5173\u7684 API\uff0c\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro-h5")," \u4e2d\u53d6\u9075\u5faa\u5c0f\u7a0b\u5e8f\u89c4\u8303\u5b9e\u73b0\u7684 API\uff0c\u6700\u7ec8\u96c6\u5408\u6210\u4e00\u4e2a Taro \u5bf9\u8c61\u66b4\u9732\u7ed9\u5f00\u53d1\u8005\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8005\u4e00\u822c\u4f1a\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.xxx")," \u8fd9\u79cd\u5f62\u5f0f\u8c03\u7528 API\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," \u63d2\u4ef6\u4f1a\u628a\u8fd9\u79cd\u5199\u6cd5\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"import { xxx } from '@tarojs/taro';")," \u518d\u8fdb\u884c\u8c03\u7528\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1 Tree Shaking \u751f\u6548\u3002")),(0,a.kt)("h3",r({},{id:"\u8def\u7531"}),"\u8def\u7531"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/router")," \u5b9e\u73b0\u4e86\u9075\u5faa\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u8def\u7531\u5e93\u3002"),(0,a.kt)("h2",r({},{id:"typings"}),"Typings"),(0,a.kt)("p",null,"Taro \u7684 Typings \u6587\u4ef6\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro/types")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u5404\u5c0f\u7a0b\u5e8f\u7684 API \u66f4\u65b0\u8f83\u5feb\uff0cTypings \u5341\u5206\u9700\u8981\u793e\u533a\u534f\u52a9\u7ef4\u62a4\u3002"),(0,a.kt)("h2",r({},{id:"\u53cd\u5411\u8f6c\u6362"}),"\u53cd\u5411\u8f6c\u6362"),(0,a.kt)("p",null,"\u53cd\u5411\u8f6c\u6362\uff0c\u5373\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a Taro \u7684\u529f\u80fd\uff0c\u76ee\u524d\u652f\u6301\u8f6c\u6362\u4e3a React\u3002"),(0,a.kt)("p",null,"\u53cd\u5411\u8f6c\u6362\u5206\u4e3a\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6\u4e24\u5927\u6a21\u5757\uff0c\u5206\u522b\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taroize")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/with-weapp"),"\u3002"),(0,a.kt)("h2",r({},{id:"\u76f8\u5173\u9605\u8bfb"}),"\u76f8\u5173\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/blog/2022-01-19-how-to-join-Taro"}),"\u5982\u4f55\u53c2\u4e0e\u5927\u578b\u5f00\u6e90\u9879\u76ee-Taro \u5171\u5efa"))))}s.isMDXComponent=!0}}]);