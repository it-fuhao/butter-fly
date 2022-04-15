<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: "HelloWorld",
  setup() {
    const msg = ref(10064);
    return {
      msg
    }
  }
})
</script>
<style lang="scss">
p {
  font-size: 14px;
}
</style>