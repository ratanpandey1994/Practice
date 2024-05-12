<?php
/**
 * Template Name: Thank You
 */
get_header('inner'); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- Banner Start -->
<section class="thankyou-banner bg-green">
    <div class="wrapper text-center">
		<?php the_content(); ?> 
    </div>
</section>
<!-- Banner End -->

<!-- Content Section Start -->
<?php if( get_field('thankyou_content') ){ ?>
<section class="thankyouContent pd80 contentSec">
    <div class="wrapper">
        <?php the_field('thankyou_content'); ?>
    </div>
</section>
<?php } ?>
<!-- Content Section Start -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>
