import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';
import { BaseAuthGuard } from '@/router/guards';

export const mainRoutes: RouteConfig = {
  path: '/main',
  component: AppLayout,
  beforeEnter: BaseAuthGuard,
  children: [
    {
      name: 'main.home',
      path: 'home',
      component: () => import('@/views/main/Home.vue')
    },
  ],
};