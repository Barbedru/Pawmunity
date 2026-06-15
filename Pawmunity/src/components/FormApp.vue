<script setup>
/**
 * FormApp.vue — Formulaire de création d'une demande de garde (modal 2 étapes)
 *
 * S'affiche en glissant depuis le bas de l'écran (bottom sheet).
 * Cliquer sur l'overlay sombre ou le ✕ ferme le formulaire via l'emit 'close'.
 *
 * Étape 1 — Animal & Dates :
 *   - Sélection d'un ou plusieurs animaux (liste issue de animals.js)
 *   - Dates de début et fin de garde
 *   - Lieu : chez le propriétaire ou chez le gardien
 *
 * Étape 2 — Détails :
 *   - Niveau d'urgence (normal / urgent)
 *   - Description libre (min. 10 caractères)
 *
 * À la soumission, émet 'addRequest' avec un objet demande prêt à l'emploi,
 * puis 'close' pour fermer le formulaire.
 */

import { ref } from 'vue'
import { animals } from '../data/animals.js'

const emit = defineEmits(['close', 'addRequest'])

// Tableau des ids d'animaux sélectionnés (multi-sélection possible)
const selectedAnimals = ref([])

// Ajoute ou retire un animal de la sélection selon son état actuel
const toggleAnimal = (id) => {
  if (selectedAnimals.value.includes(id)) {
    selectedAnimals.value = selectedAnimals.value.filter(a => a !== id)
  } else {
    selectedAnimals.value.push(id)
  }
}

const startDate = ref(null)
const endDate = ref(null)

// 'owner' = chez le propriétaire | 'sitter' = chez le gardien
const location = ref('owner')

// Numéro de l'étape active (1 ou 2)
const step = ref(1)

// Objet regroupant les messages d'erreur de validation (clé = champ concerné)
const errors = ref({})

const urgencyLevel = ref('normal')
const description = ref('')

// Formate une date ISO (YYYY-MM-DD) en libellé français (ex: "29 juin")
const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
}

// Valide l'étape 1 : au moins un animal sélectionné et une date de début saisie
const validateStep1 = () => {
  errors.value = {}
  if (selectedAnimals.value.length === 0) errors.value.animals = 'Sélectionne au moins un animal'
  if (!startDate.value) errors.value.startDate = 'La date de début est obligatoire'
  return Object.keys(errors.value).length === 0
}

// Valide l'étape 2 : description d'au moins 10 caractères
const validateStep2 = () => {
  errors.value = {}
  if (!description.value || description.value.trim().length < 10)
    errors.value.description = 'La description doit faire au moins 10 caractères'
  return Object.keys(errors.value).length === 0
}

// Passe à l'étape 2 seulement si l'étape 1 est valide
const goToStep2 = () => {
  if (validateStep1()) step.value = 2
}

// Construit l'objet demande et l'émet vers le parent (HomeView)
const submitRequest = () => {
  if (!validateStep2()) return

  // Concatène les noms des animaux sélectionnés (ex: "Murphy & Odin")
  const names = selectedAnimals.value
    .map(id => animals.find(a => a.id === id)?.name)
    .join(' & ')

  const newRequest = {
    id: Date.now(),           // id unique basé sur le timestamp
    name: names,
    family: "Famille Druval",
    description: description.value,
    date: `${formatDate(startDate.value)} - ${formatDate(endDate.value)}`,
    startDate: startDate.value,
    endDate: endDate.value || startDate.value, // si pas de fin, même jour que le début
    location: location.value === 'owner',      // true = chez le propriétaire
    responses: 0,
    urgent: urgencyLevel.value === 'urgent'
  }

  emit('addRequest', newRequest)
  emit('close')
}




</script>

