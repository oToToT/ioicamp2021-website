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
