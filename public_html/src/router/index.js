import { createRouter, createWebHistory } from 'vue-router'
import Content from '../components/Content.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/',
    name: 'Home',
    component: Content
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
