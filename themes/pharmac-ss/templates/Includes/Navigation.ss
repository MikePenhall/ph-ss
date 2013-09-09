<div class="container nav-primary-wrapper">
  <nav class="main" role="navigation">
  	<ul class="nav nav-tabs nav-primary nav-parent">
			<% loop $Menu(1) %>
				<li class="$LinkingMode $Lowercase($MenuTitle)"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></li>
			<% end_loop %>
		</ul>
    <ul class="nav nav-tabs nav-primary nav-auxilliary">
      <li class="information"><a href="/information-for" data-target="information">INFORMATION FOR&hellip;</a></li>
    </ul>

    <div class="tab-content tab-primary">

        <div class="tab-pane">
          <div class="row">
          	<!--<% loop $Menu(2) %>
							<h3 class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></h3>
						<% end_loop %>-->
          </div>
        </div>

    </div>
  </nav>
</div>
