const state = {
    userInfo: {},
    isAuth: false
};

const getters = {};

const actions = {
    setAuth ({ commit }, value) {
        commit('setAuth', value);
    }
};

const mutations = {
    setAuth (state, value) {
        state.isAuth = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}