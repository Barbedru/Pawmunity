<script setup>
/**
 * AnimalCardView.vue — Fiche détaillée d'un animal (modal depuis le bas)
 *
 * S'affiche en overlay quand l'utilisateur clique sur "Voir la fiche" dans ProfilView.
 * Reçoit l'id de l'animal, cherche ses données dans animals.js et les affiche
 * sous forme de "Guide du Petsitter" : infos générales + sections thématiques.
 *
 * Sections affichées (si renseignées dans animals.js) :
 *   Les Repas / Les Friandises / Pour Jouer / Mes affaires / J'aime / Je n'aime pas
 *
 * Props :
 *   - animalId : id numérique de l'animal à afficher
 *
 * Émet 'close' pour fermer la fiche (clic sur ✕ ou sur l'overlay).
 */

import { animals } from '../data/animals.js'
import { ref } from 'vue'

const props = defineProps({
  animalId: Number
})

const emit = defineEmits(['close'])

// Retrouve l'animal correspondant à l'id reçu en prop
const animal = ref(animals.find(a => a.id === props.animalId))

// Dictionnaire des sections à afficher : titre → tableau d'items depuis les données de l'animal
const sections = {
  'Les Repas': animal.value?.meals,
  'Les Friandises': animal.value?.treats,
  'Pour Jouer': animal.value?.play,
  'Mes affaires': animal.value?.belongings,
  "J'aime": animal.value?.likes,
  "Je n'aime pas": animal.value?.dislikes
}



</script>

<template>

  <div class="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
       @click.self="emit('close')">

    <div class="bg-[#F5F1EB] w-full rounded-t-3xl max-h-[90vh] overflow-y-auto">

      <!-- HEADER -->
      <div class="w-full h-[150px] flex items-center justify-center px-6 gap-6 rounded-t-3xl"
           style="background: linear-gradient(180deg, #2C4A6E, #E8724A)">
        <button @click="emit('close')" class="absolute top-4 right-4 text-white text-2xl">✕</button>
        <div class="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-xl"
             style="background: linear-gradient(180deg, #E8724A, #2C4A6E)">
          {{ animal.name.slice(0, 2).toUpperCase() }}
        </div>
        <p class="text-white font-bold text-[40px]">{{ animal.name }}</p>
      </div>

      <!-- CONTENU -->
      <div class="p-6">

        <!-- Guide du Petsitter -->
        <div>
          <p class="font-light text-[#2C4A6E] text-[40px] text-center py-10 ">
            Guide du Petsitter </p>
        </div>

        <!--
        <button
          @click=""
          class="text-[#FF7A4D] font-bold h-15.5 mb-4 text-2xl drop-shadow-lg active:shadow-none transition-shadow duration-150">
          Modifier
        </button>
        -->

        <!-- Photo placeholder -->
        <div class="w-full h-[200px] bg-gray-200 rounded-2xl flex items-center justify-center mb-6 max-w-[500px] mx-auto">
          <p class="text-gray-400">PHOTO</p>
        </div>

        <!-- Prénom / Surnom -->
        <div class="bg-white rounded-2xl p-4 mb-4 max-w-[500px] mx-auto">
          <p class="text-gray-500 text-sm mb-2">
            <span class="font-semibold">Prénom :</span> {{ animal.name }}
          </p>
          <p class="text-gray-500 text-sm">
            <span class="font-semibold">Surnom :</span> {{ animal.nickname }}
          </p>
        </div>

        <!-- Sections -->
        <div v-for="(items, title) in sections" :key="title" class="bg-white rounded-2xl p-4 mb-4 max-w-[500px] mx-auto">
          <p class="text-[#2C4A6E] font-bold text-center mb-2">{{ title }}</p>
          <ul v-if="items" class="text-gray-500 text-sm list-disc list-inside">
            <li v-for="item in items" :key="item">{{ item }}</li>
          </ul>
          <p v-else class="text-gray-400 text-sm text-center italic">Aucune information</p>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
