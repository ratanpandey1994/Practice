<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage BioSyn Composite
 * @since 1.0.0
 */

?>
<?php if ( is_single() && 'post' == get_post_type() ): ?>
<?php else: ?>
<section id="Contact-Us" class="contactForm ptb80" style="background-image:url(<?php echo esc_url( get_template_directory_uri() . '/images/contact-us-banner.jpg' ); ?>);">
	<div class="wrapper">
		<div class="contactFormContent">
			<h2>Contact us</h2>
			<?php echo do_shortcode( '[gravityform id="1" title="false" description="false" ajax="true"]' );  ?> 
		</div>
	</div>
</section>
<?php endif; ?>
</div>
<!-- #content -->

<footer id="site-footer" class="main-footer">
	<div class="wrapper">
		<div class="footerInner">
			<div class="column-one grid-item flex align-center">
				<div class="footerLogo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo', 'option');?>" alt="Logo" /></a>
				</div>
				<p><?php echo the_field('copyright_text', 'option'); ?></p>
			</div>
			<div class="column-two grid-item">
				<?php echo the_field('contact_details', 'option'); ?>
			</div>
			<div class="column-three grid-item">
				<?php if( have_rows('social_links', 'option') ): 
					while( have_rows('social_links', 'option') ) : the_row(); ?>
					<ul class="socialLinks">
						<?php if(get_sub_field('facebook', 'option')){ ?>
						<li>
							<a href="<?php echo get_sub_field('facebook', 'option'); ?>"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/facebook.svg' ); ?>" alt="Facebook" /></a>
						</li>
						<?php } ?>
						<?php if(get_sub_field('linkedin', 'option')){ ?>
						<li>
							<a href="<?php echo get_sub_field('linkedin', 'option'); ?>"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/linkedin.svg' ); ?>" alt="Linkedin" /></a>
						</li>
						<?php } ?>
						<?php if(get_sub_field('twitter', 'option')){ ?>
						<li>
							<a href="<?php echo get_sub_field('twitter', 'option'); ?>"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/twitter.svg' ); ?>" alt="Twitter" /></a>
						</li>
						<?php } ?>
						<?php if(get_sub_field('instagram', 'option')){ ?>
						<li>
							<a href="<?php echo get_sub_field('instagram', 'option'); ?>"><img src="<?php echo esc_url( get_template_directory_uri() . '/images/instagram.svg' ); ?>" alt="Instagram" /></a>
						</li>
						<?php } ?>
					</ul>
				<?php endwhile; endif; ?>
			</div>
		</div>
	</div>
</footer>


<?php wp_footer(); ?>