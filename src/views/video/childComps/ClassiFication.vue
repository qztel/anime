<template>
  <div id="classfi">
    <div>
      <div class="area-text">按地区/时间</div>
      <div class="area-time">
        <ul >
          <li v-for="item in text1">{{item}}</li>
        </ul>
        <ul >
          <li v-for="item in text1Time">{{item}}</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="area-text">按类型</div>
      <div class="area-time">
        <ul>
          <li v-for="item in text2">{{item}}</li>
        </ul>
        <ul>
          <li v-for="item in text3">{{item}}</li>

        </ul>
      </div>
    </div>


    <div>
      <div class="area-text">按语言</div>
      <div class="area-time">
        <ul>
          <li v-for="item in text4">{{item}}</li>

        </ul>
        <ul>
          <li v-for="item in text5">{{item}}</li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassiFication",
    data () {
      return {
        mark: 0,
        text1: ['日本','大陆','美国','英国'],
        text1Time: ['2020','2019','2018','2017'],
        text2: ['热血','格斗','恋爱','校园','LOLI','神魔','机战','科幻','真人','青春','魔法','美少女'],
        text3: ['神话','冒险','运动','竞技','童话','励志','剧情','社会','后宫','亲子','战争','吸血鬼'],
        text4: ['日语','国语','英语'],
        text5: ['粤语','韩语','方言']
      }
    }
  }
</script>

<style scoped>
  #classfi {
    width: 1000px;
    height: 80px;
    background: rgba(255,255,255,0.9);
    font-size: 14px;
    margin: 0 auto;
    display: flex;
    justify-content:space-around;
  }

  .area-text {
    background: rgba(0,0,0,0.8);
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
  }

  .area-time ul{
    display: flex;
    flex-flow: wrap;
    /*width: 160px;*/
    justify-content:space-around;
    font-size: 15px;
  }



  .area-time ul li{
    margin-right: 16px;
  }

  /*a:hover {*/
  /*  color: pink;*/
  /*}*/
</style>