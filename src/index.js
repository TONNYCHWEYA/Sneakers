import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

 const rootElement =document.getElementById("root");
 const root = createRoot(rootElement)

 root.render(
  <StrictMode>
    <Router >
    <App />
    </Router>
    </StrictMode>,
 )

