<template>
    <tr>
        <td>{{product.id}}</td>
        <td>{{product.id}}</td>
        <td>{{product.id}}</td>
        <td>{{product.id}}</td>
        <td>{{product.id}}</td>
        <td>
            <button class="btn btn-info">Edit</button> 
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  props:['product'],
  methods:{
        ...mapActions(["revertShowForm"]),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
