<?php
get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- Banner Section Start -->
<section class="innerBanner">
	<div class="wrapper">
		<div class="bannerTitle">
			<h1><?php the_title(); ?></h1>
		</div>
	</div>
</section>
<!-- Banner Section End -->

<!-- Project Slider Start -->
<?php if( have_rows('project_slider') ): ?>
<section class="homeSlider bg-blue">
	<div class="wrapper">
		<div class="homeswiper-container projectSlider">
			<div class="swiper-wrapper">
				<?php while( have_rows('project_slider') ) : the_row(); ?>
				<div class="swiper-slide" data-swiper-autoplay="3000" style="background-image:url(<?php echo get_sub_field('image'); ?>);">
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
<!-- Project Slider End -->

<!-- About Project Start -->
<section class="aboutProject aboutExpected bg-blue">
	<div class="wrapper">
		<div class="aboutProjectWrapper">
			<?php echo the_content(); ?>
		</div>
	</div>
</section>
<!-- Project Slider End -->

<!-- Gallery Start -->
<?php if( have_rows('project_gallery') ): ?>
<section class="ourGallery bg-blue pb100">
	<div class="wrapper">
		<div class="headingTitle">
			<h2>Project Images</h2>
		</div>
		<div class="galleryswiper">
			<div class="swiper-wrapper">
				<?php while( have_rows('project_gallery') ) : the_row(); ?>
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

<!-- Project Location Start -->
<?php if( have_rows('project_location') ): ?>
<section class="projectLocation bg-blue">
	<div class="wrapper">
		<?php if(get_field('location_heading')){ ?>
		<div class="aboutProjectWrapper text-center">
			<?php echo get_field('location_heading'); ?>
		</div>
		<?php } ?>
		<div class="projectLocationinner flex">
			<?php while( have_rows('project_location') ) : the_row(); ?>
			<div class="projectLocationGrid flex align-center">
				<div class="projectLocationIcon">
					<img src="<?php echo get_sub_field('icon'); ?>" alt="<?php echo get_post_meta(get_sub_field('icon', false), '_wp_attachment_image_alt', true); ?>" />
				</div>
				<div class="projectLocationDetails">
					<?php if(get_sub_field('time')){ ?>
					<h5><?php echo get_sub_field('time'); ?></h5>
					<?php } ?>
					<?php if(get_sub_field('location')){ ?>
					<p><?php echo get_sub_field('location'); ?></p>
					<?php } ?>
				</div>
			</div>
			<?php endwhile; ?>
		</div>
	</div>
</section>
<?php endif; ?>
<!-- Project Location End -->

<!-- Project Location Map Start -->
<?php if(get_field('location_map')){ ?>
<section class="projectLocationMap">
	<img src="<?php echo get_field('location_map'); ?>" alt="<?php echo get_post_meta(get_field('location_map', false), '_wp_attachment_image_alt', true); ?>" class="w100" />
</section>
<?php } ?>
<!-- Project Location Map End -->

<!-- Features Heading Start -->
<?php if(get_field('features_heading')){ ?>
<section class="projectFeaturesHeading bg-blue">
	<div class="wrapper">
		<div class="aboutProjectWrapper text-center">
			<?php echo get_field('features_heading'); ?>
		</div>
	</div>
</section>
<?php } ?>
<!-- Features Heading End -->

<!-- Features Start -->
<?php if( have_rows('project_features') ): ?>
<section class="projectFeatures" style="background-image:url(<?php echo get_field('features_banner'); ?>);">
	<div class="wrapper">
		<div class="featureswiper">
			<div class="swiper-wrapper">
				<?php while( have_rows('project_features') ) : the_row(); ?>
				<div class="swiper-slide" data-swiper-autoplay="5000">
					<div class="featureswiperInner">
						<?php if(get_sub_field('title')){ ?>
						<h3><?php echo get_sub_field('title'); ?></h3>
						<?php } ?>
						<?php if(get_sub_field('content')){ ?>
						<div class="featuresDesc">
							<?php echo get_sub_field('content'); ?>
						</div>
						<?php } ?>
					</div>
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
<!-- Features End -->

<!-- Floorplan Start -->
<?php if(get_field('floorplan_heading')){ ?>
<section class="floorPlans bg-blue ptb100">
	<div class="wrapper">
		<div class="aboutProjectWrapper text-center">
			<?php echo get_field('floorplan_heading'); ?>
		</div>
		<?php if( have_rows('floorplan_details') ): ?>
		<div class="floorplanswiper">
			<div class="swiper-wrapper">
				<?php while( have_rows('floorplan_details') ) : the_row(); ?>
				<div class="swiper-slide" data-swiper-autoplay="5000">
					<div class="floorplanswiperInner">
						<?php if(get_sub_field('title')){ ?>
						<div class="floorSection">
							<h3><?php echo get_sub_field('title'); ?></h3>
							<?php if(get_sub_field('image')){ ?>
							<img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" />
							<?php } ?>
						</div>
						<?php } ?>
						<div class="detailsSection">
							<ul>
								<?php if(get_sub_field('unit_type')){ ?>
								<li>
									<label>Unit Type</label>
									<p><?php echo get_sub_field('unit_type'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('description')){ ?>
								<li>
									<label>Description</label>
									<p><?php echo get_sub_field('description'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('orientation')){ ?>
								<li>
									<label>Orientation</label>
									<p><?php echo get_sub_field('orientation'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('res_area_sqft')){ ?>
								<li>
									<label>Res. Area (sq.ft)</label>
									<p><?php echo get_sub_field('res_area_sqft'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('balcony_area_sqft')){ ?>
								<li>
									<label>Balcony Area (sq.ft)</label>
									<p><?php echo get_sub_field('balcony_area_sqft'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('terrace_area__sqft')){ ?>
								<li>
									<label>Terrace Area (sq.ft)</label>
									<p><?php echo get_sub_field('terrace_area__sqft'); ?></p>
								</li>
								<?php } ?>
								<?php if(get_sub_field('total_area')){ ?>
								<li>
									<label>Total Area</label>
									<p><?php echo get_sub_field('total_area'); ?></p>
								</li>
								<?php } ?>
							</ul>
						</div>
					</div>
				</div>
				<?php endwhile; ?>
			</div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<?php endif; ?>
	</div>
</section>
<?php } ?>
<!-- Floorplan End -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>