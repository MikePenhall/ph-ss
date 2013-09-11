<?php

class HomePage extends Page {

	public static $db = array(
	);

	public static $has_one = array(
	);

	public function LatestNews($limit = 3){
		//return DataObject::get('NewsItem', "", "\"NewsItemDate\" DESC", "LIMIT {$limit}");
		return NewsItem::get()->sort("NewsItemDate DESC")->limit($limit);
	}

}

class HomePage_Controller extends Page_Controller {

	public static $allowed_actions = array (
	);

}

?>