<template>
  <div class="ui_preview">
    <div class="mobile_top">
      <p class="left">{{ uiTitle }}</p>
      <p class="right">{{ realTime }}</p>
    </div>
    <iframe :src="uiPath" frameborder="0" width="315" height="550"></iframe>
    <div class="mobile_bottom">
      <div class="icons left" title="刷新页面"></div>
      <div class="icons center" title="扫码预览">
        <QrcodeVue :value="uiPath" :size="size" level="H" class="qrcode_preview"></QrcodeVue>
      </div>
      <a :href="uiPath" target="_blank" class="icons right" title="新窗口打开"></a>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue';
import dayjs from 'dayjs';
const props = defineProps({
  uiPath: {
    type: String,
  },
  uiTitle: {
    type: String,
  },
})

// 实时时间
let realTime = ref<string>('');
setInterval(() => {
  realTime.value = dayjs().format('HH:mm');
}, 1 * 1000);

// 二维码图片大小
const size = ref<number>(96);

</script>
<style lang="scss" scoped>
.ui_preview {
  position: fixed;
  top: 80px;
  right: 48px;
  width: 315px;
  min-width: 315px;
  height: 620px;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 0 14px #090a0d, 0 0 0 16px #9fa3a8, 0 4px 20px 16px rgb(0 0 0 / 10%);
}
.mobile_top {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  font-size: 14px;
  .left {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right {
    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
      margin-bottom: 2px;
      width: 14px;
      height: 5px;
      border-radius: 1px;
      background: #50d664;
      box-shadow: 0 0 0 1px #fff, 0 0 0 2px #999;
    }
  }
}
.mobile_bottom {
  height: 40px;
  background: #f3f3f3;
  border-top: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  .icons {
    padding: 0;
    width: 16px;
    height: 16px;
    box-sizing: content-box;
    border: 2px solid transparent;
    transition: opacity 0.2s, background 0.2s;
    outline: none;
    cursor: pointer;
  }
  .left {
    background-position-x: -144px;
  }
  .center {
    position: relative;
    z-index: 1;
    background-position-x: -218px;
    .qrcode_preview {
      position: absolute;
      bottom: 120%;
      left: 50%;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      box-sizing: content-box;
      transition: all 0.2s ease-in-out;
      transform: translateX(-50%) scale(0);
      transform-origin: center bottom;
    }
    &:hover {
      .qrcode_preview {
        transform: translateX(-50%) scale(1);
      }
    }
  }
  .right {
    background-position-x: -126px;
  }
}
</style>