<template>
  <v-navigation-drawer
    :value="sidebarLeft"
    @input="onInput"
    app
    :hide-overlay="false"
  >
    <!-- Pages -->
    <v-list nav dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="font-weight-bold">
          Hola,
          <span v-if="!userName">Identifícate</span>
          <span else>{{ userName }}</span>
        </v-list-item-title>
      </v-list-item>

      <v-divider class="mb-1" />

      <v-list-item
        v-for="(page, pageKey) in pages"
        :key="`list-item-${pageKey}`"
        link
        exact
        :to="page.to"
      >
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ page.label }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang='ts'>
/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { PAGES } from "@/utils";

@Component
export default class AppSidebarLeft extends Vue {
  get appLang() {
    return AppStore.lang;
  }

  get isLogged() {
    return true;
  }

  get userName() {
    return "userName";
  }
  get sidebarLeft() {
    return AppStore.sidebarLeft;
  }

  get pages() {
    return PAGES;
  }

  onInput(input: boolean) {
    AppStore.sidebarLeft = input;
  }
}
</script>