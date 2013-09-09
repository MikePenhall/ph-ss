jQuery(function($){
    $.fn.render_bookmarks = function() {
        return $(this).each(function(){
            var content = $('#' + $(this).data('bookmarks-for'));
            var names = [];
            $(content).find('a.bookmarked[name]').each(function(i){
                names.push($('<li />').append($('<a />', {href:'#' + $(this).attr('name'), text:$(this).text(), 'class':'bookmark slideto'})));
            });
            if (names.length) {
                $(this).find('ul').append(names).show();
            } else {
                $(this).hide();
            }
        });
    };

    $('.bookmarks').render_bookmarks();
});