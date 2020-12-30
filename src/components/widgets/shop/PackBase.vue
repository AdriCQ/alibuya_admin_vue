<template>
  <v-card class="pack-base-widget">
    <v-card-text class="pb-0 my-0 pt-1">
      <v-icon color="warning" class="float-right">mdi-alert-circle</v-icon>

      <h4 class="mt-1">Cantidad: 7</h4>
      <h4>17/07/2020</h4>
    </v-card-text>
    <v-list color="transparent">
      <v-list-item
        class="py-0 my-0"
        style="min-heigth: 0px"
        v-for="i in 5"
        :key="`${i}`"
        link
        :to="{ name: 'product.details' }"
      >
        <v-list-item-icon class="list-icon">
          <v-icon small color="success">mdi-check-circle</v-icon>
          <!-- <v-icon small color="error">mdi-close-circle</v-icon>
          <v-icon small>mdi-timer</v-icon> -->
        </v-list-item-icon>

        Product {{ i }}
      </v-list-item>
    </v-list>
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

<style lang="scss" scoped>
.list-icon {
  margin-right: 8px !important;
  min-width: 0px !important;

  .v-icon {
    margin-right: 8px;
  }
}
</style>