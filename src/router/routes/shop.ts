import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';

export const shopRoutes: RouteConfig = {
  path: '/shop',
  component: AppLayout,
  children: [
    {
      name: 'shop.home',
      path: 'home',
      component: () => import('@/views/shop/Home.vue'),
    }, {
      name: 'shop.new',
      path: 'new',
      component: () => import('@/views/shop/NewShopping.vue'),
    },
  ],
};