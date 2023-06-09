import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.tsx';
import UserProvider from './context/UserProvider.tsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (import.meta.env.PROD) disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
