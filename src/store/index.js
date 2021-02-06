import Vuex from 'vuex';
import Vue from 'vue';
import DataTable from './modules/DataTable';
import Form from './modules/Form';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        DataTable,
        Form
    }
})