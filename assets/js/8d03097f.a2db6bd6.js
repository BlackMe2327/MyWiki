"use strict";(self.webpackChunkmy_wiki=self.webpackChunkmy_wiki||[]).push([[3506],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),u=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return a.createElement(o.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=u(t),h=r,f=d["".concat(o,".").concat(h)]||d[h]||c[h]||l;return t?a.createElement(f,i(i({ref:e},p),{},{components:t})):a.createElement(f,i({ref:e},p))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1109:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i=void 0,s={unversionedId:"Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",id:"Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",title:"ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",description:"[TOC]",source:"@site/docs/Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09.md",sourceDirName:"Language/java",slug:"/Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",permalink:"/MyWiki/docs/Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Language/java/ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0\uff08jdk1.8\uff09.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConcurrentHashMap\u5e95\u5c42\u5177\u4f53\u5b9e\u73b0\u53ca\u5b9e\u73b0\u539f\u7406",permalink:"/MyWiki/docs/Language/java/ConcurrentHashMap\u5e95\u5c42\u539f\u7406\u4ee5\u53ca\u4e0eHashTable\u7684\u533a\u522b"},next:{title:"Hash\u4e0eHashTable\u7684\u533a\u522b",permalink:"/MyWiki/docs/Language/java/HashMap\u4e0eHashTable\u7684\u533a\u522b"}},o={},u=[{value:"\u4ec0\u4e48\u60c5\u51b5\u4f1a\u89e6\u53d1ConcurrentHashMap\u6269\u5bb9",id:"\u4ec0\u4e48\u60c5\u51b5\u4f1a\u89e6\u53d1concurrenthashmap\u6269\u5bb9",level:2},{value:"transfer\u5b9e\u73b0",id:"transfer\u5b9e\u73b0",level:2}],p={toc:u};function c(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("h1",{id:"\u6df1\u5165\u5206\u6790concurrenthashmap\u7684\u6269\u5bb9\u5b9e\u73b0"},"\u6df1\u5165\u5206\u6790ConcurrentHashMap\u7684\u6269\u5bb9\u5b9e\u73b0"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u60c5\u51b5\u4f1a\u89e6\u53d1concurrenthashmap\u6269\u5bb9"},"\u4ec0\u4e48\u60c5\u51b5\u4f1a\u89e6\u53d1ConcurrentHashMap\u6269\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\uff1a")),(0,r.kt)("p",null,"\u5982\u679c\u65b0\u589e\u8282\u70b9\u4e4b\u540e\uff0c\u6240\u5728\u94fe\u8868\u7684\u5143\u7d20\u4e2a\u6570\u8fbe\u5230\u4e86\u9608\u503c 8\uff0c\u5219\u4f1a\u8c03\u7528 treeifyBin \u65b9\u6cd5\u628a\u94fe\u8868\u8f6c\u6362\u6210\u7ea2\n\u9ed1\u6811\uff0c\u4e0d\u8fc7\u5728\u7ed3\u6784\u8f6c\u6362\u4e4b\u524d\uff0c\u4f1a\u5bf9\u6570\u7ec4\u957f\u5ea6\u8fdb\u884c\u5224\u65ad\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final void treeifyBin(Node<K,V>[] tab, int index) {\n    Node<K,V> b; int n, sc;\n    if (tab != null) {\n        //\u5224\u65ad\u6570\u7ec4\u957f\u5ea6n\u662f\u5426\u5c0f\u4e8e\u9608\u503c MIN_TREEIFY_CAPACITY \uff0c\u9ed8\u8ba4\u662f64\n        if ((n = tab.length) < MIN_TREEIFY_CAPACITY)\n            tryPresize(n << 1);\n        else if ((b = tabAt(tab, index)) != null && b.hash >= 0) {\n            synchronized (b) {\n                if (tabAt(tab, index) == b) {\n                    TreeNode<K,V> hd = null, tl = null;\n                    for (Node<K,V> e = b; e != null; e = e.next) {\n                        TreeNode<K,V> p =\n                            new TreeNode<K,V>(e.hash, e.key, e.val,\n                                              null, null);\n                        if ((p.prev = tl) == null)\n                            hd = p;\n                        else\n                            tl.next = p;\n                        tl = p;\n                    }\n                    setTabAt(tab, index, new TreeBin<K,V>(hd));\n                }\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u6570\u7ec4\u957f\u5ea6n\u5c0f\u4e8e\u9608\u503c MIN_TREEIFY_CAPACITY \uff0c\u9ed8\u8ba4\u662f64\uff0c\u5219\u4f1a\u8c03\u7528 tryPresize \u65b9\u6cd5\u628a\u6570\u7ec4\u957f\u5ea6\u6269\u5927\u5230\u539f\u6765\u7684\u4e24\u500d\uff0c\u5e76\u89e6\u53d1 transfer \u65b9\u6cd5\uff0c\u91cd\u65b0\u8c03\u6574\u8282\u70b9\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private final void tryPresize(int size) {\n    int c = (size >= (MAXIMUM_CAPACITY >>> 1)) ? MAXIMUM_CAPACITY :\n    tableSizeFor(size + (size >>> 1) + 1);\n    int sc;\n    while ((sc = sizeCtl) >= 0) {\n        Node<K,V>[] tab = table; int n;\n        if (tab == null || (n = tab.length) == 0) {\n            n = (sc > c) ? sc : c;\n            if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {\n                try {\n                    if (table == tab) {\n                        @SuppressWarnings("unchecked")\n                        Node<K,V>[] nt = (Node<K,V>[])new Node<?,?>[n];\n                        table = nt;\n                        sc = n - (n >>> 2);\n                    }\n                } finally {\n                    sizeCtl = sc;\n                }\n            }\n        }\n        else if (c <= sc || n >= MAXIMUM_CAPACITY)\n            break;\n        else if (tab == table) {\n            int rs = resizeStamp(n);\n            if (sc < 0) {\n                Node<K,V>[] nt;\n                if ((sc >>> RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||\n                    sc == rs + MAX_RESIZERS || (nt = nextTable) == null ||\n                    transferIndex <= 0)\n                    break;\n                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))\n                    transfer(tab, nt);\n            }\n            else if (U.compareAndSwapInt(this, SIZECTL, sc,\n                                         (rs << RESIZE_STAMP_SHIFT) + 2))\n                //\u8c03\u7528transfer\u65b9\u6cd5\uff0c\u91cd\u65b0\u8c03\u6574\u8282\u70b9\u7684\u4f4d\u7f6e\n                transfer(tab, null);\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\uff1a")),(0,r.kt)("p",null,"\u65b0\u589e\u8282\u70b9\u4e4b\u540e\uff0c\u4f1a\u8c03\u7528 addCount \u65b9\u6cd5\u8bb0\u5f55\u5143\u7d20\u4e2a\u6570\uff0c\u5e76\u68c0\u67e5\u662f\u5426\u9700\u8981\u8fdb\u884c\u6269\u5bb9\uff0c\u5f53\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u8fbe\u5230\u9608\u503c\u65f6\uff0c\u4f1a\u89e6\u53d1 transfer \u65b9\u6cd5\uff0c\u91cd\u65b0\u8c03\u6574\u8282\u70b9\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private final void addCount(long x, int check) {\n    CounterCell[] as; long b, s;\n    if ((as = counterCells) != null ||\n        !U.compareAndSwapLong(this, BASECOUNT, b = baseCount, s = b + x)) {\n        CounterCell a; long v; int m;\n        boolean uncontended = true;\n        if (as == null || (m = as.length - 1) < 0 ||\n            (a = as[ThreadLocalRandom.getProbe() & m]) == null ||\n            !(uncontended =\n              U.compareAndSwapLong(a, CELLVALUE, v = a.value, v + x))) {\n            fullAddCount(x, uncontended);\n            return;\n        }\n        if (check <= 1)\n            return;\n        s = sumCount();\n    }\n    if (check >= 0) {\n        Node<K,V>[] tab, nt; int n, sc;\n        while (s >= (long)(sc = sizeCtl) && (tab = table) != null &&\n               (n = tab.length) < MAXIMUM_CAPACITY) {\n            int rs = resizeStamp(n);\n            if (sc < 0) {\n                if ((sc >>> RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||\n                    sc == rs + MAX_RESIZERS || (nt = nextTable) == null ||\n                    transferIndex <= 0)\n                    break;\n                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))\n                    transfer(tab, nt);\n            }\n            else if (U.compareAndSwapInt(this, SIZECTL, sc,\n                                         (rs << RESIZE_STAMP_SHIFT) + 2))\n                //\u8c03\u7528transfer\u65b9\u6cd5\uff0c\u91cd\u65b0\u8c03\u6574\u8282\u70b9\u7684\u4f4d\u7f6e\n                transfer(tab, null);\n            s = sumCount();\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"transfer\u5b9e\u73b0"},"transfer\u5b9e\u73b0"),(0,r.kt)("p",null,"transfer \u65b9\u6cd5\u5b9e\u73b0\u4e86\u5728\u5e76\u53d1\u7684\u60c5\u51b5\u4e0b\uff0c\u9ad8\u6548\u7684\u4ece\u539f\u59cb\u7ec4\u6570\u5f80\u65b0\u6570\u7ec4\u4e2d\u79fb\u52a8\u5143\u7d20\uff0c\u5047\u8bbe\u6269\u5bb9\u4e4b\u524d\u8282\u70b9\u7684\u5206\u5e03\u5982\u4e0b\uff0c\u8fd9\u91cc\u533a\u5206\u84dd\u8272\u8282\u70b9\u548c\u7ea2\u8272\u8282\u70b9\uff0c\u662f\u4e3a\u4e86\u540e\u7eed\u66f4\u597d\u7684\u5206\u6790\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322195352533.png?raw=true",alt:"image-20220322195352533"})),(0,r.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u7b2c14\u4e2a\u69fd\u4f4d\u63d2\u5165\u65b0\u8282\u70b9\u4e4b\u540e\uff0c\u94fe\u8868\u5143\u7d20\u4e2a\u6570\u5df2\u7ecf\u8fbe\u5230\u4e868\uff0c\u4e14\u6570\u7ec4\u957f\u5ea6\u4e3a16\uff0c\u4f18\u5148\u901a\u8fc7\u6269\u5bb9\u6765\u7f13\u89e3\u94fe\u8868\u8fc7\u957f\u7684\u95ee\u9898\uff0c\u5b9e\u73b0\u5982\u4e0b\uff1a\n1\u3001\u6839\u636e\u5f53\u524d\u6570\u7ec4\u957f\u5ea6n\uff0c\u65b0\u5efa\u4e00\u4e2a\u4e24\u500d\u957f\u5ea6\u7684\u6570\u7ec4 nextTable \uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'if (nextTab == null) {            // initiating\n    try {\n        @SuppressWarnings("unchecked")\n        Node<K,V>[] nt = (Node<K,V>[])new Node<?,?>[n << 1];\n        nextTab = nt;\n    } catch (Throwable ex) {      // try to cope with OOME\n        sizeCtl = Integer.MAX_VALUE;\n        return;\n    }\n    nextTable = nextTab;\n    transferIndex = n;\n}\n')),(0,r.kt)("p",null,"2\u3001\u521d\u59cb\u5316 ForwardingNode \u8282\u70b9\uff0c\u5176\u4e2d\u4fdd\u5b58\u4e86\u65b0\u6570\u7ec4 nextTable \u7684\u5f15\u7528\uff0c\u5728\u5904\u7406\u5b8c\u6bcf\u4e2a\u69fd\u4f4d\u7684\u8282\u70b9\u4e4b\u540e\u5f53\u505a\u5360\u4f4d\u8282\u70b9\uff0c\u8868\u793a\u8be5\u69fd\u4f4d\u5df2\u7ecf\u5904\u7406\u8fc7\u4e86\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int nextn = nextTab.length;\nForwardingNode<K,V> fwd = new ForwardingNode<K,V>(nextTab);\nboolean advance = true;\nboolean finishing = false; // to ensure sweep before committing nextTab\n")),(0,r.kt)("p",null,"3\u3001\u901a\u8fc7 for \u81ea\u5faa\u73af\u5904\u7406\u6bcf\u4e2a\u69fd\u4f4d\u4e2d\u7684\u94fe\u8868\u5143\u7d20\uff0c\u9ed8\u8ba4 advace \u4e3a\u771f\uff0c\u901a\u8fc7CAS\u8bbe\u7f6e transferIndex \u5c5e\u6027\u503c\uff0c\u5e76\u521d\u59cb\u5316 i \u548c bound \u503c\uff0c i \u6307\u5f53\u524d\u5904\u7406\u7684\u69fd\u4f4d\u5e8f\u53f7\uff0c bound \u6307\u9700\u8981\u5904\u7406\u7684\u69fd\u4f4d\u8fb9\u754c\uff0c\u5148\u5904\u7406\u69fd\u4f4d15\u7684\u8282\u70b9\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"for (int i = 0, bound = 0;;) {\n    Node<K,V> f; int fh;\n    while (advance) {\n        int nextIndex, nextBound;\n        if (--i >= bound || finishing)\n            advance = false;\n        else if ((nextIndex = transferIndex) <= 0) {\n            i = -1;\n            advance = false;\n        }\n        else if (U.compareAndSwapInt\n                 (this, TRANSFERINDEX, nextIndex,\n                  nextBound = (nextIndex > stride ?\n                               nextIndex - stride : 0))) {\n            bound = nextBound;\n            i = nextIndex - 1;\n            advance = false;\n        }\n    }\n    ......\n}\n")),(0,r.kt)("p",null,"4\u3001\u5728\u5f53\u524d\u5047\u8bbe\u6761\u4ef6\u4e0b\uff0c\u69fd\u4f4d15\u4e2d\u6ca1\u6709\u8282\u70b9\uff0c\u5219\u901a\u8fc7CAS\u63d2\u5165\u5728\u7b2c\u4e8c\u6b65\u4e2d\u521d\u59cb\u5316\u7684 ForwardingNode \u8282\u70b9\uff0c\u7528\u4e8e\u544a\u8bc9\u5176\u5b83\u7ebf\u7a0b\u8be5\u69fd\u4f4d\u5df2\u7ecf\u5904\u7406\u8fc7\u4e86\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"else if ((f = tabAt(tab, i)) == null)\n     advance = casTabAt(tab, i, null, fwd);\n")),(0,r.kt)("p",null,"5\u3001\u5982\u679c\u69fd\u4f4d15\u5df2\u7ecf\u88ab\u7ebf\u7a0bA\u5904\u7406\u4e86\uff0c\u90a3\u4e48\u7ebf\u7a0bB\u5904\u7406\u5230\u8fd9\u4e2a\u8282\u70b9\u65f6\uff0c\u53d6\u5230\u8be5\u8282\u70b9\u7684hash\u503c\u5e94\u8be5\u4e3aMOVED \uff0c\u503c\u4e3a -1 \uff0c\u5219\u76f4\u63a5\u8df3\u8fc7\uff0c\u7ee7\u7eed\u5904\u7406\u4e0b\u4e00\u4e2a\u69fd\u4f4d14\u7684\u8282\u70b9\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"else if ((fh = f.hash) == MOVED)\n    advance = true; // already processed\n")),(0,r.kt)("p",null,"6\u3001\u5904\u7406\u69fd\u4f4d14\u7684\u8282\u70b9\uff0c\u662f\u4e00\u4e2a\u94fe\u8868\u7ed3\u6784\uff0c\u5148\u5b9a\u4e49\u4e24\u4e2a\u53d8\u91cf\u8282\u70b9 ln \u548c hn \uff0c\u6309\u6211\u7684\u7406\u89e3\u5e94\u8be5\u662f lowNode\u548c highNode \uff0c\u5206\u522b\u4fdd\u5b58hash\u503c\u7684\u7b2cX\u4f4d\u4e3a0\u548c1\u7684\u8282\u70b9\uff0c\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"synchronized (f) {\n    if (tabAt(tab, i) == f) {\n        Node<K,V> ln, hn;\n        if (fh >= 0) {\n            int runBit = fh & n;\n            Node<K,V> lastRun = f;\n            for (Node<K,V> p = f.next; p != null; p = p.next) {\n                //\u5904\u7406\n                int b = p.hash & n;\n                if (b != runBit) {\n                    runBit = b;\n                    lastRun = p;\n                }\n            }\n            if (runBit == 0) {\n                ln = lastRun;\n                hn = null;\n            }\n            else {\n                hn = lastRun;\n                ln = null;\n            }\n            for (Node<K,V> p = f; p != lastRun; p = p.next) {\n                int ph = p.hash; K pk = p.key; V pv = p.val;\n                if ((ph & n) == 0)\n                    ln = new Node<K,V>(ph, pk, pv, ln);\n                else\n                    hn = new Node<K,V>(ph, pk, pv, hn);\n            }\n            setTabAt(nextTab, i, ln);\n            setTabAt(nextTab, i + n, hn);\n            setTabAt(tab, i, fwd);\n            advance = true;\n        }\n    }\n")),(0,r.kt)("p",null,"\u4f7f\u7528 fn&n \u53ef\u4ee5\u5feb\u901f\u628a\u94fe\u8868\u4e2d\u7684\u5143\u7d20\u533a\u5206\u6210\u4e24\u7c7b\uff0cA\u7c7b\u662fhash\u503c\u7684\u7b2cX\u4f4d\u4e3a0\uff0cB\u7c7b\u662fhash\u503c\u7684\u7b2cX\u4f4d\u4e3a\n1\uff0c\u5e76\u901a\u8fc7 lastRun \u8bb0\u5f55\u6700\u540e\u9700\u8981\u5904\u7406\u7684\u8282\u70b9\uff0cA\u7c7b\u548cB\u7c7b\u8282\u70b9\u53ef\u4ee5\u5206\u6563\u5230\u65b0\u6570\u7ec4\u7684\u69fd\u4f4d14\u548c30\u4e2d\uff0c\u5728\u539f\u6570\u7ec4\u7684\u69fd\u4f4d14\u4e2d\uff0c\u84dd\u8272\u8282\u70b9\u7b2cX\u4e3a0\uff0c\u7ea2\u8272\u8282\u70b9\u7b2cX\u4e3a1\uff0c\u628a\u94fe\u8868\u62c9\u5e73\u663e\u793a\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200408419.png?raw=true",alt:"image-20220322200408419"})),(0,r.kt)("p",null,"1\u3001\u901a\u8fc7\u904d\u5386\u94fe\u8868\uff0c\u8bb0\u5f55 runBit \u548c lastRun \uff0c\u5206\u522b\u4e3a1\u548c\u8282\u70b96\uff0c\u6240\u4ee5\u8bbe\u7f6e hn \u4e3a\u8282\u70b96\uff0c ln \u4e3anull\uff1b\n2\u3001\u91cd\u65b0\u904d\u5386\u94fe\u8868\uff0c\u4ee5 lastRun \u8282\u70b9\u4e3a\u7ec8\u6b62\u6761\u4ef6\uff0c\u6839\u636e\u7b2cX\u4f4d\u7684\u503c\u5206\u522b\u6784\u9020ln\u94fe\u8868\u548chn\u94fe\u8868\uff1a"),(0,r.kt)("p",null,"ln\u94fe\uff1a\u548c\u539f\u6765\u94fe\u8868\u76f8\u6bd4\uff0c\u987a\u5e8f\u5df2\u7ecf\u4e0d\u4e00\u6837\u4e86"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200538417.png?raw=true",alt:"image-20220322200538417"})),(0,r.kt)("p",null,"hn\u94fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200434886.png?raw=true",alt:"image-20220322200434886"})),(0,r.kt)("p",null,"\u901a\u8fc7CAS\u628aln\u94fe\u8868\u8bbe\u7f6e\u5230\u65b0\u6570\u7ec4\u7684i\u4f4d\u7f6e\uff0chn\u94fe\u8868\u8bbe\u7f6e\u5230i+n\u7684\u4f4d\u7f6e\uff1b"),(0,r.kt)("p",null,"7\u3001\u5982\u679c\u8be5\u69fd\u4f4d\u662f\u7ea2\u9ed1\u6811\u7ed3\u6784\uff0c\u5219\u6784\u9020\u6811\u8282\u70b9 lo \u548c hi \uff0c\u904d\u5386\u7ea2\u9ed1\u6811\u4e2d\u7684\u8282\u70b9\uff0c\u540c\u6837\u6839\u636e hash&n \u7b97\u6cd5\uff0c\u628a\u8282\u70b9\u5206\u4e3a\u4e24\u7c7b\uff0c\u5206\u522b\u63d2\u5165\u5230 lo \u548c hi \u4e3a\u5934\u7684\u94fe\u8868\u4e2d\uff0c\u6839\u636e lo \u548c hi \u94fe\u8868\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u5206\u522b\u751f\u6210 ln \u548chn \u8282\u70b9\uff0c\u5176\u4e2d ln \u8282\u70b9\u7684\u751f\u6210\u903b\u8f91\u5982\u4e0b\uff1a\n\uff081\uff09\u5982\u679c lo \u94fe\u8868\u7684\u5143\u7d20\u4e2a\u6570\u5c0f\u4e8e\u7b49\u4e8e UNTREEIFY_THRESHOLD \uff0c\u9ed8\u8ba4\u4e3a6\uff0c\u5219\u901a\u8fc7 untreeify \u65b9\u6cd5\u628a\u6811\u8282\u70b9\u94fe\u8868\u8f6c\u5316\u6210\u666e\u901a\u8282\u70b9\u94fe\u8868\uff1b\n\uff082\uff09\u5426\u5219\u5224\u65ad hi \u94fe\u8868\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u662f\u5426\u7b49\u4e8e0\uff1a\u5982\u679c\u7b49\u4e8e0\uff0c\u8868\u793a lo \u94fe\u8868\u4e2d\u5305\u542b\u4e86\u6240\u6709\u539f\u59cb\u8282\u70b9\uff0c\u5219\u8bbe\u7f6e\u539f\u59cb\u7ea2\u9ed1\u6811\u7ed9 ln \uff0c\u5426\u5219\u6839\u636e lo \u94fe\u8868\u91cd\u65b0\u6784\u9020\u7ea2\u9ed1\u6811\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"else if (f instanceof TreeBin) {\n    TreeBin<K,V> t = (TreeBin<K,V>)f;\n    TreeNode<K,V> lo = null, loTail = null;\n    TreeNode<K,V> hi = null, hiTail = null;\n    int lc = 0, hc = 0;\n    for (Node<K,V> e = t.first; e != null; e = e.next) {\n        int h = e.hash;\n        TreeNode<K,V> p = new TreeNode<K,V>\n            (h, e.key, e.val, null, null);\n        if ((h & n) == 0) {\n            if ((p.prev = loTail) == null)\n                lo = p;\n            else\n                loTail.next = p;\n            loTail = p;\n            ++lc;\n        }\n        else {\n            if ((p.prev = hiTail) == null)\n                hi = p;\n            else\n                hiTail.next = p;\n            hiTail = p;\n            ++hc;\n        }\n    }\n    //\u5904\u7406ln\u94fe\u548chn\u94fe\n    ln = (lc <= UNTREEIFY_THRESHOLD) ? untreeify(lo) :\n    (hc != 0) ? new TreeBin<K,V>(lo) : t;\n    hn = (hc <= UNTREEIFY_THRESHOLD) ? untreeify(hi) :\n    (lc != 0) ? new TreeBin<K,V>(hi) : t;\n    setTabAt(nextTab, i, ln);\n    setTabAt(nextTab, i + n, hn);\n    setTabAt(tab, i, fwd);\n    advance = true;\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u540c\u6837\u7684\u901a\u8fc7CAS\u628a ln \u8bbe\u7f6e\u5230\u65b0\u6570\u7ec4\u7684 i \u4f4d\u7f6e\uff0c hn \u8bbe\u7f6e\u5230 i+n \u4f4d\u7f6e\u3002"))}c.isMDXComponent=!0}}]);