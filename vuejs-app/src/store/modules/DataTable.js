import axios from 'axios';

const state = {
    products:[],
    headers:["name", "code", "weight", "price", "color"],
    numberOfPages: 0,
    elemPerPage: 0,
};

const getters = {
    allProducts: state => state.products,
    getHeaders: state => state.headers,
    getNumberOfPages: state => state.numberOfPages,
    getElemPerPage: state => state.elemPerPage
};

const actions = {
    async getProducts({ commit }, data) {
        const response = await axios.get(`http://localhost:3000/produse/${data.limit}/${data.skip}`);

        const numLimit = parseInt(data.limit);

        const mutationData = {
            res: response.data,
            numLimit
        }
        
        commit("fillDataTable", mutationData);
    },

    async addProduct({commit}, product){
        product["isDeleted"] = false;

        const response = await axios.post("http://localhost:3000/produse", {product});

        commit("addToDataTable", response.data);
    },

    async editProduct({commit}, product){

        const response = await axios.put(`http://localhost:3000/produse/${product._id}`, {product});

        commit("editProduct", response.data);
    },

    async deleteProduct({commit}, id){
        const response = await axios.delete(`http://localhost:3000/produse/${id}`);

        commit("deleteProduct", response.data._id);
    },

    async setNumberOfPages({commit}, elemPerPage){
        const response = await axios.get(`http://localhost:3000/produse/count/${elemPerPage}`);

        commit("setNumberOfPages", response.data);
    },

    sort({commit}, string){
        commit("sort", string);
    }
};

const mutations = {
    fillDataTable: (state, data) => {
        state.products = data.res;
        state.elemPerPage = data.numLimit;
    },
    addToDataTable: (state, product) => (state.products.unshift(product)),
    editProduct: (state, product) => {

        const index = state.products.findIndex( productInDB => productInDB._id === product._id);
        
        if(index !== -1){
            state.products.splice(index, 1, product);
        }

    },

    deleteProduct: (state, id) => {
        const index = state.products.findIndex(productInDB => productInDB._id === id);

        if(index !== -1){
            state.products[index].isDeleted = true;
        }
        
    },

    sort(state, string){
        const compare = (a,b) => {
            if(a[string] < b[string])
                return -1;
            
            
            if(a[string] === b[string])
                return 0

            return 1;
        }
        state.products.sort(compare);
    },
    setNumberOfPages: (state, numberOfPages) => (state.numberOfPages = numberOfPages)
};

export default {
    state,
    getters,
    actions,
    mutations
};