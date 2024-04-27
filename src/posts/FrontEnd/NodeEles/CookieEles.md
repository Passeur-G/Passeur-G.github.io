---
title: "Token、Session"
author: Passeur-高
date: 2024-04-27
star: true
category: 
  -Cookie
tag: 
  -Token
  -Session
  -JWT
article: true
---

## Cookie的定义：

> 实现HTTP请求每次都自动带数据给服务器    Cookie就是一种存储在浏览器的数据

Cookie 存储在客户端,Cookie 是服务器发送到用户浏览器并保存在`本地`的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

Cookie的基本流程如下：

<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceab70ea9cb1403f95f8a.png" />
</div>

用户在客户端输入账号密码并发送请求 ——>  服务端识别通过后，会设置Cookie，将账号密码存入Cookie中并返回给客户端 ——>  客户端收到后进行保存，下次发送请求Cookie被自动携带给服务端

在浏览器中查看保存了哪些Cookie—— F12进入开发者模式

<div class="photo" style="zoom:80%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceac40ea9cb1403f98c3c.png" />
</div>

如果将用户名和信息放在Cookie中的话，会造成信息泄露等问题，因此引出一个新的概念Session——`会话`

## Session的定义：

浏览器访问服务器相当于进行会话，而多个用户访问一个服务器的话就会产生很多会话，同时可能会有误点情况导致退出会话，因此给每一个会话都设置一个ID和时长用于区分会话和恢复会话或结束会话——SeesionID  和   Max-age   由服务器定义并保存在服务器的数据库中

Session的基本流程如下：

<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceac70ea9cb1403f99437.png" />
</div>

用户在客户端输入账号密码并发送请求 ——>  服务端识别账号密码，通过则随机生成一个没有规律字符串SessionID 和Max-age等参数 ——>通过Cookie返回参数给客户端 ——> 客户端收到后进行保存，再次发送请求时就不需要输入账号密码而是通过cookie将SessionID提交给服务器，服务器自动识别，Cookie中始终没有存放账号和密码并且当Cookie有效期失效后，浏览器自动删除Cookie，从而实现保护信息，另外服务器在发送Cookie之前会对含有SessionID的Cookie进行签名（即便被入侵修改了SessionID，仍无法访问服务器）——> 服务器拿到SessionID后会在存储的Session中进行检索，检索成功则放行

而随着互联网发展，用户规模也越来越大，如果一时间多个用户访问时便会生成大量的SessionID在服务器中，同时如果是在服务器集群中，又面临分享通用SeesionID给其它服务器（比如一台服务器上用户超载，分配用户给其它服务器），如果将SeesionID存放到数据库中，而数据库崩溃又会影响服务器获取SessionID，引出JWT（`JSON Web Token`）

## Token的定义：
<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceac90ea9cb1403f99a11.png" />
</div>

用户第一次登录网页 ——>  服务器就会生成一个JWT，服务器不需要保存JWT而只保存JWT签名的密文，而将JWT发送给浏览器 ——>  浏览器使用Cookie或者Storage的形式存储，下一次发送请求时就会将JWT（以JSON对象为载体）发送过去 ——>服务器端会将接收的JWT进行解密检查signature，如果没有被篡改就会放行

这个流程和Session很类似，不同点在于Session是把信息存放在服务端，而JWT是把信息存储在客户端

对于Token的安全性：JWT是由三部分组成，以 “ . ”分开 header.payload.signature

header：声明需要什么`算法`（默认：HS256）生成签名和token类型 

payload：一些特定的负载`数据`，例如有效期（exp）、用户名（aud）、发行人（iss）、某个时间前不可用（nbf）、发布时间（iat）、标识JWT（jti）等，除了默认字段也可以自己定义字段

signature：生成的签名信息

header和payload部分内容会经Base64编码，服务器端保存一段密码，服务器端密码结合着两端编码进行算法运算生成签名信息，而算法运算就是header中声明的算法

## 三种方式实现了用户不需要重复登录输入密码的操作，之间的关系总结如下：

<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662cead00ea9cb1403f9a8aa.png" />
</div>
Session 诞生并且保存在服务器端，由服务器主导一切，优点：安全性高存储在服务器端容量大可以保存对象，

> 缺点：占用服务器资源、扩展性差（分布式集群）、需要依赖Cookie跨域限制

Cookie则是一种数据载体，将Session放入Cookie中送到客户端并存储在客户端，Cookie跟随HTTP的每个请求发送出去，

> 缺点：安全风险有被篡改风险、容量限制 4KB（默认，可修改）、用户可能禁用

Token是诞生在服务器，但保存在浏览器中，由客户端主导一切，可以放到Cookie或Storage中，持有Token就像持有“令牌”一样可以允许访问服务器  

> 优点：适合用于前后端分离架构和服务区集群，解决了（移动端H5、小程序端、安卓端、苹果端、PC端 端口不一样而造成的跨域问题，在跨域情况下，Cookie无法传递需要在后端设置允许跨域，前端单独设置允许跨域的Cookie传递），不需要依赖前后端任何存储，只是一个以json传递的加密字符串，无法被篡改. 

> 缺点：JWT是无状态的，服务器不会保存会话状态，无法在到期时间前强制让用户下线（即无法取消更改令牌，解决办法只有服务端重新校验），同时不能传递敏感数据可以被解码，更大的一个空间占用相比SessionID，很多参数和字段组合转换成base64格式在网络传输中占用较大

视频链接：[Cookie、Session、Token究竟区别在哪？如何进行身份认证，保持用户登录状态？](https://www.bilibili.com/video/BV1ob4y1Y7Ep?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91)   、[Cookie、Session、Token、Jwt 一次搞清楚！](https://www.bilibili.com/video/BV1fC411h7aE?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91)、[JWT避坑](https://www.bilibili.com/video/BV1to4y1F7mP?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91)、[Cookie、Session、Token、JWT一次性讲完](https://www.bilibili.com/video/BV18u4m1K7D4?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91)

文章链接：[Session、SessionID](http://t.csdnimg.cn/e6ChH) 、[还分不清 Cookie、Session、Token、JWT？ - 知乎](https://zhuanlan.zhihu.com/p/164696755) 、[HTTP协议为什么是无状态的？无状态指的是什么_](https://blog.csdn.net/mr_zhangxg/article/details/88580236)
