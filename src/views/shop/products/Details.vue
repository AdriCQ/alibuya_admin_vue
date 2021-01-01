<template>
  <div id="product-details-view">
    <v-section>
      <v-card flat>
        <v-row>
          <v-col xs="12" sm="4" md="4" lg="3" xl="3">
            <v-card-text>
              <status-menu />
              <v-img
                src="img/alibuya_300x225.png"
                class="w-10 h-centered"
                alt="Product Image"
              />
            </v-card-text>
          </v-col>
          <v-col xs="12" sm="8" md="8" lg="9" xl="9">
            <v-card-text>
              <v-list color="transparent">
                <v-list-item class="list-height">
                  <b>Título:</b> Product Title
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Precio:</b> $500.00
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Cantidad: </b> 5
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Peso: </b> 100g
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Color: </b> Rojo
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Categoria: </b> Ropas
                </v-list-item>
                <v-list-item class="list-height">
                  <b>Sub-Categoria:</b> Ropas
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-col>
        </v-row>
        <hr />
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { ScrollTop } from "@/utils";

@Component({
  components: {
    "status-menu": () => import("@/components/popups/StatusMenu.vue"),
  },
})
export default class ProductDetailesView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
      {
        text: "Tienda",
        to: { name: "shop.home" },
      },
      {
        text: "Productos",
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