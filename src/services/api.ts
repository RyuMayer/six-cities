import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';

import { BASE_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}


function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      // console.log(error);

      throw error;
    }
  );

  return api;
}

export {createApi};
