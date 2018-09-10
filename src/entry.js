import Vue from 'vue'
import App from './index.vue'
import store from '@/store'

Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()
