import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';
import Push from 'push.js';

Vue.config.productionTip = false;
window.Push = Push;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
