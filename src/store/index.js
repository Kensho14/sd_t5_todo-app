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
    ],
    subject: [
      /*
      {
        color: '#1F7087',
        name: 'OS',
        youbi: 2  // 数字で扱う（日曜＝０，月曜＝１，火曜＝２...）
        desc: '課題2.2をやる',
      }
      */
    ]
  },
  mutations: {
    setTasks(state, taskList){
      state.tasks = taskList;
    },
    setSubject(state, subjectList){
      state.subject = subjectList;
    },
    addTask(state, task){
      state.tasks.push(task);
    }
  },
  actions: {
  },
  modules: {
  }
})
