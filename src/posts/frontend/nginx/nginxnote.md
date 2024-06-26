---
title: "Nginx功能"
author: Passeur-高
date: 2024-04-27
star: true
category: 
  -Nginx
tag: 
  -负载均衡
  -跨域
  -反向代理
article: true
---

:::info
Nginx的反向代理、负载均衡和跨域
:::


## 深入理解反向代理
`正向代理` : 以VPN为例，客户端把网页请求，代理到一个可以访问应用服务器的代理服务器上，应用服务器响应代理服务器的请求，代理服务器把响应到的网页内容转发给客户端，而应用服务器不知道客户端的ip地址，而客户端既知道代理服务器的ip地址也知道应用服务器的地址

<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceab40ea9cb1403f9532c.png" />
</div>

正向代理和反向代理的区别：正向代理代理的是`客户端`	反向代理代理的是`服务端`

`反向代理`：代理服务器根据客户端的请求，从后台服务器上获取这些资源，然后再把这些资源返回给客户端的过程，客户端只知道代理服务器的ip地址而不知道后台服务器集群的地址，从而保障应用服务器的安全同时实现负载均衡和跨域

<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceab10ea9cb1403f94734.png" />
</div>

额外的补充和说明可以参考这篇博文 [深入理解http反向代理](https://zhuanlan.zhihu.com/p/464965616)、[8分钟带你深入浅出搞懂Nginx](https://zhuanlan.zhihu.com/p/34943332)和视频 [关于Nginx反向代理](https://www.bilibili.com/video/BV1vm4y1z7EB?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91),其中的例子都很形象

## 负载均衡和跨域

`跨域`：**跨域**，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器施加的安全限制。所谓同源是指，域名，协议，端口**均相同，只要有一个不同，就是跨域
举例说明：

> http://www.123.com/index.html 调用 http://www.123.com/server.php （非跨域）
> http://www.123.com/index.html 调用 http://www.456.com/server.php （主域名不同:123/456，跨域）
> http://abc.123.com/index.html 调用 http://def.123.com/server.php （子域名不同:abc/def，跨域）
> http://www.123.com:8080/index.html 调用 http://www.123.com:8081/server.php （端口不同:8080/8081，跨域）
> http://www.123.com/index.html 调用 https://www.123.com/server.php （协议不同:http/https，跨域）
> 请注意：localhost和127.0.0.1虽然都指向本机，但也属于跨域。

浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。
另外补充参考：[什么是跨域及怎么解决跨域问题?](https://cloud.tencent.com/developer/article/2070976)、[彻底理解什么是跨域](https://blog.csdn.net/qq_38628046/article/details/114853652)

`负载均衡`: 当业务量特别大的时候，有多台应用服务器集群，当客户端向代理服务器发送请求时，代理服务器会将此请求转发给可用的服务器，而转发是根据负载均衡的算法实现，包括 轮询、加权轮询、IP哈希 其他算法（URL_bash、最小连接数）Nginx带有健康检查，会定期轮询向集群里的服务器发送健康检查请求，当发现某台服务器异常，就不会发送请求给这台服务，提升了客户端访问的稳定性
<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceaab0ea9cb1403f936a3.png" />
</div>

另外补充参考：[五分钟看懂 Nginx 负载均衡](https://zhuanlan.zhihu.com/p/134220193)、[什么是负载均衡？负载均衡器的工作原理](https://www.nginx.com/resources/glossary/load-balancing/)、[nginx配置负载均衡](https://blog.csdn.net/zpf1813763637/article/details/109455451)

## Nginx的架构

当Nginx启动之后，后台会运行一个master进程和多个worker进程，master进程主要用于管理所有的worker进程，多个worker进程会去竞争客户端的请求，一个请求只能被一个worker进程处理，worker进程在配置文件中进行设置（通常，worker进程个数和CPU核心数一致）。当master进程收到信号，例如重启Nginx，这时master进程会重新加载配置文件，启动新的worker进程，对所有旧的worker进程发送信号使其不再处理请求，新的worker进程启动后开始接受新的请求，注意旧的worker进程会在处理完当前正在处理的请求后才会退出工作。
<div class="photo" style="zoom:40%;text-align:center">
  <img src="https://pic.imgdb.cn/item/662ceaae0ea9cb1403f93e64.png" />
</div>

