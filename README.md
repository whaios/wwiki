# wwiki theme for Ghost

用于搭建个人 Wiki 文档库的 Ghost 主题，主题样式使用 `gitbook` 系统的样式和脚本。
[访问作者博客](https://www.whai.me)

![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/gitbook.png)
![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/wwiki-index.png)
![wwiki](https://raw.githubusercontent.com/whaios/wwiki/master/assets/wwiki-first-book.png)

# 主题特点

- **全新 3.0 版支持一个博客创建多份 Wiki 文档**
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

## 1. 文档定义

一个 `Tag` 标签和该标签下的所有 `Post` 文章组织成一份 Wiki 文档。

## 2. 封面文章

每一份 Wiki 文档中必须包含一篇封面文章，该文章是进入文档展示的第一篇文章，**其 `Post URL` 与 标签的 URL 相同**；

## 3. 目录结构

Wiki 文档是依据所有文章（除封面文章外）的 `Post URL` 来生成目录结构的，文档目录仅支持两级。

Post URL 如下组织目录，请注意URL中的前缀规则 `1-0` 为父级目录，`1-1`为其子级目录：
```
├── book1
────────────────────
├── 1-0-chapter1
|   └── 1-1-section1
└── 2-0-chapter2
|   ├── 2-1-section2
|   └── 2-2-section3
────────────────────
├── other1
└── other2
```
- `book1` 为封面文章的URL，对应一个 `Tag` ，该 `Tag.URL` 也是`book1`， `Tag.Name` 表示文档名称；
- `1-0-chapter1` 第一章内容，在目录树中的第一层级，URL格式 1-0-*** ；
- `1-1-section1` 第一章的第一小节内容，在目录树中的第二层级，URL格式 1-1-*** ，父级为 `1-0-***`；
- `2-0-chapter1` 第二章内容，在目录树中的第一层级，URL格式 2-0-*** ；
- `2-1-section2` 第二章的第一小节内容，在目录树中的第二层级，URL格式 2-1-*** ，父级为 `2-0-***`；
- `2-2-section3` 第二章的第二小节内容，在目录树中的第二层级，URL格式 2-2-*** ，父级为 `2-0-***`；
- `other1` 目录树之外的文章内容，该URL格式不满足数字开头，按照URL排序排列到目录结构之后