import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationForm from '../views/AuthorizationForm.vue'
import UserSettings from '../views/userSettings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authorization',
      component: AuthorizationForm
    },
    {
      path: '/settings',
      name: 'settings',
      component: UserSettings,
      beforeEnter(to, from, next) {
        const isAuthorization = ""
        if (isAuthorization) {
          next();
        } else {
          next({name: 'authorization'})
        }
      }
    }
  ]
})

export default router