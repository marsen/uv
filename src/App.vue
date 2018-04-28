<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<style lang="css"></style>

<script>
import Vue from "vue";
import MyHeader from "./components/MyHeader.vue";

export default {
  mounted() {
    this.$router.push('navbar');
  },
  components: { MyHeader },
  beforeRouterEnter: function(to, from, next) {
        console.log("beforeRouterEnter to = " + to);
        console.log("beforeRouterEnter to = " + from);
  }
};
</script>