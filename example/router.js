import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('example/components/Layout')
const importModule = (filePath) => {
  return () => import(`example/${filePath}`)
}

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: 'example-page',
      component: importModule('views/example-page')
    }
  ]
}]

Vue.use(VueRouter)
export default new VueRouter({
  routes,
  mode: 'history'
})
