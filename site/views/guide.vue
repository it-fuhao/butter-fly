<template>
  <div class="page">
    <!-- navbar -->
    <div class="navbar">123</div>
    <!-- slide -->
    <div class="slide"></div>
    <!-- main -->
    <div class="main">
      <!-- content -->
      <div class="content"></div>
      <!-- ui -->
      <div class="ui">
        <iframe :src="uiPath" frameborder="0" width="375" height="750"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const baseUrl = window.location.protocol + "//" + window.location.host;
const uiPath = ref('');
uiPath.value = `${baseUrl}/ui/index.html?${String(route.name)}`

console.log(route.name);
</script>
<style>
</style>
