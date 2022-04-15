<template>
  <div class="page">
    <!-- navbar -->
    <NavBar></NavBar>
    <div class="wrap">
      <!-- slide -->
      <Side 
        :sideList="sideList"
        :currentRoute="currentRoute"
        @handleSideClick="handleSideClick"
      ></Side>
      <!-- main -->
      <div class="main">
        <!-- content -->
        <Markdown :uiName="currentRoute.name"></Markdown>
      </div>
      <!-- ui -->
      <UiPreview 
        v-if="currentRoute.name" 
        :uiPath="uiPath" 
        :uiTitle="currentRoute.title"
      ></UiPreview>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/nav-bar.vue';
import Side from '../components/side.vue';
import Markdown from '../components/markdown.vue';
import UiPreview from '../components/ui-preview.vue';
import { ref, reactive, computed } from 'vue';
import { useRoute } from "vue-router";
import { side, ISide, IRoute } from '../../butterfly.config';

// 生成ui示例demo路径
const baseUrl = window.location.protocol + "//" + window.location.host;
let uiPath = computed<string>(() => {
  return `${baseUrl}/ui/index.html#/${currentRoute.name}`;
})
// 获取左侧菜单栏
const sideList = reactive<ISide[]>(side);
// 定义当前路由
let currentRoute = reactive({} as IRoute);

// 切换路由
const handleSideClick = (route: IRoute) => {
  currentRoute.path = route.path;
  currentRoute.name = route.name;
  currentRoute.title = route.title;
}

</script>
<style lang='scss' scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.wrap {
  flex: 1;
  height: calc(100% - 58px);
  display: flex;
  align-items: center;
  position: relative;
}
.main {
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 12px;
  padding-right: 0;
}
</style>
