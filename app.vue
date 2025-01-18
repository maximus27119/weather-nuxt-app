<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.app {
  background-image: url('/background0.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  height: 100%;

  @include respond-to('lg') {
    height: 100vh;
  }
}
</style>