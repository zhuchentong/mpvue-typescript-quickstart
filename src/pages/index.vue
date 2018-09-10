<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <i-button type="primary">这是一个按钮</i-button>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件

@Component({
  components: {
    Card
  }
})
export default class Index extends Vue {
  private motto = 'Hello World'
  private userInfo = {}

  bindViewTap() {
    const url = '/pages/counter'
    wx.navigateTo({ url })
  }

  getUserInfo() {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo
          }
        })
      }
    })
  }

  clickHandle(msg, ev) {
    console.log('clickHandle:', msg, ev)
  }
}

</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
