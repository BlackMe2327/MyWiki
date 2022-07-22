"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[2921],{3905:(n,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>w});var r=a(7294);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},o=Object.keys(n);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var p=r.createContext({}),c=function(n){var e=r.useContext(p),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},m=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,p=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),g=c(a),w=t,u=g["".concat(p,".").concat(w)]||g[w]||l[w]||o;return a?r.createElement(u,s(s({ref:e},m),{},{components:a})):r.createElement(u,s({ref:e},m))}));function w(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:t,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3934:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),t=(a(7294),a(3905));const o={},s=void 0,i={unversionedId:"Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1",id:"Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1",title:"Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1",description:"[toc]",source:"@site/docs/Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1.md",sourceDirName:"Spring",slug:"/Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1",permalink:"/MyWiki/zh-Hans/docs/Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring/Spring\u548cJDBC\u5b9e\u73b0\u4e8b\u52a1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring \u6570\u636e\u8bbf\u95ee",permalink:"/MyWiki/zh-Hans/docs/Spring/Spring \u6570\u636e\u8bbf\u95ee"},next:{title:"Spring\u57fa\u7840\u77e5\u8bc6",permalink:"/MyWiki/zh-Hans/docs/Spring/Spring\u57fa\u7840\u77e5\u8bc6"}},p={},c=[{value:"1.1\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u533a\u522b",id:"11\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u533a\u522b",level:2},{value:"1.2\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u5b9e\u73b0",id:"12\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u5b9e\u73b0",level:2},{value:"1.2.1\u4f7f\u7528TransactionTemplate",id:"121\u4f7f\u7528transactiontemplate",level:3},{value:"1.2.2\u4f7f\u7528PlatformTransactionManager",id:"122\u4f7f\u7528platformtransactionmanager",level:3},{value:"1.3\u58f0\u660e\u5f0f\u4e8b\u52a1\u5b9e\u73b0",id:"13\u58f0\u660e\u5f0f\u4e8b\u52a1\u5b9e\u73b0",level:2},{value:"1.3.1\u914d\u7f6e\u65b9\u5f0f",id:"131\u914d\u7f6e\u65b9\u5f0f",level:3}],m={toc:c};function l(n){let{components:e,...a}=n;return(0,t.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"[toc]"),(0,t.kt)("h1",{id:"1spring\u5982\u4f55\u5b9e\u73b0\u4e8b\u52a1"},"1.Spring\u5982\u4f55\u5b9e\u73b0\u4e8b\u52a1"),(0,t.kt)("p",null,"Spring \u4e8b\u52a1\u56db\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff1a"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u7ba1\u7406\u5b9e\u73b0"),(0,t.kt)("li",{parentName:"ol"},"\u57fa\u4e8eTransactionProxyFactoryBean\u7684\u58f0\u660e\u5f0f\u4e8b\u52a1\u7ba1\u7406"),(0,t.kt)("li",{parentName:"ol"},"\u57fa\u4e8eAspectJ\u7684XML\u58f0\u660e\u5f0f\u4e8b\u52a1\u7ba1\u7406"),(0,t.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6ce8\u89e3\u7684\u58f0\u660e\u5f0f\u4e8b\u52a1\u7ba1\u7406")),(0,t.kt)("h2",{id:"11\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u533a\u522b"},"1.1\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u533a\u522b"),(0,t.kt)("p",null,"Spring\u63d0\u4f9b\u4e86\u5bf9\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u652f\u6301\uff0c\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u5141\u8bb8\u7528\u6237\u5728\u4ee3\u7801\u4e2d\u7cbe\u786e\u5b9a\u4e49\u4e8b\u52a1\u7684\u8fb9\u754c\uff0c\u800c\u58f0\u660e\u5f0f\u4e8b\u52a1\uff08\u57fa\u4e8eAOP\uff09\u6709\u52a9\u4e8e\u7528\u6237\u5c06\u64cd\u4f5c\u4e0e\u4e8b\u52a1\u89c4\u5219\u8fdb\u884c\u89e3\u8026\u3002"),(0,t.kt)("p",null,"\u7b80\u5355\u5730\u8bf4\uff0c\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u4fb5\u5165\u5230\u4e86\u4e1a\u52a1\u4ee3\u7801\u91cc\u9762\uff0c\u4f46\u662f\u63d0\u4f9b\u4e86\u66f4\u52a0\u8be6\u7ec6\u7684\u4e8b\u52a1\u7ba1\u7406\uff1b\u800c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7531\u4e8e\u57fa\u4e8eAOP\uff0c\u6240\u4ee5\u65e2\u80fd\u8d77\u5230\u4e8b\u52a1\u7ba1\u7406\u7684\u4f5c\u7528\uff0c\u53c8\u53ef\u4ee5\u4e0d\u5f71\u54cd\u4e1a\u52a1\u4ee3\u7801\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,t.kt)("h2",{id:"12\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u5b9e\u73b0"},"1.2\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u5b9e\u73b0"),(0,t.kt)("p",null,"Spring\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\u7684\u7f16\u7a0b\u5f0f\u4e8b\u52a1\u7ba1\u7406\uff0c\u5206\u522b\u662f\uff1a\u4f7f\u7528TransactionTemplate\u548c\u76f4\u63a5\u4f7f\u7528PlatformTransactionManager\u3002"),(0,t.kt)("p",null,"PlatformTransactionManager :\u4e8b\u52a1\u7ba1\u7406\u5668(\u7528\u6765\u7ba1\u7406\u4e8b\u52a1\uff0c\u5305\u542b\u4e8b\u52a1\u7684\u63d0\u4ea4\uff0c\u56de\u6eda)\nTransactionDefinition :\u4e8b\u52a1\u5b9a\u4e49\u4fe1\u606f(\u9694\u79bb\uff0c\u4f20\u64ad\uff0c\u8d85\u65f6\uff0c\u53ea\u8bfb)\nTransactionStatus :\u4e8b\u52a1\u5177\u4f53\u8fd0\u884c\u72b6\u6001"),(0,t.kt)("p",null,"Spring\u6839\u636e\u4e8b\u52a1\u5b9a\u4e49\u4fe1\u606f(TransactionDefinition)\u7531\u5e73\u53f0\u4e8b\u52a1\u7ba1\u7406\u5668(PlatformTransactionManager)\u771f\u6b63\u8fdb\u884c\u4e8b\u52a1\u7684\u7ba1\u7406\uff0c\u5728\u8fdb\u884c\u4e8b\u52a1\u7ba1\u7406\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e8b\u52a1\u4f1a\u4ea7\u751f\u8fd0\u884c\u72b6\u6001\uff0c\u72b6\u6001\u4fdd\u5b58\u5728TransactionStatus\u4e2d"),(0,t.kt)("h3",{id:"121\u4f7f\u7528transactiontemplate"},"1.2.1\u4f7f\u7528TransactionTemplate"),(0,t.kt)("p",null,"\u91c7\u7528TransactionTemplate\u548c\u91c7\u7528\u5176\u4ed6Spring\u6a21\u677f\uff0c\u5982JdbcTempalte\u548cHibernateTemplate\u662f\u4e00\u6837\u7684\u65b9\u6cd5\u3002\u5b83\u4f7f\u7528\u56de\u8c03\u65b9\u6cd5\uff0c\u628a\u5e94\u7528\u7a0b\u5e8f\u4ece\u5904\u7406\u53d6\u5f97\u548c\u91ca\u653e\u8d44\u6e90\u4e2d\u89e3\u8131\u51fa\u6765\u3002\u5982\u540c\u5176\u4ed6\u6a21\u677f\uff0cTransactionTemplate\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u4ee3\u7801\u7247\u6bb5\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"TransactionTemplate tt = new TransactionTemplate(); // \u65b0\u5efa\u4e00\u4e2a\nTransactionTemplate Object result = tt.execute(\n    new TransactionCallback(){\n        public Object doTransaction(TransactionStatus status){\n            updateOperation();\n            return resultOfUpdateOperation();\n        }\n}); // \u6267\u884cexecute\u65b9\u6cd5\u8fdb\u884c\u4e8b\u52a1\u7ba1\u7406\n")),(0,t.kt)("p",null,"\u4f7f\u7528TransactionCallback()\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u3002\u5982\u679c\u4f7f\u7528TransactionCallbackWithoutResult\u5219\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,t.kt)("h3",{id:"122\u4f7f\u7528platformtransactionmanager"},"1.2.2\u4f7f\u7528PlatformTransactionManager"),(0,t.kt)("p",null,"Spring\u4e3a\u4e0d\u540c\u7684\u6301\u4e45\u5316\u6846\u67b6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684PlatformTransactionManager\u5982:\u5728\u4f7f\u7528Spring JDBC\u6216iBatis\u8fdb\u884c\u6301\u4e45\u5316\u6570\u636e\u65f6\uff0c\u91c7\u7528DataSourceTransactionManager\u5728\u4f7f\u7528Hibernate\u8fdb\u884c\u6301\u4e45\u5316\u6570\u636e\u65f6\u4f7f\u7528HibernateTransactionManager"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"DataSourceTransactionManager dataSourceTransactionManager = new DataSourceTransactionManager(); //\u5b9a\u4e49\u4e00\u4e2a\u67d0\u4e2a\u6846\u67b6\u5e73\u53f0\u7684TransactionManager\uff0c\u5982JDBC\u3001Hibernate\n        dataSourceTransactionManager.setDataSource(this.getJdbcTemplate().getDataSource(\n        )); // \u8bbe\u7f6e\u6570\u636e\u6e90\n        DefaultTransactionDefinition transDef = new DefaultTransactionDefinition();\n// \u5b9a\u4e49\u4e8b\u52a1\u5c5e\u6027\n        transDef.setPropagationBehavior(DefaultTransactionDefinition.PROPAGATION_REQUIRE\n                D); // \u8bbe\u7f6e\u4f20\u64ad\u884c\u4e3a\u5c5e\u6027\n        TransactionStatus status =\n                dataSourceTransactionManager.getTransaction(transDef); // \u83b7\u5f97\u4e8b\u52a1\u72b6\u6001\n        try {\n// \u6570\u636e\u5e93\u64cd\u4f5c\n            dataSourceTransactionManager.commit(status);// \u63d0\u4ea4\n        } catch (Exception e) {\n            dataSourceTransactionManager.rollback(status);// \u56de\u6eda\n        }\n")),(0,t.kt)("h2",{id:"13\u58f0\u660e\u5f0f\u4e8b\u52a1\u5b9e\u73b0"},"1.3\u58f0\u660e\u5f0f\u4e8b\u52a1\u5b9e\u73b0"),(0,t.kt)("h3",{id:"131\u914d\u7f6e\u65b9\u5f0f"},"1.3.1\u914d\u7f6e\u65b9\u5f0f"),(0,t.kt)("p",null,"\u6839\u636e\u4ee3\u7406\u673a\u5236\u7684\u4e0d\u540c\uff0c\u603b\u7ed3\u4e86\u4e94\u79cdSpring\u4e8b\u52a1\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a\n\uff081\uff09\u6bcf\u4e2aBean\u90fd\u6709\u4e00\u4e2a\u4ee3\u7406"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd\nhttp://www.springframework.org/schema/aop\nhttp://www.springframework.org/schema/aop/spring-aop-2.5.xsd">\n    <bean id="sessionFactory"\n          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">\n        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>\n        <property name="configurationClass"\n                  value="org.hibernate.cfg.AnnotationConfiguration"/>\n    </bean>\n    \x3c!-- \u5b9a\u4e49\u4e8b\u52a1\u7ba1\u7406\u5668\uff08\u58f0\u660e\u5f0f\u7684\u4e8b\u52a1\uff09 --\x3e\n    <bean id="transactionManager"\n          class="org.springframework.orm.hibernate3.HibernateTransactionManager">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    \x3c!-- \u914d\u7f6eDAO --\x3e\n    <bean id="userDaoTarget" class="com.bluesky.spring.dao.UserDaoImpl">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    <bean id="userDao"\n          class="org.springframework.transaction.interceptor.TransactionProxyFactoryBean">\n        \x3c!-- \u914d\u7f6e\u4e8b\u52a1\u7ba1\u7406\u5668 --\x3e\n        <property name="transactionManager" ref="transactionManager"/>\n        <property name="target" ref="userDaoTarget"/>\n        <property name="proxyInterfaces"\n                  value="com.bluesky.spring.dao.GeneratorDao"/>\n        \x3c!-- \u914d\u7f6e\u4e8b\u52a1\u5c5e\u6027 --\x3e\n        <property name="transactionAttributes">\n            <props>\n                <prop key="*">PROPAGATION_REQUIRED</prop>\n            </props>\n        </property>\n    </bean>\n</beans>\n')),(0,t.kt)("p",null,"\uff082\uff09\u6240\u6709Bean\u5171\u4eab\u4e00\u4e2a\u4ee3\u7406\u57fa\u7c7b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd\nhttp://www.springframework.org/schema/aop\nhttp://www.springframework.org/schema/aop/spring-aop-2.5.xsd">\n    <bean id="sessionFactory"\n          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">\n        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>\n        <property name="configurationClass"\n                  value="org.hibernate.cfg.AnnotationConfiguration"/>\n    </bean>\n    \x3c!-- \u5b9a\u4e49\u4e8b\u52a1\u7ba1\u7406\u5668\uff08\u58f0\u660e\u5f0f\u7684\u4e8b\u52a1\uff09 --\x3e\n    <bean id="transactionManager"\n          class="org.springframework.orm.hibernate3.HibernateTransactionManager">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    <bean id="transactionBase"\n          class="org.springframework.transaction.interceptor.TransactionProxyFactoryBean"\n          lazy-init="true" abstract="true">\n        \x3c!-- \u914d\u7f6e\u4e8b\u52a1\u7ba1\u7406\u5668 --\x3e\n        <property name="transactionManager" ref="transactionManager"/>\n        \x3c!-- \u914d\u7f6e\u4e8b\u52a1\u5c5e\u6027 --\x3e\n        <property name="transactionAttributes">\n            <props>\n                <prop key="*">PROPAGATION_REQUIRED</prop>\n            </props>\n        </property>\n    </bean>\n    \x3c!-- \u914d\u7f6eDAO --\x3e\n    <bean id="userDaoTarget" class="com.bluesky.spring.dao.UserDaoImpl">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    <bean id="userDao" parent="transactionBase">\n        <property name="target" ref="userDaoTarget"/>\n    </bean>\n</beans>\n')),(0,t.kt)("p",null,"\uff083\uff09\u4f7f\u7528\u62e6\u622a\u5668"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd\nhttp://www.springframework.org/schema/aop\nhttp://www.springframework.org/schema/aop/spring-aop-2.5.xsd">\n    <bean id="sessionFactory"\n          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">\n        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>\n        <property name="configurationClass"\n                  value="org.hibernate.cfg.AnnotationConfiguration"/>\n    </bean>\n    \x3c!-- \u5b9a\u4e49\u4e8b\u52a1\u7ba1\u7406\u5668\uff08\u58f0\u660e\u5f0f\u7684\u4e8b\u52a1\uff09 --\x3e\n    <bean id="transactionManager"\n          class="org.springframework.orm.hibernate3.HibernateTransactionManager">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    <bean id="transactionInterceptor"\n          class="org.springframework.transaction.interceptor.TransactionInterceptor">\n        <property name="transactionManager" ref="transactionManager"/>\n        \x3c!-- \u914d\u7f6e\u4e8b\u52a1\u5c5e\u6027 --\x3e\n        <property name="transactionAttributes">\n            <props>\n                <prop key="*">PROPAGATION_REQUIRED</prop>\n            </props>\n        </property>\n    </bean>\n    <bean\n            class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">\n        <property name="beanNames">\n            <list>\n                <value>*Dao</value>\n            </list>\n        </property>\n        <property name="interceptorNames">\n            <list>\n                <value>transactionInterceptor</value>\n            </list>\n        </property>\n    </bean>\n    \x3c!-- \u914d\u7f6eDAO --\x3e\n    <bean id="userDao" class="com.bluesky.spring.dao.UserDaoImpl">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n</beans>\n')),(0,t.kt)("p",null,"\uff084\uff09\u4f7f\u7528tx\u6807\u7b7e\u914d\u7f6e\u7684\u62e6\u622a\u5668"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xmlns:tx="http://www.springframework.org/schema/tx"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd\nhttp://www.springframework.org/schema/aop\nhttp://www.springframework.org/schema/aop/spring-aop-2.5.xsd\nhttp://www.springframework.org/schema/tx\nhttp://www.springframework.org/schema/tx/spring-tx-2.5.xsd">\n    <context:annotation-config/>\n    <context:component-scan base-package="com.bluesky"/>\n    <bean id="sessionFactory"\n          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">\n        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>\n        <property name="configurationClass"\n                  value="org.hibernate.cfg.AnnotationConfiguration"/>\n    </bean>\n    \x3c!-- \u5b9a\u4e49\u4e8b\u52a1\u7ba1\u7406\u5668\uff08\u58f0\u660e\u5f0f\u7684\u4e8b\u52a1\uff09 --\x3e\n    <bean id="transactionManager"\n          class="org.springframework.orm.hibernate3.HibernateTransactionManager">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n    <tx:advice id="txAdvice" transaction-manager="transactionManager">\n        <tx:attributes>\n            <tx:method name="*" propagation="REQUIRED"/>\n        </tx:attributes>\n    </tx:advice>\n    <aop:config>\n        <aop:pointcut id="interceptorPointCuts"\n                      expression="execution(* com.bluesky.spring.dao.*.*(..))"/>\n        <aop:advisor advice-ref="txAdvice"\n                     pointcut-ref="interceptorPointCuts"/>\n    </aop:config>\n</beans>\n')),(0,t.kt)("p",null,"\uff085\uff09\u5168\u6ce8\u89e3"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xmlns:tx="http://www.springframework.org/schema/tx"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd\nhttp://www.springframework.org/schema/aop\nhttp://www.springframework.org/schema/aop/spring-aop-2.5.xsd\nhttp://www.springframework.org/schema/tx\nhttp://www.springframework.org/schema/tx/spring-tx-2.5.xsd">\n    <context:annotation-config/>\n    <context:component-scan base-package="com.bluesky"/>\n    <tx:annotation-driven transaction-manager="transactionManager"/>\n    <bean id="sessionFactory"\n          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">\n        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>\n        <property name="configurationClass"\n                  value="org.hibernate.cfg.AnnotationConfiguration"/>\n    </bean>\n    \x3c!-- \u5b9a\u4e49\u4e8b\u52a1\u7ba1\u7406\u5668\uff08\u58f0\u660e\u5f0f\u7684\u4e8b\u52a1\uff09 --\x3e\n    <bean id="transactionManager"\n          class="org.springframework.orm.hibernate3.HibernateTransactionManager">\n        <property name="sessionFactory" ref="sessionFactory"/>\n    </bean>\n</beans>\n')),(0,t.kt)("p",null,"\u6b64\u65f6\u5728DAO\u4e0a\u9700\u52a0\u4e0a@Transactional\u6ce8\u89e3\uff0c\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'@Transactional\n@Component("userDao")\npublic class UserDaoImpl extends HibernateDaoSupport implements UserDao {\n    public List<User> listUsers() {\n        return this.getSession().createQuery("from User").list();\n    }\n}\n')),(0,t.kt)("h1",{id:"2jdbc\u5982\u4f55\u5b9e\u73b0\u4e8b\u52a1"},"2.JDBC\u5982\u4f55\u5b9e\u73b0\u4e8b\u52a1"),(0,t.kt)("p",null,"\u5728JDBC\u4e2d\u5904\u7406\u4e8b\u52a1\uff0c\u90fd\u662f\u901a\u8fc7Connection\u5b8c\u6210\u7684\u3002\u540c\u4e00\u4e8b\u52a1\u4e2d\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u90fd\u5728\u4f7f\u7528\u540c\u4e00\u4e2aConnection\u5bf9\u8c61\u3002\n",(0,t.kt)("strong",{parentName:"p"},"JDBC\u4e2d\u7684\u4e8b\u52a1"),"\nConnection\u7684\u4e09\u4e2a\u65b9\u6cd5\u4e0e\u4e8b\u52a1\u6709\u5173\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"setAutoCommit\uff08boolean\uff09:\u8bbe\u7f6e\u662f\u5426\u4e3a\u81ea\u52a8\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5982\u679ctrue\uff08\u9ed8\u8ba4\u503c\u4e3atrue\uff09\u8868\u793a\u81ea\u52a8\u63d0\u4ea4\uff0c\u4e5f\u5c31\u662f\u6bcf\u6761\u6267\u884c\u7684SQL\u8bed\u53e5\u90fd\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u4e8b\u52a1\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3afalse\uff0c\u90a3\u4e48\u76f8\u5f53\u4e8e\u5f00\u542f\u4e86\u4e8b\u52a1\u4e86\uff1b con.setAutoCommit(false) \u8868\u793a\u5f00\u542f\u4e8b\u52a1\u3002"),(0,t.kt)("li",{parentName:"ul"},"commit\uff08\uff09\uff1a\u63d0\u4ea4\u7ed3\u675f\u4e8b\u52a1\u3002"),(0,t.kt)("li",{parentName:"ul"},"rollback\uff08\uff09\uff1a\u56de\u6eda\u7ed3\u675f\u4e8b\u52a1\u3002")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"//\u793a\u4f8b\u4ee3\u7801\ntry{\n    con.setAutoCommit(false);//\u5f00\u542f\u4e8b\u52a1\n    ......\n    con.commit();//try\u7684\u6700\u540e\u63d0\u4ea4\u4e8b\u52a1\n} catch\uff08\uff09 {\n    con.rollback();//\u56de\u6eda\u4e8b\u52a1\n}\n")))}l.isMDXComponent=!0}}]);