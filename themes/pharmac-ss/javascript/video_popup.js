(function($){
    $.fn.modal_youtube_video = function(){
        var parse_youtube_url = function(url) {
            // from: http://stackoverflow.com/questions/3452546
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[7].length==11){
                return match[7];
            } else{
                return false;
            }
        };
        $(this).each(function(){
            var link = $(this);
            var id = parse_youtube_url(link.attr('href'));
            if (id) {
                var modal_id = 'youtube_modal_' + id;
                var width = link.data('width') || 400;
                var height = link.data('height') || 250;
                var title = link.data('title') || link.attr('title');
                var youtube_embed_url = 'http://www.youtube.com/embed/'+ id + '?rel=0';
                var youtube_embed = $('<iframe />', {src:youtube_embed_url, width:width, height:height});


                link.click(function(e){
                    e.preventDefault();
                    $('body').append_and_show_modal({id:modal_id, title:title, content:youtube_embed, width:width});
                });
            }
        });
    };

    $.fn.append_and_show_modal = function(options) {
        $(this).append($('<div />', { 'class': 'modal hide', id: options.id, tabindex:-1,
                                       role: 'dialog', "aria-labelledby":options.id+'_title',
                                       "aria-hidden":true}).css({width:options.width+'px'})
                        .append($('<div />', {'class':'modal-header media-header'})
                            .append($('<h3 />', {id:options.id + '_title', text:options.title}))
                            .append($('<a />', {'class':'close','href':'javascript:void(0);','data-dismiss':'modal', 'aria-hidden':'true',text:'X'}))
                        ).append($('<div />', {'class':'modal-body media-body'})
                            .append(options.content))
                        .modal('show').on('hide', function(){ $(this).remove(); })
                        );
        };

    $('.youtube').modal_youtube_video();
})(jQuery);