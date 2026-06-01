<template>
  <main>
     <UiButton text="Get Started" class="text-white" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const {  $ScrollSmoother } :any= useNuxtApp()





// contact us
const form = ref({
  name: '',
  email: '',
  message: ''
})






onMounted(async () => {
  let existingSmoother = $ScrollSmoother.get();
  if (existingSmoother) existingSmoother.kill();
 
  let smother = $ScrollSmoother.create({
    wrapper:"#smooth-wrapper",
    content:"#smooth-content",
    smooth: 1.5, // slightly longer smoothing on desktop for premium feel
    effects: true, 
    smoothTouch: false, // native scroll on mobile is significantly faster and less laggy
    normalizeScroll: true, // helps prevent mobile browser bar show/hide jumping
    ignoreMobileResize: true,
  });
})

onUnmounted(() => {
})



</script>

<style scoped>
.italic {
  font-style: italic;
}
</style>
