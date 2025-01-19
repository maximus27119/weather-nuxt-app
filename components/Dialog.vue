<template>
  <div class="dialog">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.dialog {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @include bp.respond-to('xl') {
    max-height: 768px;
    max-width: 1200px;
    border-radius: 10px;
  }
}

.dialog-content {
  color: aliceblue;
  padding: 32px 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @include bp.respond-to('xl') {
    padding: 64px 68px;
  }

  @include bp.respond-to('lg') {
    flex-direction: row;
  }
}
</style>