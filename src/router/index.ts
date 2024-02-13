import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/views/LoginView.vue")
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/EditorView.vue')
    }
  ]
})

export default router
