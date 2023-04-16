import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authorization',
      component: () => import('@/views/AuthorizationForm.vue'),
      beforeEnter: authorize(false)
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/UserSettings.vue'),
      beforeEnter: authorize(true)
    }
  ]
})

function authorize(requireAuth) {
  return (to, from, next) => {
    const authData = JSON.parse(localStorage.getItem('authData'))
    const isAuthorized = Boolean(authData)
    if (requireAuth ? isAuthorized : !isAuthorized) {
      next()
    } else {
      next({ name: requireAuth ? 'authorization' : 'settings' })
    }
  }
}

export default router