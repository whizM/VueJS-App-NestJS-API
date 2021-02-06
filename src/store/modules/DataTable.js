import axios from 'axios';

const state = {
    products:[],
};

const getters = {
    allProducts: state => state.products,
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");

        commit("fillDataTable", response.data);
    },

    async addProduct({commit}){
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {isDeleted: false});

        commit("addToDataTable", response.data);
    },

    async editProduct({commit}, product){

        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${product.id}`, {...product});

        commit("editProduct", response.data);
    },

    deleteProduct({commit}, id){
        commit("deleteProduct", id);
    }
};

const mutations = {
    fillDataTable: (state, products) => (state.products = products),
    addToDataTable: (state, product) => (state.products.unshift(product)),
    editProduct: (state, product) => {
        const index = state.products.findIndex( productInDB => productInDB.id === product.id);
        
        if(index !== -1){
            state.products.splice(index, 1, product);
        }
    },
    deleteProduct: (state, id) => {
        const index = state.products.findIndex(productInDB => productInDB.id === id);

        if(index !== -1){
            state.products[index].isDeleted = true;
        }
        
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};