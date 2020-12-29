<template>
  <div id="pack-home-view">
    <v-section>
      <v-card>
        <v-card-title>Paquetes</v-card-title>
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";

@Component
export default class PackHomeView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
      {
        text: "Paquetes",
        to: { name: "pack.home" },
      },
    ]);
  }
}
</script>