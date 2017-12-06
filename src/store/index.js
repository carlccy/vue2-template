import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: false // 是否登录
}

export default new Vuex.Store({
  state
})
