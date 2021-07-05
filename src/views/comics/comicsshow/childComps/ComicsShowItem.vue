<template>
  <div id="comics-show-item">
    <span>{{comicsdata.text}}</span>
    <div class="go" @click="houtui()"></div>
      <div class="back" @click="qianjin()"></div>
    <div class="yincang" v-show="!zhuangtai">登陆后才可以观看哦~</div>

    <div class="comics-img">

      <ul>
        <div id="img">
          <li v-for="item in comicsdata.comicsurl" >
            <img :src="item.imgurl" alt="">
          </li>
        </div>
      </ul>
    </div>

    <div class="comics-button">
      <button @click="houtui()">上一页</button>
      <button @click="qianjin()">下一页</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ComicsShowItem",
    props: {
      comicsdata: {
        type: Object,
        default() {
          return {}
        }
      },
      length: {
        type: Number
      }
    },
    data() {
      return {
        length1: 1,
        img: null
      }
    },
    methods: {
      qianjin() {
        if(this.length1 != this.length){
          this.length1 = this.length1 + 1
        } else {
          return false
        }


        this.img = document.getElementById('img')
        if(this.length1 >= this.length + 1) {
          return false
        }else {
          img.style.transform += 'translateX(-580px)';
          img.style.transition = 'all 1s ease'
        }
      },
      houtui() {
        if(this.length1 != 1){
          this.length1 = this.length1 - 1
        } else {
          return false
        }
        let img = document.getElementById('img')

        if(this.length1 <= 0) {
          return false
        }else {
          img.style.transform += 'translateX(580px)';
          img.style.transition = 'all 1s ease'
        }
      }
    },
    computed: {
      zhuangtai() {
        return this.$store.state.zhuangtai
      }
    }
  }
</script>

<style scoped>
  #comics-show-item {
    width: 1200px;
    /*height: 800px;*/
    margin: 0 auto;
    background: rgba(255,255,255,0.5);
    position: relative;
    border: 5px solid black;
  }
  #comics-show-item span:first-child {
    font-size: 25px;
    font-weight: bold;

    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;

    background: rgba(0,0,0,1);
    color: white;
  }

  .comics-img {
    width: 1000px;
    height: 850px;

  }
  .comics-img ul {
    width: 580px;

    position: absolute;
    top: 50px;
    left: 25%;
    /*background: red;*/

    overflow: hidden;
  }
  .comics-img ul div{
    display: flex;
    align-items: center;
  }

  .comics-button{
    width: 300px;
    margin: 0 auto;
    /*background: red;*/
    display: flex;
    justify-content: space-around;
  }
  .comics-button button {
    width: 100px;
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    /*margin-left: 20px;*/
  }

  .go {
    width: 300px;
    height: 850px;
    z-index: 1;
    position: absolute;
    left: 25%;
  }
  .back {
    width: 300px;
    height: 850px;
    z-index: 1;
    position: absolute;
    left: 50%;
  }

  .yincang {
    width: 600px;
    height: 850px;
    background: black;
    line-height: 850px;
    z-index: 1;
    position: absolute;
    left: 25%;
    color: white;
    font-size: 25px;
    text-align: center;
  }

</style>