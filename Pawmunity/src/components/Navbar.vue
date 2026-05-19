<script setup>

</script>

<template>
  <nav class="flex items-center justify-between px-8 py-4 bg-white ">

    <img src="@/assets/logoPawmunity.png" alt="Logo_Pawmunity" class="h-30" />

    <div class="flex gap-8">
      <router-link to="/" class="text-gray-600 hover:text-gray-900">Accueil</router-link>
      <router-link to="/calendrier" class="text-gray-600 hover:text-gray-900">Calendrier</router-link>
      <router-link to="/profile" class="text-gray-600 hover:text-gray-900">Profile</router-link>

    </div>


      <div class="cursor-pointer">
        <img src="@/assets/bell.png" alt="icon_bell" />
      </div>


  </nav>

</template>

<style scoped>

</style>
