<?php
/**
 * Template Name: FAQ
 */
get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- FAQ Start -->
<section class="faq-sec">   
	<div class="top-heading">
		<div class="wrapper">
			<?php the_content(); ?>
		</div>
	</div>  
	<?php if( have_rows('faq_section') ): ?>
	<div class="faqWrapper">
		<div class="wrapper">
			<?php $j=1; while( have_rows('faq_section') ): the_row(); ?>
			<div class="faqDetails faqClass<?php echo $j; ?>">
				<h2>
					<?php the_sub_field('faq_title'); ?>
				</h2>
				<?php if( have_rows('faq_details') ): ?>
				<div class="accordion">
					<?php $i=1; while( have_rows('faq_details') ): the_row(); ?>
					<?php if($i==1){ ?>
					<div class="accordion-section box">
						<h3><a class="accordion-section-title <?php if($j == 1){ ?> active <?php } ?>" href="#accordion-<?php echo $i; echo $j; ?>"><?php the_sub_field('title'); ?></a></h3>
						<div id="accordion-<?php echo $i; echo $j; ?>" class="accordion-section-content" <?php if($j == 1){ ?>style="display:block" <?php } ?>>
							<?php the_sub_field('content'); ?>
						</div>
					</div>
					<?php } else { ?>
					<div class="accordion-section box">
						<h3><a class="accordion-section-title" href="#accordion-<?php echo $i; echo $j; ?>"><?php the_sub_field('title'); ?></a></h3>
						<div id="accordion-<?php echo $i; echo $j; ?>" class="accordion-section-content">
							<?php the_sub_field('content'); ?>
						</div>
					</div>
					<?php } $i++; endwhile; ?>
				</div>
				<?php endif; ?>
			</div>
			<?php $j++; endwhile; ?>
		</div>
	</div>
	<?php endif; ?> 
</section>
<!-- FAQ End -->

<?php endwhile; endif; 
get_footer();