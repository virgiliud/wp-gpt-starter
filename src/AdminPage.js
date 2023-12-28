// Import WordPress and external components
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl, Card, CardHeader, CardBody, CardDivider, Notice } from '@wordpress/components';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ReactMarkdown from 'react-markdown';

// Import style
import './styles/main.scss';

const AdminPage = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle form submission
    const handleSubmit = () => {
        setError('');
        setIsLoading(true);

        // Send POST request to the wpgpt endpoint
        apiFetch({
            path: '/wpgpt/v1/completions',
            method: 'POST',
            data: { prompt }
        }).then((apiResponse) => {
            // Handle response errors
            if (apiResponse.error) {
                setError(apiResponse.message || __('An error occurred.', 'wpgpt'));
            } else {
                // Process a successful response
                if (apiResponse.choices && apiResponse.choices.length > 0) {
                    const assistantMessage = apiResponse.choices[0].message.content;
                    setResponse(assistantMessage);
                } else {
                    setResponse(__('No response received from API', 'wpgpt'));
                }
            }
            setIsLoading(false);
            setPrompt('');
            setError('');
        }).catch((error) => {
            // Handle fetch errors
            setError(error.message || __('An unexpected error occurred.', 'wpgpt'));
            setIsLoading(false);
        });
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <strong>{__('Generate Content', 'wpgpt')}</strong>
                </CardHeader>

                {/* Display response if available */}
                {response && (
                    <>
                        <CardBody>
                            <ReactMarkdown>{response}</ReactMarkdown>
                        </CardBody>
                        <CardDivider />
                    </>
                )}

                <CardBody>
                    {/* Error notice display */}
                    {error && (
                        <Notice status="error" isDismissible={false}>
                            {error}
                        </Notice>
                    )}

                    {/* Textarea for user input */}
                    <TextareaControl
                        value={prompt}
                        rows={3}
                        onChange={(value) => setPrompt(value)}
                        placeholder={__('Enter text...', 'wpgpt')}
                        disabled={isLoading}
                    />

                    {/* Submit button */}
                    <Button variant="primary" size="default" onClick={handleSubmit} disabled={isLoading || prompt.trim() === ''}>
                        {isLoading ? __('Generating...', 'wpgpt') : <span>{__('Generate', 'wpgpt')}</span>}
                    </Button>
                </CardBody>
            </Card>
        </>
    );
};

export default AdminPage;
