import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { store } from './store'
import router from './router'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
      if (!store.getters.loggedIn) {
        next({ name: 'Login' })
      } else {
        next()
      }
    } else {
      next()
    }
  })

createApp(App).use(router).use(store).mount('#app')
