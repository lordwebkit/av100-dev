<template>
  <span class="setting-body__checkbox-tooltip checkbox-tooltip" @mouseover="isVisible = true"
    @mouseout="isVisible = false">
    <svg class="checkbox-tooltip__container">
      <use class="checkbox-tooltip__content" href="@/assets/icons/tooltip.svg#i-i-hint"></use>
    </svg>
    <span class="checkbox-tooltip__hint" :class="{ 'checkbox-tooltip__hint--visible': isVisible }">
      <slot></slot>
    </span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0);
  }

  to {
    opacity: 1;
    transform: translateY(10px);
  }
}

.checkbox-tooltip {
  position: relative;
  height: 2rem;

  &__container {
    fill: #cdcdcd;
    display: inline-block;
    cursor: help;
    height: 2rem;
    margin-left: 0.5rem;
    width: 2rem;
  }

  &__content {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    fill: #cdcdcd;
  }

  &__hint {
    display: none;
    justify-content: center;
    align-items: center;
    width: 25rem;
    padding: 1rem 0.4rem;
    border-radius: 0.4rem;
    position: absolute;
    left: calc(50% - 12.25rem);
    top: 80%;
    animation: fadeIn 0.3s;
    text-align: center;
    background-color: #2dc574;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    z-index: 1;
    transform: translateY(10px);

    &::after {
      content: "";
      position: absolute;
      border: 8px solid transparent;
      border-bottom: 8px solid #2dc574;
      bottom: 100%;
      left: calc(50% - 8px);
    }

    &--visible {
      display: flex;
    }
  }
}
</style>