<template>
  <v-app-bar id="app-bar-full" app color="secondary" height="auto" dark>
    <v-app-bar-nav-icon @click="toggleSidebarLeft">
      <v-icon> mdi-menu </v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <v-btn
      link
      color="transparent"
      elevation="0"
      v-for="(page, pageKey) in pages"
      :key="`tab-page-${pageKey}`"
      right
      :to="page.to"
    >
      <v-icon>{{ page.icon }} </v-icon>
      <template v-if="$vuetify.breakpoint.smAndUp">{{ page.label }}</template>
    </v-btn>
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