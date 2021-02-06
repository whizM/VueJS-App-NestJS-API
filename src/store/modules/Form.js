const state = {
    isFormDisplayed: false,
    id: ""
};

const getters = {
    getIsFormDisplayed: state => state.isFormDisplayed,
};

const actions = {
    revertShowForm({commit}, id){
        commit("revertShowForm", id);
    },

    getProductId(){
        return state.id;
    }
};

const mutations = {
    revertShowForm: (state, id) => {
        state.isFormDisplayed = !state.isFormDisplayed

        if(id){
            state.id = id;
        } else {
            state.id = "";
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};