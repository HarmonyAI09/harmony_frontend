import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import Routes from './routes';
import LoadingSpinner from './components/common/LoadingSpinner';
import { store } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Harmony</title>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      <meta
        name="description"
        content="Harmony brings efficient workflow solutions to your business. Collaborate, organize, and track work seamlessly. Sign up now to enhance productivity."
      />
    </Helmet>
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
  </>
);
