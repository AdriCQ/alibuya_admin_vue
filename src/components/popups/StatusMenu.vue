<template>
  <!-- Menu  -->
  <v-menu offset-y v-model="menu">
    <template v-slot:activator="{ on, attrs }">
      <v-chip v-bind="attrs" v-on="on" :color="chip.color"
        ><v-icon small class="mr-2">{{ chip.icon }}</v-icon
        >{{ chip.label }}</v-chip
      >
    </template>
    <v-list dense>
      <v-list-item @click="setStatus('waiting')">En Espera</v-list-item>
      <v-list-item @click="setStatus('ready')"> Listo </v-list-item>
      <v-list-item small @click="setStatus('canceled')">
        No Disponible
      </v-list-item>
    </v-list>
  </v-menu>
  <!--/ Menu  -->
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class StatusMenu extends Vue {
  status = "ready";
  menu = false;

  get chip() {
    switch (this.status) {
      case "ready":
        return {
          color: "success",
          icon: "mdi-check-circle",
          label: "Listo",
        };
      case "canceled":
        return {
          color: "error",
          icon: "mdi-close-circle",
          label: "Cancelado",
        };

      default:
        return {
          color: "",
          icon: "mdi-timer",
          label: "En Espera",
        };
    }
  }

  setStatus(_status: string) {
    this.status = _status;
    this.menu = false;
  }
}
</script>