<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        products: [],
        currentProduct: {},
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("/products").then((response) => {
          console.log("Indexing products", response);
          this.products = response.data;
        })
      },
      showDescription: function(product) {
        this.currentProduct = product;
        document.querySelector("#product-description").showModal();
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Products Page</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <img width=400 v-bind:src="product.image_url" alt="product image">
      <h2>{{product.name}}</h2>
      <h3>{{product.price}}</h3>
      <button v-on:click="showDescription(product)">Description</button>
      <div>
        <router-link v-bind:to="`/products/${product.id}`">Product Page</router-link>
      </div>
    </div>
    <dialog id="product-description">
      <form method="dialog">
        <h1>{{ currentProduct.name }}</h1>
        <p>{{ currentProduct.description }}</p>
        <router-link v-bind:to="`/products/${currentProduct.id}`">Product Page</router-link>
        <div>
          <button>Close</button>
        </div>
      </form>
    </dialog>
  </div>
</template>

<style></style>
