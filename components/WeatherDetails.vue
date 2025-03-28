<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <img class="max-h-48" :src="weatherIcon" :alt="weatherCode">
    <div class="py-4 flex">
      <div class="text-6xl font-bold pr-2 leading-none">
        {{ temperature }}°
      </div>
      <div class="text-2xl flex flex-col">
        <p
          class="cursor-pointer text-gray-500"
          :class="{'text-white': temperatureMode === 'celsius'}"
          @click="changeTemperatureMode('celsius')"
        >C</p>
        <p
          class="cursor-pointer text-gray-500"
          :class="{'text-white': temperatureMode === 'fahrenheit'}"
          @click="changeTemperatureMode('fahrenheit')"
        >F</p>
      </div>
    </div>
    <div class="text-xl text-center">
      <p>City: {{ data.city }}</p>
      <p>Feels Like: {{ feelsLike }}°{{ temperatureMode === 'celsius' ? 'C' : 'F' }}</p>
      <p>Condition: {{ data.weather[0]?.main }}</p>
      <p>Wind Speed: {{ data.wind_speed }} km/h</p>
      <p>Humidity: {{ data.humidity }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface WeatherData {
  city: string;
  temp: number;
  feels_like: number;
  weather: Array<{ main: string }>;
  wind_speed: number;
  humidity: number;
}

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const temperatureMode = ref<'celsius' | 'fahrenheit'>('celsius');

// Centralized temperature conversion
const formatTemperature = (celsius: number, mode: 'celsius' | 'fahrenheit') => {
  const temp = mode === 'celsius' ? celsius : (celsius * 9/5) + 32;
  return temp.toFixed(0);
};

const weatherCode = computed(() => props.data.weather[0]?.main.toLowerCase() ?? 'unknown');
const weatherIcon = computed(() => `/icons/weather/${weatherCode.value}.png`);

const temperature = computed(() => {
  return formatTemperature(props.data.temp, temperatureMode.value)
});

const feelsLike = computed(() => {
  return formatTemperature(props.data.feels_like, temperatureMode.value)
});

const changeTemperatureMode = (value: 'celsius' | 'fahrenheit') => {
  temperatureMode.value = value;
};
</script>