<?php
/**
 * Template Name: About Us
 */
get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- About Us Start -->
<section class="about-us-sec">   
	<div class="top-heading">
		<div class="wrapper">
			<?php the_content(); ?>
		</div>
	</div>  
	<?php if( have_rows('about_section') ): ?>
	<div class="artists-brushes">
		<div class="wrapper">
			<ul>
				<?php while( have_rows('about_section') ): the_row(); ?>
				<li>
					<div class="imageBox">
						<img src="<?php the_sub_field('image'); ?>" alt="Image">
					</div>
					<div class="contentBox">
						<?php the_sub_field('content'); ?>
					</div>
				</li>
				<?php endwhile; ?>
			</ul>
		</div>
	</div>
	<?php endif; ?> 
</section>
<!-- About Us End -->

<?php endwhile; endif; 
get_footer();
