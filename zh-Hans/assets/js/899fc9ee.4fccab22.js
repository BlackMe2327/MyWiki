"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[5794],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>k});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),k=o,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||a;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9561:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={},l="Docker-Compose",p={unversionedId:"Docker/Docker-Compose",id:"Docker/Docker-Compose",title:"Docker-Compose",description:"Docker Compose\u53ef\u4ee5\u57fa\u4e8eCompose\u6587\u4ef6\u5e2e\u6211\u4eec\u5feb\u901f\u7684\u90e8\u7f72\u5206\u5e03\u5f0f\u5e94\u7528\uff0c\u800c\u65e0\u9700\u624b\u52a8\u4e00\u4e2a\u4e2a\u521b\u5efa\u548c\u8fd0\u884c\u5bb9\u5668\uff01",source:"@site/docs/Docker/05-Docker-Compose.md",sourceDirName:"Docker",slug:"/Docker/Docker-Compose",permalink:"/zh-Hans/docs/Docker/Docker-Compose",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/05-Docker-Compose.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dcokerfile\u81ea\u5b9a\u4e49\u955c\u50cf",permalink:"/zh-Hans/docs/Docker/Dockerfile\u81ea\u5b9a\u4e49\u955c\u50cf"},next:{title:"Docker\u955c\u50cf\u4ed3\u5e93",permalink:"/zh-Hans/docs/Docker/Docker\u955c\u50cf\u4ed3\u5e93"}},i={},c=[{value:"\u521d\u59cbDockerCompose",id:"\u521d\u59cbdockercompose",level:2},{value:"\u5b89\u88c5DockerCompose",id:"\u5b89\u88c5dockercompose",level:2},{value:"\u90e8\u7f72\u5fae\u670d\u52a1\u96c6\u7fa4",id:"\u90e8\u7f72\u5fae\u670d\u52a1\u96c6\u7fa4",level:2},{value:"compose\u6587\u4ef6",id:"compose\u6587\u4ef6",level:3},{value:"\u4fee\u6539\u5fae\u670d\u52a1\u914d\u7f6e",id:"\u4fee\u6539\u5fae\u670d\u52a1\u914d\u7f6e",level:3},{value:"\u6253\u5305",id:"\u6253\u5305",level:3},{value:".\u62f7\u8d1djar\u5305\u5230\u90e8\u7f72\u76ee\u5f55",id:"\u62f7\u8d1djar\u5305\u5230\u90e8\u7f72\u76ee\u5f55",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3}],s={toc:c};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-compose"},"Docker-Compose"),(0,o.kt)("p",null,"Docker Compose\u53ef\u4ee5\u57fa\u4e8eCompose\u6587\u4ef6\u5e2e\u6211\u4eec\u5feb\u901f\u7684\u90e8\u7f72\u5206\u5e03\u5f0f\u5e94\u7528\uff0c\u800c\u65e0\u9700\u624b\u52a8\u4e00\u4e2a\u4e2a\u521b\u5efa\u548c\u8fd0\u884c\u5bb9\u5668\uff01"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/20047be4b3e225576cdc194382ccb63d.jpeg?raw=true",alt:"20047be4b3e225576cdc194382ccb63d"})),(0,o.kt)("h2",{id:"\u521d\u59cbdockercompose"},"\u521d\u59cbDockerCompose"),(0,o.kt)("p",null,"Compose\u6587\u4ef6\u662f\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u901a\u8fc7\u6307\u4ee4\u5b9a\u4e49\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u5bb9\u5668\u5982\u4f55\u8fd0\u884c\u3002\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'version:\xa0"3.8"\n services:\n\xa0\xa0mysql:\n\xa0\xa0\xa0\xa0image:\xa0mysql:5.7.25\n    environment:\n     MYSQL_ROOT_PASSWORD: 123 \n\xa0\xa0\xa0\xa0volumes:\n\xa0\xa0\xa0\xa0\xa0-\xa0"/tmp/mysql/data:/var/lib/mysql"\n\xa0\xa0\xa0\xa0\xa0-\xa0"/tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf"\n\xa0\xa0web:\n\xa0\xa0\xa0\xa0build:\xa0.\n\xa0\xa0\xa0\xa0ports:\n\xa0\xa0\xa0\xa0\xa0- "8090:8090"\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684Compose\u6587\u4ef6\u5c31\u63cf\u8ff0\u4e00\u4e2a\u9879\u76ee\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2a\u5bb9\u5668\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mysql\uff1a\u4e00\u4e2a\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"mysql:5.7.25"),"\u955c\u50cf\u6784\u5efa\u7684\u5bb9\u5668\uff0c\u5e76\u4e14\u6302\u8f7d\u4e86\u4e24\u4e2a\u76ee\u5f55"),(0,o.kt)("li",{parentName:"ul"},"web\uff1a\u4e00\u4e2a\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"docker build"),"\u4e34\u65f6\u6784\u5efa\u7684\u955c\u50cf\u5bb9\u5668\uff0c\u6620\u5c04\u7aef\u53e3\u65f68090")),(0,o.kt)("p",null,"DockerCompose\u7684\u8be6\u7ec6\u8bed\u6cd5\u53c2\u8003\u5b98\u7f51\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/"},"https://docs.docker.com/compose/compose-file/")),(0,o.kt)("p",null,"\u5176\u5b9eDockerCompose\u6587\u4ef6\u53ef\u4ee5\u770b\u505a\u662f\u5c06\u591a\u4e2adocker run\u547d\u4ee4\u5199\u5230\u4e00\u4e2a\u6587\u4ef6\uff0c\u53ea\u662f\u8bed\u6cd5\u7a0d\u6709\u5dee\u5f02\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5dockercompose"},"\u5b89\u88c5DockerCompose"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_41167306/article/details/122842916"},"https://blog.csdn.net/qq_41167306/article/details/122842916")),(0,o.kt)("h2",{id:"\u90e8\u7f72\u5fae\u670d\u52a1\u96c6\u7fa4"},"\u90e8\u7f72\u5fae\u670d\u52a1\u96c6\u7fa4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u601d\u8def"),"\uff1a"),(0,o.kt)("p",null,"1.\u4fee\u6539\u81ea\u5df1\u7684\u9879\u76ee\uff0c\u5c06\u6570\u636e\u5e93\u3001nacos\u5730\u5740\u90fd\u547d\u540d\u4e3adocker-compose\u4e2d\u7684\u670d\u52a1\u540d"),(0,o.kt)("p",null,"2.\u4f7f\u7528maven\u6253\u5305\u5de5\u5177\uff0c\u5c06\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u6253\u5305\u4e3aapp.jar"),(0,o.kt)("p",null,"3.\u5c06\u6253\u5305\u597d\u7684app.jar\u62f7\u8d1d\u5230\u9879\u76ee\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5bf9\u5e94\u7684\u5b50\u76ee\u5f55\u4e2d"),(0,o.kt)("p",null,"4.\u5c06\u9879\u76ee\u4e0a\u4f20\u81f3\u865a\u62df\u673a\uff0c\u5229\u7528 docker-compose up -d \u6765\u90e8\u7f72"),(0,o.kt)("h3",{id:"compose\u6587\u4ef6"},"compose\u6587\u4ef6"),(0,o.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.2"\n\nservices:\n  nacos:\n    image: nacos/nacos-server\n    environment:\n      MODE: standalone\n    ports:\n      - "8848:8848"\n  mysql:\n    image: mysql:5.7.25\n    environment:\n      MYSQL_ROOT_PASSWORD: 123\n    volumes:\n      - "$PWD/mysql/data:/var/lib/mysql"\n      - "$PWD/mysql/conf:/etc/mysql/conf.d/"\n  userservice:\n    build: ./user-service\n  orderservice:\n    build: ./order-service\n  gateway:\n    build: ./gateway\n    ports:\n      - "10010:10010"\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5176\u4e2d\u5305\u542b5\u4e2aservice\u670d\u52a1\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nacos"),"\uff1a\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image: nacos/nacos-server"),"\uff1a \u57fa\u4e8enacos/nacos-server\u955c\u50cf\u6784\u5efa"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment"),"\uff1a\u73af\u5883\u53d8\u91cf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MODE: standalone"),"\uff1a\u5355\u70b9\u6a21\u5f0f\u542f\u52a8"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ports"),"\uff1a\u7aef\u53e3\u6620\u5c04\uff0c\u8fd9\u91cc\u66b4\u9732\u4e868848\u7aef\u53e3"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mysql"),"\uff1a\u6570\u636e\u5e93",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image: mysql:5.7.25"),"\uff1a\u955c\u50cf\u7248\u672c\u662fmysql:5.7.25"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment"),"\uff1a\u73af\u5883\u53d8\u91cf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MYSQL_ROOT_PASSWORD: 123"),"\uff1a\u8bbe\u7f6e\u6570\u636e\u5e93root\u8d26\u6237\u7684\u5bc6\u7801\u4e3a123"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volumes"),"\uff1a\u6570\u636e\u5377\u6302\u8f7d\uff0c\u8fd9\u91cc\u6302\u8f7d\u4e86mysql\u7684data\u3001conf\u76ee\u5f55\uff0c\u5176\u4e2d\u6709\u6211\u63d0\u524d\u51c6\u5907\u597d\u7684\u6570\u636e"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userservice"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"orderservice"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"gateway"),"\uff1a\u90fd\u662f\u57fa\u4e8eDockerfile\u4e34\u65f6\u6784\u5efa\u7684")),(0,o.kt)("p",null,"\u67e5\u770b\u6bcf\u4e2a\u5fae\u670d\u52a1\u76ee\u5f55\u4e0b\u90fd\u5305\u542bDockerfile\u6587\u4ef6"),(0,o.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM java:8-alpine\nCOPY ./app.jar /tmp/app.jar\nENTRYPOINT java -jar /tmp/app.jar\n")),(0,o.kt)("h3",{id:"\u4fee\u6539\u5fae\u670d\u52a1\u914d\u7f6e"},"\u4fee\u6539\u5fae\u670d\u52a1\u914d\u7f6e"),(0,o.kt)("p",null,"\u56e0\u4e3a\u5fae\u670d\u52a1\u5c06\u6765\u8981\u90e8\u7f72\u4e3adocker\u5bb9\u5668\uff0c\u800c\u5bb9\u5668\u4e4b\u95f4\u4e92\u8054\u4e0d\u662f\u901a\u8fc7IP\u5730\u5740\uff0c\u800c\u662f\u901a\u8fc7\u5bb9\u5668\u540d\u3002\u8fd9\u91cc\u6211\u4eec\u5c06\u670d\u52a1\u7684mysql\u3001nacos\u5730\u5740\u90fd\u4fee\u6539\u4e3a\u57fa\u4e8e\u5bb9\u5668\u540d\u7684\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    url: jdbc:mysql://mysql:3306/cloud_order?useSSL=false\n    username: root\n    password: 123\n    driver-class-name: com.mysql.jdbc.Driver\n  application:\n    name: orderservice\n  cloud:\n    nacos:\n      server-addr: nacos:8848 # nacos\u670d\u52a1\u5730\u5740\n")),(0,o.kt)("h3",{id:"\u6253\u5305"},"\u6253\u5305"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u5c06\u6211\u4eec\u7684\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u6253\u5305\u3002\u56e0\u4e3a\u4e4b\u524d\u67e5\u770b\u5230Dockerfile\u4e2d\u7684jar\u5305\u540d\u79f0\u90fd\u662fapp.jar\uff0c\u56e0\u6b64\u6211\u4eec\u7684\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u9700\u8981\u7528\u8fd9\u4e2a\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539pom.xml\u4e2d\u7684\u6253\u5305\u540d\u79f0\u6765\u5b9e\u73b0\uff0c\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u9700\u8981\u4fee\u6539\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n  \x3c!-- \u670d\u52a1\u6253\u5305\u7684\u6700\u7ec8\u540d\u79f0 --\x3e\n  <finalName>app</finalName>\n  <plugins>\n    <plugin>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-maven-plugin</artifactId>\n    </plugin>\n  </plugins>\n</build>\n")),(0,o.kt)("h3",{id:"\u62f7\u8d1djar\u5305\u5230\u90e8\u7f72\u76ee\u5f55"},".\u62f7\u8d1djar\u5305\u5230\u90e8\u7f72\u76ee\u5f55"),(0,o.kt)("p",null,"\u7f16\u8bd1\u6253\u5305\u597d\u7684app.jar\u6587\u4ef6\uff0c\u9700\u8981\u653e\u5230Dockerfile\u7684\u540c\u7ea7\u76ee\u5f55\u4e2d\u3002\u6ce8\u610f\uff1a\u6bcf\u4e2a\u5fae\u670d\u52a1\u7684app.jar\u653e\u5230\u4e0e\u670d\u52a1\u540d\u79f0\u5bf9\u5e94\u7684\u76ee\u5f55\uff0c\u522b\u641e\u9519\u4e86\u3002"),(0,o.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c06\u6587\u4ef6\u6574\u4e2acloud-demo\u6587\u4ef6\u5939\u4e0a\u4f20\u5230\u865a\u62df\u673a\u4e2d\uff0c\u7528DockerCompose\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"1.\u4e0a\u4f20\u5230\u4efb\u610f\u76ee\u5f55"),(0,o.kt)("p",null,"2.\u8fdb\u5165\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")))}m.isMDXComponent=!0}}]);