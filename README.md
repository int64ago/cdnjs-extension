# Qiniu 4 cdnjs

===> [插件地址](https://goo.gl/XyqOrm)

[cdnjs](https://cdnjs.com/) 应该是世界上最全的 JS/CSS 公共库，由 [CloudFlare](https://www.cloudflare.com/) 提供 CDN 服务

但是某些地区访问并不快甚至不能访问（你懂得），所以就做了个简单的插件，替换 CDN 的地址<br>
因为七牛有镜像加速的功能，所以只需要设置下镜像源，插件里设置下七牛空间的地址，搜索的时候会自动替换<br>
当然，理论上任何能够反代 `http://cdnjs.cloudflare.com` 服务器都可以<br>

主要使用步骤
---
 - 安装插件
 - 七牛开个空间，设置镜像源为 `http://cdnjs.cloudflare.com`
 - 插件里设置好七牛空间的地址，HTTP/HTTPS 均可，如果是自定义域名当然更好了
 - 刷新 [cdnjs](https://cdnjs.com/) ，就可以任意搜索和使用库了

增加新库
---

如果你需要的库恰好没有，但是又想统一使用 [cdnjs](https://cdnjs.com/) 和 插件怎么办？（强迫症嘛～）<br>
很简单， [cdnjs](https://cdnjs.com/) 上有个 `Request a lib` ，去提交就可以了<br>
不过要注意库是主流或者规范的，然后你提 Issue/PR 也要规范
