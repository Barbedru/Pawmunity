<script setup>
/**
 * LoginView.vue — Formulaire de connexion
 *
 * Permet à l'utilisateur de se connecter avec son email et son mot de passe.
 * Les identifiants sont comparés à la liste statique définie dans data/users.js,
 * qui lit ses valeurs depuis les variables d'environnement (.env).
 *
 * Validation :
 *   - Email : champ obligatoire + format valide (regex)
 *   - Mot de passe : champ obligatoire
 *
 * Si les identifiants sont corrects → redirection vers /home.
 * Sinon → affichage d'un message d'erreur général.
 */

import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue'
import {ref} from "vue";
import { users } from '../data/users.js'
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')  // message d'erreur affiché sous le formulaire
const errors = ref({})        // erreurs par champ (email / password)

// Expression régulière de validation du format email
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Valide les deux champs avant soumission, remplit errors si invalide
function validate() {
  errors.value = {}
  if (!email.value) errors.value.email = "L'email est obligatoire"
  else if (!emailFormat.test(email.value)) errors.value.email = "Format d'email invalide"
  if (!password.value) errors.value.password = 'Le mot de passe est obligatoire'
  return Object.keys(errors.value).length === 0
}

// Vérifie les identifiants et redirige ou affiche une erreur
function handleLogin() {
  errorMessage.value = ''
  if (!validate()) return
  const found = users.find(u => u.email === email.value && u.psw === password.value)
  if (found) {
    router.push('/home')
  } else {
    errorMessage.value = 'Email ou mot de passe incorrect'
  }
}

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">

    <Banner />

    <div class="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 md:px-24">


      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 sm:w-[420px] mb-8"
      />


      <div class="w-full flex flex-col gap-4">

        <!-- Email -->
        <div class="w-[280px] sm:w-[360px] md:w-[400px] mx-auto flex flex-col gap-1">
          <label class="text-[#2C4A6E] font-semibold text-sm">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="email.exemple@mail.fr"
            class="w-full h-[62px] bg-white border border-gray-300 rounded-full px-5 text-gray-400 text-sm focus:outline-none focus:border-[#2C4A6E]"
          />
        </div>

        <!-- Mot de passe -->
        <div class="w-[280px] sm:w-[360px] md:w-[400px] mx-auto flex flex-col gap-1">
          <label class="text-[#2C4A6E] font-semibold text-sm">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••••••••"
            class="w-full h-[62px] bg-white border border-gray-300 rounded-full px-5 text-gray-400 text-sm focus:outline-none focus:border-[#2C4A6E]"
          />
        </div>

        <p
          v-if="errorMessage"
          class="w-[280px] sm:w-[360px] md:w-[400px] mx-auto text-red-500 text-sm text-center"
        >
          {{ errorMessage }}
        </p>

        <!-- Connexion -->
        <button
          @click="handleLogin('/home')"
          class="w-[280px] sm:w-[360px] md:w-[400px] mx-auto h-[62px] bg-white border-2 border-[#2C4A6E] text-black font-bold rounded-full text-xl mt-4
                 shadow-[0_4px_10px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]
                 active:shadow-none transition-shadow duration-150"
        >
          Connexion
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
