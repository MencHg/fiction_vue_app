import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/rest.css';
import './assets/css/loading.css';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')