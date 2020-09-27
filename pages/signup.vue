<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      i.fas.fa-chevron-right
      | &nbsp;建立帳號
    .content
      form#signup-form(@submit.prevent="signup")
        label.input
          span
            i.far.fa-envelope
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@gmail.com",
            v-model="account.email"
          )
        label.input
          span
            i.fas.fa-lock
            | &nbsp;信箱驗證碼
          input.has-right(
            type="text",
            placeholder="e.g. 1A2b3C",
            v-model="account.token"
          )
          .trigger.zero-relative
            .btn(@click="getToken") 取得
        label.input
          span
            i.fas.fa-key
            | &nbsp;密碼
          input(
            type="password",
            placeholder="your password",
            v-model="account.password"
          )
        label.input(:class="{ error: !samePassword }")
          span
            i.fas.fa-check-double
            | &nbsp;確認密碼
          input(
            type="password",
            placeholder="your password",
            v-model="checkPassword"
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
  .cutter
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
      checkPassword: "",
      account: {
        email: "",
        password: "",
        token: "",
      },
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  computed: {
    samePassword() {
      return this.account.password === this.checkPassword;
    },
  },
  methods: {
    async getToken() {
      try {
        const response = await this.$axios.post("/api/get-verification-token", {
          email: this.account.email,
        });
        this.popout.msg = "趕快去收驗證信吧！";
        this.popout.status = "success";
      } catch (e) {
        this.popout.status = "error";
        if (e.response.data.error === "Request too fast") {
          this.popout.msg = "不要一直戳我拉 QwQ";
        } else if (e.response.data.error === "Unknown error") {
          this.popout.msg = "我們寄不出信了，請跟我們連繫@@";
        } else {
          this.popout.msg = "我們伺服器可能燒起來了，請聯繫我們 !";
        }
      }
    },
    async signup() {
      if (!this.samePassword) {
        this.popout.msg = "請確認密碼是否相同呦~";
        this.popout.status = "error";
        return;
      }
      try {
        const response = await this.$axios.$post("/api/register", this.account);
        this.popout.msg = "註冊成功，請重新登入!";
        this.popout.status = "success";
        const loginResponse = await this.$auth.loginWith("IOICStrategy", {
          data: {
            email: this.account.email,
            password: this.account.password
          },
        });
      } catch (e) {
        this.popout.status = "error";
        if (e.response.data.error === "Token not found") {
          this.popout.msg = "「信箱驗證碼」有填對嗎？";
        } else if (e.response.data.error === "User already exists") {
          this.popout.msg = "怎麼辦? 信箱被註冊走了耶";
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-bottom: 70px;
  padding-left: 20vw;
  padding-right: 20vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
