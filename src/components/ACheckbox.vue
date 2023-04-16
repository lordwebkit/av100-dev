<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" class="checkbox" :id="checkboxId" :checked="checkboxChecked">
    <label class="checkbox" :for="checkboxId" @click.prevent="setCheckbox"></label>
  </div>
</template>
<script>
export default {
  props: ['checkboxId', 'checkboxChecked', 'setCheckbox']
}
</script>
<style lang="scss" scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox-wrapper {
  display: inline-block;
}

.checkbox+label {
  position: relative;
  border: 1px solid #2dc574;
  border-radius: 0.2rem;
  height: 1.8rem;
  width: 1.8rem;
  cursor: pointer;
  margin-right: 10px;
  display: inline-block;
  opacity: 1;
  z-index: 1;
}

.checkbox:checked+label {
  background: #2dc574 url("@/assets/icons/checked.svg") 50% 30% no-repeat;
}
</style>