<?php
/** Home Page Templte */
get_header();

while(have_posts()):
    the_post();
    ?>
    
<!-- Banner Slider Start -->
<?php if( have_rows('slider') ): ?>
<section class="homeSlider">
	<div class="homeswiper-container">
        <div class="swiper-wrapper">
			<?php while( have_rows('slider') ) : the_row(); ?>
            <div class="swiper-slide" data-swiper-autoplay="3000" style="background-image:url(<?php echo get_sub_field('image'); ?>);">
				<div class="sliderContent">
					<h2><?php echo get_sub_field('heading'); ?></h2>
					<?php if(get_sub_field('button_link')){ ?>
						<a href="<?php echo get_sub_field('button_link'); ?>" class="btn"><?php echo get_sub_field('button_name'); ?></a>
					<?php } ?>
				</div>
			</div>
			<?php endwhile; ?>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</section>
<?php endif; ?>
<!-- Banner Slider End -->

<!-- Counter Start -->
<?php if( have_rows('counter') ): ?>
<section class="homeCounter bg-blue ptb50">
	<div class="wrapper">
		<ul class="serviceCounter fixedCounter">
		<?php while( have_rows('counter') ) : the_row(); ?>
			<li>
				<span><?php echo get_sub_field('number'); ?></span>
				<p><?php echo get_sub_field('title'); ?></p>
			</li>
			<?php endwhile; ?>
		</ul>
	</div>
</section>
<?php endif; ?>
<!-- Counter End -->

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

<!-- Luxury and Privacy Start -->
<?php if( have_rows('luxury_privacy') ): 
    while( have_rows('luxury_privacy') ) : the_row(); ?>
<section class="luxuryPrivacy" style="background-image:url(<?php echo get_sub_field('image'); ?>);">
	<div class="wrapper">
		<div class="luxuryPrivacycontent">
			<h2><?php echo get_sub_field('title'); ?></h2>
		</div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Luxury and Privacy End -->

<!-- Our Projects Start -->
<?php
	$args = array('post_type' => 'projects', 'post_status' => 'publish', 'posts_per_page' => 4);	
	$the_query = new WP_Query($args);
	if($the_query->have_posts()) {
  ?>
<section class="ourProjects bg-blue ptb100">
	<div class="wrapper">
		<?php if( have_rows('our_project') ): 
    		while( have_rows('our_project') ) : the_row(); ?>
		<div class="headingTitle">
			<h2><?php echo get_sub_field('heading'); ?></h2>
		</div>
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
			<?php if(get_sub_field('button_link')){ ?>
				<a href="<?php echo get_sub_field('button_link'); ?>" class="btn"><?php echo get_sub_field('button_text'); ?></a>
			<?php } ?>
		</div>
		<?php endwhile; endif; ?>
	</div>
</section>
<?php } ?>
<!-- Our Projects End -->

<!-- Gallery Start -->
<?php if( have_rows('gallery') ): ?>
<section class="ourGallery bg-blue">
	<div class="wrapper">
		<div class="headingTitle">
			<h2>Gallery</h2>
		</div>
		<div class="galleryswiper">
			<div class="swiper-wrapper">
				<?php while( have_rows('gallery') ) : the_row(); ?>
				<div class="swiper-slide" data-swiper-autoplay="5000">
					<a data-fancybox="gallery" class="fancybox-popup" href="<?php echo get_sub_field('image'); ?>"><img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" /></a>
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

<!-- Clients Testimonial Start -->
<section class="clientsTestimonial bg-blue ptb100">
	<div class="wrapper">
		<?php if(get_field('clients_testimonial')){ ?>
		<div class="headingTitle">
			<?php echo get_field('clients_testimonial'); ?>
		</div>
		<?php } ?>
		<?php
			$args = array('post_type' => 'testimonials', 'post_status' => 'publish', 'posts_per_page' => 20);	
			$the_query = new WP_Query($args);
			if($the_query->have_posts()) {
		?>
		<div class="testimonialswiper">
			<div class="swiper-wrapper">
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
					$postID = get_the_id();
					$postType = get_post_type($postID);
					$thumbId = get_post_thumbnail_id($postID);
					$src = wp_get_attachment_image_src($thumbId, 'medium');
				?> 
				<div class="swiper-slide" data-swiper-autoplay="5000">
					<div class="testimonialsWrapper flex">
						<div class="testimonialsLeft">
							<img src="<?php echo $src[0]; ?>" alt="<?php the_title(); ?>">
							<h5><?php the_title(); ?></h5>
							<?php if(get_field('designation')){ ?>
								<span class="designation"><?php echo get_field('designation'); ?></span>
							<?php } ?>
						</div>
						<div class="testimonialsRight">
							<?php if(get_field('heading')){ ?>
								<h3><?php echo get_field('heading'); ?></h3>
							<?php } ?>
							<div class="testimonialsContent">
								<?php echo the_content(); ?>
							</div>
							<div class="viewAlltestimonial">
								<a href="#">View All Testimonials</a>
							</div>
						</div>
					</div>
				</div>
				<?php endwhile; wp_reset_postdata(); ?> 
			</div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<?php } ?>
	</div>
</section>
<!-- Clients Testimonial End -->

    <?php
endwhile;
get_footer();