import { ref } from 'vue'
import { defineStore } from 'pinia'
import { request as requestsData } from '../data/request.js'

export const useRequestsStore = defineStore('requests', () => {
  const requests = ref([...requestsData])

  const addRequest = (newRequest) => {
    requests.value.push(newRequest)
  }

  return { requests, addRequest }
})
