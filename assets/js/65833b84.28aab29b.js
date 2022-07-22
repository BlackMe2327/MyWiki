"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[3475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,O=c["".concat(i,".").concat(m)]||c[m]||N[m]||l;return n?a.createElement(O,o(o({ref:t},p),{},{components:n})):a.createElement(O,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,u={unversionedId:"DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5",id:"DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5",title:"\u5e38\u7528sql\u8bed\u53e5",description:"[toc]",source:"@site/docs/DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5.md",sourceDirName:"DataBase/Mysql",slug:"/DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5",permalink:"/MyWiki/docs/DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DataBase/Mysql/\u5e38\u7528sql\u8bed\u53e5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u7684\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u4e0e\u51fd\u6570\u3001\u89e6\u53d1\u5668",permalink:"/MyWiki/docs/DataBase/Mysql/Mysql\u7684\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u4e0e\u51fd\u6570\u3001\u89e6\u53d1\u5668"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/MyWiki/docs/category/\u6570\u636e\u7ed3\u6784"}},i={},s=[{value:"4.1.INNER JOIN",id:"41inner-join",level:2},{value:"4.2.LEFT JOIN",id:"42left-join",level:2},{value:"4.3.RIGHT JOIN",id:"43right-join",level:2},{value:"4.4.UNION",id:"44union",level:2},{value:"4.5.UNION ALL",id:"45union-all",level:2},{value:"4.6.FULL JOIN",id:"46full-join",level:2},{value:"5.1.MySQL\u5b50\u67e5\u8be2\u5728WHERE\u5b50\u53e5\u4e2d",id:"51mysql\u5b50\u67e5\u8be2\u5728where\u5b50\u53e5\u4e2d",level:2},{value:"5.1.1.MySQL\u5b50\u67e5\u8be2\u4e0e\u6bd4\u8f83\u8fd0\u7b97\u7b26",id:"511mysql\u5b50\u67e5\u8be2\u4e0e\u6bd4\u8f83\u8fd0\u7b97\u7b26",level:3},{value:"5.1.2.\u5177\u6709IN\u548cNOT IN\u8fd0\u7b97\u7b26\u7684MySQL\u5b50\u67e5\u8be2",id:"512\u5177\u6709in\u548cnot-in\u8fd0\u7b97\u7b26\u7684mysql\u5b50\u67e5\u8be2",level:3},{value:"5.2.FROM\u5b50\u53e5\u4e2d\u7684MySQL\u5b50\u67e5\u8be2",id:"52from\u5b50\u53e5\u4e2d\u7684mysql\u5b50\u67e5\u8be2",level:2},{value:"5.3.MySQL\u76f8\u5173\u5b50\u67e5\u8be2",id:"53mysql\u76f8\u5173\u5b50\u67e5\u8be2",level:2},{value:"5.4.MySQL\u5b50\u67e5\u8be2\u4e0eEXISTS\u548cNOT EXISTS",id:"54mysql\u5b50\u67e5\u8be2\u4e0eexists\u548cnot-exists",level:2}],p={toc:s};function N(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[toc]"),(0,r.kt)("h1",{id:"1sql\u8bed\u53e5\u7684\u5206\u7c7b"},"1.sql\u8bed\u53e5\u7684\u5206\u7c7b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00DDL\uff08Data Ddefinition Language\uff09CREATE\uff0cDROP\uff0cALTER \u4e3b\u8981\u4e3a\u4ee5\u4e0a\u64cd\u4f5c \u5373\u5bf9\u903b\u8f91\u7ed3\u6784\u7b49\u6709\u64cd\u4f5c\u7684\uff0c\u5176\u4e2d\u5305\u62ec\u8868\u7ed3\u6784\uff0c\u89c6\u56fe\u548c\u7d22\u5f15\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u67e5\u8be2\u8bed\u8a00DQL\uff08Data Query Language\uff09SELECT\u8fd9\u4e2a\u8f83\u4e3a\u597d\u7406\u89e3 \u5373\u67e5\u8be2\u64cd\u4f5c\uff0c\u4ee5select\u5173\u952e\u5b57\u3002\u5404\u79cd\u7b80\u5355\u67e5\u8be2\uff0c\u8fde\u63a5\u67e5\u8be2\u7b49 \u90fd\u5c5e\u4e8eDQL\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00DML\uff08Data Manipulation Language\uff09INSERT\uff0cUPDATE\uff0cDELETE"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u63a7\u5236\u529f\u80fdDCL\uff08Data Control Language\uff09GRANT\uff0cREVOKE\uff0cCOMMIT\uff0cROLLBACK")),(0,r.kt)("h1",{id:"2\u8d85\u952e\u5019\u9009\u952e\u4e3b\u952e\u5916\u952e"},"2.\u8d85\u952e\u3001\u5019\u9009\u952e\u3001\u4e3b\u952e\u3001\u5916\u952e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8d85\u952e\uff1a\u5728\u5173\u7cfb\u4e2d\u80fd\u552f\u4e00\u6807\u8bc6\u5143\u7ec4\u7684\u5c5e\u6027\u96c6\u79f0\u4e3a\u5173\u7cfb\u6a21\u5f0f\u7684\u8d85\u952e\u3002\u4e00\u4e2a\u5c5e\u6027\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u8d85\u952e\uff0c\u591a\u4e2a\u5c5e\u6027\u7ec4\u5408\u5728\u4e00\u8d77\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u8d85\u952e\u3002\u8d85\u952e\u5305\u542b\u5019\u9009\u952e\u548c\u4e3b\u952e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5019\u9009\u952e\uff1a\u662f \u5c0f\u8d85\u952e\uff0c\u5373\u6ca1\u6709\u5197\u4f59\u5143\u7d20\u7684\u8d85\u952e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3b\u952e\uff1a\u6570\u636e\u5e93\u8868\u4e2d\u5bf9\u50a8\u5b58\u6570\u636e\u5bf9\u8c61\u4e88\u4ee5\u552f\u4e00\u548c\u5b8c\u6574\u6807\u8bc6\u7684\u6570\u636e\u5217\u6216\u5c5e\u6027\u7684\u7ec4\u5408\u3002\u4e00\u4e2a\u6570\u636e\u5217\u53ea\u80fd\u6709\u4e00\u4e2a\u4e3b\u952e\uff0c\u4e14\u4e3b\u952e\u7684\u53d6\u503c\u4e0d\u80fd\u7f3a\u5931\uff0c\u5373\u4e0d\u80fd\u4e3a\u7a7a\u503c\uff08Null\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5916\u952e\uff1a\u5728\u4e00\u4e2a\u8868\u4e2d\u5b58\u5728\u7684\u53e6\u4e00\u4e2a\u8868\u7684\u4e3b\u952e\u79f0\u6b64\u8868\u7684\u5916\u952e\u3002")),(0,r.kt)("h1",{id:"3sql\u7ea6\u675f"},"3.SQL\u7ea6\u675f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"NOT NULL: \u7528\u4e8e\u63a7\u5236\u5b57\u6bb5\u7684\u5185\u5bb9\u4e00\u5b9a\u4e0d\u80fd\u4e3a\u7a7a\uff08NULL\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"UNIQUE: \u63a7\u4ef6\u5b57\u6bb5\u5185\u5bb9\u4e0d\u80fd\u91cd\u590d\uff0c\u4e00\u4e2a\u8868\u5141\u8bb8\u6709\u591a\u4e2a Unique \u7ea6\u675f\u3002"),(0,r.kt)("li",{parentName:"ol"},"PRIMARY KEY: \u4e5f\u662f\u7528\u4e8e\u63a7\u4ef6\u5b57\u6bb5\u5185\u5bb9\u4e0d\u80fd\u91cd\u590d\uff0c\u4f46\u5b83\u5728\u4e00\u4e2a\u8868\u53ea\u5141\u8bb8\u51fa\u73b0\u4e00\u4e2a\u3002"),(0,r.kt)("li",{parentName:"ol"},"FOREIGN KEY: \u7528\u4e8e\u9884\u9632\u7834\u574f\u8868\u4e4b\u95f4\u8fde\u63a5\u7684\u52a8\u4f5c\uff0c\u4e5f\u80fd\u9632\u6b62\u975e\u6cd5\u6570\u636e\u63d2\u5165\u5916\u952e\u5217\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u662f\u5b83\u6307\u5411\u7684\u90a3\u4e2a\u8868\u4e2d\u7684\u503c\u4e4b\u4e00\u3002"),(0,r.kt)("li",{parentName:"ol"},"CHECK: \u7528\u4e8e\u63a7\u5236\u5b57\u6bb5\u7684\u503c\u8303\u56f4\u3002")),(0,r.kt)("h1",{id:"4\u5173\u8054\u67e5\u8be2"},"4.\u5173\u8054\u67e5\u8be2"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5185\u8fde\u63a5\uff08INNER JOIN\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5916\u8fde\u63a5\uff08LEFT JOIN/RIGHT JOIN\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u8054\u5408\u67e5\u8be2\uff08UNION\u4e0eUNION ALL\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5168\u8fde\u63a5\uff08FULL JOIN\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u4ea4\u53c9\u8fde\u63a5\uff08CROSS JOIN\uff09")),(0,r.kt)("h2",{id:"41inner-join"},"4.1.INNER JOIN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;\n/*\u4ee5\u4e0asql\u7b49\u4ef7\u4e8e*/\nSELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author;\n")),(0,r.kt)("h2",{id:"42left-join"},"4.2.LEFT JOIN"),(0,r.kt)("p",null,"LEFT JOIN \u4f1a\u8bfb\u53d6\u5de6\u8fb9\u6570\u636e\u8868\u7684\u5168\u90e8\u6570\u636e\uff0c\u5373\u4fbf\u53f3\u8fb9\u8868\u65e0\u5bf9\u5e94\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a LEFT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;\n")),(0,r.kt)("h2",{id:"43right-join"},"4.3.RIGHT JOIN"),(0,r.kt)("p",null,"RIGHT JOIN \u4f1a\u8bfb\u53d6\u53f3\u8fb9\u6570\u636e\u8868\u7684\u5168\u90e8\u6570\u636e\uff0c\u5373\u4fbf\u5de6\u8fb9\u8fb9\u8868\u65e0\u5bf9\u5e94\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a RIGHT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;\n")),(0,r.kt)("h2",{id:"44union"},"4.4.UNION"),(0,r.kt)("p",null,"\u8054\u5408\u67e5\u8be2\u7684\u5217\u6570\u8981\u76f8\u7b49\uff0c\u4f7f\u7528UNION \u76f8\u540c\u7684\u8bb0\u5f55\u884c\u4f1a\u5408\u5e76"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT country FROM Websites\nUNION\nSELECT country FROM apps\nORDER BY country;\n")),(0,r.kt)("h2",{id:"45union-all"},"4.5.UNION ALL"),(0,r.kt)("p",null,"\u8054\u5408\u67e5\u8be2\u7684\u5217\u6570\u8981\u76f8\u7b49\uff0c\u4f7f\u7528UNION ALL\u76f8\u540c\u7684\u8bb0\u5f55\u884c\u4e0d\u4f1a\u5408\u5e76"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT country FROM Websites\nUNION ALL\nSELECT country FROM apps\nORDER BY country;\n")),(0,r.kt)("h2",{id:"46full-join"},"4.6.FULL JOIN"),(0,r.kt)("p",null,"MySQL\u4e0d\u652f\u6301\u5168\u8fde\u63a5,\u53ef\u4ee5\u4f7f\u7528LEFT JOIN \u548cUNION\u548cRIGHT JOIN\u8054\u5408\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM A LEFT JOIN B ON A.id=B.id UNION SELECT * FROM A RIGHT JOIN B ON A.id=B.id\n")),(0,r.kt)("h1",{id:"5\u5b50\u67e5\u8be2"},"5.\u5b50\u67e5\u8be2"),(0,r.kt)("p",null,"MySQL\u5b50\u67e5\u8be2\u79f0\u4e3a\u5185\u90e8\u67e5\u8be2\uff0c\u800c\u5305\u542b\u5b50\u67e5\u8be2\u7684\u67e5\u8be2\u79f0\u4e3a\u5916\u90e8\u67e5\u8be2\u3002 \u5b50\u67e5\u8be2\u53ef\u4ee5\u5728\u4f7f\u7528\u8868\u8fbe\u5f0f\u7684\u4efb\u4f55\u5730\u65b9\u4f7f\u7528\uff0c\u5e76\u4e14\u5fc5\u987b\u5728\u62ec\u53f7\u4e2d\u5173\u95ed\u3002"),(0,r.kt)("h2",{id:"51mysql\u5b50\u67e5\u8be2\u5728where\u5b50\u53e5\u4e2d"},"5.1.MySQL\u5b50\u67e5\u8be2\u5728WHERE\u5b50\u53e5\u4e2d"),(0,r.kt)("h3",{id:"511mysql\u5b50\u67e5\u8be2\u4e0e\u6bd4\u8f83\u8fd0\u7b97\u7b26"},"5.1.1.MySQL\u5b50\u67e5\u8be2\u4e0e\u6bd4\u8f83\u8fd0\u7b97\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    customerNumber,\n    checkNumber,\n    amount \nFROM\n    payments \nWHERE\n    amount = ( SELECT MAX( amount ) FROM payments );\n")),(0,r.kt)("h3",{id:"512\u5177\u6709in\u548cnot-in\u8fd0\u7b97\u7b26\u7684mysql\u5b50\u67e5\u8be2"},"5.1.2.\u5177\u6709IN\u548cNOT IN\u8fd0\u7b97\u7b26\u7684MySQL\u5b50\u67e5\u8be2"),(0,r.kt)("p",null,"\u5982\u679c\u5b50\u67e5\u8be2\u8fd4\u56de\u591a\u4e2a\u503c\uff0c\u5219\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),"\u5b50\u53e5\u4e2d\u4f7f\u7528IN\u6216NOT IN\u8fd0\u7b97\u7b26\u7b49\u5176\u4ed6\u8fd0\u7b97\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    customerName \nFROM\n    customers \nWHERE\n    customerNumber NOT IN ( SELECT DISTINCT customerNumber FROM orders );\n")),(0,r.kt)("h2",{id:"52from\u5b50\u53e5\u4e2d\u7684mysql\u5b50\u67e5\u8be2"},"5.2.FROM\u5b50\u53e5\u4e2d\u7684MySQL\u5b50\u67e5\u8be2"),(0,r.kt)("p",null,"\u5728FROM\u5b50\u53e5\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2\u65f6\uff0c\u4ece\u5b50\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u96c6\u5c06\u7528\u4f5c\u4e34\u65f6\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    MAX( items ),\n    MIN( items ),\n    FLOOR(\n    AVG( items )) \nFROM\n    ( SELECT orderNumber, COUNT( orderNumber ) AS items FROM orderdetails GROUP BY orderNumber ) AS lineitems;\n")),(0,r.kt)("h2",{id:"53mysql\u76f8\u5173\u5b50\u67e5\u8be2"},"5.3.MySQL\u76f8\u5173\u5b50\u67e5\u8be2"),(0,r.kt)("p",null,"\u4e0e\u72ec\u7acb\u5b50\u67e5\u8be2\u4e0d\u540c\uff0c\u76f8\u5173\u5b50\u67e5\u8be2\u662f\u4f7f\u7528\u5916\u90e8\u67e5\u8be2\u4e2d\u7684\u6570\u636e\u7684\u5b50\u67e5\u8be2\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u76f8\u5173\u7684\u5b50\u67e5\u8be2\u53d6\u51b3\u4e8e\u5916\u90e8\u67e5\u8be2\u3002 \u5bf9\u5916\u90e8\u67e5\u8be2\u4e2d\u7684\u6bcf\u4e00\u884c\u5bf9\u76f8\u5173\u5b50\u67e5\u8be2\u8fdb\u884c\u4e00\u6b21\u8bc4\u4f30\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    productname,\n    buyprice \nFROM\n    products p1 \nWHERE\n    buyprice > ( SELECT AVG( buyprice ) FROM products WHERE productline = p1.productline );\n")),(0,r.kt)("h2",{id:"54mysql\u5b50\u67e5\u8be2\u4e0eexists\u548cnot-exists"},"5.4.MySQL\u5b50\u67e5\u8be2\u4e0eEXISTS\u548cNOT EXISTS"),(0,r.kt)("p",null,"\u5f53\u5b50\u67e5\u8be2\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"EXISTS"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"NOT EXISTS"),"\u8fd0\u7b97\u7b26\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u5b50\u67e5\u8be2\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"FALSE"),"\u7684\u503c\u3002\u4ee5\u4e0b\u67e5\u8be2\u8bf4\u660e\u4e86\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"EXISTS"),"\u8fd0\u7b97\u7b26\u4e00\u8d77\u4f7f\u7528\u7684\u5b50\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    * \nFROM\n    table_name \nWHERE\n    EXISTS ( \u5b50\u67e5\u8be2 );\n")))}N.isMDXComponent=!0}}]);