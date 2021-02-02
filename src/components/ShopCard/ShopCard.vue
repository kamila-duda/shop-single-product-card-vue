<template>
  <section class="shopCard__container">
    <div
      class="shopCard__item">bbcbcbc</div>
    <div
      class="shopCard__item">bcbcbcb</div>
  </section>
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      selectedProduct: 0,
      hoverProduct: 0,
      hover: false,
      image: "",
      products: products,
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopCard__container {
  max-width: 900px;
  margin: 25px auto;
  box-shadow: 0 0 15px 0px #000;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.shopCard__item {
  flex-basis: 50%;
  flex-grow: 1;
  padding: 30px;
}
.shopCard__item:nth-child(even) {
  flex-basis: 30%;
  flex-grow: 1;
  padding: 30px;
}
@media (max-width: 600px) {
  .shopCard__item {
    flex-basis: 280px;
  }
}
</style>
