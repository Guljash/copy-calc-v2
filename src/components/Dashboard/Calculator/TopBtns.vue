<template>
  <div class="top_buttons">
    <button @click="onBtnClick(false)">Скидка по позиции</button>
    <button @click="onBtnClick(true)">Скидка на чек</button>
  </div>
</template>

<script setup lang="ts">

import { defineEmits } from 'vue'
const emit = defineEmits(['discount-click'])

const onBtnClick = (isDiscountForAll: boolean) => {
    emit('discount-click', isDiscountForAll)
}

</script>

<style scoped>

.top_buttons {
  width: 420px;
  display: flex;
}

.top_buttons button {
  display: block;
  height: 60px;
  background-color: #327AB1;
  width: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}

.top_buttons button:hover {
  background-color: #205176;
}

.top_buttons button:first-child {
  border-radius: 1.5em 0 0 0;
  border-right: 1px solid #fff;
}

.top_buttons button:last-child {
  border-radius: 0 1.5em 0 0;
  border-left: 1px solid #fff;
}

</style>
