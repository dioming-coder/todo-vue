import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import {useTodoStore} from "@/stores/todo.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
          path: '/todo',
          name: 'todo',
          component: () => import('@/views/TodoView.vue')
      },
      {
          path: '/stats',
          name: 'stats',
          component: () => import('@/views/StatsView.vue')
      },
      {
          path: '/login',
          name: 'login',
          component: () => import('@/views/LoginView.vue')
      }
  ],
})

router.beforeEach((to,from,next)=>{
    const store = useTodoStore();
    if (to.path === '/login'){
        next()
        return
    }
    if (!store.token){
        next('/login')
        return;
    }
    next()
})

export default router
