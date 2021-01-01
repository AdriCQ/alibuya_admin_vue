<template>
  <div>
    <v-section v-if="alerts.length">
      <v-card flat>
        <v-card-title>Notificaciones</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col
              v-for="(alert, key) in alerts"
              :key="`notification-${key}`"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              class="px-1"
            >
              <router-link :to="alert.to" tag="div">
                <v-alert dense text :type="alert.type" class="cursor-pointer">
                  {{ alert.text }}</v-alert
                >
              </router-link>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex">
          <v-spacer />
          <v-btn small text right>Ver mas</v-btn>
        </v-card-actions>
      </v-card>
    </v-section>
  </div>
</template>

<script lang='ts'>
import { IAlert } from "@/types";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class NotificationSection extends Vue {
  created() {
    const newAlerts: IAlert[] = [
      {
        text: "Se han registrado 12 nuevas compras",
        type: "info",
        to: {
          name: "shop.new",
        },
      },
      {
        text: "Tenemos 5 paquetes pendientes",
        type: "warning",
        to: {
          name: "pack.pending",
        },
      },
      {
        text: "Se han registrado 12 nuevos clientes",
        type: "success",
        to: {
          name: "pack.pending",
        },
      },
      {
        text: "Hay paquetes sin procesar desde mucho tiempo",
        type: "error",
        to: {
          name: "pack.pending",
        },
      },
    ];
    this.alerts.push(...newAlerts);
  }

  alerts: IAlert[] = [];
}
</script>