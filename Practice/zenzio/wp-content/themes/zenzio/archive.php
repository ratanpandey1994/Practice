<?php

get_header();

?>

<?php
	$term = get_queried_object();
	$post_type = 'post';
	$taxonomy_slug = 'category';
	$current_tax = $wp_query->get_queried_object();
	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	$posts_per_page = -1;

	$search_meta_query_featured = array('relation' => 'AND');
	global $tax_query;
	$tax_query = $current_tax-> term_id;
	$args_post = array(
		'post_type' => $post_type, 
		'posts_per_page' => $posts_per_page, 
		//'orderby' => 'DATE',
		//'order'   => 'DESC',
		'tax_query' => array(
			array(
				'taxonomy' => $taxonomy_slug,
				'field' => 'term_id',
				'terms' => $tax_query,
			)
		),
		'meta_query'	=> $search_meta_query_featured,
	);
	$post_archive = new WP_Query( $args_post );

	$term = get_term( $tax_query, $taxonomy_slug );
	$term_link = get_term_link( $term );
?>

<!-- Banner Section -->
<section class="inner-banner" style="background-image:url('<?php echo get_stylesheet_directory_uri(); ?>/images/inner-banner.jpg'); ?>)">
    <div class="wrapper">
		<div class="bannercontent">
			<h1><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
		</div> 
    </div>
</section>
<!-- Banner Section -->

<!-- ============================= Blog Overview Section ===================== -->
<section class="blog-overview-section ptb80">
	<div class="wrapper">
		<div class="row">
			<div class="main-content">			

				<div class="blog-standard content-post">
					<?php while ( $post_archive->have_posts() ) : $post_archive->the_post(); ?>
					<article class="post-item post-standard post type-post status-publish format-standard has-post-thumbnail hentry">
						<a href="<?php echo get_permalink(); ?>" class="innerCol">
							<?php $thumbnail_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); 
							if($thumbnail_image != ''): ?>
							<div class="post-thumb">
								<img src="<?=$thumbnail_image;?>" class="img-responsive attachment" alt="<?php echo the_title(); ?>">
							</div>
							<?php endif; ?>
							<div class="post-info">
								<h2 class="post-title"><?php the_title(); ?></h2>
							</div>					
						</a>
					</article>
					<?php endwhile; ?>
				</div>
				<nav class="navigation pagination">
					<div class="nav-links">
						<div class="pagination-wrapper">
							<?php if (function_exists("pagination")) {
	pagination($loop->max_num_pages);
} ?>
						</div>
					</div>
				</nav>
			</div>
			<?php wp_reset_query(); ?>
			<!-- =============== BLOG SIDEBAR ============= -->
			<?php //get_template_part('template-parts/blog-sidebar'); ?>
			<!-- =============== END :: BLOG SIDEBAR ============= -->
		</div>
	</div>
</section>
<!-- ============================= End:Blog Overview Section ===================== -->

<?php get_footer(); ?>