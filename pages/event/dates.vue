<template lang="pug">
.container
  h1.title
    i.far.fa-calendar-alt
    | &nbsp;課程主題
  .dates
    table
        tr
          th
          th 1/19 (日)
          th 1/20 (一)
          th 1/21 (二)
          th 1/22 (三)
          th 1/23 (四)
        tr
          td 08:30~09:00
          td(colspan="1")  
          td(colspan="4") 集合 / 早餐
        tr
          td 09:00~10:00
          td 報到
          td(rowspan="2") 資料結構初階
          td(rowspan="2") 字串
          td(rowspan="2") 資料結構進階
          td(rowspan="1") 團體照/賽前準備
        tr
          td 10:00~12:20
          td(rowspan="1") 電腦結構與常數優化
          td(rowspan="5") 正式賽
        tr
          td 12:30~13:30
          td(colspan="4") 午餐
        tr
          td 13:30~14:00
          td(rowspan="5") 動態規劃跟圖論
          td(rowspan="2" colspan="3") 彈性時間
        tr
          td 14:00~14:30
        tr
          td 14:30~15:00
          td(rowspan="3") 數學
          td(rowspan="3") 隨機、近似
          td(rowspan="3") 根號算法
        tr
          td 14:30~16:00
          td 頒獎時間
        tr
          td 16:00~17:50
          td(rowspan="3")  
        tr
          td 17:50~19:00
          td(colspan="4") 晚餐 / 交流
        tr
          td 19:00~22:00
          td 趣味賽
          td 練習賽(個人)
          td 練習賽(團體)
          td 練習賽(個人)
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: {
    title: 'IOICcamp 2021 - 集訓內容',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space;
  padding-left: 6vw;
  padding-right: 6vw;
  padding-bottom: 5vh;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  h1.title {
    color: #ffe300;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;

    font-weight: 300;
  }
  .dates {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 20px;
    font-size: 1.3em;
    overflow: auto;
    text-align: center;
    table {
      background: #fff;
      border-collapse: collapse;
      border-spacing: 0;
      border: 0;
      display: inline-block;
      margin: 0 auto;
      tr {
        border: 0;
      }
      td, th {
        border-style: solid;
        border-width: 1px;
        border-color: black;
        padding: 5px 10px;
      }
    }
  }
}
</style>
