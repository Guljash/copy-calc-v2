<template>
  <div class="sidebar">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar'
})
</script>

<style scoped>
  .sidebar {
    background-color: #3C3C3C;
    height: 100%;
  }

  @media all and (max-width: 575px) {
    .sidebar {
      display: none;
    }
  }
</style>
