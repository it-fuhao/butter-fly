<template>
  <BFButtonTsx @click="handleClick">tsx按钮组件</BFButtonTsx>
</template>

<script setup lang="ts">
import BFButtonTsx from '@/packages/button-tsx';
// console.log(BFButtonTsx);
const handleClick = () => {
  console.log("点击了组件");
}
</script>

<style>
</style>
