<template>
  <div>
    <div class="music">
      <span>热门音乐</span><br>
      <div class="music-item" v-show="musicdata1">
          <ul>
            <li @click="musicClick(item)" v-for="(item,index) in musicdata.riyu">
              {{index+1+'> '}}{{item.text}}
              <img src="~assets/img/musicimg/bofang.png" alt="">
<!--              <audio :src="item.musicurl" controls="controls"></audio>-->
            </li>
          </ul>
      </div>

      <div class="music-item" v-show="musicdata2">
        <ul>
          <li @click="musicClick(item)" v-for="(item,index) in musicdata.guoyu">
            {{index+1+'> '}}{{item.text}}
            <img src="~assets/img/musicimg/bofang.png" alt="">
<!--            <audio :src="item.musicurl" controls="controls"></audio>-->
          </li>
        </ul>
      </div>

      <div class="music-item" v-show="musicdata3">
        <ul>
          <li @click="musicClick(item)" v-for="(item,index) in musicdata.yingyu">
            {{index+1+'> '}}{{item.text}}
            <img src="~assets/img/musicimg/bofang.png" alt="">
<!--            <audio :src="item.musicurl" controls="controls"></audio>-->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicItem",
    props: {
      musicdata: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    computed: {
      musicdata1() {
        return this.$store.state.musicdata1
      },
      musicdata2() {
        return this.$store.state.musicdata2
      },
      musicdata3() {
        return this.$store.state.musicdata3
      },
    },
    methods: {
      musicClick(item) {
        // console.log(item);
        this.$store.state.musicdetail = item
        // this.$store.state.musictext = item.text
        this.$router.push('./music/musicshow')
        // console.log(this.$store.state.musicurl);
      }
    }
  }
</script>

<style scoped>
  .music {
    width: 800px;
    /*background: red;*/
    margin: 0px auto;
    position: relative;
  }

  .music span {
    width: 780px;
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    padding: 20px 10px;
    background: rgba(255,255,255,1);
    /*border: 5px solid black;*/
    border-bottom: none;

  }

  .music-item {
    width: 100%;
    background: #CCCCCC;
    /*border: 5px solid black;*/
  }
  .music-item li {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.8);
    margin-top: 8px;
    padding: 10px 10px;
    /*line-height: 40px;*/
    display: flex;
  }
  .music-item li:hover{
    background: #aaaaaa;
  }
  .music-item img{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 50px;
    margin-top: 4px;
  }
  /*.music-item audio{*/
  /*  width: 250px;*/
  /*  !*height: 40px;*!*/
  /*  position: absolute;*/
  /*  right: 0px;*/
  /*  margin-top: 4px;*/
  /*}*/

</style>