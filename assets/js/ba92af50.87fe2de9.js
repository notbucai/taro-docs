"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69555],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=c(n),d=a,g=f["".concat(p,".").concat(d)]||f[d]||m[d]||o;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80011:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},l=void 0,p={unversionedId:"apis/device/systeminfo/getSystemInfoSync",id:"version-1.x/apis/device/systeminfo/getSystemInfoSync",title:"Taro.getSystemInfoSync()",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-1.x/apis/device/systeminfo/getSystemInfoSync.md",sourceDirName:"apis/device/systeminfo",slug:"/apis/device/systeminfo/getSystemInfoSync",permalink:"/taro-docs/docs/1.x/apis/device/systeminfo/getSystemInfoSync",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/systeminfo/getSystemInfoSync.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},sidebar:"version-1.x/API",previous:{title:"getSystemInfo",permalink:"/taro-docs/docs/1.x/apis/device/systeminfo/getSystemInfo"},next:{title:"connectWifi",permalink:"/taro-docs/docs/1.x/apis/device/wifi/connectWifi"}},c={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],m={toc:s};function f(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540c\u6b65\u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"brand"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u624b\u673a\u54c1\u724c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"model"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u624b\u673a\u578b\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"system"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"pixelRatio"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u5907\u50cf\u7d20\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"screenWidth"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u5bbd\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"screenHeight"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u9ad8\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"windowWidth"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"windowHeight"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"version"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"statusBarHeight"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"platform"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u5e73\u53f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"language"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"fontSizeSetting"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u3002\u4ee5\u201c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u201d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6\uff0c\u5355\u4f4d\uff1apx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"SDKVersion"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst res = Taro.getSystemInfoSync()\nconsole.log(res.model)\nconsole.log(res.pixelRatio)\nconsole.log(res.windowWidth)\nconsole.log(res.windowHeight)\nconsole.log(res.language)\nconsole.log(res.version)\nconsole.log(res.platform)\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getSystemInfoSync"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}f.isMDXComponent=!0}}]);