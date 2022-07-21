[toc]

# 1.SpringMVC框架介绍

1. spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web Flow里面。

   > Spring 框架提供了构建 Web 应用程序的全功能 MVC 模块。使用 Spring 可插入的 MVC 架构，可
   > 以选择是使用内置的 Spring Web 框架还是 Struts 这样的 Web 框架。通过策略接口，Spring 框架
   > 是高度可配置的，而且包含多种视图技术，例如 JavaServer Pages（JSP）技术、Velocity、
   > Tiles、iText 和 POI。Spring MVC 框架并不知道使用的视图，所以不会强迫您只使用 JSP 技术。
   >
   > Spring MVC 分离了控制器、模型对象、分派器以及处理程序对象的角色，这种分离让它们更容易进行定制。

2. Spring的MVC框架主要由DispatcherServlet、处理器映射、处理器(控制器)、视图解析器、视图组成。

# 2.SpringMVC原理图

![image-20220325140702447](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220325140702447.png?raw=true)

# 3.SpringMVC接口解释

DispatcherServlet接口：

> Spring提供的前端控制器，所有的请求都有经过它来统一分发。在DispatcherServlet将请求分发
> 给Spring Controller之前，需要借助于Spring提供的HandlerMapping定位到具体的Controller。

HandlerMapping接口：

> 能够完成客户请求到Controller映射。

Controller接口：

> 需要为并发用户处理上述请求，因此实现Controller接口时，必须保证线程安全并且可重用。Controller将处理用户请求，这和Struts Action扮演的角色是一致的。一旦Controller处理完用户请求，则返回ModelAndView对象给DispatcherServlet前端控制器，ModelAndView中包含了模型（Model）和视图（View）。
>
> 从宏观角度考虑，DispatcherServlet是整个Web应用的控制器；从微观考虑，Controller是单个Http请求处理过程中的控制器，而ModelAndView是Http请求过程中返回的模型（Model）和视图（View）。

ViewResolver接口：

> Spring提供的视图解析器（ViewResolver）在Web应用中查找View对象，从而将相应结果渲染给客户。

# 4.SpringMVC运行原理

1. 客户端请求提交到DispatcherServlet
2. 由DispatcherServlet控制器查询一个或多个HandlerMapping，找到处理请求的Controller
3. DispatcherServlet将请求提交到Controller
4. Controller调用业务逻辑处理后，返回ModelAndView
5. DispatcherServlet查询一个或多个ViewResoler视图解析器，找到ModelAndView指定的视图
6. 视图负责将结果显示到客户端

DispatcherServlet是整个Spring MVC的核心。它负责接收HTTP请求组织协调Spring MVC的各个组成部分。其主要工作有以下三项：

>1. 截获符合特定格式的URL请求。
>2. 初始化DispatcherServlet上下文对应的WebApplicationContext，并将其与业务层、持久化层的WebApplicationContext建立关联。
>3. 初始化Spring MVC的各个组成组件，并装配到DispatcherServlet中。
# 5.Spring MVC 的优点

1）它是基于组件技术的.全部的应用对象,无论控制器和视图,还是业务对象之类的都是 java 组件.并且和Spring 提供的其他基础结构紧密集成.
2）不依赖于 Servlet API(目标虽是如此,但是在实现的时候确实是依赖于 Servlet 的)
3）可以任意使用各种视图技术,而不仅仅局限于 JSP
4）支持各种请求资源的映射策略
5）它应是易于扩展的

