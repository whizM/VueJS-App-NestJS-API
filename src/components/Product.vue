<template>
    <tr v-if="!product.isDeleted">
        <td>{{product.isDeleted}}</td>
        <td>{{product.code}}</td>
        <td>{{product.weight}}</td>
        <td>{{product.price}}</td>
        <td>{{product.color}}</td>
        <td>
            <button class="btn btn-info" v-on:click="showForm(product.id)">Edit</button> 
            <button class="btn btn-danger" v-on:click="setDelete(product.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  props:['product'],
  methods:{
        ...mapActions(["revertShowForm", "deleteProduct"]),
        showForm(id){
            this.revertShowForm(id);
        },
        setDelete(id){
            this.deleteProduct(id);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
