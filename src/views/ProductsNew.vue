<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        newProductParams: {},
        errors: [],
      };
    },
    created: function () {},
    methods: {
      createProduct: function () {
        axios.post("/products", this.newProductParams).then((response) => {
          console.log("Adding Product", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("product create error", error.response);
          this.errors = error.response.data.errors;
        });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Create Product</h1>
    <form v-on:submit.prevent="createProduct()">
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
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
          <input type="submit" value="Create" />
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>