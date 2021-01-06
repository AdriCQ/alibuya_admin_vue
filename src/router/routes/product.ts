import { RouteConfig } from 'vue-router';
import AppLayout from '@/components/layouts/AppLayout.vue';
import { BaseAuthGuard } from '@/router/guards';

export const productRoutes: RouteConfig = {
  path: '/product',
  component: AppLayout,
  beforeEnter: BaseAuthGuard,
  children: [
    {
      name: 'product.details',
      path: 'details',
      component: () => import('@/views/shop/products/Details.vue'),
    },
  ],
};