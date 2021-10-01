import { createRouter, createWebHistory } from 'vue-router'
import Content from '../components/Content.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
//import Home from '../views/Home.vue'



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
    component: Content,
    meta: {
      requiresLogin: true
    }
  },  
  {
    path: '/:storyId',
    name: 'Story',
    component: Content,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
