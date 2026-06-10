<script setup>

import { ref, computed } from 'vue'
import Banner from '../components/Banner.vue'
import MenuBurger from '../components/MenuBurger.vue'
import Card from '../components/Card.vue'
import FormApp from '../components/FormApp.vue'

const props = defineProps(['requests'])
const emit = defineEmits(['addRequest'])

const activeFilter = ref('all')

const filteredRequests = computed(() => {
  if (activeFilter.value === 'urgent') {
    return props.requests.filter(r => r.urgent === true)
  }
  return props.requests
})

const showForm = ref(false)

</script>

<template>
  <div class="min-h-screen bg-[#F5F1EB] flex flex-col">
    <Banner />
    <MenuBurger />

    <p class="text-center text-[#2C4A6E] text-2xl font-bold py-5 leading-relaxed mb-10">
      Demande de garde
    </p>

    <button
      @click="activeFilter = 'all'"
      :class="activeFilter !== 'all' ? 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]' : ''"
      class="w-[280px] mx-auto h-[62px] bg-[#2C4A6E] text-white font-bold rounded-full mb-4 text-xl"
    >
      Toutes les demandes
    </button>

    <button
      @click="activeFilter = 'urgent'"
      :class="activeFilter !== 'urgent' ? 'shadow-[0_4px_10px_rgba(44,74,110,0.4)]' : ''"
      class="w-[280px] mx-auto h-[62px] bg-white text-[#2C4A6E] font-bold rounded-full mb-4 text-xl transition-shadow duration-150"
    >
      Urgentes
    </button>

    <button
      @click="showForm = true"
      class="w-[280px] mx-auto h-[62px] bg-[#FF7A4D] text-white font-bold rounded-xl mb-4 text-2xl shadow-[0_4px_10px_rgba(44,74,110,0.4)] hover:shadow-[0_6px_16px_rgba(44,74,110,0.5)] active:shadow-none transition-shadow duration-150">
      + Nouvelle demande
    </button>

    <Card
      v-for="request in filteredRequests"
      :key="request.id"
      :name="request.name"
      :family="request.family"
      :description="request.description"
      :date="request.date"
      :location="request.location"
      :responses="request.responses"
      :urgent="request.urgent"
    />

  <FormApp
    v-if="showForm"
    @close="showForm = false"
    @addRequest="(r) => emit('addRequest', r)"
  />

  </div>



</template>

<style scoped>

</style>
