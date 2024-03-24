<?php
/**
 * Template Name: Projects
 */
get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- Banner Section Start -->
<section class="innerBanner" <?php if(get_the_post_thumbnail_url()){ ?>style="background-image:url(<?php echo get_the_post_thumbnail_url(get_the_ID(),'original'); ?>);" <?php } ?>>
	<div class="wrapper">
		<div class="bannerTitle">
			<h1><?php the_title(); ?></h1>
		</div>
	</div>
</section>
<!-- Banner Section End -->

<!-- Our Projects Start -->
<?php
	$args = array('post_type' => 'projects', 'post_status' => 'publish', 'posts_per_page' => 12);	
	$the_query = new WP_Query($args);
	if($the_query->have_posts()) {
  ?>
<section class="ourProjects projectsMain bg-blue ptb100">
	<div class="wrapper">
		<div class="projectsGrid flex">
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
				$postID = get_the_id();
				$postType = get_post_type($postID);
				$thumbId = get_post_thumbnail_id($postID);
				$src = wp_get_attachment_image_src($thumbId, 'medium');
			?> 
			<div class="projectsCol">
				<a href="<?php the_permalink();?>" class="projectLink"><img src="<?php echo $src[0]; ?>" alt="<?php the_title(); ?>"></a>
				<div class="projectsSub">
					<h3>
						<a href="<?php the_permalink();?>"><?php the_title(); ?></a>
					</h3>
					<?php if(get_field('location')){ ?>
						<p><?php echo the_field('location'); ?></p>
					<?php } ?>
				</div>
			</div>
			<?php endwhile; wp_reset_postdata(); ?> 
		</div>
		<div class="viewAllprojects text-center">
			<a href="#" class="btn">Load More</a>
		</div>
	</div>
</section>
<?php } ?>
<!-- Our Projects End -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>