<?php
/**
 * Plugin Name: WP GPT Starter Plugin
 * Description: A starter plugin for integrating OpenAI's GPT into WordPress.
 * Version: 1.2.0
 * Author: Virgiliu Diaconu
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wpgpt
 */

if ( ! defined( 'ABSPATH' ) ) exit; 

// Require files for the plugin
require_once plugin_dir_path(__FILE__) . 'includes/class-wpgpt-language-setup.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-wpgpt-endpoint.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-wpgpt-settings-page.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-wpgpt-admin-page.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-wpgpt-enqueue.php'; 