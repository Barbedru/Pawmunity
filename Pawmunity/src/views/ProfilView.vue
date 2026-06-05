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

  </div>

</template>

<style scoped>

</style>
