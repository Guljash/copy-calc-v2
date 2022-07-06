<template>
  <div class="events-wrapper"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpecialEvents'
})
</script>

<style scoped>
  .events-wrapper{
    background: #327AB1;
    box-shadow: 0 1px 2px rgba(18, 53, 80, 0.24);
    border-radius: 1.5em;
    grid-area: events;
  }
</style>
