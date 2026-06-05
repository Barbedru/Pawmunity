<script setup>

import {computed} from "vue";

const props = defineProps({
  nom: String,
  famille: String,
  description: String,
  date: String,
  lieu: {
    type :Boolean,
    default: false
  },
  reponses: Number,
  urgent: {
    type: Boolean,
    default: false
  }
})

const initiales = computed(() => {
  if (!props.nom) return'?'
  return props.nom.split(' ').map(n => n[0]).join('')
})

</script>

<template>

  <div :class="urgent ? 'border-l-4 border-[#E8724A]' : ''"
       class="w-[90%] mx-auto bg-white rounded-2xl p-4 mb-4">


    <div class="flex items-center justify-between mb-4">

      <!-- Avatar + Nom + Famille -->
      <div class="flex items-center gap-3">
        <!-- Avatar initiales -->
        <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
          {{ initiales }}
        </div>
        <div>
          <p class="font-bold text-[#2C4A6E]">{{ nom }}</p>
          <p class="text-sm text-gray-500">{{ famille }}</p>
        </div>
      </div>

      <!-- Badge Urgent / Normal -->
      <span :class="urgent ? 'bg-[#E8724A] text-white' : 'bg-green-400 text-white'"
            class="px-4 py-1 rounded-full text-sm font-semibold">
        {{ urgent ? 'Urgent' : 'Normal' }}
      </span>

    </div>

    <!-- DESCRIPTION -->
    <p class="text-gray-500 text-sm mb-4">{{ description }}</p>

    <!-- PIED DE CARTE -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-gray-400 text-sm">
        <span>📅</span>
        <span>{{ date }}</span>
      </div>
      <span class="text-gray-400 text-sm">
    {{ lieu ?  '🏡 Chez le propriétaire' : '🏠 Chez le gardien' }}
  </span>
      <span class="text-[#4CAF50] text-sm font-semibold">{{ reponses }} réponses</span>
    </div>


  </div>

</template>

<style scoped>

</style>
