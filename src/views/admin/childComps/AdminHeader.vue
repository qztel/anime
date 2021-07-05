<template>
  <div id="err-header">
    <span @click="home()">回到首页</span>
    数据管理
  </div>
</template>

<script>
  export default {
    name: "ErrHeader",
    methods: {
      home() {
        this.$store.state.guanli = false
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
 #err-header {
   width: 100%;
   height: 80px;
   line-height: 80px;
   background: black;
   position: fixed;
   top: 0px;
   z-index: 1;

   font-size: 30px;
   color: white;
   text-align: center;

 }
 #err-header span {
   position: absolute;
   left: 20px;
   font-size: 20px;
 }
</style>