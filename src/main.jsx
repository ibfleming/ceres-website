import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import GlobeComponent from './Globe.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<GlobeComponent />
	</React.StrictMode>
);
