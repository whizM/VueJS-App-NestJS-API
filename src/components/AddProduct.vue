<template>
    <div>
        <button class="open-button" v-on:click="openForm()">Open Form</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:"AddProduct",
    methods:{
        ...mapActions(["revertShowForm", "setIsAdd"]),
        openForm() {
            this.setIsAdd(true);
            this.revertShowForm();
        }
    }
}
</script>

<style scoped>

</style>