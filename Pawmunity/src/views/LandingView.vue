<script setup>
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue'

const router = useRouter()
</script>

<template>

  <!-- Conteneur principal qui prend tout l'écran -->
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">

    <!-- Bannière logo en haut -->
    <Banner />

    <!-- Contenu centré qui prend l'espace restant -->
    <div class="flex-1 flex flex-col items-center justify-center px-6">

      <!-- Illustration chien + chat -->
      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 mb-6"
      />

      <!-- Texte de présentation -->
      <p class="text-center text-[#2C4A6E] text-base leading-relaxed mb-10">
        Connecte les familles de ta<br>
        communauté pour prendre soin<br>
        de vos animaux ensemble.
      </p>

      <!-- Bouton Créer un compte -->
      <button
        @click=""
        class="w-full bg-[#2C4A6E] text-white font-semibold py-4 rounded-full mb-4 text-base"
      >
        Créer un compte
      </button>


      <p class="text-black font-medium mb-4">Ou</p>

      <!-- Bouton Connexion -->
      <button
        @click="router.push('/login')"
        class="w-full border-2 border-[#2C4A6E] text-black font-semibold py-4 rounded-full text-base"
      >
        Connexion
      </button>

    </div>
  </div>
</template>
