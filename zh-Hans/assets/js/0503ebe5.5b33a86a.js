"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[5953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>o});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=m(a),o=n,d=s["".concat(u,".").concat(o)]||s[o]||c[o]||r;return a?l.createElement(d,i(i({ref:t},k),{},{components:a})):l.createElement(d,i({ref:t},k))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const r={},i="\u521d\u8bc6ES",p={unversionedId:"ELKB\u6280\u672f\u6808/ES\u8ba4\u8bc6",id:"ELKB\u6280\u672f\u6808/ES\u8ba4\u8bc6",title:"\u521d\u8bc6ES",description:"ES\u57fa\u7840\u77e5\u8bc6",source:"@site/docs/ELKB\u6280\u672f\u6808/01-ES\u8ba4\u8bc6.md",sourceDirName:"ELKB\u6280\u672f\u6808",slug:"/ELKB\u6280\u672f\u6808/ES\u8ba4\u8bc6",permalink:"/zh-Hans/docs/ELKB\u6280\u672f\u6808/ES\u8ba4\u8bc6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ELKB\u6280\u672f\u6808/01-ES\u8ba4\u8bc6.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ELKB(\u5206\u5e03\u5f0f\u641c\u7d22)",permalink:"/zh-Hans/docs/category/elkb\u5206\u5e03\u5f0f\u641c\u7d22"},next:{title:"\u90e8\u7f72\u5355\u70b9es",permalink:"/zh-Hans/docs/ELKB\u6280\u672f\u6808/\u5b89\u88c5ElasticSearch\u3001Kibana\u3001IK\u5206\u8bcd\u5668\u63d2\u4ef6"}},u={},m=[{value:"ES\u57fa\u7840\u77e5\u8bc6",id:"es\u57fa\u7840\u77e5\u8bc6",level:2},{value:"ES\u7684\u4f5c\u7528",id:"es\u7684\u4f5c\u7528",level:3},{value:"ELK\u6280\u672f\u6808",id:"elk\u6280\u672f\u6808",level:3},{value:"elasticsearch\u548clucene",id:"elasticsearch\u548clucene",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u5012\u6392\u7d22\u5f15",id:"\u5012\u6392\u7d22\u5f15",level:2},{value:"\u6b63\u5411\u7d22\u5f15",id:"\u6b63\u5411\u7d22\u5f15",level:3},{value:"\u5012\u6392\u7d22\u5f15",id:"\u5012\u6392\u7d22\u5f15-1",level:2},{value:"\u5012\u6392\u7d22\u5f15\u641c\u7d22\u6d41\u7a0b",id:"\u5012\u6392\u7d22\u5f15\u641c\u7d22\u6d41\u7a0b",level:3},{value:"\u6b63\u5411\u548c\u5012\u6392",id:"\u6b63\u5411\u548c\u5012\u6392",level:3},{value:"ES\u7684\u4e00\u4e9b\u6982\u5ff5",id:"es\u7684\u4e00\u4e9b\u6982\u5ff5",level:2},{value:"\u6587\u6863\u548c\u5b57\u6bb5",id:"\u6587\u6863\u548c\u5b57\u6bb5",level:3},{value:"\u7d22\u5f15\u548c\u6620\u5c04",id:"\u7d22\u5f15\u548c\u6620\u5c04",level:3},{value:"mysql\u4e0eelasticsearch",id:"mysql\u4e0eelasticsearch",level:3}],k={toc:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u521d\u8bc6es"},"\u521d\u8bc6ES"),(0,n.kt)("h2",{id:"es\u57fa\u7840\u77e5\u8bc6"},"ES\u57fa\u7840\u77e5\u8bc6"),(0,n.kt)("h3",{id:"es\u7684\u4f5c\u7528"},"ES\u7684\u4f5c\u7528"),(0,n.kt)("p",null,"elasticsearch\u662f\u4e00\u6b3e\u975e\u5e38\u5f3a\u5927\u7684\u5f00\u6e90\u641c\u7d22\u5f15\u64ce\uff0c\u5177\u5907\u975e\u5e38\u591a\u5f3a\u5927\u529f\u80fd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4ece\u6d77\u91cf\u6570\u636e\u4e2d\u5feb\u901f\u627e\u5230\u9700\u8981\u7684\u5185\u5bb9\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u767e\u5ea6\u641c\u7d22\u7b54\u6848"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u7535\u5546\u5e73\u53f0\u641c\u7d22\u5546\u54c1"),(0,n.kt)("li",{parentName:"ul"},"\u5728GItHub\u641c\u7d22\u4ee3\u7801")),(0,n.kt)("h3",{id:"elk\u6280\u672f\u6808"},"ELK\u6280\u672f\u6808"),(0,n.kt)("p",null,"elasticsearch\u7ed3\u5408",(0,n.kt)("inlineCode",{parentName:"p"},"kibana"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Logstash"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Beats"),"\uff0c\u4e5f\u5c31\u662felastic stack\uff08ELK\uff09\u3002\u88ab\u5e7f\u6cdb\u5e94\u7528\u5728\u65e5\u5fd7\u6570\u636e\u5206\u6790\u3001\u5b9e\u65f6\u76d1\u63a7\u7b49\u9886\u57df,\u800celasticsearch\u662felastic stack\u7684\u6838\u5fc3\uff0c\u8d1f\u8d23\u5b58\u50a8\u3001\u641c\u7d22\u3001\u5206\u6790\u6570\u636e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212154425481.png?raw=true",alt:"image-20220212154425481"})),(0,n.kt)("h3",{id:"elasticsearch\u548clucene"},"elasticsearch\u548clucene"),(0,n.kt)("p",null,"elasticsearch\u5e95\u5c42\u662f\u57fa\u4e8e",(0,n.kt)("strong",{parentName:"p"},"lucene"),"\u6765\u5b9e\u73b0\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Lucene"),"\u662f\u4e00\u4e2aJava\u8bed\u8a00\u7684\u641c\u7d22\u5f15\u64ce\u7c7b\u5e93\uff0c\u662fApache\u516c\u53f8\u7684\u9876\u7ea7\u9879\u76ee\uff0c\u7531DougCutting\u4e8e1999\u5e74\u7814\u53d1\u3002\u5b98\u7f51\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://lucene.apache.org/"},"https://lucene.apache.org/")," \u3002"),(0,n.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u4ec0\u4e48\u662felasticsearch\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u641c\u7d22\u5f15\u64ce\uff0c\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u641c\u7d22\u3001\u65e5\u5fd7\u7edf\u8ba1\u3001\u5206\u6790\u3001\u7cfb\u7edf\u76d1\u63a7\u7b49\u529f\u80fd")),(0,n.kt)("p",null,"\u4ec0\u4e48\u662felastic stack\uff08ELK\uff09\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ee5elasticsearch\u4e3a\u6838\u5fc3\u7684\u6280\u672f\u6808\uff0c\u5305\u62ecbeats\u3001Logstash\u3001kibana\u3001elasticsearch")),(0,n.kt)("p",null,"\u4ec0\u4e48\u662fLucene\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662fApache\u7684\u5f00\u6e90\u641c\u7d22\u5f15\u64ce\u7c7b\u5e93\uff0c\u63d0\u4f9b\u4e86\u641c\u7d22\u5f15\u64ce\u7684\u6838\u5fc3API")),(0,n.kt)("h2",{id:"\u5012\u6392\u7d22\u5f15"},"\u5012\u6392\u7d22\u5f15"),(0,n.kt)("p",null,"\u5012\u6392\u7d22\u5f15\u7684\u6982\u5ff5\u662f\u57fa\u4e8eMySQL\u8fd9\u6837\u7684\u6b63\u5411\u7d22\u5f15\u800c\u8a00\u7684\u3002"),(0,n.kt)("h3",{id:"\u6b63\u5411\u7d22\u5f15"},"\u6b63\u5411\u7d22\u5f15"),(0,n.kt)("p",null,"\u90a3\u4e48\u4ec0\u4e48\u662f\u6b63\u5411\u7d22\u5f15\u5462\uff1f\u4f8b\u5982\u7ed9\u4e0b\u8868\uff08t_stu\uff09\u4e2d\u7684id\u521b\u5efa\u7d22\u5f15:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212155736962.png?raw=true",alt:"image-20220212155736962"})),(0,n.kt)("p",null,"\u5982\u679c\u662f\u6839\u636eid\u67e5\u8be2\uff0c\u90a3\u4e48\u76f4\u63a5\u8d70\u7d22\u5f15\uff0c\u67e5\u8be2\u901f\u5ea6\u975e\u5e38\u5feb\u3002"),(0,n.kt)("p",null,"\u4f46\u5982\u679c\u662f\u57fa\u4e8ename\u505a\u6a21\u7cca\u67e5\u8be2\uff0c\u53ea\u80fd\u662f\u9010\u884c\u626b\u63cf\u6570\u636e\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,"1\uff09\u7528\u6237\u641c\u7d22\u6570\u636e\uff0c\u6761\u4ef6\u662fname\u7b26\u5408",(0,n.kt)("inlineCode",{parentName:"p"},'"%li%"')),(0,n.kt)("p",null,"2\uff09\u9010\u884c\u83b7\u53d6\u6570\u636e\uff0c\u6bd4\u5982id\u4e3a1\u7684\u6570\u636e"),(0,n.kt)("p",null,"3\uff09\u5224\u65ad\u6570\u636e\u4e2d\u7684name\u662f\u5426\u7b26\u5408\u7528\u6237\u641c\u7d22\u6761\u4ef6"),(0,n.kt)("p",null,"4\uff09\u5982\u679c\u7b26\u5408\u5219\u653e\u5165\u7ed3\u679c\u96c6\uff0c\u4e0d\u7b26\u5408\u5219\u4e22\u5f03\u3002\u56de\u5230\u6b65\u9aa41"),(0,n.kt)("p",null,"\u9010\u884c\u626b\u63cf\uff0c\u4e5f\u5c31\u662f\u5168\u8868\u626b\u63cf\uff0c\u968f\u7740\u6570\u636e\u91cf\u589e\u52a0\uff0c\u5176\u67e5\u8be2\u6548\u7387\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u4f4e\u3002\u5f53\u6570\u636e\u91cf\u8fbe\u5230\u6570\u767e\u4e07\u65f6\uff0c\u5c31\u662f\u4e00\u573a\u707e\u96be\u3002"),(0,n.kt)("h2",{id:"\u5012\u6392\u7d22\u5f15-1"},"\u5012\u6392\u7d22\u5f15"),(0,n.kt)("p",null,"\u5012\u6392\u7d22\u5f15\u4e2d\u6709\u4e24\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6587\u6863\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"Document"),"\uff09\uff1a\u7528\u6765\u641c\u7d22\u7684\u6570\u636e\uff0c\u5176\u4e2d\u7684\u6bcf\u4e00\u6761\u6570\u636e\u5c31\u662f\u4e00\u4e2a\u6587\u6863\u3002\u4f8b\u5982\u4e00\u4e2a\u7f51\u9875\u3001\u4e00\u4e2a\u5546\u54c1\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u8bcd\u6761\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"Term"),"\uff09\uff1a\u5bf9\u6587\u6863\u6570\u636e\u6216\u7528\u6237\u641c\u7d22\u6570\u636e\uff0c\u5229\u7528\u67d0\u79cd\u7b97\u6cd5\u5206\u8bcd\uff0c\u5f97\u5230\u7684\u5177\u5907\u542b\u4e49\u7684\u8bcd\u8bed\u5c31\u662f\u8bcd\u6761\u3002\u4f8b\u5982\uff1a\u6211\u662f\u4e2d\u56fd\u4eba\uff0c\u5c31\u53ef\u4ee5\u5206\u4e3a\uff1a\u6211\u3001\u662f\u3001\u4e2d\u56fd\u4eba\u3001\u4e2d\u56fd\u3001\u56fd\u4eba\u8fd9\u6837\u7684\u51e0\u4e2a\u8bcd\u6761")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5012\u6392\u7d22\u5f15"),"\u662f\u5bf9\u6b63\u5411\u7d22\u5f15\u7684\u4e00\u79cd\u7279\u6b8a\u5904\u7406\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e00\u4e2a\u6587\u6863\u7684\u6570\u636e\u5229\u7528\u7b97\u6cd5\u5206\u8bcd\uff0c\u5f97\u5230\u4e00\u4e2a\u4e2a\u8bcd\u6761"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8868\uff0c\u6bcf\u884c\u6570\u636e\u5305\u62ec\u8bcd\u6761\u3001\u8bcd\u6761\u6240\u5728\u6587\u6863id\u3001\u4f4d\u7f6e\u7b49\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u8bcd\u6761\u552f\u4e00\u6027\uff0c\u53ef\u4ee5\u7ed9\u8bcd\u6761\u521b\u5efa\u7d22\u5f15\uff0c\u4f8b\u5982hash\u8868\u7ed3\u6784\u7d22\u5f15")),(0,n.kt)("p",null,"\u5982\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212160055911.png?raw=true",alt:"image-20220212160055911"})),(0,n.kt)("h3",{id:"\u5012\u6392\u7d22\u5f15\u641c\u7d22\u6d41\u7a0b"},"\u5012\u6392\u7d22\u5f15\u641c\u7d22\u6d41\u7a0b"),(0,n.kt)("p",null,"\u7528\u6237\u8f93\u5165\u6761\u4ef6",(0,n.kt)("inlineCode",{parentName:"p"},'"\u674e\u56db"'),"\u8fdb\u884c\u641c\u7d22\u3002"),(0,n.kt)("p",null,"2\uff09\u5bf9\u7528\u6237\u8f93\u5165\u5185\u5bb9",(0,n.kt)("strong",{parentName:"p"},"\u5206\u8bcd"),"\uff0c\u5f97\u5230\u8bcd\u6761\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"\u674e"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"\u56db"),"\u3002"),(0,n.kt)("p",null,"3\uff09\u62ff\u7740\u8bcd\u6761\u5728\u5012\u6392\u7d22\u5f15\u4e2d\u67e5\u627e\uff0c\u53ef\u4ee5\u5f97\u5230\u5305\u542b\u8bcd\u6761\u7684\u6587\u6863id\uff1a1\u30013\u3002"),(0,n.kt)("p",null,"4\uff09\u62ff\u7740\u6587\u6863id\u5230\u6b63\u5411\u7d22\u5f15\u4e2d\u67e5\u627e\u5177\u4f53\u6587\u6863\u3002"),(0,n.kt)("p",null,"\u5982\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212160843115.png?raw=true",alt:"image-20220212160843115"})),(0,n.kt)("p",null,"\u867d\u7136\u8981\u5148\u67e5\u8be2\u8bcd\u6761\uff0c\u518d\u67e5\u8be2\u6587\u6863id\uff0c\u4f46\u662f\u65e0\u8bba\u662f\u8bcd\u6761\u3001\u8fd8\u662f\u6587\u6863id\u90fd\u5efa\u7acb\u4e86\u7d22\u5f15\uff0c\u67e5\u8be2\u901f\u5ea6\u975e\u5e38\u5feb\uff01\u65e0\u9700\u5168\u8868\u626b\u63cf\u3002"),(0,n.kt)("h3",{id:"\u6b63\u5411\u548c\u5012\u6392"},"\u6b63\u5411\u548c\u5012\u6392"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6b63\u5411\u7d22\u5f15"),"\u662f\u6700\u4f20\u7edf\u7684\uff0c\u6839\u636eid\u7d22\u5f15\u7684\u65b9\u5f0f\u3002\u4f46\u6839\u636e\u8bcd\u6761\u67e5\u8be2\u65f6\uff0c\u5fc5\u987b\u5148\u9010\u6761\u83b7\u53d6\u6bcf\u4e2a\u6587\u6863\uff0c\u7136\u540e\u5224\u65ad\u6587\u6863\u4e2d\u662f\u5426\u5305\u542b\u6240\u9700\u8981\u7684\u8bcd\u6761\uff0c\u662f",(0,n.kt)("strong",{parentName:"p"},"\u6839\u636e\u6587\u6863\u627e\u8bcd\u6761\u7684\u8fc7\u7a0b"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u800c",(0,n.kt)("strong",{parentName:"p"},"\u5012\u6392\u7d22\u5f15"),"\u5219\u76f8\u53cd\uff0c\u662f\u5148\u627e\u5230\u7528\u6237\u8981\u641c\u7d22\u7684\u8bcd\u6761\uff0c\u6839\u636e\u8bcd\u6761\u5f97\u5230\u4fdd\u62a4\u8bcd\u6761\u7684\u6587\u6863\u7684id\uff0c\u7136\u540e\u6839\u636eid\u83b7\u53d6\u6587\u6863\u3002\u662f",(0,n.kt)("strong",{parentName:"p"},"\u6839\u636e\u8bcd\u6761\u627e\u6587\u6863\u7684\u8fc7\u7a0b"),"\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b63\u5411\u7d22\u5f15"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7ed9\u591a\u4e2a\u5b57\u6bb5\u521b\u5efa\u7d22\u5f15"),(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u7d22\u5f15\u5b57\u6bb5\u641c\u7d22\u3001\u6392\u5e8f\u901f\u5ea6\u975e\u5e38\u5feb"))),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u975e\u7d22\u5f15\u5b57\u6bb5\uff0c\u6216\u8005\u7d22\u5f15\u5b57\u6bb5\u4e2d\u7684\u90e8\u5206\u8bcd\u6761\u67e5\u627e\u65f6\uff0c\u53ea\u80fd\u5168\u8868\u626b\u63cf\u3002")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5012\u6392\u7d22\u5f15"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u8bcd\u6761\u641c\u7d22\u3001\u6a21\u7cca\u641c\u7d22\u65f6\uff0c\u901f\u5ea6\u975e\u5e38\u5feb"))),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7ed9\u8bcd\u6761\u521b\u5efa\u7d22\u5f15\uff0c\u800c\u4e0d\u662f\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6839\u636e\u5b57\u6bb5\u505a\u6392\u5e8f")))),(0,n.kt)("h2",{id:"es\u7684\u4e00\u4e9b\u6982\u5ff5"},"ES\u7684\u4e00\u4e9b\u6982\u5ff5"),(0,n.kt)("h3",{id:"\u6587\u6863\u548c\u5b57\u6bb5"},"\u6587\u6863\u548c\u5b57\u6bb5"),(0,n.kt)("p",null,"elasticsearch\u662f\u9762\u5411",(0,n.kt)("strong",{parentName:"p"},"\u6587\u6863\uff08Document\uff09"),"\u5b58\u50a8\u7684\uff0c\u53ef\u4ee5\u662f\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u6761\u5546\u54c1\u6570\u636e\uff0c\u4e00\u4e2a\u8ba2\u5355\u4fe1\u606f\u3002\u6587\u6863\u6570\u636e\u4f1a\u88ab\u5e8f\u5217\u5316\u4e3ajson\u683c\u5f0f\u540e\u5b58\u50a8\u5728elasticsearch\u4e2d\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212162523824.png?raw=true",alt:"image-20220212162523824"})),(0,n.kt)("p",null,"\u800cJson\u6587\u6863\u4e2d\u5f80\u5f80\u5305\u542b\u5f88\u591a\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5b57\u6bb5\uff08Field\uff09"),"\uff0c\u7c7b\u4f3c\u4e8e\u6570\u636e\u5e93\u4e2d\u7684\u5217\u3002"),(0,n.kt)("h3",{id:"\u7d22\u5f15\u548c\u6620\u5c04"},"\u7d22\u5f15\u548c\u6620\u5c04"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7d22\u5f15\uff08Index\uff09"),"\uff0c\u5c31\u662f\u76f8\u540c\u7c7b\u578b\u7684\u6587\u6863\u7684\u96c6\u5408\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u7528\u6237\u6587\u6863\uff0c\u5c31\u53ef\u4ee5\u7ec4\u7ec7\u5728\u4e00\u8d77\uff0c\u79f0\u4e3a\u7528\u6237\u7684\u7d22\u5f15\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u5546\u54c1\u7684\u6587\u6863\uff0c\u53ef\u4ee5\u7ec4\u7ec7\u5728\u4e00\u8d77\uff0c\u79f0\u4e3a\u5546\u54c1\u7684\u7d22\u5f15\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u8ba2\u5355\u7684\u6587\u6863\uff0c\u53ef\u4ee5\u7ec4\u7ec7\u5728\u4e00\u8d77\uff0c\u79f0\u4e3a\u8ba2\u5355\u7684\u7d22\u5f15\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212162644799.png?raw=true",alt:"image-20220212162644799"})),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u7d22\u5f15\u5f53\u505a\u662f\u6570\u636e\u5e93\u4e2d\u7684\u8868\u3002"),(0,n.kt)("p",null,"\u6570\u636e\u5e93\u7684\u8868\u4f1a\u6709\u7ea6\u675f\u4fe1\u606f\uff0c\u7528\u6765\u5b9a\u4e49\u8868\u7684\u7ed3\u6784\u3001\u5b57\u6bb5\u7684\u540d\u79f0\u3001\u7c7b\u578b\u7b49\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u7d22\u5f15\u5e93\u4e2d\u5c31\u6709",(0,n.kt)("strong",{parentName:"p"},"\u6620\u5c04\uff08mapping\uff09"),"\uff0c\u662f\u7d22\u5f15\u4e2d\u6587\u6863\u7684\u5b57\u6bb5\u7ea6\u675f\u4fe1\u606f\uff0c\u7c7b\u4f3c\u8868\u7684\u7ed3\u6784\u7ea6\u675f\u3002"),(0,n.kt)("h3",{id:"mysql\u4e0eelasticsearch"},"mysql\u4e0eelasticsearch"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"MySQL")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Elasticsearch")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table"),(0,n.kt)("td",{parentName:"tr",align:null},"Index"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15(index)\uff0c\u5c31\u662f\u6587\u6863\u7684\u96c6\u5408\uff0c\u7c7b\u4f3c\u6570\u636e\u5e93\u7684\u8868(table)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Row"),(0,n.kt)("td",{parentName:"tr",align:null},"Document"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u6863\uff08Document\uff09\uff0c\u5c31\u662f\u4e00\u6761\u6761\u7684\u6570\u636e\uff0c\u7c7b\u4f3c\u6570\u636e\u5e93\u4e2d\u7684\u884c\uff08Row\uff09\uff0c\u6587\u6863\u90fd\u662fJSON\u683c\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Column"),(0,n.kt)("td",{parentName:"tr",align:null},"Field"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\uff08Field\uff09\uff0c\u5c31\u662fJSON\u6587\u6863\u4e2d\u7684\u5b57\u6bb5\uff0c\u7c7b\u4f3c\u6570\u636e\u5e93\u4e2d\u7684\u5217\uff08Column\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Mapping"),(0,n.kt)("td",{parentName:"tr",align:null},"Mapping\uff08\u6620\u5c04\uff09\u662f\u7d22\u5f15\u4e2d\u6587\u6863\u7684\u7ea6\u675f\uff0c\u4f8b\u5982\u5b57\u6bb5\u7c7b\u578b\u7ea6\u675f\u3002\u7c7b\u4f3c\u6570\u636e\u5e93\u7684\u8868\u7ed3\u6784\uff08Schema\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQL"),(0,n.kt)("td",{parentName:"tr",align:null},"DSL"),(0,n.kt)("td",{parentName:"tr",align:null},"DSL\u662felasticsearch\u63d0\u4f9b\u7684JSON\u98ce\u683c\u7684\u8bf7\u6c42\u8bed\u53e5\uff0c\u7528\u6765\u64cd\u4f5celasticsearch\uff0c\u5b9e\u73b0CRUD")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mysql\uff1a\u64c5\u957f\u4e8b\u52a1\u7c7b\u578b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u548c\u4e00\u81f4\u6027"),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch\uff1a\u64c5\u957f\u6d77\u91cf\u6570\u636e\u7684\u641c\u7d22\u3001\u5206\u6790\u3001\u8ba1\u7b97")),(0,n.kt)("p",null,"\u4e24\u8005\u7ed3\u5408\u4f7f\u7528\u6548\u679c\u66f4\u52a0\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u5b89\u5168\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u5199\u64cd\u4f5c\uff0c\u4f7f\u7528mysql\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u67e5\u8be2\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\u7684\u641c\u7d22\u9700\u6c42\uff0c\u4f7f\u7528elasticsearch\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u4e24\u8005\u518d\u57fa\u4e8e\u67d0\u79cd\u65b9\u5f0f\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u540c\u6b65\uff0c\u4fdd\u8bc1\u4e00\u81f4\u6027")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212163600830.png?raw=true",alt:"image-20220212163600830"})))}c.isMDXComponent=!0}}]);