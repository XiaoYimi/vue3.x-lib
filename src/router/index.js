import { createRouter, createWebHistory } from 'vue-router'

import commonRoutes from './modules/common'
import demoRoutes from './modules/demo'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...commonRoutes,
    ...demoRoutes
  ]
})

export default router
