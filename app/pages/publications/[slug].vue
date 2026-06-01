<template>
  <div class="container-x pt-6 md:pt-32 pb-24 lg:pb-32">
    <section class="mt-20 lg:mt-32">
      <!-- Back Button (Outside Card on Mobile) -->
      <NuxtLink to="/publications" class="inline-flex items-center justify-center gap-[4px] text-gray-700 w-[76px] h-[34px] md:w-[99px] md:h-[44px] rounded-full transition-all hover:opacity-80 mb-4 md:mb-10 bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="group-hover:-translate-x-1 transition-transform md:w-[18px] md:h-[18px]">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span class="text-[13px] md:text-[16px] font-medium leading-none tracking-tight">Back</span>
      </NuxtLink>

      <div v-if="post">
        <div class="bg-white rounded-[24px] md:rounded-[40px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-4 md:p-12 lg:p-16 border border-gray-50 mb-32 md:mt-0">
          
          <!-- Metadata -->
          <div class="flex items-center justify-between mb-6  w-full">
            <div class="flex items-center gap-[6.59px] md:gap-4 md:bg-[#F7F7F7] bg-[#F7F7F7] rounded-full md:pr-8 pt-[4.94px] pr-[8.23px] pb-[4.94px] pl-[4.94px] p-1.5 w-fit">
              <div class="w-[21px] h-[21px] rounded-full shrink-0 border border-[#F48220]">
                <img :src="myAvatar" alt="Franklyn Ohakim" class="w-full h-full rounded-full object-cover">
              </div>
              <div class="flex items-center gap-[6.59px] md:gap-4 text-xs text-gray-500 md:text-gray-700 font-medium md:font-normal whitespace-nowrap overflow-hidden text-ellipsis leading-none mt-[1px]">
                <span class="text-gray-900">Franklyn Ohakim</span>
                <span class="w-[3px] h-[3px] md:w-2 md:h-2 rounded-full bg-gray-300 md:bg-[#F48220]"></span>
                <span>{{ post.date }}</span>
                <span class="w-[3px] h-[3px] md:w-2 md:h-2 rounded-full bg-gray-300 md:bg-[#F48220]"></span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>
            
            <button 
              @click="toggleLike" 
              class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all duration-300 shrink-0 ml-2"
              :class="isLiked ? 'bg-[#FFF5EE] border-[#FFE4D6] text-[#F48220]' : 'bg-white border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'"
            >
              <svg 
                width="14" height="14" viewBox="0 0 24 24" 
                :fill="isLiked ? '#F48220' : 'none'" 
                :stroke="isLiked ? '#F48220' : 'currentColor'" 
                stroke-width="2"
                class="transition-transform duration-300 md:w-[18px] md:h-[18px]"
                :class="{ 'scale-110': isLiked }"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          <!-- Title -->
          <h1 class="text-[22px] md:text-[32px] font-bold leading-tight text-gray-900 mb-3 tracking-tight">
            {{ post.title }}
          </h1>

             <!-- Stats -->
            <div class="flex items-center gap-4 text-gray-400 text-[13px] font-medium pl-1 mb-5">
              <div class="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>{{ localViewsCount }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>{{ localLikesCount }}</span>
              </div>
            </div>


          <!-- Share Row -->
            <div class="flex items-center gap-3 mb-4">
               <UiButton class="flex-1" :text="isShared ? 'Copied Link!' : 'Share'" variant="primary" size="md" @click="handleShare" />


              <div class="flex items-center gap-4 overflow-x-auto pb-1 no-scrollbar w-full " >
                 <button @click="shareOnPlatform('instagram')"  class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsInstagram />
                 </button>
                 <button  @click="shareOnPlatform('x')"  class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsX />
                 </button>
                  <button @click="shareOnPlatform('facebook')" class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsFacebook />
                 </button>
                  <button @click="shareOnPlatform('youtube')" class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsYoutube />
                 </button>
              </div>

            </div>


             

          <!-- Hero Image -->
          <div class="rounded-[20px] md:rounded-[24px] overflow-hidden mb-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
            <img :src="post.image" :alt="post.title" class="w-full aspect-[4/3] md:aspect-video object-cover animate-fade-in">
          </div>

          <!-- Action Bar (Stats & Share) -->
       
        <!-- Article Content -->
        <div class="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-relaxed mb-20 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-headings:font-black prose-headings:text-black prose-a:text-[#F48220] prose-img:rounded-3xl" style="font-family: 'Lato', sans-serif;">
          <div v-html="post.content"></div>
        </div>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mb-12">
          <span v-for="tag in post.tags" :key="tag" class="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-widest hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
            {{ tag }}
          </span>
        </div>

        <!-- Bottom Share -->
        <div class="flex justify-center pt-8 mb-0">
          <div class="flex items-center gap-3 mb-4">
               <UiButton class="flex-1" :text="isShared ? 'Copied Link!' : 'Share'" variant="primary" size="md" @click="handleShare" />


              <div class="flex items-center gap-4 overflow-x-auto pb-1 no-scrollbar w-full " >
                 <button @click="shareOnPlatform('instagram')"  class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsInstagram />
                 </button>
                 <button  @click="shareOnPlatform('x')"  class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsX />
                 </button>
                  <button @click="shareOnPlatform('facebook')" class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsFacebook />
                 </button>
                  <button @click="shareOnPlatform('youtube')" class="p-3 rounded-full bg-white shadow-[0px_1.07px_34.11px_0px_#0000000D]">
                  <IconsYoutube />
                 </button>
              </div>
              </div>
        </div>

        </div>

        <!-- Recent Posts -->
        <div>
          <h2 class="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-gray-900 mb-12 tracking-tight">Recent Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(recent, idx) in recentPosts" :key="idx" class="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
              <!-- Image -->
              <NuxtLink :to="'/publications/' + recent.slug" class="p-4 block">
                <div class="overflow-hidden rounded-[24px] aspect-[4/3]">
                  <img :src="recent.image" :alt="recent.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                </div>
              </NuxtLink>

              <!-- Content -->
              <div class="px-6 pb-6 flex flex-col flex-1">
                <!-- Author Meta -->
                <div class="flex items-center gap-2 mb-4">
                  <img :src="myAvatar" alt="Franklyn Ohakim" class="w-6 h-6 rounded-full object-cover">
                  <div class="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <span class="font-medium text-gray-600">Franklyn Ohakim</span>
                    <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{{ recent.date }}</span>
                  </div>
                </div>

                <NuxtLink :to="'/publications/' + recent.slug">
                  <h3 class="text-lg font-bold leading-tight text-black mb-4 group-hover:text-[#F48220] transition-colors line-clamp-2">{{ recent.title }}</h3>
                </NuxtLink>

                <!-- Excerpt -->
                <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {{ recent.excerpt }}
                </p>

                <!-- Stats & Actions -->
                <div class="mt-auto">
                  <div class="flex items-center gap-4 mb-6 text-gray-400 text-xs">
                    <div class="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>{{ recent.views_count }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{{ recent.likes_count }}</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2 flex-1">
                      <UiButton text="Read" size="md" :to="'/publications/' + recent.slug" />
                       <UiButton class="flex-1" :text="recent.shared ? 'Copied Link!' : 'Share Post'" variant="secondary" size="md" @click.stop.prevent="handleRecentShare(recent)" />
                    </div>
                    <button class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 hover:bg-red-50 group/heart transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
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
import { ref, computed, watchEffect } from 'vue'
import myAvatar from '~/assets/images/my2.png'

