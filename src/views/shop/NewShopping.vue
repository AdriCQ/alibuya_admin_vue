<template>
  <div id="new-shopping-view">
    <v-section>
      <v-card flat>
        <v-card-title> Nuevas Compras </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              xs="6"
              sm="4"
              md="3"
              lg="2"
              xl="2"
              v-for="(pack, packKey) in 10"
              :key="`pending-pack-${packKey}`"
            >
              <shop-card :pack="pack" />
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

@Component({
  components: {
    "shop-card": () => import("@/components/widgets/shop/ShopCard.vue"),
  },
})
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