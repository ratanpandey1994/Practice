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
	<div class="wrapper">
			<div class="header-inner flex">
				<div class="header-titles">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo', 'option');?>" alt="Logo" /></a>
				</div>

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

								} elseif ( ! has_nav_menu( 'expanded' ) ) {

									wp_list_pages(
										array(
											'match_menu_classes' => true,
											'show_sub_menu_icons' => true,
											'title_li' => false,
											'walker'   => new TwentyTwenty_Walker_Page(),
										)
									);

								}
								?>

								</ul>

							</nav><!-- .primary-menu-wrapper -->

						<?php
					}
					?>

					<div class="topContact">
						<?php dynamic_sidebar( 'top-contact' ); ?>
					</div>
				</div><!-- .header-navigation-wrapper -->
				<div class="hamburgerMenu">
					<div class="menuBars"><span></span></div>
				</div>
			</div><!-- .header-inner -->
		</div>
</header><!-- #site-header -->
<!--Header Section Ends here-->

<div id="content" class="site-content">	
