<script setup>
import { ref } from 'vue'
import { animaux } from '../data/animaux.js'

const emit = defineEmits(['fermer', 'ajouterDemande'])

const animalSelection = ref([])

const toggleAnimal = (id) => {
  if (animalSelection.value.includes(id)) {
    animalSelection.value = animalSelection.value.filter(a => a !== id)
  } else {
    animalSelection.value.push(id)
  }
}

const dateDebut = ref(null)
const dateFin = ref(null)
const lieuGarde = ref('proprietaire')

const etape = ref(1)

const urgenceSelection = ref('normal')
const description = ref('')

const formaterDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
}

const envoyerDemande= () => {
  const noms = animalSelection.value
    .map(id => animaux.find(a => a.id === id)?.nom)
    .join(' & ')

  const nouvelleDemande = {
    id: Date.now(),
    nom: noms,
    famille: "Famille Druval",
    description: description.value,
    date: `${formaterDate(dateDebut.value)} - ${formaterDate(dateFin.value)}`,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value || dateDebut.value,
    lieu: lieuGarde.value === 'proprietaire',
    reponses: 0,
    urgent: urgenceSelection.value === 'urgent'
  }

  emit('ajouterDemande', nouvelleDemande)
  emit('fermer')
}




</script>

<template>

  <div class="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
       @click.self="emit('fermer')">

    <div class="bg-[#F5F1EB] w-full rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">

      <!-- HEADER commun -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-[#2C4A6E] font-bold text-xl">Nouvelle demande</h2>
        <button @click="emit('fermer')" class="text-gray-400 text-2xl">✕</button>
      </div>

      <!-- BARRE DE PROGRESSION -->
      <div class="flex items-center mb-6">

        <!-- Étape 1 -->
        <div class="flex flex-col items-center flex-1">
    <span :class="etape >= 1 ? 'text-[#E8724A]' : 'text-gray-300'"
          class="text-sm font-semibold mb-1">Animal & Dates</span>
          <div :class="etape >= 1 ? 'bg-[#E8724A]' : 'bg-gray-200'"
               class="h-1 w-full rounded-full"></div>
        </div>

        <!-- Étape 2 -->
        <div class="flex flex-col items-center flex-1">
    <span :class="etape === 2 ? 'text-[#E8724A]' : 'text-gray-300'"
          class="text-sm font-semibold mb-1">Détails</span>
          <div :class="etape === 2 ? 'bg-[#E8724A]' : 'bg-gray-200'"
               class="h-1 w-full rounded-full"></div>
        </div>

      </div>

      <!-- PAGE 1 -->
      <div v-if="etape === 1">

        <!-- ANIMAL CONCERNÉ -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Animal concerné</p>
          <div
            v-for="animal in animaux"
            :key="animal.id"
            @click="toggleAnimal(animal.id)"
            :class="animalSelection.includes(animal.id) ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
              {{ animal.nom[0] }}
            </div>
            <div>
              <p class="font-bold text-[#2C4A6E]">{{ animal.nom }}</p>
              <p class="text-sm text-gray-400">{{ animal.type }}, {{ animal.age }} ans</p>
            </div>
          </div>
        </div>

        <!-- PÉRIODE DE GARDE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Période de garde</p>
          <div class="mb-3">
            <p class="text-gray-400 text-sm mb-1">Date de début</p>
            <div class="bg-white rounded-2xl p-4 flex items-center gap-3">
              <span class="text-gray-300">📅</span>
              <input
                type="date"
                v-model="dateDebut"
                class="w-full bg-transparent text-[#2C4A6E] outline-none"
              />
            </div>
          </div>
          <div>
            <p class="text-gray-400 text-sm mb-1">Date de fin</p>
            <div class="bg-white rounded-2xl p-4 flex items-center gap-3">
              <span class="text-gray-300">📅</span>
              <input
                type="date"
                v-model="dateFin"
                class="w-full bg-transparent text-[#2C4A6E] outline-none"
              />
            </div>
          </div>
        </div>

        <!-- LIEU DE GARDE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Lieu de garde</p>
          <div
            @click="lieuGarde = 'proprietaire'"
            :class="lieuGarde === 'proprietaire' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div :class="lieuGarde === 'proprietaire' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Chez le propriétaire</p>
              <p class="text-sm text-gray-400">Le gardien vient chez moi</p>
            </div>
          </div>
          <div
            @click="lieuGarde = 'gardien'"
            :class="lieuGarde === 'gardien' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          >
            <div :class="lieuGarde === 'gardien' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Chez le gardien</p>
              <p class="text-sm text-gray-400">Mon animal va chez le gardien</p>
            </div>
          </div>
        </div>

        <!-- BOUTON SUIVANT -->
        <button
          @click="etape = 2"
          class="w-full bg-[#2C4A6E] text-white font-bold py-4 rounded-full text-xl"
        >
          Suivant
        </button>

      </div>

      <!-- PAGE 2 -->
      <div v-else-if="etape === 2">

        <!-- NIVEAU D'URGENCE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Niveau d'urgence</p>
          <div
            @click="urgenceSelection = 'normal'"
            :class="urgenceSelection === 'normal' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div :class="urgenceSelection === 'normal' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Normal</p>
              <p class="text-sm text-gray-400">Demande planifiée à l'avance</p>
            </div>
          </div>
          <div
            @click="urgenceSelection = 'urgent'"
            :class="urgenceSelection === 'urgent' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          >
            <div :class="urgenceSelection === 'urgent' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Urgent</p>
              <p class="text-sm text-gray-400">Besoin immédiat (aujourd'hui/demain)</p>
            </div>
          </div>
        </div>

        <!-- DESCRIPTION -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Description générale</p>
          <textarea
            v-model="description"
            placeholder="Décrivez brièvement la situation et vos besoins..."
            class="w-full bg-white rounded-2xl p-4 text-gray-400 outline-none resize-none h-32"
          ></textarea>
        </div>

        <!-- BOUTONS -->
        <div class="flex gap-3">
          <button
            @click="etape = 1"
            class="w-1/2 border-2 border-[#2C4A6E] text-[#2C4A6E] font-bold py-4 rounded-full text-lg"
          >
            Précédent
          </button>

          <button
            @click="envoyerDemande"
            class="w-1/2 bg-[#2C4A6E] text-white font-bold py-4 rounded-full text-lg"
          >
            Envoyer
          </button>
        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
