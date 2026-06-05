import { ref } from 'vue'
import { defineStore } from 'pinia'
import { request as demandesData } from '../data/request.js'

export const useDemandesStore = defineStore('request', () => {
  const demandes = ref([...demandesData])

  const ajouterDemande = (nouvelleDemande) => {
    demandes.value.push(nouvelleDemande)
  }

  return { demandes, ajouterDemande }
})
