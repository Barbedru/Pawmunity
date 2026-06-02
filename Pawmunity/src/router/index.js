import { createRouter, createWebHistory } from 'vue-router'

import LandingView from "@/views/LandingView.vue";
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import ProfileView from '../views/ProfileView.vue'
import FicheAnimalView from '../views/FicheAnimalView.vue'
import FormulaireDemande from "../components/FormulaireDemande.vue";

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
      component: ProfileView
    },
    {
      path: '/animal/:id',
      name: 'fiche-animal',
      component: FicheAnimalView
    }
  ]
})

export default router
