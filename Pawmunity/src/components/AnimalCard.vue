<script setup>

defineProps({
  nom: String,
  type: String,
  age: Number,
  emoji: String
})

</script>

<template>

  <div class="w-[346px] mx-auto h-[112px] bg-white rounded-2xl p-4 mb-4 flex items-center justify-between">

    <!-- Emoji + Nom + Age -->
    <div class="flex items-center gap-4">
      <span class="text-4xl">{{ emoji }}</span>
      <div>
        <p class="font-bold text-[#2C4A6E] text-lg">{{ nom }}</p>
        <p class="text-gray-400 text-sm">{{ age }} ans</p>
      </div>
    </div>

    <!-- Bouton -->
    <button class="bg-[#2C4A6E] text-white px-4 py-2 rounded-full text-sm font-semibold">
      Voir la fiche
    </button>

  </div>

</template>

<style scoped>

</style>
