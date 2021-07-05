<template>
  <div class="cate">
    <div class="cate-gory">
      <span v-for="item in text1" @click="cateClick()">
        {{item}}
      </span>
    </div>

    <div class="cate-gory cate-gorya">
      <span v-for="item in text2" @click="cateClick()">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "HomeCateGory",
    data() {
      return {
        text1: ['动漫电影','日本电影','国产动漫','美国动漫'],
        text2: ['剧场版','OVA版','真人版','宣传版']
      }
    },
    methods: {
      cateClick(){
        this.$router.push('/video')
      }
    }
  }
</script>

<style scoped>
  .cate {
    width: 1200px;
    position: relative;
    display: flex;
    margin:  25px auto 0 auto;
    background: #CCCCCC;
    font-size: 16px;
    padding: 5px;
  }


  .cate-gory span{
    margin-right: 15px;
  }

  .cate-gory span:hover {
    color: hotpink;

  }
  .cate-gorya{
    /*background: red;*/
    position: absolute;
    right: 0;
  }
</style>