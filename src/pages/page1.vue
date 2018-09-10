<template>
  <div class="page1" @click="clickHandle('test click', $event)">
    <i-row class="title-container">
      <i-col span="24">
        <div class="content">this is page1</div>
      </i-col>
    </i-row>

    <i-panel class="form-container" title="基础表单">
      <i-input v-model="username" title="用户名" autofocus placeholder="请输入用户名" />
      <i-input v-model="password" type="password" title="密码" placeholder="请输入密码" />
    </i-panel>

    <i-button type="primary" @click="onClick">前往page2</i-button>

    <div class="content">
      当前用户名:{{userInfo.nickName}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue"; // mpvue目前只支持的单文件组件
import { State, Mutation } from "vuex-class";

@Component({
  components: {
    Card
  }
})
export default class Page1 extends Vue {
  private username = "admin";
  private password = "admin";

  @State private userInfo;

  @Mutation private updateUserInfo;

  onClick() {
    // router.push('/pages/news/detail') // 字符串
    // router.push({ path: '/pages/news/detail' })// 对象
    // router.push({ path: '/pages/news/detail', query: { id: 1 } })// 带查询参数，变成 /pages/news/detail?id=1
    // router.push({ path: '/pages/news/list', isTab: true })// 切换至 tabBar 页面
    // router.push({ path: '/pages/news/list', reLaunch: true })// 重启至某页面，无需指定是否为 tabBar 页面，但 tabBar 页面无法携带参数
    // this.$router.push("/page/counter");
    this.$router.push({ path: "/pages/page2", isTab: true }); // 切换至 tabBar 页面
  }

  mounted() {
    this.getUserInfo();
  }

  getUserInfo() {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: res => {
            console.log(res);
            this.updateUserInfo(res.userInfo);
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
.page1 {
  .content {
    padding: 20px;
    text-align: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }
}
</style>
