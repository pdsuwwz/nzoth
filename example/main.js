import { createApp } from 'vue'
import router from './router.js'
// import CustomPackage from 'root/lib/lib-index' // use bundle lib on production
import CustomPackage from '@/main'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(CustomPackage)
  .mount('#app')
