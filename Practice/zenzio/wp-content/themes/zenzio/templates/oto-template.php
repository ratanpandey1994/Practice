<?php
/**
 * Template Name: OTO
 */
get_header('inner'); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<!-- / Banner Section \ -->
<section class="oto-banner">
    <div class="wrapper">
		<div class="otoContent">
			<?php the_content(); ?>
		</div> 
    </div>
</section>
<!--  \ Banner Section / -->


<!-- Special Offer Content Start -->
<?php if( have_rows('one_time_offer_content') ): 
      while( have_rows('one_time_offer_content') ) : the_row(); 
        $qStr = isset($_GET['planCost']) && $_GET['planCost'] > 0 ? '?planCost='.trim($_GET['planCost']) : '';
        $otoPage = get_page_by_path( 'checkout', ARRAY_A );
        //print_r($otoPage);
        $checkoutLink = is_array($otoPage) ? get_page_link($otoPage['ID']) : get_site_url()."/checkout";
        $otPrice = get_sub_field('one_time_fee') ? get_sub_field('one_time_fee') : '199';
        
?>
<?php if( get_sub_field('title') ){ ?>
<section class="otoOffer">
    <div class="wrapper">
		<div class="innerContent text-center">
			<?php if( get_sub_field('image') ){ ?>
				<img src="<?php echo get_sub_field('image'); ?>" alt="If You've Had Little to no Success With Content Marketing - It's Not Your Fault" />
			<?php } ?>
				<div class="offerContent">
					<h3><?php echo get_sub_field('title'); ?></h3>
					<div class="timeContent">
						<?php echo get_sub_field('offer_content'); ?>
						<?php if( get_sub_field('button_text') ){ ?>
							<a href="<?php echo isset($_GET['planCost']) && $_GET['planCost'] ? $checkoutLink.$qStr."&otCost=".$otPrice : $checkoutLink."?otCost=".$otPrice; ?>" class="btn"><?php echo get_sub_field('button_text'); ?></a>
						<?php } ?>
						<?php if( get_sub_field('no_thanks') ){ ?>
						    <div class="btnouter">
						        <a class="noThanks" href="<?php echo $checkoutLink.$qStr; ?>">No Thanks I don’t want to upgrade my order</a>
						    </div>
						<?php } ?>
					</div>
				</div>
		</div> 
    </div>
</section>
<!-- Special Offer Content End -->
<?php } ?>
<?php endwhile; endif; ?>

<?php endwhile; endif; ?>
<?php get_footer(); ?>
