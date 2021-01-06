import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { mainRoutes, packRoutes, productRoutes, shopRoutes } from '@/router/routes';
import AuthLayout from '@/views/Auth.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  mainRoutes, packRoutes, productRoutes, shopRoutes,
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'auth.login',
        path: 'login',
        component: () => import('@/components/forms/AuthLogin.vue')
      },
    ],
  },
  {
    path: '*',
    redirect: {
      name: 'auth.login'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router
