import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";

Vue.config.productionTip = false

//页面跳转后回到顶部
router.afterEach((to,from,next)=>{

  window.scrollTo(0,0)

})

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios

// step3：使每次请求都会带一个 /api 前缀
Axios.defaults.baseURL = '/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
