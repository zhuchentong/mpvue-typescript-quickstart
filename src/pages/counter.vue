<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <i-button type="primary" class="home" @click="onClick">去往首页</i-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
// Use Vuex
import store from "@/store";

@Component
export default class Counter extends Vue {
  // computed
  get count() {
    return store.state.count;
  }

  increment() {
    store.commit("increment");
  }

  decrement() {
    store.commit("decrement");
  }
  onClick() {
    this.$router.push("/pages/index");
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
