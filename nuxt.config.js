// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/style/main.scss" as *;',
        },
      },
    },
  },
  experimental: { payloadExtraction: false }
})
