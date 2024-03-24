<?php

get_header('new');
global $query_string;
    ?>
    
	<section class="category-title">
	<div class="wrapper">
		<h1 class="entry-title"><?php echo sprintf( __( '%s Search Results for ', 'html5blank' ), $wp_query->found_posts ); echo get_search_query(); ?></h1>
	</div>
	</section>

<!-- Blog Start -->
<section class="blogSection">
	<div class="wrapper">
		<div class="blogDetails">
			<div class="leftSide">
			<div class="postSection gridView">
			
					<?php if ( have_posts()) : while ( have_posts()) :  the_post(); ?>
					<div class="post-item">
						<?php if(get_post_thumbnail_id(get_the_id())){ ?>
								<figure>
									<a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="post" /></a>
								</figure>
						<?php } else { ?>
						<?php if( have_rows('blog_featured_image', 'option') ): 
						$images = [];
									while( have_rows('blog_featured_image', 'option') ) : the_row(); $images[] = get_sub_field('image', 'option'); 
								 endwhile;
								$randKey = array_rand($images, 1);
								?>
								<figure>
									<a href="<?php the_permalink();?>"><img src="<?php echo $images[$randKey] ?>" alt="post" /></a>
								</figure>
								<?php

							endif;
						}
						?>
						<div class="details">
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<p><?php echo wp_trim_words(get_the_content(), 20); ?></p>
							<div class="read-more">
								<a href="<?php the_permalink();?>">KEEP READING...</a>
							</div>
							<?php /*
							<div class="metaPostDetails">
								<div class="author">Posted By: <?php the_author_posts_link(); ?></div>
								<div class="socialShareIcon"><?php echo do_shortcode('[Sassy_Social_Share]') ?></div>
								<div class="publishedAt"><?php echo get_the_date('F j, Y') ?></div>
							</div>*/ ?>
						</div>
					</div>
					
				<?php
				endwhile; endif; 
				//wp_reset_query(); 
				?>
				
				</div>
				<nav class="navigation pagination">
					<div class="nav-links">
						<div class="pagination-wrapper">
			      			<?php 
				  
								// $big = 999999999;
								// echo paginate_links(array(
								// 	'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
								// 	'format' => '?paged=%#%',
								// 	'end_size' => 5,
								// 	'current' => $paged,
								// 	'total' => ceil($number_of_post / $per_page), // like 10 items per page
								// 	'prev_text' => __( 'Previous', 'textdomain' ),
								// 	'next_text' => __( 'Next', 'textdomain' ),
								// ));
						?>			
			 
						</div>
					</div>
				</nav>
				<?php wp_reset_query(); ?>
			</div>
			<div class="rightSide">
				<?php dynamic_sidebar( 'sidebar-1' ); ?>
			</div>
		</div>
		
	</div>
</section>
<!-- Blog Section -->

    <?php
get_footer();