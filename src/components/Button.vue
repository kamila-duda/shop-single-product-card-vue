<template>
  <div class="productCard__buttonContainer"><button class="productCard__button">Dodaj do koszyka</button></div>
</template>

<script>
export default {
  name: "Button",
  props: ["products", "selectedProduct"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__buttonContainer{
    display: flex;
    align-items: center;
    justify-content: center;
}
.productCard__button{
    padding: 20px;
    border-radius: 25px;
    font-size: 20px;
}
</style>
