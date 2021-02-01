<template>
  <div class="productCard__actionContainer">
    <p>Cena: {{ products[showRing].cena }}</p>
    <button @click="addToCart(products[showRing])" class="productCard__button" :disabled="(products[showRing].inStock<1)? true : false" >
      Dodaj do koszyka
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: ["products", "showRing"],
  methods: {
    addToCart(ring){
    this.$emit("add-To-Cart", ring)
  },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__actionContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productCard__button {
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  height: 50px;
  width: 155px;
  cursor: pointer;
  outline: none;
}
</style>
