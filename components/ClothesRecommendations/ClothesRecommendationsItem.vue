<template>
  <div class="flex flex-col items-center">
    <img class="max-w-[70px] xl:max-w-[100px]" :src="clothIcon" :alt="clothName"/>
    <p>
      {{ clothName }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  clothing: {
    type: String,
    required: true
  }
});

const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const clothIcon = computed(() => `/icons/clothes/${props.clothing}.png`);
const clothName = computed(() => capitalize(props.clothing));
</script>