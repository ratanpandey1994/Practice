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


</div>
<!-- #content -->

<!-- Footer section start here -->
<footer id="site-footer" class="site-footer">
	<div class="wrapper d-flex justify-content-between align-items-center ">
		<div class="footer-logo">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php the_field('logo', 'option');?>" alt="Logo" /></a>
		</div>
		<div class="footer-center">
			<div class="copyright">
				<p><?php echo the_field('copyright_text', 'option'); ?></p>
			</div>			
			<?php wp_nav_menu( array( 'theme_location' => 'secondary' ) ); ?>
		</div>

		<?php if( have_rows('social_media', 'option') ): ?>
		<div class="social-media">
			<ul class="d-flex">
				<?php while( have_rows('social_media', 'option') ): the_row(); ?>
				<li class="<?php the_sub_field('name', 'option'); ?>">
					<a href="<?php the_sub_field('link', 'option'); ?>" target="_blank"><img src="<?php the_sub_field('icon', 'option'); ?>" alt="<?php the_sub_field('name', 'option'); ?>"><?php the_sub_field('name'); ?></a>
				</li>
				<?php endwhile; ?>
			</ul>
		</div>
		<?php endif; ?>
	</div>	
</footer>
<!-- Footer section end here -->

<?php wp_footer(); ?>