<?php
/**
 * Plugin Name: WP GPT Starter Plugin
 * Description: A starter plugin for integrating OpenAI's GPT into WordPress.
 * Version: 1.0
 * Author: Virgiliu Diaconu
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wpgpt
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Load the plugin text domain for translation
function wpgpt_load_textdomain() {
    load_plugin_textdomain( 'wpgpt', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'wpgpt_load_textdomain' );

// Require files for the plugin
require_once plugin_dir_path(__FILE__) . 'includes/wpgpt-endpoint.php';
require_once plugin_dir_path(__FILE__) . 'includes/settings-page.php';
require_once plugin_dir_path(__FILE__) . 'includes/admin-page.php';
require_once plugin_dir_path(__FILE__) . 'includes/enqueues.php'; 