jQuery(function($){
    if (window.location.hash.length) {
        var tab_pane_for_hash = $(window.location.hash + '.tab-pane')
        if (tab_pane_for_hash.length){

            tab_pane_for_hash.addClass('active')
               .siblings().removeClass('active');
            $('.news-tabs a[href="'+window.location.hash+'"]')
               .closest('li').addClass('active')
               .siblings().removeClass('active');

            //don't jump down to tabs.
            setTimeout(function() {
                window.scrollTo(0, 0);
            }, 1);
        }
    }
    $('.news-tabs a[href]').on('click', function(){
        window.location.hash = $(this).attr('href');
    });
});