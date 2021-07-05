<template>
  <div id="music-detail">
    <div class="music-img">
      <div><img src="" alt=""></div>
      <div></div>
    </div>
    <div class="music-detail">
      <div><span>{{musicdetail.text}}</span></div>
      <div><span>歌手姓名</span></div>
      <div><span>来源</span></div>
      <div class="lyrics">
        <p>あの頃の笑顔に問いかける</p>
        <p>想要开口问你，不能相遇的未来，知道是怎么样的吗？</p>
        <p>会えないという未来は 知ってたの？</p>
        <p>而那一刻你脸上所浮现的笑容，让我欲言又止</p>
        <p>赤く染まる空に願いを掛けて</p>
        <p>向着被染红的天空许下的心愿</p>
        <p>思い出胸のアルバム そっと伏せた</p>
        <p>悄悄的将回忆的片段埋藏于心底的相簿里</p>
      </div>

      <div class="music-audio">
        <div class="yincang" v-show="zhuangtai">登陆以后才可以播放哦~</div>
        <audio :src="musicdetail.musicurl" controls="controls"> </audio>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicDetail",
    props: {
      musicdetail: {
        type: Object,
        default() {
          return{}
        }
      }
    },
    computed: {
      zhuangtai() {
        return !this.$store.state.zhuangtai
      }
    }
  }
</script>

<style scoped>
  #music-detail {
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    background: rgba(255,255,255,0.5);
    border: 5px solid grey;
    display: flex;
  }

  .music-img {
    width: 400px;
    height: 100%;
    /*background: black;*/
  }
  .music-img div:first-child {
    width: 250px;
    height: 250px;
    background: white;
    margin: 100px auto;
    border-radius: 150px;
  }

  .music-detail {
    width: 600px;
    height: 100%;
    text-align: center;
    font-size: 16px;
    position: relative;
    /*background: red;*/
  }
  .music-detail div{
    margin-top: 6px;
  }
  .music-detail div:first-child {
    font-size: 25px;
    font-weight: bold;
    margin: 25px 25px;
  }

  .lyrics {
    position: relative;
    top: 10px;
  }
  .lyrics p{
    margin-top: 4px;
  }

  .music-audio audio{
    width: 450px;
  }
  .music-audio {
    position: absolute;
    bottom: 30px;
    left: 15%;
  }

  .yincang {
    width: 450px;
    height: 50px;
    background: black;
    border-radius: 15px;
    position: absolute;
    top: -25px;
    left: -23px;
    z-index: 1;
    color: white;
    line-height: 50px;
  }
</style>