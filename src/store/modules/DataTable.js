import axios from 'axios';

const state = {
    products:[]
};

const getters = {
    allProducts: state => state.products
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        commit("fillDataTable", response.data);
    }
};

const mutations = {
    fillDataTable: (state, products) => (state.products = products)
};

export default {
    state,
    getters,
    actions,
    mutations
};