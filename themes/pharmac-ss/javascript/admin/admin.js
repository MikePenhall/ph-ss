// Expand/shrink pages view
//
jQuery(function($){
  $(".expander").click(function(){
    $("."+$(this).attr("id")).show();
    $(".shrinker_"+$(this).attr("id")).show();
    $(".expander_"+$(this).attr("id")).hide();
    return false;
  });

  $(".shrinker").click(function(){
    $("."+$(this).attr("id")).hide();
    $(".shrinker_"+$(this).attr("id")).hide();
    $(".expander_"+$(this).attr("id")).show();
    $(".sub_"+$(this).attr("id")).hide();
    $(".sub_shrinker_"+$(this).attr("id")).hide();
    $(".sub_expander_"+$(this).attr("id")).show();
    $(".sub_sub_"+$(this).attr("id")).hide();
    $(".sub_sub_shrinker_"+$(this).attr("id")).hide();
    $(".sub_sub_expander_"+$(this).attr("id")).show();
    return false;
  });

  $("#all_expander").click(function(){
    $(".page").show();
    $(".shrinker").show();
    $(".expander").hide();
    return false;
  });

  $("#all_shrinker").click(function(){
    $(".page").hide();
    $(".shrinker").hide();
    $(".expander").show();
    return false;
  });

  $(".page").hide();
  $(".shrinker").hide();

  $(function() {
    $("ul.sortable").sortable({
      handle:'.handle',
      update:function() { $.post('pages/position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable").disableSelection();
    $("ul.sortable").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

  $(function() {
    $("ul.sortable_quick_link").sortable({
      handle:'.handle',
      update:function() { $.post('quick_links/position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable_quick_link").disableSelection();
    $("ul.sortable_quick_link").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

  $(function() {
    $("ul.sortable_featured_document").sortable({
      handle:'.handle',
      update:function() { $.post('featured_documents/position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable_featured_document").disableSelection();
    $("ul.sortable_featured_document").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

  $(function() {
    $("ul.sortable_document_document_types").sortable({
      handle:'.handle',
      update:function() { $.post('position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable_document_document_types").disableSelection();
    $("ul.sortable_document_document_types").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

   $(function() {
    $("ul.sortable_carousel_block").sortable({
      handle:'.handle',
      update:function() { $.post('carousel_blocks/position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable_carousel_block").disableSelection();
    $("ul.sortable_carousel_block").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

   $(function() {
    $("ul.sortable_carousel").sortable({
      handle:'.handle',
      update:function() { $.post('carousels/position', '_method=put&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)+'&'+$(this).sortable('serialize')); }
    });
    $("ul.sortable_carousel").disableSelection();
    $("ul.sortable_carousel").bind("mousedown", function(e) {
      e.stopPropagation(); // fixes crazy IE behaviour
    });
  });

  $(function(){
    var update_page_form_for_layout = function(){
      var option  = $('#page_template option:selected').val();
      var sidebar = $('#page_right_sidebar').text() !== '';
      switch(option) {
        case 'general_page':
          $('#intro_field, #body_field, #related_info_field').show('fast');
          $('#landing_page_fields, #landing_page_top_right_media').hide('fast');
        break;
        case 'landing_page':
        case 'maori_landing_page':
          $('#landing_page_fields, #body_field, #landing_page_top_right_media, #landing_page_fields, [id^="landing_page_column_"]').show('fast');
          $('#intro_field, #related_info_field').hide('fast');
        break;
        case 'search_results_page':
          $('#landing_page_fields, #intro_field, #body_field, #related_info_field, #landing_page_top_right_media').hide('fast');
        break;
        case 'sub_landing_page':
          $('#landing_page_fields, #related_info_field, #landing_page_column_one, #landing_page_column_two').show('fast');
          $('#intro_field, #body_field, #landing_page_top_right_media, #landing_page_column_four').hide('fast');
          if (sidebar) {
            $('#landing_page_column_three').hide('fast');
          } else {
            $('#landing_page_column_three').show('fast');
          }
        break;
      }
    };
    $('#page_template, #page_right_sidebar').change(update_page_form_for_layout);
    update_page_form_for_layout();
  });

});

function expandPages(pageId, mainPageId, subPageId, subSubPageId){
  if (pageId != 0) {
    $(".page_"+pageId).show();
    $(".shrinker_page_" + pageId).show();
    $(".expander_page_" + pageId).hide();
    if (pageId == mainPageId) {
      $(".sub_page_" + pageId).show();
    } else {
      if (mainPageId != subPageId) {
        $(".page_" + mainPageId).show();
        $(".shrinker_page_" + mainPageId).show();
        $(".expander_page_" + mainPageId).hide();
      };
      if (subPageId != subSubPageId) {
        $(".page_" + subPageId).show();
        $(".page_" + mainPageId).show();
        $(".shrinker_page_" + mainPageId).show();
        $(".expander_page_" + mainPageId).hide();
        $(".shrinker_page_" + subPageId).show();
        $(".expander_page_" + subPageId).hide();
      }
    };
  };
  $(".page_highlight").effect("highlight", {}, 2000);
};

function expandCarousel(carouselId){
  if (carouselId != 0) {
    $(".carousel_"+carouselId).show();
    $(".shrinker_carousel_" + carouselId).show();
    $(".expander_carousel_" + carouselId).hide();
    //show the children blocks of this carousel
    $(".sub_carousel_"+carouselId).show();
  };
  $(".carousel_highlight").effect("highlight", {}, 2000);
};

jQuery(function($) {
  $('.checkall').click(function () {
    $(this).parents('fieldset:eq(0)').find(':checkbox').attr('checked', this.checked);
  });
});

jQuery(function($){
  $("#department_div").change(function() {
    var form = $(this).parents("form"); // grab the form wrapping the search bar.
    var formData = form.serialize(); // grab the data in the form
    $.get("/admin/staffs/sub_department_menu", formData, function(html) { // perform an AJAX get, the trailing function is what happens on successful get.
      $("#sub_department_div").html(html); // replace the "results" div with the result of action taken
    });
  });
});

// Highlight table rows when mouse-over
jQuery(function($){
  $("tr").find('.actions').find("a:link").css("color","white");
  $("tr").find('.actions').find("a:visited").css("color","white");
  $("tr").not(':first').hover(
    function () {
      $(this).css("background","#F9F9F9");
      $(this).find('.actions').find('a:link').css("color","black");
      $(this).find('.actions').find('a:visited').css("color","black");
    },
    function () {
      $(this).css("background","");
      $(this).find('.actions').find("a:link").css("color","white");
      $(this).find('.actions').find("a:visited").css("color","white");
    }
  );
});
jQuery(function($){
  $(".pages_row").find(".pages_buttons").hide();
  $(".pages_row").hover(
    function () {
      $(this).css("background","#F9F9F9");
      $(this).find(".pages_buttons").show();
    },
    function () {
      $(this).find(".pages_buttons").hide();
      $(this).css("background","");
    }
  );
  $(".remove_item").on("click",function(){
    var id = $.trim($(this).attr("id"));
    list_value = $(this).parents("div").first().find("input[type='hidden']").val().replace(id +",","");
    $(this).parents("div").first().find("input[type='hidden']").val(list_value);
    $(this).parent().remove();
    return false;
  });
});

jQuery(function($){
  $(".quick_links_row").find(".quick_links_buttons").hide();
  $(".quick_links_row").hover(
    function () {
      $(this).css("background","#F9F9F9");
      $(this).find(".quick_links_buttons").show();
    },
    function () {
      $(this).find(".quick_links_buttons").hide();
      $(this).css("background","");
    }
  );
});

function autocomplete_helper(path,elementId,containerId,hiddenId,label) {
  $( elementId ).autocomplete({
      minLength: 2,
      source: function( request, response ) {
        $.getJSON( path, request, function( data, status, xhr ) {
            response( $.map( data, function( item ) {
            return {
              value: item[label],
              label: item[label],
              id: item.id
            }
          }));
        });
      },
      select: function( event, ui ) {
        if (ui.item && !$(hiddenId).val().match(ui.item.id)) {
            $(hiddenId).val($(hiddenId).val() + ui.item.id + ",");
            html = "<li>";
            html += "<a id='"+ui.item.id+"' class='remove_item' href='#'></a> "
            html += ui.item.label;
            html += "</li>";
            $(containerId).append(html);
            return false;
        }
  },
    close: function(event, ui) {
        $(elementId).val("");
      return false;
    }
  });
}

function autocomplete_single_helper(path,elementId,containerId,hiddenId,label) {
  $( elementId ).autocomplete({
      minLength: 2,
      source: function( request, response ) {
        $.getJSON( path, request, function( data, status, xhr ) {
            response( $.map( data, function( item ) {
            return {
              value: item[label],
              label: item[label],
              id: item.id
            }
          }));
        });
      },
      select: function( event, ui ) {
        if (ui.item && !$(hiddenId).val().match(ui.item.id)) {
            $(hiddenId).val(ui.item.id);
            html = "<li>";
            html += "<a id='"+ui.item.id+"' class='remove_item' href='#'></a> "
            html += ui.item.label;
            html += "</li>";
            $(containerId).html(html);
            return false;
        }
  },
    close: function(event, ui) {
        $(elementId).val("");
      return false;
    }
  });
}

