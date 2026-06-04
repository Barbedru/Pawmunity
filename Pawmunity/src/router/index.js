import { createRouter, createWebHistory } from 'vue-router'

import LandingView from "@/views/LandingView.vue";
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import ProfilView from '../views/ProfilView.vue'
import AnimalCardView from '../views/AnimalCardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component : LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilView
    },
    {
      path: '/animal/:id',
      name: 'fiche-animal',
      component: AnimalCardView
    }
  ]
})

export default router
