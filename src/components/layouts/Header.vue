<template>
  <v-app-bar id="app-bar-full" app color="secondary" height="auto" dark>
    <v-app-bar-nav-icon @click="toggleSidebarLeft">
      <v-icon> mdi-menu </v-icon>
    </v-app-bar-nav-icon>
    <v-list
      class="d-flex"
      color="transparent"
      v-if="$vuetify.breakpoint.smAndUp"
    >
      <v-list-item
        exact
        dense
        link
        v-for="(page, pageKey) in pages"
        :key="`tab-page-${pageKey}`"
      >
        {{ page.label }}
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { PAGES } from "@/utils";

@Component
export default class AppHeader extends Vue {
  get pages() {
    return PAGES;
  }
  /**
   *
   */
  toggleSidebarLeft() {
    AppStore.sidebarLeft = !AppStore.sidebarLeft;
  }
}
</script>