<template>
  <div class="clothes-recommendations__item">
    <img class="clothes-recommendations__item-image" src="@/public/icons/jacket.png" alt="jacket"/>
    <p class="clothes-recommendations__item-title">
      Jacket
    </p>
  </div>
</template>

<style scoped lang="scss">
.clothes-recommendations__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-image {
    max-width: 100px;
  }
}
</style>