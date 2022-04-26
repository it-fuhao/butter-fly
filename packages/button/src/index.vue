<template>
  <div>
    <van-button @click="handleClick">这是一个按钮3</van-button>
    <p>{{ text }}</p>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { Button } from 'vant';
export default defineComponent({
  name: 'BFButton',
  components: {
    [Button.name]: Button,
  },
  setup() {
    let text = ref<string>('');
    const handleClick = () => {
      text.value = '你点击了按钮';
    };

    return {
      text,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped></style>
