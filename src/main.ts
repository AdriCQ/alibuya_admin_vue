import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import store from '@/store/store';
import vuetify from './plugins/vuetify';

// SCSS
require('@/scss/main.scss');

// Register v-section
Vue.component('v-section', () => import('@/components/layouts/Section.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
