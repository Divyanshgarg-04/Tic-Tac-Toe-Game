import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.querySelector('body').style.backgroundColor = "rgb(74, 137, 214)";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
