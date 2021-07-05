import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  musicdata1: true,
      musicdata2: false,
      musicdata3: false,

      musicdetail: null,

      zhuangtai: false,
      userinformation: {},
      tuichu: false,

      guanli: false
}

const store = new Vuex.Store({
  state,
  mutations: {
    add(state) {
      state.userinformation = {}
      state.zhuangtai = false
    }
  }
})

export default store