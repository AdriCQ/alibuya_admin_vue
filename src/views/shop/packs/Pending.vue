<template>
  <div id="pending-pack-view">
    <v-section>
      <v-card flat>
        <v-card-title>Paquetes Pendientes</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              v-for="(pack, packKey) in pendingPacks"
              :key="`pending-pack-${packKey}`"
            >
              <pack-card :pack="pack" />
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
    "pack-card": () => import("@/components/widgets/shop/PackCard.vue"),
  },
})
export default class PendingPackView extends Vue {
  mounted() {
    AppStore.generateBreadcrumb([
      {
        text: "Tienda",
        to: { name: "shop.home" },
      },
      {
        text: "Paquetes",
        to: { name: "pack.home" },
        disabled: false,
      },
      {
        text: "Pendientes",
        to: { name: "pack.pending" },
      },
    ]);
    ScrollTop();
  }

  get pendingPacks() {
    return [1, 2, 3, 4];
  }
}
</script>