const route = useRoute()
const slug = route.params.slug
const config = useRuntimeConfig()

// 1. Fetch main post details dynamically from Laravel API (highly optimized, fast)
const { data: rawPost, error } = await useFetch<any>(`${config.public.apiBase}/posts/${slug}`)

// Error check fallback
if (error.value || !rawPost.value) {
  showError({ statusCode: 404, message: 'Publication not found' })
}

const post = computed(() => {
  if (!rawPost.value) return null
  return {
    slug: rawPost.value.slug,
    image: rawPost.value.image_url || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    date: rawPost.value.formatted_date,
    updatedDate: rawPost.value.updated_at ? new Date(rawPost.value.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : null,
    readTime: rawPost.value.read_time,
    title: rawPost.value.title,
    content: rawPost.value.content,
    tags: rawPost.value.tags || [],
    liked: false,
    likes_count: rawPost.value.likes_count,
    views_count: rawPost.value.views_count
  }
})

// 2. Fetch recent posts dynamically for side grid
const { data: rawRecent } = await useFetch<any[]>(`${config.public.apiBase}/posts`)
const recentPosts = computed(() => {
  if (!rawRecent.value) return []
  return rawRecent.value
    .filter(p => p.slug !== slug)
    .slice(0, 3)
    .map(p => ({
      slug: p.slug,
      image: p.image_url || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
      date: p.formatted_date,
      title: p.title,
      excerpt: p.excerpt,
      views_count: p.views_count || 0,
      likes_count: p.likes_count || 0,
      shared: false
    }))
})

// 3. Dynamic liking with local optimistic states
const isLiked = ref(false)
const localLikesCount = ref(0)
const localViewsCount = ref(0)
const localSharesCount = ref(0)
let pollInterval: any

onMounted(() => {
  // Check if liked previously
  const likedPosts = JSON.parse(localStorage.getItem('liked_posts') || '[]')
  if (likedPosts.includes(slug)) {
    isLiked.value = true
  }

  // Set initial counts
  if (post.value) {
    localLikesCount.value = post.value.likes_count
    localViewsCount.value = post.value.views_count
    localSharesCount.value = rawPost.value.shares_count || 0
  }

  // Start polling
  pollInterval = setInterval(async () => {
    try {
      const timestamp = new Date().getTime()
      const data = await $fetch<any>(`${config.public.apiBase}/posts/${slug}?poll=true&t=${timestamp}`)
      if (data) {
        localLikesCount.value = data.likes_count
        localViewsCount.value = data.views_count
        localSharesCount.value = data.shares_count || 0
      }

      // Sync recent posts data in real time as well
      const recentData = await $fetch<any[]>(`${config.public.apiBase}/posts?t=${timestamp}`)
      if (recentData) {
        rawRecent.value = recentData
      }
    } catch (e) {
      // Polling error silently ignored
    }
  }, 5000)
})

onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval)
})

