<template>
  <div class="dialog">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 768px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dialog-content {
  color: aliceblue;
  padding: 64px 68px;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>