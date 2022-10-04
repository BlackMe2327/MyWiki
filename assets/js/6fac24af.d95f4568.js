"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[9769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={},i="Sentinel\u89c4\u5219\u6301\u4e45\u5316",o={unversionedId:"SpringCloud Alibaba/Sentinel/Sentinel\u89c4\u5219\u6301\u4e45\u5316",id:"SpringCloud Alibaba/Sentinel/Sentinel\u89c4\u5219\u6301\u4e45\u5316",title:"Sentinel\u89c4\u5219\u6301\u4e45\u5316",description:"sentinel\u7684\u6240\u6709\u89c4\u5219\u90fd\u662f\u5185\u5b58\u5b58\u50a8\uff0c\u91cd\u542f\u540e\u6240\u6709\u89c4\u5219\u90fd\u4f1a\u4e22\u5931\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u6211\u4eec\u5fc5\u987b\u786e\u4fdd\u8fd9\u4e9b\u89c4\u5219\u7684\u6301\u4e45\u5316\uff0c\u907f\u514d\u4e22\u5931\u3002",source:"@site/docs/SpringCloud Alibaba/Sentinel/05-Sentinel\u89c4\u5219\u6301\u4e45\u5316.md",sourceDirName:"SpringCloud Alibaba/Sentinel",slug:"/SpringCloud Alibaba/Sentinel/Sentinel\u89c4\u5219\u6301\u4e45\u5316",permalink:"/MyWiki/docs/SpringCloud Alibaba/Sentinel/Sentinel\u89c4\u5219\u6301\u4e45\u5316",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SpringCloud Alibaba/Sentinel/05-Sentinel\u89c4\u5219\u6301\u4e45\u5316.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sentinel\u6388\u6743\u89c4\u5219",permalink:"/MyWiki/docs/SpringCloud Alibaba/Sentinel/Sentinel\u6388\u6743\u89c4\u5219"},next:{title:"Docker(\u5bb9\u5668\u5316\u6280\u672f)",permalink:"/MyWiki/docs/category/docker\u5bb9\u5668\u5316\u6280\u672f"}},p={},u=[{value:"\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f",id:"\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f",level:2},{value:"\u539f\u59cb\u6a21\u5f0f",id:"\u539f\u59cb\u6a21\u5f0f",level:2},{value:"pull\u6a21\u5f0f",id:"pull\u6a21\u5f0f",level:2},{value:"push\u6a21\u5f0f",id:"push\u6a21\u5f0f",level:2},{value:"\u5f15\u5165\u4f9d\u8d56",id:"\u5f15\u5165\u4f9d\u8d56",level:3},{value:"\u914d\u7f6enacos\u5730\u5740",id:"\u914d\u7f6enacos\u5730\u5740",level:3},{value:"\u4fee\u6539sentinel-dashboard\u6e90\u7801",id:"\u4fee\u6539sentinel-dashboard\u6e90\u7801",level:3},{value:"\u4fee\u6539nacos\u4f9d\u8d56",id:"\u4fee\u6539nacos\u4f9d\u8d56",level:4},{value:"\u6dfb\u52a0nacos\u652f\u6301",id:"\u6dfb\u52a0nacos\u652f\u6301",level:4},{value:"\u4fee\u6539nacos\u5730\u5740",id:"\u4fee\u6539nacos\u5730\u5740",level:4},{value:"\u914d\u7f6enacos\u6570\u636e\u6e90",id:"\u914d\u7f6enacos\u6570\u636e\u6e90",level:4},{value:"\u4fee\u6539\u524d\u7aef\u9875\u9762",id:"\u4fee\u6539\u524d\u7aef\u9875\u9762",level:4},{value:"\u91cd\u65b0\u7f16\u8bd1\u3001\u6253\u5305\u9879\u76ee",id:"\u91cd\u65b0\u7f16\u8bd1\u6253\u5305\u9879\u76ee",level:4},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u786c\u6027\u5237\u65b0",id:"\u786c\u6027\u5237\u65b0",level:3}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sentinel\u89c4\u5219\u6301\u4e45\u5316"},"Sentinel\u89c4\u5219\u6301\u4e45\u5316"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"sentinel\u7684\u6240\u6709\u89c4\u5219\u90fd\u662f\u5185\u5b58\u5b58\u50a8\uff0c\u91cd\u542f\u540e\u6240\u6709\u89c4\u5219\u90fd\u4f1a\u4e22\u5931\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u6211\u4eec\u5fc5\u987b\u786e\u4fdd\u8fd9\u4e9b\u89c4\u5219\u7684\u6301\u4e45\u5316\uff0c\u907f\u514d\u4e22\u5931\u3002")),(0,l.kt)("h2",{id:"\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f"},"\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f"),(0,l.kt)("p",null,"\u89c4\u5219\u662f\u5426\u80fd\u6301\u4e45\u5316\uff0c\u53d6\u51b3\u4e8e\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f\uff0csentinel\u652f\u6301\u4e09\u79cd\u89c4\u5219\u7ba1\u7406\u6a21\u5f0f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63a8\u9001\u6a21\u5f0f")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bf4\u660e")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4f18\u70b9")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7f3a\u70b9")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel"},"\u539f\u59cb\u6a21\u5f0f")),(0,l.kt)("td",{parentName:"tr",align:null},"API \u5c06\u89c4\u5219\u63a8\u9001\u81f3\u5ba2\u6237\u7aef\u5e76\u76f4\u63a5\u66f4\u65b0\u5230\u5185\u5b58\u4e2d\uff0c\u6269\u5c55\u5199\u6570\u636e\u6e90\uff08",(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%99%E6%89%A9%E5%B1%95"},"WritableDataSource"),"\uff09\uff0c\u9ed8\u8ba4\u5c31\u662f\u8fd9\u79cd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\uff0c\u65e0\u4efb\u4f55\u4f9d\u8d56"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4fdd\u8bc1\u4e00\u81f4\u6027\uff1b\u89c4\u5219\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u91cd\u542f\u5373\u6d88\u5931\u3002\u4e25\u91cd\u4e0d\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel"},"Pull   "),(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel"},"\u6a21\u5f0f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5199\u6570\u636e\u6e90\uff08",(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%99%E6%89%A9%E5%B1%95"},"WritableDataSource"),"\uff09\uff0c  \u5ba2\u6237\u7aef\u4e3b\u52a8\u5411\u67d0\u4e2a\u89c4\u5219\u7ba1\u7406\u4e2d\u5fc3\u5b9a\u671f\u8f6e\u8be2\u62c9\u53d6\u89c4\u5219\uff0c\u8fd9\u4e2a\u89c4\u5219\u4e2d\u5fc3\u53ef\u4ee5\u662f RDBMS\u3001\u6587\u4ef6 \u7b49"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\uff0c\u65e0\u4efb\u4f55\u4f9d\u8d56\uff1b\u89c4\u5219\u6301\u4e45\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4fdd\u8bc1\u4e00\u81f4\u6027\uff1b\u5b9e\u65f6\u6027\u4e0d\u4fdd\u8bc1\uff0c\u62c9\u53d6\u8fc7\u4e8e\u9891\u7e41\u4e5f\u53ef\u80fd\u4f1a\u6709\u6027\u80fd\u95ee\u9898\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel"},"Push   "),"**"),(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%9C%A8%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Sentinel"},"\u6a21\u5f0f"),"**"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u8bfb\u6570\u636e\u6e90\uff08",(0,l.kt)("a",{parentName:"td",href:"https://github.com/alibaba/Sentinel/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%99%E6%89%A9%E5%B1%95"},"ReadableDataSource"),"\uff09\uff0c\u89c4\u5219\u4e2d\u5fc3\u7edf\u4e00\u63a8\u9001\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u6ce8\u518c\u76d1\u542c\u5668\u7684\u65b9\u5f0f\u65f6\u523b\u76d1\u542c\u53d8\u5316\uff0c\u6bd4\u5982\u4f7f\u7528  Nacos\u3001Zookeeper  \u7b49\u914d\u7f6e\u4e2d\u5fc3\u3002\u8fd9\u79cd\u65b9\u5f0f\u6709\u66f4\u597d\u7684\u5b9e\u65f6\u6027\u548c\u4e00\u81f4\u6027\u4fdd\u8bc1\u3002",(0,l.kt)("strong",{parentName:"td"},"\u751f\u4ea7\u73af\u5883\u4e0b\u4e00\u822c\u91c7\u7528"),"  ",(0,l.kt)("strong",{parentName:"td"},"push"),"  ",(0,l.kt)("strong",{parentName:"td"},"\u6a21\u5f0f\u7684\u6570\u636e\u6e90\u3002")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c4\u5219\u6301\u4e45\u5316\uff1b\u4e00\u81f4\u6027\uff1b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u5165\u7b2c\u4e09\u65b9\u4f9d\u8d56")))),(0,l.kt)("h2",{id:"\u539f\u59cb\u6a21\u5f0f"},"\u539f\u59cb\u6a21\u5f0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u539f\u59cb\u6a21\u5f0f\uff1a\u63a7\u5236\u53f0\u914d\u7f6e\u7684\u89c4\u5219\u76f4\u63a5\u63a8\u9001\u5230Sentinel\u5ba2\u6237\u7aef\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u7684\u5e94\u7528\u3002\u7136\u540e\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u670d\u52a1\u91cd\u542f\u5219\u4e22\u5931")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219202426827.png?raw=true",alt:"image-20220219202426827"})),(0,l.kt)("h2",{id:"pull\u6a21\u5f0f"},"pull\u6a21\u5f0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pull\u6a21\u5f0f\uff1a\u63a7\u5236\u53f0\u5c06\u914d\u7f6e\u7684\u89c4\u5219\u63a8\u9001\u5230Sentinel\u5ba2\u6237\u7aef\uff0c\u800c\u5ba2\u6237\u7aef\u4f1a\u5c06\u914d\u7f6e\u89c4\u5219\u4fdd\u5b58\u5728\u672c\u5730\u6587\u4ef6\u6216\u6570\u636e\u5e93\u4e2d\u3002\u4ee5\u540e\u4f1a\u5b9a\u65f6\u53bb\u672c\u5730\u6587\u4ef6\u6216\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\uff0c\u66f4\u65b0\u672c\u5730\u89c4\u5219\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219202825678.png?raw=true",alt:"image-20220219202825678"})),(0,l.kt)("h2",{id:"push\u6a21\u5f0f"},"push\u6a21\u5f0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"push\u6a21\u5f0f\uff1a\u63a7\u5236\u53f0\u5c06\u914d\u7f6e\u89c4\u5219\u63a8\u9001\u5230\u8fdc\u7a0b\u914d\u7f6e\u4e2d\u5fc3\uff0c\u4f8b\u5982Nacos\u3002Sentinel\u5ba2\u6237\u7aef\u76d1\u542cNacos\uff0c\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4\u7684\u63a8\u9001\u6d88\u606f\uff0c\u5b8c\u6210\u672c\u5730\u914d\u7f6e\u66f4\u65b0\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219204407983.png?raw=true",alt:"image-20220219204407983"})),(0,l.kt)("h3",{id:"\u5f15\u5165\u4f9d\u8d56"},"\u5f15\u5165\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5728\u670d\u52a1\u4e2d\u5f15\u5165sentinel\u76d1\u542cnacos\u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-datasource-nacos</artifactId>\n</dependency>\n")),(0,l.kt)("h3",{id:"\u914d\u7f6enacos\u5730\u5740"},"\u914d\u7f6enacos\u5730\u5740"),(0,l.kt)("p",null,"\u5728\u670d\u52a1\u4e2d\u7684application.yml\u6587\u4ef6\u914d\u7f6enacos\u5730\u5740\u53ca\u76d1\u542c\u7684\u914d\u7f6e\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  cloud:\n    sentinel:\n      datasource:\n        flow:\n          nacos:\n            server-addr: localhost:8848 # nacos\u5730\u5740\n            dataId: orderservice-flow-rules\n            groupId: SENTINEL_GROUP\n            rule-type: flow # \u8fd8\u53ef\u4ee5\u662f\uff1adegrade\u3001authority\u3001param-flow\n")),(0,l.kt)("h3",{id:"\u4fee\u6539sentinel-dashboard\u6e90\u7801"},"\u4fee\u6539sentinel-dashboard\u6e90\u7801"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SentinelDashboard\u9ed8\u8ba4\u4e0d\u652f\u6301nacos\u7684\u6301\u4e45\u5316\uff0c\u9700\u8981\u4fee\u6539\u6e90\u7801\u3002")),(0,l.kt)("h4",{id:"\u4fee\u6539nacos\u4f9d\u8d56"},"\u4fee\u6539nacos\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5728sentinel-dashboard\u6e90\u7801\u7684pom\u6587\u4ef6\u4e2d\uff0cnacos\u7684\u4f9d\u8d56\u9ed8\u8ba4\u7684scope\u662ftest\uff0c\u53ea\u80fd\u5728\u6d4b\u8bd5\u65f6\u4f7f\u7528\uff0c\u8fd9\u91cc\u8981\u53bb\u9664\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-datasource-nacos</artifactId>\n    <scope>test</scope>\n</dependency>\n")),(0,l.kt)("p",null,"\u5c06sentinel-datasource-nacos\u4f9d\u8d56\u7684scope\u53bb\u6389\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.alibaba.csp</groupId>\n    <artifactId>sentinel-datasource-nacos</artifactId>\n</dependency>\n")),(0,l.kt)("h4",{id:"\u6dfb\u52a0nacos\u652f\u6301"},"\u6dfb\u52a0nacos\u652f\u6301"),(0,l.kt)("p",null,"\u5728sentinel-dashboard\u7684test\u5305\u4e0b\uff0c\u5df2\u7ecf\u7f16\u5199\u4e86\u5bf9nacos\u7684\u652f\u6301\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u62f7\u8d1d\u5230main\u4e0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219220210968.png?raw=true",alt:"image-20220219220210968"})),(0,l.kt)("h4",{id:"\u4fee\u6539nacos\u5730\u5740"},"\u4fee\u6539nacos\u5730\u5740"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u8fd8\u9700\u8981\u4fee\u6539\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u7684NacosConfig\u7c7b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219211236701.png?raw=true",alt:"image-20220219211236701"})),(0,l.kt)("p",null,"\u4fee\u6539\u5176\u4e2d\u7684nacos\u5730\u5740\uff0c\u8ba9\u5176\u8bfb\u53d6application.properties\u4e2d\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@ConfigurationProperties(prefix = "nacos")\npublic class NacosConfig {\n\n    //nacos\u5730\u5740\n    private String addr;\n\n    @Bean\n    public ConfigService nacosConfigService() throws Exception {\n        //\u4fee\u6539\u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\u5730\u5740\u4e3aaddr\n        return ConfigFactory.createConfigService(addr);\n    }\n    //\u6dfb\u52a0set\u65b9\u6cd5\n    public void setAddr(String addr) {\n        this.addr = addr;\n    }\n    //\u6dfb\u52a0get\u65b9\u6cd5\n    public String getAddr() {\n        return addr;\n    }\n\n    @Bean\n    public Converter<List<FlowRuleEntity>, String> flowRuleEntityEncoder() {\n        return JSON::toJSONString;\n    }\n\n    @Bean\n    public Converter<String, List<FlowRuleEntity>> flowRuleEntityDecoder() {\n        return s -> JSON.parseArray(s, FlowRuleEntity.class);\n    }\n\n}\n\n')),(0,l.kt)("p",null,"\u5728sentinel-dashboard\u7684application.properties\u4e2d\u6dfb\u52a0nacos\u5730\u5740\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"nacos.addr=localhost:8848\n")),(0,l.kt)("h4",{id:"\u914d\u7f6enacos\u6570\u636e\u6e90"},"\u914d\u7f6enacos\u6570\u636e\u6e90"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u8fd8\u9700\u8981\u4fee\u6539com.alibaba.csp.sentinel.dashboard.controller.v2\u5305\u4e0b\u7684FlowControllerV2\u7c7b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219211850482.png?raw=true",alt:"image-20220219211850482"})),(0,l.kt)("p",null,"\u4f7f\u6dfb\u52a0\u7684Nacos\u6570\u636e\u6e90\u751f\u6548\uff1a"),(0,l.kt)("p",null,"\u539f\u6765\u7684\u6837\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired\n@Qualifier("flowRuleDefaultProvider")\nprivate DynamicRuleProvider<List<FlowRuleEntity>> ruleProvider;\n@Autowired\n@Qualifier("flowRuleDefaultPublisher")\nprivate DynamicRulePublisher<List<FlowRuleEntity>> rulePublisher;\n')),(0,l.kt)("p",null,"\u4fee\u6539\u540e\u7684\u6a21\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired\n@Qualifier("flowRuleNacosProvider")\nprivate DynamicRuleProvider<List<FlowRuleEntity>> ruleProvider;\n@Autowired\n@Qualifier("flowRuleNacosPublisher")\nprivate DynamicRulePublisher<List<FlowRuleEntity>> rulePublisher;\n')),(0,l.kt)("h4",{id:"\u4fee\u6539\u524d\u7aef\u9875\u9762"},"\u4fee\u6539\u524d\u7aef\u9875\u9762"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8fd8\u8981\u4fee\u6539\u524d\u7aef\u9875\u9762\uff0c\u6dfb\u52a0\u4e00\u4e2a\u652f\u6301nacos\u7684\u83dc\u5355\u3002"),(0,l.kt)("p",null,"\u4fee\u6539src/main/webapp/resources/app/scripts/directives/sidebar/\u76ee\u5f55\u4e0b\u7684sidebar.html\u6587\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212223849.png?raw=true",alt:"image-20220219212223849"})),(0,l.kt)("p",null,"\u5c06\u5176\u4e2d\u7684\u8fd9\u90e8\u5206\u6ce8\u91ca\u6253\u5f00\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212300595.png?raw=true",alt:"image-20220219212300595"})),(0,l.kt)("p",null,"\u4fee\u6539\u5176\u4e2d\u7684\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<li ui-sref-active="active" ng-if="entry.appType==0">\n    <a ui-sref="dashboard.flow({app: entry.app})">\n    <i class="glyphicon glyphicon-filter"></i>&nbsp;&nbsp;\u6d41\u63a7\u89c4\u5219 V1</a>\n</li>\n')),(0,l.kt)("h4",{id:"\u91cd\u65b0\u7f16\u8bd1\u6253\u5305\u9879\u76ee"},"\u91cd\u65b0\u7f16\u8bd1\u3001\u6253\u5305\u9879\u76ee"),(0,l.kt)("p",null,"\u8fd0\u884cIDEA\u4e2d\u7684maven\u63d2\u4ef6\uff0c\u7f16\u8bd1\u548c\u6253\u5305\u4fee\u6539\u597d\u7684Sentinel-Dashboard\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212457703.png?raw=true",alt:"image-20220219212457703"})),(0,l.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("p",null,"\u542f\u52a8\u65b9\u5f0f\u8ddf\u5b98\u65b9\u4e00\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar sentinel-dashboard.jar\n")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4fee\u6539nacos\u5730\u5740\uff0c\u9700\u8981\u6dfb\u52a0\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar -Dnacos.addr=localhost:8848 sentinel-dashboard.jar\n")),(0,l.kt)("h3",{id:"\u786c\u6027\u5237\u65b0"},"\u786c\u6027\u5237\u65b0"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8c03\u8bd5\u63a7\u5236\u53f0\uff0c\u53f3\u952e\u5237\u65b0\u6309\u94ae\u9009\u62e9\u201c\u6e05\u7a7a\u7f13\u5b58\u5e76\u5f3a\u5236\u91cd\u65b0\u52a0\u8f7d\u201d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219220811538.png?raw=true",alt:"image-20220219220811538"})),(0,l.kt)("p",null,"\u53ea\u6709\u5728\u6d41\u63a7\u89c4\u5219-Nacos\u4e2d\u6dfb\u52a0\u7684\u89c4\u5219\u624d\u4f1a\u5728nacos\u4e2d\u67e5\u770b"),(0,l.kt)("p",null,"\u6dfb\u52a0\u6d41\u63a7\u89c4\u5219:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221113936.png?raw=true",alt:"image-20220219221113936"})),(0,l.kt)("p",null,"\u5230Nacos\u67e5\u770b\u89c4\u5219\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221136552.png?raw=true",alt:"image-20220219221136552"})),(0,l.kt)("p",null,"\u9891\u7e41\u5237\u65b0\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1\uff0c\u51fa\u73b0\u9650\u6d41\uff0c\u8bf4\u660e\u914d\u7f6e\u6210\u529f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221532897.png?raw=true",alt:"image-20220219221532897"})))}s.isMDXComponent=!0}}]);