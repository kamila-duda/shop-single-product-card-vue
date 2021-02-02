import ProductCard from '../components/ProductCard/ProductCard.vue';
import ShopCard from '../components/ShopCard/ShopCard.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ShopCard',
      component: ShopCard
    },
    {
      path: "/",
      name: "ProductCard",
      component: ProductCard,
    },
  ]
});

export default Router;