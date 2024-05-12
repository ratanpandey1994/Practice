<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'zenzio' );
/** Database username */
define( 'DB_USER', 'root' );
/** Database password */
define( 'DB_PASSWORD', '' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'o 8Tp{)(f.7 [Ir+-dP>[Qh_+ZsR)|1F?0(&a23qWJ=O6F>VUNlAY=_),TM))Q?%' );
define( 'SECURE_AUTH_KEY',  'u3ju_N)5Vcmu`qZ;G8B?:bEY F(S+e=yEgW$TFhwG[0mGqE[uI1scdZKBeq9}:k@' );
define( 'LOGGED_IN_KEY',    'xQnS}[S3OUZh,w$Z7DWBG{rP{iBup5-UadeI`|i=QB.qKZ<aNe4aN8{XR/D%1EWG' );
define( 'NONCE_KEY',        '%Bl^3zZ[-!Ztdg>#kf mv={`nd/*PfwIrmnLw#!PdZ[Ryj|M>5z^+DW3q5+)*EH@' );
define( 'AUTH_SALT',        'RNsv|/d+{!JF*A2<2F.pIy@AA_n}!pNd$Esl +G7~RTTJx31ld!/#UEpp=>%8jnj' );
define( 'SECURE_AUTH_SALT', 'TPS{Qg<:d1w3Ye)<0[D75gFHR`b+}4TUIYYD&0G>I<|+3(FS3bh~PO;n},>|{fG_' );
define( 'LOGGED_IN_SALT',   'n{y7V`EAS_Ai=pTbWdU?S9Tc}GN0=gb`_b^lPL@tw#GU?>z,0=Jvr:;PcKTuxc*B' );
define( 'NONCE_SALT',       'PA[7_,Oy[$&$bmaF6O46#}1WN[KvE|Xq>8qKpWW1JD1NQw*+.%:n&*H)07%3%m+*' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';