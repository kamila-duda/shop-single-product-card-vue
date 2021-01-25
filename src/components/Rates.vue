<template>
  <div>
    <h2 class="productCard__rateTitle">Ocena klientów:</h2>
    <p v-if="products[showRing].rates.length < 1">Brak opinii</p>
    <div
      v-else
      v-for="(rate, index) in products[showRing].rates"
      v-bind:key="index"
      class="productCard__rate"
    >
      <h3>{{ rate.user }}</h3>
      <p class="productCard__rateText">{{ rate.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rates",
  props: ["products", "showRing"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 600px) {
  .productCard__rateTitle {
    font-size: 16px;
  }
}
.productCard__rate {
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
@media (max-width: 600px) {
  .productCard__rate {
    font-size: 12px;
  }
}
.productCard__rateText {
  font-style: italic;
}
</style>
