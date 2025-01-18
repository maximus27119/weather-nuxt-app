<template>
  <div class="clothes-recommendations">
    <p class="clothes-recommendations__title">Clothes recommendations</p>
    <div class="clothes-recommendations__recommendations">
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
      <ClothesRecommendationsItem/>
    </div>
    <div class="clothes-recommendations__style-switcher">
      <span>Choose style:</span><IconButton/><IconButton/><IconButton/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clothes-recommendations {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;

  &__title {
    text-align: center;
    padding-bottom: 20px;
    font-weight: bold;
  }

  &__recommendations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px 30px;
  }

  &__style-switcher {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-bottom: 10px;
  }
}
</style>

<script setup lang="ts">
import IconButton from '~/components/ClothesRecommendations/IconButton.vue';
</script>