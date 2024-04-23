import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import Routes from './routes';
import LoadingSpinner from './components/common/LoadingSpinner';
import { store } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner isPageLoading={true} />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
