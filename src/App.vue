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
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        // sessionStorage.removeItem("store")
      }

        window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
        })
    }

  }
</script>

<style>
  @import "assets/css/base.css";

</style>
