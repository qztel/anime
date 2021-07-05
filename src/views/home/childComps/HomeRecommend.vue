<template>
  <div class="recommend">
    <div class="new">
      <span>最新更新</span>
      <span class="more-button" @click="gengduo()">更多>></span>
    </div>
    <div class="recommend-video">
      <ul>
        <li v-for="item in gengxin">
          <img :src="item.imgurl" alt="" >
          <div class="updata-text">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      gengxin: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      gengduo() {
        this.$router.push('/video')
      }
    }
  }
</script>

<style scoped>
  .recommend {
    /*margin-top: 50px;*/
    background: rgba(0,0,0,0.5);
    border: 5px solid rgba(255,255,255,1);
    width: 1100px;
    position: relative;
    margin: 15px auto;
  }

  .new {
    border-bottom: 5px solid rgba(255,255,255,1);
    font-size: 20px;
    padding: 10px;
    background: #CCCCCC;
  }
  .new span{
    margin: 40px;
    font-weight: bold;
  }
  .more-button {
    position: relative;
    left: 770px;
  }

  .recommend-video ul{
    display: flex;
    flex-wrap: wrap;
  }
  .recommend-video img{
    width: 300px;
    margin: 20px 33px;
  }

  .updata-text {
    /*width: ;*/
    background: white;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

</style>