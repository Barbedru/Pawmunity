<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

const navigate = (path) => {
  isOpen.value = false
  router.push(path)
}

</script>

<template>

  <!-- Bouton burger fixe en haut à droite -->
  <button
    @click="isOpen = true"
    class="fixed top-12 right-4 z-50 bg-white rounded-xl p-3 shadow-md"
  >
    <div class="flex flex-col gap-1.5">
      <span class="block w-6 h-0.5 bg-black"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
    </div>
  </button>

  <!-- Overlay sombre derrière le menu -->
  <div
    v-if="isOpen"
    @click="isOpen = false"
    class="fixed inset-0 z-40"
  ></div>

  <!-- Panneau du menu -->
  <div
    v-if="isOpen"
    class="fixed top-8 right-4 z-50 bg-white rounded-2xl shadow-xl p-6 w-56 flex flex-col gap-3"
  >
    <!-- Bouton fermer -->
    <button
      @click="isOpen = false"
      class="self-end text-black text-xl font-bold mb-2"
    >
      ✕
    </button>

    <!-- Liens de navigation -->
    <button
      @click="navigate('/home')"
      class="w-full bg-gray-100 rounded-full py-3 text-black font-semibold text-lg shadow-[0_4px_10px_rgba(44,74,110,0.4)]"
    >
      Accueil
    </button>

    <button
      @click="navigate('/calendar')"
      class="w-full bg-gray-100 rounded-full py-3 text-black font-semibold text-lg shadow-[0_4px_10px_rgba(44,74,110,0.4)]"
    >
      Calendrier
    </button>

    <button
      @click="navigate('/profil')"
      class="w-full bg-gray-100 rounded-full py-3 text-black font-semibold text-lg shadow-[0_4px_10px_rgba(44,74,110,0.4)]"
    >
      Profil
    </button>

  </div>

</template>

<style scoped>

</style>
