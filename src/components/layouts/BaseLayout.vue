<template>
  <div>
    <v-main id="app-content">
      <router-view />
    </v-main>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class BaseLayout extends Vue {}
</script>