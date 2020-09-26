<template lang="pug">
.container
  nuxt-section-block(
    v-for="article in articles",
    :id="article.id",
    :document="article",
    :date="true",
    :key="article.id"
  )
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: 'IOICcamp 2021 - 關於我們',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
  },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$content("news").sortBy("prio", "desc").sortBy("createdAt", "desc").fetch();
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: $nav-header-space;
  padding-left: 10vw;
  padding-right: 10vw;
  @include with-mobile {
    padding-top: $mobile-nav-header-space;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .cutter {
    height: 1px;
  }
}
</style>
