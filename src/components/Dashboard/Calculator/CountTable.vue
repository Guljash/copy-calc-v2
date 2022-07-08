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
</template>

<script>
export default {
  name: "TopBtns",
  data() {
    return {
      temp:[1,2,3,4,5,6,7,8,9,0,3,2,31,3,1,3],
    }
  }
}
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
