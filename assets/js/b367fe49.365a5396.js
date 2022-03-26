"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15254],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(a),N=r,c=u["".concat(d,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42674:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:a}){return n.createElement("div",r({role:"tabpanel"},{hidden:e,className:a}),t)}},14186:function(t,e,a){a.d(e,{Z:function(){return m}});var n=a(93106),r=a(98456),l=a(16454),i=a(26679),p="tabItem_uJot";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},d.apply(this,arguments)}function o(t){var e,a;const{lazy:r,block:o,defaultValue:m,values:k,groupId:u,className:N}=t,c=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:c.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),s=(0,l.lx)(g,((t,e)=>t.value===e.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const h=null===m?m:null!==(b=null!=m?m:null===(e=c.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(a=c[0])||void 0===a?void 0:a.props.value;if(null!==h&&!g.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,l.UB)(),[y,x]=(0,n.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=u){const t=f[u];null!=t&&t!==y&&g.some((e=>e.value===t))&&x(t)}const P=t=>{const e=t.currentTarget,a=C.indexOf(e),n=g[a].value;n!==y&&(T(e),x(n),null!=u&&v(u,n))},E=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=C.indexOf(t.currentTarget)+1;e=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(t.currentTarget)-1;e=C[a]||C[C.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},N)},g.map((({value:t,label:e,attributes:a})=>n.createElement("li",d({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:t=>C.push(t),onKeyDown:E,onFocus:P,onClick:P},a,{className:(0,i.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":y===t})}),null!=e?e:t)))),r?(0,n.cloneElement)(c.filter((t=>t.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==y})))))}function m(t){const e=(0,r.Z)();return n.createElement(o,d({key:String(e)},t))}},16135:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});a(93106);var n=a(79874),r=a(14186),l=a(42674);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={title:"Textarea",sidebar_label:"Textarea"},o=void 0,m={unversionedId:"components/forms/textarea",id:"components/forms/textarea",title:"Textarea",description:"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/docs/components/forms/textarea.md",sourceDirName:"components/forms",slug:"/components/forms/textarea",permalink:"/taro-docs/docs/next/components/forms/textarea",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/textarea.md",tags:[],version:"current",frontMatter:{title:"Textarea",sidebar_label:"Textarea"},sidebar:"components",previous:{title:"Switch",permalink:"/taro-docs/docs/next/components/forms/switch"},next:{title:"KeyboardAccessory",permalink:"/taro-docs/docs/next/components/forms/keyboard-accessory"}},k={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"TextareaProps",id:"textareaprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onFocusEventDetail",id:"onfocuseventdetail",level:3},{value:"onBlurEventDetail",id:"onblureventdetail",level:3},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",level:3},{value:"onInputEventDetail",id:"oninputeventdetail",level:3},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",level:3}],N={toc:u};function c(t){var{components:e}=t,d=p(t,["components"]);return(0,n.kt)("wrapper",i({},N,d,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(32998).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(67877).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(1228).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextareaProps>\n")),(0,n.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),(0,n.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),(0,n.kt)("h2",i({},{id:"textareaprops"}),"TextareaProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7684\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"placeholder"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"placeholderStyle"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"placeholderClass"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"textarea-placeholder"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"disabled"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u7981\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"maxlength"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"140")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"autoFocus"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"focus"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u83b7\u53d6\u7126\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"autoHeight"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u81ea\u52a8\u589e\u9ad8\uff0c\u8bbe\u7f6e autoHeight \u65f6\uff0cstyle.height\u4e0d\u751f\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"fixed"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5982\u679c Textarea \u662f\u5728\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"td"},"position:fixed")," \u7684\u533a\u57df\uff0c\u9700\u8981\u663e\u793a\u6307\u5b9a\u5c5e\u6027 fixed \u4e3a true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cursorSpacing"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 Textarea \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursorSpacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cursor"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"-1")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a focus \u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"showConfirmBar"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\u952e\u76d8\u4e0a\u65b9\u5e26\u6709\u201d\u5b8c\u6210\u201c\u6309\u94ae\u90a3\u4e00\u680f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"selectionStart"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"-1")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionEnd \u642d\u914d\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"selectionEnd"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"-1")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionStart \u642d\u914d\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"adjustPosition"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"holdKeyboard"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"disableDefaultPadding"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u53bb\u6389 iOS \u4e0b\u7684\u9ed8\u8ba4\u5185\u8fb9\u8ddd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onFocus"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onFocusEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onBlur"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onBlurEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onLineChange"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onLineChangeEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u884c\u6570\u53d8\u5316\u65f6\u8c03\u7528\uff0cevent.detail = {height: 0, heightRpx: 0, lineCount: 0}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onInput"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onInputEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1 input \u4e8b\u4ef6\uff0cevent.detail = {value, cursor, keyCode}",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"onInput \u5904\u7406\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5e76\u4e0d\u4f1a\u53cd\u6620\u5230 textarea \u4e0a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onConfirm"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onConfirmEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u70b9\u51fb\u5b8c\u6210\u65f6\uff0c \u89e6\u53d1 confirm \u4e8b\u4ef6\uff0cevent.detail = {value: value}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onKeyboardHeightChange"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onKeyboardHeightChangeEventDetail>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"nativeProps"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,n.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")))),(0,n.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.value"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.placeholder"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderStyle"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderClass"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.disabled"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.maxlength"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.autoFocus"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.focus"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.autoHeight"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.fixed"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.cursorSpacing"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.cursor"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.showConfirmBar"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.selectionStart"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.selectionEnd"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.adjustPosition"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.holdKeyboard"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.disableDefaultPadding"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onFocus"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onBlur"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onLineChange"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onInput"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onConfirm"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.onKeyboardHeightChange"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"TextareaProps.nativeProps"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",i({},{id:"onfocuseventdetail"}),"onFocusEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u952e\u76d8\u9ad8\u5ea6")))),(0,n.kt)("h3",i({},{id:"onblureventdetail"}),"onBlurEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cursor"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5149\u6807\u4f4d\u7f6e")))),(0,n.kt)("h3",i({},{id:"onlinechangeeventdetail"}),"onLineChangeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"heightRpx"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"lineCount"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h3",i({},{id:"oninputeventdetail"}),"onInputEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"cursor"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5149\u6807\u4f4d\u7f6e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"keyCode"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u952e\u503c")))),(0,n.kt)("h3",i({},{id:"onconfirmeventdetail"}),"onConfirmEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8f93\u5165\u503c")))),(0,n.kt)("h3",i({},{id:"onkeyboardheightchangeeventdetail"}),"onKeyboardHeightChangeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u952e\u76d8\u9ad8\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"duration"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u6301\u7eed\u65f6\u95f4")))))}c.isMDXComponent=!0},67877:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);