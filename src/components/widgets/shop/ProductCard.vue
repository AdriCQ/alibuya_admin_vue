<template>
  <v-card min-width="10rem">
    <v-row no-gutters>
      <v-col cols="4">
        <v-icon small color="success" class="ma-1">mdi-check-circle</v-icon>
        <v-img :src="productImage" :alt="product.title" />
      </v-col>
      <v-col class="pr-1" style="font-size: 0.75rem">
        <p class="ma-0">
          <b>{{ product.title }}</b>
        </p>
        <p class="ma-0">5 Piezas</p>
        <p class="ma-0"><b>Color:&nbsp;</b>Rojo</p>
        <p class="ma-0"><b>Talla:&nbsp;</b>45</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import { IProduct } from "@/types";

@Component
export default class ProductCard extends Vue {
  @Prop(Object) readonly product!: IProduct;

  get productImage() {
    return "img/alibuya_300x225.png";
  }
}
</script>