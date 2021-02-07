<template>
    <PopUp spanText="Editeaza informatiile produsului" btnText="Editeaza" :_id="_id" />
</template>

<script>
import PopUp from './PopUp';

export default {
    name:"EditPopUp",
    components:{
        PopUp
    },
    props:['_id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>