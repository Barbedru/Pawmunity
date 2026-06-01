<script setup>
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue'

const router = useRouter()
</script>

<template>


  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">


    <Banner />


    <div class="flex-1 flex flex-col items-center justify-center px-3">


      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 mb-6"
      />

      <!-- Texte de présentation -->
      <p class="text-center text-[#2C4A6E] text-base leading-relaxed mb-10">
        Connecte les familles <br>
        de ta communauté pour prendre soin<br>
        de vos animaux ensemble
      </p>

      <!-- Créer un compte -->
      <button
        @click=""
        class="w-full bg-[#2C4A6E] text-white font-semibold py-4 rounded-full mb-4 text-base"
      >
        Créer un compte
      </button>


      <p class="text-black font-medium mb-4">Ou</p>

      <!-- Connexion -->
      <button
        @click="router.push('/login')"
        class="w-full border-2 border-[#2C4A6E] text-black font-semibold py-4 rounded-full text-base
       shadow-[0_4px_10px_rgba(44,74,110,0.4)] hover:shadow-[0_6px_16px_rgba(44,74,110,0.5)]
       active:shadow-none transition-shadow duration-150"
      >
        Connexion
      </button>

    </div>
  </div>

</template>
