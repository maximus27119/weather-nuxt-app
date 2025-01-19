<template>
  <div class="weather-forecast-item flex flex-col">
    <div class="weather-forecast-item__day text-center text-xl font-bold">Sun</div>
    <img class="weather-forecast-item__weather-image max-h-[50px] xl:max-h-[70px]" src="@/public/icons/sunny.png" alt="cloudy" />
    <div class="weather-forecast-item__temperature text-center text-xl font-bold">25°</div>
  </div>
</template>

<script>
export default {
  name: 'WeatherForecastItem'
}
</script>