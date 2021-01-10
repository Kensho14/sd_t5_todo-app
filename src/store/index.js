import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS_NAME = 'sd_t5_todo-app.data';
function generateUuid() {
  // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
  // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
      switch (chars[i]) {
          case "x":
              chars[i] = Math.floor(Math.random() * 16).toString(16);
              break;
          case "y":
              chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
              break;
      }
  }
  return chars.join("");
}
export default new Vuex.Store({
  state: {
    tasks: [
      {
        color: '#1F7087',
        title: 'ソフトウェア開発演習',
        desc: 'vue.jsを使いこなす。',
        id:generateUuid(),
      }
    ],
    
    subjectList: [
      {
        color: '#1F7087',
        name: 'OS',
        youbi: 2,  // 数字で扱う（日曜＝０，月曜＝１，火曜＝２...）
        id:generateUuid(),
      }
    ]
  },
  mutations: {
    addTask(state, task){
      task['id'] = generateUuid();
      state.tasks.push(task);
    },
    addSubject(state, subject){
      subject['id'] = generateUuid();
      state.subjectList.push(subject);
    },
    // これはactionのloadStates用なので，他のところから呼び出すの禁止！
    setState(state, data){
      state.tasks = data.tasks;
      state.subjectList = data.subjectList;
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(x => x.id != id);
    },
    deleteSubject(state, id){
      state.subjectList = state.subjectList.filter(x => x.id != id);
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
    deleteTask({commit, dispatch}, id){
      commit('deleteTask', id);
      dispatch('saveStates');
    },
    deleteSubject({commit, dispatch}, id){
      commit('deleteSubject', id);
      dispatch('saveStates');
    },
  },
  modules: {
  }
})
