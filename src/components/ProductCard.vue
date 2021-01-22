<template>
  <section class="productCard__container">
    <Gallery
      class="productCard__item"
      v-bind:products="products"
      v-bind:selectedProduct="selectedProduct"
      @updatedSelectedProduct="updatedProduct"
    />
    <Details
      class="productCard__item"
      v-bind:products="products"
      v-bind:selectedProduct="selectedProduct"
    />
    <Rates
      class="productCard__item"
      v-bind:products="products"
      v-bind:selectedProduct="selectedProduct"
    />
    <Button
      class="productCard__item"
      v-bind:products="products"
      v-bind:selectedProduct="selectedProduct"
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
import Button from "./Button.vue";

export default {
  components: {
    Gallery,
    Details,
    Rates,
    Button,
  },
  data() {
    return {
      selectedProduct: 0,
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
      this.selectedProduct = index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__container {
  max-width: 1200px;
  margin: 5px;
  box-shadow: 0 0 15px 0px #000;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.productCard__item {
  flex-basis: 50%;
  min-width: 280px;
  flex-grow: 1;
  padding: 15px;
}
@media (max-width: 600px) {
    .productCard__item:nth-of-type(4){
    order: 2;
    width: 100%;
}}
</style>
