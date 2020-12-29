<template>
  <div id="main-home-view" class="view-container">
    <!-- Notifications -->
    <v-section>
      <v-card>
        <v-card-title>Notificaciones</v-card-title>
        <v-card-text>
          <v-list>
            <!-- New Buy -->
            <v-list-item link exact :to="{ name: 'shop.new' }">
              <v-list-item-title>Nuevas Compras</v-list-item-title>
              <v-list-item-action>
                <v-list-item-action-text>
                  <v-chip color="green" small dark>3</v-chip>
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <!-- / New Buy -->
            <!-- Paquetes Pendientes -->
            <v-list-item link exact :to="{ name: 'pack.pending' }">
              <v-list-item-title>Paquetes Pendientes</v-list-item-title>
              <v-list-item-action>
                <v-list-item-action-text>
                  <v-chip color="red" small dark>3</v-chip>
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <!-- / Paquetes Pendientes -->
            <!-- Paquetes Pendientes -->
            <v-list-item link exact>
              <v-list-item-title>Mensajes</v-list-item-title>
              <v-list-item-action>
                <v-list-item-action-text>
                  <v-chip color="red" small dark>3</v-chip>
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <!-- / Paquetes Pendientes -->
          </v-list>
        </v-card-text>
      </v-card>
    </v-section>
    <!-- / Notifications -->
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";

@Component
export default class HomeView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([]);
  }
}
</script>