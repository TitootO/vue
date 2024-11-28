import { createRouter, createWebHistory } from 'vue-router'

import UsersPage from '../pages/UsersPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users-page',
      component: async () => UsersPage,
    },


    { path: '/:pathMatch(.*)*', component: async () => NotFoundPage },
  ],
})

export default router
