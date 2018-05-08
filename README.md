# wwiki theme for Ghost

用于搭建个人 Wiki 文档库的 Ghost 主题，主题样式使用 `gitbook` 系统的样式和脚本。
[访问作者博客](https://www.whai.me)

![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/gitbook.png)
![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/wwiki-home.png)
![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/wwiki-book.png)

# 主题特点

- **全新 3.0 版支持多份 Wiki 文档**
- 适用于搭建 个人wiki、项目文档、API文档类网站
- 参照 `gitbook` 系统，版面整洁，段落样式清晰美观
- 前端可调整字号、字体 和 阅读主题
- 自适应，支持手机阅读
- 文章（标题）搜索功能，支持中文搜索

# 使用主题

1. 部署 Ghost 博客，不会的请参考《[部署Ghost1.20+博客](https://www.whai.me/install-ghost/)》
2. 下载主题包 `wwiki` ，
3. 通过 Ghost 后台的 `Design` -> `Upload a theme` 上传主题并启用
4. 完成


# 如何组织文档

- 创建一个 `Tag` 标签表示一份文档， `Tag.Name` 表示文档标题；
- 创建一篇 `Post` 文章表示文档简介页，该文章 `Post URL` 与 标签的 URL 相同；
- 创建文档内容页，支持两级目录
