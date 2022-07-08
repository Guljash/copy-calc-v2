<template>
  <div class="sidebar">
    <div class="grid-wrapper">
      <div>
        <div>logo</div>
      </div>
      <div>
        <div>не закрывать</div>
        <div>копировать</div>
        <div>скачать</div>
      </div>
      <div>
        <div>это меню</div>
      </div>
      <div>
        <div>справка</div>
        <div>ночной режим</div>
      </div>
    </div>
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
    color: #fff;
    font-weight: 500;
  }

  .grid-wrapper {
    min-height: 768px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px 0;
    box-sizing: border-box;
  }

  .grid-wrapper>div:last-child {
    align-self: end;
  }

  .grid-wrapper>div:first-child {
    align-self: start;
  }

  .grid-wrapper>div div {
    margin: 50px 0;
  }

  @media all and (max-width: 575px){
    .sidebar {
      display: none;
    }
  }
</style>
