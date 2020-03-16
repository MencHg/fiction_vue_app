import Vue from 'vue';
import Vuex from 'vuex';
import userinfo from './modules/userinfo';
import pagedata from './modules/pagedata';
import setting from './modules/app_setting';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userinfo,
    pagedata,
    setting
  }
});
