<template>
  <div class="flex justify-center items-center h-full">
    <Dialog>
      <div v-if="loading" class="flex w-full items-center justify-center">
        <div class="w-10 h-10 border-4 border-white-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p v-if="error" class="w-full text-center flex justify-center items-center min-h-[200px] text-lg text-red-500">
        Error: {{ error }}
      </p>
      <div v-if="weather" class="lg:flex lg:w-1/2 lg:max-w-1/2">
        <WeatherDetails :data="weather"/>
      </div>
      <HorizontalDivider class="lg:hidden" />
      <div v-if="weather || forecast.length > 0" class="w-full flex flex-col-reverse lg:flex-col lg:w-1/2">
        <div class="flex-1">
          <ClothesRecommendations v-if="weather" :data="weather"/>
        </div>
        <div class="flex flex-col w-full justify-between lg:pb-0 pb-12">
          <WeatherForecast v-if="forecast.length > 0" :data="forecast"/>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from '#vue-router';
import { $fetch } from 'ofetch';

const { $mapbox } = useNuxtApp();
const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

interface WeatherData {
  current: {
    city: string;
    temp: number;
    feels_like: number;
    weather: Array<{ main: string }>;
    wind_speed: number;
    humidity: number;
  };
  daily: Object[];
}

const weather = ref<WeatherData['current'] | null>(null);
const forecast = ref<WeatherData['daily']>([]);

const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const city = ref<string>('');

const longitude = computed(() => Number(route.query.lon));
const latitude = computed(() => Number(route.query.lat));

if(!latitude.value || !longitude.value)
  router.push('/');

const fetchCity = async (longitude: number, latitude: number) => {
  return $mapbox.reverseGeocode(longitude, latitude);
}

const fetchWeather = async (lon: number, lat: number) => {
    return $fetch(
        `${config.public.weatherApiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${config.public.apiKey}`,
        {
          parseResponse: JSON.parse
        }
    );
};

const loadWeatherData = async () => {
  try {
    if (!longitude.value || !latitude.value)
        throw new Error('No location provided');
      
    const geocodedCity = await fetchCity(longitude.value, latitude.value);
    city.value = geocodedCity.body.features[0]?.place_name;

    const response = await fetchWeather(longitude.value, latitude.value);

    weather.value = response.current;
    
    if (weather.value)
      weather.value.city = city.value;

    forecast.value = response.daily;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await loadWeatherData();
});
</script>