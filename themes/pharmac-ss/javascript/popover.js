(function($){
    $(function(){

        $('.popover-toggle').popover({html:true, placement:'left', trigger:'manual'})
          .on('click', function(e){
            e.preventDefault();
            if ($(this).next('.popover:visible').length){
                $(this).popover('hide');
            } else {
                $('.popover').hide();
                $(this).popover('show');
            }
          });
          $(document).on('click', function(e){if (!$(e.target).closest('.popover, .popover-toggle').length) {$('.popover-toggle').popover('hide'); } });

          $('[rel="tooltip"]').tooltip();
    });
})(jQuery);