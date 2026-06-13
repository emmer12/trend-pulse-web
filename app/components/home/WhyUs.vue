<template>
  <section id="why-us" class="py-24 bg-[#FCFAF6] border-t border-[#085E40]/5 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow opacity-30 pointer-events-none"></div>

    <div class="container-x relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-secondary mb-3 inline-block">◆ WHY CHOOSE US</span>
        <h2 class="font-serif text-4xl sm:text-5xl text-black mb-4 leading-tight">
          Why <span class="italic text-primary">SentraPulse</span>
        </h2>
        <p class="font-sans text-sm sm:text-base text-light_gray">
          A secure, fast, and transparent platform that empowers communities to communicate safety issues, coordinate, and stay protected.
        </p>
      </div>

      <!-- Bento grid layout structure for key selling points -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
        
        <!-- 1. Real-time community reporting (Col span 3) -->
        <div class="md:col-span-3 bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-black mt-2">Real-time Community Reporting</h3>
            <p class="text-xs sm:text-sm text-light_gray leading-relaxed">
              Report critical incidents in your neighborhood instantly. Help neighbors stay informed of road closures, safety hazards, or power outages as they occur.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-50 text-xs font-semibold text-primary flex items-center gap-1.5">
            <span>Instant Broadcast Enabled</span>
            <span>➔</span>
          </div>
        </div>

        <!-- 2. Verified campaign updates (Col span 3) -->
        <div class="md:col-span-3 bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-orange-100 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-black mt-2">Verified Campaign Updates</h3>
            <p class="text-xs sm:text-sm text-light_gray leading-relaxed">
              Every critical campaign or incident status is subjected to verification by trusted community leads, filtering out spam or misinformation.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-50 text-xs font-semibold text-secondary flex items-center gap-1.5">
            <span>Zero Spam Guarantee</span>
            <span>➔</span>
          </div>
        </div>

        <!-- 3. Smart notifications (Col span 2) -->
        <div class="md:col-span-2 bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#085E40]/5 text-[#085E40] flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-black mt-2">Smart Notifications</h3>
            <p class="text-xs text-light_gray leading-relaxed">
              Tailored notifications that alert you only when incidents occur within your defined neighborhood radius.
            </p>
          </div>
        </div>

        <!-- 4. Local safety awareness (Col span 2) -->
        <div class="md:col-span-2 bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-.5A2 2 0 0113 4V3.935M12 22a10 10 0 100-20 10 10 0 000 20z" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-black mt-2">Local Safety Awareness</h3>
            <p class="text-xs text-light_gray leading-relaxed">
              Keep a finger on the pulse of your immediate environment. Discover active campaigns and join local watches.
            </p>
          </div>
        </div>

        <!-- 5. Easy reporting & tracking system (Col span 2) -->
        <div class="md:col-span-2 bg-white border border-gray-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 class="text-base font-bold text-black mt-2">Easy Tracking System</h3>
            <p class="text-xs text-light_gray leading-relaxed">
              Submit an issue in three clicks, upload photos, and track the progress as safety officials resolve it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
