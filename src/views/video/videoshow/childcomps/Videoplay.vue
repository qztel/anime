<template>
  <div id="video-play">
    <div class="video-file">
      <div class="yincang" v-show="zhuangtai">
        <div>进行登录以后才可以播放哦~</div>
      </div>
      <video :src="videourl.videourl1" controls="controls" width="1000" height="600" v-show="yincang1"></video>
      <video :src="url" controls="controls" width="1000" height="600" v-show="yincang2"></video>
      <button @click="videoClick(1)">01</button>
      <button @click="videoClick(2)">02</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Videoplay",
    props: {
      videourl: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        url: null,
        yincang1: true,
        yincang2: false
      }
    },
    computed: {
      zhuangtai() {
        return !this.$store.state.zhuangtai
      }
    },
    methods: {
      videoClick(item) {
        this.yincang1 = false
        this.yincang2 = true
        if(item === 1) {
          this.url = this.videourl.videourl1
        }else if(item === 2) {
          this.url = this.videourl.videourl2
        }
      }
    }
  }
</script>

<style scoped>
  #video-play {
    width: 100%;
    /*height: 600px;*/
    /*background: red;*/
    /*position: absolute;*/
  }

  .yincang {
    width: 1000px;
    height: 653px;
    position: absolute;
    background: black;
    z-index: 1;
    color: white;
    font-size: 30px;
  }
  .yincang div{
    text-align: center;
    margin-top: 300px;
  }

  .video-file {
    /*height: 600px;*/
    width: 1000px;
    background: black;
    margin: 0 auto;
  }
  .video-file button {
    font-size: 20px;
    width: 60px;
    height: 30px;
    margin: 10px;
    background: white;
    border-radius: 6px;
  }
</style>