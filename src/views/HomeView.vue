<template>
  <div class="home" :class="{'night-mode': isNightMode}">
    <SideBar/>
    <Dashboard/>
  </div>
</template>

<script lang="ts" setup>
import SideBar from '@/components/SideBar/SideBar.vue'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import useNightMode from "@/components/SideBar/use/useNightMode";

const {isNightMode} = useNightMode()


</script>

<style scoped>
.home {
  background-color: #E5E5E5;
  display: grid;
  grid-template-columns: 140px 1fr;
  min-height: 100vh;
  min-width: 100vw;
  transition: background-color 0.5s ease-in-out;
}

.home.night-mode {
  background-color: #3C3C3C;
}

@media all and (max-width: 575px) {
  .home {
    grid-template-columns: 1fr;
  }
}
</style>
