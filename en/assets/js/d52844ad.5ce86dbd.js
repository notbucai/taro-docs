"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31722],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),v=o,f=u["".concat(c,".").concat(v)]||u[v]||m[v]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"MovableView",sidebar_label:"MovableView"},l=void 0,c={unversionedId:"components/viewContainer/movable-view",id:"version-1.x/components/viewContainer/movable-view",title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8",source:"@site/versioned_docs/version-1.x/components/viewContainer/movable-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-view",permalink:"/taro-docs/en/docs/1.x/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/viewContainer/movable-view.md",tags:[],version:"1.x",frontMatter:{title:"MovableView",sidebar_label:"MovableView"},sidebar:"version-1.x/components",previous:{title:"Swiper",permalink:"/taro-docs/en/docs/1.x/components/viewContainer/swiper"},next:{title:"CoverView",permalink:"/taro-docs/en/docs/1.x/components/viewContainer/cover-view"}},p={},s=[{value:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8",id:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],m={toc:s};function u(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h5",o({},{id:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8"}),"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ReactNative"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"x"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"\ufe0f \u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))))),(0,r.kt)("p",null,"\u5177\u4f53\u5c5e\u6027\u53c2\u8003\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5b98\u7f51\uff0c\u5c5e\u6027\u503c\u8bf7\u6539\u5199\u4e3a\u9a7c\u5cf0\u5f0f\u547d\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/view/#movable-area"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.alipay.com/mini/component/movable-view"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),(0,r.kt)("h6",o({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 MovableArea, MovableView \u7ec4\u4ef6\nimport { MovableArea, MovableView } from '@tarojs/components'\n\nclass App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>\n      </MovableArea>\n    )\n  }\n}\n")))}u.isMDXComponent=!0}}]);