import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* the <React.StrictMode> mode is useful for displaying errors, 
  warnings about side effects or deprecated React constructs on 
  the console or in the web browser.  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);