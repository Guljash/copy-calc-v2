<template>
  <div class="calc-wrapper">
    <div class="calc">
      <p>Калькулятор</p>
      <div class="count-form">
        <div class="top_buttons">
          <button></button>
          <button></button>
        </div>
        <div class="table">

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
  name: 'Calculator'
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
    grid-template-rows: 1.5em 75% 3.5em 3.5em;
    grid-row-gap: calc((100% - (75% + 8.5em))/3);
  }

  .calc>*{
    border-radius: 1.5em;
  }

  .count-form {
    border: 1px solid #A3ADB9;
  }

  .top_buttons {
    display: flex;
  }

  .top_buttons button {
    display: block;
    height: 5em;
    background-color: #327AB1;
    width: 50%;
    border: none;
  }

  .top_buttons button:first-child {
    border-radius: 1.5em 0 0 0;
    border-right: 1px solid #fff;
  }

  .top_buttons button:last-child {
    border-radius: 0 1.5em 0 0;
    border-left: 1px solid #fff;
  }

  .table {

  }

  .count-total {
    background-color: #327AB1;
  }

  .count-input {
    border: 1px solid #A3ADB9;
  }

  .calc>p{
    font-size: 1.5em;
    line-height: 24px;
  }

  @media all and (max-width: 1200px) {
    .calc-wrapper {
      justify-content: center;
    }
  }
</style>
