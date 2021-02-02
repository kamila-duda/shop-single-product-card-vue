<template>
  <div id="app">
    <routerView />
  </div>
</template>

<script>
// import ProductCard from "./components/ProductCard/ProductCard.vue"
// import Navigation from "./components/Navigation.vue"
import routerView from "./router"

export default {
  name: 'App',
   components: {
     routerView,
  //   Navigation,
  //   ProductCard,
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
