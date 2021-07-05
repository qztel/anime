<template>
  <div class="slide">
    <div class="swiper-text">今日热播</div>
    <div class="slideshow">
      <ul>
        <transition-group tag="ul" name="image">
        <li v-for="(img, index) in rebo" v-show="index===mark" :key="index">
            <img :src='img.imgurl'>
        </li>
        </transition-group>
      </ul>
    </div>
    <div class="bar">
      <span v-for="(item, index) in rebo" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>

<script>


  export default {
    name: "Swiper",
    props: {
      rebo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        mark: 0
      }
    },
    methods: {
      //轮播图相关
      autoPlay () {
        this.mark++;
        if (this.mark === this.rebo.length) { //当遍历到最后一张图片置零
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      },
      //网络请求相关


    },
    created () {
      this.play()
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .swiper-text {
    width: 1200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 5px solid pink;
    border-radius: 5px;
  }

  .slide {
    width: 1200px;
    height: 550px;
    margin: 0 auto;
    /*margin-top: 50px;*/
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    position: relative;
    border: 5px solid rgba(255,255,255,0.5);
  }
  .slideshow {
    /*width: 800px;*/
    /*height: 600px;*/
    margin-top: 35px;
  }
  li {
    width: 100%;
    position: absolute;
  }
  img {
    width: 100%;
  height: 400px;
    position: absolute;
    /*left: 10%;*/

  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    /*z-index: 10;*/
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border-radius: 5px;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }

  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>