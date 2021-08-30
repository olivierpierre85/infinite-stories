import { createRouter, createWebHistory } from 'vue-router'
import Content from '../components/Content.vue'

const routes = [
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
