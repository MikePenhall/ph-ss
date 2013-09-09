jQuery(function($){

    //moving bits to fit the bootstrap collapsible thing.
    window.collapsible_index = 0; //unique indexes
    $('.collapsible').each(function(){
        var header = $(this).find('h1,h2,h3,h4,h5,h6').first();

        header.addClass('collapsed');
        if (!header.find('a').length) { header.wrapInner($('<a />')); }
        var target = $(this).attr('id');
        if (!target) { $(this).attr('id', 'collapsible_' + window.collapsible_index); }
        header.find('a').attr({'data-toggle':'collapse', 'data-target':target}).addClass('collapse-toggle');
        $(this).addClass('collapse');

        window.collapsible_index++;
        $(this).before(header);
    });

    $('[name="'+window.location.hash.slice(1)+'"], [id="'+window.location.hash.slice(1)+'"]').each(function(){
        $(this).closest('h1,h2,h3,h4,h5,h6').next('.collapse').addClass('in');
        $(this).closest('.collapse').addClass('in');
    });
    //when you click an in-page link open a collapsible that either has that anchor, or contains that anchor
    $('a[href^="#"]').on('click', function(){
        var anchor = $(this).attr('href').slice(1);
        if (anchor) {
            var container = $('.collapse [name="'+anchor+'"], .collapse [id="'+anchor+'"], .collapse[name="'+anchor+'"] .collapse[id="'+anchor+'"]').closest('.collapse');
            if (!container.length) {
                container = $('.collapse-toggle [name="'+anchor+'"], .collapse-toggle #'+anchor+', .collapse-toggle[name="'+anchor+'"], .collapse-toggle[id="'+anchor+'"]').closest('h1,h2,h3,h4,h5,h6').next();
            }
            if (container.innerHeight() === 0) { container.collapse('show'); }
        }
    });

    //toggle the toggle.
    $('.collapse-toggle').on('click', function(e){
        var toggle = $(this);
        var collapser = $('#' + toggle.data('target'));
        collapser.collapse({toggle:false}); //for IE
        collapser.collapse('toggle');
        if (collapser.is('.in')){
            toggle.parent().removeClass('collapsed');
        } else {
            toggle.parent().addClass('collapsed');
        }
    });


    //loading the page with an fragment starts with that collapsible section open.
    if (window.location.hash.length) {
        $(window.location.hash + '.tab-pane').addClass('active').siblings().removeClass('active');
        $('.news-tabs a[href="'+window.location.hash+'"]').closest('li').addClass('active').siblings().removeClass('active');
    }
    $('.news-tabs a[href]').on('click', function(){
        window.location.hash = $(this).attr('href');
    });

});