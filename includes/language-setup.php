<?php
/**
 * Class WPGPT_Language_Setup
 * Manages the loading of the text domain for the plugin.
 */
class WPGPT_Language_Setup {

    /**
     * Initialize the language setup.
     */
    public static function init() {
        add_action('plugins_loaded', array('WPGPT_Language_Setup', 'load_textdomain'));
    }

    /**
     * Load the plugin text domain for translation.
     */
    public static function load_textdomain() {
        load_plugin_textdomain('wpgpt', false, basename(dirname(__FILE__)) . '/languages');
    }
}

// Initialize the language setup
WPGPT_Language_Setup::init();
