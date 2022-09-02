<template>
  <div class="sidebar">
    <div class="grid-wrapper">
      <div>
        <div><img src="../../assets/logo.svg" alt="logo"></div>
      </div>
      <div>
        <div class="do-not-close"><span>не закрывать</span></div>
        <div><img src="../../assets/copy.svg" alt="copy"></div>
        <div><img src="../../assets/download.svg" alt="download"></div>
      </div>
      <div>
        <div><img src="../../assets/menu.svg" alt="menu"></div>
      </div>
      <div>
        <div><img src="../../assets/info.svg" alt="info"></div>
        <div @click="toggleNightMode"><img src="../../assets/night.svg" alt="night mode"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useNightMode from "@/components/SideBar/use/useNightMode";

const {toggleNightMode, isNightMode} = useNightMode()

</script>

<style scoped>
  .sidebar {
    background-color: #3C3C3C;
    height: 100%;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s ease-in-out;
  }

  .night-mode .sidebar {
    background-color: #1F1F1F;
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
    cursor: pointer;
    margin: 50px 0;
  }

  .do-not-close{
    background: #A3ADB9;
    border: 0.746949px solid #A3ADB9;
    border-radius: 3.73475px;
    align-items: center;
  }

  .do-not-close span{
    font-style: normal;
    font-weight: 700;
    font-size: 8.96339px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3C3C3C;
    padding: 10px;
  }

  @media all and (max-width: 575px){
    .sidebar {
      display: none;
    }
  }
</style>
