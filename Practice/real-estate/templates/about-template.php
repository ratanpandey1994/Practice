<?php
/**
 * Template Name: About Us
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

<!-- About Start -->
<?php if( have_rows('about_beyond_expected') ): 
    while( have_rows('about_beyond_expected') ) : the_row(); ?>
<section class="aboutExpected bg-blue ptb100">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec textSec">
                <h2><?php echo get_sub_field('heading'); ?></h2>
				<div class="innerCotent">
					<?php echo get_sub_field('content'); ?>
				</div>
            </div>
			<div class="rightSec imgSec">
				<div class="aboutImg">
                	<img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" />
				</div>
            </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- About End -->

<!-- Counter Start -->
<?php if( have_rows('counter', 26) ): ?>
<section class="homeCounter aboutCounter bg-blue">
	<div class="wrapper">
		<ul class="serviceCounter scrollCounter">
		<?php while( have_rows('counter', 26) ) : the_row(); ?>
			<li>
				<span><?php echo get_sub_field('number', 26); ?></span>
				<p><?php echo get_sub_field('title', 26); ?></p>
			</li>
			<?php endwhile; ?>
		</ul>
	</div>
</section>
<?php endif; ?>
<!-- Counter End -->

<!-- More About Banner Start -->
<?php if(get_field('more_about_banner')){ ?>
<section class="moreAboutbg" style="background-image:url(<?php echo get_field('more_about_banner'); ?>);">
	<div class="wrapper">
	</div>
</section>
<?php } ?>
<!-- More About Banner End -->

<!-- Mission Statement More About Start -->
<?php if( have_rows('more_about_info') ): 
    while( have_rows('more_about_info') ) : the_row(); ?>
<section class="missionStatementAbout bg-blue">
	<div class="wrapper">
		<div class="moreAboutwrapper">
			<h2><?php echo get_sub_field('heading'); ?></h2>
			<?php if(get_sub_field('content')){ ?>
			<div class="moreAboutcontent">
				<?php echo get_sub_field('content'); ?>
			</div>
			<?php } ?>
		</div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Mission Statement More About End -->

<!-- Mission Statement Start -->
<?php if( have_rows('mission_statement') ): 
    while( have_rows('mission_statement') ) : the_row(); ?>
<section class="missionStatement bg-blue">
	<div class="wrapper">
		<div class="projectsGrid flex">
			<div class="projectsCol">
				<div class="headingTitle">
					<h2><?php echo get_sub_field('heading'); ?></h2>
					<?php if(get_sub_field('content')){ ?>
					<div class="headingDesc text-white">
						<?php echo get_sub_field('content'); ?>
					</div>
					<?php } ?>
				</div>
				<div class="missionLeftImage">
					<img src="<?php echo get_sub_field('left_image'); ?>" alt="<?php echo get_post_meta(get_sub_field('left_image', false), '_wp_attachment_image_alt', true); ?>" class="borderImg" />
				</div>
			</div>
			<div class="projectsCol">
				<div class="missionRightImage">
					<img src="<?php echo get_sub_field('right_image_first'); ?>" alt="<?php echo get_post_meta(get_sub_field('right_image_first', false), '_wp_attachment_image_alt', true); ?>" class="borderImg" />
					<img src="<?php echo get_sub_field('right_image_second'); ?>" alt="<?php echo get_post_meta(get_sub_field('right_image_second', false), '_wp_attachment_image_alt', true); ?>" class="borderImg" />
				</div>
			</div>
		</div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Mission Statement End -->

<!-- Gallery Start -->
<?php if( have_rows('gallery', 26) ): ?>
<section class="ourGallery bg-blue pb100">
	<div class="wrapper">
		<div class="headingTitle">
			<h2>Gallery</h2>
		</div>
		<div class="galleryswiper">
			<div class="swiper-wrapper">
				<?php while( have_rows('gallery', 26) ) : the_row(); ?>
				<div class="swiper-slide" data-swiper-autoplay="5000">
					<a data-fancybox="gallery" class="fancybox-popup" href="<?php echo get_sub_field('image', 26); ?>"><img src="<?php echo get_sub_field('image', 26); ?>" alt="<?php echo get_post_meta(get_sub_field('image', 26, false), '_wp_attachment_image_alt', true); ?>" /></a>
				</div>
				<?php endwhile; ?>
			</div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
</section>
<?php endif; ?>
<!-- Gallery End -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>