import types from '../mutations_types';
const state = {
    userinfo: {},
};
const getters = {
    userinfo: state => state.userinfo,
};
const mutations = {
    [types.SET_USERINFO](state, userinfo) {
        if (userinfo) {
            state.userinfo = userinfo;
        } else {
            state.userinfo = {};
        };
    },
};
const actions = {
    setUserinfo({ commit }, userinfo) {
        commit(types.SET_USERINFO, userinfo);
    },
};
export default {
    state,
    mutations,
    getters,
    actions,
};