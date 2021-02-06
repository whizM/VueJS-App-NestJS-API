const state = {
    id: "",
};

const getters = {
};

const actions = {

    setProductId({commit}, id){
        commit('setProductId', id);
    },

    getProductId(){
        return state.id;
    }
};

const mutations = {
    setProductId: (state, id) => {
        state.id = id;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};