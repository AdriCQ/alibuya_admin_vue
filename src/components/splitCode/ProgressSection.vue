<template>
  <!-- Progress Section -->
  <v-section>
    <v-card flat>
      <v-card-title>Progreso</v-card-title>
      <v-row no-gutters>
        <v-col
          v-for="(progress, key) in progressArray"
          :key="key"
          class="text-center px-1"
        >
          <v-card-subtitle>{{ progress }}</v-card-subtitle>
          <v-progress-circular
            :rotate="360"
            :size="75"
            :width="5"
            :value="25 * key"
            :color="getColor(25 * key)"
          >
            {{ 25 * key }}%
          </v-progress-circular>
          <v-card-subtitle>{{ 25 * key }}/100</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </v-section>
  <!-- / Progress Section -->
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
  progressArray = [
    "Compras Completadas",
    "Paquetes Enviados",
    "Productos Empaquetados",
    "Mensajes Respondidos",
  ];

  getColor(_value: number) {
    if (_value <= 25) {
      return "error";
    } else if (_value <= 50) {
      return "warning";
    } else if (_value < 75) {
      return "secondary";
    } else if (_value < 100) {
      return "info";
    } else {
      return "success";
    }
  }
}
</script>