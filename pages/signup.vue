<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      font-awesome-icon(icon='chevron-right')
      | &nbsp;建立帳號
    .content
      form#signup-form(@submit.prevent="signup")
        label.input
          span
            font-awesome-icon(:icon="['far', 'envelope']")
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@ioicamp.org",
            v-model="account.email"
          )
        label.input
          span
            font-awesome-icon(icon='lock')
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
            font-awesome-icon(icon='key')
            | &nbsp;密碼
          input(
            type="password",
            placeholder="your password",
            v-model="account.password"
          )
        label.input(:class="{ error: !samePassword }")
          span
            font-awesome-icon(icon='check-double')
            | &nbsp;確認密碼
          input(
            type="password",
            placeholder="your password",
            v-model="checkPassword"
          )
        .right
          button#signup-btn.submit 報名
    h2
      font-awesome-icon(icon='chevron-right')
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
    title: "我要報名",
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
  middleware: 'auth',
  auth: 'guest',
  computed: {
    samePassword() {
      return this.account.password === this.checkPassword;
    },
  },
  methods: {
    scrollToTop() {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        scrollTo(0, currentScroll - currentScroll / 5);
        requestAnimationFrame(this.scrollToTop);
      }
    },
    async getToken() {
      this.popout.msg = "獲得驗證信中...";
      this.popout.status = "info";
      try {
        const response = await this.$axios.post("/api/get-verification-token", {
          email: this.account.email,
        });
        this.popout.msg = "趕快去收驗證信吧！";
        this.popout.status = "success";
      } catch (e) {
        this.popout.status = "error";
        if (!e.response || !e.response.data) {
          this.popout.msg = "好像壞掉了，請跟我們聯絡 Q_Q";
        } else if (e.response.data.error === "Request too fast") {
          this.popout.msg = "不要一直戳我拉 QwQ";
        } else if (e.response.data.error === "Unknown error") {
          this.popout.msg = "這個信箱有問題耶，請確認一下";
        } else {
          this.popout.msg = "我們伺服器可能燒起來了，請聯繫我們 !";
        }
      }
      this.scrollToTop();
    },
    async signup() {
      if (!this.samePassword) {
        this.popout.msg = "請確認密碼是否相同呦~";
        this.popout.status = "error";
        this.scrollToTop();
        return;
      }
      if (this.account.password !== this.samePassword) {
        this.popout.msg = "密碼不能是空的窩~(>_<。)＼";
        this.popout.status = "error";
        this.scrollToTop();
        return;
      }
      this.popout.msg = "註冊中...";
      this.popout.status = "info";
      try {
        const response = await this.$axios.$post("/api/register", this.account);
        this.popout.msg = "註冊成功!";
        this.popout.status = "success";
        this.scrollToTop();
        const loginResponse = await this.$auth.loginWith("IOICStrategy", {
          data: {
            email: this.account.email,
            password: this.account.password
          },
        });
      } catch (e) {
        this.popout.status = "error";
        if (!e.response || !e.response.data) {
          this.popout.msg = "好像壞掉了，請跟我們聯絡 Q_Q";
        } else if (e.response.data.error === "Token not found") {
          this.popout.msg = "「信箱驗證碼」有填對嗎？";
        } else if (e.response.data.error === "User already exists") {
          this.popout.msg = "怎麼辦? 信箱被註冊走了耶";
        } else {
          this.popout.msg = "發生怪怪的錯誤了，請聯繫我們 ಥ_ಥ";
        }
        this.scrollToTop();
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
