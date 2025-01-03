import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // Ensure the App component is correctly imported
import './index.css'; // Optional: Include your styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
