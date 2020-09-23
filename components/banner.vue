<template lang="pug">
.container
  .inner
    .titles
      h1 No Bug No Life
      h2 2021 程式解題競賽集訓營
    step-button(:href="nextStep.link" style="font-size:1.2em;") {{ nextStep.text }}
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      nextStep: {
        link: '/signup',
        text: '立即報名',
      },
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  background-image: url('/background.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  text-align: center;
  .titles {
    margin-bottom: 5vh !important;
    color: #e3e3e3;
    word-break: break-word;
    * {
      margin-bottom: 15px !important;
    }
    h1 {
      font-size: 4.5em;
    }
    h2 {
      font-size: 2em;
    }
  }
}
</style>
