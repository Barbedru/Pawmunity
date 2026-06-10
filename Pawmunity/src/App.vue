<script setup>
import { ref } from 'vue'
import { request as requestsData } from './data/request.js'

const requests = ref([...requestsData])

const addRequest = (newRequest) => {
  requests.value.push(newRequest)
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :requests="requests" @addRequest="addRequest" />
  </RouterView>
</template>
