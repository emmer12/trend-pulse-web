<template>
  <div id="features" class="relative">
    
    <!-- FEATURE COLUMN 1: Real-time community board cards (Track What Matters) -->
    <section class="py-24 grid-bg relative overflow-hidden">
      <div class="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full radial-glow pointer-events-none opacity-60"></div>

      <div class="container-x relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Column Text Details -->
          <div class="lg:col-span-5 flex flex-col items-start text-left" v-gsap="'fade-right'">
            <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full mb-4">
              ◆ Real-time Feeds
            </span>
            <h2 class="font-serif text-4xl sm:text-5xl text-black leading-tight mb-6">
              Track What <span class="italic text-primary">Matters</span>
            </h2>
            <p class="font-sans text-base md:text-lg text-[#344054] mb-4 leading-relaxed">
              Stay informed about safety alerts, missing persons, and important community issues happening around you.
            </p>
            <p class="font-sans text-sm text-light_gray mb-8 leading-relaxed">
              Our community-driven feed lists active events in real-time, allowing you to react quickly, coordinate with neighbors, and never miss critical updates in your area again.
            </p>
            <div class="flex gap-4">
              <a href="#cta-section" @click="scrollPage($event, '#cta-section')" class="inline-flex items-center justify-center rounded-[200px] px-6 py-2.5 text-sm font-semibold text-[#F1650D] border border-[#F1650D]/20 hover:bg-[#F1650D]/5 transition-colors">
                See Feed Demo
              </a>
            </div>
          </div>

          <!-- Interactive Active Feed Stack Card Layout -->
          <div class="lg:col-span-7 w-full flex justify-center" v-gsap="'fade-left'">
            <div class="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-xl max-w-xl w-full flex flex-col gap-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
              
              <div class="flex items-center justify-between border-b border-gray-100 pb-4">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span class="text-xs font-bold text-black tracking-wide">COMMUNITY LIVE WATCH</span>
                </div>
                <span class="text-xs text-light_gray font-medium">3 Alerts Active Now</span>
              </div>

              <!-- List Stack of Neighborhood Incidents -->
              <div class="flex flex-col gap-4">
                <!-- Item 1: Missing Person Report -->
                <div class="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-white hover:shadow-md hover:border-primary/15">
                  <div class="flex items-center gap-3.5">
                    <div class="w-11 h-11 bg-primary/10 text-primary font-serif font-bold text-xl rounded-full flex items-center justify-center">
                      M
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-extrabold text-black">Missing Alert</span>
                        <span class="px-1.5 py-0.5 bg-yellow-50 text-yellow-600 font-bold text-[9px] rounded">URGENT</span>
                      </div>
                      <p class="text-xs text-light_gray mt-0.5">Reported: 10-year-old child last seen in Parkside.</p>
                    </div>
                  </div>
                  <span class="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    Verified Match
                  </span>
                </div>

                <!-- Item 2: Community Road Hazard -->
                <div class="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-white hover:shadow-md hover:border-primary/15">
                  <div class="flex items-center gap-3.5">
                    <div class="w-11 h-11 bg-orange-100 text-[#F1650D] font-serif font-bold text-xl rounded-full flex items-center justify-center">
                      ⚠️
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-extrabold text-black">Road Hazard</span>
                        <span class="px-1.5 py-0.5 bg-orange-50 text-[#F1650D] font-bold text-[9px] rounded">COMMUNITY</span>
                      </div>
                      <p class="text-xs text-light_gray mt-0.5">Deep pothole reported near highway off-ramp.</p>
                    </div>
                  </div>
                  <span class="text-[11px] font-semibold text-light_gray bg-gray-200/50 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    12 Votes
                  </span>
                </div>

                <!-- Item 3: Critical Electrical Failure -->
                <div class="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-white hover:shadow-md hover:border-primary/15">
                  <div class="flex items-center gap-3.5">
                    <div class="w-11 h-11 bg-red-100 text-red-600 font-serif font-bold text-xl rounded-full flex items-center justify-center">
                      🔥
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-extrabold text-black">Power Line Down</span>
                        <span class="px-1.5 py-0.5 bg-red-50 text-red-600 font-bold text-[9px] rounded">CRITICAL</span>
                      </div>
                      <p class="text-xs text-light_gray mt-0.5">Sparks visible on Oak Street corner. Fire department notified.</p>
                    </div>
                  </div>
                  <span class="text-[11px] font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    Live Status
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE COLUMN 2: Full-bleed campaign petition statistics tracker (Follow Live Campaigns) -->
    <section class="py-24 bg-[#085E40] text-white relative overflow-hidden">
      <div class="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -top-12 -right-12 w-[350px] h-[350px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container-x relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Live Interactive Campaign Progress Board -->
          <div class="lg:col-span-7 order-2 lg:order-1 w-full flex justify-center" v-gsap="'fade-right'">
            <div class="bg-[#053D2A] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl max-w-xl w-full flex flex-col gap-6">
              
              <div class="flex justify-between items-start">
                <div class="flex flex-col gap-1">
                  <span class="text-[10px] text-secondary font-bold tracking-widest uppercase">▲ LIVE CAMPAIGN TRACKER</span>
                  <h3 class="text-xl font-bold text-white leading-tight">East District Neighborhood Lighting Initiative</h3>
                </div>
                <span class="px-2.5 py-1 bg-white/10 text-white rounded-full text-xs font-medium border border-white/5">
                  ID: #4819
                </span>
              </div>

              <!-- Signature Goal Meter (Now Interactive!) -->
              <div class="bg-[#03291C] rounded-2xl p-5 border border-white/5 flex flex-col gap-4">
                <div class="flex justify-between items-center text-xs">
                  <span class="text-white/60 font-medium">Petition Signatures</span>
                  <span class="text-white font-extrabold flex items-center gap-1">
                    <span class="text-secondary transition-all duration-300">{{ signaturesCount }}</span> / 1,000 Goal
                  </span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div class="bg-secondary h-full rounded-full transition-all duration-500" :style="{ width: (signaturesCount / 10) + '%' }"></div>
                </div>
                <p class="text-[11px] text-white/50 leading-relaxed">
                  Required signatures to request city council budget for emergency streetlights installation.
                </p>

                <!-- Interactive signature support action -->
                <div class="mt-2 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span class="text-[10px] text-white/40">Help protect East District:</span>
                  <button 
                    @click="supportCampaign"
                    :disabled="campaignSigned"
                    class="px-4 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none flex items-center gap-1.5"
                    :class="campaignSigned ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/20 cursor-default' : 'bg-secondary hover:bg-secondary/90 text-white active:scale-95'"
                  >
                    <span v-if="campaignSigned">Signed ✓</span>
                    <span v-else>Support Campaign</span>
                  </button>
                </div>
              </div>

              <!-- Campaign Timeline Audit Logs -->
              <div class="flex flex-col gap-3">
                <span class="text-xs font-bold text-white/40 uppercase tracking-widest px-1">TIMELINE UPDATES</span>
                
                <div class="space-y-4 relative pl-4 border-l border-white/10 ml-2 mt-1">
                  <!-- Custom dynamic signature update log -->
                  <transition name="fade-log">
                    <div v-if="campaignSigned" class="relative">
                      <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#053D2A] animate-pulse"></span>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-xs font-extrabold text-emerald-400">Your Signature was added successfully</span>
                        <span class="text-[10px] text-emerald-400/60">Just now</span>
                      </div>
                    </div>
                  </transition>
                  <div class="relative">
                    <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-[#053D2A]"></span>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-xs font-extrabold text-white">Campaign Petition Sent to City Council</span>
                      <span class="text-[10px] text-white/40">Today, 10:45 AM</span>
                    </div>
                  </div>
                  <div class="relative">
                    <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#085E40] border-2 border-[#053D2A]"></span>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-xs font-extrabold text-white/80">New Evidence Uploaded: Safety Report</span>
                      <span class="text-[10px] text-white/40">Yesterday</span>
                    </div>
                  </div>
                  <div class="relative">
                    <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#085E40] border-2 border-[#053D2A]"></span>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-xs font-extrabold text-white/80">Campaign Launched by Resident John D.</span>
                      <span class="text-[10px] text-white/40">4 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Column Copy Details -->
          <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left" v-gsap="'fade-left'">
            <span class="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">
              ▲ Collective Action
            </span>
            <h2 class="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
              Follow Live <span class="italic text-secondary">Campaigns</span>
            </h2>
            <p class="font-sans text-base md:text-lg text-white/80 mb-4 leading-relaxed">
              Get real-time updates on ongoing incidents as they unfold.
            </p>
            <p class="font-sans text-sm text-white/60 mb-8 leading-relaxed">
              Follow safety petitions, track progress of local incident investigations, and receive instant push notifications whenever a development changes the status.
            </p>
            <div class="flex gap-4">
              <a href="#cta-section" @click="scrollPage($event, '#cta-section')" class="inline-flex items-center justify-center rounded-[200px] px-6 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-secondary/90 transition-colors">
                Track Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE COLUMN 3: Smart notifications based on user location (Stay Informed, Stay Safe) -->
    <section class="py-24 grid-bg relative overflow-hidden">
      <div class="absolute bottom-1/2 left-1/4 w-[350px] h-[350px] rounded-full radial-glow-orange pointer-events-none opacity-40"></div>

      <div class="container-x relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Column Copy Details -->
          <div class="lg:col-span-5 flex flex-col items-start text-left" v-gsap="'fade-right'">
            <span class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full mb-4">
              ● Smart Alerts
            </span>
            <h2 class="font-serif text-4xl sm:text-5xl text-black leading-tight mb-6">
              Stay Informed, <span class="italic text-primary">Stay Safe</span>
            </h2>
            <p class="font-sans text-base md:text-lg text-[#344054] mb-4 leading-relaxed">
              Receive timely alerts for critical updates, new evidence, and status changes on issues you care about.
            </p>
            <p class="font-sans text-sm text-light_gray mb-8 leading-relaxed">
              Our smart alert dispatch engine delivers notifications based on geographic relevance and user preference, ensuring you stay alert without notification fatigue.
            </p>
            <div class="flex flex-wrap gap-4 items-center">
              <span class="text-xs font-semibold text-black bg-emerald-50 border border-primary/20 px-3 py-1.5 rounded-lg">Be the first to know</span>
              <span class="text-xs font-semibold text-black bg-orange-50 border border-secondary/20 px-3 py-1.5 rounded-lg">Act faster</span>
              <span class="text-xs font-semibold text-black bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">Stay protected</span>
            </div>
          </div>

          <!-- Notification Feed Panel (Lockscreen styling wrapper enhancement) -->
          <div class="lg:col-span-7 w-full flex justify-center" v-gsap="'fade-left'">
            <div class="max-w-md w-full flex flex-col gap-4 bg-gray-900/[0.02] border border-gray-200/50 rounded-3xl p-5 md:p-6 shadow-sm">
              <div class="flex justify-between items-center text-[10px] text-gray-400 font-mono tracking-wider border-b border-gray-100 pb-3 mb-2">
                <span>LOCK SCREEN NOTIFICATIONS</span>
                <span>LAGOS SECTOR</span>
              </div>
              
              <!-- Push Card 1 -->
              <div class="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex gap-4 transition-all hover:translate-x-1 duration-300">
                <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-lg shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-black">New Evidence Verified</span>
                    <span class="text-[9px] text-light_gray font-medium">Just now</span>
                  </div>
                  <p class="text-xs text-light_gray leading-relaxed">
                    A resident has uploaded photographic evidence for <span class="text-black font-semibold">Case #4819</span>. Tap to review.
                  </p>
                </div>
              </div>

              <!-- Push Card 2 -->
              <div class="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex gap-4 transition-all hover:translate-x-1 duration-300">
                <div class="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white text-lg shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-black">Incident Resolved</span>
                    <span class="text-[9px] text-light_gray font-medium">12m ago</span>
                  </div>
                  <p class="text-xs text-light_gray leading-relaxed">
                    The <span class="text-black font-semibold">Highway Blockade Alert</span> has been closed. Authorities confirm traffic is flowing smoothly.
                  </p>
                </div>
              </div>

              <!-- Push Card 3 -->
              <div class="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex gap-4 transition-all hover:translate-x-1 duration-300">
                <div class="w-10 h-10 rounded-xl bg-orange-100 text-secondary flex items-center justify-center text-lg shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-black">Local Safety Alert</span>
                    <span class="text-[9px] text-light_gray font-medium">1h ago</span>
                  </div>
                  <p class="text-xs text-light_gray leading-relaxed">
                    Heavy rain forecast. High risk of localized pooling at <span class="text-black font-semibold">3rd Boulevard Avenue</span>. Use caution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const signaturesCount = ref(820)
const campaignSigned = ref(false)

const supportCampaign = () => {
  if (campaignSigned.value) return
  signaturesCount.value++
  campaignSigned.value = true
}

// Page scroll helper integrating GSAP instance
const scrollPage = (e: Event, selector: string) => {
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
</script>

<style scoped>
.fade-log-enter-active, .fade-log-leave-active {
  transition: all 0.4s ease;
}
.fade-log-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
