import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FicheAnimalView from "../views/FicheAnimalView.vue";
import CalendarView from "../views/CalendarView.vue";
import ProfileView from "../views/ProfileView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calendrier',
      name: 'calendar',
      component: CalendarView ,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView ,
    },
    {
      path: '/ficheAnimal',
      name: 'ficheAnimal',
      component: FicheAnimalView ,
    },
  ],
})

export default router
