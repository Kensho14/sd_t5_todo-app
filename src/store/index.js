import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, taskList){
      state.tasks = taskList;
    }
  },
  actions: {
  },
  modules: {
  }
})
