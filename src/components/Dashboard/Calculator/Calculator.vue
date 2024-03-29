<template>
  <div class="calc-wrapper">
    <div class="calc">
      <p>Калькулятор</p>
      <div class="count-form">
        <TopBtns @discount-click="onDiscountClick"/>
        <CountTable @sku-clicked="refreshSkuActive" :skuItems="skuItems"/>
      </div>
      <div class="count-total">
        <p>ИТОГО:</p>
        <p>{{ countSum }} &#8381;</p>
      </div>
      <div class="count-input">
        <input @keypress.enter="addSku(inputModel)"
               @keypress.+="addMultiplier(parseInt(inputModel))"
               @keydown.-="deleteSku"
               v-model="inputModel"
               type="text"
        >
        <div class="btns">
          <button class="vc" :class="{'active': isSkuActiveBtn}" @click="addSku(inputModel)">{{isSkuActiveBtn ? 'Артикул' : ''}}</button>
          <button class="count" :class="{'active': isCountActiveBtn}" @click="addMultiplier(parseInt(inputModel))">{{isCountActiveBtn ? 'Количество' : ''}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import TopBtns from "@/components/Dashboard/Calculator/TopBtns.vue";
import CountTable from "@/components/Dashboard/Calculator/CountTable.vue";
import useMainCalculation from "@/components/Dashboard/Calculator/use/useMainCalculation";
import db from "@/db/db";
import {get, set} from "@vueuse/core";

const {addSku, addMultiplier, addDiscount, deleteSku, refreshSkuActive, countSum, skuItems} = useMainCalculation()

const skuIds = db.map(sku => sku.id)
const isSkuActiveBtn = ref<boolean>(false)
const isCountActiveBtn = ref<boolean>(false)
const inputModel = ref('')

watch(inputModel, (val) => {
  if (!val) {
    set(isCountActiveBtn, false)
    set(isSkuActiveBtn, false)
    return
  }

  /** На нампаде удобно набирать и точку, и запятную. Для это ставил тип инпута 'text' и вот эту проверку */
  const regExp = /[0-9]*[.,]?[0-9]*/
  const validatedArray = val.match(regExp)

  set(inputModel, Array.isArray(validatedArray) ? validatedArray[0].replace('.', ',') : '')

  set(isCountActiveBtn, !!get(inputModel) && !skuIds.includes(parseInt(get(inputModel))))
  set(isSkuActiveBtn, skuIds.includes(parseInt(get(inputModel))))
})

watch(skuItems, () => {
    set(inputModel, '')
})

const onDiscountClick = (isDiscountForAll: boolean) => {
    /** А тут обратно меняем запятую на точку, чтобы парсер распознал дробное число */
    addDiscount(parseFloat(get(inputModel).replace(',', '.')), isDiscountForAll)
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
    transition: background-color 0.5s ease-in-out;
  }

  .night-mode .calc {
    background-color: #1F1F1F;
  }

  .night-mode .calc p{
    color: white;
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
    min-width: 40px;
    max-width: 40px;
    background-repeat: no-repeat;
    background-position: center center;
    transition: min-width 0.2s ease-in-out;
    overflow-x: hidden;
  }

  .count-input .count {
    margin-right: 10px;
  }

  .count-input button:first-child {
    background-image: url('~@/assets/sku.svg');
  }

  .count-input button:last-child {
      background-image: url('~@/assets/count.svg');
  }

  .count-input button.active:first-child {
    min-width: 70px;
  }

  .count-input button.active:last-child {
    min-width: 90px;
  }

  .count-input button.active {
    background-color: #327AB1;
    background-image: none !important;
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
