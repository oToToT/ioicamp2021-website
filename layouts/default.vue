<template lang="pug">
.background
  nav-header
  #base
    Nuxt
  info-footer
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Default',
})
</script>

<style lang="scss">
@font-face {
    font-family: "Huninn";
    font-style: normal;
    font-display: swap;
    src: url('/jf-openhuninn-1.1.woff2') format("woff2"),
        url('/jf-openhuninn-1.1.woff') format("woff"),
        url('/jf-openhuninn-1.1.ttf') format("truetype");
}
* {
  margin: 0;
  font-family: "Huninn", "Noto Sans TC", sans-serif;
}
.fa, .far, .fas {
  font-family: "Font Awesome 5 Free";
}
</style>

<style lang="scss" scoped>
.background {
  background-color: $footer-color;
  min-height: 100vh;
}
#base {
  min-height: 94vh;
  background-color: $default-background-color;
}
</style>
