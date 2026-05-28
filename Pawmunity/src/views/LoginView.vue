<script setup>
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue'

const router = useRouter()
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
        <div class="flex flex-col gap-1">
          <label class="text-[#2C4A6E] font-semibold text-sm">Email</label>
          <input
            type="email"
            placeholder="email.exemple@mail.fr"
            class="w-full bg-white border border-gray-300 rounded-full py-3 px-5 text-gray-400 text-sm focus:outline-none focus:border-[#2C4A6E]"
          />
        </div>

        <!-- Mot de passe -->
        <div class="flex flex-col gap-1">
          <label class="text-[#2C4A6E] font-semibold text-sm">Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••••••••"
            class="w-full bg-white border border-gray-300 rounded-full py-3 px-5 text-gray-400 text-sm focus:outline-none focus:border-[#2C4A6E]"
          />
        </div>

        <!-- Connexion -->
        <button
          @click="router.push('/home')"
          class="w-full bg-white border-2 border-[#2C4A6E] text-black font-bold py-4 rounded-full text-base mt-4
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
