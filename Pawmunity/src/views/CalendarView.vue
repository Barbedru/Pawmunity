<script setup>
/**
 * CalendarView.vue — Vue calendrier des gardes
 *
 * Affiche un calendrier VCalendar avec les périodes de garde colorées.
 * Les données viennent de la prop 'requests' passée depuis App.vue.
 *
 * Chaque demande ayant une startDate est convertie en attribut VCalendar :
 *   - Garde urgente   → surlignage orange
 *   - Garde normale   → surlignage bleu (#2C4A6E)
 *   - Période multi-jours → plage start/end
 *   - Garde un seul jour  → date unique
 *   - Un popover affiche le nom de l'animal au survol
 *
 * Une légende en bas rappelle la signification des couleurs.
 *
 * Props reçues :
 *   - requests : tableau des demandes de garde (partagé avec HomeView via App.vue)
 */

import Banner from "../components/Banner.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { computed } from 'vue'

const props = defineProps(['requests'])

// Transforme les demandes en attributs VCalendar (highlights colorés + popovers)
const stays = computed(() =>
  props.requests
    .filter(r => r.startDate)   // ignore les demandes sans date
    .map(r => ({
      key: `stay-${r.id}`,
      highlight: r.urgent
        ? { color: 'orange', fillMode: 'solid' }
        : { fillMode: 'solid', style: { background: '#2C4A6E' } },
      dates: r.endDate && r.endDate !== r.startDate
        ? { start: new Date(r.startDate), end: new Date(r.endDate) }  // plage de dates
        : new Date(r.startDate),                                       // date unique
      popover: { label: r.name }
    }))
)

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />

    <p class="text-center text-[#2C4A6E] text-2xl sm:text-3xl font-bold py-3">
      Calendrier
    </p>

    <div class="w-[90%] md:max-w-[700px] mx-auto bg-white rounded-2xl p-4">
      <VCalendar :attributes="stays" expanded />
    </div>

    <!-- LÉGENDE -->
    <div class="w-[90%] md:max-w-[700px] mx-auto bg-white rounded-2xl p-4 mt-4">
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
