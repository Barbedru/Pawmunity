<script setup>

import { useRouter } from "vue-router";

const router = useRouter();

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">

    <!-- Logo -->
    <div class="flex justify-center">
      <img
        src="../assets/LogoApp.png"
        alt="Illustration Pawmunity"
        class="w-90 mb-2"
      />
    </div>

    <!-- Section principale : téléphone | texte | téléphone -->
    <div class="flex items-center justify-between px-24 py-2 gap-8">

      <!-- Téléphone gauche -->
      <div class="phone-frame flex-shrink-0">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <img
            src="../assets/capture1.png"
            alt="Accueil Pawmunity"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Centre : texte + QR code -->
      <div class="flex flex-col items-center text-center gap-6 flex-1">

        <div class="bg-[#FF7A4D] text-white text-[18px] rounded-full px-6 py-1">
          <p>Une communauté bienveillante pour vos animaux</p>
        </div>

        <h1 class="text-[#2C4A6E] font-bold text-[52px] leading-tight">
          Faites garder vos animaux <br> en toute confiance
        </h1>

        <p class="text-gray-500 text-[18px]">
          Organisez facilement la garde de vos compagnons entre familles de votre communauté
        </p>

        <img
          src="../assets/qrcode.svg"
          @click="router.push('/login')"
          class="cursor-pointer w-40 mt-4"
          alt="QRcode"
        />

      </div>

      <!-- Téléphone droit -->
      <div class="phone-frame flex-shrink-0">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <img
            src="../assets/capture2.png"
            alt="Formulaire de demande"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

  </div>
</template>


<style scoped>

/* Corps du téléphone */
.phone-frame {
  position: relative;
  width: min(280px, 80vw); /* 280px max, mais jamais plus de 80% de l'écran */
  height: min(570px, 163vw);
  background-color: #1a1a1a;
  border-radius: 44px;
  padding: 14px;
  box-shadow:
    0 0 0 2px #3a3a3a,
    0 30px 60px rgba(0, 0, 0, 0.25);
}

/* La notch en haut */
.phone-notch {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 28px;
  background-color: #1a1a1a;
  border-radius: 0 0 18px 18px;
  z-index: 10;
}

/* L'écran (zone blanche où s'affiche la capture) */
.phone-screen {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 32px;
  overflow: hidden;
}

</style>
