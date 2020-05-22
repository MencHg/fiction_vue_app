import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/rest.css';
import './assets/css/loading.css';
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa';

Vue.config.productionTip = false;
Vue.use(Croppa);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')