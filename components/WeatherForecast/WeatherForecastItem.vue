<template>
  <div class="weather-forecast-item flex flex-col">
    <div class="weather-forecast-item__day text-center text-xl font-bold">{{ dayName }}</div>
    <img class="weather-forecast-item__weather-image max-h-[50px] xl:max-h-[70px]" :src="weatherIcon" :alt="weatherCode" />
    <div class="weather-forecast-item__temperature text-center text-xl font-bold">{{ temperature }}°</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object
});
const dayName = ref<string>('');

const weatherCode = computed(() => props.data.weather[0].main.toLowerCase());

const temperature = computed(() => props.data.temp.max.toFixed(0));

const weatherIcon = computed(() => `/icons/weather/${weatherCode.value}.png`);

console.log(props.data);

onMounted(() => {
  const date = new Date(props.data.dt * 1000);
  dayName.value = date.toLocaleDateString('en-US', { weekday: 'short' });
})
</script>