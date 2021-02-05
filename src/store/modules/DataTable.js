import axios from 'axios';

const state = {
    products:[],
    showForm: false,
    isAdd:false,
};

const getters = {
    allProducts: state => state.products,
    showForm: state => state.showForm,
    isAdd: state => state.isAdd,
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        commit("fillDataTable", response.data);
    },

    async addProduct({commit}){
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {isDeleted: false});

        commit("addToDataTable", response.data);
    },

    revertShowForm({commit}){
        commit("revertShowForm");
    },

    async editProduct({commit}, product){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${product.id}`);

        commit("editProduct", response.data);
    },

    setIsAdd({commit},bool){
        commit("setIsAdd", bool);
    }
};

const mutations = {
    fillDataTable: (state, products) => (state.products = products),
    addToDataTable: (state, product) => (state.products.unshift(product)),
    revertShowForm: (state) => (state.showForm = !state.showForm),
    editProduct: (state, product) => {
        const index = state.products.findIndex(productInDB => {productInDB.id === product.id}); 
        
        state.products[index] = product;
    },
    setIsAdd:(state, bool) => (state.isAdd = bool)
};

export default {
    state,
    getters,
    actions,
    mutations
};