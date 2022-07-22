"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||c[b]||i;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},p="SpringAMQP",l={unversionedId:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-Base Queue",id:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-Base Queue",title:"SpringAMQP",description:"SpringAMQP\u662f\u57fa\u4e8eRabbitMQ\u5c01\u88c5\u7684\u4e00\u5957\u6a21\u677f\uff0c\u5e76\u4e14\u8fd8\u5229\u7528SpringBoot\u5bf9\u5176\u5b9e\u73b0\u4e86\u81ea\u52a8\u88c5\u914d\uff0c\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u65b9\u4fbf\u3002",source:"@site/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/04-SpringAMQP-Base Queue.md",sourceDirName:"MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ",slug:"/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-Base Queue",permalink:"/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-Base Queue",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/04-SpringAMQP-Base Queue.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ\u5165\u95e8",permalink:"/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/RabbitMQ\u5165\u95e8"},next:{title:"WorkQueue",permalink:"/zh-Hans/docs/MQ(\u6d88\u606f\u4e2d\u95f4\u4ef6)/RabbitMQ/SpringAMQP-WorkQueue"}},o={},u=[{value:"\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u4f9d\u8d56",id:"\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u6d88\u606f\u53d1\u9001",id:"\u6d88\u606f\u53d1\u9001",level:2},{value:"\u914d\u7f6eMQ\u5730\u5740\uff08publisher\uff09",id:"\u914d\u7f6emq\u5730\u5740publisher",level:3},{value:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"\u6d88\u606f\u63a5\u6536",id:"\u6d88\u606f\u63a5\u6536",level:2},{value:"\u914d\u7f6eMQ\u5730\u5740\uff08consumer\uff09",id:"\u914d\u7f6emq\u5730\u5740consumer",level:3},{value:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801",id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801-1",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"springamqp"},"SpringAMQP"),(0,a.kt)("p",null,"SpringAMQP\u662f\u57fa\u4e8eRabbitMQ\u5c01\u88c5\u7684\u4e00\u5957\u6a21\u677f\uff0c\u5e76\u4e14\u8fd8\u5229\u7528SpringBoot\u5bf9\u5176\u5b9e\u73b0\u4e86\u81ea\u52a8\u88c5\u914d\uff0c\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"SpringAmqp\u7684\u5b98\u65b9\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-amqp"},"https://spring.io/projects/spring-amqp")),(0,a.kt)("p",null,"SpringAMQP\u63d0\u4f9b\u4e86\u4e09\u4e2a\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u58f0\u660e\u961f\u5217\u3001\u4ea4\u6362\u673a\u53ca\u5176\u7ed1\u5b9a\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6ce8\u89e3\u7684\u76d1\u542c\u5668\u6a21\u5f0f\uff0c\u5f02\u6b65\u63a5\u6536\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u4e86RabbitTemplate\u5de5\u5177\uff0c\u7528\u4e8e\u53d1\u9001\u6d88\u606f ")),(0,a.kt)("h1",{id:"basic-queue-\u7b80\u5355\u961f\u5217\u6a21\u578b"},"Basic Queue \u7b80\u5355\u961f\u5217\u6a21\u578b"),(0,a.kt)("h2",{id:"\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u4f9d\u8d56"},"\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--AMQP\u4f9d\u8d56\uff0c\u5305\u542bRabbitMQ--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-amqp</artifactId>\n</dependency>\n\x3c!--\u5355\u5143\u6d4b\u8bd5--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n</dependency>\n")),(0,a.kt)("h2",{id:"\u6d88\u606f\u53d1\u9001"},"\u6d88\u606f\u53d1\u9001"),(0,a.kt)("h3",{id:"\u914d\u7f6emq\u5730\u5740publisher"},"\u914d\u7f6eMQ\u5730\u5740\uff08publisher\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  rabbitmq:\n    host: 192.168.116.131 # rabbitMQ\u7684ip\u5730\u5740\n    port: 5672 # \u7aef\u53e3\n    username: blackme   # \u7528\u6237\u540d\n    password: 123456 # \u5bc6\u7801\n    virtual-host: / #\u865a\u62df\u4e3b\u673a\n")),(0,a.kt)("h3",{id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"},"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("p",null,"\u5229\u7528RabbitTemplate\u5b9e\u73b0\u6d88\u606f\u53d1\u9001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class SpringAmqpTest {\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n    @Test\n    public void testSimpleQueue() {\n        //\u961f\u5217\u540d\u79f0\n        String queueName = "simple.queue";\n        //\u6d88\u606f\u5185\u5bb9\n        String message = "hello, spring amqp!";\n        //\u53d1\u9001\u6d88\u606f\n        rabbitTemplate.convertAndSend(queueName, message);\n    }\n}\n')),(0,a.kt)("h2",{id:"\u6d88\u606f\u63a5\u6536"},"\u6d88\u606f\u63a5\u6536"),(0,a.kt)("h3",{id:"\u914d\u7f6emq\u5730\u5740consumer"},"\u914d\u7f6eMQ\u5730\u5740\uff08consumer\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  rabbitmq:\n    host: 192.168.116.131 # rabbitMQ\u7684ip\u5730\u5740\n    port: 5672 # \u7aef\u53e3\n    username: blackme   # \u7528\u6237\u540d\n    password: 123456 # \u5bc6\u7801\n    virtual-host: / #\u865a\u62df\u4e3b\u673a\n")),(0,a.kt)("h3",{id:"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801-1"},"\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728consumer\u670d\u52a1\u7684\u5305\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7bSpringRabbitListener\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n@Component\npublic class SpringRabbitListener {\n\n    @RabbitListener(queues = "simple.queue")\n    public void listenSimpleQueueMessage(String msg) throws InterruptedException {\n        System.out.println("spring \u6d88\u8d39\u8005\u63a5\u6536\u5230\u6d88\u606f\uff1a\u3010" + msg + "\u3011");\n    }\n}\n')),(0,a.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u542f\u52a8consumer\u670d\u52a1\uff0c\u7136\u540e\u5728publisher\u670d\u52a1\u4e2d\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801\uff0c\u53d1\u9001MQ\u6d88\u606f"))}c.isMDXComponent=!0}}]);