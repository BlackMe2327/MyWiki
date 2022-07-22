"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7672],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=i(t),d=r,b=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return t?n.createElement(b,o(o({ref:a},p),{},{components:t})):n.createElement(b,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=h;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},259:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const l={},o="Hash\u4e0eHashTable\u7684\u533a\u522b",u={unversionedId:"Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b",id:"Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b",title:"Hash\u4e0eHashTable\u7684\u533a\u522b",description:"\u7ebf\u7a0b\u5b89\u5168",source:"@site/docs/Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b.md",sourceDirName:"Language/java",slug:"/Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b",permalink:"/docs/Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",permalink:"/docs/Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09"},next:{title:"HashMap\u6b7b\u5faa\u73af\u95ee\u9898",permalink:"/docs/Language/java/HashMap\u6b7b\u5faa\u73af\u95ee\u9898"}},s={},i=[{value:"\u7ebf\u7a0b\u5b89\u5168",id:"\u7ebf\u7a0b\u5b89\u5168",level:2},{value:"\u6548\u7387",id:"\u6548\u7387",level:2},{value:"\u5bf9Null key\u548cNull value\u7684\u652f\u6301",id:"\u5bf9null-key\u548cnull-value\u7684\u652f\u6301",level:2},{value:"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u4e0e\u6bcf\u6b21\u6269\u5bb9\u5927\u5c0f\u7684\u4e0d\u540c",id:"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u4e0e\u6bcf\u6b21\u6269\u5bb9\u5927\u5c0f\u7684\u4e0d\u540c",level:2},{value:"\u5e95\u5c42\u6570\u636e\u7ed3\u6784",id:"\u5e95\u5c42\u6570\u636e\u7ed3\u6784",level:2},{value:"\u63a8\u8350\u4f7f\u7528",id:"\u63a8\u8350\u4f7f\u7528",level:2}],p={toc:i};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hash\u4e0ehashtable\u7684\u533a\u522b"},"Hash\u4e0eHashTable\u7684\u533a\u522b"),(0,r.kt)("h2",{id:"\u7ebf\u7a0b\u5b89\u5168"},"\u7ebf\u7a0b\u5b89\u5168"),(0,r.kt)("p",null,"HashMap\u662f\u975e\u7ebf\u7a0b\u5b89\u5168\u7684\uff0cHashTable\u5185\u90e8\u65b9\u6cd5\u57fa\u672c\u90fd\u7ecf\u8fc7\u4e86synchronized\u4fee\u9970\uff0c\u6240\u4ee5HashTable\u662f\u7ebf\u7a0b\u5b89\u5168\u7684"),(0,r.kt)("h2",{id:"\u6548\u7387"},"\u6548\u7387"),(0,r.kt)("p",null,"\u56e0\u4e3a\u7ebf\u7a0b\u5b89\u5168\u7684\u95ee\u9898\uff0cHashMap\u8981\u6bd4HashTable\u7684\u6548\u7387\u9ad8\u4e00\u70b9\u513f"),(0,r.kt)("h2",{id:"\u5bf9null-key\u548cnull-value\u7684\u652f\u6301"},"\u5bf9Null key\u548cNull value\u7684\u652f\u6301"),(0,r.kt)("p",null,"HashMap\u4e2d\uff0cnull\u53ef\u4ee5\u4f5c\u4e3a\u952e\uff0c\u8fd9\u6837\u7684\u952e\u53ea\u6709\u4e00\u4e2a\uff0c\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u4e3anull"),(0,r.kt)("p",null,"HashTable\u4e0d\u5141\u8bb8\u6709null\u7684\u952e\u6216\u503c\uff0c\u5982\u679cput\u8fdb\u7684\u952e\u503c\u53ea\u8981\u6709\u4e00\u4e2a\u4e3anull\uff0c\u5219\u629b\u51fa\u7a7a\u6307\u9488\u5f02\u5e38"),(0,r.kt)("h2",{id:"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u4e0e\u6bcf\u6b21\u6269\u5bb9\u5927\u5c0f\u7684\u4e0d\u540c"},"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u4e0e\u6bcf\u6b21\u6269\u5bb9\u5927\u5c0f\u7684\u4e0d\u540c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65f6\u5982\u679c\u4e0d\u6307\u5b9a\u5bb9\u91cf\u521d\u59cb\u503c\uff0cHashTable\u9ed8\u8ba4\u7684\u521d\u59cb\u5927\u5c0f\u4e3a11\uff0c\u4e4b\u540e\u6bcf\u6b21\u6269\u5145\uff0c\u5bb9\u91cf\u53d8\u4e3a\u4e4b\u524d\u76842n+1\uff0cHashMap\u9ed8\u8ba4\u521d\u59cb\u5316\u5927\u5c0f\u4e3a16\u3002\u4e4b\u540e\u6bcf\u6b21\u6269\u5145\uff0c\u5bb9\u91cf\u53d8\u4e3a\u539f\u6765\u76842\u500d"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65f6\u5982\u679c\u7ed9\u5b9a\u4e86\u5bb9\u91cf\u521d\u59cb\u503c\uff0c\u90a3\u4e48HashTable\u4f1a\u76f4\u63a5\u4f7f\u7528\u4f60\u7ed9\u5b9a\u7684\u5927\u5c0f\uff0c\u800cHashMap\u4f1a\u5c06\u5176\u6269\u5145\u4e3a2\u7684\u5e42\u6b21\u65b9\u5927\u5c0f\uff0c\u4e5f\u5c31\u662f\u8bf4HashMap\u603b\u662f\u4f7f\u75282\u7684\u5e42\u6b21\u65b9\u4f5c\u4e3a\u54c8\u5e0c\u8868\u7684\u5927\u5c0f")),(0,r.kt)("h2",{id:"\u5e95\u5c42\u6570\u636e\u7ed3\u6784"},"\u5e95\u5c42\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"jdk1.8\u540eHashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81\u6709\u4e86\u8f83\u5927\u7684\u53d8\u5316\uff0c\u5f53\u94fe\u8868\u957f\u5ea6\u5927\u4e8e\u9608\u503c\uff08\u9ed8\u8ba48\uff09\u65f6\uff0c\u5c06\u94fe\u8868\u8f6c\u5316\u4e3a\u7ea2\u9ed1\u6811\uff0c\u4ee5\u51cf\u5c11\u641c\u7d22\u65f6\u95f4\uff0cHashTable\u6ca1\u6709\u8fd9\u6837\u7684\u673a\u5236"),(0,r.kt)("h2",{id:"\u63a8\u8350\u4f7f\u7528"},"\u63a8\u8350\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728HashTable\u7684\u6ce8\u91ca\u4e2d\u53ef\u4ee5\u770b\u5230\uff0cHashTable\u662f\u4fdd\u7559\u7c7b\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u63a8\u8350\u5728\u5355\u7ebf\u7a0b\u73af\u5883\u4e0b\u4f7f\u7528HashMap,\u5982\u679c\u9700\u8981\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u4f7f\u7528\u5219\u7528ConcurrentHashMap\u66ff\u4ee3\u3002"))}c.isMDXComponent=!0}}]);