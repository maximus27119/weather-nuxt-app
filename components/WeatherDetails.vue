<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <img class="max-h-48" :src="weatherIcon" :alt="weatherCode">
    <div class="py-4 flex">
      <div class="text-6xl font-bold pr-2 leading-none">
        {{ temperatureMode === 'celsius' ? celsiusTemperature : fahrenheitTemperature }}°
      </div>
      <div class="text-2xl flex flex-col">
        <p
          class="cursor-pointer text-gray-500" :class="{'text-white': temperatureMode === 'celsius'}"
          @click="changeTemperatureMode('celsius')"
        >C</p>
        <p
          class="cursor-pointer text-gray-500" :class="{'text-white': temperatureMode === 'fahrenheit'}"
          @click="changeTemperatureMode('fahrenheit')"
        >F</p>
      </div>
    </div>
    <div class="text-xl text-center">
      <p>City: {{ data.city }}</p>
      <p>Feels Like: {{ temperatureMode === 'celsius' ? `${feelsLikeCelsius}°C` : `${feelsLikeFahrenheit}°F` }}</p>
      <p>Condition: {{ data?.weather[0].main }}</p>
      <p>Wind Speed: {{ data?.wind_speed }} km/h</p>
      <p>Humidity: {{ data?.humidity }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps(['data']);
const temperatureMode = ref<'celsius' | 'fahrenheit'>('celsius');

const weatherCode = computed(() => data.weather[0].main.toLowerCase());

const weatherIcon = computed(() => `/icons/weather/${weatherCode.value}.png`);

// console.log(data);

const changeTemperatureMode = (value: 'celsius' | 'fahrenheit') => {
  if (temperatureMode.value !== value)
    temperatureMode.value = value;
}

const convertToFahrenheit = (number: number) => {
  return (number * 9/5) + 32;
}

const celsiusTemperature = computed(() => data?.temp.toFixed(0));
const fahrenheitTemperature = computed(() => convertToFahrenheit(celsiusTemperature.value));
const feelsLikeCelsius = computed(() => data?.feels_like.toFixed(0));
const feelsLikeFahrenheit = computed(() => convertToFahrenheit(feelsLikeCelsius.value));
</script>