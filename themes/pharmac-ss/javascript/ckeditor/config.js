/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.stylesSet.add('pharmac', [
    // text
    { name : 'Subscript',        element : 'sub' },
    { name : 'Superscript',      element : 'sup' },
    { name : 'Strikethrough',    element : 'strike' },
    { name : 'Document details', element : 'span', attributes : { 'class' : 'meta' } },
    { name : 'PDF icon link (large)', element : 'a',    attributes : { 'class' : 'with-icon pdf' } },
    { name : 'PDF icon link (large block)', element : 'a',    attributes : { 'class' : 'with-icon pdf block-icon'} },
    { name : 'PDF icon link (small)',       element : 'a',    attributes : { 'class' : 'with-icon-small pdf' } },
    { name : 'Audio icon link (small)',     element : 'a',    attributes : { 'class' : 'with-icon-small audio' } },
    { name : 'CSV icon link (small)',       element : 'a',    attributes : { 'class' : 'with-icon-small csv' } },
    { name : 'Word doc icon link (small)',  element : 'a',    attributes : { 'class' : 'with-icon-small doc' } },
    { name : 'Image icon link (small)',     element : 'a',    attributes : { 'class' : 'with-icon-small image' } },
    { name : 'Video icon link (small)',     element : 'a',    attributes : { 'class' : 'with-icon-small video' } },
    { name : 'Powerpoint icon link (small)',element : 'a',    attributes : { 'class' : 'with-icon-small ppt' } },
    { name : 'Text icon link (small)',      element : 'a',    attributes : { 'class' : 'with-icon-small txt' } },
    { name : 'Excel icon link (small)',     element : 'a',    attributes : { 'class' : 'with-icon-small xls' } },
    { name : 'Zip icon link (small)',       element : 'a',    attributes : { 'class' : 'with-icon-small zip' } },

    { name : "bookmarked", element : 'a', attributes : {'class' : 'bookmarked'}},

    { name : 'Button',           element : 'a',    attributes : { 'class' : 'btn'} },
    { name : "'See more' button",element : 'div',  attributes : { 'class' : 'btn-bottom-wrapper'} },

    // lists
    { name : 'List of links',    element : 'ul',   attributes : { 'class' : 'links' } },
    { name : 'Green list',       element : 'ul',   attributes : { 'class' : 'lime'  } },
    { name : 'List of documents',element : 'ul',   attributes : { 'class' : 'documents' } },
    { name : 'plain',            element : 'ol', attributes : {'class' : 'plain'} },
    { name : 'continued',        element : 'ol', attributes : {'class' : 'continued'} },

    //figure
    { name : 'collapsible',      element : 'div',  attributes : { 'class' : 'collapsible'} },
    { name : 'figure',           element : 'div',  attributes : { 'class' : 'figure' } },
    { name : 'right',            element : 'img',  attributes : { 'class' : 'right' } },
    { name : 'borderless',       element : 'img',  attributes : { 'class' : 'borderless'} },
    { name : 'full-width',       element : 'img',  attributes : { 'class' : 'full-width'} },
    { name : 'Play button',      element : 'a',    attributes : { 'class' : 'play youtube' } },
    { name : 'Well',             element : 'div',  attributes : { 'class' : 'well' } }
]);

CKEDITOR.editorConfig = function( config )
{
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';

  /* Filebrowser routes */
  // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";

  // The location of a script that handles file uploads in the Flash dialog.
  config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";

  // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";

  // The location of a script that handles file uploads in the Image dialog.
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";

  // The location of a script that handles file uploads.
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";

  // Rails CSRF token
  config.filebrowserParams = function(){
    var csrf_token = jQuery('meta[name=csrf-token]').attr('content'),
        csrf_param = jQuery('meta[name=csrf-param]').attr('content'),
        params = new Object();

    if (csrf_param !== undefined && csrf_token !== undefined) {
      params[csrf_param] = csrf_token;
    }

    return params;
  };

  config.addQueryString = function( url, params ){
    var queryString = [];

    if ( !params )
      return url;
    else
    {
      for ( var i in params )
        queryString.push( i + "=" + encodeURIComponent( params[ i ] ) );
    }

    return url + ( ( url.indexOf( "?" ) != -1 ) ? "&" : "?" ) + queryString.join( "&" );
  };

  // Integrate Rails CSRF token into file upload dialogs (link, image, attachment and flash)
  CKEDITOR.on( 'dialogDefinition', function( ev ){
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;
    var content, upload;

    if ($.inArray(dialogName, ['link', 'image', 'attachment', 'flash']) > -1) {
      content = (dialogDefinition.getContents('Upload') || dialogDefinition.getContents('upload'));
      upload = (content == null ? null : content.get('upload'));

      if (upload && upload.filebrowser['params'] == null) {
        upload.filebrowser['params'] = config.filebrowserParams();
        upload.action = config.addQueryString(upload.action, upload.filebrowser['params']);
      }
    }
  });

  /* Extra plugins */
  // works only with en, ru, uk locales
  // config.extraPlugins = "filebrowser";

  config.height = '400px';
  config.width = '600px';

  /* Toolbars */
  config.toolbar = 'Easy';

  config.toolbar_Easy =
    [

      ['Format', 'Styles', 'RemoveFormat'],
      ['Cut','Copy','Paste','PasteText','PasteFromWord'],
      ['SpecialChar'],
      ['Image', 'Table','HorizontalRule','CreateDiv'],
      ['Bold','Italic'],
      ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
      ['Link','Unlink','Anchor'],
      ['Source']];

    config.specialChars = config.specialChars.concat(['&#256;',  // A macron
                                                      '&#274;',  // E macron
                                                      '&#298;',  // I macron
                                                      '&#332;',  // O macron
                                                      '&#362;',  // U macron
                                                      '&#257;',  // a macron
                                                      '&#275;',  // e macron
                                                      '&#299;',  // i macron
                                                      '&#333;',  // o macron
                                                      '&#363;']);// u macron
  config.stylesSet = 'pharmac';

  config.contentsCss = '/assets/application.css';
  config.toolbarCanCollapse = false;
  config.fillEmptyBlocks = false;
};


