"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[63278],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},i=void 0,a={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-3.x/apis/device/ibeacon/IBeaconInfo",title:"IBeaconInfo",description:"Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro-docs/en/docs/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",tags:[],version:"3.x",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"API",previous:{title:"getBeacons",permalink:"/taro-docs/en/docs/apis/device/ibeacon/getBeacons"},next:{title:"stopHCE",permalink:"/taro-docs/en/docs/apis/device/nfc/stopHCE"}},u={},s=[{value:"Methods",id:"methods",level:2}],d={toc:s};function p(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"accuracy"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The iBeacon device distance.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"major"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The iBeacon device primary ID.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"minor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The iBeacon device secondary ID.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"proximity"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The device distance enumerated value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"rssi"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The signal strength of the device.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"uuid"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The iBeacon device broadcast UUID.")))))}p.isMDXComponent=!0}}]);