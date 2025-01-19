<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints.scss' as bp;

.app {
  background-image: url('/background0.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  height: 100%;

  @include bp.respond-to('lg') {
    height: 100vh;
  }
}
</style>