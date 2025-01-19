<template>
  <div class="dialog w-full h-full bg-black/30 backdrop-blur-sm shadow-lg xl:max-h-[768px] xl:max-w-[1200px] xl:rounded-lg">
    <div class="dialog-content text-[aliceblue] p-8 w-full h-full flex flex-col xl:p-16 xl:px-16 lg:flex-row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog'
}
</script>
