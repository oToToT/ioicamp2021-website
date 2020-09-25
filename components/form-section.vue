<template lang="pug">
.section
  slot
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.background {
  background-color: $default-background-color;
  min-height: 100vh;
}
a {
  color: #db6d42;
  text-decoration: none;
  transition: 0.3s;
  &:visited {
    color: #db6d42;
  }
  &:hover {
    color: #ff0000;
  }
}
.section {
  background: #fff;
  padding: 25px 5vw 30px 5vw;
  h1,
  h2 {
    font-family: "Noto Serif TC", serif;
    color: #000;
    font-weight: 900;
    margin-bottom: 10px !important;
  }
  p {
    font-size: 1.1em;
  }
  form {
    label.input {
      display: flex;
      margin: 10px 0 !important;
      span {
        font-weight: 300;
        font-family: "Noto Sans TC", sans-serif;
        display: inline-block;
        min-width: 85px;
        width: 20%;
        padding: 5px 10px;
        background: #333;
        color: #e0e0e0;
        margin-right: 10px !important;
      }
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        font-family: "Huninn", sans-serif;
        font-size: 1.2em;
        display: inline-block;
        width: calc(80% - 65px);
        max-width: calc(100% - 135px);
        background: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
        border-radius: 0;
        outline: none;
        &:focus {
          border-bottom-width: 2px;
        }
      }
      &.error {
        span {
          background-color: #900000;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: calc(80% - 95px);
          max-width: calc(100% - 165px);
          border-bottom-color: #900000;
          background-image: url('/flat-2126885.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right center;
          padding-right: 30px;
        }
      }
    }
    .right {
      text-align: right;
    }
    button.submit {
      font-size: 1.2em;
      padding: 5px 35px;
      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.3s;
      background-color: #333;
      color: #fff;
      @keyframes quake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        25% {
          transform: scale(1.06) rotate(3deg);
        }
        50% {
          transform: scale(1.02) rotate(0deg);
        }
        75% {
          transform: scale(1.06) rotate(-3deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      &:hover {
        animation: quake 0.6s infinite;
        @include with-mobile {
          animation: none;
        }
      }
    }
  }
}
</style>
