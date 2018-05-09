$(function() {
    const $searchBox = $('#book-search-input')
    const $searchInput = $searchBox.find('#search-field')
    const tagSlug = $('#J-posts-hidden').data('slug') 

    $searchInput.ghostHunter({
        results: ".search-results-list",
        result_template: '<li class="search-results-item"><h3><a href="{{link}}" target="_self">{{title}}</a></h3></li>',
        onComplete: function(results) {
            $('#book-search-results').addClass('open')
        },
        ghostQueryParams  : {limit: "all", order: "slug asc", filter: "tags:[" + tagSlug + "]", include: "tags"}
    });
})
