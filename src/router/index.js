import { createRouter, createWebHistory } from 'vue-router'

import commonRoutes from './modules/common'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...commonRoutes
  ]
})

export default router
