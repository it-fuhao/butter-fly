<template>
  <div v-if="uiName" class="markdown">
    <component :is="dynamic.currentMd" />
  </div>
</template>
<script lang='ts' setup>
import { reactive, watch, markRaw, nextTick } from 'vue';
import Prism from 'prismjs';
import '../assets/style/prism.css';

const props = defineProps(['uiName']);

// 动态引入markdown
const dynamic = reactive({
  currentMd: {},
})
const refreshMarkdown = async (uiName: string) => {
  const file = await import(`../../ui/views/${uiName}/README.md`); 
  dynamic.currentMd = markRaw(file.default); 
}

// 监听side切换
watch(
  () => props.uiName, 
  async newValue => {
    if (newValue) {
      // 刷新md文档
      await refreshMarkdown(newValue); 
      // 添加代码块高亮
      await nextTick();
      Prism.highlightAll();
    }
});

</script>

<style lang="scss" scoped>
.markdown {
  padding-right: 440px;
  padding-bottom: 100px;
  min-width: 1000px;
  overflow-x: auto;
}
</style>