import axios from "axios";
import config from '../configs/config';

const api = axios.create({
  baseURL: config.backendUrl,
  withCredentials: true,
});

export default api;
