<template lang="pug">
.container
  form-section
    h1
      i.fas.fa-chevron-right
      | &nbsp;修改資料
    .content
      form#signin-form
        label.input
          span
            i.far.fa-envelope
            | &nbsp;信箱
          input(type="email", placeholder="nobugnolife@gmail.com")
        label.input
          span
            i.fas.fa-key
            | &nbsp;密碼
          input(type="password", placeholder="your password")
        .right
          button#signin-btn.submit 登入
    h2
      i.fas.fa-chevron-right
      | &nbsp;沒有帳號？
    .content
      p
        NuxtLink(to="/signup/") 立即報名
        | &nbsp;IOICamp 2021！
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IOICcamp 2021 - 修改資料",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-left: 20vw;
  padding-right: 20vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
