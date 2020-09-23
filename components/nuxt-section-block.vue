<template lang="pug">
.section-block
  h2 {{ document.title }}
  nuxt-content(:document="document")
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    document: {
      type: Object,
      default: {
        title: '',
      },
    },
  },
});
</script>

<style lang="scss">
@include section-block('.nuxt-content');
</style>
