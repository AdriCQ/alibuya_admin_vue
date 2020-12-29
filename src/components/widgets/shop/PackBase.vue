<template>
  <v-card class="pack-base-widget">
    <v-card-text>
      <h3>Cantidad: 7</h3>
      <h3>Productos</h3>
      <div v-for="i in 5" :key="i">x{{ i }} Producto {{ i }}</div>
    </v-card-text>
    <v-card-actions class="d-flex">
      <v-btn x-small>Detalles</v-btn>
      <v-btn x-small>Editar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PackBaseWidget extends Vue {}
</script>