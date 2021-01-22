<template>
  <div id="app">
    <nav class="navbar__container">shop</nav>
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue"

export default {
  name: 'App',
  components: {
    ProductCard,
  }
}
</script>

<style>
.navbar__container{
  background-color: #9e9d9d;
}
</style>
