import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import CardProvider from './context/CardContext';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <CardProvider>
    <App />
  </CardProvider>
);