<?php
class WPGPT_Endpoint extends WP_REST_Controller {

    // Register the routes
    public function register_routes() {
        register_rest_route('wpgpt/v1', '/completions', array(
            'methods' => 'POST',
            'callback' => array($this, 'openai_api'),
            'permission_callback' => array($this, 'openai_api_permissions_check')
        ));
    }

    // Handle the OpenAI API request
    public function openai_api($request) {
        // Get the user message from the request
        $userMessage = $request->get_param('prompt');

        // Get the plugin settings
        $options = get_option('wpgpt_settings');
        $api_key = $options['wpgpt_api_key'];
        $model = $options['wpgpt_model'];

        // Prepare the data for the OpenAI API
        $data = [
            'model' => $model,
            'messages' => [
                ["role" => "system", "content" => "You are a helpful assistant."],
                ["role" => "user", "content" => $userMessage]
            ]
        ];

        // Make POST request to the OpenAI API
        $response = wp_remote_post('https://api.openai.com/v1/chat/completions', array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $api_key
            ),
            'body' => json_encode($data),
            'timeout' => 60 // Set a timeout for the request
        ));

        // Check if the response is an error and handle it
        if (is_wp_error($response)) {
            $this->log_error('Request failed: ' . $response->get_error_message());
            return new WP_Error('request_failed', $response->get_error_message(), array('status' => 500));
        }

        // Decode the response body from JSON format
        $body = wp_remote_retrieve_body($response);
        $response_data = json_decode($body, true);

        // Check for JSON parsing errors
        if (json_last_error() !== JSON_ERROR_NONE) {
            $json_error_msg = json_last_error_msg();
            $this->log_error(__('JSON parsing error: ', 'wpgpt') . $json_error_msg);
            return new WP_Error('json_error', __('JSON parsing error: ', 'wpgpt') . $json_error_msg, array('status' => 500));
        }

        // Retrieve the HTTP status code
        $http_status = wp_remote_retrieve_response_code($response);

        // Handle the error if the status is not a success (200 OK)
        if ($http_status !== 200) {
            $error_message = isset($response_data['error']['message']) ? $response_data['error']['message'] : __('Unknown error', 'wpgpt');
            $this->log_error(__('API error: ', 'wpgpt') . $error_message);
            return new WP_REST_Response(['error' => true, 'message' => $error_message, 'status' => $http_status], $http_status);
        }

        // Return the successful response
        return new WP_REST_Response($response_data, 200);
    }

    // Check if a given request has access to the endpoint
    public function openai_api_permissions_check($request) {
        return current_user_can('manage_options');
    }

    // Helper function for error logging
    protected function log_error($message) {
        if (defined('WP_DEBUG') && WP_DEBUG) {
            error_log($message);
        }
    }
}

// Hook the class to the REST API
add_action('rest_api_init', function () {
    $wpgpt_endpoint = new WPGPT_Endpoint();
    $wpgpt_endpoint->register_routes();
});
