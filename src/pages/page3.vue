<template>
  <div class="page3" @click="clickHandle('test click', $event)">
    <i-row class="title-container">
      <i-col span="24">
        <div class="content">this is page3</div>
      </i-col>
    </i-row>
    <i-cell-group>
      <i-cell title="只显示箭头" is-link></i-cell>
      <i-cell title="第1行" is-link></i-cell>
      <i-cell title="第2行" is-link></i-cell>
      <i-cell title="第3行" is-link></i-cell>
      <i-cell title="跳转到vuex示例" is-link url="/pages/counter"></i-cell>
    </i-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue"; // mpvue目前只支持的单文件组件

@Component({
  components: {
    Card
  }
})
export default class Page3 extends Vue {
  private motto = "Hello World";
  private userInfo = {};

  bindViewTap() {
    // router.push('/pages/news/detail') // 字符串
    // router.push({ path: '/pages/news/detail' })// 对象
    // router.push({ path: '/pages/news/detail', query: { id: 1 } })// 带查询参数，变成 /pages/news/detail?id=1
    // router.push({ path: '/pages/news/list', isTab: true })// 切换至 tabBar 页面
    // router.push({ path: '/pages/news/list', reLaunch: true })// 重启至某页面，无需指定是否为 tabBar 页面，但 tabBar 页面无法携带参数
    this.$router.push("/page/counter");
  }

  getUserInfo() {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: res => {
            this.userInfo = res.userInfo;
          }
        });
      }
    });
  }

  clickHandle(msg, ev) {
    console.log("clickHandle:", msg, ev);
  }
}
</script>

<style lang="less" scoped>
.page3 {
  .content {
    padding: 20px;
    text-align: center;
  }
}
</style>
