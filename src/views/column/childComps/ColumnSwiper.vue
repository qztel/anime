<template>
  <div class="slide">
    <div class="slideshow">
      <ul>
        <transition-group tag="ul" name="image">
          <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <img :src='img.url'>
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data () {
      return {
        mark: 0,
        imgArray: [
          {url:require('./columnimg/1.jpg')},
          {url:require('./columnimg/2.jpg')},
          {url:require('./columnimg/3.jpg')},
          {url:require('./columnimg/4.jpg')},
          {url:require('./columnimg/5.jpg')}
        ]
      }
    },
    methods: {
      autoPlay () {
        this.mark++;
        if (this.mark === 4) { //当遍历到最后一张图片置零
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      }
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
  .slide {
    width: 900px;
    height: 400px;
    /*margin: 0 auto;*/
    /*margin-top: 50px;*/
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
  .slideshow {
    width: 100%;
    height: 250px;
  }
  li {
    width: 100%;
    position: absolute;
  }
  img {
    width: 100%;
    height: 400px;
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