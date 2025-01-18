<template>
  <button title="Elegant" class="icon-button" type="button" >
    <img src="@/public/icons/football-shirt.png" alt="elegant">
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  opacity: 0.5;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;

  &:hover {
    opacity: 1;
  }

  .icon {
    font-size: 16px;
  }
}
</style>