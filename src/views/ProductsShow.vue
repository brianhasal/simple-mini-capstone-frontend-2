<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        product: {}
      };
    },
    created: function () {
      axios.get("/products/" + this.$route.params.id).then((response) => {
        console.log("Finding Product to Show", response);
        this.product = response.data;
      })
    },
    methods: {},
  };
</script>

<template>
  <div class="product-show">
    <h1>Product Information Page</h1>
    <div>
      <img width=400 v-bind:src="product.image_url" alt="product image">
      <h2>{{product.name}}</h2>
      <h3>{{product.price}}</h3>
      <p>{{product.description}}</p>
      <a href="/">Back to Products</a>
    </div>
  </div>
</template>

<style></style>
