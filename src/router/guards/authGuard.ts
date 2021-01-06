import { UserStore } from '@/store';
import { NavigationGuard } from 'vue-router';

/**
 * Auth Guard
 * @param to Route
 * @param from Route
 * @param next 
 */
export const BaseAuthGuard: NavigationGuard = (to, from, next) => {
  if (!UserStore.isLogged) {
    next({
      name: 'auth.login',
      query: {
        redirect: to.name
      }
    })
  } else {
    next();
  }
}