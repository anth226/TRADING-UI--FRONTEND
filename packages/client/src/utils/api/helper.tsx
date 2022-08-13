/* eslint-disable */
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// @ts-ignore
const axiosApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export async function get(url: string, config = {}) {
  return axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
