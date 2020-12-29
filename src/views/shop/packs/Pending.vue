<template>
  <div id="pending-pack-view">
    <v-section>
      <v-card>
        <v-card-title>Paquetes Pendientes</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="(pack, packKey) in pendingPacks"
              :key="`pending-pack-${packKey}`"
            >
              <pack-base :pack="pack" />
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

@Component({
  components: {
    "pack-base": () => import("@/components/widgets/shop/PackBase.vue"),
  },
})
export default class PendingPackView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([
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
  }
  get pendingPacks() {
    return [1, 2, 3, 4];
  }
}
</script>