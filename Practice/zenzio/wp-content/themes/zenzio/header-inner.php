<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!--Header Starts here-->
<header id="site-header" class="header-main inner-header">
	<div class="header-inner d-flex justify-content-center align-items-center">
		<div class="logo-wrapper">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo', 'option');?>" alt="Logo" /></a>
		</div>
	</div>
</header>
<!--Header Ends here-->

<div id="content" class="site-content">	
