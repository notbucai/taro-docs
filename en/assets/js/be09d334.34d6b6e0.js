"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99641],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),a=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=a(t.components);return l.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=a(n),k=r,v=p["".concat(i,".").concat(k)]||p[k]||s[k]||o;return n?l.createElement(v,u(u({ref:e},d),{},{components:n})):l.createElement(v,u({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,u=new Array(o);u[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,u[1]=c;for(var a=2;a<o;a++)u[a]=n[a];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75464:function(t,e,n){n.r(e),n.d(e,{assets:function(){return a},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"Taro.getConnectedBluetoothDevices(option)",sidebar_label:"getConnectedBluetoothDevices"},c=void 0,i={unversionedId:"apis/device/bluetooth/getConnectedBluetoothDevices",id:"version-2.x/apis/device/bluetooth/getConnectedBluetoothDevices",title:"Taro.getConnectedBluetoothDevices(option)",description:"\u6839\u636e uuid \u83b7\u53d6\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002",source:"@site/versioned_docs/version-2.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getConnectedBluetoothDevices",permalink:"/taro-docs/en/docs/2.x/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getConnectedBluetoothDevices(option)",sidebar_label:"getConnectedBluetoothDevices"},sidebar:"version-2.x/API",previous:{title:"onBluetoothAdapterStateChange",permalink:"/taro-docs/en/docs/2.x/apis/device/bluetooth/onBluetoothAdapterStateChange"},next:{title:"getBluetoothDevices",permalink:"/taro-docs/en/docs/2.x/apis/device/bluetooth/getBluetoothDevices"}},a={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"BluetoothDeviceInfo",id:"bluetoothdeviceinfo",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:d};function p(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6839\u636e uuid \u83b7\u53d6\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"services"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u4e3b service \u7684 uuid \u5217\u8868")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"devices"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BluetoothDeviceInfo[]")),(0,l.kt)("td",null,"\u641c\u7d22\u5230\u7684\u8bbe\u5907\u5217\u8868")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h3",r({},{id:"bluetoothdeviceinfo"}),"BluetoothDeviceInfo"),(0,l.kt)("p",null,"\u641c\u7d22\u5230\u7684\u8bbe\u5907"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getConnectedBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getConnectedBluetoothDevices"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);