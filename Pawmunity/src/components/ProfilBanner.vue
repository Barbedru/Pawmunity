<script setup>
import {computed} from 'vue'

const props = defineProps({
  name: String,
  family: String
})

const initials = computed(() => {
  if (!props.name) return '?'
  return props.name.slice(0, 2).toUpperCase()
})

</script>

<template>

  <div class="w-full h-[233px] flex items-center justify-center px-6 gap-6"
       style="background: linear-gradient(180deg, #2C4A6E, #E8724A)">

    <!--Avatar-->
    <div class="w-[109px] h-[111px] rounded-full flex items-center justify-center font-light text-[40px] text-white"
         style="background: linear-gradient(180deg, #E8724A, #2C4A6E)">
      {{ initials }}
    </div>

    <!--Nom Famille-->
    <div>
      <p class="font-light text-white text-[40px]"> Famille </p>
      <p class="font-light text-white text-[40px]"> {{ name }} </p>
    </div>

  </div>


</template>

<style scoped>

</style>
