<?php

class NewsItem extends DataObject {
	static $db = array(
		'Title' => 'VarChar(200)',
		'AuthorName' => 'VarChar(200)',
		'NewsItemDate' => 'Date',
		'Intro' => 'HTMLText',
		'Body' => 'HTMLText',
		'NewsType' => "Enum('Media release, Notification, Consultation, Tender, RFP','RFP')"
	);

	function getCMSFields() {
		DateField::set_default_config('showcalendar', true);
    $fields = parent::getCMSFields();
    $fields->push(new TextField('Title', 'Title'));
    $fields->push(new TextField('AuthorName', 'Author Name'));
    $fields->push(new DateField('NewsItemDate', 'News Item Date'));
    $fields->push(new HTMLEditorField('Intro', 'Intro'));
    $fields->push(new HTMLEditorField('Body', 'Body'));
    $fields->push(new DropdownField('NewsType', 'News Type', singleton('NewsItem')->dbObject('NewsType')->enumValues()));
    return $fields;
  }
}

?>