import { createRouter, createWebHistory } from 'vue-router'

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
