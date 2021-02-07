<template>
<div class="row">
<div class="col-9"></div>
<Dropdown class="col-3" />
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
<CreatePopUp />
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Product from './Product';
import CreatePopUp from './CreatePopUp';
import Sort from './Sort';
import Dropdown from './Dropdown';

export default {
  name: 'DataTable',
  methods: {
    ...mapActions(["getProducts"]),
  },
  components:{
    Product,
    CreatePopUp,
    Sort,
    Dropdown
  },
  computed: mapGetters(["allProducts", "getHeaders"]),
  created(){
    this.getProducts(10);
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
