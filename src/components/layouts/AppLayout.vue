<template>
  <div>
    <app-header />
    <app-sidebar />
    <v-main id="app-content">
      <app-breadcrumb />
      <router-view class="app-container" />
      <app-footer />
    </v-main>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import AppBreadcrumb from "./AppBreadcrumb.vue";
import AppFooter from "./Footer.vue";
import AppHeader from "./Header.vue";
import AppSidebarLeft from "./SidebarLeft.vue";

@Component({
  components: {
    "app-breadcrumb": AppBreadcrumb,
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-sidebar": AppSidebarLeft,
  },
})
export default class AppLayout extends Vue {}
</script>