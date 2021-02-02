<template>
  <nav class="navbar__container">
    <h2 class="navbar__title">
      <img class="navbar__logo" src="../assets/images/diamond.svg" />Jewelry
      store
    </h2>
    <ul class="navbar__menu">
      <router-link :to="{name: `ProductCard`}" class="navbar__menuItem">Home</router-link>
     <router-link :to="{name: 'ShopCard'}"> Shop</router-link>
      <li class="navbar__menuItem">Produkty</li>
      <li class="navbar__menuItem navbar__menuItem--shop">
        Koszyk ({{ this.inCart.length }})
        <img
          class="navbar__menuShop"
          src="../assets/images/shopping-cart.svg"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: ["inCart"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar__container {
  background: rgb(235, 233, 238);
  background: linear-gradient(
    90deg,
    rgba(235, 233, 238, 1) 0%,
    rgba(224, 211, 254, 1) 100%
  );
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
}
.navbar__logo {
  width: 20px;
  margin-right: 8px;
}
.navbar__title {
  margin: 0;
  padding: 5px 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.navbar__menu {
  display: flex;
}
.navbar__menuItem {
  list-style: none;
  margin: 0 8px;
}
.navbar__menuItem--shop {
  display: flex;
  align-items: center;
}
.navbar__menuShop {
  width: 20px;
  margin-left: 5px;
}
</style>
