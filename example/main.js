import Vue from 'vue'
import router from './router.js'
import CustomPackage from '@/main'
import App from './App.vue'

Vue.use(CustomPackage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
