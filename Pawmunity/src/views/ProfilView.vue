<script setup>

import { ref } from "vue";
import { profiles } from "../data/profiles.js";

import Banner from '@/components/Banner.vue'
import ProfilBanner from '@/components/ProfilBanner.vue'
import MenuBurger from '@/components/MenuBurger.vue'
import AnimalCard from '@/components/AnimalCard.vue'
import { animals } from '@/data/animals.js'
import AnimalCardView from '@/components/AnimalCardView.vue'

const profile = ref(profiles[0])

const showCard = ref(false)
const selectedAnimal = ref(null)

const openCard = (id) => {
  selectedAnimal.value = id
  showCard.value = true
}

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />
    <ProfilBanner
      :name="profile.name"
      :family="profile.family"
    />


    <div>
      <p class="font-light text-[#2C4A6E] text-[40px] text-center py-10 ">
        Mes animals </p>
    </div>

    <button
      @click=""
      class="text-[#FF7A4D] font-bold h-15.5  mb-4 text-2xl drop-shadow-lg active:shadow-none transition-shadow duration-150">
      + Ajouter
    </button>

    <!--Liste animals-->

    <AnimalCard
      v-for="animal in animals"
      :key="animal.id"
      :name="animal.name"
      :type="animal.type"
      :age="animal.age"
      :emoji="animal.emoji"
      @view="openCard(animal.id)"
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
      </div>

      <div>
        <p class="font-light text-black text-[15px] "> 15-20 Février</p>
      </div>

    </div>

    <div class="w-[346px] mx-auto h-[112px] bg-white rounded-2xl p-4 mb-4 flex items-center justify-between">

      <div>
        <p class="font-light text-black text-[24px] "> Odin & Einar </p>
        <p class="font-light text-black text-[15px] "> Famille Miquet </p>
      </div>

      <div>
        <p class="font-light text-black text-[15px] "> 04-11 Avril </p>
      </div>
    </div>

    <div>

    </div>

  </div>

  <AnimalCardView
    v-if="showCard"
    :animalId="selectedAnimal"
    @close="showCard = false"
  />

</template>

<style scoped>

</style>
