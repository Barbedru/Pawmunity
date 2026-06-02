<script setup>

import { ref, computed } from 'vue'
import { demandes as demandesData } from '../data/demandes.js'
import Banner from '../components/Banner.vue'
import MenuBurger from '../components/MenuBurger.vue'
import CarteDemande from '../components/CarteDemande.vue'
import FormulaireDemande from '../components/FormulaireDemande.vue'

const filtreActif = ref('toutes')

const demandesFiltrees = computed(() => {
  if (filtreActif.value === 'urgentes') {
    return demandes.value.filter(d => d.urgent === true)
  }
  return demandes.value
})

const demandes = ref(demandesData)
const afficherFormulaire = ref(false)

const ajouterDemande = (nouvelleDemande) => {
  demandes.value.push(nouvelleDemande)
}

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />

    <p class="text-center text-[#2C4A6E] text-2xl font-bold py-3 leading-relaxed mb-10">
      Demande de garde
    </p>

    <button
      @click="filtreActif = 'toutes'"
      :class="filtreActif === 'toutes' ? 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]' : ''"
      class="w-[90%] mx-auto bg-[#2C4A6E] text-white font-bold h-15.5 rounded-full mb-4 text-2xl"
    >
      Toutes les demandes
    </button>

    <button
      @click="filtreActif = 'urgentes'"
      :class="filtreActif === 'urgentes' ? '' : 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]'"
      class="w-[60%] mx-auto bg-white text-[#2C4A6E] font-bold h-15.5 rounded-full mb-4 text-2xl transition-shadow duration-150"
    >
      Urgentes
    </button>

    <button
      @click="afficherFormulaire = true"
      class="w-[90%] mx-auto bg-[#FF7A4D] text-white font-bold h-15.5 rounded-xl mb-4 text-2xl shadow-[0_4px_10px_rgba(44,74,110,0.4)] hover:shadow-[0_6px_16px_rgba(44,74,110,0.5)]
       active:shadow-none transition-shadow duration-150"
    >
      + Nouvelle demande
    </button>

    <CarteDemande
      v-for="demande in demandesFiltrees"
      :key="demande.id"
      :nom="demande.nom"
      :famille="demande.famille"
      :description="demande.description"
      :date="demande.date"
      :lieu="demande.lieu"
      :reponses="demande.reponses"
      :urgent="demande.urgent"
    />


  <FormulaireDemande
    v-if="afficherFormulaire"
    @fermer="afficherFormulaire = false"
    @ajouterDemande="ajouterDemande"
  />

  </div>



</template>

<style scoped>

</style>
