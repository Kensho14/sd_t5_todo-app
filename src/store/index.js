import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        color: '#1F7087',
        title: 'ソフトウェア開発演習',
        desc: 'vue.jsを使いこなす。',
      }
    ]
  },
  mutations: {
    setTasks(state, taskList){
      state.tasks = taseList;
    }
  },
  actions: {
  },
  modules: {
  }
})
