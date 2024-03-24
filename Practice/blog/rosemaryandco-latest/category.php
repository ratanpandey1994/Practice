<?php
get_header('new');
$catObj =  get_queried_object();
//print_r($catObj);
    ?>
    
	<section class="category-title uuuuu">
	<div class="wrapper">
		<h1 class="entry-title"><?php echo $catObj->name; ?></h1>
	</div>
	</section>

<!-- Blog Start -->
<section class="blogSection">
	<div class="wrapper">
		<div class="blogDetails">
			<div class="leftSide">
			<div class="postSection gridView">
			<?php  
					$paged = (get_query_var('paged')) ? get_query_var('paged') : 1; 
				    $per_page = get_option('posts_per_page');
					$catArgs = array(
						'post_type' => 'post', 
						'post_status' => 'publish', 
						'paged' => $paged, 
						'posts_per_page' => $per_page, 
						'orderby' => 'date', 
						'order' => 'DESC',
						'tax_query' => array(array(
							
							'taxonomy' => 'category',
							'terms' => $catObj->slug,
							'field' => 'slug',
							'include_children' => true,
							'operator' => 'IN'
							
						)),
					); 
					$loop = new WP_Query($catArgs);
					$number_of_post = $loop->found_posts;
					
					?>
					<?php if ( $loop->have_posts()) : while ( $loop->have_posts()) :  $loop->the_post(); ?>
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
						</div>
					</div>
					
				<?php
				endwhile; endif; 
				wp_reset_query(); 
				?>
				
				</div>
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