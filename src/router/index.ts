import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: "/snippets",
      name: "snippets",
      children: [
        {
          path: "stretchandzoom",
          name: "snippets",
          component: () => import("@/snippets/StretchAndZoom.vue")
        }
      ]
    }
  ]
})

export default router
