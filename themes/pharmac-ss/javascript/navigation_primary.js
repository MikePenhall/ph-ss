(function($){
    // show MegaMenu panel on hover
    // switch between menu panels instantly
    // hide menu panels with a bit of a delay as grace for accidental leaving of hover area (because there's quite a long way to move to get it back if you left from the bottom)
    var delay = 200;
    var hide = false;
    $('.nav-primary li a').hover(function(e){
        var target_id = $(this).data('target');
        clearTimeout(hide);
        if (target_id) {
            //We're selecting only the particular panels to show or hide in case we want to animate them in future.
            $('.tab-primary .tab-pane:not(#'+target_id+'):visible').hide();
            $('#'+target_id + ':not(:visible)').show();
        } else {
            hide = setTimeout(function(){
                $('.tab-primary .tab-pane:visible').hide();
            }, delay);
        }
        //we're using classes so that the hover style stays when you leave the menu item and hover the mega-menu pane
        $('.nav-primary a.hover').removeClass('hover');
        $(this).addClass('hover');

    });
    $('.tab-primary .tab-pane').hover(
        function(){ clearTimeout(hide); },
        function(e){
            clearTimeout(hide);
            hide = setTimeout(function(){
                $('.tab-primary .tab-pane:visible').hide();
                $('.nav-primary a.hover').removeClass('hover');
            }, delay);
        }
    );
})(jQuery);