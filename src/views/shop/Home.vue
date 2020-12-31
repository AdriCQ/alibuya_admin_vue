<template>
  <div id="shop-home-view">
    <v-section>
      <v-card>
        <v-card-title>Tienda</v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col v-for="(link, key) in shopLinks" :key="`shop-link-${key}`">
              <v-card
                dense
                link
                :to="link.to"
                width="15rem"
                class="h-centered text-center"
              >
                <v-card-subtitle>{{ link.label }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";
import { ILinkIconLabel } from "@/types";

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

  shopLinks: ILinkIconLabel[] = [
    {
      label: "Compras",
      to: { name: "shop.new" },
    },
    {
      label: "Paquetes",
      to: { name: "pack.home" },
    },
    {
      label: "Paquetes Pendientes",
      to: { name: "pack.pending" },
    },
  ];
}
</script>