<script setup>

import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">

    <div class="flex justify-center">
      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 mb-8"
      />
    </div>

    <div class="bg-[#FF7A4D] text-white text-[20px] w-[500px] mx-auto rounded-full px-4 py-1 text-center ">
      <p>Une communauté bienveillante pour vos animaux</p>
    </div>

    <div class="text-[#2C4A6E] font-bold text-center text-[60px] mt-8 ">
      <h1>Faites garder vos animaux <br> en toute confiance</h1>
    </div>

    <div class="text-center text-gray-500 text-[20px]">
      <p> Organisez facilement la garde de vos compagnons entre familles de votre communauté</p>
    </div>

    <div class="flex justify-center">
      <img
        src="../assets/qrcode.svg" @click="router.push('/login')" class="cursor-pointer w-90 mb-8 items-center justify-center px-6 mt-8 "
        alt="QRcode"
      />
    </div>

    <div>

    </div>


  </div>
</template>

<style scoped>

</style>
