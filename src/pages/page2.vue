<template>
  <div class="page1" @click="clickHandle('test click', $event)">
    <i-row class="title-container">
      <i-col span="24">
        <div class="content">this is page2</div>
      </i-col>
    </i-row>

    <i-card title="渭川田家" extra="唐 王维">
      <view slot="content">
        <i-row>
          <i-col span="24">
            斜阳照墟落，穷巷牛羊归。
          </i-col>
           <i-col span="24">
            雉雊麦苗秀，蚕眠桑叶稀。
          </i-col>
          <i-col span="24">
            田夫荷锄至，相见语依依。
          </i-col>
          <i-col span="24">
            即此羡闲逸，怅然吟式微。
          </i-col>
        </i-row>
      </view>
    </i-card>

    <i-button type="primary" @click="onClick">前往page3</i-button>
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
export default class Page2 extends Vue {
  private username = "admin";
  private password = "admin";
  private userInfo = {};
  onClick() {
    // router.push('/pages/news/detail') // 字符串
    // router.push({ path: '/pages/news/detail' })// 对象
    // router.push({ path: '/pages/news/detail', query: { id: 1 } })// 带查询参数，变成 /pages/news/detail?id=1
    // router.push({ path: '/pages/news/list', isTab: true })// 切换至 tabBar 页面
    // router.push({ path: '/pages/news/list', reLaunch: true })// 重启至某页面，无需指定是否为 tabBar 页面，但 tabBar 页面无法携带参数
    // this.$router.push("/page/counter");
    this.$router.push({ path: "/pages/page3", isTab: true }); // 切换至 tabBar 页面
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
