<template>
    <div class="row">
        <div class="col-4"></div>
            <div class="col-4">
                <PageButton v-for="page in getNumberOfPages" :key="page" :number="page" />
            </div>
        <div class="col-4"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageButton from './PageButton';

export default {
    name:"NumberOfPages",
    components:{
        PageButton
    },
    computed: mapGetters(["getNumberOfPages"])
    
}
</script>

<style scoped>

</style>