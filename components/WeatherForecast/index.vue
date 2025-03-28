<template>
  <div class="w-full flex justify-evenly">
    <WeatherForecastItem v-for="(item, index) in forecast" :data="item" :key="index"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const forecast = computed(() => props.data?.slice(1, 6))
</script>