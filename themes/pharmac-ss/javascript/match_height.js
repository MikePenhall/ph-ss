jQuery(function($){
    $.fn.match_height = function() {
        var columns,
            rows = {};
        if ($(this).length > 1) {
            columns = $(this);
        } else {
            columns = $('[data-match-height="'+$(this).data('match-height')+'"]');
        }
        columns.each(function(){
            $(this).css({'height':'auto'});
            var row = $(this).data('match-height'),
                height = $(this).height();
            if ($(this).data('match-height-minus-siblings')) {
                $(this).siblings().each(function(){
                    height += $(this).outerHeight(true);
                });
            }
            if (rows[row] === undefined || rows[row] < height) {
                rows[row] = height;
            }
        });
        columns.each(function(){
            var height = rows[$(this).data('match-height')];
            if ($(this).data('match-height-minus-siblings')) {
                $(this).siblings().each(function(){
                    height -= $(this).outerHeight(true);
                });
            }
            $(this).height(height);
        });
        return $(this);
    };
    $('.match-height').match_height();
    var recalculate_height = function(){$(this).closest('.match-height').match_height();}
    //reflow after images load
    $('.match-height img').load(recalculate_height);
    //unfix height before some kind of transition happens
    $('.match-height *').on('show', function(){$(this).closest('.match-height').css({'height':'auto'})});
    //reflow after the transition finishes.
    $('.match-height *').on('shown hidden', recalculate_height);

    $('.carousel').carousel({interval:1500,pause:true}).carousel('pause');
});