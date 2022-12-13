import Vue from 'vue'
import App from './App.vue'
import router from './router/main'
import i18n from './vue-i18n-config.js'
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
