"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73222],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),k=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=k(t.components);return l.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=k(n),p=r,s=m["".concat(i,".").concat(p)]||m[p]||c[p]||a;return n?l.createElement(s,o(o({ref:e},u),{},{components:n})):l.createElement(s,o({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var k=2;k<a;k++)o[k]=n[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11322:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Camera",sidebar_label:"Camera"},d=void 0,i={unversionedId:"components/media/camera",id:"version-2.x/components/media/camera",title:"Camera",description:"\u7cfb\u7edf\u76f8\u673a",source:"@site/versioned_docs/version-2.x/components/media/camera.md",sourceDirName:"components/media",slug:"/components/media/camera",permalink:"/taro-docs/en/docs/2.x/components/media/camera",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/components/media/camera.md",tags:[],version:"2.x",frontMatter:{title:"Camera",sidebar_label:"Camera"},sidebar:"version-2.x/components",previous:{title:"Video",permalink:"/taro-docs/en/docs/2.x/components/media/video"},next:{title:"Map",permalink:"/taro-docs/en/docs/2.x/components/maps/map"}},k={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"CameraProps",id:"cameraprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"mode",id:"mode",level:3},{value:"resolution",id:"resolution",level:3},{value:"devicePosition",id:"deviceposition",level:3},{value:"flash",id:"flash",level:3},{value:"frameSize",id:"framesize",level:3},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],c={toc:u};function m(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7cfb\u7edf\u76f8\u673a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CameraProps>\n")),(0,l.kt)("h2",r({},{id:"cameraprops"}),"CameraProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"normal" | "scanCode"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"normal"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3anormal, scanCode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"resolution"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"low" | "medium" | "high"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"medium"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5206\u8fa8\u7387\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"devicePosition"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"front" | "back"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"back"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6444\u50cf\u5934\u671d\u5411")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"flash"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"auto" | "on" | "off" | "torch"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"auto"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u95ea\u5149\u706f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"frameSize"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"medium" | "small" | "large"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"medium"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6307\u5b9a\u671f\u671b\u7684\u76f8\u673a\u5e27\u6570\u636e\u5c3a\u5bf8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scanArea"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number[]")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u626b\u7801\u8bc6\u522b\u533a\u57df\uff0c\u683c\u5f0f\u4e3a[x, y, w, h]\uff0c",(0,l.kt)("br",null),"x,y\u662f\u76f8\u5bf9\u4e8ecamera\u663e\u793a\u533a\u57df\u7684\u5de6\u4e0a\u89d2\uff0c",(0,l.kt)("br",null),'w,h\u4e3a\u533a\u57df\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\uff0c\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStop"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c",(0,l.kt)("br",null),"\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onInitDone"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u76f8\u673a\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onScanCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5728\u6210\u529f\u8bc6\u522b\u5230\u4e00\u7ef4\u7801\u65f6\u89e6\u53d1\uff0c",(0,l.kt)("br",null),'\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')))),(0,l.kt)("h3",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.mode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.resolution"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.devicePosition"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.flash"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.frameSize"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.scanArea"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onStop"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onError"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onInitDone"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onScanCode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"normal"),(0,l.kt)("td",null,"\u76f8\u673a\u6a21\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scanCode"),(0,l.kt)("td",null,"\u626b\u7801\u6a21\u5f0f")))),(0,l.kt)("h3",r({},{id:"resolution"}),"resolution"),(0,l.kt)("p",null,"resolution \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"low"),(0,l.kt)("td",null,"\u4f4e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"\u4e2d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"high"),(0,l.kt)("td",null,"\u9ad8")))),(0,l.kt)("h3",r({},{id:"deviceposition"}),"devicePosition"),(0,l.kt)("p",null,"device-position \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"front"),(0,l.kt)("td",null,"\u524d\u7f6e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"back"),(0,l.kt)("td",null,"\u540e\u7f6e")))),(0,l.kt)("h3",r({},{id:"flash"}),"flash"),(0,l.kt)("p",null,"flash \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"auto"),(0,l.kt)("td",null,"\u81ea\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"on"),(0,l.kt)("td",null,"\u6253\u5f00")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"off"),(0,l.kt)("td",null,"\u5173\u95ed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"torch"),(0,l.kt)("td",null,"\u5e38\u4eae")))),(0,l.kt)("h3",r({},{id:"framesize"}),"frameSize"),(0,l.kt)("p",null,"frame-size \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"small"),(0,l.kt)("td",null,"\u5c0f\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"\u4e2d\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"large"),(0,l.kt)("td",null,"\u5927\u5c3a\u5bf8\u5e27\u6570\u636e")))),(0,l.kt)("h3",r({},{id:"oninitdoneeventdetail"}),"onInitDoneEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxZoom"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u6700\u5927\u53d8\u7126")))),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Camera"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);