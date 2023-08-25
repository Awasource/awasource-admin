import axios from 'axios';
import { baseUrl } from '.';
import { AWASOURCE_STORE_KEY } from '../constants';


const auth = localStorage.getItem(`${AWASOURCE_STORE_KEY}auth`);
const oldAuth = JSON.parse(auth);
const httpService = axios.create({ baseURL: baseUrl });

httpService.interceptors.request.use(function (config) {
  if (oldAuth && !['api/admin/login', 'api/admin/twofactor'].includes(config.url)) {
    const token = "Bearer " + String(oldAuth?.token ?? "").replaceAll('"', '');
    config.headers.authorization = token;
  }

  return config;
});

httpService.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      //TODO: redirect on logout
      if (auth) {
        localStorage.setItem(`${AWASOURCE_STORE_KEY}auth`, JSON.stringify({ ...oldAuth, isAuthenticated: false }))
      }
      window.location.replace("/?logged-in=false");
    }

    throw error?.response?.data;
  }
);

export default httpService;
