<template>
  <section class="relative min-h-screen pt-32 pb-20 overflow-hidden grid-bg flex items-center">
    <!-- Decorative background blobs and grids -->
    <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full radial-glow pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full radial-glow-orange pointer-events-none"></div>

    <div class="container-x w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Text Columns & Action Calls -->
        <div class="lg:col-span-6 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary">◆ Community Safety Platform</span>
          </div>

          <h1 class="font-serif text-5xl sm:text-6xl md:text-7xl text-black leading-[1.05] tracking-tight mb-6">
            Stay Ahead.<br />
            Stay <span class="inline-flex items-center min-w-[150px] sm:min-w-[220px] min-h-[48px] sm:min-h-[64px]">
              <span class="italic text-primary relative inline-block pb-1">
                {{ displayText }}
                <span class="w-[3px] h-[32px] sm:h-[45px] bg-primary animate-blink ml-0.5 inline-block align-middle"></span>
                
                <!-- Retyping Dynamic SVG Underline -->
                <svg class="absolute left-0 -bottom-1 w-full h-[6px] sm:h-[8px] text-[#F1650D] overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path 
                    d="M0,7 C30,2 70,2 100,7" 
                    stroke="currentColor" 
                    stroke-width="3" 
                    fill="none" 
                    stroke-linecap="round"
                    :style="underlineStyle"
                  />
                </svg>
              </span>
            </span>.<br />
            Stay <span class="italic text-secondary">Safe</span>.
          </h1>

          <p class="font-sans text-lg md:text-xl text-[#344054] mb-4 leading-relaxed font-medium">
            Real-time community alerts, safety updates, and live incident tracking—all in one place.
          </p>

          <p class="font-sans text-sm md:text-base text-light_gray mb-8 max-w-lg leading-relaxed">
            TrendPulse helps you stay connected to what matters around you, instantly. Receive verified updates and make an impact on community awareness.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#features" @click="scrollPage($event, '#features')" class="inline-flex items-center justify-center rounded-[200px] px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary_hover transition-colors text-center">
              Get Started
            </a>
            <a href="#features" @click="scrollPage($event, '#features')" class="inline-flex items-center justify-center rounded-[200px] px-8 py-4 text-base font-semibold text-[#F1650D] border border-[#F1650D]/20 hover:bg-[#F1650D]/5 transition-colors text-center">
              Explore Features
            </a>
          </div>

          <!-- Trust stats -->
          <div class="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-[#085E40]/10 w-full text-sm font-medium text-[#344054]">
            <div class="flex items-center gap-2">
              <span class="text-primary text-xl">★</span>
              <span>100% Verified Updates</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-secondary text-xl">✦</span>
              <span>Real-time Community Alerts</span>
            </div>
          </div>
        </div>

        <!-- Phone Mockup Container -->
        <div class="lg:col-span-6 flex items-center justify-center relative w-full mt-8 lg:mt-0 overflow-visible">
          
          <!-- Ambient Glow Behind Phone -->
          <div class="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] bg-primary/10 rounded-full blur-3xl -z-20 animate-pulse"></div>

          <!-- Rolling Dashed Radar Rings -->
          <div class="absolute w-[360px] h-[360px] sm:w-[445px] sm:h-[445px] -z-10 pointer-events-none flex items-center justify-center">
            <svg class="w-full h-full text-primary/20 animate-spin-clockwise" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" />
            </svg>
          </div>
          <div class="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] -z-10 pointer-events-none flex items-center justify-center">
            <svg class="w-full h-full text-secondary/25 animate-spin-counter" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3" />
            </svg>
          </div>

          <!-- Winding Path Line behind phone -->
          <div class="absolute inset-0 -z-15 pointer-events-none hidden sm:flex items-center justify-center overflow-visible">
            <svg class="w-[440px] h-[440px] text-secondary/20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20,180 C 40,140 10,80 70,100 C 130,120 120,40 180,60" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="2 6" />
            </svg>
          </div>

          <!-- Curved card backdrop container behind the phone -->
          <div class="absolute w-[350px] h-[600px] bg-[#FAF9F5]/80 border border-[#D0D5DD]/30 rounded-[56px] -z-10 shadow-sm hidden md:flex items-start justify-between p-8 select-none pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-[9px] font-mono tracking-widest text-[#F1650D] font-extrabold uppercase slanted-text">Everything in one place</span>
          </div>

          <!-- Sleek iPhone Pro Chassis Mockup -->
          <div class="relative w-[280px] h-[565px] bg-[#1a1a1a] rounded-[48px] p-[8px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-700/80 transition-transform duration-500 hover:scale-[1.01] z-10">
            
            <!-- Side buttons -->
            <div class="absolute top-28 -left-[2px] w-[2px] h-8 bg-gray-800 rounded-l-sm border-r border-gray-900"></div>
            <div class="absolute top-40 -left-[2px] w-[2px] h-12 bg-gray-800 rounded-l-sm border-r border-gray-900"></div>
            <div class="absolute top-56 -left-[2px] w-[2px] h-12 bg-gray-800 rounded-l-sm border-r border-gray-900"></div>
            <div class="absolute top-48 -right-[2px] w-[2px] h-16 bg-gray-800 rounded-r-sm border-l border-gray-900"></div>

            <!-- Dynamic Island Notch -->
            <div class="absolute top-[20px] left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-35 flex items-center justify-end px-3">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0d1f3d] opacity-90 border border-white/5 mr-0.5"></span>
            </div>

            <!-- Screen Viewport inside the iPhone bezel -->
            <div class="w-full h-full bg-[#FCFAF6] rounded-[40px] overflow-hidden relative flex flex-col pt-8 text-black border border-gray-950">
              
              <!-- Glass sheen reflections overlay -->
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-25"></div>

              <!-- High-Fidelity iOS Status Bar -->
              <div class="absolute top-2.5 left-0 right-0 px-5 flex justify-between items-center text-[8.5px] font-extrabold text-black z-30 select-none pointer-events-none">
                <div class="flex items-center gap-1">
                  <span>8:38</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-2.5 h-2.5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </div>
                <div class="flex items-center gap-1">
                  <!-- Cellular signal bars -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-2.5 h-2.5">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.839 1.875 1.875v9.375c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v4.875c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 18V13.125Z" />
                  </svg>
                  <!-- Wifi -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-2.5 h-2.5">
                    <path fill-rule="evenodd" d="M1.371 8.143a.75.75 0 0 1 1.06 0 10.5 10.5 0 0 1 14.138 0 .75.75 0 1 1-1.06 1.06 9 9 0 0 0-12.018 0 .75.75 0 0 1-1.06 0ZM4.55 11.325a.75.75 0 0 1 1.06 0 6 6 0 0 1 7.78 0 .75.75 0 1 1-1.06 1.06 4.5 4.5 0 0 0-5.66 0 .75.75 0 0 1-1.06 0ZM7.73 14.506a.75.75 0 0 1 1.061 0 1.5 1.5 0 0 1 2.42 0 .75.75 0 0 1-1.06 1.06.25.25 0 0 0-.3 0 .75.75 0 0 1-1.06-1.06Z" clip-rule="evenodd" />
                  </svg>
                  <!-- Battery horizontal pill -->
                  <div class="w-3.5 h-2.5 border border-black rounded-[3px] p-[0.75px] flex items-center relative ml-0.5">
                    <div class="h-full w-[80%] bg-black rounded-[1px]"></div>
                    <div class="absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[1px] h-[2px] bg-black rounded-r-[0.5px]"></div>
                  </div>
                </div>
              </div>

              <!-- High-Fidelity Mobile Browser Address/URL Bar (matches my.useoja.com) -->
              <div class="px-3 pb-1.5 pt-6.5 border-b border-gray-100 bg-white flex items-center justify-between gap-1.5">
                <div class="flex-1 bg-gray-100 rounded-xl py-1 px-2.5 flex items-center justify-between text-[8px] text-gray-500">
                  <div class="flex items-center gap-1">
                    <!-- Padlock icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="font-bold text-gray-700">trendpulse.app/lagos</span>
                  </div>
                  <span class="text-[8px] text-gray-400">↻</span>
                </div>
                <!-- Share store / Copy button -->
                <button class="p-1 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 10.742l-2.622 1.311a3 3 0 110-2.828l2.622 1.311m0 0a3 3 0 115.656 2.828 3 3 0 01-5.656-2.828z" />
                  </svg>
                </button>
              </div>

              <!-- Screen Body Scroll Content -->
              <div class="flex-1 overflow-y-auto px-3 py-3 space-y-3 no-scrollbar pb-6">
                
                <!-- App Sector Top Header -->
                <div class="flex flex-col gap-2 bg-[#085E40] text-white rounded-2xl p-3 shadow-md">
                  <!-- Watch banner -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-1.5">
                      <div class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[9px]">L</div>
                      <span class="text-[9px] font-bold">Lagos Safety Watch</span>
                    </div>
                    <button class="bg-secondary hover:bg-secondary/95 text-white text-[8px] font-bold px-2 py-0.5 rounded-md transition-all">
                      Share Watch
                    </button>
                  </div>

                  <!-- Grid of Stats Counter -->
                  <div class="grid grid-cols-4 gap-1 mt-2 pt-2 border-t border-white/10 text-center">
                    <div class="flex flex-col">
                      <span class="text-[10px] font-extrabold text-secondary">3</span>
                      <span class="text-[7px] opacity-60 uppercase font-bold tracking-wider">Critical</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-extrabold text-white">14</span>
                      <span class="text-[7px] opacity-60 uppercase font-bold tracking-wider">Active</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-extrabold text-white">820</span>
                      <span class="text-[7px] opacity-60 uppercase font-bold tracking-wider">Support</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-extrabold text-white">1.2K</span>
                      <span class="text-[7px] opacity-60 uppercase font-bold tracking-wider">Votes</span>
                    </div>
                  </div>
                </div>

                <!-- Navigation toggle buttons -->
                <div class="flex items-center justify-between px-1">
                  <span class="text-xs font-extrabold text-black">
                    {{ activeScreen === 'alerts' ? 'Active Alerts' : 'Live Area Radar' }}
                  </span>
                  <span class="text-[10px] text-primary font-semibold cursor-pointer hover:underline" @click="toggleScreen">
                    {{ activeScreen === 'alerts' ? 'View Map' : 'View Feed' }}
                  </span>
                </div>

                <!-- Screen Transitions -->
                <transition name="fade-screen" mode="out-in">
                  
                  <!-- State 1: Active Alerts Feed -->
                  <div v-if="activeScreen === 'alerts'" key="alerts" class="space-y-3">
                    
                    <!-- Needs Attention list (with colored icon boxes and vector chevrons) -->
                    <div class="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm flex flex-col gap-2.5">
                      <span class="text-[8px] font-extrabold text-light_gray uppercase tracking-widest px-0.5">NEEDS ATTENTION</span>
                      
                      <!-- Row 1 -->
                      <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                        <div class="flex items-center gap-2.5">
                          <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 text-[10px]">
                            📍
                          </div>
                          <div class="flex flex-col text-left">
                            <span class="font-bold text-[9.5px] text-black leading-tight">Complete watch setup</span>
                            <span class="text-[8px] text-light_gray">Add home address range</span>
                          </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <!-- Row 2 -->
                      <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                        <div class="flex items-center gap-2.5">
                          <div class="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 text-[10px]">
                            ⚠️
                          </div>
                          <div class="flex flex-col text-left">
                            <span class="font-bold text-[9.5px] text-black leading-tight">1 highway road hazard</span>
                            <span class="text-[8px] text-light_gray">Reported detour lanes</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <span class="bg-[#F1650D] text-white text-[7.5px] px-1.5 py-0.25 rounded-full font-bold">1</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      <!-- Row 3 -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2.5">
                          <div class="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0 text-[10px]">
                            🚨
                          </div>
                          <div class="flex flex-col text-left">
                            <span class="font-bold text-[9.5px] text-black leading-tight">Emergency campaign</span>
                            <span class="text-[8px] text-light_gray">Initiative support signatures</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <span class="bg-red-500 text-white text-[7.5px] px-1.5 py-0.25 rounded-full font-bold">3</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <!-- Toolbox quick grid -->
                    <div class="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm flex flex-col gap-2.5">
                      <div class="flex justify-between items-center px-0.5">
                        <div class="flex flex-col text-left">
                          <span class="text-[9px] font-bold text-black leading-tight">Toolbox</span>
                          <span class="text-[7.5px] text-light_gray">Jump to the tools you use most</span>
                        </div>
                        <span class="text-[8.5px] text-primary font-bold hover:underline cursor-pointer">Show all</span>
                      </div>
                      
                      <div class="grid grid-cols-4 gap-1.5 text-center mt-1">
                        <div class="flex flex-col items-center gap-1.5 p-1 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <span class="text-[11px]">✍️</span>
                          <span class="text-[7.5px] font-bold text-gray-850">New Report</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 p-1 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <span class="text-[11px]">🛡️</span>
                          <span class="text-[7.5px] font-bold text-gray-850">Verify Alert</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 p-1 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <span class="text-[11px]">📣</span>
                          <span class="text-[7.5px] font-bold text-gray-850">Campaigns</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 p-1 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <span class="text-[11px]">📜</span>
                          <span class="text-[7.5px] font-bold text-gray-850">Watch Log</span>
                        </div>
                      </div>
                    </div>

                    <!-- Recent Reports (with user initial avatar icons & dates) -->
                    <div class="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm flex flex-col gap-2">
                      <div class="flex items-center justify-between">
                        <span class="text-[9px] font-bold text-black">Recent Reports</span>
                        <a href="#features" class="text-[8.5px] text-primary font-bold hover:underline">See all</a>
                      </div>

                      <div class="grid grid-cols-3 text-[8.5px] font-bold text-gray-400 border-b border-gray-150 pb-1.5 mt-1">
                        <span>REPORTER</span>
                        <span class="text-center">TYPE</span>
                        <span class="text-right">STATUS</span>
                      </div>

                      <div class="grid grid-cols-3 text-[9.5px] font-medium text-gray-800 pt-1.5 items-center">
                        <div class="flex items-center gap-1.5 truncate">
                          <div class="w-5 h-5 rounded-full bg-[#FAF9F5] border border-gray-200 flex items-center justify-center font-bold text-[7px] text-gray-700 shrink-0">AB</div>
                          <div class="flex flex-col truncate text-left">
                            <span class="font-bold truncate text-[8.5px]">Adunni B.</span>
                            <span class="text-[7.5px] text-light_gray">May 12, 10:15 AM</span>
                          </div>
                        </div>
                        <span class="text-center truncate">⚠️ Hazard</span>
                        <span class="text-right">
                          <span class="bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded-full font-bold text-[7.5px] border border-orange-100">Processing</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- State 2: Live Radar Map (Dynamic SVG Render) -->
                  <div v-else key="map" class="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3 relative min-h-[220px] overflow-hidden justify-center items-center">
                    <svg class="w-full h-32 text-gray-200" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 50 C 50 10, 80 90, 120 40 S 170 80, 190 20" stroke="#E4E7EC" stroke-width="1.5" stroke-dasharray="3 3"/>
                      <path d="M30 20 C 70 80, 100 10, 150 70" stroke="#E4E7EC" stroke-width="1.5" stroke-dasharray="3 3"/>
                      <circle cx="100" cy="50" r="35" stroke="#085E40" stroke-width="1" stroke-opacity="0.2" fill="none"/>
                      <circle cx="100" cy="50" r="15" stroke="#085E40" stroke-width="1" stroke-opacity="0.4" fill="none"/>
                      
                      <circle cx="100" cy="50" r="4" fill="#085E40"/>
                      
                      <g transform="translate(60, 30)">
                        <circle cx="0" cy="0" r="5" fill="#EF4444" class="animate-ping"/>
                        <circle cx="0" cy="0" r="3.5" fill="#EF4444"/>
                      </g>
                      <g transform="translate(140, 65)">
                        <circle cx="0" cy="0" r="5" fill="#F1650D" class="animate-ping"/>
                        <circle cx="0" cy="0" r="3.5" fill="#F1650D"/>
                      </g>
                    </svg>
                    <div class="text-center">
                      <p class="text-[10px] font-bold text-black">2 Alerts Active Nearby</p>
                      <p class="text-[8px] text-light_gray">Radius setup: 2.5 kilometers</p>
                    </div>
                  </div>
                </transition>
              </div>

              <!-- Phone Bottom Tabbar -->
              <div class="bg-white border-t border-gray-150 py-2 px-3 flex justify-between items-center z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] relative">
                <!-- Tab 1: Home -->
                <button @click="activeScreen = 'alerts'" class="flex flex-col items-center gap-0.5 focus:outline-none transition-all active:scale-95 duration-200" :class="activeScreen === 'alerts' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span class="text-[7.5px] font-bold">Home</span>
                </button>
                
                <!-- Tab 2: Radar -->
                <button @click="activeScreen = 'map'" class="flex flex-col items-center gap-0.5 focus:outline-none transition-all active:scale-95 duration-200" :class="activeScreen === 'map' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span class="text-[7.5px] font-bold">Radar</span>
                </button>

                <!-- Tab 3: Reports -->
                <button @click="activeScreen = 'alerts'" class="flex flex-col items-center gap-0.5 focus:outline-none transition-all active:scale-95 duration-200 text-gray-400 hover:text-gray-600 relative">
                  <span class="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span class="text-[7.5px] font-bold">Reports</span>
                </button>

                <!-- Tab 4: Campaigns -->
                <button @click="activeScreen = 'alerts'" class="flex flex-col items-center gap-0.5 focus:outline-none transition-all active:scale-95 duration-200 text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  <span class="text-[7.5px] font-bold">Campaigns</span>
                </button>

                <!-- Tab 5: Profile -->
                <button @click="activeScreen = 'alerts'" class="flex flex-col items-center gap-0.5 focus:outline-none transition-all active:scale-95 duration-200 text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="text-[7.5px] font-bold">Profile</span>
                </button>

                <!-- Sleek Home Indicator bar -->
                <div class="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Floating details badges surrounding mockup -->
          <!-- Badge 1: Top-Left (New Alert) -->
          <div class="hidden sm:flex absolute top-12 -left-12 bg-white border border-[#D0D5DD]/80 p-3 rounded-2xl shadow-xl items-center gap-3 animate-float max-w-[210px] z-30">
            <div class="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-primary text-xs shrink-0">
              🔔
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[9px] font-bold text-black">New Alert - Ikeja</span>
              <span class="text-[9px] text-[#085E40] font-extrabold mt-0.5">Verified Safe Zone</span>
            </div>
          </div>

          <!-- Badge 2: Right-Center (Campaign Support) -->
          <div class="hidden sm:flex absolute top-44 -right-16 bg-white border border-[#D0D5DD]/80 p-3 rounded-2xl shadow-xl items-center gap-3 animate-float-delayed max-w-[200px] z-30">
            <div class="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-secondary text-xs shrink-0">
              ✍️
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[9px] font-bold text-black">Support registered</span>
              <span class="text-[9px] text-secondary font-extrabold mt-0.5">+1 signature verified</span>
            </div>
          </div>

          <!-- Badge 3: Bottom-Left (Alert Status) -->
          <div class="hidden sm:flex absolute bottom-28 -left-16 bg-white border border-[#D0D5DD]/80 p-3 rounded-2xl shadow-xl items-center gap-3 animate-float max-w-[200px] z-30">
            <div class="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs shrink-0">
              📍
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[9px] font-bold text-black">Location Status</span>
              <span class="text-[9px] text-light_gray mt-0.5">3 active watches nearby</span>
            </div>
          </div>

          <!-- Badge 4: Bottom-Right (Active Stats) -->
          <div class="hidden sm:flex absolute bottom-12 -right-8 bg-white border border-[#D0D5DD]/80 p-3 rounded-2xl shadow-xl items-center gap-3 animate-float-delayed max-w-[170px] z-30">
            <div class="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 text-xs shrink-0">
              📈
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[9px] font-bold text-black">Engagement up 44%</span>
              <span class="text-[9px] text-light_gray mt-0.5">vs. last week</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Toggled phone mockup viewport active screen state
