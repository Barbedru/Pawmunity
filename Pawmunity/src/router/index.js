/**
 * router/index.js — Configuration des routes de l'application
 *
 * Utilise createWebHistory (URLs sans #).
 * Toutes les routes sont publiques (pas de garde d'authentification).
 *
 * Table des routes :
 *   /           → ShowcaseApp  : page vitrine desktop (logo + maquettes téléphone + QR code)
 *   /landing    → LandingView  : page d'accueil mobile (boutons "Créer un compte" / "Connexion")
 *   /login      → LoginView    : formulaire de connexion (email + mot de passe)
 *   /home       → HomeView     : liste des demandes de garde avec filtres et formulaire
 *   /calendar   → CalendarView : calendrier VCalendar affichant les périodes de garde
 *   /profil     → ProfilView   : profil de la famille, liste des animaux et historique des gardes
 */

import { createRouter, createWebHistory } from 'vue-router'

import ShowcaseApp from '../views/ShowcaseApp.vue'
import LandingView from '@/views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import ProfilView from '../views/ProfilView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'ShowcaseApp',
      component:ShowcaseApp
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
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
      path: '/profil',
      name: 'profile',
      component: ProfilView
    }
  ]
})

export default router
