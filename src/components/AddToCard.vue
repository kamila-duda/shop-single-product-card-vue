<template>
  <div class="productCard__actionContainer">
    <p>Cena: {{ products[showRing].cena }}</p>
    <button class="productCard__button">Dodaj do koszyka</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["products", "showRing"],
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
  padding: 20px;
  border-radius: 25px;
  font-size: 20px;
  height: 70px;
  width: max-content;
  cursor: pointer;
  outline: none;
}
</style>
