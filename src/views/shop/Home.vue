<template>
  <div id="shop-home-view"></div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";

@Component
export default class ShopHomeView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
      {
        text: "Tienda",
      },
    ]);
  }

  mounted() {
    ScrollTop();
  }
}
</script>