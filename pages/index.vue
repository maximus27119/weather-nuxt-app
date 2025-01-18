<template>
  <div class="dialog-container">
    <Dialog>
      <div class="dialog-content__weather">
        <WeatherDetails />
      </div>
      <HorizontalDivider class="horizontal-divider" />
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
@import "@/assets/styles/breakpoints";

.dialog-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  &__weather {
    @include respond-to('lg') {
      display: flex;
      width: 50%;
      max-width: 50%;
    }
  }

  &__forecast-outfit {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    @include respond-to('lg') {
      width: 50%;
      flex-direction: column;
    }
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
    padding-bottom: 50px;

    @include respond-to('lg') {
      padding-bottom: 0;
    }
  }
}

.horizontal-divider {
  @include respond-to('lg') {
    display: none;
  }
}
</style>