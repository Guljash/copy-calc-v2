<template>
  <div class="calc-wrapper">
    <div class="calc">
      <p>Калькулятор</p>
      <div class="count-form">
        <TopBtns/>
        <CountTable/>
      </div>
      <div class="count-total">
        <p>ИТОГО:</p>
        <p>16 459 &#8381;</p>
      </div>
      <div class="count-input">
        <input type="text">
        <div class="btns">
          <button class="vc">Артикул</button>
          <button class="count active">Количество</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TopBtns from "@/components/Dashboard/Calculator/TopBtns";
import CountTable from "@/components/Dashboard/Calculator/CountTable";

export default defineComponent({
  name: 'Calculator',
  components: {
    TopBtns, CountTable
  },
})
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
