$(document).ready(function() {
  const divider = '<li class="divider"></li>'
  // 当前文章地址
  const pathname = location.pathname
  const $allPosts = $('#J-posts-hidden')
  const tagSlug = $allPosts.data('slug') 
  var $jPosts = $('#J-posts')
  var $jOtherPosts = $('#J-other-posts')
  var curr = 0

  $allPosts.find('.J-post').each(function() {
      var $post = $(this)
      const slug = $post.data('slug')
      // 文章的序号，URL中第一个数字
      var num = parseInt(slug)

      if (pathname.includes(slug)) {
          $post.addClass('active')
      }

      // 封面文章
      if(slug === tagSlug){
          $jPosts.prepend(divider);
          $jPosts.prepend($post)
      }
      else if (!isNaN(num)) {
          if(num > curr)
              $jPosts.append($post)
          else{
              var $parent = $jPosts.children().last()
              var $ulnodes = $parent.children("ul")
              var $ulnode = {}
              if($ulnodes.length > 0){
                $ulnode = $($ulnodes[0])
              }
              else{
                  $ulnode = $('<ul class="articles"></ul>')
                  $parent.append($ulnode)
              }              
              $ulnode.append($post)
          }
          curr = num;
      } else {
          if($jOtherPosts.children().length < 1)
              $jOtherPosts.append(divider)
          $jOtherPosts.append($post)
      }
  })
})