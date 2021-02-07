<template>
    <td scope="col">  
        <v-btn style="color:white;" v-on:click="sortProducts(name)" text >{{name}}</v-btn>
    </td>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "Sort",
    props:["name"],
    methods:{
        ...mapActions(["sort", "sortByNumber"]),
        sortProducts(name){
            this.sort(name);
        }
    }
}
</script>

<style scoped>
td {
  border: 1px solid black;
}
</style>