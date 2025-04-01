// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  runtimeConfig: {
    public: {
      weatherApiUrl: process.env.WEATHER_API_URL || '',
      geocodeApiUrl: process.env.GEOCODE_API_URL || '',
      mapboxApiKey: process.env.MAPBOX_API_KEY || '',
      apiKey: process.env.API_KEY || '',
    },
  }
})