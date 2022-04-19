<template>
  <BFButtonTsx @click="handleClick">tsx按钮组件</BFButtonTsx>
</template>

<script setup lang="ts">
import BFButtonTsx from '@/packages/button-tsx';
const handleClick = () => {
  console.log(123);
}
</script>

<style>
</style>
