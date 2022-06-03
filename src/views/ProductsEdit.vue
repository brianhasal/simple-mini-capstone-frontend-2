<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        product: {},
        editProductParams: {},
        errors: []
      };
    },
    created: function () {
      axios
        .get("/products/" + this.$route.params.id)
        .then((response) => {
          console.log("Receving Product", response);
          this.product = response.data;
          this.editProductParams = this.product;
        })
    },
    methods: {
      updateProduct: function(product) {
        axios
          .patch("/products/" + product.id, this.editProductParams)
          .then((response) => {
            console.log("Attempting edit", response);
            this.$router.push("/products");
          })
          .catch((error) => {
            console.log("photos update error", error.response);
            this.errors = error.response.data.errors;
          });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Edit Product Listing</h1>
    Name:
    <input v-model="editProductParams.name" type="text">
    Price:
    <input v-model="editProductParams.price" type="text">
    Description:
    <input v-model="editProductParams.description" type="text">
    Image URL:
    <input v-model="editProductParams.image_url" type="text">

<button v-on:click="updateProduct(product)">Update</button>
  </div>
</template>

<style></style>