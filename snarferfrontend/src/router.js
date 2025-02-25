import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './views/LoginPage.vue'
import Splashy from './views/Splashy.vue'
import createAccount from './views/createAccount.vue'
import homePage from './views/homePage.vue'
import catEdit from './views/catEdit.vue'
import mapView from './views/mapView.vue'

const routes = [
  { path: '/', component: Splashy },  // Default page (Landing)
  { path: '/login', component: LoginPage },
  { path: '/createAccount', component: createAccount},
  { path: '/homePage', component: homePage},   //Main page for logged in users.
  { path: '/map', component: mapView},  //Map view page
  { path: '/catEdit', component: catEdit},  //Page for editing Catalog entries
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirect all other paths to Splashy
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