const toggleLike = async () => {
  const wasLiked = isLiked.value
  const action = wasLiked ? 'unlike' : 'like'
  
  isLiked.value = !wasLiked
  if (action === 'like') {
    localLikesCount.value++
    const liked = JSON.parse(localStorage.getItem('liked_posts') || '[]')
    if (!liked.includes(slug)) localStorage.setItem('liked_posts', JSON.stringify([...liked, slug]))
  } else {
    localLikesCount.value--
    const liked = JSON.parse(localStorage.getItem('liked_posts') || '[]')
    localStorage.setItem('liked_posts', JSON.stringify(liked.filter((s: string) => s !== slug)))
  }

  try {
    const res = await $fetch<{ likes_count: number }>(`${config.public.apiBase}/posts/${slug}/like`, {
      method: 'POST',
      body: { action }
    })
    localLikesCount.value = res.likes_count
  } catch (err) {
    console.error('Failed to toggle like:', err)
    // Revert optimistic update
    isLiked.value = wasLiked
    localLikesCount.value += (wasLiked ? 1 : -1)
  }
}

// 4. Clipboard copying of publication links
const isShared = ref(false)
const { shareWithApi, copyToClipboard,shareOnPlatform } = useShare()

const handleShare = async () => {
  const url = `${window.location.origin}/publications/${slug}`
  
  const shared = await shareWithApi({
    title: post.value?.title,
    text: post.value?.excerpt,
    url: url
  })

  if (!shared) {
    await copyToClipboard(url)
    isShared.value = true
    
    // Track share
    try {
      const res = await $fetch<{ shares_count: number }>(`${config.public.apiBase}/posts/${slug}/like`, {
        method: 'POST',
        body: { action: 'share' }
      })
      localSharesCount.value = res.shares_count
    } catch (e) {}

    setTimeout(() => {
      isShared.value = false
    }, 2000)
  }
}

const handleRecentShare = async (recent: any) => {
  const url = `${window.location.origin}/publications/${recent.slug}`
  
  const shared = await shareWithApi({
    title: recent.title,
    text: recent.excerpt,
    url: url
  })

  if (!shared) {
    await copyToClipboard(url)
    recent.shared = true
    setTimeout(() => {
      recent.shared = false
    }, 2000)
  }
}

// 5. Social sharing links
const handleShareSocial = (i: number) => {
  const url = encodeURIComponent(`${window.location.origin}/publications/${slug}`)
  const title = encodeURIComponent(post.value?.title || '')
  let shareUrl = ''
  
  if (i === 1) shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  if (i === 2) shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`
  if (i === 3) shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  if (i === 4) shareUrl = `https://www.youtube.com` // Placeholder for Youtube share or copy
  
  if (shareUrl && i !== 4) {
    window.open(shareUrl, '_blank')
  } else {
    handleShare()
  }
}

useHead({
  title: post.value ? `${post.value.title} | Franklynoohakim` : 'Publication Detail | Franklynoohakim'
})
</script>

<style>
/* Ensure font sizes injected by WYSIWYG match Tailwind spacing perfectly */
.prose font[size="1"] { font-size: 0.75rem !important; line-height: 1rem !important; }
.prose font[size="2"] { font-size: 0.875rem !important; line-height: 1.25rem !important; }
.prose font[size="3"] { font-size: 1rem !important; line-height: 1.5rem !important; }
.prose font[size="4"] { font-size: 1.125rem !important; line-height: 1.75rem !important; }
.prose font[size="5"] { font-size: 1.25rem !important; line-height: 1.75rem !important; }
.prose font[size="6"] { font-size: 1.5rem !important; line-height: 2rem !important; }
.prose font[size="7"] { font-size: 1.875rem !important; line-height: 2.25rem !important; }

/* Force standard heading hierarchies over Tailwind prose flat-scaling */
.prose h1 { font-size: 2.25rem !important; line-height: 2.5rem !important; font-weight: 900 !important; }
.prose h2 { font-size: 1.875rem !important; line-height: 2.25rem !important; font-weight: 800 !important; }
.prose h3 { font-size: 1.5rem !important; line-height: 2rem !important; font-weight: 700 !important; }
.prose h4 { font-size: 1.25rem !important; line-height: 1.75rem !important; font-weight: 700 !important; }
.prose h5 { font-size: 1.125rem !important; line-height: 1.5rem !important; font-weight: 600 !important; }
.prose h6 { font-size: 1rem !important; line-height: 1.5rem !important; font-weight: 600 !important; }
</style>

<style scoped>
/* Scoped styles for the article content to ensure proper spacing and heading styles */
:deep(.prose h3) {
  font-weight: 800;
  color: black;
  font-size: 1.875rem; /* 3xl */
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

:deep(.prose h4) {
  font-weight: 700;
  color: black;
  font-size: 1.5rem; /* 2xl */
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
  color: #4B5563; /* text-gray-600 */
}

:deep(.prose ul), :deep(.prose ol) {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}
</style>
