<template>
  <div>
    <button @click="handleClick">这是一个按钮</button>
    <p>{{ text }}</p>
  </div>
</template>
<script lang='ts'>
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    let text = ref<string>('');
    const handleClick = () => {
      text.value = '你点击了按钮';
    }

    return {
      text,
      handleClick
    }
  }
})
</script>
<style lang='scss' scoped>
</style>