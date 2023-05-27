import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
// import { AuthProvider } from 'react-auth-kit';
// import admin from 'firebase-admin';

let config = JSON.parse(process.env.FIREBASE_CONFIG || '{}');
console.log(config);
console.log(process.env);
console.log(process.env.FIREBASE_CONFIG);



// You might need to add your 'root' element in your HTML file
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
          <FirebaseAppProvider firebaseConfig={config}>
            {/* <AuthProvider 
                        authType={'cookie'}
                        authName={'_aiart_auth'}
                        cookieDomain={window.location.hostname} */}
                        {/* cookieSecure={false}> */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            {/* </AuthProvider> */}
        </FirebaseAppProvider>
    </React.StrictMode>,
);

reportWebVitals();
