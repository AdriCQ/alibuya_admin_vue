<template>
  <v-container id="app-breadcrumb">
    <v-breadcrumbs :items="breadcrumbs" divider=">" />
  </v-container>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";

@Component
export default class AppBreadcrumb extends Vue {
  get breadcrumbs() {
    return AppStore.breadcrumb;
  }
}
</script>