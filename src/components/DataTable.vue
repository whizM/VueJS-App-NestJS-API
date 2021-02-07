<template>
<div>
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <Sort v-for="header in getHeaders" :key=header v-bind:name="header" />
        <td scope="col"> Options </td>
    </tr>
  </thead>
  <tbody>
      <Product v-for="product in allProducts" :key=product._id v-bind:product="product" />
  </tbody>
</table>
<PopUp />
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Product from './Product';
import CreatePopUp from './CreatePopUp';
import Sort from './Sort';

export default {
  name: 'DataTable',
  methods: {
    ...mapActions(["getProducts"]),
  },
  components:{
    Product,
    CreatePopUp,
    Sort
  },
  computed: mapGetters(["allProducts", "getHeaders"]),
  created(){
    this.getProducts();
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
