<template lang="pug">
.container
  h1.title
    i.fas.fa-dragon
    | &nbsp;師資陣容
  .teachers
    .teacher(v-for="teacher in teachers", :key="teacher.slug")
      .image
        img(:src="teacher.image")
      .intro
        h3.name {{ teacher.name }}
        .experience
          ul(v-for="experience in teacher.experiences", :key="experience")
            li {{ experience }}
  .cutter
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IOICcamp 2021 - 集訓內容",
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
      teachers: [],
    };
  },
  async fetch() {
    this.teachers = await this.$content("teachers").fetch();
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
  h1.title {
    color: #ffe300;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;

    font-weight: 300;
  }
  .teachers {
    padding-left: 2vw;
    padding-right: 2vw;
    .teacher {
      display: flex;
      background-color: white;
      padding: 20px 20px;
      margin: 20px 0;
      .intro {
        width: 70%;
        padding: 15px 20px;
        .name {
          font-size: 1.5em;
        }
        .experience {
          & > ul > li {
            font-family: "Noto Serif TC", serif;
          }
          margin-top: 10px;
          font-size: 1.1em;
        }
      }
      .image {
        width: 30%;
        &::before {
          content: "";
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }
        img {
          max-width: 100%;
          object-fit: contain;
          vertical-align: middle;
          display: inline-block;
        }
      }
      &:first-of-type {
        margin-top: 30px;
      }
      &:last-of-type {
        margin-bottom: 30px;
      }
    }
    .teacher:nth-child(odd) {
      flex-direction: row-reverse;
    }
    .teacher:nth-child(even) {
      flex-direction: row;
    }
  }
  .cutter {
    height: 1px;
  }
}
</style>
