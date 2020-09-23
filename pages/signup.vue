<template lang="pug">
.container
  form-section
    h1
      i.fas.fa-chevron-right
      | &nbsp;建立帳號
    .content
      form#signup-form
        label.input
          span
            i.far.fa-envelope
            | &nbsp;信箱
          input(type="email", placeholder="nobugnolife@gmail.com")
        label.input
          span
            i.fas.fa-key
            | &nbsp;密碼
          input(
            type="password",
            placeholder="your password",
            v-model="password"
          )
        label.input(:class="{ error: passwordChecked }")
          span
            i.fas.fa-check-double
            | &nbsp;確認密碼
          input(
            type="password",
            placeholder="your password",
            v-model="password2"
          )
        .right
          button#signup-btn.submit 報名
    h2
      i.fas.fa-chevron-right
      | &nbsp;已經有帳號？
    .content
      p
        NuxtLink(to="/signin/") 馬上登入
        | &nbsp;IOICamp 2021！
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IOICcamp 2021 - 我要報名",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  data() {
    return {
      password: "",
      password2: "",
    }
  },
  computed: {
    passwordChecked() {
      return this.password !== this.password2;
    },
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
