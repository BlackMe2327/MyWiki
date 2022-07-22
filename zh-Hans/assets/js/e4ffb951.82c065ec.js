"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[5756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),v=r,d=s["".concat(u,".").concat(v)]||s[v]||k[v]||n;return a?l.createElement(d,i(i({ref:t},c),{},{components:a})):l.createElement(d,i({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(7462),r=(a(7294),a(3905));const n={},i="Java\u7c7b\u548c\u5bf9\u8c61",o={unversionedId:"Language/java/Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898",id:"Language/java/Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898",title:"Java\u7c7b\u548c\u5bf9\u8c61",description:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u533a\u522b",source:"@site/docs/Language/java/02-Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898.md",sourceDirName:"Language/java",slug:"/Language/java/Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898",permalink:"/MyWiki/zh-Hans/docs/Language/java/Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Language/java/02-Java\u9762\u5411\u5bf9\u8c61-\u76f8\u5173\u9762\u8bd5\u9898.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java\u57fa\u7840\u6982\u5ff5",permalink:"/MyWiki/zh-Hans/docs/Language/java/java\u57fa\u7840\u77e5\u8bc6-\u76f8\u5173\u9762\u8bd5\u9898"},next:{title:"Java\u5f02\u5e38",permalink:"/MyWiki/zh-Hans/docs/Language/java/Java\u5f02\u5e38-\u76f8\u5173\u9762\u8bd5\u9898"}},u={},p=[{value:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u533a\u522b",id:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u533a\u522b",level:2},{value:"\u6784\u9020\u5668Constructor\u662f\u5426\u53ef\u4ee5\u88aboverride\uff1f",id:"\u6784\u9020\u5668constructor\u662f\u5426\u53ef\u4ee5\u88aboverride",level:2},{value:"Java\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u7a7a\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528",id:"java\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u7a7a\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528",level:2},{value:"\u6210\u5458\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u7684\u533a\u522b",id:"\u6210\u5458\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u7684\u533a\u522b",level:2},{value:"\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528",id:"\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528",level:2},{value:"\u6784\u9020\u65b9\u6cd5\u7684\u7279\u6027",id:"\u6784\u9020\u65b9\u6cd5\u7684\u7279\u6027",level:2},{value:"\u5bf9\u8c61\u76f8\u7b49\u548c\u6307\u5411\u4ed6\u4eec\u7684\u5f15\u7528\u76f8\u7b49\u4e24\u8005\u7684\u4e0d\u540c",id:"\u5bf9\u8c61\u76f8\u7b49\u548c\u6307\u5411\u4ed6\u4eec\u7684\u5f15\u7528\u76f8\u7b49\u4e24\u8005\u7684\u4e0d\u540c",level:2},{value:"\u5c01\u88c5",id:"\u5c01\u88c5",level:2},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:2},{value:"\u591a\u6001",id:"\u591a\u6001",level:2},{value:"\u5728\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e00\u4e2a\u975e\u9759\u6001\u65b9\u6cd5\u4e3a\u4ec0\u4e48\u662f\u975e\u6cd5\u7684\uff1f",id:"\u5728\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e00\u4e2a\u975e\u9759\u6001\u65b9\u6cd5\u4e3a\u4ec0\u4e48\u662f\u975e\u6cd5\u7684",level:2},{value:"\u9759\u6001\u65b9\u6cd5\u548c\u5b9e\u4f8b\u65b9\u6cd5\u6709\u4f55\u4e0d\u540c",id:"\u9759\u6001\u65b9\u6cd5\u548c\u5b9e\u4f8b\u65b9\u6cd5\u6709\u4f55\u4e0d\u540c",level:2},{value:"\u5e38\u89c1\u5173\u952e\u5b57\u603b\u7ed3:static,final,this,super",id:"\u5e38\u89c1\u5173\u952e\u5b57\u603b\u7ed3staticfinalthissuper",level:2},{value:"static\u5173\u952e\u5b57",id:"static\u5173\u952e\u5b57",level:3},{value:"this\u5173\u952e\u5b57",id:"this\u5173\u952e\u5b57",level:3},{value:"super\u5173\u952e\u5b57",id:"super\u5173\u952e\u5b57",level:3},{value:"final\u5173\u952e\u5b57",id:"final\u5173\u952e\u5b57",level:3},{value:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b",id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b",level:2}],c={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java\u7c7b\u548c\u5bf9\u8c61"},"Java\u7c7b\u548c\u5bf9\u8c61"),(0,r.kt)("h2",{id:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u533a\u522b"},"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9762\u5411\u8fc7\u7a0b\uff1a\u9762\u5411\u8fc7\u7a0b\u6bd4\u9762\u5411\u5bf9\u8c61\u7684\u6027\u80fd\u9ad8\u3002\u56e0\u4e3a\u7c7b\u8c03\u7528\u662f\u9700\u8981\u5b9e\u4f8b\u5316\uff0c\u5f00\u9500\u6bd4\u8f83\u5927\u3001\u6bd4\u8f83\u6d88\u8017\u8d44\u6e90\u3001\u6240\u4ee5\u5f53\u6027\u80fd\u662f\u6700\u91cd\u8981\u7684\u8003\u91cf\u56e0\u7d20\u65f6\u4e00\u822c\u91c7\u7528\u9762\u5411\u8fc7\u7a0b\u5f00\u53d1\u3002\u4f46\u662f\uff0c\u9762\u5411\u8fc7\u7a0b\u6ca1\u6709\u9762\u5411\u5bf9\u8c61\u6613\u7ef4\u62a4\u3001\u6613\u590d\u7528\u3001\u6613\u6269\u5c55"),(0,r.kt)("li",{parentName:"ul"},"\u9762\u5411\u5bf9\u8c61\uff1a\u9762\u5411\u5bf9\u8c61\u6613\u7ef4\u62a4\u3001\u6613\u590d\u7528\u3001\u6613\u6269\u5c55\u3002\u56e0\u4e3a\u9762\u5411\u5bf9\u8c61\u6709\u5c01\u88c5\u3001\u7ee7\u627f\u3001\u591a\u6001\u6027\u7684\u7279\u6027\uff0c\u6240\u4ee5\u8bbe\u8ba1\u51fa\u4f4e\u8026\u5408\u7684\u7cfb\u7edf\u3001\u662f\u7cfb\u7edf\u66f4\u52a0\u7075\u6d3b\u3001\u66f4\u52a0\u6613\u4e8e\u7ef4\u62a4\u3002\u4f46\u662f\uff0c\u9762\u5411\u5bf9\u8c61\u6027\u80fd\u6bd4\u9762\u5411\u8fc7\u7a0b\u4f4e")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9762\u5411\u8fc7\u7a0b\u4e5f\u9700\u8981\u5206\u914d\u5185\u5b58\uff0c\u8ba1\u7b97\u5185\u5b58\u504f\u79fb\u91cf\uff0cJava\u6027\u80fd\u5dee\u7684\u4e3b\u8981\u539f\u56e0\u5e76\u4e0d\u662f\u56e0\u4e3a\u4ed6\u662f\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\uff0c\u800c\u662fJAVA\u662f\u534a\u7f16\u8bd1\u8bed\u8a00\uff0c\u6700\u7ec8\u6267\u884c\u4ee3\u7801\u5e76\u4e0d\u662f\u53ef\u4ee5\u76f4\u63a5\u88abCPU\u6267\u884c\u7684\u4e8c\u8fdb\u5236\u673a\u68b0\u7801\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u800c\u9762\u5411\u8fc7\u7a0b\u8bed\u8a00\u5927\u591a\u662f\u76f4\u63a5\u7f16\u8bd1\u6210\u673a\u68b0\u7801\u5728\u7535\u8111\u4e0a\u6267\u884c\uff0c\u5e76\u4e14\u5176\u4ed6\u4e00\u4e9b\u9762\u5411\u8fc7\u7a0b\u7684\u811a\u672c\u8bed\u8a00\u6027\u80fd\u4e5f\u5e76\u4e0d\u4e00\u5b9a\u6bd4Java\u597d\u3002")),(0,r.kt)("h2",{id:"\u6784\u9020\u5668constructor\u662f\u5426\u53ef\u4ee5\u88aboverride"},"\u6784\u9020\u5668Constructor\u662f\u5426\u53ef\u4ee5\u88aboverride\uff1f"),(0,r.kt)("p",null,"Constructor\u4e0d\u80fd\u88aboverride\uff0c\u4f46\u662f\u53ef\u4ee5overload\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a\u7c7b\u4e2d\u6709\u591a\u4e2a\u6784\u9020\u51fd\u6570\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"java\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u7a7a\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528"},"Java\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u7a7a\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528"),(0,r.kt)("p",null,"Java\u7a0b\u5e8f\u5728\u6267\u884c\u5b50\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u4e4b\u524d\uff0c\u5982\u679c\u6ca1\u6709\u7528super()\u6765\u8c03\u7528\u7236\u7c7b\u7279\u5b9a\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u5219\u4f1a\u8c03\u7528\u7236\u7c7b\u4e2d\u201c\u6ca1\u6709\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\u201d\u3002\u56e0\u6b64\uff0c\u5982\u679c\u7236\u7c7b\u4e2d\u53ea\u5b9a\u4e49\u4e86\u6709\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u800c\u5728\u5b50\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u4e2d\u53c8\u6ca1\u6709\u7528super()\u6765\u8c03\u7528\u7236\u7c7b\u4e2d\u7279\u5b9a\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u5219\u7f16\u8bd1\u65f6\u5c06\u53d1\u751f\u9519\u8bef\uff0c\u56e0\u4e3aJava\u7a0b\u5e8f\u5728\u7236\u7c7b\u4e2d\u627e\u4e0d\u5230\u6ca1\u6709\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\u53ef\u4f9b\u6267\u884c\u3002\u89e3\u51b3\u65b9\u6cd5\u662f\u5728\u7236\u7c7b\u4e2d\u52a0\u4e0a\u4e00\u4e2a\u7a7a\u6784\u9020\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u6210\u5458\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u7684\u533a\u522b"},"\u6210\u5458\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u7684\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bed\u6cd5\uff1a\u6210\u5458\u53d8\u91cf\u5c5e\u4e8e\u7c7b\u7684\uff0c\u800c\u5c40\u90e8\u53d8\u91cf\u662f\u5728\u65b9\u6cd5\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u6216\u662f\u65b9\u6cd5\u7684\u53c2\u6570\uff1b\u6210\u5458\u53d8\u91cf\u53ef\u4ee5\u88abpublic,private,static\u7b49\u4fee\u9970\u7b26\u6240\u4fee\u9970\uff0c\u800c\u5c40\u90e8\u53d8\u91cf\u4e0d\u80fd\u88ab\u8bbf\u95ee\u63a7\u5236\u4fee\u9970\u7b26\u53castatic\u6240\u4fee\u9970\uff1b\u4f46\u662f\uff0c\u6210\u5458\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u675c\u80fd\u88abfinal\u6240\u4fee\u9970\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u65b9\u5f0f\uff1a\u5982\u679c\u6210\u5458\u53d8\u91cf\u4f7f\u7528static\u4fee\u9970\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6210\u5458\u53d8\u91cf\u662f\u5c5e\u4e8e\u7c7b\u7684\uff0c\u5982\u679c\u6ca1\u6709static\u4fee\u9970\uff0c\u8fd9\u4e2a\u6210\u5458\u53d8\u91cf\u662f\u5c5e\u4e8e\u5b9e\u4f8b\u7684\u3002\u800c\u5bf9\u8c61\u5b58\u5728\u4e8e\u5806\u5185\u5b58\uff0c\u5c40\u90e8\u53d8\u91cf\u5219\u5b58\u5728\u4e8e\u6808\u5185\u5b58\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53d8\u91cf\u5728\u5185\u5b58\u4e2d\u7684\u751f\u5b58\u65f6\u95f4\uff1a\u6210\u5458\u53d8\u91cf\u662f\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\uff0c\u4ed6\u968f\u7740\u72ec\u7231\u4f60\u7ed9\u7684\u521b\u5efa\u800c\u5b58\u5728\uff0c\u800c\u5c40\u90e8\u53d8\u91cf\u968f\u7740\u65b9\u6cd5\u7684\u8c03\u7528\u800c\u81ea\u52a8\u6d88\u5931\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6210\u5458\u53d8\u91cf\u5982\u679c\u6ca1\u6709\u88ab\u8d4b\u521d\u503c\uff1a\u5219\u4f1a\u81ea\u52a8\u4ee5\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u800c\u8d4b\u503c\uff08\u88abfinal\u4fee\u9970\u7684\u6210\u5458\u53d8\u91cf\u5fc5\u987b\u663e\u5f0f\u7684\u8d4b\u503c\uff09\uff0c\u800c\u5c40\u90e8\u53d8\u91cf\u5219\u4e0d\u4f1a\u81ea\u52a8\u8d4b\u503c\u3002")),(0,r.kt)("h2",{id:"\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528"},"\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u7684\u4f5c\u7528"),(0,r.kt)("p",null,"\u200b\t\t\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\u4f5c\u7528\u662f\u5b8c\u6210\u5bf9\u7c7b\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002\u82e5\u4e00\u4e2a\u7c7b\u6ca1\u6709\u6784\u9020\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u6267\u884c\uff0c\u56e0\u4e3a\u4e00\u4e2a\u7c7b\u5373\u4f7f\u6ca1\u6709\u58f0\u660e\u6784\u9020\u65b9\u6cd5\u4e5f\u4f1a\u6709\u9ed8\u8ba4\u7684\u4e0d\u5e26\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\u3002\u5982\u679c\u6211\u4eec\u81ea\u5df1\u6dfb\u52a0\u4e86\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\uff0cJava\u5c31\u4e0d\u4f1a\u518d\u6dfb\u52a0\u9ed8\u8ba4\u7684\u65e0\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e0d\u80fd\u76f4\u63a5new\u4e00\u4e2a\u5bf9\u8c61\u800c\u4e0d\u4f20\u9012\u53c2\u6570\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u4e00\u76f4\u5728\u4e0d\u77e5\u4e0d\u89c9\u4e2d\u4f7f\u7528\u6784\u9020\u65b9\u6cd5\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u65f6\u5019\u540e\u9762\u8981\u52a0\u4e00\u4e2a\u62ec\u53f7\uff08\u56e0\u4e3a\u8981\u8c03\u7528\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\uff09\u3002\u5982\u679c\u6211\u4eec\u91cd\u8f7d\u4e86\u6709\u6b8b\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u8bb0\u5f97\u90fd\u8981\u628a\u65e0\u53c2\u7684\u6784\u9020\u65b9\u6cd5\u5199\u51fa\u6765\uff08\u65e0\u8bba\u662f\u5426\u7528\u5230\uff09\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u65f6\u5019\u5c11\u8e29\u5751\u3002"),(0,r.kt)("h2",{id:"\u6784\u9020\u65b9\u6cd5\u7684\u7279\u6027"},"\u6784\u9020\u65b9\u6cd5\u7684\u7279\u6027"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u540d\u5b57\u4e0e\u7c7b\u540d\u76f8\u540c"),(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u8fd4\u56de\u503c\u4f46\u662f\u4e0d\u80fd\u7528void\u58f0\u660e\u6784\u9020\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u7c7b\u7684\u5bf9\u8c61\u662f\u81ea\u52a8\u6267\u884c\uff0c\u65e0\u5e8f\u8c03\u7528")),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u76f8\u7b49\u548c\u6307\u5411\u4ed6\u4eec\u7684\u5f15\u7528\u76f8\u7b49\u4e24\u8005\u7684\u4e0d\u540c"},"\u5bf9\u8c61\u76f8\u7b49\u548c\u6307\u5411\u4ed6\u4eec\u7684\u5f15\u7528\u76f8\u7b49\u4e24\u8005\u7684\u4e0d\u540c"),(0,r.kt)("p",null,"\u5bf9\u8c61\u7684\u76f8\u7b49\u6bd4\u7684\u662f\u5185\u5b58\u4e2d\u5b58\u653e\u7684\u5185\u5bb9\u662f\u5426\u76f8\u7b49\u3002"),(0,r.kt)("p",null,"\u5f15\u7528\u76f8\u7b49\u6bd4\u7684\u662f\u4ed6\u4eec\u6307\u5411\u7684\u5185\u5b58\u5730\u5740\u662f\u5426\u76f8\u7b49\u3002"),(0,r.kt)("h1",{id:"java\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81"},"Java\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81"),(0,r.kt)("h2",{id:"\u5c01\u88c5"},"\u5c01\u88c5"),(0,r.kt)("p",null,"\u200b\t\t\u5c01\u88c5\u662f\u6307\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u4fe1\u606f\uff08\u5c5e\u6027\uff09\u9690\u85cf\u5728\u5bf9\u8c61\u5185\u90e8\uff0c\u4e0d\u5141\u8bb8\u5916\u90e8\u5bf9\u8c61\u76f4\u63a5\u8bbf\u95ee\u5bf9\u8c61\u5185\u90e8\u4fe1\u606f\u3002\u4f46\u662f\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u53ef\u4ee5\u88ab\u5916\u754c\u8bbf\u95ee\u7684\u65b9\u6cd5\u6765\u64cd\u4f5c\u5c5e\u6027\u3002\u5982\u679c\u5c5e\u6027\u4e0d\u60f3\u80cc\u5916\u754c\u8bbf\u95ee\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0d\u63d0\u4f9b\u65b9\u6cd5\u7ed9\u5916\u754c\u8bbf\u95ee\u3002\u4f46\u662f\u5982\u679c\u4e00\u4e2a\u7c7b\u6ca1\u6709\u63d0\u4f9b\u7ed9\u5916\u754c\u8bbf\u95ee\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7c7b\u672c\u8eab\u6ca1\u6709\u4e86\u610f\u4e49\u3002"),(0,r.kt)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,r.kt)("p",null,"\u200b\t\t\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u76f8\u4e92\u4e4b\u95f4\u7ecf\u5e38\u6709\u4e00\u5b9a\u6570\u91cf\u7684\u5171\u540c\u70b9\u3002\u540c\u65f6\uff0c\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u8fd8\u5b9a\u4e49\u4e86\u989d\u5916\u7684\u7279\u6027\u4f7f\u5f97\u4ed6\u4eec\u4e0e\u4f17\u4e0d\u540c\u3002\u7ee7\u627f\u662f\u4f7f\u7528\u5df2\u5b58\u5728\u7684\u7c7b\u7684\u5b9a\u4e49\u4f5c\u4e3a\u57fa\u7840\u5efa\u7acb\u65b0\u7c7b\u7684\u6280\u672f\uff0c\u65b0\u7c7b\u7684\u5b9a\u4e49\u53ef\u4ee5\u589e\u52a0\u65b0\u7684\u6570\u636e\u6216\u65b0\u7684\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u7528\u7236\u7c7b\u7684\u529f\u80fd\uff0c\u4f46\u4e0d\u80fd\u9009\u62e9\u6027\u7684\u7ee7\u627f\u7236\u7c7b\u3002\u901a\u8fc7\u4f7f\u7528\u7ee7\u627f\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u65b0\u7684\u7c7b\uff0c\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u91cd\u7528\uff0c\u7a0b\u5e8f\u7684\u53ef\u7ef4\u62a4\u6027\uff0c\u8282\u7701\u5927\u91cf\u521b\u5efa\u65b0\u7c7b\u7684\u65f6\u95f4\uff0c\u63d0\u9ad8\u6211\u4eec\u7684\u5f00\u53d1\u6548\u7387\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u62e5\u6709\u7236\u7c7b\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff08\u5305\u62ec\u79c1\u6709\u5c5e\u6027\u548c\u79c1\u6709\u65b9\u6cd5\uff09\uff0c\u4f46\u662f\u7236\u7c7b\u4e2d\u7684\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u5b50\u7c7b\u662f\u65e0\u6cd5\u8bbf\u95ee\u7684\uff08\u53ea\u662f\u62e5\u6709\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u53ef\u4ee5\u62e5\u6709\u81ea\u5df1\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5373\u5b50\u7c7b\u53ef\u4ee5\u5bf9\u7236\u7c7b\u8fdb\u884c\u6269\u5c55"),(0,r.kt)("li",{parentName:"ol"},"\u5b50\u7c7b\u53ef\u4ee5\u7528\u81ea\u5df1\u7684\u65b9\u5f0f\u5b9e\u73b0\u7236\u7c7b\u65b9\u6cd5")),(0,r.kt)("h2",{id:"\u591a\u6001"},"\u591a\u6001"),(0,r.kt)("p",null,"\u200b\t\t\u8868\u793a\u4e00\u4e2a\u5bf9\u8c61\u6709\u591a\u79cd\u72b6\u6001\u3002\u5177\u4f53\u8868\u73b0\u4e3a\u7236\u7c7b\u7684\u5f15\u7528\u6307\u5411\u5b50\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u4e4b\u95f4\u5177\u6709\u7ee7\u627f\uff08\u7c7b\uff09/\u5b9e\u73b0\uff08\u63a5\u53e3\uff09\u7684\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u7c7b\u578b\u4e0d\u53ef\u53d8\u3001\u5f15\u7528\u7c7b\u578b\u53ef\u53d8"),(0,r.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u5177\u6709\u591a\u6001\u6027\uff0c\u5c5e\u6027\u4e0d\u5177\u6709\u591a\u6001\u6027"),(0,r.kt)("li",{parentName:"ol"},"\u5f15\u7528\u7c7b\u578b\u53d8\u91cf\u53d1\u51fa\u7684\u65b9\u6cd5\u8c03\u7528\u7684\u5230\u5e95\u662f\u90a3\u4e2a\u7c7b\u7684\u65b9\u6cd5\uff0c\u5fc5\u987b\u5728\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u624d\u80fd\u786e\u5b9a"),(0,r.kt)("li",{parentName:"ol"},"\u591a\u6001\u4e0d\u80fd\u8c03\u7528\u201c\u53ea\u5728\u5b50\u7c7b\u4e2d\u5b58\u5728\u4f46\u5728\u7236\u7c7b\u4e2d\u4e0d\u5b58\u5728\u201d\u7684\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b50\u7c7b\u91cd\u5199\u4e86\u7236\u7c7b\u7684\u65b9\u6cd5\uff0c\u771f\u6b63\u6267\u884c\u7684\u662f\u5b50\u7c7b\u8986\u76d6\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u5b50\u7c7b\u6ca1\u6709\u8986\u76d6\u7236\u7c7b\u65b9\u6cd5\uff0c\u6267\u884c\u7684\u662f\u7236\u7c7b\u65b9\u6cd5")),(0,r.kt)("h1",{id:"\u4fee\u9970\u7b26"},"\u4fee\u9970\u7b26"),(0,r.kt)("h2",{id:"\u5728\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e00\u4e2a\u975e\u9759\u6001\u65b9\u6cd5\u4e3a\u4ec0\u4e48\u662f\u975e\u6cd5\u7684"},"\u5728\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e00\u4e2a\u975e\u9759\u6001\u65b9\u6cd5\u4e3a\u4ec0\u4e48\u662f\u975e\u6cd5\u7684\uff1f"),(0,r.kt)("p",null,"\u200b\t\t\u7531\u4e8e\u9759\u6001\u65b9\u6cd5\u53ef\u4ee5\u4e0d\u901a\u8fc7\u5bf9\u8c61\u8fdb\u884c\u8c03\u7528\uff0c\u56e0\u6b64\u5728\u9759\u6001\u65b9\u6cd5\u91cc\uff0c\u4e0d\u80fd\u8c03\u7528\u5176\u4ed6\u975e\u9759\u6001\u53d8\u91cf\uff0c\u4e5f\u4e0d\u53ef\u4ee5\u8bbf\u95ee\u975e\u9759\u6001\u53d8\u91cf\u6210\u5458\u3002"),(0,r.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5\u548c\u5b9e\u4f8b\u65b9\u6cd5\u6709\u4f55\u4e0d\u540c"},"\u9759\u6001\u65b9\u6cd5\u548c\u5b9e\u4f8b\u65b9\u6cd5\u6709\u4f55\u4e0d\u540c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5916\u90e8\u8c03\u7528\u9759\u6001\u65b9\u6cd5\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u201c\u7c7b\u540d.\u65b9\u6cd5\u540d\u201d\u7684\u65b9\u5f0f\u3001\u4e5f\u53ef\u4ee5\u4f7f\u7528\u201c\u5bf9\u8c61\u540d.\u65b9\u6cd5\u540d\u201d\u7684\u65b9\u5f0f\u3002\u800c\u5b9e\u4f8b\u65b9\u6cd5\u53ea\u6709\u540e\u9762\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4\u8c03\u7528\u9759\u6001\u65b9\u6cd5\u53ef\u4ee5\u65e0\u9700\u521b\u5efa\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9759\u6001\u65b9\u6cd5\u5728\u8bbf\u95ee\u672c\u7c7b\u7684\u6210\u5458\u65f6\uff0c\u53ea\u5141\u8bb8\u8bbf\u95ee\u9759\u6001\u6210\u5458\uff0c\u4e0d\u5141\u8bb8\u8bbf\u95ee\u5b9e\u4f8b\u6210\u5458\u53d8\u91cf\u548c\u5b9e\u4f8b\u65b9\u6cd5\uff1b\u5b9e\u4f8b\u65b9\u6cd5\u5219\u65e0\u6b64\u9650\u5236\u3002")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u5173\u952e\u5b57\u603b\u7ed3staticfinalthissuper"},"\u5e38\u89c1\u5173\u952e\u5b57\u603b\u7ed3:static,final,this,super"),(0,r.kt)("h3",{id:"static\u5173\u952e\u5b57"},"static\u5173\u952e\u5b57"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528static\u53ef\u4ee5\u4fee\u9970\u6210\u5458\u53d8\u91cf\uff0c\u5e38\u91cf\uff0c\u65b9\u6cd5\u548c\u4ee3\u7801\u5757"),(0,r.kt)("li",{parentName:"ol"},"\u9759\u6001\u6210\u5458\u662f\u5168\u5c40\u7684\uff0c\u5f52\u6574\u4e2a\u7c7b\u6240\u6709\uff0c\u4e0d\u4f9d\u8d56\u7279\u5b9a\u7684\u5bf9\u8c61\uff0c\u662f\u88ab\u6240\u6709\u7c7b\u7684\u5bf9\u8c61\u6240\u5171\u4eab\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u53ea\u8981\u7c7b\u88abjava\u865a\u62df\u673a\u52a0\u8f7d\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u7c7b\u540d\u5728\u5168\u5c40\u6570\u636e\u57df\u5185\u627e\u5230\u4ed6\u4eec")),(0,r.kt)("h3",{id:"this\u5173\u952e\u5b57"},"this\u5173\u952e\u5b57"),(0,r.kt)("p",null,"this\u65b9\u6cd5\u603b\u662f\u6307\u5411\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u5bf9\u8c61"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"this\u53ef\u4ee5\u4ee3\u8868\u4efb\u4f55\u5bf9\u8c61\uff0c\u5f53this\u51fa\u73b0\u5728\u67d0\u4e2a\u65b9\u6cd5\u4f53\u4e2d\u65f6\uff0c\u4ed6\u6240\u4ee3\u8868\u7684\u5bf9\u8c61\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u4f46\u4ed6\u7684\u7c7b\u578b\u662f\u786e\u5b9a\u7684\uff0c\u5b83\u6240\u4ee3\u8868\u7684\u53ea\u80fd\u662f\u5f53\u524d\u7c7b\u7684\u5b9e\u4f8b\u3002")),(0,r.kt)("h3",{id:"super\u5173\u952e\u5b57"},"super\u5173\u952e\u5b57"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7528\u6765\u8c03\u7528\u76f4\u63a5\u7236\u7c7b\u4e2d\u7684\u5c5e\u6027\uff0c\u65b9\u6cd5\uff0c\u6784\u9020\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u60f3\u8981\u5728\u5b50\u7c7b\u4e2d\u4f7f\u7528\u7236\u7c7b\u7684\u5c5e\u6027\u65f6\uff0c\u5c31\u8981\u7528super.\u5c5e\u6027\u540d"),(0,r.kt)("li",{parentName:"ol"},"\u6784\u9020\u65b9\u6cd5\u4e0d\u80fd\u88ab\u7ee7\u627f\uff0c\u4f46\u5b50\u7c7b\u53ef\u4ee5\u901a\u8fc7super\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u6784\u9020\u65b9\u6cd5\u53ef\u4ee5\u88ab\u91cd\u8f7d\uff0c\u4e00\u4e2a\u7c7b\u91cc\u9762\u53ef\u4ee5\u6709\u591a\u4e2a\u6784\u9020\u65b9\u6cd5")),(0,r.kt)("h3",{id:"final\u5173\u952e\u5b57"},"final\u5173\u952e\u5b57"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"final\u4fee\u9970\u7c7b\uff0c\u4e0d\u5b58\u5728\u5b50\u7c7b\uff0c\u6bd4\u5982String\u7c7b"),(0,r.kt)("li",{parentName:"ol"},"final\u4fee\u9970\u65b9\u6cd5\uff0c\u5b50\u7c7b\u4e0d\u80fd\u91cd\u5199"),(0,r.kt)("li",{parentName:"ol"},"final\u4fee\u9970\u5c5e\u6027\uff0c\u4e3a\u5e38\u91cf\uff0c\u9700\u8981\u521d\u59cb\u5316\uff0c\u5e76\u4e14\u4e0d\u53ef\u4fee\u6539\uff0c\u5e38\u91cf\u547d\u540d\u901a\u5e38\u7528\u5927\u5199\u5b57\u6bcd\uff0c\u6bcf\u4e2a\u5b57\u6bcd\u4e2d\u95f4\u7528\u4e0b\u5212\u7ebf\u9694\u5f00"),(0,r.kt)("li",{parentName:"ol"},"final\u8fdb\u884c\u4fee\u9970\u5c5e\u6027\uff0c\u5b50\u7c7b\u53ef\u4ee5\u4f7f\u7528")),(0,r.kt)("h1",{id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b"},"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b"),(0,r.kt)("h2",{id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b"},"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u7684\u9ed8\u8ba4\u65b9\u6cd5\u65f6public\uff0c\u6240\u6709\u65b9\u6cd5\u5728\u63a5\u53e3\u4e2d\u4e0d\u80fd\u6709\u5b9e\u73b0\uff08Java8\u5f00\u59cb\u63a5\u53e3\u65b9\u6cd5\u53ef\u4ee5\u6709\u9ed8\u8ba4\u5b9e\u73b0\uff09\uff0c\u800c\u62bd\u8c61\u7c7b\u53ef\u4ee5\u6709\u975e\u62bd\u8c61\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u4e2d\u9664\u4e86static\u3001final\u53d8\u91cf\uff0c\u4e0d\u80fd\u6709\u5176\u4ed6\u53d8\u91cf\uff0c\u800c\u62bd\u8c61\u7c7b\u4e2d\u5219\u4e0d\u4e00\u5b9a"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a\u63a5\u53e3\uff0c\u4f46\u53ea\u80fd\u5b9e\u73b0\u4e00\u4e2a\u62bd\u8c61\u7c7b\u3002\u63a5\u53e3\u81ea\u5df1\u672c\u8eab\u53ef\u4ee5\u901a\u8fc7extends\u5173\u952e\u5b57\u6269\u5c55\u591a\u4e2a\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u65b9\u6cd5\u9ed8\u8ba4\u4fee\u9970\u7b26\u662fpublic,\u62bd\u8c61\u65b9\u6cd5\u53ef\u4ee5\u6709public\u3001protected\u548cdefault\u8fd9\u4e9b\u4fee\u9970\u7b26\uff08\u62bd\u8c61\u65b9\u6cd5\u5c31\u662f\u4e3a\u4e86\u88ab\u91cd\u5199\u6240\u4ee5\u4e0d\u80fd\u7528private\u5173\u952e\u5b57\u4fee\u9970\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u4ece\u8bbe\u8ba1\u5c42\u9762\u6765\u8bf4\uff0c\u62bd\u8c61\u662f\u5bf9\u7c7b\u7684\u62bd\u8c61\uff0c\u662f\u4e00\u79cd\u6a21\u677f\u8bbe\u8ba1\uff0c\u800c\u63a5\u53e3\u662f\u5bf9\u884c\u4e3a\u7684\u62bd\u8c61\uff0c\u662f\u4e00\u79cd\u884c\u4e3a\u7684\u89c4\u8303")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\u5728jdk8\u4e2d\uff0c\u63a5\u53e3\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u9759\u6001\u65b9\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u63a5\u53e3\u540d\u8c03\u7528\u3002\u5b9e\u73b0\u7c7b\u662f\u4e0d\u53ef\u4ee5\u8c03\u7528\u7684\u3002\u5982\u679c\u540c\u65f6\u5b9e\u73b0\u4e86\u4e24\u4e2a\u63a5\u53e3\uff0c\u63a5\u53e3\u4e2d\u5b9a\u4e49\u4e86\u4e00\u6837\u7684\u9ed8\u8ba4\u65b9\u6cd5\uff0c\u5219\u5fc5\u987b\u91cd\u5199\uff0c\u4e0d\u7136\u4f1a\u62a5\u9519\u3002")))}k.isMDXComponent=!0}}]);