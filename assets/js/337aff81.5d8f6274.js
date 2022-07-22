"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[6958],{3905:(n,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>C});var t=o(7294);function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function c(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function l(n,e){if(null==n)return{};var o,t,a=function(n,e){if(null==n)return{};var o,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||(a[o]=n[o]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var r=t.createContext({}),s=function(n){var e=t.useContext(r),o=e;return n&&(o="function"==typeof n?n(e):c(c({},e),n)),o},u=function(n){var e=s(n.components);return t.createElement(r.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var o=n.components,a=n.mdxType,i=n.originalType,r=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=s(o),C=a,m=d["".concat(r,".").concat(C)]||d[C]||p[C]||i;return o?t.createElement(m,c(c({ref:e},u),{},{components:o})):t.createElement(m,c({ref:e},u))}));function C(n,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=o.length,c=new Array(i);c[0]=d;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=n,l.mdxType="string"==typeof n?n:a,c[1]=l;for(var s=2;s<i;s++)c[s]=o[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2807:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=o(7462),a=(o(7294),o(3905));const i={},c=void 0,l={unversionedId:"DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60",id:"DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60",title:"Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60",description:"[toc]",source:"@site/docs/DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60.md",sourceDirName:"DataBase/Mybatis",slug:"/DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60",permalink:"/MyWiki/docs/DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DataBase/Mybatis/Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mybatis",permalink:"/MyWiki/docs/category/mybatis"},next:{title:"Mysql",permalink:"/MyWiki/docs/category/mysql"}},r={},s=[{value:"MyBatis\u6570\u636e\u6e90DataSource\u5206\u7c7b",id:"mybatis\u6570\u636e\u6e90datasource\u5206\u7c7b",level:2},{value:"\u6570\u636e\u6e90DataSource\u7684\u521b\u5efa\u8fc7\u7a0b",id:"\u6570\u636e\u6e90datasource\u7684\u521b\u5efa\u8fc7\u7a0b",level:2},{value:"DataSource\u4ec0\u4e48\u65f6\u5019\u521b\u5efaConnection\u5bf9\u8c61",id:"datasource\u4ec0\u4e48\u65f6\u5019\u521b\u5efaconnection\u5bf9\u8c61",level:2},{value:"\u4e0d\u4f7f\u7528\u8fde\u63a5\u6c60\u7684UnpooledDataSource",id:"\u4e0d\u4f7f\u7528\u8fde\u63a5\u6c60\u7684unpooleddatasource",level:2},{value:"\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u7684PooledDataSource",id:"\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u7684pooleddatasource",level:2},{value:"\u83b7\u53d6java.sql.Connection\u5bf9\u8c61\u7684\u8fc7\u7a0b",id:"\u83b7\u53d6javasqlconnection\u5bf9\u8c61\u7684\u8fc7\u7a0b",level:3},{value:"popConnection()\u65b9\u6cd5",id:"popconnection\u65b9\u6cd5",level:3},{value:"java.sql.Connection\u5bf9\u8c61\u7684\u56de\u6536",id:"javasqlconnection\u5bf9\u8c61\u7684\u56de\u6536",level:3},{value:"\u600e\u6837\u5b9e\u73b0Connection\u5bf9\u8c61\u8c03\u7528\u4e86close()\u65b9\u6cd5\uff0c\u800c\u5b9e\u9645\u662f\u5c06\u5176\u6dfb\u52a0\u5230\u8fde\u63a5\u6c60\u4e2d",id:"\u600e\u6837\u5b9e\u73b0connection\u5bf9\u8c61\u8c03\u7528\u4e86close\u65b9\u6cd5\u800c\u5b9e\u9645\u662f\u5c06\u5176\u6dfb\u52a0\u5230\u8fde\u63a5\u6c60\u4e2d",level:3},{value:"JNDI\u7c7b\u578b\u7684\u6570\u636e\u6e90DataSource",id:"jndi\u7c7b\u578b\u7684\u6570\u636e\u6e90datasource",level:2}],u={toc:s};function p(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[toc]"),(0,a.kt)("h1",{id:"mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60"},"Mybatis\u6570\u636e\u6e90\u4e0e\u8fde\u63a5\u6c60"),(0,a.kt)("h2",{id:"mybatis\u6570\u636e\u6e90datasource\u5206\u7c7b"},"MyBatis\u6570\u636e\u6e90DataSource\u5206\u7c7b"),(0,a.kt)("p",null,"MyBatis\u628a\u6570\u636e\u6e90DataSource\u5206\u4e3a\u4e09\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"unpooled\uff1a\u4e0d\u9002\u7528\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ol"},"pooled\uff1a\u4f7f\u7528\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ol"},"JNDI\uff1a\u4f7f\u7528JNDI\u5b9e\u73b0\u7684\u6570\u636e\u6e90")),(0,a.kt)("p",null,"\u200b\t\tMyBatis\u5185\u90e8\u5206\u522b\u5b9a\u4e49\u4e86\u5b9e\u73b0\u4e86java.sql.DataSource\u63a5\u53e3\u7684UnpooledDataSource\uff0cPooledDataSource\u7c7b\u6765\u8868\u793aUNPOOLED\u3001POOLED\u7c7b\u578b\u7684\u6570\u636e\u6e90\u3002"),(0,a.kt)("p",null,"\u200b\t\tPooledDataSource\u548cUnpooledDataSource\u90fd\u5b9e\u73b0\u4e86java.sql.DataSource\u63a5\u53e3\uff0c\u5e76\u4e14PooledDataSource\u6301\u6709\u4e00\u4e2aUnpooledDataSource\u7684\u5f15\u7528\uff0c\u5f53PooledDataSource\u9700\u8981\u521b\u5efajava.sql.Connection\u5b9e\u4f8b\u5bf9\u8c61\u65f6\uff0c\u8fd8\u662f\u901a\u8fc7UnpooledDataSource\u6765\u521b\u5efa\uff0cPooledDataSource\u77e5\u8bc6\u63d0\u4f9b\u4e86\u4e00\u79cd\u7f13\u5b58\u8fde\u63a5\u6c60\u673a\u5236\u3002"),(0,a.kt)("p",null,"\u200b\t\t\u5bf9\u4e8eJNDI\u7c7b\u578b\u7684\u6570\u636e\u6e90DataSource\uff0c\u5219\u662f\u901a\u8fc7JNDI\u4e0a\u4e0b\u6587\u4e2d\u53d6\u503c\u3002"),(0,a.kt)("h2",{id:"\u6570\u636e\u6e90datasource\u7684\u521b\u5efa\u8fc7\u7a0b"},"\u6570\u636e\u6e90DataSource\u7684\u521b\u5efa\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u4e00\u3001MyBatis\u5728\u521d\u59cb\u5316\u65f6\uff0c\u89e3\u6790mybatis\u7684xml\u914d\u7f6e\u6587\u4ef6\uff0c\u6839\u636e\u7684type\u5c5e\u6027\u6765\u521b\u5efa\u76f8\u5e94\u7c7b\u578b\u7684\u7684\u6570\u636e\u6e90DataSource\uff0c\u5373\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type=\u201dPOOLED\u201d \uff1aMyBatis\u4f1a\u521b\u5efaPooledDataSource\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"type=\u201dUNPOOLED\u201d \uff1aMyBatis\u4f1a\u521b\u5efaUnpooledDataSource\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"type=\u201dJNDI\u201d \uff1aMyBatis\u4f1a\u4eceJNDI\u670d\u52a1\u4e0a\u67e5\u627eDataSource\u5b9e\u4f8b\uff0c\u7136\u540e\u8fd4\u56de\u4f7f\u7528")),(0,a.kt)("p",null,"\u4e8c\u3001MyBatis\u662f\u901a\u8fc7\u5de5\u5382\u6a21\u5f0f\u6765\u521b\u5efa\u6570\u636e\u6e90DataSource\u5bf9\u8c61\u7684\uff0cMyBatis\u5b9a\u4e49\u4e86\u62bd\u8c61\u7684\u5de5\u5382\u63a5\u53e3:\norg.apache.ibatis.datasource.DataSourceFactory,\u901a\u8fc7\u5176getDataSource()\u65b9\u6cd5\u8fd4\u56de\u6570\u636e\u6e90DataSource\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface DataSourceFactory {\n    void setProperties(Properties props);\n    //\u751f\u4ea7DataSource\n    DataSource getDataSource();\n}\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b\u7684type\uff0c\u5219\u6709\u5bf9\u5e94\u7684\u4ee5\u4e0bdataSource\u5de5\u5382\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"POOLED\uff1a PooledDataSourceFactory"),(0,a.kt)("li",{parentName:"ul"},"UNPOOLED\uff1a UnpooledDataSourceFactory"),(0,a.kt)("li",{parentName:"ul"},"JNDI\uff1a JndiDataSourceFactory")),(0,a.kt)("p",null,"\u4e09\u3001MyBatis\u521b\u5efa\u4e86DataSource\u5b9e\u4f8b\u540e\uff0c\u4f1a\u5c06\u5176\u653e\u5230Configuration\u5bf9\u8c61\u5185\u7684Environment\u5bf9\u8c61\u4e2d\uff0c \u4f9b\u4ee5\u540e\u4f7f\u7528"),(0,a.kt)("h2",{id:"datasource\u4ec0\u4e48\u65f6\u5019\u521b\u5efaconnection\u5bf9\u8c61"},"DataSource\u4ec0\u4e48\u65f6\u5019\u521b\u5efaConnection\u5bf9\u8c61"),(0,a.kt)("p",null,"\u200b\t\t\u5f53\u6211\u4eec\u9700\u8981\u521b\u5efaSqlSession\u5bf9\u8c61\u5e76\u9700\u8981\u6267\u884cSQL\u8bed\u53e5\u65f6\uff0c\u8fd9\u65f6\u5019MyBatis\u624d\u4f1a\u53bb\u8c03\u7528dataSource\u5bf9\u8c61\u6765\u521b\u5efa"),(0,a.kt)("p",null,"java.sql.Connection\u5bf9\u8c61\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cjava.sql.Connection\u5bf9\u8c61\u7684\u521b\u5efa\u4e00\u76f4\u5ef6\u8fdf\u5230\u6267\u884cSQL\u8bed\u53e5\u7684\u65f6\u5019\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u6709\u5982\u4e0b\u65b9\u6cd5\u6267\u884c\u4e00\u4e2a\u7b80\u5355\u7684SQL\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String resource = "mybatis-config.xml";\nInputStream inputStream = Resources.getResourceAsStream(resource);\nSqlSessionFactory sqlSessionFactory = new\nSqlSessionFactoryBuilder().build(inputStream);\nSqlSession sqlSession = sqlSessionFactory.openSession();\nsqlSession.selectList("SELECT * FROM STUDENTS");\n')),(0,a.kt)("p",null,'\u524d4\u53e5\u90fd\u4e0d\u4f1a\u5bfc\u81f4java.sql.Connection\u5bf9\u8c61\u7684\u521b\u5efa\uff0c\u53ea\u6709\u5f53\u7b2c5\u53e5sqlSession.selectList("SELECT *FROM STUDENTS")\uff0c\u624d\u4f1a\u89e6\u53d1MyBatis\u5728\u5e95\u5c42\u6267\u884c\u4e0b\u9762\u8fd9\u4e2a\u65b9\u6cd5\u6765\u521b\u5efajava.sql.Connection\u5bf9\u8c61\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected void openConnection() throws SQLException {\n    if (log.isDebugEnabled()) {\n        log.debug("Opening JDBC Connection");\n    }\n    connection = dataSource.getConnection();\n    if (level != null) {\n        connection.setTransactionIsolation(level.getLevel());\n    }\n    setDesiredAutoCommit(autoCommmit);\n}\n')),(0,a.kt)("h2",{id:"\u4e0d\u4f7f\u7528\u8fde\u63a5\u6c60\u7684unpooleddatasource"},"\u4e0d\u4f7f\u7528\u8fde\u63a5\u6c60\u7684UnpooledDataSource"),(0,a.kt)("p",null,"\u200b\t\t\u5f53 \u7684type\u5c5e\u6027\u88ab\u914d\u7f6e\u6210\u4e86\u201dUNPOOLED\u201d\uff0cMyBatis\u9996\u5148\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2aUnpooledDataSourceFactory\u5de5\u5382\u5b9e\u4f8b\uff0c\u7136\u540e\u901a\u8fc7.getDataSource()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2aUnpooledDataSource\u5b9e\u4f8b\u5bf9\u8c61\u5f15\u7528\uff0c\u6211\u4eec\u5047\u5b9a\u4e3adataSource\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528UnpooledDataSource\u7684getConnection(),\u6bcf\u8c03\u7528\u4e00\u6b21\u5c31\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684Connection\u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"UnPooledDataSource\u7684getConnection()\u65b9\u6cd5\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\nUnpooledDataSource\u7684getConnection()\u5b9e\u73b0\n*/\npublic Connection getConnection() throws SQLException\n{\n    return doGetConnection(username, password);\n}\nprivate Connection doGetConnection(String username, String password) throws\nSQLException\n{\n    //\u5c01\u88c5username\u548cpassword\u6210properties\n    Properties props = new Properties();\n    if (driverProperties != null)\n    {\n        props.putAll(driverProperties);\n    }\n    if (username != null)\n    {\n        props.setProperty("user", username);\n    }\n    if (password != null)\n    {\n        props.setProperty("password", password);\n    }\n    return doGetConnection(props);\n}\n/*\n* \u83b7\u53d6\u6570\u636e\u8fde\u63a5\n*/\nprivate Connection doGetConnection(Properties properties) throws\nSQLException\n{\n    //1.\u521d\u59cb\u5316\u9a71\u52a8\n    initializeDriver();\n    //2.\u4eceDriverManager\u4e2d\u83b7\u53d6\u8fde\u63a5\uff0c\u83b7\u53d6\u65b0\u7684Connection\u5bf9\u8c61\n    Connection connection = DriverManager.getConnection(url, properties);\n    //3.\u914d\u7f6econnection\u5c5e\u6027\n    configureConnection(connection);\n    return connection;\n}\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u4ee3\u7801\u6240\u793a\uff0cUnpooledDataSource\u4f1a\u505a\u4ee5\u4e0b\u4e8b\u60c5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u9a71\u52a8\uff1a \u5224\u65addriver\u9a71\u52a8\u662f\u5426\u5df2\u7ecf\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5982\u679c\u8fd8\u6ca1\u6709\u52a0\u8f7d\uff0c\u5219\u4f1a\u52a8\u6001\u5730\u52a0\u8f7d\ndriver\u7c7b\uff0c\u5e76\u5b9e\u4f8b\u5316\u4e00\u4e2aDriver\u5bf9\u8c61\uff0c\u4f7f\u7528DriverManager.registerDriver()\u65b9\u6cd5\u5c06\u5176\u6ce8\u518c\u5230\n\u5185\u5b58\u4e2d\uff0c\u4ee5\u4f9b\u540e\u7eed\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efaConnection\u5bf9\u8c61\uff1a \u4f7f\u7528DriverManager.getConnection()\u65b9\u6cd5\u521b\u5efa\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6eConnection\u5bf9\u8c61\uff1a \u8bbe\u7f6e\u662f\u5426\u81ea\u52a8\u63d0\u4ea4autoCommit\u548c\u9694\u79bb\u7ea7\u522bisolationLevel\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56deConnection\u5bf9\u8c61\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u7684pooleddatasource"},"\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u7684PooledDataSource"),(0,a.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e5f\u662f\u4f7f\u7528PooledDataSource\u7684getConnection()\u65b9\u6cd5\u6765\u8fd4\u56deConnection\u5bf9\u8c61\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5b83\u7684\u57fa\u672c\u539f\u7406\uff1a"),(0,a.kt)("p",null," PooledDataSource\u5c06java.sql.Connection\u5bf9\u8c61\u5305\u88f9\u6210PooledConnection\u5bf9\u8c61\u653e\u5230\u4e86PoolState\u7c7b\u578b\u7684\u5bb9\u5668\u4e2d\u7ef4\u62a4\u3002MyBatis\u5c06\u8fde\u63a5\u6c60\u4e2d\u7684PooledConnection\u5206\u4e3a\u4e24\u79cd\u72b6\u6001\uff1a \u7a7a\u95f2\u72b6\u6001\uff08idle\uff09\u548c\u6d3b\u52a8\u72b6\u6001(active)\uff0c\u8fd9\u4e24\u79cd\u72b6\u6001\u7684PooledConnection\u5bf9\u8c61\u5206\u522b\u88ab\u5b58\u50a8\u5230PoolState\u5bb9\u5668\u5185\u7684idleConnections\u548cactiveConnections\u4e24\u4e2aList\u96c6\u5408\u4e2d\uff1a"),(0,a.kt)("p",null,"idleConnections:\u7a7a\u95f2(idle)\u72b6\u6001PooledConnection\u5bf9\u8c61\u88ab\u653e\u7f6e\u5230\u6b64\u96c6\u5408\u4e2d\uff0c\u8868\u793a\u5f53\u524d\u95f2\u7f6e\u7684\u6ca1\u6709\u88ab\u4f7f\u7528\u7684PooledConnection\u96c6\u5408\uff0c\u8c03\u7528PooledDataSource\u7684getConnection()\u65b9\u6cd5\u65f6\uff0c\u4f1a\u4f18\u5148\u4ece\u6b64\u96c6\u5408\u4e2d\u53d6PooledConnection\u5bf9\u8c61\u3002\u5f53\u7528\u5b8c\u4e00\u4e2ajava.sql.Connection\u5bf9\u8c61\u65f6\uff0cMyBatis\u4f1a\u5c06\u5176\u5305\u88f9\u6210PooledConnection\u5bf9\u8c61\u653e\u5230\u6b64\u96c6\u5408\u4e2d\u3002"),(0,a.kt)("p",null,"activeConnections:\u6d3b\u52a8(active)\u72b6\u6001\u7684PooledConnection\u5bf9\u8c61\u88ab\u653e\u7f6e\u5230\u540d\u4e3aactiveConnections\u7684ArrayList\u4e2d\uff0c\u8868\u793a\u5f53\u524d\u6b63\u5728\u88ab\u4f7f\u7528\u7684PooledConnection\u96c6\u5408\uff0c\u8c03\u7528PooledDataSource\u7684getConnection()\u65b9\u6cd5\u65f6\uff0c\u4f1a\u4f18\u5148\u4eceidleConnections\u96c6\u5408\u4e2d\u53d6PooledConnection\u5bf9\u8c61,\u5982\u679c\u6ca1\u6709\uff0c\u5219\u770b\u6b64\u96c6\u5408\u662f\u5426\u5df2\u6ee1\uff0c\u5982\u679c\u672a\u6ee1\uff0cPooledDataSource\u4f1a\u521b\u5efa\u51fa\u4e00\u4e2aPooledConnection\uff0c\u6dfb\u52a0\u5230\u6b64\u96c6\u5408\u4e2d\uff0c\u5e76\u8fd4\u56de\u3002"),(0,a.kt)("h3",{id:"\u83b7\u53d6javasqlconnection\u5bf9\u8c61\u7684\u8fc7\u7a0b"},"\u83b7\u53d6java.sql.Connection\u5bf9\u8c61\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"PooledDataSource \u7684getConnection()\u65b9\u6cd5\u83b7\u53d6Connection\u5bf9\u8c61\u7684\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public Connection getConnection() throws SQLException {\n        return popConnection(dataSource.getUsername(), dataSource.getPassword()).getProxyConnection();\n    }\n\n    public Connection getConnection(String username, String password) throws SQLException {\n        return popConnection(username, password).getProxyConnection();\n    }\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684popConnection()\u65b9\u6cd5\uff0c\u4f1a\u4ece\u8fde\u63a5\u6c60\u4e2d\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684PooledConnection\u5bf9\u8c61\uff0c\u7136\u540e\u518d\u8c03getProxyConnection()\u65b9\u6cd5\u6700\u7ec8\u8fd4\u56deConection\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"popconnection\u65b9\u6cd5"},"popConnection()\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u770b\u662f\u5426\u6709\u7a7a\u95f2(idle)\u72b6\u6001\u4e0b\u7684PooledConnection\u5bf9\u8c61\uff0c\u5982\u679c\u6709\uff0c\u5c31\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684PooledConnection\u5bf9\u8c61\uff1b\u5426\u5219\u8fdb\u884c\u7b2c2\u6b65\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6d3b\u52a8\u72b6\u6001\u7684PooledConnection\u6c60activeConnections\u662f\u5426\u5df2\u6ee1\uff1b\u5982\u679c\u6ca1\u6709\u6ee1\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\u65b0\u7684PooledConnection\u5bf9\u8c61\uff0c\u7136\u540e\u653e\u5230activeConnections\u6c60\u4e2d\uff0c\u7136\u540e\u8fd4\u56de\u6b64PooledConnection\u5bf9\u8c61\uff1b\u5426\u5219\u8fdb\u884c\u7b2c\u4e09\u6b65\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u770b\u6700\u5148\u8fdb\u5165activeConnections\u6c60\u4e2d\u7684PooledConnection\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u8fc7\u671f\uff1a\u5982\u679c\u5df2\u7ecf\u8fc7\u671f\uff0c\u4eceactiveConnections\u6c60\u4e2d\u79fb\u9664\u6b64\u5bf9\u8c61\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684PooledConnection\u5bf9\u8c61\uff0c\u6dfb\u52a0\u5230activeConnections\u4e2d\uff0c\u7136\u540e\u5c06\u6b64\u5bf9\u8c61\u8fd4\u56de\uff1b\u5426\u5219\u8fdb\u884c\u7b2c4\u6b65\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7ebf\u7a0b\u7b49\u5f85\uff0c\u5faa\u73af2\u6b65")),(0,a.kt)("p",null,"\u5bf9\u4e8ePooledDataSource\u7684getConnection()\u65b9\u6cd5\u5185\uff0c\u5148\u662f\u8c03\u7528\u7c7bPooledDataSource\u7684popConnection()\u65b9\u6cd5\u8fd4\u56de\u4e86\u4e00PooledConnection\u5bf9\u8c61\uff0c\u7136\u540e\u8c03\u7528\u4e86PooledConnection\u7684getProxyConnection()\u6765\u8fd4\u56deConnection\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * \u4f20\u9012\u4e00\u4e2a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4ece\u8fde\u63a5\u6c60\u4e2d\u8fd4\u56de\u53ef\u7528\u7684PooledConnection\n */\n\n\nimport java.sql.SQLException;\n\npublic class WaitNotifyTest {\n    private PooledConnection popConnection(String username, String password) throws SQLException {\n        boolean countedWait = false;\n        PooledConnection conn = null;\n        long t = System.currentTimeMillis();\n        int localBadConnectionCount = 0;\n\n        while (conn == null) {\n            synchronized (state) {\n                if (state.idleConnections.size() > 0) {\n                    // \u8fde\u63a5\u6c60\u4e2d\u6709\u7a7a\u95f2\u8fde\u63a5\uff0c\u53d6\u51fa\u7b2c\u4e00\u4e2a\n                    conn = state.idleConnections.remove(0);\n                    if (log.isDebugEnabled()) {\n                        log.debug("Checked out connection " + conn.getRealHashCode() + " from pool.");\n                    }\n                } else {\n                    // \u8fde\u63a5\u6c60\u4e2d\u6ca1\u6709\u7a7a\u95f2\u8fde\u63a5\uff0c\u5219\u53d6\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684\u8fde\u63a5\u6570\u5c0f\u4e8e\u6700\u5927\u9650\u5b9a\u503c\uff0c\n                    if (state.activeConnections.size() < poolMaximumActiveConnections) {\n                        // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684connection\u5bf9\u8c61\n                        conn = new PooledConnection(dataSource.getConnection(), this);\n                        @SuppressWarnings("unused")\n//used in logging, if enabled\n                        Connection realConn = conn.getRealConnection();\n                        if (log.isDebugEnabled()) {\n                            log.debug("Created connection " + conn.getRealHashCode() + ".");\n                        }\n                    } else {\n                        // Cannot create new connection \u5f53\u6d3b\u52a8\u8fde\u63a5\u6c60\u5df2\u6ee1\uff0c\u4e0d\u80fd\u521b\u5efa\u65f6\uff0c\u53d6\u51fa\u6d3b\u52a8\u8fde\u63a5\u6c60\u7684\u7b2c\u4e00\u4e2a\uff0c\u5373\u6700\u5148\u8fdb\u5165\u8fde\u63a5\u6c60\u7684PooledConnection\u5bf9\u8c61\n                        // \u8ba1\u7b97\u5b83\u7684\u6821\u9a8c\u65f6\u95f4\uff0c\u5982\u679c\u6821\u9a8c\u65f6\u95f4\u5927\u4e8e\u8fde\u63a5\u6c60\u89c4\u5b9a\u7684\u6700\u5927\u6821\u9a8c\u65f6\u95f4\uff0c\u5219\u8ba4\u4e3a\u5b83\u5df2\u7ecf\u8fc7\u671f\u4e86\uff0c\u5229\u7528\u8fd9\u4e2aPoolConnection\u5185\u90e8\u7684realConnection\u91cd\u65b0\u751f\u6210\u4e00\u4e2aPooledConnection\n                        //\n                        PooledConnection oldestActiveConnection = state.activeConnections.get(0);\n                        long longestCheckoutTime = oldestActiveConnection.getCheckoutTime();\n                        if (longestCheckoutTime > poolMaximumCheckoutTime) {\n                            // Can claim overdue connection\n                            state.claimedOverdueConnectionCount++;\n                            state.accumulatedCheckoutTimeOfOverdueConnections += longestCheckoutTime;\n                            state.accumulatedCheckoutTime += longestCheckoutTime;\n                            state.activeConnections.remove(oldestActiveConnection);\n                            if (!oldestActiveConnection.getRealConnection().getAutoCommit()) {\n                                oldestActiveConnection.getRealConnection().rollback();\n                            }\n                            conn = new PooledConnection(oldestActiveConnection.getRealConnection(), this);\n                            oldestActiveConnection.invalidate();\n                            if (log.isDebugEnabled()) {\n                                log.debug("Claimed overdue connection " + conn.getRealHashCode() + ".");\n                            }\n                        } else {\n\n                            //\u5982\u679c\u4e0d\u80fd\u91ca\u653e\uff0c\u5219\u5fc5\u987b\u7b49\u5f85\u6709\n                            // Must wait\n                            try {\n                                if (!countedWait) {\n                                    state.hadToWaitCount++;\n                                    countedWait = true;\n                                }\n                                if (log.isDebugEnabled()) {\n                                    log.debug("Waiting as long as " + poolTimeToWait + " milliseconds for connection.");\n                                }\n                                long wt = System.currentTimeMillis();\n                                state.wait(poolTimeToWait);\n                                state.accumulatedWaitTime += System.currentTimeMillis() - wt;\n                            } catch (InterruptedException e) {\n                                break;\n                            }\n                        }\n                    }\n                }\n\n                //\u5982\u679c\u83b7\u53d6PooledConnection\u6210\u529f\uff0c\u5219\u66f4\u65b0\u5176\u4fe1\u606f\n\n                if (conn != null) {\n                    if (conn.isValid()) {\n                        if (!conn.getRealConnection().getAutoCommit()) {\n                            conn.getRealConnection().rollback();\n                        }\n                        conn.setConnectionTypeCode(assembleConnectionTypeCode(dataSource.getUrl(), username, password));\n                        conn.setCheckoutTimestamp(System.currentTimeMillis());\n                        conn.setLastUsedTimestamp(System.currentTimeMillis());\n                        state.activeConnections.add(conn);\n                        state.requestCount++;\n                        state.accumulatedRequestTime += System.currentTimeMillis() - t;\n                    } else {\n                        if (log.isDebugEnabled()) {\n                            log.debug("A bad connection (" + conn.getRealHashCode() + ") was returned from the pool, getting another connection.");\n                        }\n                        state.badConnectionCount++;\n                        localBadConnectionCount++;\n                        conn = null;\n                        if (localBadConnectionCount > (poolMaximumIdleConnections + 3)) {\n                            if (log.isDebugEnabled()) {\n                                log.debug("PooledDataSource: Could not get a good connection to the database.");\n                            }\n                            throw new SQLException("PooledDataSource: Could not get a good connection to the database.");\n                        }\n                    }\n                }\n            }\n\n        }\n\n        if (conn == null) {\n            if (log.isDebugEnabled()) {\n                log.debug("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");\n            }\n            throw new SQLException("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");\n        }\n\n        return conn;\n    }\n}\n')),(0,a.kt)("h3",{id:"javasqlconnection\u5bf9\u8c61\u7684\u56de\u6536"},"java.sql.Connection\u5bf9\u8c61\u7684\u56de\u6536"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u6211\u4eec\u7684\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b8cConnection\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60\uff0c\u6211\u4eec\u4e00\u822c\u4f1a\u8c03\u7528 connection.close()\u65b9\u6cd5\uff0c\u5173\u95edconnection\u8fde\u63a5\uff0c\u91ca\u653e\u8d44\u6e90\u3002\u5982\u4e0b\u6240\u793a\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private void test() throws ClassNotFoundException, SQLException\n{\n    String sql = "select * from hr.employees where employee_id < ? and employee_id >= ?";\n    PreparedStatement st = null;\n    ResultSet rs = null;\n \n    Connection con = null;\n    Class.forName("oracle.jdbc.driver.OracleDriver");\n    try\n    {\n        con = DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:xe", "louluan", "123456");\n        st = con.prepareStatement(sql);\n        //\u8bbe\u7f6e\u53c2\u6570\n        st.setInt(1, 101);\n        st.setInt(2, 0);\n        //\u67e5\u8be2\uff0c\u5f97\u51fa\u7ed3\u679c\u96c6\n        rs = st.executeQuery();\n        //\u53d6\u6570\u636e\uff0c\u7701\u7565\n        //\u5173\u95ed\uff0c\u91ca\u653e\u8d44\u6e90\n        con.close();\n    }\n    catch (SQLException e)\n    {\n        con.close();\n        e.printStackTrace();\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8c03\u7528\u8fc7close()\u65b9\u6cd5\u7684Connection\u5bf9\u8c61\u6240\u6301\u6709\u7684\u8d44\u6e90\u4f1a\u88ab\u5168\u90e8\u91ca\u653e\u6389\uff0cConnection\u5bf9\u8c61\u4e5f\u5c31\u4e0d\u80fd\u518d\u4f7f\u7528\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u90a3\u4e48\uff0c\u5982\u679c\u6211\u4eec\u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\uff0c\u6211\u4eec\u5728\u7528\u5b8c\u4e86Connection\u5bf9\u8c61\u65f6\uff0c\u9700\u8981\u5c06\u5b83\u653e\u5728\u8fde\u63a5\u6c60\u4e2d\uff0c\u8be5\u600e\u6837\u505a\u5462\uff1f")),(0,a.kt)("h3",{id:"\u600e\u6837\u5b9e\u73b0connection\u5bf9\u8c61\u8c03\u7528\u4e86close\u65b9\u6cd5\u800c\u5b9e\u9645\u662f\u5c06\u5176\u6dfb\u52a0\u5230\u8fde\u63a5\u6c60\u4e2d"},"\u600e\u6837\u5b9e\u73b0Connection\u5bf9\u8c61\u8c03\u7528\u4e86close()\u65b9\u6cd5\uff0c\u800c\u5b9e\u9645\u662f\u5c06\u5176\u6dfb\u52a0\u5230\u8fde\u63a5\u6c60\u4e2d"),(0,a.kt)("p",null,"\u8fd9\u662f\u8981\u4f7f\u7528\u4ee3\u7406\u6a21\u5f0f\uff0c\u4e3a\u771f\u6b63\u7684Connection\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\uff0c\u4ee3\u7406\u5bf9\u8c61\u6240\u6709\u7684\u65b9\u6cd5\u90fd\u662f\u8c03\u7528\u76f8\u5e94\u7684\u771f\u6b63Connection\u5bf9\u8c61\u7684\u65b9\u6cd5\u5b9e\u73b0\u3002\u5f53\u4ee3\u7406\u5bf9\u8c61\u6267\u884cclose()\u65b9\u6cd5\u65f6\uff0c\u8981\u7279\u6b8a\u5904\u7406\uff0c\u4e0d\u8c03\u7528\u771f\u6b63Connection\u5bf9\u8c61\u7684close()\u6cd5\uff0c\u800c\u662f\u5c06Connection\u5bf9\u8c61\u6dfb\u52a0\u5230\u8fde\u63a5\u6c60\u4e2d\u3002"),(0,a.kt)("p",null,"MyBatis\u7684PooledDataSource\u7684PoolState\u5185\u90e8\u7ef4\u62a4\u7684\u5bf9\u8c61\u662fPooledConnection\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u800cPooledConnection\u5219\u662f\u5bf9\u771f\u6b63\u7684\u6570\u636e\u5e93\u8fde\u63a5java.sql.Connection\u5b9e\u4f8b\u5bf9\u8c61\u7684\u5305\u88f9\u5668\u3002"),(0,a.kt)("p",null,"PooledConnection\u5bf9\u8c61\u5185\u6301\u6709\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u636e\u5e93\u8fde\u63a5java.sql.Connection\u5b9e\u4f8b\u5bf9\u8c61\u548c\u4e00\u4e2ajava.sql.Connection\u7684\u4ee3\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class PooledConnection implements InvocationHandler {\n  \n  //......\n  //\u6240\u521b\u5efa\u5b83\u7684datasource\u5f15\u7528\n  private PooledDataSource dataSource;\n  //\u771f\u6b63\u7684Connection\u5bf9\u8c61\n  private Connection realConnection;\n  //\u4ee3\u7406\u81ea\u5df1\u7684\u4ee3\u7406Connection\n  private Connection proxyConnection;\n  \n  //......\n}\n")),(0,a.kt)("p",null,"PooledConenction \u5b9e\u73b0\u4e86 InvocationHandler \u63a5\u53e3\uff0c\u5e76\u4e14\uff0c proxyConnection \u5bf9\u8c61\u4e5f\u662f\u6839\u636e\u8fd9\u4e2a\u5b83\u6765\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public PooledConnection(Connection connection, PooledDataSource dataSource) {\n    this.hashCode = connection.hashCode();\n    this.realConnection = connection;\n    this.dataSource = dataSource;\n    this.createdTimestamp = System.currentTimeMillis();\n    this.lastUsedTimestamp = System.currentTimeMillis();\n    this.valid = true;\n    this.proxyConnection = (Connection) Proxy.newProxyInstance(Connection.class.getClassLoader(), IFACES, this);\n  }\n")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u8c03\u7528PooledDataSource\u7684getConnection()\u65b9\u6cd5\u8fd4\u56de\u7684\u5c31\u662f\u8fd9\u4e2aproxyConnection\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8c03\u7528\u6b64proxyConnection\u5bf9\u8c61\u4e0a\u7684\u4efb\u4f55\u65b9\u6cd5\u65f6\uff0c\u90fd\u4f1a\u8c03\u7528PooledConnection\u5bf9\u8c61\u5185invoke()\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bPooledConnection\u7c7b\u4e2d\u7684invoke()\u65b9\u6cd5\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n    String methodName = method.getName();\n    //\u5f53\u8c03\u7528\u5173\u95ed\u7684\u65f6\u5019\uff0c\u56de\u6536\u6b64Connection\u5230PooledDataSource\u4e2d\n    if (CLOSE.hashCode() == methodName.hashCode() && CLOSE.equals(methodName)) {\n      dataSource.pushConnection(this);\n      return null;\n    } else {\n      try {\n        if (!Object.class.equals(method.getDeclaringClass())) {\n          checkConnection();\n        }\n        return method.invoke(realConnection, args);\n      } catch (Throwable t) {\n        throw ExceptionUtil.unwrapThrowable(t);\n      }\n    }\n  }\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u6211\u4eec\u4f7f\u7528\u4e86pooledDataSource.getConnection()\u8fd4\u56de\u7684Connection\u5bf9\u8c61\u7684close()\u65b9\u6cd5\u65f6\uff0c\u4e0d\u4f1a\u8c03\u7528\u771f\u6b63Connection\u7684close()\u65b9\u6cd5\uff0c\u800c\u662f\u5c06\u6b64Connection\u5bf9\u8c61\u653e\u5230\u8fde\u63a5\u6c60\u4e2d\u3002"),(0,a.kt)("h2",{id:"jndi\u7c7b\u578b\u7684\u6570\u636e\u6e90datasource"},"JNDI\u7c7b\u578b\u7684\u6570\u636e\u6e90DataSource"),(0,a.kt)("p",null,"\u5bf9\u4e8eJNDI\u7c7b\u578b\u7684\u6570\u636e\u6e90DataSource\u7684\u83b7\u53d6\u5c31\u6bd4\u8f83\u7b80\u5355\uff0cMyBatis\u5b9a\u4e49\u4e86\u4e00\u4e2aJndiDataSourceFactory\u5de5\u5382\u6765\u521b\u5efa\u901a\u8fc7JNDI\u5f62\u5f0f\u751f\u6210\u7684DataSource\u3002\n\u4e0b\u9762\u8ba9\u6211\u4eec\u770b\u4e00\u4e0bJndiDataSourceFactory\u7684\u5173\u952e\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"if (properties.containsKey(INITIAL_CONTEXT)\n        && properties.containsKey(DATA_SOURCE))\n{\n    //\u4eceJNDI\u4e0a\u4e0b\u6587\u4e2d\u627e\u5230DataSource\u5e76\u8fd4\u56de\n    Context ctx = (Context) initCtx.lookup(properties.getProperty(INITIAL_CONTEXT));\n    dataSource = (DataSource) ctx.lookup(properties.getProperty(DATA_SOURCE));\n}\nelse if (properties.containsKey(DATA_SOURCE))\n{\n    // //\u4eceJNDI\u4e0a\u4e0b\u6587\u4e2d\u627e\u5230DataSource\u5e76\u8fd4\u56de\n    dataSource = (DataSource) initCtx.lookup(properties.getProperty(DATA_SOURCE));\n}\n")))}p.isMDXComponent=!0}}]);