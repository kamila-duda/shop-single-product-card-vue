<template>
  <section class="productCard__container">
    <Gallery
      class="productCard__item"
      v-bind:products="products"
      v-bind:showRing="showRing"
      @updatedSelectedProduct="updatedProduct"
      @changeProduct="changeProduct"
      @resetHover="resetHover"
    />
    <Details
      class="productCard__item"
      v-bind:products="products"
      v-bind:showRing="showRing"
      @add-To-Cart="addToCart"
    />
    <Rates
      class="productCard__item"
      v-bind:products="products"
      v-bind:showRing="showRing"
    />
  </section>
</template>

<script>
import Gallery from "./Gallery.vue";
import Details from "./Details.vue";
import Rates from "./Rates.vue";
import {products} from "./../../products"

export default {
  components: {
    Gallery,
    Details,
    Rates,
  },
  data() {
    return {
      selectedProduct: 0,
      hoverProduct: 0,
      hover: false,
      image: "",
      products: products,
    };
  },
  methods: {
    updatedProduct(index) {
      this.hoverProduct = index;
    },
    changeProduct(index) {
      this.selectedProduct = index;
    },
    resetHover(bool) {
      this.hover = bool;
    },
    addToCart(ring){
    const index = this.products.findIndex(product=> product===ring);
    if (this.products[index].inStock > 0) {
    this.products[index].inStock= this.products[index].inStock-1;
    }
    this.$emit("inShoppingCart",ring);
    }
  },
  computed: {
    showRing() {
      if (this.hover) {
        return this.hoverProduct;
      } else {
        return this.selectedProduct;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__container {
  max-width: 900px;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-left: 2px solid #b9b9b9;
  border-right: 2px solid #b9b9b9;
}
.productCard__item {
  flex-basis: 50%;
  flex-grow: 1;
  padding: 30px;
}
.productCard__item:nth-child(even) {
  flex-basis: 30%;
  flex-grow: 1;
  padding: 30px;
}
@media (max-width: 600px) {
  .productCard__item {
    flex-basis: 280px;
  }
}
</style>
