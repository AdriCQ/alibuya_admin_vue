import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { mainRoutes, packRoutes, shopRoutes } from '@/router/routes';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  mainRoutes, packRoutes, shopRoutes,
  {
    path: '*',
    redirect: {
      name: 'main.home'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router
