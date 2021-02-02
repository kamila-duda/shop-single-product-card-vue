<template>
  <div id="app">
     <router-link :to="{name: `ProductCard`}">Home</router-link>
     <router-link :to="{name: 'ShopCard'}">sjop</router-link>
  </div>
</template>

<script>
// import ProductCard from "./components/ProductCard/ProductCard.vue"
// import Navigation from "./components/Navigation.vue"

export default {
  name: 'App',
  // components: {
  //   Navigation,
  //   ProductCard,
  // },
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
