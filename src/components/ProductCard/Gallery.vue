<template>
  <div class="productCard__galleryContainer">
    <img class="productCard__galleryItem" :src="image" />
    <div class="productCard__galleryItems">
      <img
        v-for="(product, index) in products"
        :key="product.id"
        :src="product.image"
        class="productCard__galleryItem--small"
        @mouseover="[updateProduct(index), resetHover(true)]"
        @mouseleave="resetHover(false)"
        @click="changeProduct(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["products", "showRing"],
  methods: {
    updateProduct(index) {
      this.$emit("updatedSelectedProduct", index);
    },
    changeProduct(index) {
      this.$emit("changeProduct", index);
    },
    resetHover(bool) {
      this.$emit("resetHover", bool);
    },
  },
  computed: {
    image() {
      return this.products[this.showRing].image;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__galleryContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.productCard__galleryItem {
  width: 80%;
  border-radius: 25px;
}
.productCard__galleryItems {
  width: 80%;
  display: flex;
  justify-content: center;
}
.productCard__galleryItem--small {
  width: 30%;
  border-radius: 25px;
  margin: 5px;
  cursor: pointer;
}
</style>
