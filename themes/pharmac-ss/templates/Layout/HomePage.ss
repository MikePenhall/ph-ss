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
		</div>
		<% if LatestNews %>
		<div class="homepage-latest-news">
			<ul>
			<% loop LatestNews(3) %>
				<li>
					<h3>$Title</h3>
					<p><small>by {$AuthorName} on {$NewsItemDate}</small></p>
					<p>$Intro</p>
				</li>
			<% end_loop %>
			</ul>
			<br /><br />
		<% end_if %>
		</div>
	</section>
</div>