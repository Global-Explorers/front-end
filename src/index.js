import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider as Auth } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_Domain);
console.log(process.env.REACT_APP_Client_ID);
console.log(process.env.REACT_APP_REDIRECT_URL);
root.render(
  // <React.StrictMode>
    <Auth
    domain={process.env.REACT_APP_Domain}
    clientId={process.env.REACT_APP_Client_ID}
    redirectUri={process.env.REACT_APP_REDIRECT_URL}>

    <App />
    </Auth>
  // </React.StrictMode>
);



