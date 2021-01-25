<template>
  <div id="app">
    <Navigation />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue"
import Navigation from "./components/Navigation.vue"

export default {
  name: 'App',
  components: {
    Navigation,
    ProductCard,
  }
}
</script>

<style>

</style>
