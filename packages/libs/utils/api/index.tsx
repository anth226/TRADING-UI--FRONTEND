/* eslint-disable */
import axios from 'axios';

export const configureApi = (baseURL?: string) => axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  }, 
});
