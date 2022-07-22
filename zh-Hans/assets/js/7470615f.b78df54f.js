"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[5986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={},o="\u4e3a\u4ec0\u4e48\u9700\u8981\u7f51\u5173",i={unversionedId:"Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/GateWay\u5165\u95e8",id:"Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/GateWay\u5165\u95e8",title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u7f51\u5173",description:"\u7f51\u5173\u529f\u80fd",source:"@site/docs/Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/01-GateWay\u5165\u95e8.md",sourceDirName:"Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)",slug:"/Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/GateWay\u5165\u95e8",permalink:"/zh-Hans/docs/Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/GateWay\u5165\u95e8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/01-GateWay\u5165\u95e8.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GateWay(\u7edf\u4e00\u7f51\u5173)",permalink:"/zh-Hans/docs/category/gateway\u7edf\u4e00\u7f51\u5173"},next:{title:"predicates(\u8def\u7531\u65ad\u8a00)",permalink:"/zh-Hans/docs/Spring Cloud/GateWay(\u7edf\u4e00\u7f51\u5173)/GateWay\u8def\u7531\u65ad\u8a00"}},c={},u=[{value:"\u7f51\u5173\u529f\u80fd",id:"\u7f51\u5173\u529f\u80fd",level:2},{value:"\u7f51\u5173\u6280\u672f\u5b9e\u73b0",id:"\u7f51\u5173\u6280\u672f\u5b9e\u73b0",level:2},{value:"\u521b\u5efa\u65b0\u7684module\uff0c\u5f15\u5165SpringCloudGateway\u7684\u4f9d\u8d56\u548cnacos\u7684\u670d\u52a1\u53d1\u73b0\u4f9d\u8d56",id:"\u521b\u5efa\u65b0\u7684module\u5f15\u5165springcloudgateway\u7684\u4f9d\u8d56\u548cnacos\u7684\u670d\u52a1\u53d1\u73b0\u4f9d\u8d56",level:2},{value:"\u7f16\u5199\u8def\u7531\u914d\u7f6e\u53canacos\u5730\u5740",id:"\u7f16\u5199\u8def\u7531\u914d\u7f6e\u53canacos\u5730\u5740",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u7f51\u5173"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u7f51\u5173"),(0,n.kt)("h2",{id:"\u7f51\u5173\u529f\u80fd"},"\u7f51\u5173\u529f\u80fd"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8eab\u4efd\u8ba4\u8bc1\u548c\u6743\u9650\u6821\u9a8c"),(0,n.kt)("li",{parentName:"ol"},"\u670d\u52a1\u8def\u7531\u3001\u8d1f\u8f7d\u5747\u8861"),(0,n.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u9650\u6d41")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207231553965.png?raw=true",alt:"image-20220207231553965"})),(0,n.kt)("h2",{id:"\u7f51\u5173\u6280\u672f\u5b9e\u73b0"},"\u7f51\u5173\u6280\u672f\u5b9e\u73b0"),(0,n.kt)("p",null,"\u5728SpringCloud\u4e2d\u7f51\u5173\u7684\u5b9e\u73b0\u5305\u62ec\u4e24\u79cd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gateway,SpringCloudGateway\u5219\u662f\u57fa\u4e8eSpring5\u4e2d\u63d0\u4f9b\u7684WebFlux\uff0c\u5c5e\u4e8e\u54cd\u5e94\u5f0f\u7f16\u7a0b\u7684\u5b9e\u73b0\uff0c\u5177\u5907\u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"zuul,Zuul\u662f\u57fa\u4e8eServlet\u7684\u5b9e\u73b0\uff0c\u5c5e\u4e8e\u963b\u585e\u5f0f\u7f16\u7a0b\u3002")),(0,n.kt)("h1",{id:"\u642d\u5efa\u7f51\u5173\u670d\u52a1"},"\u642d\u5efa\u7f51\u5173\u670d\u52a1"),(0,n.kt)("h2",{id:"\u521b\u5efa\u65b0\u7684module\u5f15\u5165springcloudgateway\u7684\u4f9d\u8d56\u548cnacos\u7684\u670d\u52a1\u53d1\u73b0\u4f9d\u8d56"},"\u521b\u5efa\u65b0\u7684module\uff0c\u5f15\u5165SpringCloudGateway\u7684\u4f9d\u8d56\u548cnacos\u7684\u670d\u52a1\u53d1\u73b0\u4f9d\u8d56"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>\n")),(0,n.kt)("h2",{id:"\u7f16\u5199\u8def\u7531\u914d\u7f6e\u53canacos\u5730\u5740"},"\u7f16\u5199\u8def\u7531\u914d\u7f6e\u53canacos\u5730\u5740"),(0,n.kt)("p",null,"1.\u8def\u7531id\uff1a\u8def\u7531\u7684\u552f\u4e00\u6807\u793a"),(0,n.kt)("p",null,"2.\u8def\u7531\u76ee\u6807\uff08uri\uff09\uff1a\u8def\u7531\u7684\u76ee\u6807\u5730\u5740\uff0chttp\u4ee3\u8868\u56fa\u5b9a\u5730\u5740\uff0clb\u4ee3\u8868\u6839\u636e\u670d\u52a1\u540d\u8d1f\u8f7d\u5747\u8861"),(0,n.kt)("p",null,"3.\u8def\u7531\u65ad\u8a00\uff08predicates\uff09\uff1a\u5224\u65ad\u8def\u7531\u7684\u89c4\u5219\uff0c"),(0,n.kt)("p",null,"4.\u8def\u7531\u8fc7\u6ee4\u5668\uff08filters\uff09\uff1a\u5bf9\u8bf7\u6c42\u6216\u54cd\u5e94\u505a\u5904\u7406"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 10010 # \u7f51\u5173\u7aef\u53e3\nspring:\n  application:\n    name: gateway # \u670d\u52a1\u540d\u79f0\n  cloud:\n    nacos:\n      server-addr: 127.0.0.1:80 # nacos\u5730\u5740\n    gateway:\n      routes: # \u7f51\u5173\u8def\u7531\u914d\u7f6e\n        - id: user-service # \u8def\u7531id\uff0c\u81ea\u5b9a\u4e49\uff0c\u53ea\u8981\u552f\u4e00\u5373\u53ef\n          # uri: http://127.0.0.1:8081 # (1)\u8def\u7531\u7684\u76ee\u6807\u5730\u5740 http\u5c31\u662f\u56fa\u5b9a\u5730\u5740\n          uri: lb://userservice #(2,\u5e38\u7528) \u8def\u7531\u7684\u76ee\u6807\u5730\u5740 lb\u5c31\u662f\u8d1f\u8f7d\u5747\u8861\uff0c\u540e\u9762\u8ddf\u670d\u52a1\u540d\u79f0\n          predicates: # \u8def\u7531\u65ad\u8a00\uff0c\u4e5f\u5c31\u662f\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u7b26\u5408\u8def\u7531\u89c4\u5219\u7684\u6761\u4ef6\n            - Path=/user/** # \u8fd9\u4e2a\u662f\u6309\u7167\u8def\u5f84\u5339\u914d\uff0c\u53ea\u8981\u4ee5/user/\u5f00\u5934\u5c31\u7b26\u5408\u8981\u6c42\n        - id: order-service\n          uri: lb://orderservice\n          predicates:\n            - Path=/order/**\n")),(0,n.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207233536253.png?raw=true",alt:"image-20220207233536253"})),(0,n.kt)("h1",{id:"\u8bf7\u6c42\u6d41\u7a0b"},"\u8bf7\u6c42\u6d41\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207234407007.png?raw=true",alt:"image-20220207234407007"})))}s.isMDXComponent=!0}}]);