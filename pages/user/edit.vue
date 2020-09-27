<template lang="pug">
.container
  form-section
    #msg-popout.message(v-if="popout.msg !== ''", :class="popout.status") {{ popout.msg }}
    h1
      i.fas.fa-chevron-right
      | &nbsp;修改資料
    .content
      form#signin-form(@submit.prevent="updateInfo")
        label.input
          span
            i.far.fa-envelope
            | &nbsp;信箱
          input(
            type="email",
            placeholder="nobugnolife@gmail.com",
            disabled,
            v-model="userInfo['email']"
          )
        label.input
          span
            i.far.fa-user
            | &nbsp;姓名
          input(type="text", placeholder="電人王", v-model="userInfo['name']")
        label.input
          span
            i.fas.fa-venus-mars
            | &nbsp;性別
          input(type="text", placeholder="男 / 女", v-model="userInfo['gender']")
        label.input
          span
            i.fas.fa-school
            | &nbsp;學校
          input(type="text", placeholder="國立臺灣大學", v-model="userInfo['school']")
        label.input
          span
            i.fas.fa-graduation-cap
            | &nbsp;年級
          input(type="text", placeholder="高中三年級", v-model="userInfo['grade']")
        label.input
          span
            i.fas.fa-hourglass-half
            | &nbsp;學程式的時間
          input(type="text", placeholder="5 年以上", v-model="userInfo['code-time']")
        label.input
          span
            i.fas.fa-history
            | &nbsp;接觸競賽的時間
          input(type="text", placeholder="1 年左右", v-model="userInfo['cp-time']")
        label.input
          span
            i.fas.fa-trophy
            | &nbsp;最自豪的獎項
          input(type="text", placeholder="IOI 滿分金、IMO 滿分金", v-model="userInfo['prize']")
        label.input
          span
            i.fas.fa-list-ul
            | &nbsp;OJ IDs
          input(type="text", placeholder="Topcoder, Codeforces, Atcoder...", v-model="userInfo['oj']")
        label.input
          span
            i.fas.fa-align-left
            | &nbsp;報名動機
          textarea(placeholder="我想學會寫程式跟大家一起PK", v-model="userInfo['motivation']")
        label.input
          span
            i.fas.fa-book
            | &nbsp;備註
          input(type="text", placeholder="我要睡電腦教室", v-model="userInfo['comment']")
        .right
          button#signin-btn.submit 儲存
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IOICamp 2021 - 修改資料",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  middleware: "auth",
  data() {
    return {
      userInfo: {
        email: this.$auth.user.email,
        ...this.$auth.user.applyForm
      },
      popout: {
        msg: "",
        status: "",
      },
    };
  },
  methods: {
    async updateInfo() {
      this.popout.msg = "儲存中...";
      this.popout.status = "info";
      try {
        const res = await this.$axios.$put('/api/users/apply-form', this.userInfo);
        this.popout.msg = '成功紀錄了。'
        this.popout.status = 'success';
        setTimeout(()=>location.reload(), 1000);
      } catch(e) {
        this.popout.msg = '我們伺服器怪怪的，請跟我們聯絡 TAT'
        this.popout.status = 'error';
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space + 20px;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 50px;
  @include with-mobile {
    padding-top: $mobile-nav-header-space + 20px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
</style>
