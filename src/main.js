import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css';
import Router from "./router/index"

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')