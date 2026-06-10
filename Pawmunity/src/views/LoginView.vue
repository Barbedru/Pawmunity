<script setup>
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue'
import {ref} from "vue";
import { users } from '../data/users.js'
import {
  __esModule as VITE_USER_PSW,
  __esModule as VITE_USER_EMAIL
} from "vue-router/unplugin/vite.cjs";

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function handleLogin() {
  const found = users.find(u => u.email === VITE_USER_EMAIL.value && u.psw === VITE_USER_PSW.value)
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

    <div class="flex-1 flex flex-col items-center justify-center px-6">


      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 mb-8"
      />


      <div class="w-full flex flex-col gap-4">

        <!-- Email -->
        <div class="w-[280px] mx-auto flex flex-col gap-1">
          <label class="text-[#2C4A6E] font-semibold text-sm">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="email.exemple@mail.fr"
            class="w-full h-[62px] bg-white border border-gray-300 rounded-full px-5 text-gray-400 text-sm focus:outline-none focus:border-[#2C4A6E]"
          />
        </div>

        <!-- Mot de passe -->
        <div class="w-[280px] mx-auto flex flex-col gap-1">
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
          class="w-[280px] mx-auto text-red-500 text-sm text-center"
        >
          {{ errorMessage }}
        </p>

        <!-- Connexion -->
        <button
          @click="handleLogin('/home')"
          class="w-[280px] mx-auto h-[62px] bg-white border-2 border-[#2C4A6E] text-black font-bold rounded-full text-xl mt-4
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
