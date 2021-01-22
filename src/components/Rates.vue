<template>
    <div>
        <h2>Ocena klientów:</h2>
        <p v-if="products[selectedProduct].rates.length<1">Brak opinii</p>
        <div v-else  v-for="(rate, index) in products[selectedProduct].rates" v-bind:key="index" class="productCard__rate"><h3>{{rate.user}}</h3><p class="productCard__rateText">{{rate.text}}</p></div>
        
    </div>
</template>

<script>
export default {
  name: "Rates",
  props: ["products", "selectedProduct"],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__rate{
    font-size: 14px;
}
.productCard__rateText{
    font-style: italic;
}
</style>
