"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[1717],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>g});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=n.createContext({}),u=function(e){var r=n.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),g=t,d=m["".concat(p,".").concat(g)]||m[g]||s[g]||i;return a?n.createElement(d,l(l({ref:r},c),{},{components:a})):n.createElement(d,l({ref:r},c))}));function g(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8585:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),t=(a(7294),a(3905));const i={},l="Eureka\u6ce8\u518c\u4e2d\u5fc3\u642d\u5efa",o={unversionedId:"Spring Cloud/Eureka/Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0",id:"Spring Cloud/Eureka/Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0",title:"Eureka\u6ce8\u518c\u4e2d\u5fc3\u642d\u5efa",description:"\u521b\u5efa\u9879\u76ee\uff0c\u5f15\u5165\u4f9d\u8d56",source:"@site/docs/Spring Cloud/Eureka/02-Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0.md",sourceDirName:"Spring Cloud/Eureka",slug:"/Spring Cloud/Eureka/Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0",permalink:"/MyWiki/zh-Hans/docs/Spring Cloud/Eureka/Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring Cloud/Eureka/02-Eureka\u642d\u5efa\u3001\u670d\u52a1\u6ce8\u518c\u3001\u670d\u52a1\u53d1\u73b0.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d0\u4f9b\u8005\u548c\u6d88\u8d39\u8005",permalink:"/MyWiki/zh-Hans/docs/Spring Cloud/Eureka/Eureka\u57fa\u7840"},next:{title:"Ribbon(\u8d1f\u8f7d\u5747\u8861)",permalink:"/MyWiki/zh-Hans/docs/category/ribbon\u8d1f\u8f7d\u5747\u8861"}},p={},u=[{value:"\u521b\u5efa\u9879\u76ee\uff0c\u5f15\u5165\u4f9d\u8d56",id:"\u521b\u5efa\u9879\u76ee\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u7f16\u5199\u542f\u52a8\u7c7b\uff0c\u6dfb\u52a0@EnableEurekaServer\u6ce8\u89e3",id:"\u7f16\u5199\u542f\u52a8\u7c7b\u6dfb\u52a0enableeurekaserver\u6ce8\u89e3",level:2},{value:"\u6dfb\u52a0application.yml\u6587\u4ef6\uff0c\u7f16\u5199\u4e0b\u9762\u7684\u914d\u7f6e\uff1a",id:"\u6dfb\u52a0applicationyml\u6587\u4ef6\u7f16\u5199\u4e0b\u9762\u7684\u914d\u7f6e",level:2},{value:"\u542f\u52a8Eureka\u670d\u52a1\u67e5\u770b\u6ce8\u518c\u5230Eureka\u7684\u5b9e\u4f8b",id:"\u542f\u52a8eureka\u670d\u52a1\u67e5\u770b\u6ce8\u518c\u5230eureka\u7684\u5b9e\u4f8b",level:2},{value:"\u5728\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u4e2d\u5f15\u5165\u4f9d\u8d56",id:"\u5728\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u4e2d\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u542f\u52a8\u670d\u52a1\u3001\u67e5\u770b\u662f\u5426\u6ce8\u518c\u6210\u529f",id:"\u542f\u52a8\u670d\u52a1\u67e5\u770b\u662f\u5426\u6ce8\u518c\u6210\u529f",level:2},{value:"idea\u4e2d\u6a21\u62df\u4e00\u4e2a\u670d\u52a1\u591a\u5b9e\u4f8b\u90e8\u7f72",id:"idea\u4e2d\u6a21\u62df\u4e00\u4e2a\u670d\u52a1\u591a\u5b9e\u4f8b\u90e8\u7f72",level:2},{value:"\u4fee\u6539\u670d\u52a1\u6d88\u8d39\u8005\u7684\u4ee3\u7801\uff0c\u4fee\u6539\u8bbf\u95ee\u7684url\u8def\u5f84\uff0c\u7528\u670d\u52a1\u540d\u4ee3\u66ffip\u3001\u7aef\u53e3",id:"\u4fee\u6539\u670d\u52a1\u6d88\u8d39\u8005\u7684\u4ee3\u7801\u4fee\u6539\u8bbf\u95ee\u7684url\u8def\u5f84\u7528\u670d\u52a1\u540d\u4ee3\u66ffip\u7aef\u53e3",level:2},{value:"\u5728\u670d\u52a1\u6d88\u8d39\u8005\u7684\u542f\u52a8\u7c7b\u4e2d\u7684RestTemplate\u6dfb\u52a0<strong>\u8d1f\u8f7d\u5747\u8861</strong>\u6ce8\u89e3@LoadBalanced",id:"\u5728\u670d\u52a1\u6d88\u8d39\u8005\u7684\u542f\u52a8\u7c7b\u4e2d\u7684resttemplate\u6dfb\u52a0\u8d1f\u8f7d\u5747\u8861\u6ce8\u89e3loadbalanced",level:2}],c={toc:u};function s(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"eureka\u6ce8\u518c\u4e2d\u5fc3\u642d\u5efa"},"Eureka\u6ce8\u518c\u4e2d\u5fc3\u642d\u5efa"),(0,t.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee\u5f15\u5165\u4f9d\u8d56"},"\u521b\u5efa\u9879\u76ee\uff0c\u5f15\u5165\u4f9d\u8d56"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n</dependency>\n")),(0,t.kt)("h2",{id:"\u7f16\u5199\u542f\u52a8\u7c7b\u6dfb\u52a0enableeurekaserver\u6ce8\u89e3"},"\u7f16\u5199\u542f\u52a8\u7c7b\uff0c\u6dfb\u52a0@EnableEurekaServer\u6ce8\u89e3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"package cn.bttc.eureka;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;\n\n@EnableEurekaServer\n@SpringBootApplication\npublic class EurekaApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaApplication.class, args);\n    }\n}\n\n")),(0,t.kt)("h2",{id:"\u6dfb\u52a0applicationyml\u6587\u4ef6\u7f16\u5199\u4e0b\u9762\u7684\u914d\u7f6e"},"\u6dfb\u52a0application.yml\u6587\u4ef6\uff0c\u7f16\u5199\u4e0b\u9762\u7684\u914d\u7f6e\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 10086 # \u670d\u52a1\u7aef\u7aef\u53e3\nspring:\n  application:\n    name: eurekaserver  # eureka\u7684\u670d\u52a1\u540d\u79f0\neureka:\n  client:\n    service-url:  # eureka\u7684\u5730\u5740\u4fe1\u606f\n      defaultZone: http://127.0.0.1:10086/eureka\n")),(0,t.kt)("h2",{id:"\u542f\u52a8eureka\u670d\u52a1\u67e5\u770b\u6ce8\u518c\u5230eureka\u7684\u5b9e\u4f8b"},"\u542f\u52a8Eureka\u670d\u52a1\u67e5\u770b\u6ce8\u518c\u5230Eureka\u7684\u5b9e\u4f8b"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220129180206745.png?raw=true",alt:"image-20220129180206745"})),(0,t.kt)("h1",{id:"eureka\u7684\u670d\u52a1\u6ce8\u518c"},"Eureka\u7684\u670d\u52a1\u6ce8\u518c"),(0,t.kt)("h2",{id:"\u5728\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u4e2d\u5f15\u5165\u4f9d\u8d56"},"\u5728\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u4e2d\u5f15\u5165\u4f9d\u8d56"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n     <groupId>org.springframework.cloud</groupId>\n     <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n </dependency>\n")),(0,t.kt)("h2",{id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  application:\n    name: userservice\neureka:\n  client:\n    service-url:\n      defaultZone: http://127.0.0.1:10086/eureka/\n")),(0,t.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u67e5\u770b\u662f\u5426\u6ce8\u518c\u6210\u529f"},"\u542f\u52a8\u670d\u52a1\u3001\u67e5\u770b\u662f\u5426\u6ce8\u518c\u6210\u529f"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220129181159833.png?raw=true",alt:"image-20220129181159833"})),(0,t.kt)("h2",{id:"idea\u4e2d\u6a21\u62df\u4e00\u4e2a\u670d\u52a1\u591a\u5b9e\u4f8b\u90e8\u7f72"},"idea\u4e2d\u6a21\u62df\u4e00\u4e2a\u670d\u52a1\u591a\u5b9e\u4f8b\u90e8\u7f72"),(0,t.kt)("p",null,"1.\u4e3a\u4e86\u907f\u514d\u7aef\u53e3\u51b2\u7a81\uff0c\u9700\u8981\u66f4\u6539\u7aef\u53e3\u8bbe\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130174659607.png?raw=true",alt:"image-20220130174659607"})),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130174845251.png?raw=true",alt:"image-20220130174845251"})),(0,t.kt)("p",null,"2.\u9a8c\u8bc1\u591a\u5b9e\u4f8b\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130175014520.png?raw=true",alt:"image-20220130175014520"})),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130175031818.png?raw=true",alt:"image-20220130175031818"})),(0,t.kt)("h1",{id:"eureka\u670d\u52a1\u53d1\u73b0\u548c\u62c9\u53d6"},"Eureka\u670d\u52a1\u53d1\u73b0\u548c\u62c9\u53d6"),(0,t.kt)("p",null,"\u670d\u52a1\u62c9\u53d6\u662f\u57fa\u4e8e\u670d\u52a1\u540d\u79f0\u83b7\u53d6\u670d\u52a1\u5217\u8868\uff0c\u7136\u540e\u5728\u5bf9\u670d\u52a1\u5217\u8868\u505a\u8d1f\u8f7d\u5747\u8861"),(0,t.kt)("h2",{id:"\u4fee\u6539\u670d\u52a1\u6d88\u8d39\u8005\u7684\u4ee3\u7801\u4fee\u6539\u8bbf\u95ee\u7684url\u8def\u5f84\u7528\u670d\u52a1\u540d\u4ee3\u66ffip\u7aef\u53e3"},"\u4fee\u6539\u670d\u52a1\u6d88\u8d39\u8005\u7684\u4ee3\u7801\uff0c\u4fee\u6539\u8bbf\u95ee\u7684url\u8def\u5f84\uff0c\u7528\u670d\u52a1\u540d\u4ee3\u66ffip\u3001\u7aef\u53e3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'String url = "http://userservice/user/" + order.getUserId();\n')),(0,t.kt)("h2",{id:"\u5728\u670d\u52a1\u6d88\u8d39\u8005\u7684\u542f\u52a8\u7c7b\u4e2d\u7684resttemplate\u6dfb\u52a0\u8d1f\u8f7d\u5747\u8861\u6ce8\u89e3loadbalanced"},"\u5728\u670d\u52a1\u6d88\u8d39\u8005\u7684\u542f\u52a8\u7c7b\u4e2d\u7684RestTemplate\u6dfb\u52a0",(0,t.kt)("strong",{parentName:"h2"},"\u8d1f\u8f7d\u5747\u8861"),"\u6ce8\u89e3@LoadBalanced"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'package cn.bttc.order;\n\nimport org.mybatis.spring.annotation.MapperScan;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.loadbalancer.LoadBalanced;\nimport org.springframework.cloud.netflix.eureka.EnableEurekaClient;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.client.RestTemplate;\n\n@MapperScan("cn.bttc.order.mapper")\n@SpringBootApplication\npublic class OrderApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(OrderApplication.class, args);\n    }\n\n    /*\n     * @Author chenbo6\n     **/\n    @Bean\n    @LoadBalanced\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n')))}s.isMDXComponent=!0}}]);