const activeScreen = ref('alerts')

const toggleScreen = () => {
  activeScreen.value = activeScreen.value === 'alerts' ? 'map' : 'alerts'
}

// Typing animation setup for "Informed", "Connected", "Protected"
const words = ['Informed', 'Connected', 'Protected']
const currentWordIndex = ref(0)
const displayText = ref('')
const isDeleting = ref(false)
const typingSpeed = ref(150)
let typingTimeout: any = null

const underlineStyle = computed(() => {
  const i = currentWordIndex.value % words.length
  const fullWord = words[i]
  if (!fullWord) return { strokeDasharray: '100', strokeDashoffset: '100' }

  const typedLength = displayText.value.length
  const totalLength = fullWord.length
  const progress = totalLength > 0 ? (typedLength / totalLength) : 0
  const offset = 100 - (progress * 100)

  return {
    strokeDasharray: '100',
    strokeDashoffset: offset.toString(),
    transition: 'stroke-dashoffset 0.08s ease-out'
  }
})

const tick = () => {
  const i = currentWordIndex.value % words.length
  const fullWord = words[i]

  if (isDeleting.value) {
    displayText.value = fullWord.substring(0, displayText.value.length - 1)
    typingSpeed.value = 60
  } else {
    displayText.value = fullWord.substring(0, displayText.value.length + 1)
    typingSpeed.value = 120
  }

  if (!isDeleting.value && displayText.value === fullWord) {
    isDeleting.value = true
    typingSpeed.value = 2500 // Pause showing the word
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    currentWordIndex.value++
    typingSpeed.value = 400 // Pause before typing the next word
  }

  typingTimeout = setTimeout(tick, typingSpeed.value)
}

onMounted(() => {
  typingTimeout = setTimeout(tick, 500)
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
})

// GSAP ScrollSmoother custom page scroll animator
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
.sketch-underline {
  position: relative;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 0.8s step-end infinite;
}

/* Screen transition animation rules */
.fade-screen-enter-active, .fade-screen-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-screen-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.fade-screen-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Rolling animations for dashed rings at the back of the phone mockup */
@keyframes spinClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinCounter {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.animate-spin-clockwise {
  animation: spinClockwise 30s linear infinite;
  transform-origin: center;
}

.animate-spin-counter {
  animation: spinCounter 35s linear infinite;
  transform-origin: center;
}

/* Float animations for secondary detail cards */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

@keyframes float-delayed {
  0% { transform: translateY(0px); }
  50% { transform: translateY(8px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}

/* Slanted top right text styling matching Oja screenshot */
.slanted-text {
  transform: rotate(-3deg);
  display: inline-block;
}

/* Hide scrollbars on phone feeds */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
