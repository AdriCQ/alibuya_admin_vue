import { Vue, Component } from "vue-property-decorator";
import { IRoute } from '@/types';
import { UserStore } from '@/store';

@Component
export class AppMixin extends Vue {
  /**
   * Gets whether is logged
   */
  get isLogged() {
    return UserStore.isLogged;
  }

  /**
   * Goto app mixin
   * @param _route IRoute
   */
  goto(_route: IRoute) {
    if (this.$route.name !== _route.name) {
      this.$router.push({
        name: _route.name,
        query: _route.query
      })
    }
  }

}