<template>
  <div class="weather-forecast-item">
    <div class="weather-forecast-item__day">Sun</div>
    <img class="weather-forecast-item__weather-image" src="@/public/icons/sunny.png" alt="cloudy" />
    <div class="weather-forecast-item__temperature">25°</div>
  </div>
</template>

<style scoped lang="scss">
.weather-forecast-item {
  display: flex;
  flex-direction: column;

  &__day, &__temperature {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  &__weather-image {
    max-height: 70px;
  }
}
</style>