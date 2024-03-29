import axios from 'axios';

import { SERVER_URI } from '@/config';
// import { store } from '@/redux/store';

const http = axios.create({
  baseURL: SERVER_URI,
});

http.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`;
  return request;
});

http.interceptors.response.use(response => {
  const { status } = response;
  if (status === 401) {
    // @todo
    // token invalid
    // refresh access_token from refresh_token
    alert('Error occured!');
  }
  return response;
});

export default http;
