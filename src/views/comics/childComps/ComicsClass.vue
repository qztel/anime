<template>
  <div id="comics-class">
      <ul>
        <li v-for="item in comicsClass">{{item}}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "ComicsClass",
    data() {
      return {
        comicsClass: ['正能量','冒险','热血','搞笑','恋爱','少女','纯爱','日常','校园','运动','治愈','橘风','古风','玄幻']
      }
    }
  }
</script>

<style scoped>
  #comics-class {
    width: 100%;
    height: 64px;
    background: black;
    font-size: 23px;
    line-height: 64px;
    color: white;
  }
  #comics-class ul {
    display: flex;
    margin: 0 auto;
    width: 1200px;
    /*background: red;*/
    justify-content: space-around;
  }
</style>