<template>

  <div class="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50"
       @click.self="emit('close')">

    <div class="bg-[#F5F1EB] w-full sm:max-w-[600px] sm:rounded-3xl rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">

      <!-- HEADER commun -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-[#2C4A6E] font-bold text-xl">Nouvelle demande</h2>
        <button @click="emit('close')" class="text-gray-400 text-2xl">✕</button>
      </div>

      <!-- BARRE DE PROGRESSION -->
      <div class="flex items-center mb-6">

        <!-- Étape 1 -->
        <div class="flex flex-col items-center flex-1">
    <span :class="step >= 1 ? 'text-[#E8724A]' : 'text-gray-300'"
          class="text-sm font-semibold mb-1">Animal & Dates</span>
          <div :class="step >= 1 ? 'bg-[#E8724A]' : 'bg-gray-200'"
               class="h-1 w-full rounded-full"></div>
        </div>

        <!-- Étape 2 -->
        <div class="flex flex-col items-center flex-1">
    <span :class="step === 2 ? 'text-[#E8724A]' : 'text-gray-300'"
          class="text-sm font-semibold mb-1">Détails</span>
          <div :class="step === 2 ? 'bg-[#E8724A]' : 'bg-gray-200'"
               class="h-1 w-full rounded-full"></div>
        </div>

      </div>

      <!-- PAGE 1 -->
      <div v-if="step === 1">

        <!-- ANIMAL CONCERNÉ -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Animal concerné</p>
          <p v-if="errors.animals" class="text-red-500 text-xs mb-2">{{ errors.animals }}</p>
          <div
            v-for="animal in animals"
            :key="animal.id"
            @click="toggleAnimal(animal.id)"
            :class="selectedAnimals.includes(animal.id) ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
              {{ animal.name[0] }}
            </div>
            <div>
              <p class="font-bold text-[#2C4A6E]">{{ animal.name }}</p>
              <p class="text-sm text-gray-400">{{ animal.type }}, {{ animal.age }} ans</p>
            </div>
          </div>
        </div>

        <!-- PÉRIODE DE GARDE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Période de garde</p>
          <div class="mb-3">
            <p class="text-gray-400 text-sm mb-1">Date de début</p>
            <p v-if="errors.startDate" class="text-red-500 text-xs mb-1">{{ errors.startDate }}</p>
            <div class="bg-white rounded-2xl p-4 flex items-center gap-3">
              <span class="text-gray-300">📅</span>
              <input
                type="date"
                v-model="startDate"
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
                v-model="endDate"
                class="w-full bg-transparent text-[#2C4A6E] outline-none"
              />
            </div>
          </div>
        </div>

        <!-- LIEU DE GARDE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Lieu de garde</p>
          <div
            @click="location = 'owner'"
            :class="location === 'owner' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div :class="location === 'owner' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Chez le propriétaire</p>
              <p class="text-sm text-gray-400">Le gardien vient chez moi</p>
            </div>
          </div>
          <div
            @click="location = 'sitter'"
            :class="location === 'sitter' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          >
            <div :class="location === 'sitter' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Chez le gardien</p>
              <p class="text-sm text-gray-400">Mon animal va chez le gardien</p>
            </div>
          </div>
        </div>

        <!-- BOUTON SUIVANT -->
        <button
          @click="goToStep2"
          class="w-full bg-[#2C4A6E] text-white font-bold py-4 rounded-full text-xl"
        >
          Suivant
        </button>

      </div>

      <!-- PAGE 2 -->
      <div v-else-if="step === 2">

        <!-- NIVEAU D'URGENCE -->
        <div class="mb-6">
          <p class="text-[#2C4A6E] font-semibold mb-3">Niveau d'urgence</p>
          <div
            @click="urgencyLevel = 'normal'"
            :class="urgencyLevel === 'normal' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 mb-3 flex items-center gap-4 cursor-pointer"
          >
            <div :class="urgencyLevel === 'normal' ? 'bg-[#E8724A]' : 'bg-gray-200'"
                 class="w-5 h-5 rounded-full"></div>
            <div>
              <p class="font-bold text-[#2C4A6E]">Normal</p>
              <p class="text-sm text-gray-400">Demande planifiée à l'avance</p>
            </div>
          </div>
          <div
            @click="urgencyLevel = 'urgent'"
            :class="urgencyLevel === 'urgent' ? 'border-2 border-[#E8724A]' : 'border-2 border-transparent'"
            class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          >
            <div :class="urgencyLevel === 'urgent' ? 'bg-[#E8724A]' : 'bg-gray-200'"
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
            :class="errors.description ? 'border border-red-400' : ''"
            class="w-full bg-white rounded-2xl p-4 text-gray-400 outline-none resize-none h-32"
          ></textarea>
          <p v-if="errors.description" class="text-red-500 text-xs mt-1">{{ errors.description }}</p>
        </div>

        <!-- BOUTONS -->
        <div class="flex gap-3">
          <button
            @click="step = 1"
            class="w-1/2 border-2 border-[#2C4A6E] text-[#2C4A6E] font-bold py-4 rounded-full text-lg"
          >
            Précédent
          </button>

          <button
            @click="submitRequest"
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
