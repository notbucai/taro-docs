"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17066],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42674:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},14186:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(93106),r=n(98456),l=n(16454),o=n(26679),i="tabItem_uJot";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},d.apply(this,arguments)}function p(t){var e,n;const{lazy:r,block:p,defaultValue:m,values:c,groupId:u,className:s}=t,k=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=c?c:k.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),g=(0,l.lx)(N,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const v=null===m?m:null!==(b=null!=m?m:null===(e=k.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(n=k[0])||void 0===n?void 0:n.props.value;if(null!==v&&!N.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.UB)(),[h,C]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=u){const t=f[u];null!=t&&t!==h&&N.some((e=>e.value===t))&&C(t)}const E=t=>{const e=t.currentTarget,n=O.indexOf(e),a=N[n].value;a!==h&&(w(e),C(a),null!=u&&y(u,a))},x=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=O.indexOf(t.currentTarget)+1;e=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(t.currentTarget)-1;e=O[n]||O[O.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},s)},N.map((({value:t,label:e,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:t=>O.push(t),onKeyDown:x,onFocus:E,onClick:E},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":h===t})}),null!=e?e:t)))),r?(0,a.cloneElement)(k.filter((t=>t.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})))))}function m(t){const e=(0,r.Z)();return a.createElement(p,d({key:String(e)},t))}},57474:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});n(93106);var a=n(79874),r=n(14186),l=n(42674);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const d={title:"Ad",sidebar_label:"Ad"},p=void 0,m={unversionedId:"components/open/ad",id:"version-3.x/components/open/ad",title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-3.x/components/open/ad.md",sourceDirName:"components/open",slug:"/components/open/ad",permalink:"/taro-docs/docs/components/open/ad",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/ad.md",tags:[],version:"3.x",frontMatter:{title:"Ad",sidebar_label:"Ad"},sidebar:"components",previous:{title:"Canvas",permalink:"/taro-docs/docs/components/canvas/"},next:{title:"AdCustom",permalink:"/taro-docs/docs/components/open/ad-custom"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"AdProps",id:"adprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"AdErrCode",id:"aderrcode",level:3}],s={toc:u};function k(t){var{components:e}=t,d=i(t,["components"]);return(0,a.kt)("wrapper",o({},s,d,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Banner \u5e7f\u544a"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(32998).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(1228).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AdProps>\n")),(0,a.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unitId=''\n        adIntervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),(0,a.kt)("h2",o({},{id:"adprops"}),"AdProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"unitId"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u5355\u5143id\uff0c\u53ef\u5728",(0,a.kt)("a",o({parentName:"td"},{href:"https://mp.weixin.qq.com/"}),"\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0"),"\u7684\u6d41\u91cf\u4e3b\u6a21\u5757\u65b0\u5efa")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"adIntervals"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u81ea\u52a8\u5237\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u53c2\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e30\uff08\u8be5\u53c2\u6570\u4e0d\u4f20\u5165\u65f6 Banner \u5e7f\u544a\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"adType"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),'"banner" or "video" or "grid"'),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a\u5c55\u793a",(0,a.kt)("inlineCode",{parentName:"td"},"banner"),"\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u8be5\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"video"),"\u5c55\u793a\u89c6\u9891\u5e7f\u544a, ",(0,a.kt)("inlineCode",{parentName:"td"},"grid"),"\u4e3a\u683c\u5b50\u5e7f\u544a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"adTheme"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),'"white" or "black"'),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u4e3b\u9898\u6837\u5f0f\u8bbe\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"onLoad"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onErrorEventDetail>")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u5e7f\u544a\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u4e8b\u4ef6\u83b7\u53d6\u9519\u8bef\u7801\u53ca\u539f\u56e0\uff0c\u4e8b\u4ef6\u5bf9\u8c61event.detail = {errCode: 1002}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"onClose"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e7f\u544a\u5173\u95ed\u7684\u56de\u8c03")))),(0,a.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.unitId"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.adIntervals"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.adType"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.adTheme"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onLoad"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onError"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onClose"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",o({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof AdErrCode"))))),(0,a.kt)("h3",o({},{id:"aderrcode"}),"AdErrCode"),(0,a.kt)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),(0,a.kt)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",o({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5f02\u5e38\u60c5\u51b5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u7406\u7531"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u89e3\u51b3\u65b9\u6848"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1000"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u540e\u7aef\u9519\u8bef\u8c03\u7528\u5931\u8d25")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1001"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53c2\u6570\u9519\u8bef")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1002"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1003"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5185\u90e8\u9519\u8bef")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1004"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1005"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1006"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1007"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1008"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))))}k.isMDXComponent=!0},67877:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);