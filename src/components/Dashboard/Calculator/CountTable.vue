<template>
  <div class="count-table">
    <div class="table-body-scroll">
      <table>
        <thead>
        <tr>
          <td></td>
          <td>Количество</td>
          <td>Цена</td>
          <td>Скидка</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(sku, i) of skuItems" :key="i" @click="$emit('sku-clicked', sku.id)">
          <td :class="sku.active ? 'active' : ''">{{sku.id}}</td>
          <td>{{sku.multiplier}}</td>
          <td>{{sku.count}} &#8381;</td>
          <td>{{sku.discount ? `${sku.discount}%` : ''}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from 'vue';
import {Sku} from '@/types'

const props = withDefaults(defineProps<{
  skuItems?: Sku[],
}>(), {
  skuItems: () => [],
})
</script>

<style scoped>

.count-table {
  padding:0 20px;
  width: 420px;
  box-sizing: border-box;
  overflow-y: auto;
}

.count-table table {
  text-align: center;
  width: 100%;
  font-weight: 500;
  border-spacing: 0;
  border-collapse: collapse;
}

.table-body-scroll thead{
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  font-weight: 600;
  background-color: #fff;
  position: sticky;
  top: 0;
  transition: background-color 0.5s ease-in-out;
}

.night-mode .table-body-scroll thead{
  background-color: #1F1F1F;
}

.night-mode .table-body-scroll thead{
  color: white;
}

.table-body-scroll thead td:first-child {
  width: 60px;
}

.table-body-scroll {
  height: 430px;
  margin-top: 20px;
}

.table-body-scroll tbody td {
  height: 35px;
  background-color: #d1d6dc;
}
.table-body-scroll tbody tr {
  cursor: pointer;
  border-bottom: 1px solid #C2C2C2;
}

.table-body-scroll tbody td:first-child {
  width: 60px;
  background-color: #A3ADB9;
  color: #fff;
}

.active {
  background-color: black !important;
}


::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #A3ADB9;
}
</style>
