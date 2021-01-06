<template>
  <v-sheet color="white" width="100%" height="100%" class="pb-2 pt-5">
    <v-container class="mx-auto">
      <v-row justify="center">
        <v-col cols="auto">
          <v-img
            src="img/logos/logo_300x64.png"
            class="cursor-pointer mx-auto"
            max-width="200"
          />
          <keep-alive>
            <router-view class="mt-2" />
          </keep-alive>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AuthLayout extends Vue {}
</script>