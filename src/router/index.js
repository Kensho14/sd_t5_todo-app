import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subject from '../views/Subject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: Subject
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: Settings
  // }
]

const router = new VueRouter({
  routes
})

export default router
