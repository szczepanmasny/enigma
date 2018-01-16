import Vue from 'vue';
import App from '@/App';
import Vuetify from 'vuetify';
import store from '@/store/index.js';
 
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
