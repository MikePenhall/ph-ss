<?php
class Page extends SiteTree {

	public static $db = array(
	);

	public static $has_one = array(
	);

	public function LowerCase($string = null){
		return Convert::raw2url(trim($string));
	}

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);

	public function init() {
		parent::init();

		Requirements::themedCSS('reset');
		Requirements::themedCSS('bootstrap');
		Requirements::themedCSS('bootstrap-responsive');
		Requirements::themedCSS('layout');
		Requirements::themedCSS('typography');
		Requirements::themedCSS('form');
		Requirements::themedCSS('loader');
		Requirements::themedCSS('application');
		Requirements::themedCSS('style');

		Requirements::javascript('themes/pharmac/javascript/vendor/modernizr.js');
	}

}