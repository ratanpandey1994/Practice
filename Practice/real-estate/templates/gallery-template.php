<?php
/**
 * Template Name: Gallery
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

<!-- Gallery Start -->
<?php if( have_rows('gallery_images') ): ?>
<section class="aboutExpected bg-blue ptb100">
	<div class="wrapper">
		<div class="galleryImages flex">
			<?php while( have_rows('gallery_images') ) : the_row(); ?>
			<div class="galleryCol">
				<a data-fancybox="gallery" class="fancybox-popup" href="<?php echo get_sub_field('image'); ?>"><img src="<?php echo get_sub_field('image'); ?>" class="borderImg" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" /></a>
			</div>
			<?php endwhile; ?>
		</div>
	</div>
</section>
<?php endif; ?>
<!-- Gallery End -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>