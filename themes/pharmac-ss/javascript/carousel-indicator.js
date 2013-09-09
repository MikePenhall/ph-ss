jQuery(function($){
    $('.carousel-indicator').each(function(){
        var indicator = $(this);
        var carousel = $('#' + indicator.data('carousel') );
        carousel.find('.item').each(function(i){
            var item_indicator = $('<div />', {'class':'item-indicator'})
                .click(function(){carousel.carousel(i)});
            $(this).find('.sub-item').each(function(){
                item_indicator.append($('<div />', {'class':'sub-item-indicator'}));
            });
            indicator.append(item_indicator);
        });
        var update_indicator = function(e){
            indicator.find('.active').removeClass('active');
            indicator.find('.item-indicator').eq(carousel.find('.item.active').index()).addClass('active');
        }
        carousel.bind('slid', update_indicator);
        update_indicator();
    });
});