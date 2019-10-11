import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex .Store({
    state:{
        snum:0,
        msg:'北京'
    },
    mutations:{
        sadd(state,n){
            state.snum=state.snum+n;
        }
    }
})