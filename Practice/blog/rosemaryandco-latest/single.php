<?php

get_header('new');
while(have_posts()):
    the_post();
    ?>
    


<!-- Blog Start -->
<section class="blogSection singlePost">
	<div class="wrapper">
		<div class="blogDetails">
			<div class="leftSide">
					<div class="post-item">
						<?php if(get_post_thumbnail_id(get_the_id())){ ?>
						<figure>
							<a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="post" /></a>
						</figure>
						<?php } ?>
						<div class="details">
							<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
							<?php the_content() ?>
						</div>
						<div class="metaPostDetails">
								<div class="author">Posted By: <?php the_author_posts_link(); ?></div>
								<div class="socialShareIcon"><?php echo do_shortcode('[Sassy_Social_Share]') ?></div>
								<div class="publishedAt"><?php echo get_the_date('F j, Y') ?></div>
							</div>
					</div>
					<?php comments_template(); ?>
					
				</div>
			<div class="rightSide">
				<?php dynamic_sidebar( 'sidebar-2' ); ?>
			</div>
		</div>
		
	</div>
</section>
<!-- Blog Section -->
<!-- Blog Start -->
<section class="related-post">
	<div class="wrapper">
		<h4>You May Also Read This...</h4>
		<div class="post-wrap">
				<ul class="featured-slider owl-carousel">
					<?php
					
					query_posts(array('post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => 10, 'orderby' => 'date', 'order' => 'DESC', 'post__not_in' => array($post->ID) )); ?>
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<?php if(get_post_thumbnail_id(get_the_id())){ ?>
					<li class="postItemSinglepage">
						<div class="item">
							<figure>
								<a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="post" /></a>
							</figure>
							<div class="details">
								<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							</div>
						</div>
					</li>
					<?php } ?>
					<?php endwhile; endif; wp_reset_query(); ?>
				</ul>
			</div>
		</div>
</section>
<!-- Blog Section -->

    <?php
	endwhile;
get_footer();