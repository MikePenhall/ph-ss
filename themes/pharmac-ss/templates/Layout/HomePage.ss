<% include SearchForm %>
<div class="row">
	<section class="span9">
		<header class="page-header subhead">
			<% include PrintShare %>
			<h1><span class="hidden">$SiteConfig.Title | </span>$Title</h1>
		</header>
		<div class="main-content">
			$Breadcrumbs
			$Content
			$Form
			$PageComments
		</div>
	</section>
</div>