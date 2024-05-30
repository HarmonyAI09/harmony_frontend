import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

import { SERVER_URI, SERVER_V2_URI } from '@/config';
import { store } from '@/redux/store';
import { setLoadingSpinner } from '@/redux/reducers/loader';

const http = axios.create({
  baseURL: SERVER_URI,
});

const http_v2 = axios.create({
  baseURL: SERVER_V2_URI,
});

http.interceptors.request.use(request => {
  store.dispatch(setLoadingSpinner(true));
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`;
  return request;
});

http.interceptors.response.use(
  response => {
    store.dispatch(setLoadingSpinner(false));
    return response;
  },
  error => {
    const { response } = error;
    store.dispatch(setLoadingSpinner(false)); // Hide loading spinner on response error
    if (response) {
      if (response.status === 401) {
        // Handle unauthorized error
        enqueueSnackbar('You are not authorized.', { variant: 'warning' });
      } else if (response.status === 500) {
        // Handle server error
        enqueueSnackbar('Something went wrong with the server.', {
          variant: 'error',
        });
      }
    } else if (error.message === 'Network Error') {
      enqueueSnackbar('Network Error: Please check your connection.', {
        variant: 'error',
      });
    } else {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    return Promise.reject(error);
  }
);

http_v2.interceptors.request.use(request => {
  store.dispatch(setLoadingSpinner(true));
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`;
  return request;
});

http_v2.interceptors.response.use(
  response => {
    store.dispatch(setLoadingSpinner(false));
    return response;
  },
  error => {
    const { response } = error;
    store.dispatch(setLoadingSpinner(false)); // Hide loading spinner on response error
    if (response) {
      if (response.status === 401) {
        // Handle unauthorized error
        enqueueSnackbar('You are not authorized.', { variant: 'warning' });
      } else if (response.status === 500) {
        // Handle server error
        enqueueSnackbar('Something went wrong with the server.', {
          variant: 'error',
        });
      }
    } else if (error.message === 'Network Error') {
      enqueueSnackbar('Network Error: Please check your connection.', {
        variant: 'error',
      });
    } else {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    return Promise.reject(error);
  }
);

export default http;
export { http_v2 };
