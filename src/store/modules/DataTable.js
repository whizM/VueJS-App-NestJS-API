import axios from 'axios';

const state = {
    products:[],
    headers:["name", "code", "weight", "price", "color"]
};

const getters = {
    allProducts: state => state.products,
    getHeaders: state => state.headers
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("http://localhost:3000/produse");

        commit("fillDataTable", response.data);
    },

    async addProduct({commit}, product){
        product["isDeleted"] = false;

        const response = await axios.post("http://localhost:3000/produse", {product});

        commit("addToDataTable", response.data);
    },

    async editProduct({commit}, product){

        console.log("Action", product._id);
        console.log(`http://localhost:3000/${product._id}`);
        const response = await axios.put(`http://localhost:3000/produse/${product._id}`, {product});

        console.log(response.data);

        commit("editProduct", response.data);
    },

    async deleteProduct({commit}, id){
        const response = await axios.delete(`http://localhost:3000/produse/${id}`);

        commit("deleteProduct", response.data._id);
    },

    sort({commit}, string){
        commit("sort", string);
    },

    sortByNumber({commit}, number){
        commit("sortByNumber", number);
    }
};

const mutations = {
    fillDataTable: (state, products) => (state.products = products),
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
};

export default {
    state,
    getters,
    actions,
    mutations
};