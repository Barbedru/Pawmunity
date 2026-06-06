<script setup>
import { ref } from 'vue'
import { animals } from '../data/animals.js'

const emit = defineEmits(['close', 'addRequest'])

const selectedAnimals = ref([])

const toggleAnimal = (id) => {
  if (selectedAnimals.value.includes(id)) {
    selectedAnimals.value = selectedAnimals.value.filter(a => a !== id)
  } else {
    selectedAnimals.value.push(id)
  }
}

const startDate = ref(null)
const endDate = ref(null)
const location = ref('owner')

const step = ref(1)

const urgencyLevel = ref('normal')
const description = ref('')

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
}

const submitRequest = () => {
  const names = selectedAnimals.value
    .map(id => animals.find(a => a.id === id)?.name)
    .join(' & ')

  const newRequest = {
    id: Date.now(),
    name: names,
    family: "Famille Druval",
    description: description.value,
    date: `${formatDate(startDate.value)} - ${formatDate(endDate.value)}`,
    startDate: startDate.value,
    endDate: endDate.value || startDate.value,
    location: location.value === 'owner',
    responses: 0,
    urgent: urgencyLevel.value === 'urgent'
  }

  emit('addRequest', newRequest)
  emit('close')
}




</script>

<template>

  <div class="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
       @click.self="emit('close')">

    <div class="bg-[#F5F1EB] w-full rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">

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
          @click="step = 2"
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
            class="w-full bg-white rounded-2xl p-4 text-gray-400 outline-none resize-none h-32"
          ></textarea>
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
