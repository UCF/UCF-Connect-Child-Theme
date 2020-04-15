<?php
define( 'Connect_THEME_DIR', trailingslashit( get_stylesheet_directory() ) );

include_once Connect_THEME_DIR . 'includes/header-functions.php';

function my_theme_enqueue_styles() {
 
    $parent_style = 'Colleges-Theme-style';
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/static/css/style.min.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/css/custom.css?'.rand(111,9999),
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}