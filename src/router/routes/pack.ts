import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';

export const packRoutes: RouteConfig = {
  path: '/pack',
  component: AppLayout,
  children: [
    {
      name: 'pack.home',
      path: 'home',
      component: () => import('@/views/shop/packs/Home.vue'),
    }, {
      name: 'pack.pending',
      path: 'pending',
      component: () => import('@/views/shop/packs/Pending.vue'),
    }
  ],
};