<template>
  <div class="page">
    <!-- 导航 -->
    <NavBar></NavBar>
    <!-- main -->
    <div class="wrap">
      <div class="main">
        <img class="logo" src="@site/assets/images/logo.svg" alt="">
        <h4 class="main_title">ButterFly中文网</h4>
        <div class="btns">
          <a href="javascript:;" class="btn_premary" @click="handleStart">开始</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import NavBar from '../components/nav-bar.vue';

const router = useRouter();

const handleStart = () => {
  router.push({ name: 'guide' });
}

</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 100px;
  }
  .main_title {
    font-size: 40px;
  }
  .btns {
    font-size: 16px;
    .btn_premary {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      background: #646cff;
      color: #fff;
      border-radius: 4px;
      &:hover {
        text-decoration: none;
        background: #747bff;
      }
    }
  }
}
</style>
