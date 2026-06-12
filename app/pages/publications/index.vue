<template>
  <div class="container-x pt-6 md:pt-32 pb-24 lg:pb-32">
    <section class="mt-8 lg:mt-16">
      <div class="text-center mb-6 lg:mb-12">
        <h1 class="text-[40px] md:text-[90px] lg:text-[100px] font-medium tracking-tight text-gray-500 opacity-90">Publications</h1>
      </div>

      <!-- Publications Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 ">
        <div v-for="(pub, index) in publications" :key="index" class="bg-white space-y-4.5 rounded-[12px] md:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 px-3 py-2">
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

                  <UiButton text="Read" size="md" :to="'/publications/' + pub.slug" />
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
      </div>
    </section>
  </div>

  <!-- Articles & Portfolio Section -->
  <section class="w-full bg-white rounded-t-[40px] shadow-[0_-8px_40px_rgb(0,0,0,0.03)] pt-16 pb-24 lg:pt-20 border-t border-gray-50 mt-12">
    <div class="container-x">
      <h2 class="text-4xl md:text-5xl lg:text-[44px] font-bold text-center text-gray-900 mb-12 lg:mb-16 tracking-tight">Articles & Portfolio</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <a 
          v-for="(article, index) in articlesList" 
          :key="index"
          :href="article.link"
          target="_blank"
          class="bg-[#F7F7F7] p-6 lg:p-7 rounded-[20px] hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 block group"
        >
          <h3 class="text-[17px] lg:text-[18px] font-semibold text-gray-900 leading-snug mb-2">{{ article.title }}</h3>
          <p class="text-[13px] text-gray-500 underline decoration-gray-300 underline-offset-4 group-hover:text-gray-700 transition-colors break-words">
            {{ article.linkText }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
const myAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'

useHead({
  title: 'Publications | Franklynoohakim'
})

const config = useRuntimeConfig()

// Dynamic fetch with maximum speed and SSR optimization
const { data: rawPosts } = await useFetch<any[]>(`${config.public.apiBase}/posts`)

// Local state for interactive properties
const publicationsList = ref<any[]>([])

// Initialize list with dynamic posts
if (rawPosts.value) {
  publicationsList.value = rawPosts.value.map(p => ({
    ...p,
    liked: false,
    shared: false
  }))
}

const publications = computed(() => {
  return publicationsList.value.map(p => ({
    slug: p.slug,
    image: p.image_url || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    date: p.formatted_date,
    readTime: p.read_time,
    title: p.title,
    excerpt: p.excerpt,
    liked: p.liked,
    views_count: p.views_count,
    likes_count: p.likes_count,
    shared: p.shared
  }))
})

// Interactive Liking with Optimistic UI updates (instantaneous feel)
const handleLike = async (pub: any) => {
  const target = publicationsList.value.find(p => p.slug === pub.slug)
  if (!target) return

  if (target.liked) {
    // Prevent spamming likes in same session
    return
  }

  // Optimistically update UI instantly
  target.liked = true
  target.likes_count++

  try {
    await $fetch(`${config.public.apiBase}/posts/${pub.slug}/like`, {
      method: 'POST'
    })
  } catch (error) {
    console.error('Error liking post:', error)
    // Rollback on failure
    target.liked = false
    target.likes_count--
  }
}

const { shareWithApi, copyToClipboard } = useShare()

// Sleek interactive URL clipboard copying
const handleShare = async (pub: any) => {
  const target = publicationsList.value.find(p => p.slug === pub.slug)
  if (!target) return

  const url = `${window.location.origin}/publications/${pub.slug}`
  
  const shared = await shareWithApi({
    title: pub.title,
    text: pub.excerpt,
    url: url
  })

  if (!shared) {
    await copyToClipboard(url)
    target.shared = true
    setTimeout(() => {
      target.shared = false
    }, 2000)
  }
}

// Articles & Portfolio Data
const articlesList = [
  {
    title: '1. Measures That Enhance Physical Security',
    link: 'https://leadership.ng/measures-that-enhance-physical-security/',
    linkText: 'https://leadership.ng/measures-that-enhance-physical-security/'
  },
  {
    title: '2. DCD and Mekahog unveil Ikri APC in Nigeria',
    link: 'https://defenceweb.co.za/land/land-land/dcd-and-mekahog-unveil-ikri-apc-in-nigeria',
    linkText: 'https://defenceweb.co.za/land/land-land/dcd-and-mekahog-unveil-ikri-apc-in-nigeria'
  },
  {
    title: '3. Insecurity: New military equipment unveiled in Abuja',
    link: 'https://dailytrust.com/insecurity-new-military-equipment-unveiled-in-abuja/',
    linkText: 'https://dailytrust.com/insecurity-new-military-equipment-unveiled-in-abuja/'
  },
  {
    title: '4. The Role of Security Personnel in Physical Security',
    link: '#',
    linkText: 'Column - Nigerian Horn Newspaper - May 15, 2024'
  },
  {
    title: '5. Chief of Army Staff assures of end to terrorism',
    link: 'https://pmnewsnigeria.com/2014/07/01/chief-of-army-staff-assures-of-end-to-terrorism/',
    linkText: 'https://pmnewsnigeria.com/2014/07/01/chief-of-army-staff-assures-of-end-to-terrorism/'
  }
]

// Real-time updates via polling
let pollInterval: any

const fetchLatestPosts = async () => {
  try {
    const timestamp = new Date().getTime()
    const updatedPosts = await $fetch<any[]>(`${config.public.apiBase}/posts?t=${timestamp}`)
    publicationsList.value = updatedPosts.map(newPost => {
      const existing = publicationsList.value.find(p => p.slug === newPost.slug)
      return {
        ...newPost,
        liked: existing ? existing.liked : false,
        shared: existing ? existing.shared : false
      }
    })
  } catch (error) {
    console.error('Failed to poll posts:', error)
  }
}

onMounted(() => {
  pollInterval = setInterval(fetchLatestPosts, 5000)
})

onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval)
})
</script>
