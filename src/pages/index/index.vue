<script setup lang="ts">
import { ref } from "vue";

const title = ref("uniapp-vue3-ts-template")
</script>

<template>
  <view class="container">
    <text class="title">{{ title }}</text>
    <button
      :disabled="false"
      :loading="false"
      type="primary"
      hover-class="button-hover"
      @click=""
    >
      hello uniapp
    </button>
    <uni-badge
      text="你好"
      type="error"
      size="normal"
    />
  </view>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 34rpx;
  color: #111827;
}
</style>
