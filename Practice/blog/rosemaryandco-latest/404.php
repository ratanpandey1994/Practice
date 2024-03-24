<?php

get_header('new'); ?>

<?php if(get_field('error_page', 'option')){ ?>
<!-- Error Section -->
<section class="errorPage text-center">
	<div class="wrapper">
		<?php echo get_field('error_page', 'option'); ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn">Back to Homepage</a>
	</div>
</section>
<!-- Error Section end-->
<?php } ?>

<?php get_footer(); ?>