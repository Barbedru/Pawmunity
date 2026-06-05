<script setup>

import Banner from "../components/Banner.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { computed } from 'vue'
import { useDemandesStore } from '../stores/demandes.js'

const store = useDemandesStore()

const gardes = computed(() =>
  store.demandes
    .filter(d => d.dateDebut)
    .map(d => ({
      key: `garde-${d.id}`,
      highlight: d.urgent
        ? { color: 'orange', fillMode: 'solid' }
        : { fillMode: 'solid', style: { background: '#2C4A6E' } },
      dates: d.dateFin && d.dateFin !== d.dateDebut
        ? { start: new Date(d.dateDebut), end: new Date(d.dateFin) }
        : new Date(d.dateDebut),
      popover: { label: d.nom }
    }))
)

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />

    <p class="text-center text-[#2C4A6E] text-2xl font-bold py-3">
      Calendrier
    </p>

    <div class="w-[90%] mx-auto bg-white rounded-2xl p-4">
      <VCalendar :attributes="gardes" expanded />
    </div>

    <!-- LÉGENDE -->
    <div class="w-[90%] mx-auto bg-white rounded-2xl p-4 mt-4">
      <p class="text-[#2C4A6E] font-semibold mb-3">Légende</p>
      <div class="flex items-center gap-2 mb-2">
        <div class="w-3 h-3 rounded-full bg-orange-400"></div>
        <p class="text-sm text-gray-500">Garde Urgente</p>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#2C4A6E]"></div>
        <p class="text-sm text-gray-500">Garde </p>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
