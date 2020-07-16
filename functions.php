<?php

//include_once 'includes/utilities.php';
include_once 'includes/config.php';
//include_once 'includes/meta.php';
include_once 'includes/wp-bs-navwalker.php';

include_once 'includes/header-functions.php';
include_once 'includes/person-functions.php';
include_once 'includes/degree-functions.php';


define( 'UCN_THEME_DIR', trailingslashit( get_stylesheet_directory() ) );

include_once UCN_THEME_DIR . 'includes/header-functions.php';

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'Colleges-Theme-style';
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/static/css/style.min.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/css/custom.css?'.rand(111,9999),
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
?>