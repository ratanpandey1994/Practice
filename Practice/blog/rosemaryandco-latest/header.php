<!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >

		<link rel="profile" href="https://gmpg.org/xfn/11">

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

<!--Header Section Starts here-->
<header id="site-header" class="header-main">
	<div class="header-inner">
			<div class="wrapper section-inner flex justify-content-between">
						<?php if(get_field('store_url', 'option')){ ?>
						<div class="discover-store">
									<a href="<?php the_field('store_url', 'option');?>" class="headerBtns"><span><img src="<?php echo get_theme_file_uri('/images/cart.png') ?>" alt="Cart"></span><?php the_field('store_text', 'option');?></a>
						</div>
						<?php } ?>
						<div class="header-navigation-wrapper">
							<?php
							if ( has_nav_menu( 'primary' ) || ! has_nav_menu( 'expanded' ) ) {
								?>

									<nav class="primary-menu-wrapper" aria-label="<?php echo esc_attr_x( 'Horizontal', 'menu', 'twentytwenty' ); ?>">

										<ul class="primary-menu reset-list-style">

										<?php
										if ( has_nav_menu( 'primary' ) ) {

											wp_nav_menu(
												array(
													'container'  => '',
													'items_wrap' => '%3$s',
													'theme_location' => 'primary',
												)
											);

										} 
										?>

										</ul>

									</nav><!-- .primary-menu-wrapper -->

								<?php
							}
							?>

						</div><!-- .header-navigation-wrapper -->
						<ul class="social-links"> 
							<?php if(get_field('instagram_url', 'option')){ ?>
								<li>
									<a class="icon" href="<?php  echo get_field('instagram_url', 'option') ?>" target="_blank"><img src="<?php the_field('instagram_icon', 'option') ?>" alt="Youtube" /></a>
								</li>
							<?php } ?> 

							<?php if(get_field('youtube_url', 'option')){ ?>
							<li>
								<a class="icon" href="<?php  echo get_field('youtube_url', 'option') ?>" target="_blank"><img src="<?php the_field('youtube_icon', 'option') ?>" alt="Youtube" /></a>
							</li>
							<?php } ?>  
							
							<?php if(get_field('facebook_url', 'option')){ ?>
							<li>
								<a class="icon" href="<?php the_field('facebook_url', 'option') ?>" target="_blank"><img src="<?php the_field('facebook_icon', 'option') ?>" alt="Facebook" /></a>
							</li>
							<?php } ?>	

						</ul> 
						<div class="hamburgerMenu">
							<div class="menuBars"><span></span></div>
						</div>

			</div><!-- header-inner -->
		</div>
	</header><!-- #site-header -->
	<!--Header Section Ends here-->

<div id="content" class="site-content">	

<!-- Banner Start -->
<section class="homeBanner">
    <div class="wrapper">
		<?php if(get_field('logo', 'option')){ ?>
		<div class="HeaderLogoSec">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo_for_other_pages', 'option');?>" alt="Logo" /></a>
			<div class="headerDescription"><?php the_field('header_description', 'option');?></div>
		</div>
		<?php } ?>
    </div>
</section>
<!-- Banner End -->