import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';

export const productRoutes: RouteConfig = {
  path: '/product',
  component: AppLayout,
  children: [
    {
      name: 'product.details',
      path: 'details',
      component: () => import('@/views/shop/products/Details.vue'),
    },
  ],
};