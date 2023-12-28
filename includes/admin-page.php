<?php
/**
 * Class WPGPT_AdminPage
 * Handles the creation and rendering of the admin page for the WPGPT plugin.
 */
class WPGPT_AdminPage {

    /**
     * Constructor for WPGPT_AdminPage.
     * Adds the 'admin_menu' action to register the admin menu.
     */
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    /**
     * Renders the HTML content for the admin page.
     */
    public function admin_page_html() {
        // Check user capability
        if (!current_user_can('manage_options')) {
            return;
        }
        ?>
        <div class="wrap">
            <h1><?= esc_html(get_admin_page_title()); ?></h1>
            <div id="wpgpt-admin"></div><!-- React app root -->
        </div>
        <?php
    }

    /**
     * Registers the admin page in the WordPress dashboard.
     */
    public function add_admin_menu() {
        add_menu_page(
            'OpenAI GPT',
            'OpenAI GPT',
            'manage_options',
            'wpgpt-admin',
            array($this, 'admin_page_html'),
            'dashicons-admin-generic',
            6
        );
    }
}

// Initialize the admin page class
new WPGPT_AdminPage();
