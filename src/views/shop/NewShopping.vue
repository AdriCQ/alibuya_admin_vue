<template>
  <div id="new-shopping-view">
    <v-section>
      <v-card>
        <v-card-title> Nuevas Compras </v-card-title>
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";

@Component
export default class NewShoppingView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
      {
        text: "Tienda",
        to: { name: "shop.home" },
      },
      {
        text: "Compras",
      },
    ]);
  }

  mounted() {
    ScrollTop();
  }
}
</script>