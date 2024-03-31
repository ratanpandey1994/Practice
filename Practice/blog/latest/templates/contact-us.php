<?php
/**
 * Template Name: Contact Us
 */

get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- Delivery Returns Start -->
<section class="contact-sec"> 
		<div class="wrapper">
			<div class="contactWrapper">
				<div class="blockLeft topContentSec">
					<h1><?php the_title(); ?></h1>
					<div class="topContent"><?php the_content(); ?></div>
					<ul class="contactDetails">
						<?php while( have_rows('conatact_details') ): the_row(); ?>
						<li>
							<div class="imageBox">
								<img src="<?php the_sub_field('icon'); ?>" alt="Icon">
							</div>
							<div class="contentBox">
								<?php the_sub_field('content'); ?>
							</div>
						</li>
						<?php endwhile; ?>
					</ul>
				</div>

				<div class="blockRight formDetails">
					<?php echo do_shortcode('[contact-form-7 id="3e0842b" title="Contact form 1"]');?>
				</div>
			</div>
			
		</div>  
</section>
<!-- Delivery Returns End -->

<?php endwhile; endif; 
get_footer();