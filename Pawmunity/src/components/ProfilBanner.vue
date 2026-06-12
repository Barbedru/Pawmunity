<script setup>
/**
 * ProfilBanner.vue — En-tête visuel de la page Profil
 *
 * Affiche un bandeau avec un dégradé bleu → orange.
 * À gauche : un avatar rond avec les 2 premières lettres du nom de famille.
 * À droite : "Famille <nom>" en grand texte blanc.
 *
 * Props :
 *   - name   : nom de famille (ex: "Druval")
 *   - family : (reçu mais non utilisé dans le template actuel)
 */

import {computed} from 'vue'

const props = defineProps({
  name: String,
  family: String
})

// Extrait les 2 premières lettres du nom en majuscules pour l'avatar (ex: "DR")
const initials = computed(() => {
  if (!props.name) return '?'
  return props.name.slice(0, 2).toUpperCase()
})

</script>

<template>

  <div class="w-full h-[233px] sm:h-[280px] flex items-center justify-center px-6 sm:px-12 gap-6"
       style="background: linear-gradient(180deg, #2C4A6E, #E8724A)">

    <!--Avatar-->
    <div class="w-[109px] h-[111px] sm:w-32 sm:h-32 rounded-full flex items-center justify-center font-light text-[40px] text-white"
         style="background: linear-gradient(180deg, #E8724A, #2C4A6E)">
      {{ initials }}
    </div>

    <!--Nom Famille-->
    <div>
      <p class="font-light text-white text-[40px] sm:text-[48px]"> Famille </p>
      <p class="font-light text-white text-[40px] sm:text-[48px]"> {{ name }} </p>
    </div>

  </div>


</template>

<style scoped>

</style>
