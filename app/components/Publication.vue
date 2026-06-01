<script>

   defineProps({
    pub:{
        type:Object
    }
   })

</script>


<template>
    <div class="bg-white space-y-4.5 rounded-[12px] md:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 px-3 py-2">
          <!-- Image -->
          <NuxtLink :to="'/publications/' + pub.slug" class=" block">
            <div class="overflow-hidden rounded-[16px] h-[362px]">
              <img 
                :src="pub.image" 
                :alt="pub.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              >
            </div>
          </NuxtLink>

          <!-- Content -->
          <div class="pb-2 flex flex-col flex-1">
            <!-- Author Meta -->
            <div class="flex items-center gap-2 mb-4">
              <img :src="myAvatar" alt="Franklyn Ohakim" class="w-6 h-6 rounded-full object-cover">
              <div class="flex items-center gap-1.5 text-[11px] text-gray-400">
                <span class="font-medium text-gray-600">Franklyn Ohakim</span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{{ pub.date }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{{ pub.readTime }}</span>
              </div>
            </div>

            <!-- Title -->
            <NuxtLink :to="'/publications/' + pub.slug">
              <h2 class="text-xl lg:text-[22px] font-bold leading-tight text-black mb-4 group-hover:text-[#F48220] transition-colors line-clamp-3">
                {{ pub.title }}
              </h2>
            </NuxtLink>

            <!-- Excerpt -->
            <p class="text-gray-500 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
              {{ pub.excerpt }}
            </p>

            <!-- Stats & Actions -->
            <div class="mt-auto">
              <div class="flex items-center gap-4 mb-6 text-gray-400 text-xs">
                <div class="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>{{ pub.views_count || 0 }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>{{ pub.likes_count || 0 }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2 flex-1">
                  <!-- <NuxtLink :to="'/publications/' + pub.slug" class="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap inline-block text-center">
                    Read
                  </NuxtLink> -->

                  <UiButton text="Share" size="md" :to="'/publications/' + pub.slug" />
                  <UiButton class="flex-1" :text="pub.shared ? 'Copied Link!' : 'Share Post' " variant="secondary" size="md" @click.stop.prevent="handleShare(pub)" />
                 
                </div>
                <button 
                  @click.stop.prevent="handleLike(pub)"
                  class="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300"
                  :class="pub.liked ? 'bg-[#FFF5EE] border-[#FFE4D6] text-[#F48220]' : 'border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50'"
                >
                  <svg 
                    width="18" height="18" viewBox="0 0 24 24" 
                    :fill="pub.liked ? '#F48220' : 'none'" 
                    :stroke="pub.liked ? '#F48220' : 'currentColor'" 
                    stroke-width="2"
                    class="transition-transform duration-300"
                    :class="{ 'scale-110': pub.liked }"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
</template>

