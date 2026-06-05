<script setup>

import { ref } from "vue";
import { profils } from "../data/profils.js";

import Banner from '@/components/Banner.vue'
import ProfilBanner from '@/components/ProfilBanner.vue'
import MenuBurger from '@/components/MenuBurger.vue'
import AnimalCard from '@/components/AnimalCard.vue'
import { animaux } from '@/data/animaux.js'

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


    <div>
      <p class="font-light text-[#2C4A6E] text-[40px] text-center py-10 ">
        Mes animaux </p>
    </div>

    <button
      @click=""
      class="text-[#FF7A4D] font-bold h-15.5  mb-4 text-2xl drop-shadow-lg active:shadow-none transition-shadow duration-150">
      + Ajouter
    </button>

    <!--Liste animaux-->

    <AnimalCard
      v-for="animal in animaux"
      :key="animal.id"
      :nom="animal.nom"
      :type="animal.type"
      :age="animal.age"
      :emoji="animal.emoji"
    />

    <!--Historique-->

    <div>
      <p class="font-light text-[#2C4A6E] text-[40px] text-center py-10 ">
        Historique des Gardes </p>
    </div>

    <div class="w-[346px] mx-auto h-[112px] bg-white rounded-2xl p-4 mb-4 flex items-center justify-between">

      <div>
        <p class="font-light text-black text-[24px] "> Murphy</p>
        <p class="font-light text-black text-[15px] "> Famille Hoareau</p>
        <p class="font-light text-black text-[15px] "> 15-20 Février</p>
      </div>

    </div>

    <div class="w-[346px] mx-auto h-[112px] bg-white rounded-2xl p-4 mb-4 flex items-center justify-between">

      <div>
        <p class="font-light text-black text-[24px] "> Odin & Einar </p>
        <p class="font-light text-black text-[15px] "> Famille Miquet </p>
        <p class="font-light text-black text-[15px] "> 04-11 Avril </p>
      </div>

    </div>

    <div>

    </div>

  </div>

</template>

<style scoped>

</style>
