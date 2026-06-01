<template>
  <footer class="flex justify-center w-full ">
     Footer
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('16:21:25')
let timer: any

onMounted(() => {
  timer = setInterval(() => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString('en-US', { hour12: false })
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>