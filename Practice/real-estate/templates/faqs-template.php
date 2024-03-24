<?php
/**
 * Template Name: FAQs
 */
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

<!-- Frequently Asked Questions Start -->
<?php if( have_rows('faq_content') ): ?>
<section class="aboutExpected bg-blue ptb100">
	<div class="wrapper">
		<div class="faqWrapper">
			<div class="accordion">
				<?php $i=1; while( have_rows('faq_content') ): the_row(); ?>
				<?php if($i==1){ ?>
				<div class="accordion-section box">
					<h3><a class="accordion-section-title active" href="#accordion-<?php echo $i; ?>"><?php the_sub_field('heading'); ?></a></h3>
					<div id="accordion-<?php echo $i; ?>" class="accordion-section-content" style="display:block">
						<?php the_sub_field('content'); ?>
					</div>
				</div>
				<?php } else { ?>
				<div class="accordion-section box">
					<h3><a class="accordion-section-title" href="#accordion-<?php echo $i; ?>"><?php the_sub_field('heading'); ?></a></h3>
					<div id="accordion-<?php echo $i; ?>" class="accordion-section-content">
						<?php the_sub_field('content'); ?>
					</div>
				</div>
				<?php } $i++; endwhile; ?>
			</div>
		</div>
	</div>
</section>
<?php endif; ?>
<!-- Frequently Asked Questions End -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>