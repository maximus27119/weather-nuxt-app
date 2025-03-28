<template>
  <div class="w-full h-full flex flex-col justify-around items-center text-xl">
    <p class="text-center pb-5 font-bold">Clothes recommendations</p>
    <div class="grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-2.5 pb-7">
      <ClothesRecommendationsItem
          v-for="(item, index) in clothingSuggestions"
          :key="index"
          :clothing="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const temperature = computed(() => props.data.temp);
const weather = computed(() => String(props.data.weather[0]?.main).toLowerCase());

const getClothingSuggestion = (temperature: number, weatherType: string) => {
  let clothing: string[] = [];

  // Hot Weather (Above 30°C / 86°F)
  if (temperature > 30)
    clothing = ['t-shirt', 'shorts', 'sandals', 'sunglasses'];

  // Warm Weather (20–30°C / 68–86°F)
  else if (temperature > 20 && temperature <= 30)
    clothing = ['t-shirt', 'shorts', 'sneakers'];

  // Mild Weather (10–20°C / 50–68°F)
  else if (temperature > 10 && temperature <= 20)
    clothing = ['shirt', 'jacket', 'jeans', 'sneakers'];

  // Cool Weather (0–10°C / 32–50°F)
  else if (temperature > 0 && temperature <= 10)
    clothing = ['sweater', 'coat', 'jeans', 'boots'];

  // Cold Weather (Below 0°C / 32°F)
  else if (temperature <= 0)
    clothing = ['coat', 'thermal layers', 'jeans', 'boots', 'gloves'];

  if (weatherType === 'rain')
    clothing.push('umbrella');

  return clothing;
};

const clothingSuggestions = computed(() => {
  return getClothingSuggestion(temperature.value, weather.value);
});
</script>
