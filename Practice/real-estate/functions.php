<?php

function eaglehvacr_theme_support() {

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Custom background color.
	add_theme_support(
		'custom-background',
		array(
			'default-color' => 'f5efe0',
		)
	);

	// Set content-width.
	global $content_width;
	if ( ! isset( $content_width ) ) {
		$content_width = 580;
	}

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// Set post thumbnail size.
	//set_post_thumbnail_size( 'full', 1200, 9999 );

	// Add custom image size used in Cover Template.
	//add_image_size( 'biosyn-fullscreen', 1980, 9999 );
	
	// Custom logo.
	$logo_width  = 120;
	$logo_height = 90;

	// If the retina setting is active, double the recommended width and height.
	if ( get_theme_mod( 'retina_logo', false ) ) {
		$logo_width  = floor( $logo_width * 2 );
		$logo_height = floor( $logo_height * 2 );
	}

	add_theme_support(
		'custom-logo',
		array(
			'height'      => $logo_height,
			'width'       => $logo_width,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
			'navigation-widgets',
		)
	);

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Twenty Twenty, use a find and replace
	 * to change 'biosyn' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'eaglehvacr' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

	// Add support for responsive embeds.
	add_theme_support( 'responsive-embeds' );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

}


add_action( 'after_setup_theme', 'eaglehvacr_theme_support' );


add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

	wp_enqueue_style( 'owl-css', get_stylesheet_directory_uri() . '/css/owl.carousel.min.css' );
	
	wp_enqueue_style( 'owl-theme-css', get_stylesheet_directory_uri() . '/css/owl.theme.default.min.css' );

	wp_enqueue_style( 'swiper-css', get_stylesheet_directory_uri() . '/css/swiper.min.css' );

	wp_enqueue_style( 'fancybox-css', get_stylesheet_directory_uri() . '/css/jquery.fancybox.min.css' );
	
	wp_enqueue_style( 'font-awesome-css', get_stylesheet_directory_uri() . '/css/font-awesome.min.css' );
}

add_action('wp_enqueue_scripts', 'theme_scripts');
function theme_scripts() {	
	wp_enqueue_script( 'owl-js', get_stylesheet_directory_uri() .'/js/owl.carousel.min.js', array('jquery'), '1.0', TRUE);
	wp_enqueue_script( 'swiper-js', get_stylesheet_directory_uri() .'/js/swiper.min.js', array('jquery'), '1.0', TRUE);
	wp_enqueue_script( 'fancybox-js', get_stylesheet_directory_uri() .'/js/jquery.fancybox.min.js', array('jquery'), '1.0', TRUE);
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() .'/js/custom.js', array('jquery'), '1.0', TRUE);
}

/**
 * Register navigation menus uses wp_nav_menu in five places.
 *
 * @since Twenty Twenty 1.0
 */
function twentytwenty_menus() {

	$locations = array(
		'primary'  => __( 'Primary Menu', 'twentytwenty' ),
		'mobile'   => __( 'Mobile Menu', 'twentytwenty' ),
		'footer'   => __( 'Footer Menu', 'twentytwenty' ),
		'social'   => __( 'Social Menu', 'twentytwenty' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'twentytwenty_menus' );

/**
 * Register widget areas.
 */
function twentytwenty_sidebar_registration() {

	// Arguments used in all register_sidebar() calls.
	$shared_args = array(
		'before_title'  => '<h2 class="widget-title subheading heading-size-3">',
		'after_title'   => '</h2>',
		'before_widget' => '<div class="widget %2$s"><div class="widget-content">',
		'after_widget'  => '</div></div>',
	);

	// Top Contact
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Top Contact', 'twentytwenty' ),
				'id'          => 'top-contact',
				'description' => __( 'Widgets in this area will be displayed in the first column in the footer.' ),
			)
		)
	);

}

add_action( 'widgets_init', 'twentytwenty_sidebar_registration' );

if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Theme Options',
        'menu_title'    => 'Theme Options',
        'menu_slug'     => 'theme-options',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
    
}

// Svg Upload
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
  }

add_filter('upload_mimes', 'cc_mime_types');