<template>
  <div class="flex justify-center items-center h-full">
    <Dialog>
      <div class="lg:flex lg:w-1/2 lg:max-w-1/2">
        <WeatherDetails />
      </div>
      <HorizontalDivider class="lg:hidden" />
      <div class="w-full flex flex-col-reverse lg:flex-col lg:w-1/2">
        <div class="flex-1">
          <ClothesRecommendations/>
        </div>
        <div class="flex flex-col w-full justify-between lg:pb-0 pb-12">
          <WeatherForecast/>
        </div>
      </div>
    </Dialog>
  </div>
</template>
