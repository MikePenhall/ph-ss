jQuery(function($){
	$('.subcommittee-widget .pane').fadeOut(0);

	var showPanel = function(panel){
		var defaultPane = $('.subcommittee-widget .default-pane').filter(':visible');
		if(defaultPane) {
			defaultPane.fadeOut(200, function(){
				$('.subcommittee-widget').find('.' + panel.data('filter')).fadeIn();
			});
		}
	};

	$('.subcommittee-type-list ul li').on('click', function(){
		$(this).parent().find('li').removeClass('current-item');
		$(this).addClass('current-item');
		showPanel($(this));
	});
});
