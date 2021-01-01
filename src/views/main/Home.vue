<template>
  <div id="main-home-view" class="view-container">
    <!-- notification-section  -->
    <notification-section />
    <!-- / notification-section -->

    <!-- Progress Section -->
    <progress-section class="mt-1" />
    <!-- / Progress Section -->
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { AppStore } from "@/store";

@Component({
  components: {
    "notification-section": () =>
      import("@/components/splitCode/NotificationSection.vue"),
    "progress-section": () =>
      import("@/components/splitCode/ProgressSection.vue"),
  },
})
export default class HomeView extends Vue {
  beforeMount() {
    AppStore.generateBreadcrumb([]);
  }
}
</script>