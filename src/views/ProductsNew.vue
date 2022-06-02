<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        newProductParams: {}
      };
    },
    created: function () {},
    methods: {
      createProduct: function () {
        axios.post("/products", this.newProductParams).then((response) => {
          console.log("Adding Product", response);
          this.$router.push("/products");
        })
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Create Product</h1>
      <div>
        <div>
          Name: 
          <input v-model="newProductParams.name" type="text">
        </div>
        <div>
          Price: 
          <input v-model="newProductParams.price" type="text">
        </div>
        <div>
          Description: 
          <input v-model="newProductParams.description" type="text">
        </div>
        <div>
          Image URL: 
          <input v-model="newProductParams.image_url" type="text">
        </div>
        <div>
          <button v-on:click="createProduct()">Create</button>
        </div>
      </div>
  </div>
</template>

<style></style>