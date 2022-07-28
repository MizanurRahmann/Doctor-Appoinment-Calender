import React from 'react';
import ReactDOM from 'react-dom/client';
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';

// COMPONENTS
import App from './App';
import reportWebVitals from './reportWebVitals';

// ROUTER
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
