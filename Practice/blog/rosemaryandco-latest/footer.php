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

<footer id="site-footer" class="header-footer-group">
	<div class="wrapper">
		<div class="footer-sec">
			<div class="column-one grid-item">
				<?php wp_nav_menu( array( 'theme_location' => 'footer' ) ); ?> 
			</div>
			<div class="column-two grid-item">
				<ul class="social-links"> 
					<?php if(get_field('instagram_url', 'option')){ ?>
						<li>
							<a class="icon" href="<?php  the_field('instagram_url', 'option') ?>" target="_blank"><img src="<?php the_field('instagram_icon', 'option') ?>" alt="Youtube" /></a>
						</li>
					<?php } ?> 

					<?php if(get_field('youtube_url', 'option')){ ?>
					<li>
						<a class="icon" href="<?php  the_field('youtube_url', 'option') ?>" target="_blank"><img src="<?php the_field('youtube_icon', 'option') ?>" alt="Youtube" /></a>
					</li>
					<?php } ?>  
					
					<?php if(get_field('facebook_url', 'option')){ ?>
					<li>
						<a class="icon" href="<?php the_field('facebook_url', 'option') ?>" target="_blank"><img src="<?php the_field('facebook_icon', 'option') ?>" alt="Facebook" /></a>
					</li>
					<?php } ?>	

				</ul> 
			</div>
		</div>
	</div>
	<div class="copyright_Bottom">
		<div class="wrapper">
			<?php echo the_field('copyright_text', 'option'); ?>
		</div>
	</div>
</footer>


<?php wp_footer(); ?>