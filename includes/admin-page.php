<?php
// Render the admin page content
function wpgpt_admin_page_html() {
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

// Register the admin page
function wpgpt_add_admin_menu() {
  add_menu_page(
      'OpenAI GPT',
      'OpenAI GPT',
      'manage_options',
      'wpgpt-admin',
      'wpgpt_admin_page_html',
      'dashicons-admin-generic',
      6
  );
}
add_action('admin_menu', 'wpgpt_add_admin_menu');
