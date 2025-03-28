<template>
  <div
      class="bg-cover bg-center bg-no-repeat bg-fixed h-full lg:h-screen"
      :style="{ backgroundImage: `url('/images/background${randomImage}.webp')` }"
  >
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
const randomImage = Math.floor(Math.random() * 3);
</script>
