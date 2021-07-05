<template>
  <div id="app">
    <main-tabbar class="main-tabbar"></main-tabbar>

    <router-view></router-view>
    <expand/>
  </div>
</template>

<script>
  import mainTabbar from "./components/content/maintabbar/mainTabbar";
  import Expand from "./components/content/expand/Expand";

  import {getHomeMultidata} from "./network/home";

  export default {
    name: "App",
    components: {
      mainTabbar,
      Expand
    },
    created() {
      if (sessionStorage.getItem("store") ) {
      //页面每次刷新，重新拿取vuex中的数据，这样就可以实现vuex在页面刷新后，数据不丢失等问题
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        // sessionStorage.removeItem("store")
      }

        window.addEventListener("beforeunload",()=>{
        //将vuex中的数据存放在sessionStorage中
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
        })
    }

  }
</script>

<style>
  @import "assets/css/base.css";

</style>
