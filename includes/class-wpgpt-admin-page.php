<?php
/**
 * Class WPGPT_AdminPage
 * Create and render of the admin page for the WPGPT plugin.
 */
class WPGPT_Admin_Page {

	/**
	 * Initialize the class.
	 * Register the admin menu.
	 */
	public static function init() {
		add_action( 'admin_menu', array( 'WPGPT_Admin_Page', 'add_admin_menu' ) );
	}

	/**
	 * Render the HTML content for the admin page.
	 */
	public static function admin_page_html() {
		// Check user capability
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		?>
		<div class="wrap">
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
			<div id="wpgpt-admin"></div><!-- React app root -->
		</div>
		<?php
	}

	/**
	 * Register the admin page in the WordPress dashboard.
	 */
	public static function add_admin_menu() {
		add_menu_page(
			__('OpenAI GPT', 'wpgpt'),
			__('OpenAI GPT', 'wpgpt'),
			'manage_options',
			'wpgpt-admin',
			array( 'WPGPT_Admin_Page', 'admin_page_html' ),
			'dashicons-admin-generic',
			6
		);
	}
}

// Initialize the admin page class
WPGPT_Admin_Page::init();
