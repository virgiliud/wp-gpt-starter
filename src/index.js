import { render } from '@wordpress/element';
import AdminPage from './AdminPage';

const App = () => <AdminPage />;

render(<App />, document.getElementById('wpgpt-admin'));
