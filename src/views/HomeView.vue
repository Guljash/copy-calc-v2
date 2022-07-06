<template>
  <div class="home">
    <SideBar/>
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue'
import Dashboard from '@/components/Dashboard/Index.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
    Dashboard,
  },
});
</script>

<style scoped>
.home {
  background-color: #E5E5E5;
  display: grid;
  grid-template-columns: 140px 1fr;
  min-height: 100vh;
}

@media all and (max-width: 575px) {
  .home {
    grid-template-columns: 1fr;
  }
}
</style>