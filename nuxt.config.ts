import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  build: {
    transpile: ["vue-toastification"],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api',

    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['native-element'].includes(tag),
    },
  },
})
