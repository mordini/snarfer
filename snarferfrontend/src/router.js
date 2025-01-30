import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import Splashy from './components/Splashy.vue'

const routes = [
  { path: '/', component: Splashy },  // Default page (Landing)
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
