<template>
  <div class="status-wrapper">
    <p>Привет! Давайте начнем работу.</p>
    <img class="status-pic" src="@/assets/home.svg">
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatusArea'
})
</script>

<style scoped>
  .status-wrapper {
    grid-area: status;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .status-wrapper p {
    font-size: 30px;
    line-height: 131.7%;
  }

  .night-mode .status-wrapper p {
    color: white;
  }

  .status-pic {
    min-width: 430px;
    margin-top: 20px;
  }
</style>
