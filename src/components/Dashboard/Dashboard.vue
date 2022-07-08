<template>
  <div class="wrapper">
    <Calculator/>
    <SpecialEvents/>
    <StatusArea/>
  </div>
</template>

<script>
import Calculator from './Calculator/Calculator.vue'
import SpecialEvents from './SpecialEvents.vue'
import StatusArea from './StatusArea.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Calculator, SpecialEvents, StatusArea
  }
})
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
