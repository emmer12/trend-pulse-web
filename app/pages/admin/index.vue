<template>
  <div class="min-h-screen bg-[#F8F9FA] flex flex-col md:flex-row text-gray-800">
    <!-- Auth protection shield loader -->
    <div v-if="checkingAuth" class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-4">
      <div class="w-12 h-12 border-4 border-[#F48220] border-t-transparent rounded-full animate-spin"></div>
      <p class="text-sm font-bold text-gray-400 uppercase tracking-widest">Verifying Secure Session...</p>
    </div>

    <!-- Mobile Menu Backdrop -->
    <div 
      v-if="mobileMenuOpen" 
      @click="mobileMenuOpen = false"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
    ></div>

    <!-- Mobile Top Navigation Bar -->
    <div class="md:absolute md:opacity-0 md:pointer-events-none md:w-0 md:h-0 md:overflow-hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-40">
      <div class="w-32 text-black">
        <IconsLogo />
      </div>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 -mr-2 text-gray-600 hover:text-black">
        <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Sidebar Navigation -->
    <aside 
      class="fixed inset-y-0 left-0 z-40 w-72 md:w-80 bg-white border-r border-gray-100 flex flex-col justify-between p-6 md:p-8 shrink-0 min-h-screen transition-transform duration-300 md:relative md:translate-x-0"
      :class="mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'"
    >
      <div class="space-y-8 md:space-y-12">
        <!-- Brand Header -->
        <div class="hidden md:block w-32 md:w-40 text-black shrink-0 md:mb-4">
          <IconsLogo />
        </div>

        <!-- Navigation Menu -->
        <nav class="flex flex-col gap-2 space-y-2">
          <button 
            @click="activeTab = 'publications'; mobileMenuOpen = false"
            class="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap"
            :class="activeTab === 'publications' ? 'bg-[#FFF5EE] text-[#F48220]' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
              <path d="M12 20h9M3 20v-8c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v8M3 12h18" />
              <path d="M7 8V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3" />
            </svg>
            <span>Publications</span>
          </button>

          <button 
            @click="activeTab = 'subscribers'; mobileMenuOpen = false"
            class="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap"
            :class="activeTab === 'subscribers' ? 'bg-[#FFF5EE] text-[#F48220]' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Subscribers</span>
          </button>

          <button 
            @click="activeTab = 'contacts'; mobileMenuOpen = false"
            class="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap"
            :class="activeTab === 'contacts' ? 'bg-[#FFF5EE] text-[#F48220]' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Contact Messages</span>
          </button>
        </nav>
      </div>

      <!-- User footer / Logout -->
      <div class="space-y-6 pt-8 border-t border-gray-100">
        <div class="flex items-center gap-3">
          <img :src="myAvatar" alt="Sir Franklyn Ohakim" class="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-100" />
          <div>
            <h4 class="font-bold text-gray-900 text-sm truncate max-w-[150px]">{{ adminName }}</h4>
            <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Administrator</p>
          </div>
        </div>

        <button 
          @click="handleLogout"
          class="w-full py-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold tracking-wide transition-all duration-300 text-center text-sm"
        >
          Logout Session
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 p-4 sm:p-6 md:p-12 overflow-y-auto max-h-screen">
      <!-- Top header line -->
      <header class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
        <div>
          <h1 class="text-3xl md:text-4xl font-black text-gray-900 tracking-tight capitalize">
            {{ headerTitle }}
          </h1>
          <p class="text-sm font-medium text-gray-400 mt-2">
            {{ headerDescription }}
          </p>
        </div>

        <button 
          v-if="activeTab === 'publications'"
          @click="openFormDrawer()"
          class="w-full md:w-auto bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-lg hover:shadow-black/10 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Write Publication</span>
          <span class="text-lg">+</span>
        </button>

        <div v-else-if="activeTab === 'subscribers'" class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button 
            @click="copyAllEmails"
            class="w-full sm:w-auto justify-center bg-white border border-gray-200 hover:border-gray-900 text-gray-900 px-6 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span>Copy All Emails</span>
          </button>
          <button 
            @click="downloadCSV"
            class="w-full sm:w-auto justify-center bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-lg hover:shadow-black/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download CSV</span>
          </button>
        </div>

        <div v-else-if="activeTab === 'contacts'" class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button 
            @click="copyAllContactEmails"
            class="w-full sm:w-auto justify-center bg-white border border-gray-200 hover:border-gray-900 text-gray-900 px-6 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span>Copy Contact Emails</span>
          </button>
          <button 
            @click="downloadContactsCSV"
            class="w-full sm:w-auto justify-center bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl text-sm font-bold tracking-wide shadow-lg hover:shadow-black/10 transition-all duration-300 flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download CSV</span>
          </button>
        </div>
      </header>

      <!-- Dashboard KPIs statistics -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        <div class="bg-gradient-to-b from-white to-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Posts</p>
            <h3 class="text-3xl font-black text-gray-900">{{ posts.length }}</h3>
          </div>
          <div class="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-b from-white to-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Accumulated Views</p>
            <h3 class="text-3xl font-black text-gray-900">{{ kpiViews }}</h3>
          </div>
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </div>

        <!-- <div class="bg-gradient-to-b from-white to-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Likes</p>
            <h3 class="text-3xl font-black text-gray-900">{{ kpiLikes }}</h3>
          </div>
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div> -->

        <div class="bg-gradient-to-b from-white to-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Audience Subscribers</p>
            <h3 class="text-3xl font-black text-gray-900">{{ subscribers.length }}</h3>
          </div>
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF5EE] to-orange-50 border border-orange-100 flex items-center justify-center text-[#F48220] group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-b from-white to-gray-50/50 p-6 rounded-[32px] border border-gray-100 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
          <div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Contact Messages</p>
            <h3 class="text-3xl font-black text-gray-900">{{ contacts.length }}</h3>
          </div>
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
      </section>

      <!-- Floating Success Toast -->
      <div 
        v-if="successMessage" 
        class="fixed bottom-10 right-10 z-[100] px-6 py-4 rounded-2xl bg-black text-white text-sm font-bold shadow-2xl flex items-center gap-4 animate-[bounce_0.5s_ease-out]"
      >
        <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span>{{ successMessage }}</span>
        <button @click="successMessage = ''" class="ml-4 text-gray-400 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- Tab 1: Publications list -->
      <div v-if="activeTab === 'publications'" class="bg-white rounded-[40px] border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-50 bg-gray-50/50">
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Cover</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Title</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Views</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Likes</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Shares</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Published</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id" class="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <td class="py-5 px-8">
                  <img 
                    :src="post.image_url || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop'" 
                    class="w-16 h-10 object-cover rounded-xl border border-gray-100" 
                  />
                </td>
                <td class="py-5 px-8 font-bold text-gray-900 max-w-sm truncate">
                  {{ post.title }}
                </td>
                <td class="py-5 px-8 font-semibold text-gray-500">{{ post.views_count }}</td>
                <td class="py-5 px-8 font-semibold text-gray-500">{{ post.likes_count }}</td>
                <td class="py-5 px-8 font-semibold text-gray-500">{{ post.shares_count || 0 }}</td>
                <td class="py-5 px-8 text-sm font-semibold text-gray-400">{{ post.formatted_date }}</td>
                <td class="py-5 px-8 text-right space-x-2">
                  <button 
                    @click="openFormDrawer(post)" 
                    class="px-4 py-2 text-xs font-bold rounded-xl border border-gray-100 hover:border-gray-900 transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    @click="deletingId = post.id" 
                    class="px-4 py-2 text-xs font-bold rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab 2: Subscribers list -->
      <div v-else-if="activeTab === 'subscribers'" class="bg-white rounded-[40px] border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-50 bg-gray-50/50">
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Joined Date</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sub in subscribers" :key="sub.id" class="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <td class="py-5 px-8 font-bold text-gray-900">{{ sub.email }}</td>
                <td class="py-5 px-8 font-semibold text-gray-400">
                  {{ new Date(sub.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                </td>
                <td class="py-5 px-8">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" :class="sub.is_active ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'">
                    <span class="w-1.5 h-1.5 rounded-full" :class="sub.is_active ? 'bg-emerald-500' : 'bg-gray-400'"></span>
                    {{ sub.is_active ? 'Active' : 'Unsubscribed' }}
                  </span>
                </td>
              </tr>
              <tr v-if="subscribers.length === 0">
                <td colspan="3" class="py-12 text-center font-bold text-gray-400 uppercase tracking-wide">
                  No active subscribers yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab 3: Contacts list -->
      <div v-else-if="activeTab === 'contacts'" class="bg-white rounded-[40px] border border-gray-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-50 bg-gray-50/50">
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Sender Name</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Date Sent</th>
                <th class="py-6 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="contact in contacts" :key="contact.id" class="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <td class="py-5 px-8 font-bold text-gray-900">{{ contact.name }}</td>
                <td class="py-5 px-8 font-semibold text-gray-500">{{ contact.email }}</td>
                <td class="py-5 px-8 font-semibold text-gray-400">
                  {{ new Date(contact.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
                </td>
                <td class="py-5 px-8 text-right space-x-2 whitespace-nowrap">
                  <button 
                    @click="openContactDrawer(contact)" 
                    class="px-4 py-2 text-xs font-bold rounded-xl border border-gray-100 hover:border-gray-900 transition-colors"
                  >
                    Read
                  </button>
                  <a 
                    :href="'mailto:' + contact.email + '?subject=Re: Contact Submission - franklynoohakim'"
                    class="inline-block px-4 py-2 text-xs font-bold rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-900 transition-colors text-center text-gray-700"
                  >
                    Reply
                  </a>
                  <button 
                    @click="deletingContactId = contact.id" 
                    class="px-4 py-2 text-xs font-bold rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr v-if="contacts.length === 0">
                <td colspan="5" class="py-12 text-center font-bold text-gray-400 uppercase tracking-wide">
                  No contact messages received yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>

    <!-- Slide-Out Compose/Edit Publication Drawer (High-End UX) -->
    <div v-if="formOpen" class="fixed inset-0 z-40 flex justify-end">
      <!-- Dark overlay -->
      <div @click="formOpen = false" class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <!-- Drawer Panel -->
      <div class="relative w-full max-w-2xl bg-white h-screen shadow-2xl flex flex-col justify-between p-12 overflow-y-auto">
        <div class="space-y-8">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-black text-gray-900">
              {{ editingPostId ? 'Edit Publication' : 'Compose Publication' }}
            </h2>
            <button @click="formOpen = false" class="text-2xl font-bold text-gray-400 hover:text-gray-900">×</button>
          </div>

          <form @submit.prevent="savePost" class="space-y-6">
            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Publication Title</label>
              <input 
                v-model="form.title" 
                @input="onTitleInput"
                type="text" 
                required 
                placeholder="The Benefits of Security Technology..." 
                class="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all font-semibold"
              />
            </div>

            
            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Cover Image</label>
              <div class="flex items-center gap-4">
                <input 
                  v-model="form.image_url" 
                  type="text" 
                  placeholder="https://images.unsplash.com/photo-..." 
                  class="flex-1 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all text-sm font-semibold"
                />
                <button 
                  type="button"
                  @click="triggerFileInput"
                  class="shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-2xl text-sm font-bold transition-colors flex items-center gap-2"
                >
                  <span v-if="uploadingImage" class="w-4 h-4 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></span>
                  <span v-else>Upload</span>
                </button>
                <input 
                  ref="fileInput"
                  type="file" 
                  accept="image/*"
                  class="hidden"
                  @change="handleImageUpload"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Read Time estimate</label>
                <input 
                  v-model="form.read_time" 
                  type="text" 
                  placeholder="2 mins read" 
                  class="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all font-semibold"
                />
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Publish Date</label>
                <input 
                  v-model="form.published_at" 
                  type="datetime-local" 
                  class="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all font-semibold text-sm"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Short Card Excerpt</label>
              <textarea 
                v-model="form.excerpt" 
                rows="2" 
                required 
                placeholder="A compelling single sentence summary of the publication item for the dashboard feeds..." 
                class="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all font-medium text-sm"
              ></textarea>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Tags (Comma Separated)</label>
              <input 
                v-model="form.tags_input" 
                type="text" 
                placeholder="Leadership, Security, Innovation" 
                class="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-[#F48220]/30 focus:bg-white transition-all font-semibold text-sm"
              />
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest">Detailed Content</label>
              <div class="border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden focus-within:bg-white focus-within:border-[#F48220]/30 transition-all">
                <div class="flex items-center gap-1 border-b border-gray-100 p-2 bg-white">
                  <select v-model="activeBlock" @change="execFormat('formatBlock', activeBlock)" class="h-8 px-2 rounded hover:bg-gray-100 text-gray-700 text-sm font-semibold outline-none cursor-pointer bg-transparent appearance-none">
                    <option value="" disabled>Format...</option>
                    <option value="p">Paragraph</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="h4">Heading 4</option>
                    <option value="h5">Heading 5</option>
                    <option value="h6">Heading 6</option>
                  </select>
                  <div class="w-px h-5 bg-gray-200 mx-1"></div>
                  <select v-model="activeSize" @change="execFormat('fontSize', activeSize)" class="h-8 px-2 rounded hover:bg-gray-100 text-gray-700 text-sm font-semibold outline-none cursor-pointer bg-transparent appearance-none">
                    <option value="" disabled>Size...</option>
                    <option value="1">Smallest</option>
                    <option value="2">Small</option>
                    <option value="3">Normal</option>
                    <option value="4">Large</option>
                    <option value="5">Larger</option>
                    <option value="6">Huge</option>
                    <option value="7">Massive</option>
                  </select>
                  <div class="w-px h-5 bg-gray-200 mx-1"></div>
                  <button type="button" @click="execFormat('bold')" :class="['w-8 h-8 flex items-center justify-center rounded text-gray-700 font-bold font-serif transition-colors', activeFormats.bold ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100']" title="Bold">B</button>
                  <button type="button" @click="execFormat('italic')" :class="['w-8 h-8 flex items-center justify-center rounded text-gray-700 italic font-serif transition-colors', activeFormats.italic ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100']" title="Italic">I</button>
                  <div class="w-px h-5 bg-gray-200 mx-1"></div>
                  <button type="button" @click="execFormat('insertUnorderedList')" :class="['w-8 h-8 flex items-center justify-center rounded text-gray-700 transition-colors', activeFormats.insertUnorderedList ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100']" title="Bullet List">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                  <button type="button" @click="execFormat('insertOrderedList')" :class="['w-8 h-8 flex items-center justify-center rounded text-gray-700 transition-colors', activeFormats.insertOrderedList ? 'bg-gray-200 shadow-inner' : 'hover:bg-gray-100']" title="Numbered List">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><path d="M4 6h1v4"></path><path d="M4 10h2"></path><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path></svg>
                  </button>
                  <div class="w-px h-5 bg-gray-200 mx-1"></div>
                  <button type="button" @click="insertLink" class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700" title="Link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </button>
                </div>
                <div 
                  ref="editorRef"
                  class="w-full p-6 min-h-[300px] outline-none text-sm leading-relaxed prose prose-sm max-w-none bg-transparent prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-headings:font-black"
                  contenteditable="true"
                  @input="handleEditorInput"
                  @keyup="updateActiveFormats(); saveSelection()"
                  @mouseup="updateActiveFormats(); saveSelection()"
                  @blur="saveSelection"
                ></div>
              </div>
            </div>
            
            <button 
              type="submit" 
              :disabled="saving"
              class="w-full py-4 rounded-2xl bg-black hover:bg-gray-900 text-white font-bold tracking-wide transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span v-if="saving" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span v-else>{{ editingPostId ? 'Save Publication Changes' : 'Publish Article' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Delete Confirmation Modal -->
    <div v-if="deletingId !== null" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div @click="deletingId = null" class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all border border-gray-100">
        <div class="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner text-rose-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <h3 class="text-xl font-black text-gray-900 mb-2">Delete Publication?</h3>
        <p class="text-sm font-medium text-gray-500 mb-8">This action is permanent and cannot be undone. All views and likes will be lost.</p>
        
        <div class="flex items-center gap-3">
          <button @click="deletingId = null" class="flex-1 py-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold transition-colors">Cancel</button>
          <button @click="executeDelete(deletingId)" class="flex-1 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors shadow-lg shadow-rose-500/20">Delete</button>
        </div>
      </div>
    </div>

    <!-- Slide-Out View Contact Message Drawer (High-End UX) -->
    <div v-if="selectedContact !== null" class="fixed inset-0 z-40 flex justify-end">
      <!-- Dark overlay -->
      <div @click="selectedContact = null" class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <!-- Drawer Panel -->
      <div class="relative w-full max-w-2xl bg-white h-screen shadow-2xl flex flex-col justify-between p-12 overflow-y-auto">
        <div class="space-y-8 flex-1">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-black text-gray-900">
              Contact Message Details
            </h2>
            <button @click="selectedContact = null" class="text-2xl font-bold text-gray-400 hover:text-gray-900">×</button>
          </div>

          <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Sender Name</p>
                <p class="font-bold text-gray-900 text-lg">{{ selectedContact.name }}</p>
              </div>

              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Date Received</p>
                <p class="font-semibold text-gray-700">
                  {{ new Date(selectedContact.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) }}
                </p>
              </div>
            </div>

            <div class="space-y-1">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
              <div class="flex items-center gap-2">
                <span class="font-semibold text-gray-900">{{ selectedContact.email }}</span>
                <button 
                  @click="copyEmailToClipboard(selectedContact.email)" 
                  class="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
                  title="Copy email to clipboard"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="space-y-2 border-t border-gray-100 pt-6">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Message Content</p>
              <div class="p-6 bg-gray-50 rounded-3xl text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {{ selectedContact.message }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 shrink-0">
          <a 
            :href="'mailto:' + selectedContact.email + '?subject=Re: Contact Submission - franklynoohakim'"
            class="flex-1 py-4 rounded-2xl bg-black hover:bg-gray-900 text-white font-bold tracking-wide transition-all duration-300 shadow-lg text-center flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Reply via Email</span>
          </a>
          <button 
            @click="selectedContact = null"
            class="px-8 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-all font-sans"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Delete Confirmation Modal -->
    <div v-if="deletingContactId !== null" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div @click="deletingContactId = null" class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all border border-gray-100">
        <div class="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner text-rose-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <h3 class="text-xl font-black text-gray-900 mb-2">Delete Contact Message?</h3>
        <p class="text-sm font-medium text-gray-500 mb-8">This action is permanent and cannot be undone.</p>
        
        <div class="flex items-center gap-3">
          <button @click="deletingContactId = null" class="flex-1 py-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold transition-colors font-sans">Cancel</button>
          <button @click="executeContactDelete(deletingContactId)" class="flex-1 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors shadow-lg shadow-rose-500/20 font-sans">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import myAvatar from '~/assets/images/my.png'

definePageMeta({
  layout: false
})

useHead({
  title: 'Dashboard | Admin franklynoohakim'
})

const checkingAuth = ref(true)
const activeTab = ref('publications')
const mobileMenuOpen = ref(false)
const token = ref('')
const adminName = ref('')
const config = useRuntimeConfig()

// Dynamic data lists
const posts = ref<any[]>([])
const subscribers = ref<any[]>([])
const contacts = ref<any[]>([])

// Selected and Deleting states for Contacts
const selectedContact = ref<any | null>(null)
const deletingContactId = ref<number | null>(null)

const headerTitle = computed(() => {
  if (activeTab.value === 'publications') return 'Publications Manager'
  if (activeTab.value === 'subscribers') return 'Newsletter Subscribers'
  return 'Contact Messages'
})

const headerDescription = computed(() => {
  if (activeTab.value === 'publications') return 'Compose, publish, edit and maintain dynamic blog insights'
  if (activeTab.value === 'subscribers') return 'Manage your subscribed readers and download audience emails'
  return 'Review sender inquiries, reach out to prospective partners, and manage user notifications'
})

// Success/Error states
const successMessage = ref('')
const showToast = (msg: string) => {
  successMessage.value = msg
  setTimeout(() => {
    if (successMessage.value === msg) {
      successMessage.value = ''
    }
  }, 4000)
}

// Form state
const formOpen = ref(false)
const saving = ref(false)
const uploadingImage = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const editorRef = ref<HTMLElement | null>(null)
const editingPostId = ref<number | null>(null)
const form = ref({
  title: '',
  slug: '',
  image_url: '',
  read_time: '2 mins read',
  published_at: '',
  excerpt: '',
  content: '',
  tags_input: ''
})

// WYSIWYG active states
const activeBlock = ref('p')
const activeSize = ref('3')
const activeFormats = ref({
  bold: false,
  italic: false,
  insertUnorderedList: false,
  insertOrderedList: false
})

const updateActiveFormats = () => {
  activeFormats.value.bold = document.queryCommandState('bold')
  activeFormats.value.italic = document.queryCommandState('italic')
  activeFormats.value.insertUnorderedList = document.queryCommandState('insertUnorderedList')
  activeFormats.value.insertOrderedList = document.queryCommandState('insertOrderedList')
  
  const block = document.queryCommandValue('formatBlock')
  if (block) {
    activeBlock.value = block.replace(/<|>/g, '').toLowerCase()
  } else {
    activeBlock.value = 'p'
  }
  
  const size = document.queryCommandValue('fontSize')
  if (size) {
    activeSize.value = size
  } else {
    activeSize.value = '3'
  }
}

// KPI Aggregation Calculations
const kpiViews = computed(() => posts.value.reduce((sum, p) => sum + (p.views_count || 0), 0))
const kpiLikes = computed(() => posts.value.reduce((sum, p) => sum + (p.likes_count || 0), 0))

let pollInterval: any

onMounted(async () => {
  // Read auth token from stateful secure cookie
  const tokenCookie = useCookie('admin_token')
  const userCookie = useCookie('admin_user')

  if (!tokenCookie.value) {
    navigateTo('/admin/login')
    return
  }

  token.value = tokenCookie.value
  adminName.value = userCookie.value || 'Administrator'
  checkingAuth.value = false

  // Fetch initial content and start real-time polling
  await loadData()
  pollInterval = setInterval(() => {
    if (!saving.value && !uploadingImage.value && !formOpen.value && !selectedContact.value && !deletingContactId.value) {
      loadData()
    }
  }, 10000) // Poll every 10 seconds to prevent single-thread dev server deadlock
})

onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval)
})

const loadData = async () => {
  try {
    // Add timestamp to bypass browser/Nuxt fetch caching
    const timestamp = new Date().getTime()
    
    // Public get for posts
    posts.value = await $fetch(`${config.public.apiBase}/posts?t=${timestamp}`)

    // Authenticated get for subscribers
    subscribers.value = await $fetch(`${config.public.apiBase}/newsletter/subscribers?t=${timestamp}`, {
      headers: { Authorization: `Bearer ${token.value}` }
    })

    // Authenticated get for contacts
    contacts.value = await $fetch(`${config.public.apiBase}/contacts?t=${timestamp}`, {
      headers: { Authorization: `Bearer ${token.value}` }
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
  }
}

// Generate URL slug from title dynamically
const onTitleInput = () => {
  if (editingPostId.value) return // Don't disrupt slugs when editing
  form.value.slug = form.value.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

// WYSIWYG Editor Actions
const savedSelection = ref<Range | null>(null)

const saveSelection = () => {
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0) {
    savedSelection.value = sel.getRangeAt(0)
  }
}

const restoreSelection = () => {
  if (savedSelection.value) {
    const sel = window.getSelection()
    sel?.removeAllRanges()
    sel?.addRange(savedSelection.value)
  }
}

const execFormat = (command: string, value: string | undefined = undefined) => {
  editorRef.value?.focus()
  restoreSelection()
  
  if (command === 'formatBlock') {
    let success = false
    try { success = document.execCommand(command, false, value) } catch (e) {}
    if (!success) {
      try { document.execCommand(command, false, `<${value}>`) } catch (e) {}
    }
  } else {
    document.execCommand(command, false, value)
  }
  
  updateActiveFormats()
  handleEditorInput()
}

const insertLink = () => {
  const url = prompt('Enter the full URL (including https://):')
  if (url) {
    document.execCommand('createLink', false, url)
    handleEditorInput()
  }
}

const handleEditorInput = () => {
  if (editorRef.value) {
    form.value.content = editorRef.value.innerHTML
  }
}

// Write/Edit Form Overlay
const openFormDrawer = (postToEdit: any = null) => {
  if (postToEdit) {
    editingPostId.value = postToEdit.id
    form.value = {
      title: postToEdit.title,
      slug: postToEdit.slug,
      image_url: postToEdit.image_url || '',
      read_time: postToEdit.read_time,
      published_at: postToEdit.published_at ? new Date(postToEdit.published_at).toISOString().slice(0, 16) : '',
      excerpt: postToEdit.excerpt,
      content: postToEdit.content,
      tags_input: postToEdit.tags ? postToEdit.tags.join(', ') : ''
    }
  } else {
    editingPostId.value = null
    form.value = {
      title: '',
      slug: '',
      image_url: '',
      read_time: '2 mins read',
      published_at: new Date().toISOString().slice(0, 16),
      excerpt: '',
      content: '',
      tags_input: ''
    }
  }
  formOpen.value = true
  
  // Sync the rich text editor with the form content
  setTimeout(() => {
    if (editorRef.value) {
      editorRef.value.innerHTML = form.value.content || ''
    }
  }, 50)
}

// Save or Update dynamic post
const savePost = async () => {
  saving.value = true
  try {
    const url = editingPostId.value 
      ? `${config.public.apiBase}/posts/${editingPostId.value}`
      : `${config.public.apiBase}/posts`
      
    // Use Laravel Method Spoofing for updates to prevent potential local server payload drops
    const method = 'POST'
    const bodyPayload: any = editingPostId.value 
      ? { ...form.value, _method: 'PUT' }
      : { ...form.value }

    // Sanitize empty strings to prevent Laravel validation crashes
    if (!bodyPayload.published_at) bodyPayload.published_at = null
    if (!bodyPayload.image_url) bodyPayload.image_url = null
    if (!bodyPayload.read_time) bodyPayload.read_time = null
    
    // Parse tags into array
    bodyPayload.tags = form.value.tags_input 
      ? form.value.tags_input.split(',').map((t: string) => t.trim()).filter(Boolean) 
      : []

    await $fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token.value}` },
      body: bodyPayload
    })

    const msg = editingPostId.value 
      ? 'Publication updated successfully!' 
      : 'Publication composed and published successfully!'
      
    showToast(msg)
      
    formOpen.value = false
    
    // Clear the form after closing
    setTimeout(() => {
      form.value = {
        title: '',
        excerpt: '',
        content: '',
        image_url: '',
        read_time: '',
        slug: '',
        published_at: '',
        tags_input: ''
      }
      editingPostId.value = null
      if (editorRef.value) {
        editorRef.value.innerHTML = ''
      }
    }, 300)

    await loadData()
  } catch (error: any) {
    console.error('Error saving post:', error)
    alert(error.data?.message || 'Error occurred. Please verify inputs.')
  } finally {
    saving.value = false
  }
}

// Image upload handling
const triggerFileInput = () => {
  if (fileInput.value) fileInput.value.click()
}

const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  uploadingImage.value = true
  const formData = new FormData()
  formData.append('image', file)

  try {
    const res = await $fetch<{ url: string }>(`${config.public.apiBase}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` },
      body: formData
    })
    
    form.value.image_url = res.url
    // Image uploaded successfully - silently update URL
  } catch (error: any) {
    console.error('Upload error:', error)
    alert(error.data?.message || 'Error uploading image.')
  } finally {
    uploadingImage.value = false
    if (fileInput.value) fileInput.value.value = ''
  }
}

// Delete action
const deletingId = ref<number | null>(null)

const executeDelete = async (id: number) => {
  try {
    console.log('Initiating delete for post:', id)
    
    // Use Laravel Method Spoofing to prevent local server drops
    await $fetch(`${config.public.apiBase}/posts/${id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` },
      body: { _method: 'DELETE' }
    })

    showToast('Publication deleted successfully.')
    deletingId.value = null
    await loadData()
  } catch (error: any) {
    console.error('Error deleting post:', error)
    alert(`Failed to delete: ${error.message || 'Unknown error occurred'}`)
    deletingId.value = null
  }
}

// Newsletter subscriber email operations
const copyAllEmails = () => {
  const emails = subscribers.value.map(s => s.email).join(', ')
  navigator.clipboard.writeText(emails)
  showToast('Copied all subscriber emails to clipboard!')
}

const downloadCSV = () => {
  if (subscribers.value.length === 0) {
    showToast('No subscribers to download.')
    return
  }
  
  const headers = ['Email Address', 'Status', 'Joined Date']
  const rows = subscribers.value.map(s => [
    s.email,
    s.is_active ? 'Active' : 'Unsubscribed',
    new Date(s.created_at).toLocaleDateString('en-US')
  ])
  
  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  showToast('Audience CSV downloaded successfully!')
}

// Securely wipe token and log out
const handleLogout = async () => {
  try {
    await $fetch(`${config.public.apiBase}/logout`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` }
    })
  } catch (err) {
    console.error('Log out endpoint error:', err)
  } finally {
    // Wipe cookies
    const tokenCookie = useCookie('admin_token')
    const userCookie = useCookie('admin_user')
    tokenCookie.value = null
    userCookie.value = null

    navigateTo('/admin/login')
  }
}

const openContactDrawer = (contact: any) => {
  selectedContact.value = contact
}

const copyEmailToClipboard = (email: string) => {
  navigator.clipboard.writeText(email)
  showToast('Email address copied to clipboard!')
}

const copyAllContactEmails = () => {
  if (contacts.value.length === 0) {
    showToast('No contact messages to copy.')
    return
  }
  const emails = Array.from(new Set(contacts.value.map(c => c.email))).join(', ')
  navigator.clipboard.writeText(emails)
  showToast('Copied all unique sender emails to clipboard!')
}

const downloadContactsCSV = () => {
  if (contacts.value.length === 0) {
    showToast('No messages to download.')
    return
  }
  
  const headers = ['Sender Name', 'Email Address', 'Message', 'Date Sent']
  const rows = contacts.value.map(c => [
    `"${c.name.replace(/"/g, '""')}"`,
    c.email,
    `"${c.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    new Date(c.created_at).toLocaleDateString('en-US')
  ])
  
  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `contact_messages_${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  showToast('Contact messages CSV downloaded successfully!')
}

const executeContactDelete = async (id: number) => {
  try {
    await $fetch(`${config.public.apiBase}/contacts/${id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` },
      body: { _method: 'DELETE' }
    })

    showToast('Contact message deleted successfully.')
    deletingContactId.value = null
    if (selectedContact.value?.id === id) {
      selectedContact.value = null
    }
    await loadData()
  } catch (error: any) {
    console.error('Error deleting contact message:', error)
    alert(`Failed to delete: ${error.message || 'Unknown error occurred'}`)
    deletingContactId.value = null
  }
}
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
