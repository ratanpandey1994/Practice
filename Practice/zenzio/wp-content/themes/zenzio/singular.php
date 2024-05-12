<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage BioSyn Composite
 * @since 1.0.0
 */

get_header();
?>
<?php
	$post_type = get_post_type(); 
	$category_type = get_query_var( 'taxonomy' );
	$category_slug = get_query_var( 'term' ); 
	$current_tax = $wp_query->get_queried_object();
	//Page Banner at Header
	
	if($post_type==='post' || $category_type == 'category'):
		get_template_part( 'template-parts/content-blog');
	else:
get_template_part( 'template-parts/header-banner');
?>
<main id="site-content" role="main" class="main-container">
	<div class="container">
	<?php

	if ( have_posts() ) {

		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );
		}
	}

	?>
	</div>
</main><!-- #site-content -->
<?php endif; // END PAGE CONTENT 
get_footer(); 
?>