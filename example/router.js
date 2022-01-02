import { createRouter, createWebHistory } from 'vue-router'

const importModule = (filePath) => {
  return () => import(`example/${filePath}`)
}

const routes = [{
  path: '/',
  component: importModule('views/example-page')
}]

export default createRouter({
  routes,
  history: createWebHistory()
})
