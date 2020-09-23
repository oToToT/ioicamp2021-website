<template>
<Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'None',
})
</script>

<style lang="sass">
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
