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
    
    <div>
      <h1></h1>
      <img :src="image" />
    </div>
  </section>
</template>

<script>
import Gallery from "./Gallery.vue";
import Details from "./Details.vue";
import Rates from "./Rates.vue";

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
      products: [
        {
          id: 1,
          image: require("../assets/images/ring1.jpg"),
          title: "Pierścionek z rubinem",
          details: { size: 16, kamień: "rubin", kruszec: "białe złoto" },
          cena: "899 zł",
          inStock: 3,
          rates: [
            { text: "super!", user: "Kate" },
            { text: "Pięknie wygląda na palcu. Polecam.", user: "Anna" },
          ],
        },
        {
          id: 2,
          image: require("../assets/images/ring3.jpg"),
          title: "Pierścionek z turkusem",
          details: { size: 14, kamień: "turkus", kruszec: "białe złoto" },
          cena: "1099 zł",
          inStock: 1,
          rates: [],
        },
        {
          id: 3,
          image: require("../assets/images/ring2.jpg"),
          title: "Pierścionek z diamentem",
          details: { size: 16, kamień: "diament", kruszec: "białe złoto" },
          cena: "1799 zł",
          inStock: 0,
          rates: [],
        },
      ],
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
  box-shadow: 0 0 15px 0px #000;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
