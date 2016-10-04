<?php
/**
 * Plugin Name:     Add Pinterest To Content and Before After images
 * Plugin URI:      https://private.hibou-web.com
 * Description:     Add Pins and Boards to content and Before-After images to the content. :)
 * Author:          Hibou
 * Author URI:      https://private.hibou-web.com
 * Text Domain:     add-pinterest-to-content
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Add_Pinterest_To_Content
 */

/**
 * Add Pinterest Pins and Boards :)
 */
function add_pinterest_script() {

	wp_enqueue_script(
		'pinterest-base-js',
		'//assets.pinterest.com/js/pinit.js',
		'',
		'',
		true
	);

	wp_enqueue_style(
		'pinterest-style',
		plugins_url( 'css/styles.css' , __FILE__ ),
		'',
		''
	);

}
add_action( 'wp_enqueue_scripts', 'add_pinterest_script' );

/**
 * Get plugin directory for js.
 */
function addHidden() {

	$path = plugin_dir_url( __FILE__ );
	echo '<input type="hidden" id="plugin_directory" value='."{$path}".' />';

}
add_action('admin_menu', 'addHidden');



function register_button( $buttons ) {
	$buttons[] = 'input_text';
	return $buttons;
}
add_filter( 'mce_buttons', 'register_button' );

function mce_plugin( $plugin_array ) {

	$plugin_array[ 'custom_button_script' ] = plugins_url( 'js/editor_plugin.js' , __FILE__ );
	return $plugin_array;

}
add_filter( 'mce_external_plugins', 'mce_plugin' );


/**
 * Add Pinterest Borad and Pins at visual editor. :)
 * @param $atts
 *
 * @return string
 */
function get_pinterest_pins_boards( $atts ) {
	global $post;
	extract( shortcode_atts( array(
		'url'          => '',
		'data_type'    => '',
		'align'        => '',
		'size'         => '',
	), $atts ) );

	$html = '';

	switch ( $align ) {

		case 'pin_left' :
			$align = 'alignleft';
			break;
		case 'pin_center' :
			$align = 'aligncenter';
			break;
		case 'pin_right' :
			$align = 'alignright';
			break;

	}

	if ( $data_type === 'p_board' ) {

		$data_type = 'embedBoard';
		switch ( $size ) {
			case 'pin_small' :
				$board_width = 400;
				$board_height = 240;
				$pin_image_size = 80;
				$class = 'pin_w_400_240';
				break;
			case 'pin_medium' :
				$board_width = 900;
				$board_height = 120;
				$pin_image_size = 115;
				$class = 'pin_w_900_120';
				break;
			case 'pin_large' :
				$board_width = 1200;
				$board_height = 500;
				$pin_image_size = 200;
				$class = 'w_pin_1200_500';
		}

		$html .= '<span class="pin_outer ' . $align . ' ' . $class . '">';
		$html .= '<a data-pin-do="' . $data_type . '" data-pin-board-width="' . $board_width . '" data-pin-scale-height="' . $board_height . '" data-pin-scale-width="' . $pin_image_size . '" href="' . esc_url( $url ) . '"></a>';
		$html .= '</span>';

	} else {

		$data_type = 'embedPin';
		switch ( $size ) {

			case 'pin_small':
				$size = '';
				break;
			case 'pin_medium' :
				$size = 'medium';
				break;
			case 'pin_large' :
				$size = 'large';
				break;

		}

		$html .= '<span class="pin_outer ' . $align . '">';
		$html .= '<a data-pin-do="' . $data_type . '" data-pin-width="' . $size . '" data-pin-terse="true" href="' . esc_url( $url ) . '"></a>';
		$html .= '</span>';
	}

	return $html;
}
add_shortcode( 'pin', 'get_pinterest_pins_boards' );