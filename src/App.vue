<template>
  <v-app style="min-width: 256px">
    <router-view />
  </v-app>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>