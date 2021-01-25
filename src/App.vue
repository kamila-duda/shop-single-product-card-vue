<template>
  <div id="app">
    <Navigation 
    v-bind:inCart = "inCart"
    />
    <ProductCard @inShoppingCart="inShoppingCart" />
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
  },
  data(){
    return{
      inCart: [],
    }
  },
  methods:{
    inShoppingCart(data){
      this.inCart.push(data);
    }
  }
}
</script>

<style>

</style>
