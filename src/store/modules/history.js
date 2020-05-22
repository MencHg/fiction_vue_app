import types from '../mutations_types';
const state = {
    history:[],
}
const getters = {
    history:state=> state.history,
}
const actions = {
    setHistory({commit},history){
        console.log(history);
        commit(types.SET_HOISTORY,history)
    },
}
const mutations = {
    [types.SET_HOISTORY](state,history){
        console.log(history);
        if(history){
            state.history = history
        }else{
            state.history = state.history
        }
    },
}
export default {
    state,
    getters,
    actions,
    mutations
};