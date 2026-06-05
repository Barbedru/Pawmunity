<script setup>

import { ref, computed } from 'vue'
import Banner from '../components/Banner.vue'
import MenuBurger from '../components/MenuBurger.vue'
import Card from '../components/Card.vue'
import FormApp from '../components/FormApp.vue'
import { useDemandesStore } from '../stores/demandes.js'

const store = useDemandesStore()
const filtreActif = ref('toutes')

const demandesFiltrees = computed(() => {
  if (filtreActif.value === 'urgentes') {
    return store.demandes.filter(d => d.urgent === true)
  }
  return store.demandes
})

const afficherFormulaire = ref(false)

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />

    <p class="text-center text-[#2C4A6E] text-2xl font-bold py-5 leading-relaxed mb-10">
      Demande de garde
    </p>

    <button
      @click="filtreActif = 'toutes'"
      :class="filtreActif === 'toutes' ? 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]' : ''"
      class="w-[280px] mx-auto h-[62px] mx-auto bg-[#2C4A6E] text-white font-bold h-15.5 rounded-full mb-4 text-xl"
    >
      Toutes les demandes
    </button>

    <button
      @click="filtreActif = 'urgentes'"
      :class="filtreActif === 'urgentes' ? '' : 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]'"
      class="w-[280px] mx-auto h-[62px] mx-auto bg-white text-[#2C4A6E] font-bold h-15.5 rounded-full mb-4 text-xl transition-shadow duration-150"
    >
      Urgentes
    </button>

    <button
      @click="afficherFormulaire = true"
      class="w-[280px] mx-auto h-[62px] mx-auto bg-[#FF7A4D] text-white font-bold h-15.5 rounded-xl mb-4 text-2xl shadow-[0_4px_10px_rgba(44,74,110,0.4)] hover:shadow-[0_6px_16px_rgba(44,74,110,0.5)]
       active:shadow-none transition-shadow duration-150"
    >
      + Nouvelle demande
    </button>

    <Card
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


  <FormApp
    v-if="afficherFormulaire"
    @fermer="afficherFormulaire = false"
    @ajouterDemande="store.ajouterDemande"
  />

  </div>



</template>

<style scoped>

</style>
