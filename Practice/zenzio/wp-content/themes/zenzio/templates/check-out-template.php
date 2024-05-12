<?php
/**
 * Template Name: Checkout
 */
get_header('inner'); ?>

<!-- Checkout Section Start -->
<section class="checkout-section">
    <div class="wrapper d-flex">
        <div class="formWrapper">
            <h1><?php the_title(); ?></h1>
            <?php echo do_shortcode( '[gravityform id="3" title="false" description="false" ajax="true"]' );  ?>
        </div>
       
        <?php if( have_rows('testimonials', 16) ): ?>
		<div class="testimonialOuter">
			<ul class="d-flex">
			    <?php while( have_rows('testimonials', 16) ): the_row(); ?>
				<li>
					<div class="innerCol">
						<h3><?php the_sub_field('title', 16); ?></h3>
						<img class="star-review" src="<?php the_sub_field('star', 16); ?>" alt="star-review">
						<?php the_sub_field('content', 16); ?>
						<div class="authorOuter d-flex align-items-center">
							<div class="left-col">
								<img src="<?php the_sub_field('author', 16); ?>" alt="<?php the_sub_field('name', 16); ?>">
							</div>
							<div class="right-col">
							<h4 class="author"><?php the_sub_field('name', 16); ?></h4>
							<p class="designation"><?php the_sub_field('designation', 16); ?></p>
							</div>                           
						</div>
					</div>
				</li>    
				<?php endwhile; ?>              
			</ul>
		</div>
		<?php endif; ?>
    </div>
</section>
<!-- Checkout Section Content End -->

<?php get_footer(); ?>