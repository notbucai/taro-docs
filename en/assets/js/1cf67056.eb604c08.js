"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57742],{79874:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),i=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=k(t,["components","mdxType","originalType","parentName"]),s=i(a),d=n,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(f,o(o({ref:e},c),{},{components:a})):r.createElement(f,o({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var k={};for(var p in e)hasOwnProperty.call(e,p)&&(k[p]=e[p]);k.originalType=t,k.mdxType="string"==typeof t?t:n,o[1]=k;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28157:function(t,e,a){a.r(e),a.d(e,{assets:function(){return i},contentTitle:function(){return k},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={title:"SocketTask",sidebar_label:"SocketTask"},k=void 0,p={unversionedId:"apis/network/socket/SocketTask",id:"version-1.x/apis/network/socket/SocketTask",title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 wx.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-1.x/apis/network/socket/SocketTask.md",sourceDirName:"apis/network/socket",slug:"/apis/network/socket/SocketTask",permalink:"/taro-docs/en/docs/1.x/apis/network/socket/SocketTask",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/network/socket/SocketTask.md",tags:[],version:"1.x",frontMatter:{title:"SocketTask",sidebar_label:"SocketTask"},sidebar:"version-1.x/API",previous:{title:"onSocketError",permalink:"/taro-docs/en/docs/1.x/apis/network/socket/onSocketError"},next:{title:"chooseAddress",permalink:"/taro-docs/en/docs/1.x/apis/open-api/address/chooseAddress"}},i={},c=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],m={toc:c};function s(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",n({parentName:"p"},{href:"/taro-docs/en/docs/1.x/apis/network/socket/connectSocket"}),"wx.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027"),(0,r.kt)("p",null,"socketTask.readyState: WebSocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002"),(0,r.kt)("p",null,"socketTask.CONNECTING: WebSocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002"),(0,r.kt)("p",null,"socketTask.OPEN: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"socketTask.CLOSING: WebSocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002"),(0,r.kt)("p",null,"socketTask.CLOSED: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002"),(0,r.kt)("p",null,"socketTask.ws: \u6d4f\u89c8\u5668 WebSocket \u5b9e\u4f8b\u3002\uff08",(0,r.kt)("strong",{parentName:"p"},"H5 \u7aef\u72ec\u6709"),"\uff09"),(0,r.kt)("p",null,"\u65b9\u6cd5"),(0,r.kt)("p",null,"SocketTask.send(OBJECT)"),(0,r.kt)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"data"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String/ArrayBuffer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u662f"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("p",null,"SocketTask.close(OBJECT)"),(0,r.kt)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"code"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u9ed8\u8ba4\u7684\u53d6\u503c\u662f 1000 \uff08\u8868\u793a\u6b63\u5e38\u8fde\u63a5\u5173\u95ed\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("p",null,"SocketTask.onOpen(CALLBACK)"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"SocketTask.onClose(CALLBACK)"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"code"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")))),(0,r.kt)("p",null,"SocketTask.onError(CALLBACK)"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"errMsg"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u9519\u8bef\u4fe1\u606f")))),(0,r.kt)("p",null,"SocketTask.onMessage(CALLBACK)"),(0,r.kt)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"data"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"String/ArrayBuffer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),(0,r.kt)("h2",n({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"SocketTask"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);