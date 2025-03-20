// Defines routes. Should be replaced somehow
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './views/LoginPage.vue'
import Splashy from './views/Splashy.vue'
import createAccount from './views/createAccount.vue'
import homePage from './views/homePage.vue'
import editPOI from './views/editPOI.vue'
import mapView from './views/mapView.vue'
import profileView from './views/profileView.vue'
import adminView from './views/adminView.vue'
import createQuests from './views/createQuests.vue'

const routes = [
  { path: '/', component: Splashy },  // Default page (Landing)
  { path: '/login', component: LoginPage },
  { path: '/createAccount', component: createAccount},
  { path: '/homePage', component: homePage},   //Main page for logged in users.
  { path: '/map', component: mapView},  //Map view page
  { path: '/profile', component: profileView},  //User profile page
  { path: '/editPOI', component: editPOI},
  { path: '/admin', component: adminView},  //Admin page
  { path: '/createQuest', component: createQuests},  //Quest creation page
  { path: '/:pathMatch(.*)*', redirect: '/' } // Redirect all other paths to Splashy
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
