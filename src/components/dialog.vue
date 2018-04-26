<template>
  <div class="dialog">
    <div>
      <!-- 表頭及標題 -->
      <slot name="header"></slot>
    </div>
    <div>
      <!-- 內容區域 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  data() {
    return {

    };
  },
};
</script>

<style scoped>
  .dialog {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    display: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    z-index: 500;
  }
</style>
