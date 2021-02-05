<template>
  <div id="app">
    <Navigation 
    v-bind:inCart = "inCart"
    />
    <SidePage/>
    <ProductCard @inShoppingCart="inShoppingCart" />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard/ProductCard.vue"
import Navigation from "./components/Navigation.vue";
import SidePage from "./components/SidePage/SidePage.vue"
export default {
  name: 'App',
  components: {
    Navigation,
    ProductCard,
    SidePage,
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