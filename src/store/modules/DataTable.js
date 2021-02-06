import axios from 'axios';

const state = {
    products:[
        {
        name:"uest",
        code: "uest",
        weight: 2,
        price: 2,
        color: "red",
        isDeleted: false
        },
        {
            name:"test",
            code: "Test",
            weight: 1,
            price: 1,
            color: "green",
            isDeleted: false
        },

    ],
    headers:["name", "code", "weight", "price", "color"]
};

const getters = {
    allProducts: state => state.products,
    getHeaders: state => state.headers
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");

        for(let res of response.data){
            res["isDeleted"] = false;
        }

        commit("fillDataTable", response.data);
    },

    async addProduct({commit}, product){
        product["isDeleted"] = false;

        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {...product});

        commit("addToDataTable", response.data);
    },

    async editProduct({commit}, product){

        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${product.id}`, {...product});

        commit("editProduct", response.data);
    },

    async deleteProduct({commit}, id){
        commit("deleteProduct", id);
    },

    sort({commit}, string){
        commit("sort", string);
    },

    sortByNumber({commit}, number){
        commit("sortByNumber", number);
    }
};

const mutations = {
    fillDataTable: (state) => (state.products),
    addToDataTable: (state, product) => (state.products.unshift(product)),
    editProduct: (state, product) => {
        const index = state.products.findIndex( productInDB => productInDB.id === product.id);
        
        if(index !== -1){
            state.products.splice(index, 1, product);
        }
    },

    deleteProduct: (state, id) => {
        const index = state.products.findIndex(productInDB => productInDB.id === id);

        console.log(index);
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