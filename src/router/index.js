import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/v1'
    },
    {
      path: '/v1',
      name: 'v1',
      component: () => import('@/views/resume_v1/index.vue')
    },
  ]
})

export default router
