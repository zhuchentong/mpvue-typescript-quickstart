<template>
  <div class="counter">
    <div>Vuex counter：{{ count }}</div>
    <div>
      <i-button @click="increment">+</i-button>
      <i-button @click="decrement">-</i-button>
    </div>

    <i-button type="primary" class="home" @click="onClick">去往首页</i-button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component
export default class Counter extends Vue {
  @State private count;
  @State private userInfo;
  @Mutation private increment;

  @Mutation private decrement;

  @Mutation private updateUserInfo;

  onClick() {
    this.updateUserInfo(
      Object.assign({}, this.userInfo, {
        nickName: this.userInfo.nickName + 1
      })
    );

    this.$router.push({
      path: "/pages/page1",
      isTab: true
    });
  }
}
</script>

<style lang="less" scoped>
.counter {
  & > div {
    margin-bottom: 30px;
  }
}
</style>
