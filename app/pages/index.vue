<template>
  <main>
    <HomeHero v-gsap="'fade-in'" />
    <HomeFeatures />
    <HomeWhyUs v-gsap="'fade-up'" />
    <HomeCta v-gsap="'fade-up'" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

useSeoMeta({
  title: 'SentraPulse — Stay Ahead. Stay Informed. Stay Safe.',
  description: 'Real-time community alerts, safety updates, and live incident tracking—all in one place. SentraPulse helps you stay connected to what matters around you.',
  ogTitle: 'SentraPulse — Real-time Community Safety Alerts & Tracking',
  ogDescription: 'Real-time community alerts, safety updates, and live incident tracking—all in one place. SentraPulse helps you stay connected to what matters around you, instantly.',
  ogImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop',
  twitterCard: 'summary_large_image',
})

const { $ScrollSmoother } : any = useNuxtApp()

onMounted(() => {
  if (import.meta.client && $ScrollSmoother) {
    let existingSmoother = $ScrollSmoother.get()
    if (existingSmoother) existingSmoother.kill()
   
    $ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true, 
      smoothTouch: false,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })
  }
})
</script>

<style scoped>
</style>
