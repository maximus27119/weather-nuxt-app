<template>
  <div class="flex justify-center items-center h-screen">
    <Dialog>
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="relative">
          <p class="text-3xl text-white font-semibold pb-5">Weather Forecast</p>
          <NuxtLink to="/about-us" class="text-sm text-gray-400 hover:text-gray-200 absolute right-0 top-8">About us</NuxtLink>
        </div>
        <div class="flex justify-center items-center relative">
          <input 
            v-model="city" 
            @keydown.enter="handleSubmit"
            @input="handleInput"
            type="text" 
            class="w-3/4 border-2 border-gray-300 bg-gray-600 p-2 mr-3 rounded-md text-base text-white outline-none focus:border-white focus:ring-2 focus:ring-white/20" 
            placeholder="Enter city name"
          >
          <button @click="handleSubmit" :disabled="loading" class="py-2 px-5 bg-gray-600 rounded-md hover:bg-gray-500">Search</button>
          <div v-if="suggestions.length > 0" class="absolute top-12 mt-1 bg-gray-600 p-2 border rounded-md " style="min-width: 300px;">
            <ul>
              <li v-for="suggestion in suggestions" :key="suggestion.properties.mapbox_id" class="cursor-pointer text-gray-400 hover:text-gray-200" @click="redirectToWeather(suggestion.center[0], suggestion.center[1])">
                {{ suggestion.place_name }}
              </li>
            </ul>
          </div>
        </div>
        <p v-if="error" class="text-sm text-red-600 pt-2">{{ error }}</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { $mapbox } = useNuxtApp();

interface Suggestion {
  properties: {
    mapbox_id: string;
  };
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
  center: [number, number];
};

const city = ref<string>('');
const suggestions = ref<Suggestion[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>('');

const router = useRouter();

const redirectToWeather = (longitude: number, latitude: number) => {
  router.push({
    path: '/forecast',
    query: { lon: longitude, lat: latitude },
  });
};

const handleSubmit = async () => {
  if (!city.value) {
    error.value = 'Please enter a city';
    return;
  }

  error.value = null;
  loading.value = true;

  try {
    const response = await $fetch(`/api/geocode`, {
      query: {
        city: city.value
      }, 
    });
    const coordinates = response.features[0]?.center;
    
    if (coordinates) {
      const [longitude, latitude] = coordinates;
      redirectToWeather(longitude, latitude);
    }
  } catch (err: any) {
    error.value = err?.statusText || 'Could not get location.';
  } finally {
    loading.value = false;
  }
}

const handleInput = async () => {
  if(!city.value){
    suggestions.value = [];
    return;
  }

  const response = await $fetch(`/api/geocode/suggestions`, { query: { query: city.value }});

  suggestions.value = response.features;
};
</script>