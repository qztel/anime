<template>
    <tabbar>
      <Tabbaritem path="/home">
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/video">
        <div slot="item-text">视频</div>
      </Tabbaritem>
      <Tabbaritem path="/music">
        <div slot="item-text">音乐</div>
      </Tabbaritem>
      <Tabbaritem path="/comics">
        <div slot="item-text">漫画</div>
      </Tabbaritem>
      <Tabbaritem path="/column">
        <div slot="item-text">专栏</div>
      </Tabbaritem>

      <Tabbaritem path="/login" v-show="!denglu">
        <span slot="item-right">登录/注册</span>
      </Tabbaritem>

      <Tabbaritem path="/personalcenter" v-show="denglu">
        <span slot="item-right">个人中心</span>
      </Tabbaritem>
    </tabbar>
</template>

<script>
  import Tabbar from "../../common/tabbar/Tabbar";
  import Tabbaritem from "../../common/tabbar/Tabbaritem";

  export default {
    name: "mainTabbar",
    components: {
      Tabbaritem,
      Tabbar
    },
    data() {
      return {
        geren: false,
        tuichu: false
      }
    },
    computed: {
      denglu() {
        return this.$store.state.zhuangtai
      }
    }
  }
</script>

<style scoped>

</style>