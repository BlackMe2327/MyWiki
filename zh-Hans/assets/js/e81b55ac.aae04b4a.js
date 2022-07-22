"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(n),s=r,c=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},p="\u7d22\u5f15\u5e93\u64cd\u4f5c",i={unversionedId:"ELKB\u6280\u672f\u6808/ES\u7d22\u5f15\u5e93\u64cd\u4f5c",id:"ELKB\u6280\u672f\u6808/ES\u7d22\u5f15\u5e93\u64cd\u4f5c",title:"\u7d22\u5f15\u5e93\u64cd\u4f5c",description:"\u7d22\u5f15\u5e93\u5c31\u7c7b\u4f3c\u6570\u636e\u5e93\u8868\uff0cmapping\u6620\u5c04\u5c31\u7c7b\u4f3c\u8868\u7684\u7ed3\u6784\u3002",source:"@site/docs/ELKB\u6280\u672f\u6808/03-ES\u7d22\u5f15\u5e93\u64cd\u4f5c.md",sourceDirName:"ELKB\u6280\u672f\u6808",slug:"/ELKB\u6280\u672f\u6808/ES\u7d22\u5f15\u5e93\u64cd\u4f5c",permalink:"/zh-Hans/docs/ELKB\u6280\u672f\u6808/ES\u7d22\u5f15\u5e93\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ELKB\u6280\u672f\u6808/03-ES\u7d22\u5f15\u5e93\u64cd\u4f5c.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5355\u70b9es",permalink:"/zh-Hans/docs/ELKB\u6280\u672f\u6808/\u5b89\u88c5ElasticSearch\u3001Kibana\u3001IK\u5206\u8bcd\u5668\u63d2\u4ef6"},next:{title:"\u6587\u6863\u64cd\u4f5c",permalink:"/zh-Hans/docs/ELKB\u6280\u672f\u6808/ES\u6587\u6863\u64cd\u4f5c"}},o={},u=[{value:"mapping\u6620\u5c04\u5c5e\u6027",id:"mapping\u6620\u5c04\u5c5e\u6027",level:2},{value:"\u7d22\u5f15\u5e93\u7684CRUD",id:"\u7d22\u5f15\u5e93\u7684crud",level:2},{value:"\u521b\u5efa\u7d22\u5f15\u5e93\u548c\u6620\u5c04",id:"\u521b\u5efa\u7d22\u5f15\u5e93\u548c\u6620\u5c04",level:3},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u67e5\u8be2\u7d22\u5f15\u5e93",id:"\u67e5\u8be2\u7d22\u5f15\u5e93",level:3},{value:"\u683c\u5f0f",id:"\u683c\u5f0f",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u5220\u9664\u7d22\u5f15\u5e93",id:"\u5220\u9664\u7d22\u5f15\u5e93",level:3},{value:"\u683c\u5f0f",id:"\u683c\u5f0f-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"\u4fee\u6539\u7d22\u5f15\u5e93",id:"\u4fee\u6539\u7d22\u5f15\u5e93",level:3},{value:"\u683c\u5f0f",id:"\u683c\u5f0f-2",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7d22\u5f15\u5e93\u64cd\u4f5c"},"\u7d22\u5f15\u5e93\u64cd\u4f5c"),(0,r.kt)("p",null,"\u7d22\u5f15\u5e93\u5c31\u7c7b\u4f3c\u6570\u636e\u5e93\u8868\uff0cmapping\u6620\u5c04\u5c31\u7c7b\u4f3c\u8868\u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8981\u5411es\u4e2d\u5b58\u50a8\u6570\u636e\uff0c\u5fc5\u987b\u5148\u521b\u5efa\u201c\u5e93\u201d\u548c\u201c\u8868\u201d\u3002"),(0,r.kt)("h2",{id:"mapping\u6620\u5c04\u5c5e\u6027"},"mapping\u6620\u5c04\u5c5e\u6027"),(0,r.kt)("p",null,"mapping\u662f\u5bf9\u7d22\u5f15\u5e93\u4e2d\u6587\u6863\u7684\u7ea6\u675f\uff0c\u5e38\u89c1\u7684mapping\u5c5e\u6027\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type\uff1a\u5b57\u6bb5\u6570\u636e\u7c7b\u578b\uff0c\u5e38\u89c1\u7684\u7b80\u5355\u7c7b\u578b\u6709\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff1atext\uff08\u53ef\u5206\u8bcd\u7684\u6587\u672c\uff09\u3001keyword\uff08\u7cbe\u786e\u503c\uff0c\u4f8b\u5982\uff1a\u54c1\u724c\u3001\u56fd\u5bb6\u3001ip\u5730\u5740\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u503c\uff1along\u3001integer\u3001short\u3001byte\u3001double\u3001float\u3001"),(0,r.kt)("li",{parentName:"ul"},"\u5e03\u5c14\uff1aboolean"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u671f\uff1adate"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\uff1aobject"))),(0,r.kt)("li",{parentName:"ul"},"index\uff1a\u662f\u5426\u521b\u5efa\u7d22\u5f15\uff0c\u9ed8\u8ba4\u4e3atrue"),(0,r.kt)("li",{parentName:"ul"},"analyzer\uff1a\u4f7f\u7528\u54ea\u79cd\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"properties\uff1a\u8be5\u5b57\u6bb5\u7684\u5b50\u5b57\u6bb5")),(0,r.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u7684json\u6587\u6863\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0\xa0\xa0\xa0"age":\xa021,\n\xa0\xa0\xa0\xa0"weight":\xa052.1,\n\xa0\xa0\xa0\xa0"isMarried":\xa0false,\n\xa0\xa0\xa0\xa0"info":\xa0"\u8c01\u628a\u7237\u7535\u52a8\u8f66\u9a91\u8d70\u4e86\uff1f",\n    "email":\xa0"zy@itcast.cn",\n    "score":\xa0[99.1, 99.5, 98.9],\n\xa0\xa0\xa0\xa0"name":\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"firstName":\xa0"\u56db",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"lastName":\xa0"\u674e"\n\xa0\xa0\xa0\xa0}\n}\n')),(0,r.kt)("p",null,"\u5bf9\u5e94\u7684\u6bcf\u4e2a\u5b57\u6bb5\u6620\u5c04\uff08mapping\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"age\uff1a\u7c7b\u578b\u4e3a integer\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"weight\uff1a\u7c7b\u578b\u4e3afloat\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"isMarried\uff1a\u7c7b\u578b\u4e3aboolean\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"info\uff1a\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u5206\u8bcd\uff0c\u56e0\u6b64\u662ftext\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u5206\u8bcd\u5668\u53ef\u4ee5\u7528ik_smart"),(0,r.kt)("li",{parentName:"ul"},"email\uff1a\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u4e0d\u9700\u8981\u5206\u8bcd\uff0c\u56e0\u6b64\u662fkeyword\uff1b\u4e0d\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3afalse\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"score\uff1a\u867d\u7136\u662f\u6570\u7ec4\uff0c\u4f46\u662f\u6211\u4eec\u53ea\u770b\u5143\u7d20\u7684\u7c7b\u578b\uff0c\u7c7b\u578b\u4e3afloat\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"name\uff1a\u7c7b\u578b\u4e3aobject\uff0c\u9700\u8981\u5b9a\u4e49\u591a\u4e2a\u5b50\u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name.firstName\uff1b\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u4e0d\u9700\u8981\u5206\u8bcd\uff0c\u56e0\u6b64\u662fkeyword\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668"),(0,r.kt)("li",{parentName:"ul"},"name.lastName\uff1b\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u4e0d\u9700\u8981\u5206\u8bcd\uff0c\u56e0\u6b64\u662fkeyword\uff1b\u53c2\u4e0e\u641c\u7d22\uff0c\u56e0\u6b64\u9700\u8981index\u4e3atrue\uff1b\u65e0\u9700\u5206\u8bcd\u5668")))),(0,r.kt)("h2",{id:"\u7d22\u5f15\u5e93\u7684crud"},"\u7d22\u5f15\u5e93\u7684CRUD"),(0,r.kt)("h3",{id:"\u521b\u5efa\u7d22\u5f15\u5e93\u548c\u6620\u5c04"},"\u521b\u5efa\u7d22\u5f15\u5e93\u548c\u6620\u5c04"),(0,r.kt)("h4",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u8def\u5f84"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/\u7d22\u5f15\u5e93\u540d\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},"mapping\u6620\u5c04")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'PUT\xa0/\u7d22\u5f15\u5e93\u540d\u79f0\n{\n\xa0\xa0"mappings":\xa0{\n\xa0\xa0\xa0\xa0"properties":\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0"\u5b57\u6bb5\u540d":{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type":\xa0"text",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"analyzer":\xa0"ik_smart"\n\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0"\u5b57\u6bb5\u540d2":{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type":\xa0"keyword",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"index":\xa0"false"\n\xa0\xa0\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0"\u5b57\u6bb5\u540d3":{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"properties":\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"\u5b50\u5b57\u6bb5":\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"type":\xa0"keyword"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0\xa0\xa0},\n      // ...\u7565\n\xa0\xa0\xa0\xa0}\n\xa0\xa0}\n}\n')),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'#\u521b\u5efa\u7d22\u5f15\u5e93\nPUT /bttc\n{\n  "mappings": {\n    "properties": {\n      "info":{\n        "type": "text",\n        "analyzer": "ik_smart"\n      },\n      "email":{\n        "type": "keyword",\n        "index": false\n      },\n      "name":{\n        "type": "object",\n        "properties": {\n          "firstname":{\n            "type":"keyword"\n          },"lastname":{\n            "type":"keyword"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"\u67e5\u8be2\u7d22\u5f15\u5e93"},"\u67e5\u8be2\u7d22\u5f15\u5e93"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u8def\u5f84"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/\u7d22\u5f15\u5e93\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")))),(0,r.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"GET /\u7d22\u5f15\u5e93\u540d\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"#\u67e5\u8be2\u7d22\u5f15\u5e93\nGET /bttc\n")),(0,r.kt)("h3",{id:"\u5220\u9664\u7d22\u5f15\u5e93"},"\u5220\u9664\u7d22\u5f15\u5e93"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u8def\u5f84"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/\u7d22\u5f15\u5e93\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0")))),(0,r.kt)("h4",{id:"\u683c\u5f0f-1"},"\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE /\u7d22\u5f15\u5e93\u540d\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE /bttc\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u7d22\u5f15\u5e93"},"\u4fee\u6539\u7d22\u5f15\u5e93"),(0,r.kt)("p",null,"\u5012\u6392\u7d22\u5f15\u7ed3\u6784\u867d\u7136\u4e0d\u590d\u6742\uff0c\u4f46\u662f\u4e00\u65e6\u6570\u636e\u7ed3\u6784\u6539\u53d8\uff08\u6bd4\u5982\u6539\u53d8\u4e86\u5206\u8bcd\u5668\uff09\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u521b\u5efa\u5012\u6392\u7d22\u5f15\uff0c\u8fd9\u7b80\u76f4\u662f\u707e\u96be\u3002\u56e0\u6b64\u7d22\u5f15\u5e93",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u65e6\u521b\u5efa\uff0c\u65e0\u6cd5\u4fee\u6539mapping"),"\u3002"),(0,r.kt)("p",null,"\u867d\u7136\u65e0\u6cd5\u4fee\u6539mapping\u4e2d\u5df2\u6709\u7684\u5b57\u6bb5\uff0c\u4f46\u662f\u5374\u5141\u8bb8\u6dfb\u52a0\u65b0\u7684\u5b57\u6bb5\u5230mapping\u4e2d\uff0c\u56e0\u4e3a\u4e0d\u4f1a\u5bf9\u5012\u6392\u7d22\u5f15\u4ea7\u751f\u5f71\u54cd\u3002"),(0,r.kt)("h4",{id:"\u683c\u5f0f-2"},"\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'PUT\xa0/\u7d22\u5f15\u5e93\u540d/_mapping\n{\n\xa0\xa0"properties":\xa0{\n\xa0\xa0\xa0\xa0"\u65b0\u5b57\u6bb5\u540d":{\n\xa0\xa0\xa0\xa0\xa0\xa0"type":\xa0"integer"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0}\n}\n')),(0,r.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'#\u4fee\u6539\u7d22\u5f15\u5e93\uff0c\u6dfb\u52a0\u65b0\u5b57\u6bb5\nPUT /bttc/_mapping\n{\n  "properties":{\n    "age":{\n      "type":"integer"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);