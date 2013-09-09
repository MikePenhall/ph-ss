<% include SearchForm %>
<div class="row">
	<section class="span9">
		<header class="page-header subhead">
			<% include PrintShare %>
			<h1><span class="hidden">$SiteConfig.Title | </span>$Title</h1>
		</header>
		$Breadcrumbs
		$Content
		$Form
		$PageComments
	</section>
</div>