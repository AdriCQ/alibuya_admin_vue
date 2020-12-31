<template>
  <div id="pack-details-view">
    <v-section>
      <v-card>
        <v-card-text>
          <div class="float-right">
            <v-chip color="success" v-if="packStatus === 'ready'"
              ><v-icon small class="mr-2">mdi-check-circle</v-icon>Listo</v-chip
            >
            <v-chip color="error" v-if="packStatus === 'canceled'"
              ><v-icon small class="mr-2">mdi-close-circle</v-icon>No
              Disponible</v-chip
            >
            <v-chip v-if="packStatus === 'waiting'"
              ><v-icon small class="mr-2">mdi-timer</v-icon>En Espera</v-chip
            >
          </div>
          <v-list color="transparent" dense class="mt-2">
            <v-list-item>
              <v-list-item-title
                ><b>Cliente:</b> Adrian Capote</v-list-item-title
              >
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
        </v-card-text>
        <hr />

        <!-- Modify Status -->
        <v-card-subtitle>Modificar Estado</v-card-subtitle>
        <v-card-actions>
          <v-btn small @click="setStatus('waiting')">En Espera</v-btn>
          <v-btn color="success" small @click="setStatus('ready')">Listo</v-btn>
          <v-btn color="error" small @click="setStatus('canceled')"
            >No Disponible</v-btn
          >
        </v-card-actions>
        <!-- / Modify Status -->
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";
import { TPackStatus } from "@/types";
import { ScrollTop } from "@/utils";

@Component
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

  packStatus: TPackStatus = "ready";

  setStatus(_status: TPackStatus) {
    this.packStatus = _status;
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