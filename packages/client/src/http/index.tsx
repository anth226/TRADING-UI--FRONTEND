/* eslint-disable */
import api from '../utils/api/index'

export async function get(url: string, config = {}) {
  return await api.get(url, { ...config }).then(response => response.data)
}

export async function post(url: string, data: any, config = {}) {
  return api
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url: any, data: any, config = {}) {
  return api
    .put(url, { ...data }, { ...config })
    .then((response: { data: any; }) => response.data)
}

export async function del(url: string, config = {}) {
  return await api
    .delete(url, { ...config })
    .then(response => response.data)
}

