<template>
  <footer class="bg-[#0F0F13] text-[#AEB9C1] border-t border-white/5 pt-16 pb-12 w-full">
    <div class="container-x">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        
        <!-- Brand Info and Digital Live System Clock -->
        <div class="col-span-1 md:col-span-5 flex flex-col gap-4">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md transition-transform group-hover:scale-105">
              T
            </div>
            <span class="font-sans font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
              Trend<span class="text-primary">Pulse</span>
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </span>
          </NuxtLink>
          <p class="text-sm max-w-sm leading-relaxed text-[#AEB9C1]/80 mt-2">
            Real-time community alerts, safety updates, and live incident tracking—all in one place. Connecting people to what matters around them, instantly.
          </p>
          <div class="flex items-center gap-2.5 mt-4 text-xs font-mono bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-fit">
            <span class="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span class="text-white/40">SYSTEM LIVE:</span>
            <span class="text-white font-semibold">{{ currentTime }}</span>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="col-span-1 md:col-span-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Platform
          </h4>
          <ul class="flex flex-col gap-3 text-sm">
            <li><a href="/#features" @click="handleNavClick($event, '#features')" class="hover:text-white transition-colors">Features</a></li>
            <li><a href="/#why-us" @click="handleNavClick($event, '#why-us')" class="hover:text-white transition-colors">Why TrendPulse</a></li>
            <li><a href="/#cta-section" @click="handleNavClick($event, '#cta-section')" class="hover:text-white transition-colors">Download App</a></li>
          </ul>
        </div>

        <!-- Social Channels & Community Engagement Summary -->
        <div class="col-span-1 md:col-span-4 flex flex-col gap-4">
          <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> Stay Protected
          </h4>
          <p class="text-xs text-[#AEB9C1]/60 leading-normal max-w-xs">
            Join thousands of active residents keeping their neighborhoods informed and safe in real-time.
          </p>
          <div class="flex items-center gap-3 mt-2">
            <a href="#" class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-sm border border-white/10" aria-label="X">
              <IconsX class="w-4 h-4" />
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-sm border border-white/10" aria-label="Instagram">
              <IconsInstagram class="w-4 h-4" />
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-sm border border-white/10" aria-label="Facebook">
              <IconsFacebook class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Details & Regulatory Policy Links -->
      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#AEB9C1]/50">
        <p>&copy; {{ new Date().getFullYear() }} TrendPulse. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-white transition-colors">Contact Support</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const route = useRoute()
let timer: any

// Update digital live system clock
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { hour12: false })
}

// Scroll layout viewport smoothly using GSAP instances
const handleNavClick = (e: Event, selector: string) => {
  if (route.path !== '/') {
    return
  }

  e.preventDefault()
  
  const { $ScrollSmoother }: any = useNuxtApp()
  const smoother = $ScrollSmoother?.get()
  
  if (smoother) {
    smoother.scrollTo(selector, true)
  } else {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>