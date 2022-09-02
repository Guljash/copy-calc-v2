<template>
  <div class="wrapper">
    <Calculator/>
    <SpecialEvents/>
    <StatusArea/>
  </div>
</template>

<script lang="ts" setup>
import Calculator from './Calculator/Calculator.vue'
import SpecialEvents from './SpecialEvents.vue'
import StatusArea from './StatusArea.vue'

</script>

<style scoped>
  .wrapper {
    background-color: #E5E5E5;
    padding: 10px;
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-areas:
    "status status calc"
    "status status calc"
    "events events calc";
    grid-row-gap: 10px;
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    transition: background-color 0.5s ease-in-out;
  }

  .night-mode .wrapper {
    background-color: #3C3C3C;
  }
  @media all and (max-width: 1250px) {
    .wrapper {
      padding: 0 20px 20px 20px;
      box-sizing: border-box;
      grid-template-areas:
    "calc"
    "status"
    "events";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, minmax(750px, 100vh));
    }
  }
</style>
