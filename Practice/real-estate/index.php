<?php
/** Main or Common Templte */
get_header();
    ?>
    
<section class="blogBanner">
	<div class="wrapper">
		<?php
		$custom_query_args = array(
			'post_type'  => 'post',
			'meta_key'   => '_is_ns_featured_post',
			'meta_value' => 'yes',
			'posts_per_page' => 1,
		);
		// Get current page and append to custom query parameters array
		//$custom_query_args['paged'] = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

		$custom_query = new WP_Query( $custom_query_args ); ?>
		<?php
		// Pagination fix
		global $wp_query;
		$temp_query = $wp_query;
		$wp_query   = NULL;
		$wp_query   = $custom_query;
		?>
		<?php if ( $custom_query->have_posts() ) : ?>

		<!-- the loop -->
		<?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>
		<div class="featuredBlog flex align-center">
			<div class="featuredBlogLeft">
				<span class="featuredText">Featured Blog</span>
				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<?php echo the_excerpt(); ?>
				<div class="viewAlltestimonial">
					<a href="<?php the_permalink(); ?>" class="readMore">Read More</a>
				</div>
			</div>
			<div class="featuredBlogRight">
				<img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title();?>" />
			</div>
		</div>
		<?php endwhile; wp_reset_query(); ?>	
		<!-- end of the loop -->
		<?php endif; ?>
	</div>
</section>

<section class="aboutExpected bg-blue ptb80">
	<div class="wrapper">
		<div class="aboutProjectWrapper text-center">
			<h1 class="text-white">Latest Blog</h1>
		</div>
		<div class="mainPost">
			<ul class="allPost">
				<?php  
				wp_reset_query();
				$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; 
				$featuredPostId = get_posts(array('post_type' => 'post', 'post_status' => 'publish', 'fields' => 'ids', 'numberposts' => 1, 'meta_key' => '_is_ns_featured_post', 'meta_value' => 'yes', 'meta_compare' => '='));
				$finalPostExcludeIds = array_merge($featuredPostId);

				wp_reset_query();
				$per_page = get_option('posts_per_page');
				$args = array('post_type' => 'post', 'post_status' => 'publish', 'paged' => $paged, 'posts_per_page' => $per_page, 'orderby' => 'date', 'order' => 'DESC', 'post__not_in' => $finalPostExcludeIds ); 
				$loop = new WP_Query($args);
				$number_of_post = $loop->found_posts;

				?>
				<?php if ( $loop->have_posts()) : while ( $loop->have_posts()) :  $loop->the_post(); ?>
				<li>
					<div class="itemLatestpost">
						<figure>
							<a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="post" /></a>
						</figure>
						<div class="postDetails">
							<h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<div class="viewAlltestimonial">
								<a href="<?php the_permalink(); ?>" class="readMore">Read More</a>
							</div>
						</div>
					</div>
				</li>
				<?php endwhile; endif; ?>
			</ul>
			<?php if($loop->found_posts > $per_page): ?>
			<nav class="navigation pagination">
				<div class="nav-links">
					<div class="pagination-wrapper">
						<?php 

						$big = 999999999;
						echo paginate_links(array(
							'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
							'format' => '?paged=%#%',
							'end_size' => 5,
							'current' => $paged,
							'total' => ceil($number_of_post / $per_page), // like 10 items per page
							'prev_text' => __( 'Previous', 'textdomain' ),
							'next_text' => __( 'Next', 'textdomain' ),
						));
						?>			

					</div>
				</div>
			</nav>
			<?php endif; ?>
			<?php wp_reset_query(); ?>
		</div>
	</div>
</section>

<?php
get_footer();