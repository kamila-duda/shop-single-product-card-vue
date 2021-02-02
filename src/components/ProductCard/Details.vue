<template>
  <div>
    <h1 class="productCard__detailsTitle">{{ products[showRing].title }}</h1>
    <p
      class="productCard__detailsInventory productCard__detailsInventory--green"
      v-if="products[showRing].inStock > 1"
    >
      ✔ w magazynie!
    </p>
    <p
      class="productCard__detailsInventory productCard__detailsInventory--yellow"
      v-else-if="products[showRing].inStock > 0"
    >
      ✔ pośpiesz się, pozostała 1 szt.
    </p>
    <p
      class="productCard__detailsInventory productCard__detailsInventory--red"
      v-else
    >
      ✖ brak w magazynie
    </p>
    <ul>
      <li
        class="productCard__detail"
        v-for="(key, value) in products[showRing].details"
        :key="key"
      >
        {{ value + ": " + key }}
      </li>
    </ul>
    <AddToCart
      class="productCard__item"
      v-bind:products="products"
      v-bind:showRing="showRing"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import AddToCart from "./AddToCart.vue";
export default {
  name: "Details",
  props: ["products", "showRing"],
  components: {
    AddToCart,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__detailsTitle {
    font-size: 18px;
    padding: 15px;
  }
@media (max-width: 600px) {
  .productCard__detailsTitle {
    font-size: 16px;
  }
}
.productCard__detailsInventory {
  font-size: 12px;
  padding: 10px 15px;
}
.productCard__detailsInventory--green {
  color: green;
}
.productCard__detailsInventory--yellow {
  color: #e0ca03;
}
.productCard__detailsInventory--red {
  color: red;
}
.productCard__detail {
  padding: 5px 0px;
  font-size: 14px;
}
</style>
