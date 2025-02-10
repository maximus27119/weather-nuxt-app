<template>
  <div class="flex justify-center items-center h-full">
    <Dialog>
      <div v-if="weather" class="lg:flex lg:w-1/2 lg:max-w-1/2">
        <WeatherDetails :data="weather"/>
      </div>
      <HorizontalDivider class="lg:hidden" />
      <div class="w-full flex flex-col-reverse lg:flex-col lg:w-1/2">
        <div class="flex-1">
          <ClothesRecommendations :data="weather"/>
        </div>
        <div class="flex flex-col w-full justify-between lg:pb-0 pb-12">
          <WeatherForecast :data="forecast"/>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from '#vue-router';
import { $fetch } from 'ofetch';
const config = useRuntimeConfig();
console.log('config', config);

const route = useRoute();
const router = useRouter();

const weather = ref<object | null>(null);
const forecast = ref<Array<Object>>([]);

const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const latitude = computed(() => route.query.lat);
const longitude = computed(() => route.query.lon);
const city = computed(() => route.query.city);

if(!latitude.value || !longitude.value)
  router.push('/');

const fetchWeather = async (lon: number, lat: number) => {
  try {
    return await $fetch(
        `${config.public.weatherApiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${config.public.apiKey}`,
        {
          parseResponse: JSON.parse
        }
    );
  } catch (err) {
    throw new Error('Could not fetch weather from API');
  }
};

const loadWeatherData = async () => {
  try {
    if (!longitude.value || !latitude.value) throw new Error('No location provided');

    const response = await fetchWeather(longitude.value, latitude.value);

    weather.value = response.current;
    weather.value.city = city.value;
    forecast.value = response.daily;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await loadWeatherData();
});
</script>