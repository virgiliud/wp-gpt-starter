<?php
/**
 * Class WPGPT_Enqueue
 * Handles the enqueuing of scripts and styles for the plugin in the admin area.
 */
class WPGPT_Enqueue {

    /**
     * Constructor for WPGPT_Enqueue.
     * Adds the 'admin_enqueue_scripts' action to enqueue scripts and styles.
     */
    public function __construct() {
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts_and_styles'));
    }

    /**
     * Enqueues scripts and styles for the admin page of the plugin.
     * 
     * @param string $hook The current admin page hook.
     */
    public function enqueue_scripts_and_styles($hook) {
        // Check if the current page is the admin page for the plugin
        if ('toplevel_page_wpgpt-admin' !== $hook) {
            return;
        }

        // Get the URL and path of the plugin's root directory
        $plugin_root_url = plugin_dir_url(dirname(__FILE__));
        $plugin_root_path = plugin_dir_path(dirname(__FILE__)); 

        // Enqueue JavaScript
        wp_enqueue_script(
            'wpgpt-admin-app', 
            $plugin_root_url . 'build/index.js',
            ['wp-element', 'wp-components', 'wp-i18n', 'wp-api-fetch'], 
            filemtime($plugin_root_path . 'build/index.js'),
            true
        );

        // Enqueue CSS
        wp_enqueue_style(
            'wpgpt-styles',
            $plugin_root_url . 'build/index.css',
            ['wp-components'],
            filemtime($plugin_root_path . 'build/index.css')
        );
    }
}

new WPGPT_Enqueue();