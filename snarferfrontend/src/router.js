import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import Splashy from './components/Splashy.vue'
import createAccount from './components/createAccount.vue'
import homePage from './components/homePage.vue'

const routes = [
  { path: '/', component: Splashy },  // Default page (Landing)
  { path: '/login', component: LoginPage },
  { path: '/createAccount', component: createAccount},
  { path: '/homePage', component: homePage},
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirect all other paths to Splashy
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
