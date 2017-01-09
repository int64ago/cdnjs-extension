# Qiniu 4 cdnjs

===> [插件地址](https://goo.gl/XyqOrm)

[cdnjs](https://cdnjs.com/) 应该是世界上最全的 JS/CSS 公共库，由 [CloudFlare](https://www.cloudflare.com/) 提供 CDN 服务

但是某些地区访问并不快甚至不能访问（你懂得），所以就做了个简单的插件，替换 CDN 的地址<br>
因为七牛有镜像加速的功能，所以只需要设置下镜像源，插件里设置下七牛空间的地址，搜索的时候会自动替换<br>
当然，理论上任何能够反代 `http://cdnjs.cloudflare.com` 服务器都可以<br>

主要使用步骤
---
 - 安装插件
 - 七牛开个空间，设置镜像源
 - 插件里设置好七牛空间的地址（格式: http(s)://your.qiniu.domain），七牛提供了 HTTP/HTTPS，如果是自定义域名当然更好了
 - 刷新 [cdnjs](https://cdnjs.com/) ，就可以任意搜索和使用库了

镜像源设置
---
选择空间 ---> 镜像存储 ---> 镜像源<br>

如果想链接保持原来的风格：<br>
`http(s)://your.qiniu.domain/ajax/libs/jquery/2.1.4/jquery.min.js`<br>
那么需要设置镜像源为：`http://cdnjs.cloudflare.com` 且配置页面**不要**勾选`去除 ajax/libs/`<br>

如果想链接风格为：<br>
`http(s)://your.qiniu.domain/jquery/2.1.4/jquery.min.js`<br>
那么需要设置镜像源为：`http://cdnjs.cloudflare.com/ajax/libs` 且配置页面**需要**勾选`去除 ajax/libs/`<br>


增加新库
---

如果你需要的库恰好没有，但是又想统一使用 [cdnjs](https://cdnjs.com/) 和 插件怎么办？（强迫症嘛～）<br>
很简单， [cdnjs](https://cdnjs.com/) 上有个 `Request a lib` ，去提交就可以了<br>
不过要注意库是主流或者规范的，然后你提 Issue/PR 也要规范

使用预览
---

![](https://cdn.int64ago.org/grjwel6u323xr.png)

![](https://cdn.int64ago.org/f1n4xn4gqfr.png)

![](https://cdn.int64ago.org/gywcf19fz85mi.png)
