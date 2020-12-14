import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS_NAME = 'sd_t5_todo-app.data';

export default new Vuex.Store({
  state: {
    tasks: [
      {
        color: '#1F7087',
        title: 'ソフトウェア開発演習',
        desc: 'vue.jsを使いこなす。',
      }
    ],
    subjectList: [
      {
        color: '#1F7087',
        name: 'OS',
        youbi: 2  // 数字で扱う（日曜＝０，月曜＝１，火曜＝２...）
      }
    ]
  },
  mutations: {
    addTask(state, task){
      state.tasks.push(task);
    },
    addSubject(state, subject){
      state.subjectList.push(subject);
    },
    // これはactionのloadStates用なので，他のところから呼び出すの禁止！
    setState(state, data){
      state.tasks = data.tasks;
      state.subjectList = data.subjectList;
    },
  },
  actions: {
    saveStates({state}){
      localStorage.setItem(LS_NAME, JSON.stringify(state));
    },
    loadStates({state, commit}){
      const data = JSON.parse(localStorage.getItem(LS_NAME));
      if (data && Object.keys(state).length === Object.keys(data).length){
        commit('setState', data);
      }
    },
    // mutationと同名のactionを作って，こちらのactionを this.$store.dispatch('addTask', data); というふうに呼び出すようにする。それで，saveStatesを変更後に呼び出す。
    addTask({commit, dispatch}, task){
      commit('addTask', task);
      dispatch('saveStates');
    },
    addSubject({commit, dispatch}, subject){
      commit('addSubject', subject);
      dispatch('saveStates');
    },
  },
  modules: {
  }
})
