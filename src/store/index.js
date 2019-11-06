import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      usename: [],
      data: []
   },
   mutations: {
      use(state, pay) {
         state.usename = pay
      },
      get(state, pay) {
         state.data = pay

      }
   },
   actions: {
      getData(context) {
         axios.get("/getData").then(res => {
            context.commit("get", res.data)
         })
      }
   },
   getters: {


   },
   modules: {

   }
})
