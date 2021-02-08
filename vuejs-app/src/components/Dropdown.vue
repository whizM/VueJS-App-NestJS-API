<template>
    <div>
        <v-select :items="items" label="Number of items" outlined v-on:change="onChange"></v-select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:"Dropdown",
    data() {
        return{
            items: ['5', '10', '15', '20'],
        }
    },
    methods:{
        ...mapActions(["getProducts"]),
        onChange(limit){
            this.getProducts({limit});
        }
    }
}
</script>

<style scoped>

</style>