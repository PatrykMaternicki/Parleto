import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import {EMPLOYEE_DATASET} from './datasets/employee';

Vue.config.productionTip = false
store.dispatch('setDataset', EMPLOYEE_DATASET);
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
