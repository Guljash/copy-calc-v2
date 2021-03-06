<template>
  <div class="calc-wrapper">
    <div class="calc">
      <p>Калькулятор</p>
      <div class="count-form">
        <TopBtns/>
        <CountTable @sku-clicked="refreshSkuActive" :skuItems="skuItems"/>
      </div>
      <div class="count-total">
        <p>ИТОГО:</p>
        <p>16 459 &#8381;</p>
      </div>
      <div class="count-input">
        <input @keypress.enter="addSku"
               @keypress.+.prevent="addMultiplier()"
               v-model="inputModel"
               type="text"
        >
        <div class="btns">
          <button class="vc" @click="addSku">Артикул</button>
          <button class="count active" @click="addMultiplier()">Количество</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import TopBtns from "@/components/Dashboard/Calculator/TopBtns.vue";
import CountTable from "@/components/Dashboard/Calculator/CountTable.vue";
import ISku from "@/types/ISku";

const skuItems = ref<ISku[]>([])
const inputModel = ref<string | null>()

const refreshSkuActive = (id:number): void => {
  skuItems.value.forEach(sku => sku.id === id ? sku.active = true : sku.active = false)
}

watch(inputModel, (val) => {
  if (!val) {
    return
  }

  const validatedArray = val.match(/[0-9]*[.,]?[0-9]*/)

  inputModel.value = Array.isArray(validatedArray) ? validatedArray[0].replace('.', ',') : ''
})

const addSku = (): void => {
  if (!inputModel.value) {
    return
  }
  let dynamicMultiplier = 1
  let dynamicSku:number = parseInt(inputModel.value, 10)
  const alreadyPushedSku = skuItems.value.find(sku => sku.id === dynamicSku)

  if (inputModel.value.includes(',')) {
    const [sku, multiplier] = inputModel.value.split(',')

    dynamicMultiplier = Number(multiplier)
    dynamicSku = Number(sku)
  }

  if (!alreadyPushedSku) {
    skuItems.value.push({id: dynamicSku, multiplier: dynamicMultiplier, count: 10, discount: 0, active: true})
  } else {
    addMultiplier(alreadyPushedSku.multiplier + dynamicMultiplier)
  }

  refreshSkuActive(dynamicSku)
  inputModel.value = ''
}

const addMultiplier = (multiplier:number | null = null): void => {
  if (!inputModel.value) {
    return
  }

  const validMultiplier:number = multiplier ?? parseInt(inputModel.value, 10)

  if (isNaN(validMultiplier)) {
    inputModel.value = ''
    return
  }

  skuItems.value.forEach(sku => sku.active ? sku.multiplier = validMultiplier : '')
  inputModel.value = ''
}
</script>

<style scoped>
  .calc-wrapper {
    grid-area: calc;
    display: flex;
    align-items: center;
    justify-content: right;
    min-height: 730px;
  }

  .calc {
    box-sizing: border-box;
    padding: 20px 40px 40px 40px;
    width: 500px;
    height: 730px;
    background: #FFFFFF;
    box-shadow: 0 1px 2px rgba(89, 89, 89, 0.32);
    border-radius: 1.5em;
    text-align: left;
    display: grid;
    grid-template-rows: 24px 510px 48px 48px;
    grid-row-gap: 20px;
  }

  .calc>*{
    border-radius: 1.5em;
  }

  .calc>p{
    font-size: 1.5em;
    line-height: 24px;
  }

  .count-form {
    position: relative;
    box-sizing: border-box;
    border: 1px solid #A3ADB9;
    width: 420px;
    overflow: hidden;
  }

  .count-total {
    background-color: #327AB1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 18px;
    padding: 20px;
  }

  .count-total p:first-child{
    font-weight: 700;
    justify-self: flex-start;
  }

  .count-total p:last-child{
    font-weight: 500;
    justify-self: flex-end;
  }

  .count-input {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }

  .count-input .btns {
    display: flex;
    z-index: 1;
  }

  .count-input button {
    display: block;
    height: 25px;
    margin: 0 5px;
    background-color: #A3ADB9;
    border-radius: 1.5em;
    padding: 5px 10px;
    text-align: center;
  }

  .count-input .count {
    margin-right: 10px;
  }

  .count-input button.active {
    background-color: #327AB1;
    color: #fff;
  }

  .count-input input {
    position: absolute;
    width: 100%;
    height: 100%;
    outline:none;
    border-radius: inherit;
    font-size: 18px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #A3ADB9;
  }

  @media all and (max-width: 1200px) {
    .calc-wrapper {
      justify-content: center;
    }
  }
</style>
