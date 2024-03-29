import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import Routes from './routes';
import { store } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={5}>
          <Routes />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
