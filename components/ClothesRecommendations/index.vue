<template>
  <div class="w-full h-full flex flex-col justify-around items-center text-xl">
    <p class="text-center pb-5 font-bold">Clothes recommendations</p>
    <div class="grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-2.5">
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
    </div>
    <div class="flex items-center justify-center leading-none pb-7 lg:pb-2.5">
      <span>Choose style:</span>
      <IconButton/><IconButton/><IconButton/>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButton';
export default {
  name: 'ClothesRecommendations',
  components: { IconButton },
}
</script>