import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let state ={
    activePage:"One",
    tabBaractiveIndex:0
}

let mutations = {
    handleToggle(state,params){
        state.tabBaractiveIndex = params;
    },
    handleToggleCom(state,params){
        switch(params){
           case 0:
            state.activePage = "One";
            break;
            case 1:
            state.activePage = "Two";
            break;
            case 2:
            state.activePage = "Three";
            break;
        }
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store;