import types from '../mutations_types';
const state = {
    home: {},
    discover: {},
    category: {},
    search: {}
};
const getters = {
    home: state => state.home,
    discover: state => state.discover,
    category: state => state.category,
    search: state => state.search,
};
const mutations = { 
    [types.SET_PAGEDATA](state,home){
        if(home){
            state.home = home;
        }else{
            state.home = {};
        }
    },
    [types.SET_PAGEDATA](state,category){
        if(category){
            state.category = category;
        }else{
            state.category = {};
        }
    },
    [types.SET_PAGEDATA](state,discover){
        if(discover){
            state.discover = discover;
        }else{
            state.discover = {};
        }
    },
    [types.SET_PAGEDATA](state,search){
        if(search){
            state.search = search;
        }else{
            state.search = {};
        }
    },
};
const actions = { //set
    setHome({commit},home){
        commit(types.SET_PAGEDATA,home);
    },
    setDiscover({commit},discover){
        commit(types.SET_PAGEDATA,discover);
    },
    setCategory({commit},category){
        commit(types.SET_PAGEDATA,category);
    },
    setSearch({commit},search){
        commit(types.SET_PAGEDATA,search);
    },
};
export default {
    state,
    mutations,
    getters,
    actions,
};