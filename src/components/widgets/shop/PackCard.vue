<template>
  <v-card class="pack-base-widget">
    <v-card-text class="pb-0 my-0 pt-1">
      <v-icon color="warning" class="float-right">mdi-alert-circle</v-icon>

      <h4 class="mt-1">Cantidad: 7</h4>
      <h4>17/07/2020</h4>
    </v-card-text>
    <v-list color="transparent" dense>
      <v-list-item
        class="small-list"
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
      <v-btn
        x-small
        @click="
          goto({
            name: 'pack.details',
          })
        "
        >Detalles</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>
import { Component, Mixins } from "vue-property-decorator";
import { AppMixin } from "@/mixins";

@Component
export default class PackBaseWidget extends Mixins(AppMixin) {}
</script>