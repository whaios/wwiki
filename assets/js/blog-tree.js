$(document).ready(function() {
  const $tagTree = $('#J-blog-tree')
  const $allPosts = $('#J-posts-all-hidden')
  const pathname = location.pathname
  const $body = $('body')
  const $untagedPosts = $tagTree.find('.J-untaged-posts')
  const $win = $(window)

  const tags = {}
  const untaged = []
  $allPosts.find('.J-post').each(function() {
    const $post = $(this)
    const slug = $post.data('slug')
    const $tags = $post.find('.J-tag')

    // 如果文章是首页内容，则不添加到目录中
    if (slug==='index')
      return true

    if (pathname.includes(slug)) {
      $post.addClass('active')
    }

    if ($tags.length === 0) {
      untaged.push($post[0].outerHTML)
    } else {
      $tags.each(function() {
        const tag = this.innerText
        if (!tags[tag]) {
          tags[tag] = []
        }

        tags[tag].push($post[0].outerHTML)
      })
    }
  })

  /**
   * copy posts to corresponding tag
   */
  $tagTree.find('.J-blog-tree-posts').each(function() {
    const $this = $(this)
    const posts = tags[$this.data('tag')]

    if (!posts) {
      $this
        .html('<ul><li class="blog-tree-no-posts lighter">内容维护中...</li></ul>')
      return
    }

    $this.html(posts.join(''))
  })

  $untagedPosts.html(untaged.join(''))
})
