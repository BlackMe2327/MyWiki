"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[7177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},l="RestTemplate\u65b9\u5f0f\u8c03\u7528\u5b58\u5728\u7684\u95ee\u9898",p={unversionedId:"Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/Feign\u66ff\u4ee3RestTemplate",id:"Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/Feign\u66ff\u4ee3RestTemplate",title:"RestTemplate\u65b9\u5f0f\u8c03\u7528\u5b58\u5728\u7684\u95ee\u9898",description:"\u5148\u6765\u770b\u6211\u4eec\u4ee5\u524d\u5229\u7528RestTemplate\u53d1\u8d77\u8fdc\u7a0b\u8c03\u7528\u7684\u4ee3\u7801\uff1a",source:"@site/docs/Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/01-Feign\u66ff\u4ee3RestTemplate.md",sourceDirName:"Spring Cloud/Feign(http\u5ba2\u6237\u7aef)",slug:"/Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/Feign\u66ff\u4ee3RestTemplate",permalink:"/zh-Hans/docs/Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/Feign\u66ff\u4ee3RestTemplate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/01-Feign\u66ff\u4ee3RestTemplate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feign(Http\u5ba2\u6237\u7aef)",permalink:"/zh-Hans/docs/category/feignhttp\u5ba2\u6237\u7aef"},next:{title:"\u81ea\u5b9a\u4e49Feign\u914d\u7f6e",permalink:"/zh-Hans/docs/Spring Cloud/Feign(http\u5ba2\u6237\u7aef)/Feign\u81ea\u5b9a\u4e49\u914d\u7f6e"}},o={},s=[{value:"\u5f15\u5165\u4f9d\u8d56",id:"\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u5728\u670d\u52a1\u7684\u542f\u52a8\u7c7b\u4e2d\u6dfb\u52a0\u6ce8\u89e3@EnableFeignClients\u5f00\u542fFeign\u7684\u529f\u80fd",id:"\u5728\u670d\u52a1\u7684\u542f\u52a8\u7c7b\u4e2d\u6dfb\u52a0\u6ce8\u89e3enablefeignclients\u5f00\u542ffeign\u7684\u529f\u80fd",level:2},{value:"\u7f16\u5199Feign\u5ba2\u6237\u7aef",id:"\u7f16\u5199feign\u5ba2\u6237\u7aef",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resttemplate\u65b9\u5f0f\u8c03\u7528\u5b58\u5728\u7684\u95ee\u9898"},"RestTemplate\u65b9\u5f0f\u8c03\u7528\u5b58\u5728\u7684\u95ee\u9898"),(0,i.kt)("p",null,"\u5148\u6765\u770b\u6211\u4eec\u4ee5\u524d\u5229\u7528RestTemplate\u53d1\u8d77\u8fdc\u7a0b\u8c03\u7528\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String url = "http://userservice/user/" + order.getUserId();\nUser user = restTemplate.getForObject(url, User.class);\n')),(0,i.kt)("p",null,"\u5b58\u5728\u4e0b\u9762\u7684\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u53ef\u8bfb\u6027\u5dee\uff0c\u7f16\u7a0b\u4f53\u9a8c\u4e0d\u7edf\u4e00"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\u590d\u6742URL\u96be\u4ee5\u7ef4\u62a4")),(0,i.kt)("h1",{id:"feign\u7684\u4ecb\u7ecd"},"Feign\u7684\u4ecb\u7ecd"),(0,i.kt)("p",null,"Feign\u662f\u4e00\u4e2a\u58f0\u660e\u5f0f\u7684http\u5ba2\u6237\u7aef\uff0c\u5b98\u65b9\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFeign/feign"},"https://github.com/OpenFeign/feign")),(0,i.kt)("p",null,"\u5176\u4f5c\u7528\u5c31\u662f\u5e2e\u52a9\u6211\u4eec\u4f18\u96c5\u7684\u5b9e\u73b0http\u8bf7\u6c42\u7684\u53d1\u9001\uff0c\u89e3\u51b3\u4e0a\u9762\u63d0\u5230\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220205150547661.png?raw=true",alt:"image-20220205150547661"})),(0,i.kt)("h1",{id:"\u5b9a\u4e49\u548c\u4f7f\u7528feign\u5ba2\u6237\u7aef"},"\u5b9a\u4e49\u548c\u4f7f\u7528Feign\u5ba2\u6237\u7aef"),(0,i.kt)("h2",{id:"\u5f15\u5165\u4f9d\u8d56"},"\u5f15\u5165\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId> \n</dependency>\n")),(0,i.kt)("h2",{id:"\u5728\u670d\u52a1\u7684\u542f\u52a8\u7c7b\u4e2d\u6dfb\u52a0\u6ce8\u89e3enablefeignclients\u5f00\u542ffeign\u7684\u529f\u80fd"},"\u5728\u670d\u52a1\u7684\u542f\u52a8\u7c7b\u4e2d\u6dfb\u52a0\u6ce8\u89e3@EnableFeignClients\u5f00\u542fFeign\u7684\u529f\u80fd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@EnableFeignClients //\u5f00\u542fFeign\n@MapperScan("cn.bttc.order.mapper")\n@SpringBootApplication\npublic class OrderApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderApplication.class, args);\n    }\n}\n')),(0,i.kt)("h2",{id:"\u7f16\u5199feign\u5ba2\u6237\u7aef"},"\u7f16\u5199Feign\u5ba2\u6237\u7aef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@FeignClient("userservice")\npublic interface UserClient {\n    @GetMapping("/user/{id}")\n    User findById(@PathVariable("id") Long id);\n}\n')),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u57fa\u4e8eSpringMVC\u7684\u6ce8\u89e3\u6765\u58f0\u660e\u8fdc\u7a0b\u8c03\u7528\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u540d\u79f0\uff1auserservice"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u5f0f\uff1aGET"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8def\u5f84\uff1a/user/{id}"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u53c2\u6570\uff1aLong id"),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u7c7b\u578b\uff1aUser")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class OrderService {\n\n    @Autowired\n    private OrderMapper orderMapper;\n\n    @Autowired\n    private UserClient userClient;\n    \n    public Order queryOrderById(Long orderId) {\n        Order order = orderMapper.findById(orderId);\n        User user=userClient.findById(order.getUserId());\n        order.setUser(user);\n        return order;\n    }\n}\n")))}c.isMDXComponent=!0}}]);