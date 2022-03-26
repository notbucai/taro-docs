"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5261],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});n(93106);var o=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Overview"},l=void 0,s={unversionedId:"react-overall",id:"version-3.x/react-overall",title:"Overview",description:"Taro 3 supports running Web frameworks directly on each platform, and developers are using real frameworks like React and Vue.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/react-overall.md",sourceDirName:".",slug:"/react-overall",permalink:"/taro-docs/en/docs/react-overall",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-overall.md",tags:[],version:"3.x",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Babel Configuration",permalink:"/taro-docs/en/docs/babel-config"},next:{title:"Entry Component",permalink:"/taro-docs/en/docs/react-entry"}},p={},c=[{value:"React API",id:"react-api",level:2},{value:"Entry components and page components",id:"entry-components-and-page-components",level:2},{value:"Built-in Components",id:"built-in-components",level:2},{value:"Taro Specifications",id:"taro-specifications",level:3},{value:"Example",id:"example",level:3},{value:"Events",id:"events",level:2},{value:"Taro Specifications",id:"taro-specifications-1",level:3},{value:"Example Code",id:"example-code",level:3},{value:"Taro 3 event system on the mini-program",id:"taro-3-event-system-on-the-mini-program",level:3},{value:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f",id:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f",level:3},{value:"\u4e00\u3001Style",id:"\u4e00style",level:4},{value:"\u4e8c\u3001catchMove",id:"\u4e8ccatchmove",level:4},{value:"dataset",id:"dataset",level:3},{value:"General",id:"general",level:4},{value:"dataset",id:"dataset-1",level:4},{value:"Template Properties",id:"template-properties",level:4},{value:"Lifecycle Trigger",id:"lifecycle-trigger",level:2},{value:"React \u7684\u751f\u547d\u5468\u671f",id:"react-\u7684\u751f\u547d\u5468\u671f",level:3},{value:"1. componentWillMount ()",id:"1-componentwillmount-",level:5},{value:"2. componentDidMount ()",id:"2-componentdidmount-",level:5},{value:"Methods for mini program pages",id:"methods-for-mini-program-pages",level:3},{value:"Ref",id:"ref",level:2},{value:"React Ref",id:"react-ref",level:3},{value:"Get Mini Program DOM",id:"get-mini-program-dom",level:3},{value:"Hooks",id:"hooks",level:2},{value:"dangerouslySetInnerHTML",id:"dangerouslysetinnerhtml",level:2},{value:"Minified React error",id:"minified-react-error",level:2},{value:"Error: Minified React error #152",id:"error-minified-react-error-152",level:4},{value:"Other limitations",id:"other-limitations",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],m={toc:c};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Taro 3 supports running Web frameworks directly on each platform, and developers are using real frameworks like React and Vue."),(0,o.kt)("p",null,"However, Taro follows the WeChat mini program specification in terms of components, APIs, routing and other specifications, so there are some differences between using React in Taro and the familiar web side for developers, which will be listed in detail below."),(0,o.kt)("h2",r({},{id:"react-api"}),"React API"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[Breaking]"," Developers upgrading from Taro 1/2 to Taro 3 need to pay extra attention to")),(0,o.kt)("p",null,"Because developers in Taro 3 are using the real React, React APIs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),", etc. need to be fetched from the React package."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"import React, { Component, useState, useEffect } from 'react'\n")),(0,o.kt)("h2",r({},{id:"entry-components-and-page-components"}),"Entry components and page components"),(0,o.kt)("p",null,"Because Taro follows the routing specification for mini program, it introduces ",(0,o.kt)("a",r({parentName:"p"},{href:"./react-entry"}),"entry component")," and ",(0,o.kt)("a",r({parentName:"p"},{href:"./react-page"}),"page component")," concepts, which correspond to the mini program specification's entry component ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," and page component ",(0,o.kt)("inlineCode",{parentName:"p"},"page"),", respectively."),(0,o.kt)("p",null,"A Taro application consists of an entry component and at least one page component."),(0,o.kt)("h2",r({},{id:"built-in-components"}),"Built-in Components"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since Taro v3.3+, development with H5 tags is supported, see ",(0,o.kt)("a",r({parentName:"p"},{href:"use-h5"}),"Using HTML tags")," for details")),(0,o.kt)("p",null,"Development in Taro can be done using built-in components of the mini program specification, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<View>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Text>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Button>"),", etc."),(0,o.kt)("h3",r({},{id:"taro-specifications"}),"Taro Specifications"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Before using these built-in components in React, they must be introduced from ",(0,o.kt)("inlineCode",{parentName:"li"},"@tarojs/components"),"."),(0,o.kt)("li",{parentName:"ol"},"Component properties follow the ",(0,o.kt)("strong",{parentName:"li"},"Big Hump naming convention"),"."),(0,o.kt)("li",{parentName:"ol"},"See the next section for the event specification: ",(0,o.kt)("a",r({parentName:"li"},{href:"./react-overall#%E4%BA%8B%E4%BB%B6"}),"component events"),".")),(0,o.kt)("h3",r({},{id:"example"}),"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { Swiper, SwiperItem } from '@tarojs/components'\n\nfunction Index () {\n  return (\n    <Swiper\n      className='box'\n      autoplay\n      interval={1000}\n      indicatorColor='#999'\n      onClick={() => {}}\n      onAnimationFinish={() => {}}\n    >\n      <SwiperItem>\n        <View className='text'>1</View>\n      </SwiperItem>\n      <SwiperItem>\n        <View className='text'>2</View>\n      </SwiperItem>\n      <SwiperItem>\n        <View className='text'>3</View>\n      </SwiperItem>\n    </Swiper>\n  )\n}\n")),(0,o.kt)("p",null,"Note: If a new component or property of a component added to a platform is not yet supported by Taro, you can submit ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/issues"}),"Issues")," and we will fix it as soon as possible."),(0,o.kt)("h2",r({},{id:"events"}),"Events"),(0,o.kt)("p",null,"Events are the same as on the web side. In the event callback function, the first argument is the event object, and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"stopPropagation")," in the callback will stop the bubbling."),(0,o.kt)("h3",r({},{id:"taro-specifications-1"}),"Taro Specifications"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The built-in event names start with ",(0,o.kt)("inlineCode",{parentName:"li"},"on")," and follow the camelCase naming convention. "),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," for click events in React.")),(0,o.kt)("h3",r({},{id:"example-code"}),"Example Code"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"function Comp () {\n  function clickHandler (e) {\n    e.stopPropagation()\n  }\n\n  function scrollHandler () {}\n\n  // Only the mini program bindtap corresponds to Taro's onClick\n  // The rest of the mini program event names replace bind with on, which is the Taro event name (except for the Alipay mini program, whose event starts with on)\n  return <ScrollView onClick={clickHandler} onScroll={scrollHandler} />\n}\n")),(0,o.kt)("h3",r({},{id:"taro-3-event-system-on-the-mini-program"}),"Taro 3 event system on the mini-program"),(0,o.kt)("p",null,"In Taro 1 & 2, Taro determines whether the events bound in the mini program template are in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"bind")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," depending on whether the developer uses ",(0,o.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()"),". Thus event bubbling is controlled by the mini-program."),(0,o.kt)("p",null,"But in Taro 3, we have implemented a system of events in the mini-program logic layer, including event triggering and event bubbling. The events bound in the mini-program template are in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,o.kt)("p",null,"In general, this system of mini-program events implemented in the logic layer works properly, with event callbacks that trigger, bubble, and stop bubbling correctly."),(0,o.kt)("p",null,"However, the ",(0,o.kt)("inlineCode",{parentName:"p"},"catchtouchmove")," event bound to the mini-program template prevents the callback function from bubbling through",(0,o.kt)("strong",{parentName:"p"}," in addition to preventing the view from "),"scrolling through**, something Taro's event system cannot do."),(0,o.kt)("h3",r({},{id:"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f"}),"\u963b\u6b62\u6eda\u52a8\u7a7f\u900f"),(0,o.kt)("p",null,"In the previous point, we introduced the event mechanism of Taro 3. Since events are bound as ",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),", you cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"e.stopPropagation()")," to prevent scroll-through."),(0,o.kt)("p",null,"Two solutions are summarized for the problem of rolling penetration:"),(0,o.kt)("h4",r({},{id:"\u4e00style"}),"\u4e00\u3001Style"),(0,o.kt)("p",null,"Use the style to solve. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/5984#issuecomment-614502302"}),"Disable scrolling of penetrated components"),"\u3002"),(0,o.kt)("p",null,"This is also the most recommended practice."),(0,o.kt)("h4",r({},{id:"\u4e8ccatchmove"}),"\u4e8c\u3001catchMove"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro 3.0.21 starts to support")),(0,o.kt)("p",null,"But the map component itself is scrollable, even if its width and height are fixed. So the first approach can't handle the scrolling events that bubble up to the map component."),(0,o.kt)("p",null,"This is where you can add the ",(0,o.kt)("strong",{parentName:"p"},"catchMove")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"// This View component will bind the catchtouchmove event instead of bindtouchmove.\n<View catchMove></View>\n")),(0,o.kt)("h3",r({},{id:"dataset"}),"dataset"),(0,o.kt)("h4",r({},{id:"general"}),"General"),(0,o.kt)("p",null,"We recommend thinking in terms of the DSL features of React and Vue, since ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," is a feature of mini program."),(0,o.kt)("h4",r({},{id:"dataset-1"}),"dataset"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," is a special template property that allows you to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object of an event callback."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is supported by Taro"),", and can be obtained in the event callback object via ",(0,o.kt)("inlineCode",{parentName:"p"},"event.target.dataset")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"event.currentTarget.dataset"),"."),(0,o.kt)("h4",r({},{id:"template-properties"}),"Template Properties"),(0,o.kt)("p",null,"As mentioned in the previous point, Taro's simulation of the mini program ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," is implemented in the ",(0,o.kt)("strong",{parentName:"p"},"logic layer")," of the mini program. ",(0,o.kt)("strong",{parentName:"p"},"Not really setting this property in the template"),"."),(0,o.kt)("p",null,"But when there are APIs in the mini proram (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"createIntersectionObserver"),") that get to the node of the page, they don't get it because there is no actual corresponding property on the node."),(0,o.kt)("p",null,"At this point, consider using the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-inject"}),"taro-plugin-inject")," plugin to inject some generic properties, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    ['@tarojs/plugin-inject', {\n      components: {\n        View: {\n          'data-index': \"'dataIndex'\"\n        },\n        ScrollView: {\n          'data-observe': \"'dataObserve'\",\n        }\n      }\n    }]\n  ]\n}\n")),(0,o.kt)("h2",r({},{id:"lifecycle-trigger"}),"Lifecycle Trigger"),(0,o.kt)("p",null,"Taro 3 implements a web-standard BOM and DOM API on the mini-program logic layer. So the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.appendChild"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"document.removeChild"),", and other APIs used by React are actually implemented by Taro emulation, with the end effect of rendering React's virtual DOM tree as a Web-standard DOM tree emulated by Taro."),(0,o.kt)("p",null,"So in Taro3, React's lifecycle trigger timing is a little different from what we normally understand in web development."),(0,o.kt)("h3",r({},{id:"react-\u7684\u751f\u547d\u5468\u671f"}),"React \u7684\u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,"The lifecycle methods of React components are supported in Taro."),(0,o.kt)("p",null,"Trigger timing\uff1a"),(0,o.kt)("h5",r({},{id:"1-componentwillmount-"}),"1. componentWillMount ()"),(0,o.kt)("p",null,"After ",(0,o.kt)("a",r({parentName:"p"},{href:"./react-page#onload-options"}),"onLoad"),", the page component is triggered before rendering to Taro's virtual DOM."),(0,o.kt)("h5",r({},{id:"2-componentdidmount-"}),"2. componentDidMount ()"),(0,o.kt)("p",null,"Triggered after the page component is rendered to Taro's virtual DOM."),(0,o.kt)("p",null,"Taro's virtual DOM is accessible at this point (using methods such as React ref, document.getElementById, etc.), and modifications to it are supported (setting the style of the DOM, etc.)."),(0,o.kt)("p",null,"However, this does not mean that Taro's virtual DOM data has been transferred from the logical layer ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," to the view layer. So at this point ",(0,o.kt)("strong",{parentName:"p"}," it is not possible to get the DOM nodes of the rendering layer of the mini program by methods like ",(0,o.kt)("inlineCode",{parentName:"strong"},"createSelectorQuery"),". ")," You can only get the DOM node in ",(0,o.kt)("a",r({parentName:"p"},{href:"./react-page#onready-"}),"onReady")," lifecycle."),(0,o.kt)("h3",r({},{id:"methods-for-mini-program-pages"}),"Methods for mini program pages"),(0,o.kt)("p",null,"The methods in the mini program page can also be used in Taro's page: write the methods with the same name in the Class Component and use the corresponding Hooks in the Functional Component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mini Program page methods are not supported to the same extent on each end."),(0,o.kt)("li",{parentName:"ul"},"Mini Program page components that use HOC wrappers must handle forwardRef or use inherited components instead of returned components, otherwise the mini program page method may not be triggered.")),(0,o.kt)("h2",r({},{id:"ref"}),"Ref"),(0,o.kt)("p",null,'The use of ref in Taro is exactly the same as in React, but the "DOM" obtained is different from the browser environment and the mini program environment.'),(0,o.kt)("h3",r({},{id:"react-ref"}),"React Ref"),(0,o.kt)("p",null,"What you get with React Ref is Taro's virtual DOM, which is similar to the browser's DOM, so you can manipulate its ",(0,o.kt)("inlineCode",{parentName:"p"},"style"),", call its API, and so on."),(0,o.kt)("p",null,"However, Taro's virtual DOM runs on the mini program logic layer and is not a real mini program rendering layer node, and it has no information about the size, width, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="Example Code"',title:'"Example','Code"':!0}),"import React, { createRef } from 'react'\nimport { View } from '@tarojs/components'\n\nexport default class Test extends React.Component {\n  el = createRef()\n\n  componentDidMount () {\n    // The obtained DOM has an API similar to that of objects like HTMLElement or Text\n    console.log(this.el.current)\n  }\n\n  render () {\n    return (\n      <View id='only' ref={this.el} />\n    )\n  }\n}\n")),(0,o.kt)("h3",r({},{id:"get-mini-program-dom"}),"Get Mini Program DOM"),(0,o.kt)("p",null,"To get the real mini program rendering layer node, you need to call the API used to get the DOM in the mini program during the ",(0,o.kt)("a",r({parentName:"p"},{href:"react-page#onready-"}),"onReady")," lifecycle."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="Example Code"',title:'"Example','Code"':!0}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport Taro from '@tarojs/taro'\n\nexport default class Test extends React.Component {\n  onReady () {\n    // onReady is triggered to get the node of the rendering layer of the mini program\n    Taro.createSelectorQuery().select('#only')\n      .boundingClientRect()\n      .exec(res => console.log(res))\n  }\n\n  render () {\n    return (\n      <View id='only' />\n    )\n  }\n}\n")),(0,o.kt)("h2",r({},{id:"hooks"}),"Hooks"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"/taro-docs/en/docs/hooks"}),"Hooks Document")),(0,o.kt)("h2",r({},{id:"dangerouslysetinnerhtml"}),"dangerouslySetInnerHTML"),(0,o.kt)("p",null,"On the mini program side, there are some additional configuration options and things to note when using ",(0,o.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),", please refer to ",(0,o.kt)("a",r({parentName:"p"},{href:"html"}),'"Rendering HTML"')," for details."),(0,o.kt)("h2",r({},{id:"minified-react-error"}),"Minified React error"),(0,o.kt)("p",null,"Because the development version of React is larger, Taro uses the production version of React as the default dependency when building mini programs to reduce the size of the mini program and to facilitate real-world previews during development."),(0,o.kt)("p",null,"However, the production version of React does not show the error stack when there is an error. So when you encounter an error like this: ","[Error: Minified React error #152]",". You can change the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/next/config-detail#minidebugreact"}),"mini.debugReact")," option in the build configuration and turn the build back on. This will cause Taro to use the development version of React and output the error stack."),(0,o.kt)("h4",r({},{id:"error-minified-react-error-152"}),"Error: Minified React error #152"),(0,o.kt)("p",null,(0,o.kt)("img",r({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/minified-react-error.png",alt:null}))),(0,o.kt)("h2",r({},{id:"other-limitations"}),"Other limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since mini-program do not support dynamic introduction, the ",(0,o.kt)("inlineCode",{parentName:"li"},"React.lazy")," API cannot be used in mini-program."),(0,o.kt)("li",{parentName:"ul"},"It is not possible to insert elements outside the DOM tree of a page component, so ",(0,o.kt)("inlineCode",{parentName:"li"},"<Portal>")," is not supported."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of all components must remain unique throughout the application (even if they are on different pages), otherwise it may cause problems with events not firing.",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7317"}),"#7317"))),(0,o.kt)("h2",r({},{id:"frequently-asked-questions"}),"Frequently Asked Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The render layer element information is not available in ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount"),".",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7116"}),"7116")),(0,o.kt)("li",{parentName:"ul"},"The latest width and height of the component is not available in ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"),".",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7491"}),"#7491")),(0,o.kt)("li",{parentName:"ul"},"When the nesting level is deep, the child elements cannot be queried using ",(0,o.kt)("inlineCode",{parentName:"li"},"selectorQuery"),".",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7411"}),"#7411"))))}d.isMDXComponent=!0}}]);