<?php

define( 'UCN_THEME_DIR', trailingslashit( get_stylesheet_directory() ) );

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
//add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'Colleges-Theme-style';
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/static/css/style.min.css' );

    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/css/custom.css?'.rand(111,9999),
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_style( 'royalslider-custom',
        get_stylesheet_directory_uri() . '/css/royalslider/royalslider.css?'.rand(111,9999),
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_style( 'royalslider-default',
        get_stylesheet_directory_uri() . '/css/royalslider/skins/default/rs-default.css?'.rand(111,9999),
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script( 'royalslider-min-js', get_template_directory_uri() . '/css/royalslider/jquery.royalslider.min.js');
}

//function my_theme_enqueue_scripts() {
//    wp_enqueue_script( 'test-this-file', get_template_directory_uri() . '/royalslider/test-this-file.js');
//}

?>