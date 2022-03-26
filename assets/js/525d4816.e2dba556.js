"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25814],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(a),N=r,c=u["".concat(d,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42674:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:a}){return n.createElement("div",r({role:"tabpanel"},{hidden:e,className:a}),t)}},14186:function(t,e,a){a.d(e,{Z:function(){return m}});var n=a(93106),r=a(98456),l=a(16454),i=a(26679),p="tabItem_uJot";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},d.apply(this,arguments)}function o(t){var e,a;const{lazy:r,block:o,defaultValue:m,values:k,groupId:u,className:N}=t,c=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:c.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),s=(0,l.lx)(g,((t,e)=>t.value===e.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===m?m:null!==(b=null!=m?m:null===(e=c.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(a=c[0])||void 0===a?void 0:a.props.value;if(null!==y&&!g.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,l.UB)(),[f,P]=(0,n.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=u){const t=v[u];null!=t&&t!==f&&g.some((e=>e.value===t))&&P(t)}const E=t=>{const e=t.currentTarget,a=C.indexOf(e),n=g[a].value;n!==f&&(O(e),P(n),null!=u&&h(u,n))},j=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=C.indexOf(t.currentTarget)+1;e=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(t.currentTarget)-1;e=C[a]||C[C.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},N)},g.map((({value:t,label:e,attributes:a})=>n.createElement("li",d({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:t=>C.push(t),onKeyDown:j,onFocus:E,onClick:E},a,{className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":f===t})}),null!=e?e:t)))),r?(0,n.cloneElement)(c.filter((t=>t.props.value===f))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==f})))))}function m(t){const e=(0,r.Z)();return n.createElement(o,d({key:String(e)},t))}},28647:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});a(93106);var n=a(79874),r=a(14186),l=a(42674);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={title:"LivePlayer",sidebar_label:"LivePlayer"},o=void 0,m={unversionedId:"components/media/live-player",id:"version-3.x/components/media/live-player",title:"LivePlayer",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext",source:"@site/versioned_docs/version-3.x/components/media/live-player.md",sourceDirName:"components/media",slug:"/components/media/live-player",permalink:"/taro-docs/docs/components/media/live-player",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/media/live-player.md",tags:[],version:"3.x",frontMatter:{title:"LivePlayer",sidebar_label:"LivePlayer"},sidebar:"components",previous:{title:"Image",permalink:"/taro-docs/docs/components/media/image"},next:{title:"LivePusher",permalink:"/taro-docs/docs/components/media/live-pusher"}},k={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"LivePlayerProps",id:"liveplayerprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"Mode",id:"mode",level:3},{value:"Orientation",id:"orientation",level:3},{value:"objectFit",id:"objectfit",level:3},{value:"soundMode",id:"soundmode",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",level:3},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"Status",id:"status",level:3}],N={toc:u};function c(t){var{components:e}=t,d=p(t,["components"]);return(0,n.kt)("wrapper",i({},N,d,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e\u3002\u76f8\u5173api\uff1aTaro.createLivePlayerContext"),(0,n.kt)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(32998).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(1228).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePlayerProps>\n")),(0,n.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n"))),(0,n.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <live-player src="url" mode="live" :autoplay="true"  />\n</template>\n')))),(0,n.kt)("h2",i({},{id:"liveplayerprops"}),"LivePlayerProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"src"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u97f3\u89c6\u9891\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 flv, rtmp \u683c\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"mode"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof Mode")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"live"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"autoplay"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u81ea\u52a8\u64ad\u653e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"muted"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u9759\u97f3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"orientation"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof Orientation")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"vertical"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u753b\u9762\u65b9\u5411")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"objectFit"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof objectFit")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"contain"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u586b\u5145\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"backgroundMute"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3\uff08\u5df2\u5e9f\u5f03\uff0c\u9ed8\u8ba4\u9000\u53f0\u9759\u97f3\uff09",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"minCache"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u6700\u5c0f\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"maxCache"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"3")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u6700\u5c0f\u7f13\u51b2\u533a\uff0c\u5355\u4f4ds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"soundMode"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof soundMode")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"speaker"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u58f0\u97f3\u8f93\u51fa\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"autoPauseIfNavigate"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u8df3\u8f6c\u5230\u672c\u5c0f\u7a0b\u5e8f\u7684\u5176\u4ed6\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"autoPauseIfOpenNavigate"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u8df3\u8f6c\u5230\u5176\u5b83\u5fae\u4fe1\u539f\u751f\u9875\u9762\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u6682\u505c\u672c\u9875\u9762\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"pictureInPictureMode"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),'"" or "push" or "pop" or ("push" or "pop")[]'),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u5c0f\u7a97\u6a21\u5f0f\uff1a push, pop\uff0c\u7a7a\u5b57\u7b26\u4e32\u6216\u901a\u8fc7\u6570\u7ec4\u5f62\u5f0f\u8bbe\u7f6e\u591a\u79cd\u6a21\u5f0f\uff08\u5982\uff1a ",'["push", "pop"]',"\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onStateChange"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onStateChangeEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u64ad\u653e\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = {code}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onFullScreenChange"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onFullScreenChangeEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5168\u5c4f\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = {direction, fullScreen}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onNetStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onNetStatusEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = {info}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onAudioVolumeNotify"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<{}>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u64ad\u653e\u97f3\u91cf\u5927\u5c0f\u901a\u77e5\uff0cdetail = {}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onEnterPictureInPicture"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u64ad\u653e\u5668\u8fdb\u5165\u5c0f\u7a97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onLeavePictureInPicture"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u64ad\u653e\u5668\u9000\u51fa\u5c0f\u7a97")))),(0,n.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.src"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.mode"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoplay"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.muted"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.orientation"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.objectFit"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.backgroundMute"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.minCache"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.maxCache"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.soundMode"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfNavigate"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfOpenNavigate"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.pictureInPictureMode"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onStateChange"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onFullScreenChange"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onNetStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onAudioVolumeNotify"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onEnterPictureInPicture"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"LivePlayerProps.onLeavePictureInPicture"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",i({},{id:"mode"}),"Mode"),(0,n.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"live"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u76f4\u64ad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"RTC"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5b9e\u65f6\u901a\u8bdd\uff0c\u8be5\u6a21\u5f0f\u65f6\u5ef6\u66f4\u4f4e")))),(0,n.kt)("h3",i({},{id:"orientation"}),"Orientation"),(0,n.kt)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"vertical"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7ad6\u76f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"horizontal"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6c34\u5e73")))),(0,n.kt)("h3",i({},{id:"objectfit"}),"objectFit"),(0,n.kt)("p",null,"objectFit \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"contain"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u50cf\u957f\u8fb9\u586b\u6ee1\u5c4f\u5e55\uff0c\u77ed\u8fb9\u533a\u57df\u4f1a\u88ab\u586b\u5145\u2fca\u2f8a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"fillCrop"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u50cf\u94fa\u6ee1\u5c4f\u5e55\uff0c\u8d85\u51fa\u663e\u793a\u533a\u57df\u7684\u90e8\u5206\u5c06\u88ab\u622a\u6389")))),(0,n.kt)("h3",i({},{id:"soundmode"}),"soundMode"),(0,n.kt)("p",null,"soundMode \u7684\u5408\u6cd5\u503c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"speaker"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u626c\u58f0\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"ear"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u542c\u7b52")))),(0,n.kt)("h3",i({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u72b6\u6001\u7801")))),(0,n.kt)("h3",i({},{id:"onfullscreenchangeeventdetail"}),"onFullScreenChangeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"direction"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u65b9\u5411")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"fullScreen"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"number or boolean"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5168\u5c4f")))),(0,n.kt)("h3",i({},{id:"onnetstatuseventdetail"}),"onNetStatusEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"info"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"NetStatus"))))),(0,n.kt)("h3",i({},{id:"status"}),"Status"),(0,n.kt)("p",null,"\u72b6\u6001\u7801"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2001"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5df2\u7ecf\u8fde\u63a5\u670d\u52a1\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2002"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5df2\u7ecf\u8fde\u63a5 RTMP \u670d\u52a1\u5668,\u5f00\u59cb\u62c9\u6d41")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2003"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7f51\u7edc\u63a5\u6536\u5230\u9996\u4e2a\u89c6\u9891\u6570\u636e\u5305(IDR)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2004"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89c6\u9891\u64ad\u653e\u5f00\u59cb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2005"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89c6\u9891\u64ad\u653e\u8fdb\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2006"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89c6\u9891\u64ad\u653e\u7ed3\u675f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2007"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89c6\u9891\u64ad\u653eLoading")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2008"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89e3\u7801\u5668\u542f\u52a8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2009"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u89c6\u9891\u5206\u8fa8\u7387\u6539\u53d8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"-2301"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7f51\u7edc\u65ad\u8fde\uff0c\u4e14\u7ecf\u591a\u6b21\u91cd\u8fde\u62a2\u6551\u65e0\u6548\uff0c\u66f4\u591a\u91cd\u8bd5\u8bf7\u81ea\u884c\u91cd\u542f\u64ad\u653e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"-2302"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u83b7\u53d6\u52a0\u901f\u62c9\u6d41\u5730\u5740\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2101"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u89c6\u9891\u5e27\u89e3\u7801\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2102"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u97f3\u9891\u5e27\u89e3\u7801\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2103"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7f51\u7edc\u65ad\u8fde, \u5df2\u542f\u52a8\u81ea\u52a8\u91cd\u8fde")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2104"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7f51\u7edc\u6765\u5305\u4e0d\u7a33\uff1a\u53ef\u80fd\u662f\u4e0b\u884c\u5e26\u5bbd\u4e0d\u8db3\uff0c\u6216\u7531\u4e8e\u4e3b\u64ad\u7aef\u51fa\u6d41\u4e0d\u5747\u5300")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2105"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u89c6\u9891\u64ad\u653e\u51fa\u73b0\u5361\u987f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2106"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u786c\u89e3\u542f\u52a8\u5931\u8d25\uff0c\u91c7\u7528\u8f6f\u89e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2107"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u89c6\u9891\u5e27\u4e0d\u8fde\u7eed\uff0c\u53ef\u80fd\u4e22\u5e27")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"2108"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u6d41\u786c\u89e3\u7b2c\u4e00\u4e2aI\u5e27\u5931\u8d25\uff0cSDK\u81ea\u52a8\u5207\u8f6f\u89e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"3001"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"RTMP -DNS\u89e3\u6790\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"3002"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"RTMP\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"3003"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"RTMP\u670d\u52a1\u5668\u63e1\u624b\u5931\u8d25")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"3005"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"RTMP \u8bfb/\u5199\u5931\u8d25")))))}c.isMDXComponent=!0},67877:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);