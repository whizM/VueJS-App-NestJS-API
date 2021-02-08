<template>
        <v-btn v-on:click="onClick" color="secondary" dark class="col-4">{{number}}</v-btn>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name:"Button",
    props:["number"],
    methods:{
        ...mapActions(["getProducts"]),
        onClick(){
            const numeric = parseInt(this.number);

            const skip = (numeric * this.getElemPerPage) - this.getElemPerPage;

            const data = {
                limit: this.getElemPerPage,
                skip
            }

            this.getProducts(data);
        }
    },
    computed: mapGetters(["getElemPerPage"])
    
}
</script>

<style scoped>

</style>