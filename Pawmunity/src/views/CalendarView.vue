<script setup>

import Banner from "../components/Banner.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { ref } from 'vue'

const gardes = ref([
  {
    key: 'garde1',
    highlight: { color: 'orange', fillMode: 'solid' },
    dates: new Date(2026, 5, 15), // 15 juin 2026
  },
  {
    key: 'garde2',
    highlight: { fillMode: 'solid', style : { background : '#2C4A6E' } },
    dates: new Date(2026, 5, 22), // 22 juin 2026
  }
])

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
