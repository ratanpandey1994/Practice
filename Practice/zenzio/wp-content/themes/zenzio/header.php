<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!--Top Header Starts here-->
<?php if(get_field('top_bar', 'option')){ ?>
<div class="topBar">
	<div class="wrapper">
		<?php echo the_field('top_bar', 'option'); ?>
	</div>
</div>
<?php } ?>
<!--Top Header Starts here-->

<!--Header Starts here-->
<header id="site-header" class="header-main">
	<div class="header-inner">
		<div class="wrapper d-flex justify-content-between align-items-center">
			<div class="logo-wrapper">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo', 'option');?>" alt="Logo" /></a>
			</div>
			<div class="navigation-wrapper">
				<span class="hamburger">
					<span class="icon"></span>
				</span>
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</div>
		</div>
	</div>
</header>
<!--Header Ends here-->

<div id="content" class="site-content">	
