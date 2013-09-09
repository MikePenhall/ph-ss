<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
<head>
	<% base_tag %>
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link rel="shortcut icon" href="$ThemeDir/images/favicon.ico" />
	<script src="http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"></script>
  <script>
    WebFont.load({
      typekit: {id: 'hez4ebt'},
      active:function(){
        if (window.jQuery !== undefined && jQuery.fn.match_height){
          jQuery('.match-height').match_height();
        }
      }
    });
    window.setTimeout (
        function(){
            var htmlClass = document.documentElement.className;
            if (htmlClass.indexOf('wf-') === -1) {
                htmlClass = htmlClass.replace(/([.]*)/,'wf-error $1');
            }
        }
    , 1000);
  </script>
</head>
<body class="main home">
<% include Header %>
<% include Navigation %>

<section class="main container">
	<div class="inner typography line">
    <div class="search-wrapper search-home well">
      <h1>How can we help you?</h1>
      <p>Ask a question, enter a word or describe a health condition</p>
      <form class="form-search pad2" action="/search" target="_top">
          <input type="search" class="search input-large" name="search_q" id="search_q" accesskey="3">
          <div class="radio-group update-action form-inline" data-field="search_q" name="">
              <label class="radio inline"><input name="search_path" type="radio" data-field-name="search_q" value="/search" data-target="_top" checked="">Site content</label>
              <label class="radio inline"><input type="radio" name="search_path" data-field-name="SearchTerm" value="http://pharmac.govt.nz/patients/ApplicationTracker" data-target="_blank">Funding applications</label>
              <label class="radio inline"><input type="radio" name="search_path" data-field-name="osq" data-target="_blank" value="http://www.pharmac.govt.nz/patients/PharmaceuticalSchedule/Schedule">Community schedule</label>
          </div>
          <input type="submit" value="SEARCH" class="btn btn-large btn-full span2">
      </form>
    </div>
		$Layout
	</div>
</section>
<% include Footer %>

<% require javascript('framework/thirdparty/jquery/jquery.js') %>
<%-- Please move: Theme javascript (below) should be moved to mysite/code/page.php  --%>
<script type="text/javascript" src="{$ThemeDir}/javascript/script.js"></script>

</body>
</html>