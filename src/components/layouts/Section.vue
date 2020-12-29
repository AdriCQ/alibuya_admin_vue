<template>
  <section :style="sStyle" class="v-section">
    <v-container :fluid="fluid">
      <slot />
    </v-container>
  </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AppSection extends Vue {
  @Prop(String) readonly bg?: string;
  @Prop(String) readonly height?: string;
  @Prop(String) readonly minHeight?: string;
  @Prop({ type: Boolean, default: false }) readonly fluid!: boolean;

  get sStyle() {
    let style = "";
    style += this.bg
      ? `background: url(${this.bg}) center no-repeat; background-size: cover;`
      : "";
    style += this.height ? `height:${this.height};` : "";
    style += this.minHeight ? `min-height:${this.minHeight};` : "";
    return style;
  }
}
</script>