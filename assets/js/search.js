$(function() {
    const $searchBox = $('#book-search-input')
    const $searchInput = $searchBox.find('#search-field')

    $searchInput.ghostHunter({
        results: ".search-results-list",
        result_template: '<li class="search-results-item"><h3><a href="{{link}}">{{title}}</a></h3></li>',
        onComplete: function(results) {
            $('#book-search-results').addClass('open')
        }
    });
})
