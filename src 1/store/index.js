import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:0
  },
  mutations: {
    arr(state){
         state.data++
         console.log(state.data)
    }
  },
  actions: {
     
  },
  getters:{
    
  },
  modules: {
 
  }
})
