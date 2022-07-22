"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[1956],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,d=m["".concat(c,".").concat(g)]||m[g]||s[g]||a;return t?i.createElement(d,p(p({ref:n},u),{},{components:t})):i.createElement(d,p({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<a;l++)p[l]=t[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const a={},p="TopicExchange(\u4e3b\u9898\u6a21\u5f0f)",o={unversionedId:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605)",id:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605)",title:"TopicExchange(\u4e3b\u9898\u6a21\u5f0f)",description:"\u8bf4\u660e",source:"@site/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/08-SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605).md",sourceDirName:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ",slug:"/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605)",permalink:"/MyWiki/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605)",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/08-SpringAMQP-TopicExchange(\u53d1\u5e03\u8ba2\u9605).md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DirectExchange(\u8def\u7531\u6a21\u5f0f)",permalink:"/MyWiki/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-DirectExchange(\u53d1\u5e03\u8ba2\u9605)"},next:{title:"\u6d88\u606f\u8f6c\u6362\u5668",permalink:"/MyWiki/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-\u6d88\u606f\u8f6c\u6362\u5668"}},c={},l=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u58f0\u660e\u4ea4\u6362\u673a\u548c\u961f\u5217",id:"\u58f0\u660e\u4ea4\u6362\u673a\u548c\u961f\u5217",level:2},{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"\u6d88\u606f\u63a5\u6536",id:"\u6d88\u606f\u63a5\u6536",level:2}],u={toc:l};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"topicexchange\u4e3b\u9898\u6a21\u5f0f"},"TopicExchange(\u4e3b\u9898\u6a21\u5f0f)"),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Topic"),"\u7c7b\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Direct"),"\u76f8\u6bd4\uff0c\u90fd\u662f\u53ef\u4ee5\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"RoutingKey"),"\u628a\u6d88\u606f\u8def\u7531\u5230\u4e0d\u540c\u7684\u961f\u5217\u3002\u53ea\u4e0d\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Topic"),"\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"Exchange"),"\u53ef\u4ee5\u8ba9\u961f\u5217\u5728\u7ed1\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"Routing key")," \u7684\u65f6\u5019\u4f7f\u7528\u901a\u914d\u7b26\uff01"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Routingkey")," \u4e00\u822c\u90fd\u662f\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5355\u8bcd\u7ec4\u6210\uff0c\u591a\u4e2a\u5355\u8bcd\u4e4b\u95f4\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\u5206\u5272\uff0c\u4f8b\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"bttc.insert")),(0,r.kt)("p",null," \u901a\u914d\u7b26\u89c4\u5219\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#"),"\uff1a\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u8bcd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\uff1a\u5339\u914d1\u4e2a\u8bcd"),(0,r.kt)("p",null,"\u4e3e\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"item.#"),"\uff1a\u80fd\u591f\u5339\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"item.spu.insert")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"item.spu")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"item.*"),"\uff1a\u53ea\u80fd\u5339\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"item.spu")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211201756.png?raw=true",alt:"image-20220211211201756"})),(0,r.kt)("h2",{id:"\u58f0\u660e\u4ea4\u6362\u673a\u548c\u961f\u5217"},"\u58f0\u660e\u4ea4\u6362\u673a\u548c\u961f\u5217"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211216377.png?raw=true",alt:"image-20220211211216377"})),(0,r.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,r.kt)("p",null,"\u5728publisher\u670d\u52a1\u7684SpringAmqpTest\u7c7b\u4e2d\u6dfb\u52a0\u6d4b\u8bd5\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testSendTopicExchange() {\n    // \u4ea4\u6362\u673a\u540d\u79f0\n    String exchangeName = "bttc.topic";\n    // \u6d88\u606f\n    String message = "\u8c01\u628a\u7237\u7535\u52a8\u8f66\u9a91\u8d70\u4e86\uff1f!";\n    // \u53d1\u9001\u6d88\u606f\n    rabbitTemplate.convertAndSend(exchangeName, "china.news", message);\n}\n')),(0,r.kt)("h2",{id:"\u6d88\u606f\u63a5\u6536"},"\u6d88\u606f\u63a5\u6536"),(0,r.kt)("p",null,"\u5728consumer\u670d\u52a1\u7684SpringRabbitListener\u4e2d\u6dfb\u52a0\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RabbitListener(bindings = @QueueBinding(\n    value = @Queue(name = "topic.queue1"),\n    exchange = @Exchange(name = "bttc.topic", type = ExchangeTypes.TOPIC),\n    key = "china.#"\n))\npublic void listenTopicQueue1(String msg){\n    System.out.println("\u6d88\u8d39\u8005\u63a5\u6536\u5230topic.queue1\u7684\u6d88\u606f\uff1a\u3010" + msg + "\u3011");\n}\n\n@RabbitListener(bindings = @QueueBinding(\n    value = @Queue(name = "topic.queue2"),\n    exchange = @Exchange(name = "bttc.topic", type = ExchangeTypes.TOPIC),\n    key = "#.news"\n))\npublic void listenTopicQueue2(String msg){\n    System.out.println("\u6d88\u8d39\u8005\u63a5\u6536\u5230topic.queue2\u7684\u6d88\u606f\uff1a\u3010" + msg + "\u3011");\n}\n')))}s.isMDXComponent=!0}}]);