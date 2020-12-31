import { Vue, Component } from "vue-property-decorator";
import { IRoute } from '@/types';

@Component
export class AppMixin extends Vue {
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