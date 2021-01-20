import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';
import Push from 'push.js';

Vue.config.productionTip = false;
window.Push = Push;

const app = new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

function notificationWorker() {
  const state = app.$store.state;
  if (!state.enableNotification) return;
  if (!Push.Permission.has()){
    // プッシュ通知の権限がないのでリクエスト
    Push.Permission.request();
  }
  const date = new Date();
  if (state.notificationTime != (date.getHours()+':'+date.getMinutes())) return;
  
  const tomDay = date.getDay() + 1;
  const toNotifySubjectIds = state.subjectList.filter(subject => subject.youbi == tomDay).map(subject => subject.id);
  const toNotifyTasks = state.tasks.filter(task => toNotifySubjectIds.includes(task.subjectId));
  toNotifyTasks.forEach(task => {
    Push.create(task.title, {
      body: task.desc,
      // timeout: 5000,
      onClick: function (){
        window.focus();
        this.close();
      }
    });
  });
}

setTimeout(notificationWorker, 3*1000);
setInterval(notificationWorker, 60*1000);