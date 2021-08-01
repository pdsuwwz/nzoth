import { createApp } from 'vue'
import router from './router.js'
import CustomPackage from '@/main'
import App from './App.vue'

import 'example/assets/iconfont.css'

createApp(App)
  .use(router)
  .use(CustomPackage)
  .mount('#app')
