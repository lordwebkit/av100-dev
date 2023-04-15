<template>
  <button class="a-btn">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.a-btn {
  width: 100%;
  background: #2dc574;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 1.3rem 2rem;
  text-align: center;
  transition: all .3s;
  user-select: none;
  white-space: nowrap;
  margin-bottom: 15px;

  &:hover {
    background: #26a763;
  }

  &:active {
    background: #229457;
  }
}
</style>