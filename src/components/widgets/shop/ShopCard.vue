<template>
  <v-card>
    <v-card-text>Abraham Bla bla</v-card-text>
    <v-list color="transparent">
      <v-list-item
        class="small-list"
        v-for="i in 5"
        :key="`${i}`"
        link
        :to="{ name: 'pack.details' }"
      >
        <v-list-item-icon class="list-icon">
          <v-icon small color="success">mdi-check-circle</v-icon>
          <!-- <v-icon small color="error">mdi-close-circle</v-icon>
          <v-icon small>mdi-timer</v-icon> -->
        </v-list-item-icon>

        Paquete {{ i }}
      </v-list-item>
    </v-list>
    <v-card-actions class="d-flex">
      <v-btn
        x-small
        @click="
          goto({
            name: 'pack.pending',
          })
        "
        >Detalles</v-btn
      >
      <v-btn x-small>Editar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>
import { Component, Mixins } from "vue-property-decorator";
import { AppMixin } from "@/mixins";

@Component
export default class PackCard extends Mixins(AppMixin) {}
</script>