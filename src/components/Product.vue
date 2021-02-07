<template>
    <tr v-if="!product.isDeleted">
        <td>{{product.name}}</td>
        <td>{{product.code}}</td>
        <td>{{product.weight}}</td>
        <td>{{product.price}}</td>
        <td>{{product.color}}</td>
        <td>
            <v-btn style="color:white; background-color:orange; margin-right:3em" text v-on:click="showForm(product.id)">Edit</v-btn>
            <v-btn style="color:white; background-color:red;" text v-on:click="setDelete(product._id)">Delete</v-btn>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  props:['product'],
  methods:{
        ...mapActions(["deleteProduct", "setProductId"]),
        showForm(id){
            this.$set(this.$parent.$children[0].$data, 'dialog', true);
            this.setProductId(id);
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
