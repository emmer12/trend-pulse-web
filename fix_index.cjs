const fs = require('fs');
let c = fs.readFileSync('app/pages/index.vue', 'utf8');

const s = c.indexOf("<div class='pt-32 home-hero-gradient-bg bg-gray-200'>");
const e = c.indexOf('<!-- Who am I? Section -->');

const newHero = `   <div class='pt-6 md:pt-32 skills-gradient-bg bg-[#F3F4F6]'>
     <section class="mx-auto text-center w-full">

       <!-- Desktop: overlapping image+text layout -->
       <div class="relative w-full hidden md:block">
         <h1
           class="md:text-8xl font-semibold text-light_gray absolute top-[8%] z-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
           style="font-family: 'Lato', sans-serif; font-weight: 600; line-height: 100%; letter-spacing: -0.02em;"
         >
           Franklyn O. Ohakim,
         </h1>
         <img src="~/assets/images/my.png" alt="Franklyn O. Ohakim" class="w-full object-cover relative z-10" />
       </div>

       <!-- Mobile: plain full-width image -->
       <div class="md:hidden">
         <img src="~/assets/images/my.png" alt="Franklyn O. Ohakim" class="w-full object-cover" />
       </div>

       <!-- Content -->
       <div class="md:mt-[-120px] container-x py-8 md:py-0">

         <!-- Tags -->
         <div class="flex items-center gap-3 mb-4 justify-center flex-wrap">
           <span style="width:85.3px;height:15.3px;border-radius:41.5px;border:0.04px solid #DEE2E6;padding:4.15px;background:linear-gradient(90deg,rgba(222,226,230,0.6) 0%,#FFFFFF 50%,rgba(222,226,230,0.7) 100%);display:inline-flex;align-items:center;justify-content:center;font-family:'Lato',sans-serif;font-weight:400;font-size:10px;line-height:100%;letter-spacing:-0.02em;color:#717171;white-space:nowrap;">Security Strategist</span>
           <span style="width:85.3px;height:15.3px;border-radius:41.5px;border:0.04px solid #DEE2E6;padding:4.15px;background:linear-gradient(90deg,rgba(222,226,230,0.6) 0%,#FFFFFF 50%,rgba(222,226,230,0.7) 100%);display:inline-flex;align-items:center;justify-content:center;font-family:'Lato',sans-serif;font-weight:400;font-size:10px;line-height:100%;letter-spacing:-0.02em;color:#717171;white-space:nowrap;">Technology Expert</span>
           <span style="width:85.3px;height:15.3px;border-radius:41.5px;border:0.04px solid #DEE2E6;padding:4.15px;background:linear-gradient(90deg,rgba(222,226,230,0.6) 0%,#FFFFFF 50%,rgba(222,226,230,0.7) 100%);display:inline-flex;align-items:center;justify-content:center;font-family:'Lato',sans-serif;font-weight:400;font-size:10px;line-height:100%;letter-spacing:-0.02em;color:#717171;white-space:nowrap;">Business Leader</span>
         </div>

         <!-- Name -->
         <h1
           class="font-semibold text-gray-900 mb-2"
           style="font-family: 'Lato', sans-serif; font-weight: 600; font-size: clamp(36px, 8vw, 96px) !important; line-height: 100% !important; letter-spacing: -0.02em;"
         >
           Franklyn O. Ohakim,
         </h1>

         <!-- Credentials -->
         <h2
           class="font-semibold mb-6 text-center"
           style="font-family: 'Lato', sans-serif; font-weight: 600; font-size: clamp(40px, 7vw, 96px) !important; line-height: 100% !important; letter-spacing: -0.02em; color: #717171;"
         >
           KSC, BSc, MBA
         </h2>

         <p class="max-w-2xl mx-auto text-base md:text-xl tracking-tight text-light_gray mb-8 leading-relaxed font-medium">
           Helping organizations strengthen security operations, leverage technology, and build resilient leadership frameworks.
         </p>

         <div class="flex flex-row items-center justify-center gap-4 relative z-20">
           <NuxtLink to="/contact">
             <button style="width:169px;height:38px;border-radius:41.5px;padding:14px 24px;background:#1C1C1C;color:#fff;font-family:'Lato',sans-serif;font-weight:500;font-size:14px;line-height:100%;letter-spacing:-0.02em;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;" class="md:hidden">Book a Consultation</button>
             <UiButton text="Book a Consultation" variant="primary" size="lg" class="hidden md:inline-flex" />
           </NuxtLink>
           <NuxtLink to="/profile">
             <button style="width:169px;height:38px;border-radius:41.5px;padding:14px 24px;background:linear-gradient(90deg,rgba(222,226,230,0.3) 0%,#FFFFFF 50%,rgba(222,226,230,0.4) 100%);color:#1C1C1C;font-family:'Lato',sans-serif;font-weight:500;font-size:14px;line-height:100%;letter-spacing:-0.02em;border:0.5px solid #DEE2E6;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;" class="md:hidden">View Profile</button>
             <UiButton text="View Profile" variant="secondary" size="lg" class="hidden md:inline-flex" />
           </NuxtLink>
         </div>
       </div>
     </section>
    </div>

`;

c = c.substring(0, s) + newHero + c.substring(e);

c = c.replace(/<h3 class="font-medium text-gray-500 text-\[26px\] leading-tight max-w-\[200px\]">/g, `<h3 class="text-gray-500 max-w-[200px]" style="font-family: 'Lato', sans-serif; font-weight: 500; font-size: 20px; line-height: 120%; letter-spacing: -0.02em;">`);
c = c.replace(/<h3 class="font-medium text-gray-500 text-\[26px\] leading-tight max-w-\[350px\]">/g, `<h3 class="text-gray-500 max-w-[350px]" style="font-family: 'Lato', sans-serif; font-weight: 500; font-size: 20px; line-height: 120%; letter-spacing: -0.02em;">`);

fs.writeFileSync('app/pages/index.vue', c, 'utf8');
console.log('done');
