import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  token: ''
}

let mutations = {
  updateToken (state, value) {
    state.token = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})
