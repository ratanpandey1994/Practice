<?php

function rosemaryandco_theme_support() {

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
	load_theme_textdomain( 'rosemaryandco' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

	// Add support for responsive embeds.
	add_theme_support( 'responsive-embeds' );


	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

}

add_action( 'after_setup_theme', 'rosemaryandco_theme_support' );


add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

	wp_enqueue_style( 'owl-css', get_stylesheet_directory_uri() . '/css/owl.carousel.min.css' );
	
	wp_enqueue_style( 'owl-theme-css', get_stylesheet_directory_uri() . '/css/owl.theme.default.min.css' );

	wp_enqueue_style( 'fancybox-css', get_stylesheet_directory_uri() . '/css/jquery.fancybox.min.css' );
	
	wp_enqueue_style( 'font-awesome-css', get_stylesheet_directory_uri() . '/css/font-awesome.min.css' );
}

add_action('wp_enqueue_scripts', 'theme_scripts');
function theme_scripts() {	
	wp_enqueue_script( 'owl-js', get_stylesheet_directory_uri() .'/js/owl.carousel.min.js', array('jquery'), '1.0', TRUE);
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

	// Side Bar Home
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Side Bar Home', 'twentytwenty' ),
				'id'          => 'sidebar-1',
				'description' => __( 'Widgets in this area will be displayed in the Side bar.' ),
			)
		)
	);

	// Side Bar Post Detail page
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Side Bar Post Details', 'twentytwenty' ),
				'id'          => 'sidebar-2',
				'description' => __( 'Widgets in this area will be displayed in the Side bar.' ),
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

/* Change Admin Logo */
function custom_loginlogo() {
	echo '<style type="text/css">
	body.login { background: #fff !important; }
	h1 a {background-image: url('.get_bloginfo('template_directory').'/images/rosemaryandco-logo.png) !important; width: 250px!important; height: 70px!important; background-size: 250px!important; }
	</style>';
	}
	add_action('login_head', 'custom_loginlogo');
	
	remove_action('wp_head','rest_output_link_wp_head');
	
	add_filter( 'login_headerurl', 'custom_loginlogo_url' );
	function custom_loginlogo_url($url) {
		return 'https://blog.rosemaryandco.com/';
	}

// Here we hook into our template action - just before the date tag, which is the first item in the container.
add_action(
	'tribe_template_after_include:events/v2/widgets/widget-events-list/event/date-tag',
	'my_action_add_event_featured_image',
	15,
	3
  );
   
  // Added image in event list 

  // Here we utilize the hook variables to get our event, find the image, and echo the thumbnail.
  function my_action_add_event_featured_image( $file, $name, $template ) {
	// Get the event for reference - we'll need it.
	$event = $template->get('event');
   
	$link = sprintf(
	  '<a href="%1$s">%2$s</a>',
	  get_the_post_thumbnail_url( $event ),
	  get_the_post_thumbnail( $event, 'thumbnail', array( 'class' => 'alignleft' ) )
	);
   
	echo $link;
  }

// Remove extra field  from comment
function yoursitename_remove_comment_url($arg) {
$arg['url'] = '';
return $arg;
}
	
add_filter('comment_form_default_fields', 'yoursitename_remove_comment_url');
add_filter( 'comment_form_defaults', 'gm_textarea_placeholder' );

function gm_textarea_placeholder( $fields ) {
	$fields['comment_field'] = str_replace(
		'<textarea',
		'<textarea placeholder="Write comment here..."',
		$fields['comment_field']
	);

	return $fields;
}

	// This code block will add Placeholder text to WordPress comment's Author, Email, URL fields.
add_filter( 'comment_form_default_fields', 'crunchify_comment_placeholders' );
function crunchify_comment_placeholders( $crunchify_textfield ) {
    $crunchify_textfield['author'] = str_replace(
        '<input',
        '<input placeholder="Name"',
        $crunchify_textfield['author']
    );
    $crunchify_textfield['email'] = str_replace(
        '<input',
        '<input placeholder="Email"',
        $crunchify_textfield['email']
    );
    return $crunchify_textfield;
}
function mycustom_comment_form_title_reply( $defaults ) {  
$defaults['title_reply'] = __( 'Write comment here...' );  
return $defaults;
}
add_filter( 'comment_form_defaults', 'mycustom_comment_form_title_reply' );

function rosemaryandco_modify_category_query( $query ) {
    if ( ! is_admin() && $query->is_main_query() ) {
        if ( $query->is_category() || $query->is_author()) {
            $query->set( 'posts_per_page', get_option('posts_per_page') );
        } 
    } 
}
add_action( 'pre_get_posts', 'rosemaryandco_modify_category_query' );


