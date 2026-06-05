<script setup>

import { ref } from "vue";
import { profils } from "../data/profils.js";

import Banner from '@/components/Banner.vue'
import ProfilBanner from '@/components/ProfilBanner.vue'
import MenuBurger from '@/components/MenuBurger.vue'

const profil =ref(profils[0])
</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />
    <ProfilBanner
      :famille="profil.famille"
      :nom="profil.nom"
    />

    <!--Liste animaux-->

    <div>
      <p class="font-light text-black text-[40px] text-center py-10 ">
        Mes animaux </p>
    </div>

    <button
      @click=""
      class="text-[#FF7A4D] font-bold h-15.5  mb-4 text-2xl drop-shadow-lg active:shadow-none transition-shadow duration-150">
      + Ajouter
    </button>


  </div>

</template>

<style scoped>

</style>
