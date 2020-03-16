import types from '../mutations_types';
const state = {
    fontSize:16,
    fontColor:"#333",
    history:[],
    theme:{}
}
const getters = {
    fontSize:state=> state.fontSize,
    fontColor:state=> state.fontColor,
    history:state=> state.history,
    theme:state=> state.theme
}
const actions = {
    setFontSize({commit},fontSize){
        commit(types.SET_APPSETTING,fontSize)
    },
    setFontColor({commit},fontColor){
        commit(types.SET_APPSETTING,fontColor)
    },
    setHistory({commit},history){
        commit(types.SET_APPSETTING,history)
    },
    setThenme({commit},theme){
        commit(types.SET_APPSETTING,theme)
    },
}
const mutations = {
    [types.SET_APPSETTING](state,fontSize){
        if(fontSize){
            state.fontSize = fontSize
        }else{
            state.fontSize = state.fontSize
        }
    },
    [types.SET_APPSETTING](state,fontColor){
        if(fontColor){
            state.fontColor = fontColor
        }else{
            state.fontColor = state.fontColor
        }
    },
    [types.SET_APPSETTING](state,history){
        if(history){
            state.history = history
        }else{
            state.history = state.history
        }
    },
    [types.SET_APPSETTING](state,theme){
        if(theme){
            state.theme = theme
        }else{
            state.theme = state.theme
        }
    },
}
export default {
    state,
    getters,
    actions,
    mutations
};