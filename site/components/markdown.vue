<template>
  <div class="markdown">
    <mavon-editor
      class="md"
      v-model="webDataString"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
  </div>
</template>
<script lang='ts' setup>
import { ref, onMounted } from 'vue';

let webDataString = ref("123");

</script>
<style lang="scss" scoped>
.markdown {
  padding-right: 440px;
}
</style>