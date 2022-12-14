import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import router from './router/main'
import store from './state/main'
import i18n from './vue-i18n-config.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
