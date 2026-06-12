<script setup>
/**
 * Banner.vue — Barre supérieure fixe
 *
 * Composant purement visuel, sans logique.
 * Affiche le logo Pawmunity centré sur fond blanc avec une bordure basse grise.
 * Utilisé en haut de toutes les vues de l'application (HomeView, CalendarView, ProfilView…).
 */
</script>


<template>
  <!-- Conteneur de la bannière : fond blanc, hauteur fixe, centré verticalement -->
  <div class="w-full bg-white flex items-center justify-center border-b border-gray-200"
       style="height: 141px; padding-top: 50px;">
    <!-- Logo principal de l'application -->
    <img
      src="../assets/logoPawmunity.png"
      alt="Pawmunity"
      class="w-90 sm:w-[420px]"
    />
  </div>
</template>



<style scoped>

</style>
