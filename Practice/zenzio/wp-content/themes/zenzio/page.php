<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header(); ?>

<!--Content start!-->
<section class="fullwidth defaultpage">
	 <div class="wrapper pd100">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    
    <div class="post" id="post-<?php the_ID(); ?>">
    	
        <div class="entry">
            <?php the_content('<p class="serif">Read the rest of this page &raquo;</p>'); ?>
    
            <?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
    
        </div>
    
    </div>
    <?php endwhile; endif; ?>
    
	<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>
   </div>
</section>
<!--Content end!-->

<?php get_footer(); ?>
