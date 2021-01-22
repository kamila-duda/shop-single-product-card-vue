<template>
    <div>
      <img class="productCard__galleryItem" :src="image" />
      <div class="productCard__galleryItems">
        <img
          v-for="(product, index) in products"
          :key="product.id"
          :src="product.image"
          class="productCard__galleryItem--small"
          @mouseover="updateProduct(index)"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: "Gallery",
  props: [
      "products",
      "selectedProduct"
  ],
  data(){
      return {
          selectedProductImage: this.selectedProduct,
      }
  },
  methods: {
      updateProduct(index) {
          this.selectedProductImage = index;
          this.$emit("updatedSelectedProduct", this.selectedProductImage);
      }
  },
  computed: {
      image() {
          return this.products[this.selectedProduct].image;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard__galleryItem {
  width: 100%;
  border-radius: 25px;
}
.productCard__galleryItems {
  width: 100%;
}
.productCard__galleryItem--small {
  width: 30%;
  border-radius: 25px;
  margin: 5px;
  cursor: pointer;
}
</style>
