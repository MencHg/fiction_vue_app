import types from '../mutations_types';
const state = {
    userinfo: {},
    storege: {},
    like: {}
};
const getters = {
    userinfo: state => state.userinfo,
    storege: state => state.storege,
    like: state => state.like
};
const mutations = {
    [types.SET_USERINFO](state, userinfo) {
        if (userinfo) {
            state.userinfo = userinfo;
        } else {
            state.userinfo = {};
        };
    },
    [types.SET_USERINFO](state, storege) {
        if (storege) {
            state.storege = storege;
        } else {
            state.storege = {};
        };
    },
    [types.SET_USERINFO](state, like) {
        if (like) {
            state.like = like;
        } else {
            state.like = {};
        };
    },
};
const actions = {
    setUserinfo({ commit }, userinfo) {
        console.log(userinfo)
        commit(types.SET_USERINFO, userinfo);
    },
    setStorege({ commit }, storege) {
        commit(types.SET_USERINFO, storege);
    },
    setLike({ commit }, like) {
        commit(types.SET_USERINFO, like);
    },
};
export default {
    state,
    mutations,
    getters,
    actions,
};