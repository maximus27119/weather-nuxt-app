<template>
  <div class="flex justify-center items-center h-screen">
    <Dialog>
      <div class="w-full h-full flex flex-col justify-center items-center">
        <p class="text-3xl text-white font-semibold pb-5">Weather Forecast</p>
        <div class="flex justify-center items-center">
          <input v-model="city" @keydown.enter="handleSubmit" type="text" class="w-3/4 border-gray-300 bg-gray-600 border p-2 mr-3 rounded-md text-base text-white" placeholder="Enter city name">
          <button @click="handleSubmit" :disabled="loading" class="py-2 px-5 bg-gray-600 rounded-md hover:bg-gray-500">Search</button>
        </div>
        <p v-if="error" class="text-sm text-red-600 pt-2">{{ error }}</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { $fetch } from 'ofetch';
import { useRouter } from 'vue-router';

const config = useRuntimeConfig();
const city = ref<string>('');
const loading = ref<boolean>(false);
const error = ref<string | null>('');

const router = useRouter();

const geocode = async () => {
  if (!city.value) {
    error.value = 'Please enter a city';
    return;
  }

  error.value = null;
  loading.value = true;

  const url = formUrl(city.value);

  try {
    const response = await $fetch(url, { parseResponse: JSON.parse });
    const { lat, lon } = response[0];
    redirectToWeather(lat, lon);
  } catch (err: any) {
    error.value = err?.statusText || 'Could not get location.';
  } finally {
    loading.value = false;
  }
}

const formUrl = (city: string) => {
  return `${config.public.geocodeApiUrl}?q=${city}&limit=5&appid=${config.public.apiKey}`;
};

const redirectToWeather = (lat: number, lon: number) => {
  router.push({
    path: '/forecast',
    query: { lat, lon, city: city.value },
  });
};

const handleSubmit = async () => await geocode();
</script>