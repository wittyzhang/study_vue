import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//状态对象
const state = {
    count:3
}
//改变状态对象的方法
const mutations = {
    add(state, n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}
export default new Vuex.Store({
    state,
    mutations
})