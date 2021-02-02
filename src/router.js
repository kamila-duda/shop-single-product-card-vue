import Vue from 'vue';
import Router from 'vue-router';
import ProductCard from './components/ProductCard/ProductCard.vue';

Vue.use(Router);

const RouterVue = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'productCard',
      component: ProductCard
    }
  ]
});

export default RouterVue;