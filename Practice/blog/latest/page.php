<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header('new'); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- Delivery Returns Start -->
<section class="page-sec">   
		<div class="wrapper">
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>
		</div>
</section>
<!-- Delivery Returns End -->

<?php endwhile; endif; 
get_footer();