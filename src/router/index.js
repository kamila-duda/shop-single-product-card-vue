import { createWebHistory, createRouter } from "vue-router";
import ProductCard from '../components/ProductCard/ProductCard.vue';
import ShopCard from '../components/ShopCard/ShopCard.vue';

const routes = [
  {
    path: "/",
    name: "ProductCard",
    component: ProductCard,
  },
  {
    path: "/shop",
    name: "ShopCard",
    component: ShopCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;