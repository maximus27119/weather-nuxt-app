<template>
  <div class="clothes-recommendations__item flex flex-col items-center">
    <img class="clothes-recommendations__item-image max-w-[70px] xl:max-w-[100px]" :src="clothIcon" :alt="clothName"/>
    <p class="clothes-recommendations__item-title">
      {{ clothName }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['clothing']);

const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const clothIcon = computed(() => `/icons/clothes/${props.clothing}.png`);
const clothName = computed(() => capitalize(props.clothing));
</script>