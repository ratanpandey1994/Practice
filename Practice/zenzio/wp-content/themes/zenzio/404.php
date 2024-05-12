<?php

get_header('inner');
    
?>
    
<div class="content errorPage pd100">
	<div class="wrapper text-center">
		<?php echo the_field('error_page', 'option'); ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn">Back to Homepage</a>
	</div>
</div>

<?php

get_footer();