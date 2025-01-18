<template>
  <div class="dialog-container">
    <Dialog>
      <div class="dialog-content__weather">
        <WeatherDetails />
      </div>
      <div class="dialog-content__forecast-outfit">
        <div class="dialog-content__outfit">
          <ClothesRecommendations/>
        </div>
        <div class="dialog-content__forecast">
          <WeatherForecast/>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped lang="scss">
.dialog-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  &__weather {
    display: flex;
    width: 50%;
    max-width: 50%;
  }

  &__forecast-outfit {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__outfit {
    flex: 1 1 auto;
  }

  &__forecast {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    flex: 0 0 auto;
  }
}
</style>