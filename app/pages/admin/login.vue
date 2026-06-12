<template>
  <div class="min-h-screen flex relative overflow-hidden">
    <!-- Left Side: Hero Image / Mobile Background -->
    <div class="absolute inset-0 z-0 lg:relative lg:flex lg:w-1/2 bg-black flex items-center justify-center overflow-hidden">
      <!-- Image of Franklyn -->
      <img 
        :src="heroImage" 
        class="absolute inset-0 w-full h-full object-cover opacity-80" 
      />
      <div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/40 to-black/20 pointer-events-none"></div>
      
      <!-- Text Overlay (Hidden on Mobile) -->
      <div class="hidden lg:block relative z-10 w-full max-w-lg px-12">
        <div class="mb-12 w-48 text-white">
          <IconsLogo />
        </div>
        <h1 class="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Pioneering <br/>
          <span class="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#F48220,45%,#fff,55%,#F48220)] bg-[length:200%_100%]">Strategic Leadership</span> <br/>
          & Security.
        </h1>
        <p class="text-lg text-gray-300 font-medium leading-relaxed">
          Access the administrative portal to compose insights, manage your audience, and orchestrate visionary content.
        </p>
      </div>
    </div>

    <!-- Right Side: Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-24 relative z-10 lg:bg-[#F8F9FA]">
      <!-- Mobile Backdrop Blur -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md lg:hidden pointer-events-none"></div>

      <!-- Glow effects (Desktop only) -->
      <div class="hidden lg:block absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-[#F48220]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div class="w-full max-w-md relative z-20 bg-white/95 lg:bg-white p-8 sm:p-10 lg:p-12 rounded-[32px] lg:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-white/50 lg:border-gray-100 backdrop-blur-2xl lg:backdrop-blur-none">
        <div class="lg:hidden mb-10 text-black w-32 mx-auto">
          <IconsLogo />
        </div>

        <div class="mb-10 text-center lg:text-left">
          <h2 class="text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h2>
          <p class="text-sm font-medium text-gray-500 mt-2">Secure access to your administrative portal</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              v-model="email"
              type="email" 
              placeholder="admin@example.com" 
              required
              class="w-full px-5 py-4 rounded-2xl bg-[#F8F9FA] border border-transparent outline-none focus:bg-white focus:border-[#F48220] focus:ring-4 focus:ring-[#F48220]/10 transition-all font-semibold text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div class="space-y-2">
            <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div class="relative">
              <input 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="••••••••••••" 
                required
                class="w-full px-5 py-4 pr-12 rounded-2xl bg-[#F8F9FA] border border-transparent outline-none focus:bg-white focus:border-[#F48220] focus:ring-4 focus:ring-[#F48220]/10 transition-all font-semibold text-gray-900 placeholder:text-gray-400"
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F48220] transition-colors focus:outline-none"
                title="Toggle Password Visibility"
              >
                <!-- Eye off icon when hiding password -->
                <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                <!-- Eye icon when showing password -->
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full py-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 hover:to-black text-white font-bold tracking-wide transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_25px_rgb(0,0,0,0.2)] flex items-center justify-center gap-2 disabled:opacity-50 mt-8 group"
          >
            <span v-if="loading" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <div v-else class="flex items-center gap-2">
              <span>Secure Access</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        </form>

        <!-- Message Alerts -->
        <div v-if="errorMessage" class="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-semibold text-center transition-all">
          {{ errorMessage }}
        </div>

        <div class="mt-12 text-center lg:text-left">
          <NuxtLink to="/" class="text-sm font-bold text-gray-400 hover:text-[#F48220] transition-colors uppercase tracking-widest">← Return to Website</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const heroImage = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'

definePageMeta({
  layout: false
})

useHead({
  title: 'Admin Login | Franklynoohakim'
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const config = useRuntimeConfig()

// Word Carousel Logic
const words = ["Strategic Leadership", "Global Influence", "Visionary Content"]
const currentWordIndex = ref(0)
const currentWord = computed(() => words[currentWordIndex.value])
let carouselInterval: any

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length
  }, 3000)
})

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval)
})

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const res = await $fetch<{ token: string, user: { name: string, email: string } }>(`${config.public.apiBase}/login`, {
      method: 'POST',
      body: { email: email.value, password: password.value }
    })

    // Store secure cookies (session tokens)
    const tokenCookie = useCookie('admin_token', { maxAge: 60 * 60 * 24, path: '/' })
    const userCookie = useCookie('admin_user', { maxAge: 60 * 60 * 24, path: '/' })

    tokenCookie.value = res.token
    userCookie.value = res.user.name

    // Immediate dynamic redirection to admin home page
    navigateTo('/admin')
  } catch (err: any) {
    console.error('Login error:', err)
    errorMessage.value = err.data?.message || 'Access Denied: Invalid credentials.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.animate-text-shimmer {
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
</style>
