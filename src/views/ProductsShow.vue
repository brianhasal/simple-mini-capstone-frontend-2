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
    methods: {
      destroyProduct: function(product) {
        axios
          .delete("/products/" + product.id).then((response) => {
            console.log("Deleting product", response);
            this.$router.push("/products");
          })
      }
    },
  };
</script>

<template>
  <div class="product-show">
    <h1>Product Information Page</h1>
    <div>
      <div>
        <button v-on:click="destroyProduct(product)">Delete Product</button>
      </div>
      <img width=400 v-bind:src="product.image_url" alt="product image">
      <h2>{{product.name}}</h2>
      <h3>{{product.price}}</h3>
      <p>{{product.description}}</p>
      <div>
        <router-link v-bind:to="`/products/${product.id}/edit`">Edit Product</router-link>     
      </div>
      <a href="/">Back to Products</a>
    </div>
  </div>
</template>

<style></style>
