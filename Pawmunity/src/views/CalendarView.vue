<script setup>

import Banner from "../components/Banner.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { computed } from 'vue'
import { useRequestsStore } from '../stores/requests.js'

const store = useRequestsStore()

const stays = computed(() =>
  store.requests
    .filter(r => r.startDate)
    .map(r => ({
      key: `stay-${r.id}`,
      highlight: r.urgent
        ? { color: 'orange', fillMode: 'solid' }
        : { fillMode: 'solid', style: { background: '#2C4A6E' } },
      dates: r.endDate && r.endDate !== r.startDate
        ? { start: new Date(r.startDate), end: new Date(r.endDate) }
        : new Date(r.startDate),
      popover: { label: r.name }
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
      <VCalendar :attributes="stays" expanded />
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
