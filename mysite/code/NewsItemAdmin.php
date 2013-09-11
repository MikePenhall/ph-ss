<?php

class NewsItemAdmin extends ModelAdmin {

  public static $managed_models = array(
    'NewsItem'
  );

  static $has_many = array(
    'NewsItems' => 'NewsItems'
  );

  static $url_segment = 'news-items';

  static $menu_title = 'News Items';

}



?>
