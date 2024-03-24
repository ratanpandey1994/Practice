<?php

get_header();
while(have_posts()):
    the_post();
    ?>

<section class="blogBanner">
	<div class="wrapper">
		<div class="featuredBlog flex align-center">
			<div class="featuredBlogLeft">
				<h1 class="text-white"><?php the_title(); ?></h1>
				<?php echo the_excerpt(); ?>
				<div class="postAuthorBio flex align-center">
					<div class="authorAvatar">
						<?php echo get_avatar( get_the_author_meta()); ?>
					</div>
					<div class="authorDetails">
						<div class="author"><span itemprop="name"><?php the_author() ?></span></div>
						<span class="publishedAt"><?php echo get_the_date('F j, Y') ?></span>
						<span class="readTime"><?php echo do_shortcode('[rt_reading_time postfix="min read" postfix_singular="minute"]'); ?></span>
					</div>
				</div>				
			</div>
			<div class="featuredBlogRight">
				<img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title();?>" />
			</div>
		</div>
	</div>
</section>

<!-- Single Blog Start -->
<section class="singlePost aboutExpected bg-blue ptb80">
	<div class="wrapper">
		<div class="blogShareicons">
			<?php echo do_shortcode('[Sassy_Social_Share]') ?>
		</div>
		<div class="blogDetails">
			<div class="blogDetailsContent">
				<?php the_content() ?>
			</div>
		</div>
		
	</div>
</section>
<!-- Single Blog Section -->

<!-- Related Blog Start -->
<section class="relatedPost bg-blue ptb60">
	<div class="wrapper">
		<h3 class="text-center text-white relatedHeading">Related Posts</h3>
		<div class="mainPost">
			<ul class="allPost">
				<?php
				query_posts(array('post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => 3, 'orderby' => 'date', 'order' => 'DESC', 'post__not_in' => array($post->ID) )); ?>
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<?php if(get_post_thumbnail_id(get_the_id())){ ?>
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
				<?php } ?>
				<?php endwhile; endif; wp_reset_query(); ?>
			</ul>
		</div>
		</div>
</section>
<!-- Related Blog Section -->

    <?php
	endwhile;
get_footer();