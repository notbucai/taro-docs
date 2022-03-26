"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[20896],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70668:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},c=void 0,l={unversionedId:"apis/ui/custom-component/nextTick",id:"version-2.x/apis/ui/custom-component/nextTick",title:"Taro.nextTick(callback)",description:"\u5ef6\u8fdf\u4e00\u90e8\u5206\u64cd\u4f5c\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002\uff08\u7c7b\u4f3c\u4e8e setTimeout\uff09",source:"@site/versioned_docs/version-2.x/apis/ui/custom-component/nextTick.md",sourceDirName:"apis/ui/custom-component",slug:"/apis/ui/custom-component/nextTick",permalink:"/taro-docs/en/docs/2.x/apis/ui/custom-component/nextTick",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/ui/custom-component/nextTick.md",tags:[],version:"2.x",frontMatter:{title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},sidebar:"version-2.x/API",previous:{title:"setTopBarText",permalink:"/taro-docs/en/docs/2.x/apis/ui/sticky/setTopBarText"},next:{title:"getMenuButtonBoundingClientRect",permalink:"/taro-docs/en/docs/2.x/apis/ui/menu/getMenuButtonBoundingClientRect"}},u={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:p};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5ef6\u8fdf\u4e00\u90e8\u5206\u64cd\u4f5c\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002\uff08\u7c7b\u4f3c\u4e8e setTimeout\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e"),"\n\u56e0\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u7684 setData \u548c triggerEvent \u7b49\u63a5\u53e3\u672c\u8eab\u662f\u540c\u6b65\u7684\u64cd\u4f5c\uff0c\u5f53\u8fd9\u51e0\u4e2a\u63a5\u53e3\u88ab\u8fde\u7eed\u8c03\u7528\u65f6\uff0c\u90fd\u662f\u5728\u4e00\u4e2a\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\u5b8c\u7684\uff0c\u56e0\u6b64\u82e5\u903b\u8f91\u4e0d\u5f53\u53ef\u80fd\u4f1a\u5bfc\u81f4\u51fa\u9519\u3002\n\u4e00\u4e2a\u6781\u7aef\u7684\u6848\u4f8b\uff1a\u5f53\u7236\u7ec4\u4ef6\u7684 setData \u5f15\u53d1\u4e86\u5b50\u7ec4\u4ef6\u7684 triggerEvent\uff0c\u8fdb\u800c\u4f7f\u5f97\u7236\u7ec4\u4ef6\u53c8\u8fdb\u884c\u4e86\u4e00\u6b21 setData\uff0c\u671f\u95f4\u6709\u901a\u8fc7 wx:if \u8bed\u53e5\u5bf9\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5378\u8f7d\uff0c\u5c31\u6709\u53ef\u80fd\u5f15\u53d1\u5947\u602a\u7684\u9519\u8bef\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4e0d\u9700\u8981\u5728\u4e00\u4e2a\u540c\u6b65\u6d41\u7a0b\u5185\u5b8c\u6210\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u63a5\u53e3\u5ef6\u8fdf\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u518d\u6267\u884c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (...args: any[]) => any) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(...args: any[]) => any"))))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"this.setData({ number: 1 }) // \u76f4\u63a5\u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\nTaro.nextTick(() => {\n  this.setData({ number: 3 }) // \u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u7ed3\u675f\u540e\uff0c\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7247\u6267\u884c\n})\nthis.setData({ number: 2 }) // \u76f4\u63a5\u5728\u5f53\u524d\u540c\u6b65\u6d41\u7a0b\u4e2d\u6267\u884c\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.nextTick"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);