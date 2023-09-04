/*
 * @Author: Dreamice dreamice13@foxmail.com
 * @Date: 2023-09-04 11:46:25
 * @LastEditors: Dreamice dreamice13@foxmail.com
 * @LastEditTime: 2023-09-04 13:45:22
 * @FilePath: \PlayVue\src\router\index.ts
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/props',
      name: 'props',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PropsView.vue')
    }
  ]
})

export default router
