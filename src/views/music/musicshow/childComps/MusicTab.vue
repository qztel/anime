<template>
  <div id="music-tab">
    <img src="./fanhui.png" alt="">
    <span>音乐标题</span>
  </div>
</template>

<script>
  export default {
    name: "MusicTab"
  }
</script>

<style scoped>
  #music-tab {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #CCCCCC;
    text-align: center;
  }
  #music-tab img {
    height: 40px;
    position: absolute;
    top: 75px;
    left: 40px;
  }
  #music-tab span {
    font-size: 24px;
  }
</style>