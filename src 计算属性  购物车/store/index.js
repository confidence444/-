import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: 0,
    list: [],
    price: 0,
    checkAll: false
  },
  mutations: {
    arr(state, index) {
      state.list[index].count++
       
    },
    dec(state, index) {
      if (state.list[index].count <= 0) {
        return
      } else {
        state.list[index].count--
      }

    },
    list(state, p) {
      state.list = p
    },
    checkedAll(state) {
      state.checkAll = !state.checkAll
      state.list.forEach(item=>item.flag=state.checkAll)

    }
  },
  actions: {
    get(context) {

      axios.get("/getData").then(res => {
        context.commit("list", res.data)
      })
    }
  },
  getters: {
    getComputed(state) {
      return state.list.reduce((sum, item) => {
        console.log(item.flag)
        if (state.checkAll) {
          sum += item.count * item.price
        }
        return sum
      }, 0)
    }

  },
  modules: {

  }
})
