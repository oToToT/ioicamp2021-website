<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      i.fas.fa-chevron-right
      | &nbsp;登入
    .content
      form#signin-form(@submit.prevent="signin")
        label.input
          span
            i.far.fa-envelope
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@gmail.com",
            v-model="login.email"
          )
        label.input
          span
            i.fas.fa-key
            | &nbsp;密碼
          input(
            type="password",
            placeholder="your password",
            v-model="login.password"
          )
        .right
          button#signin-btn.submit(type="submit") 登入
    h2
      i.fas.fa-chevron-right
      | &nbsp;沒有帳號？
    .content
      p
        NuxtLink(to="/signup/") 立即報名
        | &nbsp;IOICamp 2021！
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IOICcamp 2021 - 登入",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  methods: {
    async signin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response.data);
        console.log(this.$auth.loggedIn)
      } catch (e) {
        this.popout.status = 'error';
        if (e.response.data.error === "User not found") {
          this.popout.msg = '帳號或密碼錯誤~';
        } else {
          this.popout.msg = '不知道發生什麼事了，可以聯絡我們嗎?';
        }
      }
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
