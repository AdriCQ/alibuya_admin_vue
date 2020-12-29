<template>
  <v-footer
    inset
    dark
    dense
    padless
    app
    color="secondary"
    class="pa-1 text-center"
  >
    <v-spacer />
    <p>Copyrigth 2020</p>
    <v-spacer />
  </v-footer>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {}
</script>