<?php
class WPGPT_Settings_Page {

    // Menu and settings initialization
    public function __construct() {
        add_action('admin_menu', array($this, 'add_settings_menu'));
        add_action('admin_init', array($this, 'initialize_settings'));
    }

    // Add settings menu
    public function add_settings_menu() {
        if (!current_user_can('manage_options')) {
            return;
        }

        add_options_page(
            __('OpenAI GPT Settings', 'wpgpt'),
            __('OpenAI GPT', 'wpgpt'),
            'manage_options',
            'wpgpt',
            array($this, 'render_settings_page')
        );
    }

    // Initialize plugin settings
    public function initialize_settings() {
        register_setting('openaiPage', 'wpgpt_settings', array($this, 'sanitize'));

        add_settings_section(
            'wpgpt_openaiPage_section',
            __('OpenAI Configuration', 'wpgpt'),
            array($this, 'settings_section_callback'),
            'openaiPage'
        );

        $options = get_option('wpgpt_settings');
        $this->add_settings_field('wpgpt_api_key', __('OpenAI API Key', 'wpgpt'), $options);
        $this->add_settings_field('wpgpt_model', __('GPT Model', 'wpgpt'), $options);
    }

    // Sanitize the inputs
    public function sanitize($input) {
        $sanitized_input = array();
    
        if (isset($input['wpgpt_api_key'])) {
            $sanitized_input['wpgpt_api_key'] = sanitize_text_field($input['wpgpt_api_key']);
        }
        
        if (isset($input['wpgpt_model'])) {
            $sanitized_input['wpgpt_model'] = sanitize_text_field($input['wpgpt_model']);
        }

        return $sanitized_input;
    }

    // Add settings fields
    private function add_settings_field($id, $title, $options) {
        add_settings_field(
            $id,
            $title,
            array($this, 'render_settings_field'),
            'openaiPage',
            'wpgpt_openaiPage_section',
            array(
                'id' => $id,
                'options' => $options
            )
        );
    }

    // Render the settings fields
    public function render_settings_field($args) {
        $options = $args['options'];
        $value = isset($options[$args['id']]) ? esc_attr($options[$args['id']]) : '';
        
        switch ($args['id']) {
            case 'wpgpt_api_key':
                echo '<input type="password" id="' . esc_attr($args['id']) . '" name="wpgpt_settings[' . esc_attr($args['id']) . ']" value="' . $value . '" class="regular-text">';
                echo '<p class="description">' . __('Enter your OpenAI API key.', 'wpgpt') . '</p>';
                break;
            case 'wpgpt_model':
                echo '<select id="' . esc_attr($args['id']) . '" name="wpgpt_settings[' . esc_attr($args['id']) . ']" class="regular-text">';
                echo '<option value="gpt-3.5-turbo"' . selected($value, 'gpt-3.5-turbo', false) . '>GPT-3.5 Turbo</option>';
                echo '<option value="gpt-4"' . selected($value, 'gpt-4', false) . '>GPT-4</option>';
                echo '</select>';
                echo '<p class="description">' . __('Select a OpenAI GPT model.', 'wpgpt') . '</p>';
                break;
        }
    }

    // Callback for settings section description
    public function settings_section_callback() {
        echo __('Please enter your OpenAI API key and select a GPT model.', 'wpgpt');
    }

    // Render the settings page in WP admin
    public function render_settings_page() {
        ?>
        <div class="wrap wpgpt-settings-page">
            <form action='options.php' method='post'>
                <h1><?php echo __('OpenAI GPT Settings', 'wpgpt'); ?></h1>
                <?php
                settings_fields('openaiPage');
                do_settings_sections('openaiPage');
                submit_button();
                ?>
            </form>
            
            <hr />

            <div>
                <h2><?php echo __('Reminder', 'wpgpt'); ?></h2>
                <ul>
                    <li><?php echo __('Your API key is stored in your database. You are responsible for your own API key and any associated charges or usage limits incurred with OpenAI. Find your API key', 'wpgpt'); ?> <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer"><?php echo __('here', 'wpgpt'); ?></a>.</li>
                </ul>
            </div>
        </div>
        <?php
    }
}

new WPGPT_Settings_Page();
