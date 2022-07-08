<template>
  <div class="calc-wrapper">
    <div class="calc">
      <p>Калькулятор</p>
      <div class="count-form">
        <div class="top_buttons">
          <button>Скидка по позиции</button>
          <button>Скидка на чек</button>
        </div>
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
                <tr v-for="(el, i) of temp" :key="i">
                  <td>101</td>
                  <td>50</td>
                  <td>150 &#8381;</td>
                  <td>на чек 40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="count-total"></div>
      <input class="count-input" type="text">
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Calculator',
  data() {
    return {
      temp:[1,2,3,4,5,6,7,8,9,0,3,2,31,3,1,3],
    }
  }
})
</script>

<style scoped>
  .calc-wrapper {
    grid-area: calc;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .calc {
    box-sizing: border-box;
    padding: 20px 40px 40px 40px;
    min-width: 500px;
    min-height: 740px;
    background: #FFFFFF;
    box-shadow: 0 1px 2px rgba(89, 89, 89, 0.32);
    border-radius: 1.5em;
    text-align: left;
    display: grid;
    grid-template-rows: 24px 510px 56px 56px;
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

  /*муть для 4к мониторов*/
  .top_buttons {
    min-width: 420px;
    display: flex;
  }

  .top_buttons button {
    display: block;
    height: 60px;
    background-color: #327AB1;
    width: 50%;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
  }

  .top_buttons button:hover {
    background-color: #1563b1;
  }

  .top_buttons button:first-child {
    border-radius: 1.5em 0 0 0;
    border-right: 1px solid #fff;
  }

  .top_buttons button:last-child {
    border-radius: 0 1.5em 0 0;
    border-left: 1px solid #fff;
  }

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

  .count-total {
    background-color: #327AB1;
  }

  .count-input {
    border: 1px solid #A3ADB9;
  }

  @media all and (max-width: 1200px) {
    .calc-wrapper {
      justify-content: center;
    }
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
