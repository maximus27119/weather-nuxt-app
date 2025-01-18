<template>
  <div class="weather-details">
      <img class="weather-details__logo" src="@/public/icons/cloudy.png" alt="sunny"></img>
      <div class="weather-details__temperature-container">
        <div class="weather-details__temperature">
          25°
        </div>
        <div class="weather-details__unit-switch">
          <p>C</p>
          <p>F</p>
        </div>
      </div>
      <div class="weather-details__details">
        <p>Feels Like: 27°C</p>
        <p>Condition: Partly Cloudy</p>
        <p>Wind Speed: 10 km/h</p>
        <p>Humidity: 60%</p>
      </div>
  </div>
</template>

<style scoped lang="scss">
.weather-details {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__logo {
    max-height: 200px;
  }

  &__temperature-container {
    padding: 15px 0;
    display: flex;
  }

  &__temperature {
    font-size: 95px;
    font-weight: bold;
    padding-right: 10px;
    line-height: 1;
  }

  &__unit-switch {
    font-size: 30px;
    display: flex;
    flex-direction: column;
  }

  &__details {
    font-size: 25px;
    text-align: center;
  }
}
</style>