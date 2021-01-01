<template>
  <div id="pack-home-view">
    <v-section>
      <v-card flat>
        <v-card-title>Paquetes</v-card-title>
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";

@Component
export default class PackHomeView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
      {
        text: "Tienda",
        to: { name: "shop.home" },
      },
      {
        text: "Paquetes",
        to: { name: "pack.home" },
      },
    ]);
  }

  mounted() {
    ScrollTop();
  }
}
</script>