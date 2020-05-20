"use strict";
import Vue from 'vue';
import axios from "axios";
import Loadding from '@/assets/js/loadding.js'
let AUTH_TOKEN = localStorage.article_token;
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//soundbyte ray pellets 
let loadding = new Loadding('ray');
let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 700 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  // Do something before request is sent
  function(config) {
    // 这里是第一次登陆是刷新token设置
    if(AUTH_TOKEN===undefined) config.headers.common['Authorization'] = localStorage.getItem('article_token');
    loadding.open();
    return config;
  },
  function(error) {
    // Do something with request error
    loadding.close();
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    loadding.close();
    return response;
  },
  function(error) {
    // Do something with response error
    loadding.close();
    return Promise.reject(error);
  }
);
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};
Vue.use(Plugin)
export default Plugin;