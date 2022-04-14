<template>
  <div class="markdown">
    <Aaa />
  </div>
</template>
<script lang='ts' setup>
import { ref, nextTick } from 'vue';
import Aaa from './aaa.md';
import Prism from 'prismjs';
import '../assets/style/prism.css';


Prism.highlightAll();



</script>
<style lang="scss" scoped>
.markdown {
  padding-right: 440px;
  padding-bottom: 100px;
  min-width: 1000px;
  overflow-x: auto;
}
</style>