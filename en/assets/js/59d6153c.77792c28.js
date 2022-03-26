"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76788],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33746:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});t(93106);var i=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={title:"Design and Dimension unit"},l=void 0,s={unversionedId:"size",id:"size",title:"Design and Dimension unit",description:"It is recommended to use px,  % for dimension units in Taro, Taro will convert all units by default. In Taro, the size is written in a 1:1 relationship, that is, if the length 100px is measured from the design, then the size is written as 100px, and when it is converted to WeChat mini-program, the size will be converted to 100rpx by default, and when it is converted to H5, it will be converted to a value in rem by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/size.md",sourceDirName:".",slug:"/size",permalink:"/taro-docs/en/docs/next/size",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/size.md",tags:[],version:"current",frontMatter:{title:"Design and Dimension unit"},sidebar:"docs",previous:{title:"Compile Configuration",permalink:"/taro-docs/en/docs/next/config"},next:{title:"Global Configuration",permalink:"/taro-docs/en/docs/next/app-config"}},p={},c=[{value:"API",id:"api",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>onePxTransform</code> (Boolean)",id:"onepxtransform-boolean",level:3},{value:"<code>unitPrecision</code> (Number)",id:"unitprecision-number",level:3},{value:"<code>propList</code> (Array)",id:"proplist-array",level:3},{value:"<code>selectorBlackList</code>",id:"selectorblacklist",level:3},{value:"<code>replace</code> (Boolean)",id:"replace-boolean",level:3},{value:"<code>mediaQuery</code> (Boolean)",id:"mediaquery-boolean",level:3},{value:"<code>minPixelValue</code> (Number)",id:"minpixelvalue-number",level:3},{value:"CSS Compile-time ignores",id:"css-compile-time-ignores",level:2},{value:"Ignore single attributes",id:"ignore-single-attributes",level:3},{value:"Ignore style files",id:"ignore-style-files",level:3},{value:"Ignore style examples",id:"ignore-style-examples",level:3},{value:"Add a CSS comment to force the declaration to ignore the next line",id:"add-a-css-comment-to-force-the-declaration-to-ignore-the-next-line",level:4},{value:"Add CSS comments to force the declaration of multiple lines in between comments",id:"add-css-comments-to-force-the-declaration-of-multiple-lines-in-between-comments",level:4},{value:"Write as in-line style",id:"write-as-in-line-style",level:4},{value:"Links",id:"links",level:3}],d={toc:c};function u(e){var{components:n}=e,t=r(e,["components"]);return(0,i.kt)("wrapper",o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"px"),", ",(0,i.kt)("inlineCode",{parentName:"p"}," %")," for dimension units in Taro, Taro will convert all units by default. In Taro, the size is written in a 1:1 relationship, that is, if the length ",(0,i.kt)("inlineCode",{parentName:"p"},"100px")," is measured from the design, then the size is written as ",(0,i.kt)("inlineCode",{parentName:"p"},"100px"),", and when it is converted to WeChat mini-program, the size will be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"100rpx")," by default, and when it is converted to H5, it will be converted to a value in ",(0,i.kt)("inlineCode",{parentName:"p"},"rem")," by default."),(0,i.kt)("p",null,"If you want some of the ",(0,i.kt)("inlineCode",{parentName:"p"},"px")," units not to be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"rpx")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rem"),", it is most convenient to add a capital letter to the px units, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Px")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PX"),", which will be ignored by the conversion plugin."),(0,i.kt)("p",null,"Taro defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"750px")," as the conversion size standard, if the design is not ",(0,i.kt)("inlineCode",{parentName:"p"},"750px"),", you need to set it in the project configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"config/index.js"),", for example, if the design size is ",(0,i.kt)("inlineCode",{parentName:"p"},"640px"),", you need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"}," designWidth")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"640"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"const config = {\n  projectName: 'myProject',\n  date: '2018-4-18',\n  designWidth: 640,\n  ....\n}\n")),(0,i.kt)("p",null,"Taro supports ",(0,i.kt)("inlineCode",{parentName:"p"},"750"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"640")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"828")," sizes and their conversion rules are as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const DEVICE_RATIO = {\n  '640': 2.34 / 2,\n  '750': 1,\n  '828': 1.81 / 2\n}\n")),(0,i.kt)("p",null,"When using Taro, it is recommended to use iPhone 6 ",(0,i.kt)("inlineCode",{parentName:"p"},"750px")," as the design size standard."),(0,i.kt)("p",null,"If your design is ",(0,i.kt)("inlineCode",{parentName:"p"},"375"),", which is not one of the three above, then you need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"designWidth")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"375")," and add the conversion rule in ",(0,i.kt)("inlineCode",{parentName:"p"},"DEVICE_RATIO")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"const DEVICE_RATIO = {\n  '640': 2.34 / 2,\n  '750': 1,\n  '828': 1.81 / 2,\n  '375': 2 / 1\n}\n")),(0,i.kt)("h2",o({},{id:"api"}),"API"),(0,i.kt)("p",null,"During compilation, Taro will do the size conversion for you, but if you write inline styles in JS, you can't do the replacement.\nIn this case, Taro provides the API ",(0,i.kt)("inlineCode",{parentName:"p"},"Taro.pxTransform")," to do the size conversion at runtime."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"Taro.pxTransform(10) \n")),(0,i.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,i.kt)("p",null,"The default configuration converts all ",(0,i.kt)("inlineCode",{parentName:"p"},"px")," units, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Px")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PX")," with uppercase letters are ignored."),(0,i.kt)("p",null,"The default values of the parameters are as follows\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js"}),"{\n  onePxTransform: true,\n  unitPrecision: 5,\n  propList: ['*'],\n  selectorBlackList: [],\n  replace: true,\n  mediaQuery: false,\n  minPixelValue: 0\n}\n")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Object | Null")),(0,i.kt)("h3",o({},{id:"onepxtransform-boolean"}),(0,i.kt)("inlineCode",{parentName:"h3"},"onePxTransform")," (Boolean)"),(0,i.kt)("p",null,"Set whether 1px needs to be converted"),(0,i.kt)("h3",o({},{id:"unitprecision-number"}),(0,i.kt)("inlineCode",{parentName:"h3"},"unitPrecision")," (Number)"),(0,i.kt)("p",null,"The number of decimal places allowed in the REM unit."),(0,i.kt)("h3",o({},{id:"proplist-array"}),(0,i.kt)("inlineCode",{parentName:"h3"},"propList")," (Array)"),(0,i.kt)("p",null,"The property that allows the conversion."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Values need to be exact matches."),(0,i.kt)("li",{parentName:"ul"},"Use wildcard ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," to enable all properties. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"['*']")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," at the start or end of a word. (",(0,i.kt)("inlineCode",{parentName:"li"},"['*position*']")," will match ",(0,i.kt)("inlineCode",{parentName:"li"},"background-position-y"),")"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"!")," to not match a property. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"['*', '!letter-spacing']")),(0,i.kt)("li",{parentName:"ul"},'Combine the "not" prefix with the other prefixes. Example: ',(0,i.kt)("inlineCode",{parentName:"li"},"['*', '!font*']"))),(0,i.kt)("h3",o({},{id:"selectorblacklist"}),(0,i.kt)("inlineCode",{parentName:"h3"},"selectorBlackList")),(0,i.kt)("p",null,"Selectors in the blacklist will be ignored."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If value is string, it checks to see if selector contains the string.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['body']")," will match ",(0,i.kt)("inlineCode",{parentName:"li"},".body-class")))),(0,i.kt)("li",{parentName:"ul"},"If value is regexp, it checks to see if the selector matches the regexp.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[/^body$/]")," will match ",(0,i.kt)("inlineCode",{parentName:"li"},"body")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},".body"))))),(0,i.kt)("h3",o({},{id:"replace-boolean"}),(0,i.kt)("inlineCode",{parentName:"h3"},"replace")," (Boolean)"),(0,i.kt)("p",null,"Replace directly instead of appending an entry to override."),(0,i.kt)("h3",o({},{id:"mediaquery-boolean"}),(0,i.kt)("inlineCode",{parentName:"h3"},"mediaQuery")," (Boolean)"),(0,i.kt)("p",null,"Allow px unit conversion in media queries"),(0,i.kt)("h3",o({},{id:"minpixelvalue-number"}),(0,i.kt)("inlineCode",{parentName:"h3"},"minPixelValue")," (Number)"),(0,i.kt)("p",null,"Set a minimum px value that can be converted"),(0,i.kt)("p",null,"The configuration rules correspond to ",(0,i.kt)("inlineCode",{parentName:"p"},"config/index.js"),", e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'{9-14,20-25} title="/config/index.js"',"{9-14,20-25}":!0,title:'"/config/index.js"'}),"{\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      pxtransform: {\n        enable: true,\n        config: {\n          selectorBlackList: ['body']\n        }\n      }\n    }\n  },\n  mini: {\n    // ...\n    postcss: {\n      pxtransform: {\n        enable: true,\n        config: {\n          selectorBlackList: ['body']\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("h2",o({},{id:"css-compile-time-ignores"}),"CSS Compile-time ignores"),(0,i.kt)("h3",o({},{id:"ignore-single-attributes"}),"Ignore single attributes"),(0,i.kt)("p",null,"The simplest way to ignore individual attributes currently is to use capital letters for px units."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-css"})," /* `px` is converted to `rem` */\n.convert {\n  font-size: 16px; // converted to 1rem\n}\n\n /* `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers */\n.ignore {\n  border: 1Px solid; // ignored\n  border-width: 2PX; // ignored\n}\n")),(0,i.kt)("h3",o({},{id:"ignore-style-files"}),"Ignore style files"),(0,i.kt)("p",null,"The plugin does not handle files with the comment ",(0,i.kt)("inlineCode",{parentName:"p"},"/*postcss-pxtransform disable*/")," in the header."),(0,i.kt)("h3",o({},{id:"ignore-style-examples"}),"Ignore style examples"),(0,i.kt)("p",null,"When multiple lines of text are omitted from a style file we generally use the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-css",metastring:"{3}","{3}":!0}),".textHide {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp:2;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n")),(0,i.kt)("p",null,"However, Taro is compiled without the ",(0,i.kt)("inlineCode",{parentName:"p"},"-webkit-box-orient: vertical;")," style attribute, so we need to ignore this style"),(0,i.kt)("h4",o({},{id:"add-a-css-comment-to-force-the-declaration-to-ignore-the-next-line"}),"Add a CSS comment to force the declaration to ignore the next line"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-css",metastring:"{1}","{1}":!0}),"/* autoprefixer: ignore next */\n-webkit-box-orient: vertical;\n")),(0,i.kt)("h4",o({},{id:"add-css-comments-to-force-the-declaration-of-multiple-lines-in-between-comments"}),"Add CSS comments to force the declaration of multiple lines in between comments"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-css",metastring:"{1,3}","{1,3}":!0}),"/* autoprefixer: off */\n-webkit-box-orient: vertical;\n/* autoprefixer: on */\n")),(0,i.kt)("h4",o({},{id:"write-as-in-line-style"}),"Write as in-line style"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-HTML",metastring:"{2-9}","{2-9}":!0}),"<View \n  style={{\n    display: '-webkit-box',\n    '-webkit-box-orient': 'vertical',\n    '-webkit-line-clamp': 2,\n    'text-overflow': 'ellipsis',\n    overflow: 'hidden',\n    'line-height': 2\n  }}\n>\n  This is the content to be omitted\n</View>\n")),(0,i.kt)("h3",o({},{id:"links"}),"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",o({parentName:"li"},{href:"https://taro-club.jd.com/topic/2270/taro%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E7%9C%81%E7%95%A5%E4%B8%8D%E7%94%9F%E6%95%88"}),"Taro multi-line text omission does not work"))))}u.isMDXComponent=!0}}]);