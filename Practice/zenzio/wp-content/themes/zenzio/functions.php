<?php

function biosyn_theme_support() {

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
	load_theme_textdomain( 'biosyn' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

	// Add support for responsive embeds.
	add_theme_support( 'responsive-embeds' );


	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

}

add_action( 'after_setup_theme', 'biosyn_theme_support' );

add_action( 'after_setup_theme', 'setup_woocommerce_support' );

 function setup_woocommerce_support()
{
  add_theme_support('woocommerce');
}

remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );


add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'font-css', get_stylesheet_directory_uri() . '/assets/fonts/font.css' );
	wp_enqueue_style( 'owl-css', get_stylesheet_directory_uri() . '/css/owl.carousel.min.css' );	
	wp_enqueue_style( 'owl-theme-css', get_stylesheet_directory_uri() . '/css/owl.theme.default.min.css' );
}

add_action('wp_enqueue_scripts', 'theme_scripts');
function theme_scripts() {	
	wp_enqueue_script( 'owl-js', get_stylesheet_directory_uri() .'/js/owl.carousel.min.js', array('jquery'), '1.0', TRUE);
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() .'/js/custom.js', array('jquery'), '1.0', TRUE);

}

/**
 * Register navigation menus uses wp_nav_menu in five places.
 *
 * @since Twenty Twenty 1.0
 */
function zezio_menus() {

	$locations = array(
		'primary'  => __( 'Primary Menu', 'zezio' ),
		'secondary'  => __( 'Footer Menu', 'zezio' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'zezio_menus' );

/**
 * Register widget areas.
 */
function zezio_sidebar_registration() {

	// Arguments used in all register_sidebar() calls.
	$shared_args = array(
		'before_title'  => '<h2 class="widget-title subheading heading-size-3">',
		'after_title'   => '</h2>',
		'before_widget' => '<div class="widget %2$s"><div class="widget-content">',
		'after_widget'  => '</div></div>',
	);

	// Sidebar
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Sidebar 1', 'zenzio' ),
				'id'          => 'sidebar_1',
				'description' => __( 'Widgets in this area will be displayed in the third column in the footer.' ),
			)
		)
	);


}

add_action( 'widgets_init', 'zezio_sidebar_registration' );

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
h1 a {background-image: url('.get_bloginfo('template_directory').'/images/logo.svg) !important; width: 230px!important; height: 70px!important; background-size: contain !important; }
</style>';
}
add_action('login_head', 'custom_loginlogo');

function get_all_form_fields($form_id){
        $form = RGFormsModel::get_form_meta($form_id);
        $fields = array();

        if(is_array($form["fields"])){
            foreach($form["fields"] as $field){
                if(isset($field["inputs"]) && is_array($field["inputs"])){

                    foreach($field["inputs"] as $input)
                        $fields[] =  array($input["id"], GFCommon::get_label($field, $input["id"]));
                }
                else if(!rgar($field, 'displayOnly')){
                    $fields[] =  array($field["id"], GFCommon::get_label($field));
                }
            }
        }
        //echo "<pre>";
        //print_r($fields);
        //echo "</pre>";
        return $fields;
    }

add_filter( 'gform_entries_column_filter', 'zenzio_modify_entry_view', 10, 5 );

function zenzio_modify_entry_view( $value, $form_id, $field_id, $entry, $query_string ){
	  $planValArr = explode('(',$value);
	   
	  if( $field_id == 7 && $form_id == 3 ){
	  $planLabelsArr = RGFormsModel::get_field( $form_id, $field_id )->choices;
	  foreach($planLabelsArr as $key => $val){
		  if($val['value']== (int)$planValArr[0]){
			return   $val['text'];
		  }
	  }
    }
  
    return $value;
}

add_action( 'gform_stripe_customer_after_create', 'update_customer_data', 10, 4 );
function update_customer_data( $customer, $feed, $entry, $form ) {
   
    if ( $form['id'] != 3 ) {
        return;
    }
 
    // First Name and Last Name from field id 1 joined into one string
     $name = rgar( $entry, '1' ) . ' ' . rgar( $entry, '3' );
    // Array containing the data you want to update
    $customer_data = array(
        'name'    => $name
    );
 
    $result = $customer->update( $customer->id, $customer_data );
}