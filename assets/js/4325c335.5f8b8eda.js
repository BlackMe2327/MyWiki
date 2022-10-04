"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(n),m=i,d=s["".concat(u,".").concat(m)]||s[m]||g[m]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={},c="SpringAMQP-DirectExchange",l={unversionedId:"MQ/RabbitMQ/SpringAMQP-DirectExchange",id:"MQ/RabbitMQ/SpringAMQP-DirectExchange",title:"SpringAMQP-DirectExchange",description:"Direct Exchange \u4f1a\u5c06\u63a5\u6536\u5230\u7684\u6d88\u606f\u6839\u636e\u89c4\u5219\u8def\u7531\u5230\u6307\u5b9a\u7684Queue\uff0c\u56e0\u6b64\u79f0\u4e3a\u8def\u7531\u6a21\u5f0f\uff08routes\uff09\u3002",source:"@site/docs/MQ/RabbitMQ/07-SpringAMQP-DirectExchange.md",sourceDirName:"MQ/RabbitMQ",slug:"/MQ/RabbitMQ/SpringAMQP-DirectExchange",permalink:"/MyWiki/docs/MQ/RabbitMQ/SpringAMQP-DirectExchange",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MQ/RabbitMQ/07-SpringAMQP-DirectExchange.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SpringAMQP-FanoutExchange",permalink:"/MyWiki/docs/MQ/RabbitMQ/SpringAMQP-FanoutExchange"},next:{title:"SpringAMQP-TopicExchange",permalink:"/MyWiki/docs/MQ/RabbitMQ/SpringAMQP-TopicExchange"}},u={},o=[{value:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e\u961f\u5217\u548c\u4ea4\u6362\u673a",id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e\u961f\u5217\u548c\u4ea4\u6362\u673a",level:2},{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],p={toc:o};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"springamqp-directexchange"},"SpringAMQP-DirectExchange"),(0,i.kt)("h1",{id:"directexchange\u8def\u7531\u6a21\u5f0f"},"DirectExchange(\u8def\u7531\u6a21\u5f0f)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Direct Exchange")," \u4f1a\u5c06\u63a5\u6536\u5230\u7684\u6d88\u606f\u6839\u636e\u89c4\u5219\u8def\u7531\u5230\u6307\u5b9a\u7684Queue\uff0c\u56e0\u6b64\u79f0\u4e3a\u8def\u7531\u6a21\u5f0f\uff08routes\uff09\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2aQueue\u90fd\u4e0eExchange\u8bbe\u7f6e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"BindingKey")),(0,i.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u8005\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u6307\u5b9a\u6d88\u606f\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"RoutingKey")),(0,i.kt)("li",{parentName:"ul"},"Exchange\u5c06\u6d88\u606f\u8def\u7531\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"BindingKey"),"\u4e0e\u6d88\u606f",(0,i.kt)("inlineCode",{parentName:"li"},"RoutingKey"),"\u4e00\u81f4\u7684\u961f\u5217")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211109325.png?raw=true",alt:"image-20220211211109325"})),(0,i.kt)("h2",{id:"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e\u961f\u5217\u548c\u4ea4\u6362\u673a"},"\u57fa\u4e8e\u6ce8\u89e3\u58f0\u660e\u961f\u5217\u548c\u4ea4\u6362\u673a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211130113.png?raw=true",alt:"image-20220211211130113"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RabbitListener(bindings = @QueueBinding(\n    value = @Queue(name = "direct.queue1"),\n    exchange = @Exchange(name = "bttc.direct", type = ExchangeTypes.DIRECT),\n    key = {"key1", "key2"}\n))\npublic void listenDirectQueue1(String msg){\n    System.out.println("\u6d88\u8d39\u8005\u63a5\u6536\u5230direct.queue1\u7684\u6d88\u606f\uff1a\u3010" + msg + "\u3011");\n}\n\n@RabbitListener(bindings = @QueueBinding(\n    value = @Queue(name = "direct.queue2"),\n    exchange = @Exchange(name = "bttc.direct", type = ExchangeTypes.DIRECT),\n    key = {"key1", "key3"}\n))\npublic void listenDirectQueue2(String msg){\n    System.out.println("\u6d88\u8d39\u8005\u63a5\u6536\u5230direct.queue2\u7684\u6d88\u606f\uff1a\u3010" + msg + "\u3011");\n}\n')),(0,i.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,i.kt)("p",null,"\u5728publisher\u670d\u52a1\u7684SpringAmqpTest\u7c7b\u4e2d\u6dfb\u52a0\u6d4b\u8bd5\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testSendDirectExchange() {\n    // \u4ea4\u6362\u673a\u540d\u79f0\n    String exchangeName = "bttc.direct";\n    // \u6d88\u606f\n    String message = "\u8c01\u628a\u7237\u7535\u52a8\u8f66\u9a91\u8d70\u4e86\uff1f";\n    // \u53d1\u9001\u6d88\u606f\n    rabbitTemplate.convertAndSend(exchangeName, "key1", message);\n}\n')),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u63cf\u8ff0\u4e0bDirect\u4ea4\u6362\u673a\u4e0eFanout\u4ea4\u6362\u673a\u7684\u5dee\u5f02\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fanout\u4ea4\u6362\u673a\u5c06\u6d88\u606f\u8def\u7531\u7ed9\u6bcf\u4e00\u4e2a\u4e0e\u4e4b\u7ed1\u5b9a\u7684\u961f\u5217"),(0,i.kt)("li",{parentName:"ul"},"Direct\u4ea4\u6362\u673a\u6839\u636eRoutingKey\u5224\u65ad\u8def\u7531\u7ed9\u54ea\u4e2a\u961f\u5217"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a\u961f\u5217\u5177\u6709\u76f8\u540c\u7684RoutingKey\uff0c\u5219\u4e0eFanout\u529f\u80fd\u7c7b\u4f3c")),(0,i.kt)("p",null,"\u57fa\u4e8e@RabbitListener\u6ce8\u89e3\u58f0\u660e\u961f\u5217\u548c\u4ea4\u6362\u673a\u6709\u54ea\u4e9b\u5e38\u89c1\u6ce8\u89e3\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@Queue"),(0,i.kt)("li",{parentName:"ul"},"@Exchange")))}g.isMDXComponent=!0}}]);