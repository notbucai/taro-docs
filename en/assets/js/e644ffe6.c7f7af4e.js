"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61845],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=i(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42674:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(93106);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:e,className:n}),t)}},14186:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(93106),a=n(98456),l=n(16454),o=n(26679),u="tabItem_uJot";function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function i(t){var e,n;const{lazy:a,block:i,defaultValue:c,values:s,groupId:d,className:k}=t,m=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=s?s:m.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),h=(0,l.lx)(g,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const y=null===c?c:null!==(f=null!=c?c:null===(e=m.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==f?f:null===(n=m[0])||void 0===n?void 0:n.props.value;if(null!==y&&!g.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,l.UB)(),[N,O]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=d){const t=v[d];null!=t&&t!==N&&g.some((e=>e.value===t))&&O(t)}const w=t=>{const e=t.currentTarget,n=x.indexOf(e),r=g[n].value;r!==N&&(T(e),O(r),null!=d&&b(d,r))},P=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=x.indexOf(t.currentTarget)+1;e=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;e=x[n]||x[x.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},g.map((({value:t,label:e,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:t=>x.push(t),onKeyDown:P,onFocus:w,onClick:w},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===t})}),null!=e?e:t)))),a?(0,r.cloneElement)(m.filter((t=>t.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==N})))))}function c(t){const e=(0,a.Z)();return r.createElement(i,p({key:String(e)},t))}},66413:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874),a=n(14186),l=n(42674);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"OpenData",sidebar_label:"OpenData"},i=void 0,c={unversionedId:"components/open/open-data",id:"version-3.x/components/open/open-data",title:"OpenData",description:"Displays WeChat open data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro-docs/en/docs/components/open/open-data",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/open-data.md",tags:[],version:"3.x",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro-docs/en/docs/components/open/official-account"},next:{title:"WebView",permalink:"/taro-docs/en/docs/components/open/web-view"}},s={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"OpenDataProps",id:"opendataprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"type",id:"type-1",level:3},{value:"lang",id:"lang",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:d};function m(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)("wrapper",o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Displays WeChat open data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/open-data.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,r.kt)("h2",o({},{id:"opendataprops"}),"OpenDataProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The type of the open data.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"openGid"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'The ID of the group. It is valid when type="groupName".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lang"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"en"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'Specifies the language used to display userInfo. It is valid when type="user*".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultText"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Default text when data is empty")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultAvatar"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Default image when user avatar is empty, supports relative paths and network image paths.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the group name or user information is empty.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"type-1"}),"type"),(0,r.kt)("p",null,"type Valid values of type"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"groupName"),(0,r.kt)("td",null,"The name of the group")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userNickName"),(0,r.kt)("td",null,"The nickname of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userAvatarUrl"),(0,r.kt)("td",null,"The profile photo of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userGender"),(0,r.kt)("td",null,"The gender of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userCity"),(0,r.kt)("td",null,"The city where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userProvince"),(0,r.kt)("td",null,"The province where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userCountry"),(0,r.kt)("td",null,"The country where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userLanguage"),(0,r.kt)("td",null,"The language used by the user")))),(0,r.kt)("h3",o({},{id:"lang"}),"lang"),(0,r.kt)("p",null,"Valid values of lang"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"en"),(0,r.kt)("td",null,"English")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zh_CN"),(0,r.kt)("td",null,"Simplified Chinese")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zh_TW"),(0,r.kt)("td",null,"Traditional Chinese")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenData"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);