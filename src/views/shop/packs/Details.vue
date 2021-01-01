<template>
  <div id="pack-details-view">
    <v-section>
      <v-card flat>
        <div class="float-right ma-1">
          <status-menu />
        </div>

        <v-list color="transparent" dense class="mt-2">
          <v-list-item>
            <v-list-item-title><b>Cliente:</b> Adrian Capote</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><b>Precio:</b> $500.00</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><b>Dirección:</b> Ave. 52 #5512, Cienfuegos,
              Cuba</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title><b>Peso:</b> 1500g</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-section>
    <!-- Products -->
    <v-section class="mt-1">
      <v-card flat>
        <v-card-title>Productos</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              class="pa-1"
              v-for="i in 10"
              :key="i"
            >
              <product-card :product="{ title: 'Product' }" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-section>
    <!-- / Products -->
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";

@Component({
  components: {
    "product-card": () => import("@/components/widgets/shop/ProductCard.vue"),
    "status-menu": () => import("@/components/popups/StatusMenu.vue"),
  },
})
export default class PackDetailesView extends Vue {
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
      {
        text: "Detalles",
      },
    ]);
  }

  mounted() {
    ScrollTop();
  }
}
</script>

<style lang="scss" scoped>
.list-height {
  min-height: 2rem;
  b {
    margin-right: 4px;
  }
}
</style>