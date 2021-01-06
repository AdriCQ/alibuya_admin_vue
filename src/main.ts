import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import store from '@/store/store';
import vuetify from './plugins/vuetify';
import Axios from 'axios';
import { SERVER_URL } from '@/utils';
import Vuelidate from 'vuelidate';

// SCSS
require('@/scss/main.scss');

// Register v-section
Vue.component('v-section', () => import('@/components/layouts/Section.vue'));

// Vuelidate
Vue.use(Vuelidate);

// Setup axios
Axios.defaults.timeout = 10000;

/**
 * AXIOS interceptor to inject authentication into requests
 */
Axios.interceptors.request.use((request) => {
  request.baseURL = SERVER_URL;
  /* Append content type header if its not present */
  if (!request.headers["Content-Type"]) {
    request.headers["Content-Type"] = "application/json";
  }

  /* Check if authorization is set */
  if (!request.headers["Authorization"]) {
    /* Check if the user is authenticated to send Bearer token */
    const token = "UserStore.api_token";
    if (token && token.length > 0) {
      request.headers.Authorization = "Bearer " + token;
    } else {
      /* Send the application authentication as Bearer token */
      request.headers.Authorization = "Bearer ApiToken";
    }
  }
  return request;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
