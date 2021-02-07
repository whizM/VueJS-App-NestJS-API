<template>
        <tr v-if="!product.isDeleted">
                <td>{{product.name}}</td>
                <td>{{product.code}}</td>
                <td>{{product.weight}}</td>
                <td>{{product.price}}</td>
                <td>{{product.color}}</td>
                <td>
                    <div>
                        <v-btn style="color:white; background-color:red; margin-bottom:1em;" v-on:click="setDelete(product._id)">Sterge</v-btn>
                        <EditPopUp v-bind:_id="product._id" />
                    </div>
                </td>
        </tr>
</template>

<script>
import { mapActions } from 'vuex';
import EditPopUp from './EditPopUp';

export default {
  name: 'Product',
  props:['product'],
  components:{
      EditPopUp
  },
  methods:{
        ...mapActions(["deleteProduct"]),
        setDelete(id){
            this.deleteProduct(id);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th, td {
  border: 1px solid black;
}

tbody tr:nth-child(odd) {
  background-color: teal;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: teal;
}
</style>
