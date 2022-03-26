"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39224],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(m,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42674:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(93106);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:t,className:n}),e)}},14186:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),a=n(98456),l=n(16454),o=n(26679),i="tabItem_uJot";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e){var t,n;const{lazy:a,block:p,defaultValue:u,values:c,groupId:s,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=c?c:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.lx)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const g=null===u?u:null!==(N=null!=u?u:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:null===(n=f[0])||void 0===n?void 0:n.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,l.UB)(),[y,w]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=s){const e=v[s];null!=e&&e!==y&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),r=k[n].value;r!==y&&(C(t),w(r),null!=s&&h(s,r))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},d)},k.map((({value:e,label:t,attributes:n})=>r.createElement("li",m({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:e=>O.push(e),onKeyDown:E,onFocus:x,onClick:x},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":y===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,a.Z)();return r.createElement(p,m({key:String(t)},e))}},80943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return s}});n(93106);var r=n(79874),a=n(14186),l=n(42674);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const m={title:"Form",sidebar_label:"Form"},p=void 0,u={unversionedId:"components/forms/form",id:"components/forms/form",title:"Form",description:"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002",source:"@site/docs/components/forms/form.md",sourceDirName:"components/forms",slug:"/components/forms/form",permalink:"/taro-docs/docs/next/components/forms/form",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/form.md",tags:[],version:"current",frontMatter:{title:"Form",sidebar_label:"Form"},sidebar:"components",previous:{title:"Editor",permalink:"/taro-docs/docs/next/components/forms/editor"},next:{title:"Input",permalink:"/taro-docs/docs/next/components/forms/input"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"FormProps",id:"formprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onSubmitEventDetail",id:"onsubmiteventdetail",level:3}],d={toc:s};function f(e){var{components:t}=e,m=i(e,["components"]);return(0,r.kt)("wrapper",o({},d,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002"),(0,r.kt)("p",null,"\u5f53\u70b9\u51fb form \u8868\u5355\u4e2d form-type \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(32998).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(67877).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(1228).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<FormProps>\n")),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <form @submit="formSubmit" @reset="formReset" >\n      <view class="taro-example-body">\n        <switch name="switch" class="form-switch"></Switch>\n      </view>\n      <view class="taro-example-btns">\n        <button form-type="submit">Submit</button>\n        <button type="default" form-type="reset">Reset</button>\n    </view>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {}\n  },\n  methods: {\n    formSubmit (e) {\n      console.log(e)\n    },\n\n    formReset (e) {\n      console.log(e)\n    }\n  }\n}\n<\/script>\n')))),(0,r.kt)("h2",o({},{id:"formprops"}),"FormProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"reportSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u662f\u5426\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"td"},"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"reportSubmitTimeout"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff08\u6beb\u79d2\u6570\uff09\u4ee5\u786e\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"td"},"formId")," \u662f\u5426\u751f\u6548\u3002",(0,r.kt)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"formId")," \u6709\u5f88\u5c0f\u7684\u6982\u7387\u662f\u65e0\u6548\u7684\uff08\u5982\u9047\u5230\u7f51\u7edc\u5931\u8d25\u7684\u60c5\u51b5\uff09\u3002",(0,r.kt)("br",null),"\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\u5c06\u53ef\u4ee5\u68c0\u6d4b ",(0,r.kt)("inlineCode",{parentName:"td"},"formId")," \u662f\u5426\u6709\u6548\uff0c",(0,r.kt)("br",null),"\u4ee5\u8fd9\u4e2a\u53c2\u6570\u7684\u65f6\u95f4\u4f5c\u4e3a\u8fd9\u9879\u68c0\u6d4b\u7684\u8d85\u65f6\u65f6\u95f4\u3002",(0,r.kt)("br",null),"\u5982\u679c\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"td"},"requestFormId:fail")," \u5f00\u5934\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"formId"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onSubmitEventDetail>")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6",(0,r.kt)("br",null),"event.detail = { value : {'name': 'value'} , formId: '' }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"onReset"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),(0,r.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"FormProps.reportSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"FormProps.reportSubmitTimeout"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"FormProps.onSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"FormProps.onReset"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,r.kt)("h3",o({},{id:"onsubmiteventdetail"}),"onSubmitEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"value"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{ [formItemName: string]: any; }")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"td"},"<form>")," \u8868\u5355\u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"form-type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"submit")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"<button>")," \u7ec4\u4ef6\u65f6\uff0c",(0,r.kt)("br",null),"\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c",(0,r.kt)("br",null),"\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," \u6765\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"formId"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"reportSubmit")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"td"},"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")))))}f.isMDXComponent=!0},67877:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);