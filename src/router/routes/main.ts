import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';

export const mainRoutes: RouteConfig = {
  path: '/main',
  component: AppLayout,
  children: [
    {
      name: 'main.home',
      path: 'home',
      component: () => import('@/views/main/Home.vue')
    },
  ],
};