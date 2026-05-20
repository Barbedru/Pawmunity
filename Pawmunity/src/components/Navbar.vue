<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)

function toggleMenu() {
  menuOuvert.value = !menuOuvert.value
}
</script>

<template>
  <div class="relative">
    <nav class="flex items-center justify-between md:justify-between px-8 py-4 bg-white relative">

      <div class="md:hidden w-8"></div>


      <!-- Logo -->
      <img src="@/assets/logoPawmunity.png" alt="Logo_Pawmunity" class="w-50 md:w-50 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" />

    <!-- Bouton burger : visible sur mobile, caché sur desktop -->
    <button @click="toggleMenu" class="md:hidden text-2xl">
      ☰
    </button>

      <!-- Liens desktop : cachés sur mobile -->
      <div class="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
        <RouterLink to="/" class="text-gray-600 hover:text-gray-900">Accueil</RouterLink>
        <RouterLink to="/calendrier" class="text-gray-600 hover:text-gray-900">Calendrier</RouterLink>
        <RouterLink to="/profile" class="text-gray-600 hover:text-gray-900">Profil</RouterLink>
      </div>

      <!-- Cloche : cachée sur mobile -->
      <div class="hidden md:block cursor-pointer">
        <img src="@/assets/bell.png" alt="icon_bell" class="h-6" />
      </div>

    </nav>


    <!-- Menu déroulant mobile -->
    <div v-if="menuOuvert" class="md:hidden absolute top-16 right-0 w-48 bg-white shadow-lg rounded-bl-xl flex flex-col px-8 py-6 gap-6 z-50">
      <RouterLink to="/" class="text-gray-600 hover:text-gray-900">Accueil</RouterLink>
      <RouterLink to="/calendrier" class="text-gray-600 hover:text-gray-900">Calendrier</RouterLink>
      <RouterLink to="/profile" class="text-gray-600 hover:text-gray-900">Profil</RouterLink>
    </div>

  </div>
</template>

<style scoped>
</style>
