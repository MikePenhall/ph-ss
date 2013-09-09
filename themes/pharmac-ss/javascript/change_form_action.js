(function($){
    $.fn.update_action = function() {
        return $(this).each(function(){
            if (select) {}
            var select = $(this);
            var form = select.closest('form');
            var option = select.find('option:selected, input:checked');
            var field = $('#' + select.data('field') );
            field.attr('name', option.data('field-name'));
            form.attr('target', option.data('target'));
            form.attr('action', option.val());
        });
    };
    $('form .update-action')
        .attr('name', '') //don't need to submit this field if js is handling things.
        .update_action()
        .change(function(){
            $(this).update_action();
        }).find('input').change(function(){
            $(this).closest('.update-action').update_action();
        });
})(jQuery);