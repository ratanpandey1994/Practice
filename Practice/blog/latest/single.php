<?php
/** Home Page Templte */
get_header();

while(have_posts()):
    the_post();
    ?>
	
<!-- Banner Start -->
<?php if( have_rows('banner_section') ): 
    while( have_rows('banner_section') ) : the_row(); ?>
<section class="bannerSection bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec">
                <?php echo get_sub_field('banner_details'); ?>
            </div>
			<div class="rightSec">
                	<img src="<?php echo get_sub_field('banner_image'); ?>" alt="<?php echo get_post_meta(
					 get_sub_field('banner_image', false), '_wp_attachment_image_alt', true); ?>" />
				 </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Banner End -->

<!-- Pick your Industry Start -->
<?php if( have_rows('pick_your_industry') ): 
    while( have_rows('pick_your_industry') ) : the_row(); ?>
<section class="bannerSection bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec">
                <?php echo get_sub_field('details'); ?>
            </div>
			<div class="rightSec">
				<ul>
				<?php while( have_rows('industry_services') ) : the_row(); ?>
				  <li>
					<img src="<?php echo get_sub_field('icon'); ?>" alt="<?php echo get_post_meta(get_sub_field('icon', false), '_wp_attachment_image_alt', true); ?>" />
					<?php echo get_sub_field('service_details'); ?>
					</li>
				 <?php endwhile; ?>
				</ul>
                	
		    </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Pick your Industry End -->

<!-- Category Leaders Start -->
<?php if( have_rows('category_leaders') ): 
    while( have_rows('category_leaders') ) : the_row(); ?>
<section class="categoryLeaders bg-blue">
	<div class="wrapper">
		 <?php echo get_sub_field('category_heading'); ?>
		<div class="twocolumnwrap flex align-center">
            <ul>
				<?php while( have_rows('company_image') ) : the_row(); ?>
				  <li>
					<img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" />
					</li>
				 <?php endwhile; ?>
		   </ul>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Category Leaders End -->

<!-- CTA Start -->
<?php if( get_field('cta') ):  ?>
<section class="cta bg-blue">
	<div class="wrapper">
		 <?php echo get_field('cta'); ?>
	</div>
</section>
<?php  endif; ?>
<!-- CTA End -->


<!-- CTA Start -->
<?php if( have_rows('about_service') ):  ?>
<section class="aboutService bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <ul>
				<?php while( have_rows('about_service') ) : the_row(); ?>
				  <li>
					<?php echo get_sub_field('details'); ?>
					  <figure><img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" /></figure>
					</li>
				 <?php endwhile; ?>
		   </ul>
        </div>
	</div>
</section>
<?php endif; ?>
<!-- CTA End -->

<!-- Technology Start -->
<?php if( have_rows('technology') ): 
    while( have_rows('technology') ) : the_row(); ?>
<section class="technologySection bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec">
                <?php echo get_sub_field('technology_heading'); ?>
            </div>
			<div class="rightSec">
				<ul>
				<?php while( have_rows('technology_details') ) : the_row(); ?>
				  <li>					
					<p><?php echo get_sub_field('name'); ?></p>
					  <figure><img src="<?php echo get_sub_field('image'); ?>" alt="<?php echo get_post_meta(get_sub_field('image', false), '_wp_attachment_image_alt', true); ?>" /></figure>
					</li>
				 <?php endwhile; ?>
				</ul>
                	
		    </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Technology End -->

<!-- Testimonials Start -->
<?php if( have_rows('testimonials_details') ): 
    while( have_rows('testimonials_details') ) : the_row(); ?>
<section class="testimonialsSection bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec">
                <?php echo get_sub_field('heading'); ?>
				<div class="custom-nav1"></div> 
            </div>
			<div class="rightSec">
				<ul class=" featured-slider owl-carousel">
				<?php while( have_rows('testimonial') ) : the_row(); ?>
				  <li  class="postItemSinglepage">	
					  <div class="item">
					<img src="<?php echo get_sub_field('client_logo'); ?>" alt="<?php echo get_post_meta(get_sub_field('client_logo', false), '_wp_attachment_image_alt', true); ?>" />
					<p><?php echo get_sub_field('content'); ?></p>
					<div class="testimonialdesignation">
						<div class="avatar">
							<img src="<?php echo get_sub_field('avatar_image'); ?>" alt="<?php echo get_post_meta(get_sub_field('avatar_image', false), '_wp_attachment_image_alt', true); ?>" />
						</div>
						<div class="designation">
							<p class="name"><?php echo get_sub_field('name'); ?></p>
							<p class="designation"><?php echo get_sub_field('designation'); ?></p>
						</div>
					</div>
					<img src="<?php echo get_sub_field('star'); ?>" alt="<?php echo get_post_meta(get_sub_field('star', false), '_wp_attachment_image_alt', true); ?>" />
					  </div>
					</li>
				 <?php endwhile; ?>
				</ul>
                	
		    </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Testimonials End -->


<!-- Want To See Start -->
<?php if( have_rows('want_to_see') ): 
    while( have_rows('want_to_see') ) : the_row(); ?>
<section class="wantToSeeSection bg-blue">
	<div class="wrapper">
		<div class="twocolumnwrap flex align-center">
            <div class="leftSec">
                <?php echo get_sub_field('heading'); ?>
            </div>
			<div class="rightSec">
				<a class="commonBtn" href="<?php echo get_sub_field('link'); ?>" target="_blank" rel="noopener noreferrer"><?php echo get_sub_field('link_text'); ?></a>                	
		    </div>
        </div>
	</div>
</section>
<?php endwhile; endif; ?>
<!-- Want To See End -->

    <?php
endwhile;
get_footer();