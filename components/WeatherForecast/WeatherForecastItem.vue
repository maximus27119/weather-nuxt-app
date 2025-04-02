<template>
  <div class="flex flex-col">
    <div class="text-center text-xl font-bold">{{ dayName }}</div>
    <img class="max-h-[50px] xl:max-h-[70px]" :src="weatherIcon" :alt="weatherCode" />
    <div class="text-center text-xl font-bold">{{ temperature }}°</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const dayName = ref<string>('');

const weatherCode = computed(() => props.data.weather[0]?.main.toLowerCase());

const temperature = computed(() => { 
  const value = props.data.temp.max.toFixed(0);
  return value === '-0' ? '0' : value;
});

const weatherIcon = computed(() => `/icons/weather/${weatherCode.value}.webp`);

onMounted(() => {
  const date = new Date(props.data.dt * 1000);
  dayName.value = date.toLocaleDateString('en-US', { weekday: 'short' });
})
</script>