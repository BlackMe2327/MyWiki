"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[446],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(t),m=r,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return t?n.createElement(d,l(l({ref:a},u),{},{components:t})):n.createElement(d,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5809:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={},l="HashMap\u89e3\u51b3Hash\u51b2\u7a81",i={unversionedId:"Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",id:"Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",title:"HashMap\u89e3\u51b3Hash\u51b2\u7a81",description:"\u4ec0\u4e48\u662f\u54c8\u5e0c\u51b2\u7a81",source:"@site/docs/Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81.md",sourceDirName:"Language/java",slug:"/Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",permalink:"/MyWiki/docs/Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Language/java/HashMap\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HashMap\u7684put\u65b9\u6cd5\u7684\u5177\u4f53\u6d41\u7a0b",permalink:"/MyWiki/docs/Language/java/HashMap\u7684put\u65b9\u6cd5\u5177\u4f53\u6d41\u7a0b"},next:{title:"JVM\u8be6\u89e3",permalink:"/MyWiki/docs/Language/java/JVM\u8be6\u89e3"}},p={},s=[{value:"\u4ec0\u4e48\u662f\u54c8\u5e0c\u51b2\u7a81",id:"\u4ec0\u4e48\u662f\u54c8\u5e0c\u51b2\u7a81",level:2},{value:"HashMap\u7684\u6570\u636e\u7ed3\u6784",id:"hashmap\u7684\u6570\u636e\u7ed3\u6784",level:2},{value:"jdk1.8\u65b0\u589e\u7ea2\u9ed1\u6811",id:"jdk18\u65b0\u589e\u7ea2\u9ed1\u6811",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:s};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hashmap\u89e3\u51b3hash\u51b2\u7a81"},"HashMap\u89e3\u51b3Hash\u51b2\u7a81"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u54c8\u5e0c\u51b2\u7a81"},"\u4ec0\u4e48\u662f\u54c8\u5e0c\u51b2\u7a81"),(0,r.kt)("p",null,"\u5f53\u4e24\u4e2a\u4e2a\u4e0d\u540c\u7684\u503c\uff0c\u6839\u636e\u540c\u4e00\u6563\u5217\u51fd\u6570\u8ba1\u7b97\u51fa\u76f8\u540c\u7684\u6563\u5217\u503c\u73b0\u8c61\uff0c\u79f0\u4e3a\u54c8\u5e0c\u51b2\u7a81"),(0,r.kt)("h2",{id:"hashmap\u7684\u6570\u636e\u7ed3\u6784"},"HashMap\u7684\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"HashMap\u662f\u7531\u6570\u7ec4+\u94fe\u8868\u7ec4\u6210\u7684\uff0cjdk1.8\u540e\u52a0\u5165\u4e86\u7ea2\u9ed1\u6811"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320113133381.png?raw=true",alt:"image-20220320113133381"})),(0,r.kt)("p",null,"\u200b\t\t\u4f7f\u7528\u94fe\u5730\u5740\u6cd5\u6765\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u5c06\u5177\u6709\u76f8\u540c\u54c8\u5e0c\u503c\u7684\u5bf9\u8c61\u7ec4\u7ec7\u6210\u4e00\u4e2a\u94fe\u8868\u653e\u5728hash\u503c\u6240\u5bf9\u5e94\u7684bucket\u4e0b\uff0c\u4f46\u662f\u76f8\u6bd4hashCode\u8fd4\u56de\u7684int\u7c7b\u578b\uff0cHashMap\u521d\u59cb\u7684\u5bb9\u91cf\u5927\u5c0f\u4e3aDEFAULT_INITIAL_CAPACITY = 1 << 4\uff08\u5373\n2\u7684\u56db\u6b21\u65b916\uff09\u8981\u8fdc\u5c0f\u4e8eint\u7c7b\u578b\u7684\u8303\u56f4\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u77e5\u8bc6\u5355\u7eaf\u7684\u4f7f\u7528hashCode\u53d6\u4f59\u6765\u83b7\u53d6\u5bf9\u5e94\u7684bucket\u8fd9\u5c06\u4f1a\u5927\u5927\u589e\u52a0\u54c8\u5e0c\u78b0\u649e\u7684\u6982\u7387\uff0c\u5e76\u4e14\u6700\u574f\u60c5\u51b5\u4e0b\u8fd8\u4f1a\u5c06HashMap\u53d8\u6210\u4e00\u4e2a\u5355\u94fe\u8868\uff0c\u6240\u4ee5\u9700\u8981\u5c06hashCode\u505a\u4e00\u5b9a\u7684\u4f18\u5316hash()\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u200b\t\t\u56e0\u4e3a\u5982\u679c\u4f7f\u7528hashCode\u6765\u53d6\u4f59\uff0c\u90a3\u4e48\u76f8\u5f53\u4e8e\u53c2\u4e0e\u8fd0\u7b97\u7684\u53ea\u6709hashCode\u7684\u4f4e\u4f4d\uff0c\u9ad8\u4f4d\u6ca1\u6709\u8d77\u5230\u4efb\u4f55\u4f5c\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u601d\u8def\u5c31\u662f\u8ba9hashCode\u53d6\u503c\u51fa\u7684\u9ad8\u4f4d\u4e5f\u53c2\u4e0e\u8fd0\u7b97\uff0c\u8fdb\u4e00\u6b65\u964d\u4f4ehash\u51b2\u7a81\u7684\u6982\u7387\uff0c\u4f7f\u5f97\u6570\u636e\u5206\u5e03\u66f4\u5e73\u5747\uff0c\u6211\u4eec\u628a\u8fd9\u6837\u7684\u64cd\u4f5c\u79f0\u4e3a\u6270\u52a8\u3002\u5728JDK1.8\u4e2d\u7684hash\u51fd\u6570\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static final int hashCode(Object key){\n    int h;\n    //\u4e0e\u81ea\u5df1\u53f3\u79fb16\u4f4d\u8fdb\u884c\u5f02\u6216\u8fd0\u7b97\uff08\u9ad8\u4f4e\u4f4d\u5f02\u6216\uff09\n    return (key==null)? 0 : (h==key.hashCode()) ^ (h>>>16)//\n}\n")),(0,r.kt)("p",null,"\u200b\t\t\u8fd9\u6bd4\u5728JDK 1.7\u4e2d\uff0c\u66f4\u4e3a\u7b80\u6d01\uff0c\u76f8\u6bd4\u57281.7\u4e2d\u76844\u6b21\u4f4d\u8fd0\u7b97\uff0c5\u6b21\u5f02\u6216\u8fd0\u7b97\uff089\u6b21\u6270\u52a8\uff09\uff0c\u57281.8\u4e2d\uff0c\u53ea\u8fdb\u884c\n\u4e861\u6b21\u4f4d\u8fd0\u7b97\u548c1\u6b21\u5f02\u6216\u8fd0\u7b97\uff082\u6b21\u6270\u52a8\uff09\uff1b"),(0,r.kt)("h2",{id:"jdk18\u65b0\u589e\u7ea2\u9ed1\u6811"},"jdk1.8\u65b0\u589e\u7ea2\u9ed1\u6811"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320113913763.png?raw=true",alt:"image-20220320113913763"})),(0,r.kt)("p",null,"\u200b\t\t\u901a\u8fc7\u4e0a\u9762\u7684\u94fe\u5730\u5740\u6cd5\uff08\u4f7f\u7528\u6563\u5217\u8868\uff09\u548c\u6270(img)\u52a8\u51fd\u6570\u6211\u4eec\u6210\u529f\u8ba9\u6211\u4eec\u7684\u6570\u636e\u5206\u5e03\u66f4\u5e73\u5747\uff0c\u54c8\u5e0c\u78b0\u649e\u51cf\n\u5c11\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u7684HashMap\u4e2d\u5b58\u5728\u5927\u91cf\u6570\u636e\u65f6\uff0c\u52a0\u5165\u6211\u4eec\u67d0\u4e2a bucket\u4e0b\u5bf9\u5e94\u7684\u94fe\u8868\u6709n\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u904d\n\u5386\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u4e3aO(n)\uff0c\u4e3a\u4e86\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0cJDK1.8\u5728HashMap\u4e2d\u65b0\u589e\u4e86\u7ea2\u9ed1\u6811\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fdb\u4e00\u6b65\u4f7f\n\u5f97\u904d\u5386\u590d\u6742\u5ea6\u964d\u4f4e\u81f3O(logn)\uff1b"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u7b80\u5355\u603b\u7ed3\u4e00\u4e0bHashMap\u662f\u4f7f\u7528\u4e86\u54ea\u4e9b\u65b9\u6cd5\u6765\u6709\u6548\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81\u7684\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u94fe\u5730\u5740\u6cd5\uff08\u4f7f\u7528\u6563\u5217\u8868\uff09\u6765\u94fe\u63a5\u62e5\u6709\u76f8\u540chash\u503c\u7684\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u75282\u6b21\u6270\u52a8\u51fd\u6570\uff08hash\u51fd\u6570\uff09\u6765\u964d\u4f4e\u54c8\u5e0c\u51b2\u7a81\u7684\u6982\u7387\uff0c\u4f7f\u5f97\u6570\u636e\u5206\u5e03\u66f4\u5e73\u5747\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165\u7ea2\u9ed1\u6811\u8fdb\u4e00\u6b65\u964d\u4f4e\u904d\u5386\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4f7f\u5f97\u904d\u5386\u66f4\u5feb")))}c.isMDXComponent=!0}}]);