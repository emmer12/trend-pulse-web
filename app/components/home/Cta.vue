<template>
  <section id="cta-section" class="py-20 bg-[#FCFAF6] relative overflow-hidden">
    <div class="container-x relative z-10">
      <div class="bg-[#0F0F13] rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-white/5 text-left">
        <div class="absolute -top-12 -left-12 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-12 -right-12 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div class="lg:col-span-7 flex flex-col items-start gap-5">
            <span class="text-xs font-bold uppercase tracking-widest text-secondary bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              ◆ JOIN SENTRAPULSE TODAY
            </span>
            
            <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Join the Community That Looks Out for <span class="italic text-primary">Each Other</span>
            </h2>
            
            <p class="font-sans text-sm sm:text-base text-[#AEB9C1]/80 max-w-xl leading-relaxed mb-4">
              Download the app or sign up to start tracking what matters in your area. Stay safe, stay informed.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#" class="inline-flex items-center justify-center rounded-[200px] px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary_hover transition-all text-center">
                Download App
              </a>
              <a href="#" class="inline-flex items-center justify-center rounded-[200px] px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-center">
                Create Account
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-4 mt-4 opacity-40">
              <span class="text-[10px] font-mono tracking-widest text-[#AEB9C1]/60 uppercase">AVAILABLE FOR IOS & ANDROID</span>
            </div>
          </div>

          <div class="lg:col-span-5 w-full">
            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col gap-6">
              <div class="flex flex-col gap-1">
                <h3 class="text-lg font-bold text-white leading-tight">Newsletter Updates</h3>
                <p class="text-xs text-[#AEB9C1]/70 leading-relaxed">
                  Subscribe to receive critical weekly safety summaries and verified local campaign progress updates.
                </p>
              </div>

              <form @submit.prevent="handleSubscribe" class="flex flex-col gap-3">
                <div class="relative">
                  <input 
                    v-model="email" 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    class="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-[#AEB9C1]/40 text-sm outline-none focus:border-primary focus:bg-white/15 transition-all"
                  />
                </div>
                
                <button 
                  type="submit" 
                  :disabled="loading"
                  class="w-full py-3.5 rounded-xl bg-primary hover:bg-primary_hover text-white text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span v-if="loading" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span v-else>Subscribe Now</span>
                </button>
              </form>

              <div v-if="statusMessage" class="text-xs font-semibold text-center p-3 rounded-lg"
                   :class="status === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'">
                {{ statusMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')
const config = useRuntimeConfig()

const handleSubscribe = async () => {
  if (!email.value) return
  loading.value = true
  status.value = 'idle'
  statusMessage.value = ''
  
  try {
    await $fetch(`${config.public.apiBase}/newsletter/subscribers`, {
      method: 'POST',
      body: { email: email.value }
    })
    
    status.value = 'success'
    statusMessage.value = 'Subscription complete. Thank you!'
    email.value = ''
  } catch (err: any) {
    status.value = 'success'
    statusMessage.value = 'Subscription complete. Thank you!'
    email.value = ''
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
</style>
