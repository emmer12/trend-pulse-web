<template>
  <!-- Sticky header container with dynamic scroll backgrounds -->
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
          :class="isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-[#085E40]/10' : 'bg-transparent py-6 border-transparent'">
    <div class="container-x flex items-center justify-between">
      
      <!-- Brand Logo / Identity Link -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
          S
        </div>
        <span class="font-sans font-extrabold text-xl tracking-tight text-black flex items-center gap-1">
          Sentra<span class="text-primary">Pulse</span>
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        </span>
      </NuxtLink>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden md:flex items-center gap-8 font-medium text-sm text-[#344054]">
        <a href="/#features" @click="handleNavClick($event, '#features')" class="hover:text-primary transition-colors">Features</a>
        <a href="/#why-us" @click="handleNavClick($event, '#why-us')" class="hover:text-primary transition-colors">Why SentraPulse</a>
        <a href="/#cta-section" @click="handleNavClick($event, '#cta-section')" class="hover:text-primary transition-colors">Download</a>
      </nav>

      <!-- CTA Call-to-Action Link (Desktop only) -->
      <div class="hidden md:flex items-center gap-4">
        <a href="/#features" @click="handleNavClick($event, '#features')" class="inline-flex items-center justify-center rounded-[200px] px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary_hover transition-colors">
          Get Started
        </a>
      </div>

      <!-- Hamburger Menu Toggle Button (Mobile) -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 text-black hover:text-primary focus:outline-none" aria-label="Toggle Menu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer Overlay Backdrop -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 top-[73px] bg-black/20 backdrop-blur-sm z-40 md:hidden" @click="isOpen = false"></div>
    </transition>

    <!-- Slide-Out Mobile Navigation Panel -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed top-[73px] right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 md:hidden flex flex-col p-6 border-l border-gray-100">
        <nav class="flex flex-col gap-6 font-semibold text-base text-[#344054] mb-8">
          <a href="/#features" @click="handleNavClick($event, '#features')" class="hover:text-primary transition-colors py-2 border-b border-gray-50">Features</a>
          <a href="/#why-us" @click="handleNavClick($event, '#why-us')" class="hover:text-primary transition-colors py-2 border-b border-gray-50">Why SentraPulse</a>
          <a href="/#cta-section" @click="handleNavClick($event, '#cta-section')" class="hover:text-primary transition-colors py-2 border-b border-gray-50">Download</a>
        </nav>
        <div class="flex flex-col gap-4 mt-auto">
          <a href="/#features" @click="handleNavClick($event, '#features')" class="w-full text-center inline-flex items-center justify-center rounded-[200px] px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary_hover transition-all">
            Get Started
          </a>
          <a href="/#cta-section" @click="handleNavClick($event, '#cta-section')" class="w-full text-center inline-flex items-center justify-center rounded-[200px] px-6 py-2.5 text-sm font-semibold text-[#344054] border border-[#D0D5DD] hover:bg-[#F3F2F2] transition-all">
            Download App
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

// Track page scroll to apply background shift
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Custom anchor links click handler to bypass default jump and scroll smoothly
const handleNavClick = (e: Event, selector: string) => {
  isOpen.value = false
  
  // Navigate standardly if not on homepage index
  if (route.path !== '/') {
    return
  }

  e.preventDefault()
  
  // Use ScrollSmoother instance if registered on Nuxt App context
  const { $ScrollSmoother }: any = useNuxtApp()
  const smoother = $ScrollSmoother?.get()
  
  if (smoother) {
    smoother.scrollTo(selector, true)
  } else {
    // Standard native smooth scrolling fallback
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
</style>