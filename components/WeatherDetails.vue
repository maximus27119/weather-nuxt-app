<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <img class="max-h-48" src="@/public/icons/cloudy.png" alt="sunny">
    <div class="py-4 flex">
      <div class="text-6xl font-bold pr-2 leading-none">
        25°
      </div>
      <div class="text-2xl flex flex-col">
        <p>C</p>
        <p>F</p>
      </div>
    </div>
    <div class="text-xl text-center">
      <p>Feels Like: 27°C</p>
      <p>Condition: Partly Cloudy</p>
      <p>Wind Speed: 10 km/h</p>
      <p>Humidity: 60%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherDetails'
}
</script>