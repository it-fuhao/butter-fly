<template>
  <div class="nav_bar">
    <!-- 左侧 -->
    <div class="left" @click="handleReturnIndex">
      <img class="logo" src="@site/assets/images/logo.svg" alt="">
      <h4 class="main_title">Butterfly</h4>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <!-- TODO -->
    </div>
  </div>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const handleReturnIndex = () => {
  router.push({ name: 'index' });
}
</script>
<style lang="scss" scoped>
.nav_bar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 24px;
}
.left {
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  .main_title {
    font-size: 1.3rem;
    cursor: pointer;
  }
}
</style>