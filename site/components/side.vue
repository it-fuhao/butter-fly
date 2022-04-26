<template>
  <div class="side">
    <div v-for="(side, index) in sideList" :key="index" class="side_item">
      <h5 class="side_title">{{ side.sideName }}</h5>
      <div class="route_list">
        <p
          v-for="(route, i) in side.sideItems"
          :key="i"
          :title="route.title"
          :class="{ active: currentRoute.name === route.name }"
          @click="handleSideClick(route)"
        >
          {{ route.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { IRoute } from '../../butterfly.config';
const props = defineProps(['sideList', 'currentRoute']);

// 切换sideItem
const emit = defineEmits(['handleSideClick']);
const handleSideClick = (route: IRoute) => {
  emit('handleSideClick', route);
};
</script>
<style lang="scss" scoped>
.side {
  width: 260px;
  height: 100%;
  padding: 20px 0;
  overflow-y: auto;
}
.side_item {
  .side_title {
    font-size: 18px;
    font-weight: 700;
    padding: 8px 0;
    padding-left: 20px;
  }
}
.route_list {
  p {
    color: #666;
    font-size: 15px;
    line-height: 34px;
    padding-left: 28px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      color: #646cff;
    }
  }
  .active {
    color: #646cff;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #646cff;
    }
  }
}
</style>
